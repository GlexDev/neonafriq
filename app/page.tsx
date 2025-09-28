
"use client";

import { useMemo, useState } from "react";

/** ---------------- Demo data (replace later with your API) ---------------- */
type Item = {
  id: string;
  title: string;
  url: string;
  source: string;
  summary?: string;
  topic?: "politics" | "economy" | "tech" | "sports" | "general";
  region?: string;
  published_at: number; // epoch ms
};

const DEMO_FEED: Item[] = [
  { id: "1", title: "CBN unveils new FX window to stabilize Naira", url: "https://example.com/naira-cbn", source: "Premium Times", summary: "Central Bank introduces measures to improve liquidity and stabilize FX rates.", topic: "economy", region: "ng", published_at: Date.now() - 10 * 60 * 1000 },
  { id: "2", title: "TechCabal launches accelerator for fintech founders", url: "https://example.com/techcabal-accelerator", source: "TechCabal", summary: "Early-stage program targets founders building payment and credit infrastructure.", topic: "tech", region: "ng", published_at: Date.now() - 35 * 60 * 1000 },
  { id: "3", title: "Super Eagles announce friendlies ahead of AFCON qualifiers", url: "https://example.com/super-eagles-friendlies", source: "Guardian NG", summary: "National team to play two matches in preparation for the qualifiers.", topic: "sports", region: "ng", published_at: Date.now() - 2 * 60 * 60 * 1000 },
  { id: "4", title: "Senate debates electoral reforms for diaspora voting", url: "https://example.com/diaspora-vote", source: "Punch", summary: "Lawmakers consider frameworks to enable secure voting for Nigerians abroad.", topic: "politics", region: "ng", published_at: Date.now() - 4 * 60 * 60 * 1000 },
  { id: "5", title: "Nairametrics: inflation cools slightly as food prices ease", url: "https://example.com/inflation-nairametrics", source: "Nairametrics", summary: "Headline inflation slows for the first time in months, led by staples.", topic: "economy", region: "ng", published_at: Date.now() - 7 * 60 * 60 * 1000 },
  { id: "6", title: "NigeriaStories weekly wrap — business & policy highlights", url: "https://example.com/nigeriastories-weekly", source: "NigeriaStories", summary: "A quick roundup of the week’s most important headlines.", topic: "general", region: "ng", published_at: Date.now() - 9 * 60 * 60 * 1000 },
  { id: "7", title: "New subsea cable promises faster internet to West Africa", url: "https://example.com/cable", source: "TechCabal", summary: "Consortium deploys high-capacity link landing in Lagos.", topic: "tech", region: "wa", published_at: Date.now() - 13 * 60 * 60 * 1000 }
];

