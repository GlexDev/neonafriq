import Container from "@/components/Container";
import StoryCard from "@/components/StoryCard";
import { demoStories } from "@/lib/stories";

export default function ReadPage() {
  return (
    <main>
      <Container className="py-12">
        <h2 className="text-2xl font-bold mb-6">Latest</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {demoStories.map((s) => (
            <StoryCard key={s.id} story={s} />
          ))}
        </div>
      </Container>
    </main>
  );
}
