import type { Metadata } from "next";
import "./globals.css";
import "@/styles/neon.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const runtime = "edge"; // 👈 run everything on Cloudflare Edge

export const metadata: Metadata = {
  title: "neonafriq — Stories in Neon",
  description: "A bold, minimal hub for African stories. Submit by email. Read the latest.",
  metadataBase: new URL("https://neonafriq.pages.dev"),
  openGraph: {
    title: "neonafriq — Stories in Neon",
    description: "A bold, minimal hub for African stories.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "neonafriq — Stories in Neon",
    description: "A bold, minimal hub for African stories.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
