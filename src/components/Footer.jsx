import Link from "next/link";
import {Flame, Github, Twitter, Instagram, Heart} from "lucide-react";

export default function Footer() {
  const links = {
    Product: [
      {label: "My Recipes", href: "/my-recipes"},
      {label: "My Pantry", href: "/my-pantry"},
      {label: "How to Cook?", href: "/how-to-cook"},
      {label: "AI Recipe Generator", href: "/generate"},
    ],
    Company: [
      {label: "About Us", href: "/about"},
      {label: "Blog", href: "/blog"},
      {label: "Careers", href: "/careers"},
      {label: "Contact", href: "/contact"},
    ],
    Legal: [
      {label: "Privacy Policy", href: "/privacy"},
      {label: "Terms of Service", href: "/terms"},
      {label: "Cookie Policy", href: "/cookies"},
    ],
  };

  const socials = [
    {icon: Twitter, href: "https://twitter.com", label: "Twitter"},
    {icon: Instagram, href: "https://instagram.com", label: "Instagram"},
    {icon: Github, href: "https://github.com", label: "GitHub"},
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Flame className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-serif text-xl font-semibold tracking-tight">
                Rannaghor
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Your AI-powered Bangla kitchen. Discover, create and share recipes
              with the world.
            </p>
            <div className="flex items-center gap-2 mt-6">
              {socials.map(({icon: Icon, href, label}) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary hover:text-primary transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <p className="text-sm font-semibold text-foreground mb-4">
                {category}
              </p>
              <ul className="space-y-3">
                {items.map(({label, href}) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Rannaghor. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1.5">
            Made with <Heart className="w-3 h-3 text-primary fill-primary" /> in
            Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
}
