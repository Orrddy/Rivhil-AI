"use client";
import { useState } from "react";
import Link from "next/link";

const LOGO_STYLES = [
  { id: "iconic", label: "Iconic", icon: "◎" },
  { id: "wordmark", label: "Wordmark", icon: "Tt" },
  { id: "abstract", label: "Abstract", icon: "⬡" },
  { id: "mascot", label: "Mascot", icon: "🐾" },
];

const SLIDERS = [
  { left: "Traditional", right: "Modern", key: "modern" },
  { left: "Serious", right: "Playful", key: "playful" },
  { left: "Luxury", right: "Accessible", key: "accessible" },
  { left: "Bold", right: "Subtle", key: "subtle" },
  { left: "Corporate", right: "Human", key: "human" },
  { left: "Minimal", right: "Expressive", key: "expressive" },
];

function getArchetype(vals: Record<string, number>) {
  const human = vals.human ?? 90;
  const modern = vals.modern ?? 80;
  const playful = vals.playful ?? 50;
  if (human > 70 && playful > 50) return { name: "The Curator", tags: ["MODERN", "PLAYFUL", "HUMAN"] };
  if (modern > 70) return { name: "The Rebel", tags: ["MODERN", "BOLD", "EXPRESSIVE"] };
  if ((vals.subtle ?? 50) > 60) return { name: "The Architect", tags: ["MINIMAL", "MODERN", "PRECISE"] };
  return { name: "The Guardian", tags: ["TRUSTED", "HUMAN", "CLEAR"] };
}

