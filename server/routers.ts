import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createSignup, getSignupByEmail } from "./db";
import { TRPCError } from "@trpc/server";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  signup: router({
    submit: publicProcedure
      .input(
        z.object({
          email: z.string().email("Please enter a valid email address"),
        })
      )
      .mutation(async ({ input }) => {
        const { email } = input;

        // Check if email already exists
        const existing = await getSignupByEmail(email);
        if (existing) {
          throw new TRPCError({
            code: "CONFLICT",
            message: "This email is already registered for early access",
          });
        }

        // Create signup
        await createSignup(email);

        return {
          success: true,
          message: "Thanks for signing up! We'll notify you when we launch.",
        };
      }),
  }),
});

export type AppRouter = typeof appRouter;
