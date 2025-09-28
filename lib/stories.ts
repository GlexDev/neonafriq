export type Story = {
  id: string;
  title: string;
  summary: string;
  tag: string; // category or region
  date: string;
};

export const demoStories: Story[] = [
  {
    id: "1",
    title: "Solar Hubs Power Night Markets in Accra",
    summary: "A network of micro‑grids is lighting up small businesses, turning evenings into prime trading hours.",
    tag: "Energy",
    date: "2025-09-20",
  },
  {
    id: "2",
    title: "Lagos Creators Build Neon Alley Pop‑Ups",
    summary: "Pop‑up art alleys blend Benin Bronze motifs with synthwave palettes for weekend crowds.",
    tag: "Culture",
    date: "2025-09-18",
  },
  {
    id: "3",
    title: "Kigali’s e‑Mobility Routes Hit New Milestone",
    summary: "With 10k daily riders, battery swap kiosks become the city’s new convenience points.",
    tag: "Mobility",
    date: "2025-09-15",
  },
];
