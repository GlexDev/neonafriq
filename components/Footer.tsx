import Container from "./Container";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <Container className="py-8 text-sm text-white/60 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} neonafriq · All rights reserved.</p>
        <p className="opacity-80">Made for African stories — bold, bright, and true.</p>
      </Container>
    </footer>
  );
}
