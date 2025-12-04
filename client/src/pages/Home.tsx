import { KitSignup } from "@/components/KitSignup";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="container flex flex-col items-center justify-center min-h-screen px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Title */}
          <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tight leading-none">
            INTELLIGENT
            <br />
            THEFT
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl font-bold text-muted-foreground uppercase tracking-wide">
            The Podcast
          </p>

          {/* Tagline */}
          <div className="space-y-4 pt-8">
            <p className="text-3xl md:text-5xl font-bold leading-tight">
              Steal What Works.
              <br />
              Build What Matters.
            </p>
          </div>
          {/* Description */}
          <div className="max-w-2xl mx-auto space-y-4 pt-8">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Watch operators tear down strategies, build workflows live, and give away what's actually working.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              No script. No theory. Just real tactics you can steal today.
            </p>
          </div>

          {/* Early Access Form */}
          <div className="pt-2">
            <KitSignup />
          </div>

          {/* Footer Tagline */}
          <div className="pt-16">
            <p className="text-sm text-muted-foreground uppercase tracking-widest">
              The best operators don't invent. They steal.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