export default function WorkspacePage() {
  const [brandName, setBrandName] = useState("");
  const [industry, setIndustry] = useState("");
  const [product, setProduct] = useState("");
  const [audience, setAudience] = useState("");
  const [differentiation, setDifferentiation] = useState("");
  const [competitors, setCompetitors] = useState("");
  const [logoStyle, setLogoStyle] = useState("iconic");
  const [sliders, setSliders] = useState<Record<string, number>>({
    modern: 80, playful: 50, accessible: 30, subtle: 40, human: 90, expressive: 20,
  });

  const archetype = getArchetype(sliders);

  const previewName = brandName || "GLOSSD";
  const previewInitial = previewName.charAt(0).toUpperCase();

  return (
    <div style={{ display: "flex", height: "100%", overflow: "hidden" }}>

      {/* Main scrollable content */}
      <div style={{ flex: 1, overflowY: "auto", padding: "clamp(24px, 4vw, 48px) clamp(16px, 5vw, 60px)" }}>

        {/* Basics */}
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(24px, 5vw, 36px)", marginBottom: 8 }}>
            Let's start with the basics.
          </h2>
          <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 32 }}>
            Tell us the core identifier of your upcoming brand venture.
          </p>
          <div className="grid-2">
            <div>
              <label style={labelStyle}>BRAND NAME</label>
              <input value={brandName} onChange={e => setBrandName(e.target.value)}
                placeholder="e.g. Glossd" style={inputStyle}
                onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                onBlur={e => (e.target.style.borderColor = "var(--border)")} />
            </div>
            <div>
              <label style={labelStyle}>INDUSTRY</label>
              <input value={industry} onChange={e => setIndustry(e.target.value)}
                placeholder="e.g. Sustainable Skincare" style={inputStyle}
                onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                onBlur={e => (e.target.style.borderColor = "var(--border)")} />
            </div>
          </div>
        </div>

        {/* Building */}
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(24px, 5vw, 36px)", marginBottom: 8 }}>
            Tell us what you're building.
          </h2>
          <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 32 }}>
            The deeper the detail, the more accurate the AI generation will be.
          </p>
          <div className="grid-2">
            {[
              { label: "THE PRODUCT", val: product, set: setProduct, placeholder: "What are you offering?" },
              { label: "TARGET AUDIENCE", val: audience, set: setAudience, placeholder: "Who are you selling to?" },
              { label: "DIFFERENTIATION", val: differentiation, set: setDifferentiation, placeholder: "What makes you unique?" },
              { label: "TOP COMPETITORS", val: competitors, set: setCompetitors, placeholder: "Who else is in the space?" },
            ].map(f => (
              <div key={f.label}>
                <label style={labelStyle}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)}
                  placeholder={f.placeholder} rows={4}
                  style={{ ...inputStyle, resize: "none", lineHeight: 1.6 } as React.CSSProperties}
                  onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                  onBlur={e => (e.target.style.borderColor = "var(--border)")} />
              </div>
            ))}
          </div>
        </div>

        {/* Personality */}
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(24px, 5vw, 36px)", marginBottom: 8 }}>
            Define how your brand feels.
          </h2>
          <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 32 }}>
            Set the emotional tone for your visual and verbal identity.
          </p>
          <div className="personality-grid">
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {SLIDERS.map(s => (
                <div key={s.key}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: 12, color: "var(--text-muted)", fontWeight: 500 }}>
                    <span>{s.left}</span><span>{s.right}</span>
                  </div>
                  <input type="range" min={0} max={100} value={sliders[s.key] ?? 50}
                    onChange={e => setSliders({ ...sliders, [s.key]: +e.target.value })}
                    style={{ width: "100%", accentColor: "var(--accent)", cursor: "pointer" }} />
                </div>
              ))}
            </div>

            {/* Archetype card */}
            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: 24, height: "fit-content" }}>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: 12 }}>CURRENT ARCHETYPE</p>
              <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 20, marginBottom: 12 }}>{archetype.name}</h3>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
                {archetype.tags.map(t => (
                  <span key={t} style={{ fontSize: 9, fontWeight: 700, padding: "3px 8px", background: "var(--accent)", color: "#000", borderRadius: 4, letterSpacing: "0.05em" }}>{t}</span>
                ))}
              </div>
              <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.6 }}>
                Your brand feels approachable, forward-thinking, and deeply connected to its community.
              </p>
            </div>
          </div>
        </div>

        {/* Logo style */}
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(24px, 5vw, 36px)", marginBottom: 8 }}>Logo style.</h2>
          <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 32 }}>Set the emotional tone for your logo.</p>
          <div className="onboard-logo-grid" style={{ maxWidth: 500 }}>
            {LOGO_STYLES.map(s => (
              <button key={s.id} onClick={() => setLogoStyle(s.id)} style={{
                background: logoStyle === s.id ? "rgba(200,255,0,0.1)" : "var(--bg-card)",
                border: `2px solid ${logoStyle === s.id ? "var(--accent)" : "var(--border)"}`,
                borderRadius: 10, padding: "20px 12px", cursor: "pointer",
                display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
                transition: "all 0.2s",
              }}>
                <span style={{ fontSize: 20, color: logoStyle === s.id ? "var(--accent)" : "var(--text-muted)" }}>{s.icon}</span>
                <span style={{ fontSize: 12, fontWeight: 600, color: logoStyle === s.id ? "var(--accent)" : "var(--text-muted)" }}>{s.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Generate CTA */}
        <div style={{ display: "flex", justifyContent: "center", paddingBottom: 48 }}>
          <Link href="/generating" style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "var(--accent)", color: "#000",
            fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: 15,
            padding: "16px 48px", borderRadius: 10, textDecoration: "none",
            letterSpacing: "0.02em",
          }}>
            ⟳ GENERATE BRAND IDENTITY
          </Link>
        </div>
      </div>

      {/* Right live preview panel */}
      <div style={{
        width: 280, borderLeft: "1px solid var(--border)",
        overflowY: "auto", padding: "24px 20px", flexShrink: 0,
        background: "#060918",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "var(--text-muted)", textTransform: "uppercase" }}>LIVE PREVIEW</p>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)" }} />
        </div>

        {/* Core Identity */}
        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 10, padding: 16, marginBottom: 12 }}>
          <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: 12 }}>CORE IDENTITY</p>
          <div style={{
            background: "#0a0a0a", borderRadius: 8, padding: "16px",
            display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 4,
          }}>
            <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 22, letterSpacing: "-0.02em" }}>
              {previewName}
              <span style={{ fontSize: 10, color: "var(--text-muted)", marginLeft: 4, fontWeight: 400 }}>™</span>
            </span>
          </div>
        </div>

        {/* Color Palette */}
        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 10, padding: 16, marginBottom: 12 }}>
          <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: 12 }}>COLOR PALETTE</p>
          <div style={{ display: "flex", gap: 8 }}>
            {[
              { hex: "#c8ff00", light: false },
              { hex: "#ffffff", light: false },
              { hex: "#1a2a4a", light: true },
              { hex: "#f0f0f0", light: false },
            ].map(c => (
              <div key={c.hex} style={{ width: 36, height: 36, borderRadius: 8, background: c.hex, border: c.light ? "1px solid var(--border)" : "none" }} />
            ))}
          </div>
        </div>

        {/* Typography */}
        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 10, padding: 16, marginBottom: 12 }}>
          <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: 12 }}>TYPOGRAPHY</p>
          <p style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 18, marginBottom: 4 }}>Syne ExtraBold</p>
          <p style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 8 }}>Display / Heading</p>
          <p style={{ fontSize: 13 }}>DM Sans Regular</p>
          <p style={{ fontSize: 11, color: "var(--text-muted)" }}>Body / Content</p>
        </div>

        {/* Personality */}
        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 10, padding: 16, marginBottom: 12 }}>
          <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: 12 }}>PERSONALITY</p>
          {[
            { label: "Modernist", val: sliders.modern ?? 80 },
            { label: "Human-Centric", val: sliders.human ?? 90 },
          ].map(p => (
            <div key={p.label} style={{ marginBottom: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                <span style={{ fontSize: 12 }}>{p.label}</span>
                <span style={{ fontSize: 12, color: "var(--accent)", fontWeight: 700 }}>{p.val}%</span>
              </div>
              <div style={{ height: 3, background: "var(--border)", borderRadius: 2 }}>
                <div style={{ width: `${p.val}%`, height: "100%", background: "var(--accent)", borderRadius: 2, transition: "width 0.3s" }} />
              </div>
            </div>
          ))}
        </div>

        {/* Tone of Voice */}
        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 10, padding: 16 }}>
          <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: 12 }}>TONE OF VOICE</p>
          <p style={{ fontSize: 12, color: "var(--text-muted)", fontStyle: "italic", lineHeight: 1.6 }}>
            "Confident, clear, and unpretentious. We speak to the user as a peer, not a customer."
          </p>
        </div>
      </div>
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block", fontSize: 11, fontWeight: 700,
  letterSpacing: "0.08em", textTransform: "uppercase",
  color: "var(--text-muted)", marginBottom: 8,
};

const inputStyle: React.CSSProperties = {
  width: "100%", background: "var(--bg-card2)",
  border: "1px solid var(--border)", borderRadius: 8,
  padding: "14px 16px", color: "var(--text)",
  fontFamily: "DM Sans, sans-serif", fontSize: 14, outline: "none",
};
