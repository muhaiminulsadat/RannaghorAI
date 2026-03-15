import Link from "next/link";
import {
  Flame,
  Sparkles,
  ChefHat,
  ShoppingBasket,
  BookOpen,
  ArrowRight,
  Star,
  Zap,
  Lock,
  Globe,
} from "lucide-react";
import {Button} from "@/components/ui/button";
import {TESTIMONIALS, FEATURES, STATS} from "@/constants/constants";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-15">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% -10%, rgba(249,115,22,0.15) 0%, transparent 70%),
              radial-gradient(ellipse 40% 40% at 80% 50%, rgba(249,115,22,0.05) 0%, transparent 60%)
            `,
          }}
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(249,115,22,0.04) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(249,115,22,0.04) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 100% 40% at 50% 100%, rgba(10,9,7,0.9) 0%, transparent 100%)",
          }}
        />

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-sm font-medium">
              Powered by Advanced AI
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-[1.05] tracking-tight mb-6">
            Your AI-Powered
            <br />
            <span
              className="relative"
              style={{
                background:
                  "linear-gradient(135deg, #f97316 0%, #fb923c 50%, #fbbf24 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Bangla Kitchen
            </span>
          </h1>

          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Discover thousands of recipes, manage your pantry, and let AI guide
            your cooking journey — from Dhaka to your dinner table.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              asChild
              size="lg"
              className="h-13 px-8 text-base bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all duration-200 rounded-xl"
            >
              <Link href="/register">
                Start Cooking Free
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-13 px-8 text-base border-border hover:bg-muted rounded-xl transition-all duration-200"
            >
              <Link href="/my-recipes">
                <BookOpen className="w-4 h-4 mr-2" />
                Browse Recipes
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border/50 p-4 backdrop-blur-sm"
                style={{background: "rgba(255,255,255,0.02)"}}
              >
                <p className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-1">
                  {stat.number}
                </p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(249,115,22,0.04) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-primary text-xs font-medium">
                Everything you need
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Cook smarter, not harder
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Every tool you need to become the chef you always wanted to be.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((feature, i) => (
              <div
                key={feature.title}
                className="group relative rounded-2xl border border-border/60 p-7 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                style={{background: "rgba(255,255,255,0.02)"}}
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(249,115,22,0.06) 0%, transparent 70%)",
                  }}
                />
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div
            className="relative rounded-3xl border border-primary/20 overflow-hidden px-8 sm:px-16 py-20"
            style={{
              background:
                "linear-gradient(135deg, rgba(249,115,22,0.08) 0%, rgba(249,115,22,0.02) 50%, rgba(251,191,36,0.05) 100%)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle, rgba(249,115,22,0.12) 1px, transparent 1px)`,
                backgroundSize: "32px 32px",
              }}
            />
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(249,115,22,0.5), transparent)",
              }}
            />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
                  <Zap className="w-3.5 h-3.5 text-primary" />
                  <span className="text-primary text-xs font-medium">
                    AI-Powered Generation
                  </span>
                </div>
                <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
                  Tell us what you have.
                  <br />
                  <span className="text-primary">
                    We&apos;ll cook the rest.
                  </span>
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed mb-8">
                  Just tell our AI what ingredients you have in your pantry or
                  what cuisine you&apos;re craving. It generates a complete,
                  detailed recipe in seconds — with tips, substitutions and
                  nutritional info.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="h-12 px-7 bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/25 hover:-translate-y-0.5 transition-all duration-200 rounded-xl"
                >
                  <Link href="/register">
                    Try it Free
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>

              <div className="space-y-3">
                {[
                  {
                    label: "Your prompt",
                    text: "I have chicken, tomatoes, onions and some spices. Make me something Bengali.",
                    type: "user",
                  },
                  {
                    label: "Rannaghor AI",
                    text: "Here's a classic Murgi Bhuna recipe for you! Ready in 35 minutes with 6 simple steps...",
                    type: "ai",
                  },
                ].map((msg) => (
                  <div
                    key={msg.type}
                    className={`rounded-2xl p-4 border ${
                      msg.type === "user"
                        ? "border-border/50 ml-8"
                        : "border-primary/20 mr-8"
                    }`}
                    style={{
                      background:
                        msg.type === "user"
                          ? "rgba(255,255,255,0.03)"
                          : "rgba(249,115,22,0.06)",
                    }}
                  >
                    <p className="text-xs font-medium mb-1.5 text-primary/70">
                      {msg.label}
                    </p>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {msg.text}
                    </p>
                  </div>
                ))}
                <div
                  className="rounded-2xl p-4 border border-border/30 mr-8"
                  style={{background: "rgba(255,255,255,0.02)"}}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <p className="text-xs text-muted-foreground">
                      Generated Recipe
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      ["35 min", "Total Time"],
                      ["4", "Servings"],
                      ["420", "Calories"],
                    ].map(([val, label]) => (
                      <div
                        key={label}
                        className="rounded-lg p-2 text-center"
                        style={{background: "rgba(249,115,22,0.08)"}}
                      >
                        <p className="font-serif text-base font-bold text-primary">
                          {val}
                        </p>
                        <p className="text-xs text-muted-foreground">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Loved by home cooks
            </h2>
            <p className="text-muted-foreground text-lg">
              From Dhaka to Chittagong — here&apos;s what our community says.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-border/60 p-7 hover:border-primary/20 transition-all duration-300"
                style={{background: "rgba(255,255,255,0.02)"}}
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 text-primary fill-primary"
                    />
                  ))}
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center">
                    <span className="text-primary text-xs font-semibold">
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Simple, honest pricing
            </h2>
            <p className="text-muted-foreground text-lg">
              Start free. Upgrade when you&apos;re ready.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                name: "Free",
                price: "৳0",
                period: "forever",
                description: "Perfect to get started",
                features: [
                  "5 recipes",
                  "10 pantry items",
                  "Basic recipe search",
                  "Community access",
                ],
                cta: "Get Started Free",
                href: "/register",
                highlighted: false,
              },
              {
                name: "Pro",
                price: "৳299",
                period: "per month",
                description: "For serious home cooks",
                features: [
                  "Unlimited recipes",
                  "Unlimited pantry",
                  "AI recipe generation",
                  "Priority support",
                  "Nutrition tracking",
                  "Ad-free experience",
                ],
                cta: "Start Pro",
                href: "/register?plan=pro",
                highlighted: true,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                  plan.highlighted ? "border-primary/40" : "border-border/60"
                }`}
                style={{
                  background: plan.highlighted
                    ? "linear-gradient(135deg, rgba(249,115,22,0.08) 0%, rgba(249,115,22,0.02) 100%)"
                    : "rgba(255,255,255,0.02)",
                }}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-white text-xs font-medium px-4 py-1.5 rounded-full shadow-lg shadow-primary/30">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <p className="text-sm font-medium text-muted-foreground mb-1">
                    {plan.name}
                  </p>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="font-serif text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      / {plan.period}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2.5 text-sm text-foreground/80"
                    >
                      <div className="w-4 h-4 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full h-11 rounded-xl text-sm font-medium transition-all duration-200 ${
                    plan.highlighted
                      ? "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 hover:-translate-y-0.5"
                      : "bg-muted hover:bg-muted/80 text-foreground border border-border"
                  }`}
                >
                  <Link href={plan.href}>{plan.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className="relative rounded-3xl overflow-hidden px-8 sm:px-16 py-20 text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(249,115,22,0.12) 0%, rgba(249,115,22,0.04) 50%, rgba(251,191,36,0.08) 100%)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(249,115,22,0.15) 0%, transparent 70%)`,
              }}
            />
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(249,115,22,0.6), transparent)",
              }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(249,115,22,0.3), transparent)",
              }}
            />

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-primary/40">
                <Flame className="w-7 h-7 text-white" />
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4 leading-tight">
                Ready to transform
                <br />
                your kitchen?
              </h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
                Join thousands of Bangladeshi home cooks already using Rannaghor
                to cook smarter every day.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="h-13 px-9 text-base bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/35 hover:-translate-y-0.5 transition-all duration-200 rounded-xl"
                >
                  <Link href="/register">
                    Start Cooking Free
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Lock className="w-3.5 h-3.5" />
                  No credit card required
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