function timeAgo(ms: number) {
  const s = Math.max(1, Math.floor((Date.now() - ms) / 1000));
  if (s < 60) return `${s}s`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h`;
  return `${Math.floor(h / 24)}d`;
}

export default function Page() {
  const [tab, setTab] = useState<"feed" | "submit">("feed");
  const [q, setQ] = useState("");
  const [topic, setTopic] = useState("");
  const [source, setSource] = useState("");
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 4;

  const { items, hasMore } = useMemo(() => {
    const rows = DEMO_FEED
      .filter((x) => !q || x.title.toLowerCase().includes(q.toLowerCase()))
      .filter((x) => !topic || x.topic === (topic as Item["topic"]))
      .filter((x) => !source || x.source === source)
      .sort((a, b) => b.published_at - a.published_at);
    const slice = rows.slice(0, page * PAGE_SIZE);
    return { items: slice, hasMore: slice.length < rows.length };
  }, [q, topic, source, page]);

  const allSources = useMemo(() => {
    const s = Array.from(new Set(DEMO_FEED.map((x) => x.source)));
    s.sort();
    return s;
  }, []);

  return (
    <main>
      <div className="wrap">
        {/* Header */}
        <header>
          <div className="brand">
            <div className="logo" />
            <div className="title">
              <h1>NeonAfriq</h1>
              <div className="sub">Text-only stream • Links back to original sources</div>
            </div>
          </div>
          <nav className="tabs">
            <button className={`tab ${tab === "feed" ? "active" : ""}`} onClick={() => setTab("feed")}>Feed</button>
            <button className={`tab ${tab === "submit" ? "active" : ""}`} onClick={() => setTab("submit")}>Submit</button>
          </nav>
        </header>

        {/* Ticker */}
        <div className="ticker" aria-hidden="true">
          <div className="tickerLine">
            <span><b>Live:</b> Stories update every few minutes</span>
            <span><b>Tip:</b> Use filters to find topics fast</span>
            <span><b>Submit:</b> Email stories@neonafriq.com</span>
            <span><b>Note:</b> We always link to original sources</span>
            <span><b>Live:</b> Stories update every few minutes</span>
            <span><b>Tip:</b> Use filters to find topics fast</span>
            <span><b>Submit:</b> Email stories@neonafriq.com</span>
            <span><b>Note:</b> We always link to original sources</span>
          </div>
        </div>

        {/* FEED */}
        {tab === "feed" && (
          <>
            <h2 className="page">Latest Stories</h2>
            <p className="lead">Fast, modern, link-back feed for Nigeria & Africa.</p>

            <div className="controls">
              <div className="ctrl">
                <input value={q} onChange={(e) => { setPage(1); setQ(e.target.value); }} placeholder="Search title…" />
              </div>
              <div className="ctrl">
                <select value={topic} onChange={(e) => { setPage(1); setTopic(e.target.value); }}>
                  <option value="">All topics</option>
                  <option>politics</option>
                  <option>economy</option>
                  <option>tech</option>
                  <option>sports</option>
                  <option>general</option>
                </select>
              </div>
              <div className="ctrl">
                <select value={source} onChange={(e) => { setPage(1); setSource(e.target.value); }}>
                  <option value="">All sources</option>
                  {allSources.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
            </div>

            <div className="list">
              {items.map((it) => (
                <a key={it.id} className="card" href={it.url} target="_blank" rel="noopener nofollow">
                  <div className="cardBody">
                    <div className="meta">
                      <span className="pill">{it.source}</span>
                      <span className="time">{timeAgo(it.published_at)}</span>
                      {it.topic && <span className="pill" style={{ borderColor: "#274f3b" }}>{it.topic}</span>}
                    </div>
                    <h3>{it.title}</h3>
                    {it.summary && <p>{it.summary}</p>}
                  </div>
                </a>
              ))}
            </div>

            {/* Sponsor slot */}
            <div style={{ marginTop: 14 }}>
              <div className="sponsor">Sponsored — <b>Your brand here</b>. Reach diaspora readers with a clean, text-first placement.</div>
            </div>

            {hasMore && (
              <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
                <button className="cta" onClick={() => setPage((p) => p + 1)}>Load more</button>
              </div>
            )}
          </>
        )}

        {/* SUBMIT */}
        {tab === "submit" && (
          <>
            <h2 className="page">Submit a Story</h2>
            <p className="lead">We welcome story tips, press releases, and reports.</p>

            <div className="panel">
              <h3 style={{ marginTop: 0 }}>How to submit</h3>
              <ul className="clean">
                <li>Email your story to: <strong>stories@neonafriq.com</strong></li>
                <li>Include: <em>title</em>, <em>source</em>, a short <em>summary</em>, and the <em>link</em> (if already published online).</li>
                <li>Attachments (optional): photos/files up to 10MB.</li>
              </ul>

              <h3>Notes</h3>
              <ul className="clean">
                <li>We do not accept paid posts via this address.</li>
                <li>Stories are reviewed by our editorial team.</li>
                <li>If accepted, your item will appear with credit and a link to the original.</li>
              </ul>

              <a className="cta" href="mailto:stories@neonafriq.com">Email stories@neonafriq.com</a>
            </div>
          </>
        )}

        <footer>© {new Date().getFullYear()} NeonAfriq • Built for diaspora readers • Always links back to source.</footer>
      </div>

      {/* Styles */}
      <style jsx global>{`
        :root{
          --bg:#05060b; --panel:#0b0f1a; --muted:#c8d1c7; --text:#f4f1e1;
          --neon:#00ff90; --neon-soft:#aefad9; --bd:#253144;
          --pill-bd:#0f5130; --pill-bg:#062a19; --pill-text:#aff9d9;
          --radius:18px; --shadow:0 18px 40px rgba(0,255,144,.10);
        }
        html, body{
          background:
            radial-gradient(1100px 700px at 120% -10%, #0a101c 0, transparent 60%),
            linear-gradient(180deg, #06090f, #0a0f1f);
          color: var(--text);
          font-family: Inter, system-ui, Segoe UI, Roboto, Arial;
          margin: 0;
        }
        a { color: inherit; text-decoration: none; }
      `}</style>

      <style jsx>{`
        .wrap{ max-width:1100px; margin:0 auto; padding:24px; }

        header{ display:flex; align-items:center; justify-content:space-between; margin-bottom:12px; gap:16px; }
        .brand{ display:flex; align-items:center; gap:14px; }
        .logo{
          width:60px; height:60px; border-radius:16px; flex:0 0 60px;
          background: conic-gradient(from 0deg, var(--neon), var(--neon-soft), var(--neon));
          box-shadow: 0 0 26px #00ff9040, 0 0 48px #00ff901f; position:relative;
        }
        .logo:after{ content:""; position:absolute; inset:3px; border-radius:12px; background:#08121b; box-shadow: inset 0 0 30px #00ff9024; }
        .title h1{ font-size:22px; line-height:1.1; margin:0; font-weight:800; letter-spacing:.2px; }
        .title .sub{ margin:2px 0 0; color:var(--muted); font-size:13px; }

        .tabs{ display:flex; gap:10px; flex-wrap:wrap; }
        .tab{
          border:1px solid var(--bd); padding:9px 14px; border-radius:12px; background:#0b1324; cursor:pointer; font-weight:600;
        }
        .tab.active{ box-shadow:0 0 0 2px #00ff9028; }
        .tab:hover{ box-shadow:0 0 0 2px #00ff9028; }

        .ticker{ margin:6px 0 14px; border:1px solid var(--bd); border-radius:14px; background:#0b1324; overflow:hidden; }
        .tickerLine{ display:flex; gap:30px; white-space:nowrap; animation:t 36s linear infinite; padding:8px 18px; color:#cfe7db; }
        .tickerLine b{ color:var(--neon); font-weight:600; }
        @keyframes t{ from { transform: translateX(0) } to { transform: translateX(-50%) } }

        .page{ font-size: clamp(24px, 3.8vw, 40px); margin: 8px 0 0; }
        .lead{ color: var(--muted); margin: 6px 0 16px; }

        .controls{ display:flex; gap:10px; flex-wrap:wrap; margin: 10px 0 16px; }
        .ctrl{ flex: 1 1 220px; }
        .ctrl input, .ctrl select{
          width:100%; padding:12px 12px; border:1px solid var(--bd); background:#0b1324; color:var(--text); border-radius:12px;
        }
        .ctrl input:focus, .ctrl select:focus{ outline:none; box-shadow:0 0 0 3px #00ff9030; border-color:#164e63; }

        .list{ display:grid; gap:12px; }
        @media (min-width: 740px) { .list{ grid-template-columns: 1fr 1fr; } }

        .card{
          border:1px solid var(--bd); border-radius:var(--radius);
          background: linear-gradient(180deg, rgba(0,255,144,.06), rgba(255,255,255,.02));
          position:relative; overflow:hidden; transition: transform .12s ease, box-shadow .2s ease;
        }
        .card:before{
          content:""; position:absolute; inset:-1px; border-radius:inherit; padding:1px;
          background: linear-gradient(135deg, var(--neon), var(--neon-soft), var(--neon));
          -webkit-mask:linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite:xor; mask-composite:exclude; opacity:.35; pointer-events:none; z-index:0;
        }
        .card:hover{ box-shadow: var(--shadow); transform: translateY(-1px); }
        .cardBody{ padding:14px; position:relative; z-index:1; }
        .meta{ display:flex; gap:8px; align-items:center; margin-bottom:6px; flex-wrap:wrap; }
        .pill{
          border:1px solid var(--pill-bd); background:var(--pill-bg); color:var(--pill-text);
          border-radius:999px; padding:3px 8px; font-size:11px;
        }
        .time{ font-size:12px; color:#b7c2be; }
        h3{ margin:0 0 6px; font-size:18px; line-height:1.25; }
        p{ margin:0; color:#cfd6d1; }

        .sponsor{
          border:1px dashed #2a764f; background:linear-gradient(180deg, rgba(0,255,144,.08), rgba(255,255,255,.02));
          border-radius:14px; padding:14px; text-align:center; color:#e6fff3;
        }
        .sponsor b{ color: var(--neon); }

        .panel{
          border:1px solid var(--bd); border-radius:var(--radius);
          background: linear-gradient(180deg, rgba(0,255,144,.06), rgba(255,255,255,.02));
          padding:16px;
        }
        .clean{ margin:10px 0 0 18px; }
        .cta{
          display:inline-block; margin-top:10px; border:1px solid var(--bd); background:#0b1324; color:var(--text);
          padding:12px 14px; border-radius:12px; font-weight:600;
        }
        .cta:hover{ box-shadow:0 0 0 2px #00ff9028; }

        footer{ margin:30px 0 8px; color:#9aa7b5; font-size:13px; text-align:center; }
      `}</style>
    </main>
  );
}
