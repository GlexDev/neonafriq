import Link from "next/link";
import Image from "next/image";
import Container from "./Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-bg/60 border-b border-white/10">
      <Container className="flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/neonafriq-logo.svg" alt="neonafriq" width={28} height={28} />
          <span className="font-semibold tracking-wide">neonafriq</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/read" className="hover:text-neonBlue">Read</Link>
          <Link href="/submit" className="hover:text-neonBlue">Submit</Link>
          <a href="https://x.com/GlexNovation" target="_blank" className="rounded-full border border-white/10 px-3 py-1 hover:border-neonBlue hover:text-neonBlue">X</a>
        </nav>
      </Container>
    </header>
  );
}
