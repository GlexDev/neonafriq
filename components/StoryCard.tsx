import { Story } from "@/lib/stories";

export default function StoryCard({ story }: { story: Story }) {
  return (
    <article className="rounded-2xl bg-card/80 border border-white/10 p-4 hover:shadow-neon transition-shadow">
      <h3 className="text-lg font-semibold mb-1">{story.title}</h3>
      <p className="text-white/70 text-sm mb-3 line-clamp-3">{story.summary}</p>
      <div className="flex items-center justify-between text-xs text-white/60">
        <span>{story.tag}</span>
        <time dateTime={story.date}>{new Date(story.date).toLocaleDateString()}</time>
      </div>
    </article>
  );
}
