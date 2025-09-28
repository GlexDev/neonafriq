import Container from "@/components/Container";

export default function SubmitInfoPage() {
  const email = "hello@neonafriq.com"; // 👈 change to your official email
  return (
    <main>
      <Container className="py-12 max-w-3xl">
        <h2 className="text-2xl font-bold mb-4">Submit a Story (By Email)</h2>
        <p className="text-white/80 mb-6">
          We accept pitches and finished drafts <strong>exclusively by email</strong>. Keep it short, clear, and original. 
          No attachments over 10MB.
        </p>
        <ol className="list-decimal pl-6 space-y-3 text-white/80">
          <li>Subject line: <em>Story Pitch — [Category] — [City/Country]</em></li>
          <li>Include: 2–3 sentence summary, why it matters, any links.</li>
          <li>Add your name (or alias) and a 1‑line bio.</li>
          <li>Images/videos optional; ensure you have the rights.</li>
        </ol>
        <a
          href={`mailto:${email}?subject=Story%20Pitch%20—%20neonafriq`}
          className="mt-8 inline-block rounded-xl border border-neonBlue px-5 py-2.5 text-neonBlue hover:shadow-neon"
        >
          Email your story → {email}
        </a>
        <p className="mt-6 text-xs text-white/60">
          By emailing us, you confirm your content is yours to share and you grant us permission to edit and publish on neonafriq. 
          We’ll never publish your personal contact details.
        </p>
      </Container>
    </main>
  );
}
