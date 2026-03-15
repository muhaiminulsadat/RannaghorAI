import {Playfair_Display, Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {Toaster} from "@/components/ui/sonner";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rannaghor",
  description:
    "Your AI-powered Bangla kitchen — discover, create and share recipes",
};

export default function RootLayout({children}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased dark font-sans`}
      >
        <main className="min-h-screen ">{children}</main>
        <Toaster richColors theme="dark" position="top-center" />
      </body>
    </html>
  );
}
