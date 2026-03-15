"use client";

import {useState} from "react";
import Link from "next/link";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {Flame, Eye, EyeOff, Mail, Lock, ArrowRight, Github} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {cn} from "@/lib/utils";
import {toast} from "sonner";
import {useRouter} from "next/navigation";
import {authClient} from "@/lib/auth-client";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const router = useRouter();

  const onSubmit = async (formData) => {
    await authClient.signIn.email(formData, {
      onRequest: () => {
        setIsLoading(true);
      },
      onSuccess: () => {
        toast.success("Welcome back to Rannaghor 🍛");
        router.push("/");
      },
      onError: (ctx) => {
        toast.error(ctx.error.message || "Invalid email or password");
        setIsLoading(false);
      },
    });
  };
  return (
    <div className="min-h-screen bg-background flex">
      <div
        className="hidden lg:flex lg:w-1/2 relative overflow-hidden flex-col justify-between p-12"
        style={{background: "#0a0907"}}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 20% 60%, rgba(249,115,22,0.13) 0%, transparent 70%),
              radial-gradient(ellipse 60% 40% at 90% 10%, rgba(249,115,22,0.07) 0%, transparent 60%)
            `,
          }}
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(249,115,22,0.07) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(249,115,22,0.07) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />

        <div
          className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          style={{background: "linear-gradient(to top, #0a0907, transparent)"}}
        />

        <Link
          href="/"
          className="flex items-center gap-2.5 group w-fit relative z-10"
        >
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30 transition-transform duration-300 group-hover:scale-110">
            <Flame className="w-4 h-4 text-white" />
          </div>
          <span className="font-serif text-xl font-semibold text-white tracking-tight">
            Rannaghor
          </span>
        </Link>

        <div className="relative z-10 space-y-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-xs font-medium">
                AI-Powered Kitchen
              </span>
            </div>
            <h2 className="font-serif text-4xl font-semibold text-white leading-[1.2] mb-4">
              Welcome back to <br />
              your kitchen.
            </h2>
            <p className="text-stone-500 text-sm leading-relaxed max-w-sm">
              Your recipes, your pantry, and your AI cooking assistant — all
              waiting for you.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              {number: "2,400+", label: "Recipes"},
              {number: "98%", label: "Happy Cooks"},
              {number: "50+", label: "Cuisines"},
              {number: "AI", label: "Powered"},
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/5 p-4"
                style={{background: "rgba(255,255,255,0.02)"}}
              >
                <p className="font-serif text-2xl font-semibold text-white mb-0.5">
                  {stat.number}
                </p>
                <p className="text-xs text-stone-500">{stat.label}</p>
              </div>
            ))}
          </div>

          <div
            className="rounded-2xl border border-white/5 p-5"
            style={{background: "rgba(255,255,255,0.02)"}}
          >
            <p className="text-stone-400 text-sm leading-relaxed mb-4 italic">
              &ldquo;Rannaghor completely changed how I cook. The AI suggestions
              are spot on and the recipes feel like home.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                <span className="text-primary text-xs font-semibold">MS</span>
              </div>
              <div>
                <p className="text-white text-xs font-medium">
                  Muhaiminul Sadat
                </p>
                <p className="text-stone-600 text-xs">Home Cook, Dhaka</p>
              </div>
              <div className="ml-auto flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-3 h-3 text-primary fill-primary"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="text-stone-700 text-xs relative z-10">
          © {new Date().getFullYear()} Rannaghor · Made with ♥ in Bangladesh
        </p>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 relative">
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(249,115,22,0.06), transparent)",
          }}
        />

        <div className="w-full max-w-md relative z-10">
          <div className="lg:hidden flex items-center gap-2.5 mb-10">
            <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
              <Flame className="w-4 h-4 text-white" />
            </div>
            <span className="font-serif text-xl font-semibold">Rannaghor</span>
          </div>

          <div className="mb-8">
            <h1 className="font-serif text-[2rem] font-semibold text-foreground leading-tight mb-2">
              Sign in to your account
            </h1>
            <p className="text-muted-foreground text-sm">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Create one free
              </Link>
            </p>
          </div>

          <Button
            variant="outline"
            className="w-full h-12 border-border hover:bg-muted hover:border-primary/30 transition-all duration-200 gap-3 text-sm mb-6 group"
          >
            <Github className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
            Continue with GitHub
          </Button>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-background px-4 text-xs text-muted-foreground tracking-wide">
                or sign in with email
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="space-y-1.5">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-foreground/80"
              >
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/60 pointer-events-none" />
                <Input
                  id="email"
                  type="email"
                  placeholder="sadat@example.com"
                  className={cn(
                    "pl-10 h-12 bg-muted/30 border-border/80 rounded-xl text-sm placeholder:text-muted-foreground/40 focus-visible:ring-primary/30 focus-visible:border-primary/60 transition-all duration-200",
                    errors.email &&
                      "border-destructive/60 focus-visible:border-destructive focus-visible:ring-destructive/20",
                  )}
                  {...register("email")}
                />
              </div>
              {errors.email && (
                <p className="text-destructive text-xs flex items-center gap-1.5 mt-1">
                  <span className="w-1 h-1 rounded-full bg-destructive flex-shrink-0" />
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Label
                  htmlFor="password"
                  className="text-sm font-medium text-foreground/80"
                >
                  Password
                </Label>
                <Link
                  href="/forgot-password"
                  className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/60 pointer-events-none" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Your password"
                  className={cn(
                    "pl-10 pr-11 h-12 bg-muted/30 border-border/80 rounded-xl text-sm placeholder:text-muted-foreground/40 focus-visible:ring-primary/30 focus-visible:border-primary/60 transition-all duration-200",
                    errors.password &&
                      "border-destructive/60 focus-visible:border-destructive focus-visible:ring-destructive/20",
                  )}
                  {...register("password")}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/50 hover:text-foreground transition-colors duration-200"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-destructive text-xs flex items-center gap-1.5 mt-1">
                  <span className="w-1 h-1 rounded-full bg-destructive flex-shrink-0" />
                  {errors.password.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 hover:shadow-primary/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-sm font-medium mt-2"
            >
              {isLoading ? (
                <span className="flex items-center gap-2.5">
                  <span className="w-4 h-4 border-2 border-white/25 border-t-white rounded-full animate-spin" />
                  Signing in...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Sign In
                  <ArrowRight className="w-4 h-4" />
                </span>
              )}
            </Button>
          </form>

          <p className="text-center text-xs text-muted-foreground/60 mt-8 leading-relaxed">
            By signing in you agree to our{" "}
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-primary underline underline-offset-2 transition-colors"
            >
              Terms
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-primary underline underline-offset-2 transition-colors"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
