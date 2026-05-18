"use client";

const SLIDERS = [
  { left: "Traditional", right: "Modern", key: "modern" },
  { left: "Serious", right: "Playful", key: "playful" },
  { left: "Accessibility", right: "Luxury", key: "luxury" },
  { left: "Complex", right: "Minimalist", key: "minimalist" },
  { left: "Subtle", right: "Bold", key: "bold" },
];

const LOGO_STYLES = [
  { id: "iconic", label: "Iconic", icon: "◎" },
  { id: "wordmark", label: "Wordmark", icon: "Tt" },
  { id: "abstract", label: "Abstract", icon: "⬡" },
  { id: "mascot", label: "Mascot", icon: "🐾" },
];

interface Props {
  sliders: Record<string, number>;
  setSliders: (v: Record<string, number>) => void;
  logoStyle: string;
  setLogoStyle: (v: string) => void;
}

export default function RightPanel({ sliders, setSliders, logoStyle, setLogoStyle }: Props) {
  return (
    <div style={{
      width: 260, borderLeft: "1px solid var(--border)",
      overflowY: "auto", padding: "20px 16px", flexShrink: 0,
    }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)" }}>BRAND PERSONALITY</p>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)" }} />
      </div>

      {/* Sliders */}
      <div style={{ display: "flex", flexDirection: "column", gap: 18, marginBottom: 24 }}>
        {SLIDERS.map(s => (
          <div key={s.key}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 10, color: "var(--text-muted)", fontWeight: 500 }}>
              <span>{s.left}</span><span>{s.right}</span>
            </div>
            <input type="range" min={0} max={100} value={sliders[s.key] || 50}
              onChange={e => setSliders({ ...sliders, [s.key]: +e.target.value })}
              style={{ width: "100%", accentColor: "var(--accent)", cursor: "pointer", height: 3 }}
            />
          </div>
        ))}
      </div>

      <div style={{ borderTop: "1px solid var(--border)", paddingTop: 20, marginBottom: 20 }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 12 }}>Logo Style</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          {LOGO_STYLES.map(s => (
            <button key={s.id} onClick={() => setLogoStyle(s.id)} style={{
              background: logoStyle === s.id ? "rgba(200,255,0,0.1)" : "var(--bg-card2)",
              border: `1px solid ${logoStyle === s.id ? "var(--accent)" : "var(--border)"}`,
              borderRadius: 8, padding: "10px 8px", cursor: "pointer",
              display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
              transition: "all 0.15s",
            }}>
              <span style={{ fontSize: 16, color: logoStyle === s.id ? "var(--accent)" : "var(--text-muted)" }}>{s.icon}</span>
              <span style={{ fontSize: 11, fontWeight: 600, color: logoStyle === s.id ? "var(--accent)" : "var(--text-muted)" }}>{s.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* AI Suggestions */}
      <div style={{ borderTop: "1px solid var(--border)", paddingTop: 20, marginBottom: 20 }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 12 }}>AI Suggestions</p>
        <div style={{ background: "var(--bg-card2)", border: "1px solid var(--border)", borderRadius: 8, padding: 12 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
            <span style={{ color: "var(--accent)", fontSize: 14 }}>💡</span>
            <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.5 }}>
              Try increasing contrast for better accessibility in dark mode.
            </p>
          </div>
          <button style={{ fontSize: 11, color: "var(--accent)", background: "none", border: "none", cursor: "pointer", fontWeight: 600 }}>Apply Fix →</button>
        </div>
      </div>

      {/* View Versions */}
      <button style={{
        width: "100%", background: "var(--bg-card2)", border: "1px solid var(--border)",
        borderRadius: 8, padding: "11px", color: "var(--text)",
        fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: 13, cursor: "pointer",
      }}>
        View Versions (3)
      </button>
    </div>
  );
}
