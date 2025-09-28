import Container from "@/components/Container";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative">
      <div className="absolute inset-0 -z-10 gradient-neon" />
      <Container className="py-20 sm:py-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <span className="size-2 rounded-full bg-neonBlue" />
            Live now · Africa’s neon stories
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight">
            neonafriq
            <span className="block text-white/70 text-xl sm:text-2xl font-semibold mt-2">Bold stories. Minimal noise.</span>
          </h1>
          <p className="mt-6 text-white/80 max-w-prose">
            A clean grid for real stories across the continent — culture, tech, music, mobility, and life. Submissions happen <strong>by email</strong> only. No forms, no spam.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/read" className="rounded-xl border border-white/10 bg-card/70 px-5 py-2.5 hover:shadow-neon">Read Stories</Link>
            <Link href="/submit" className="rounded-xl border border-neonBlue px-5 py-2.5 text-neonBlue hover:shadow-neon">How to Submit</Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
