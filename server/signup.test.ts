import { describe, expect, it, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";
import { getDb } from "./db";
import { signups } from "../drizzle/schema";
import { eq } from "drizzle-orm";

function createContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };
}

describe("signup.submit", () => {
  beforeEach(async () => {
    // Clean up test data before each test
    const db = await getDb();
    if (db) {
      await db.delete(signups).where(eq(signups.email, "test@example.com"));
    }
  });

  it("successfully creates a new signup", async () => {
    const ctx = createContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.signup.submit({
      email: "test@example.com",
    });

    expect(result).toEqual({
      success: true,
      message: "Thanks for signing up! We'll notify you when we launch.",
    });

    // Verify the signup was created in the database
    const db = await getDb();
    if (db) {
      const signup = await db
        .select()
        .from(signups)
        .where(eq(signups.email, "test@example.com"))
        .limit(1);
      
      expect(signup.length).toBe(1);
      expect(signup[0]?.email).toBe("test@example.com");
    }
  });

  it("rejects invalid email format", async () => {
    const ctx = createContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.signup.submit({
        email: "invalid-email",
      })
    ).rejects.toThrow();
  });

  it("rejects duplicate email signup", async () => {
    const ctx = createContext();
    const caller = appRouter.createCaller(ctx);

    // First signup should succeed
    await caller.signup.submit({
      email: "test@example.com",
    });

    // Second signup with same email should fail
    await expect(
      caller.signup.submit({
        email: "test@example.com",
      })
    ).rejects.toThrow("This email is already registered for early access");
  });
});
