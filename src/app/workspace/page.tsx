"use client";
import { useState } from "react";
import RightPanel from "@/components/RightPanel";

const LOGO_STYLES = ["Iconic", "Wordmark", "Abstract", "Mascot"];
const SLIDERS = [
  { left: "Traditional", right: "Modern", key: "modern", val: 80 },
  { left: "Serious", right: "Playful", key: "playful", val: 45 },
  { left: "Accessibility", right: "Luxury", key: "luxury", val: 25 },
  { left: "Complex", right: "Minimalist", key: "minimalist", val: 65 },
  { left: "Subtle", right: "Bold", key: "bold", val: 55 },
];

export default function WorkspacePage() {
  const [brandName, setBrandName] = useState("Lumina");
  const [industry, setIndustry] = useState("Technology & SaaS");
  const [description, setDescription] = useState("We build sustainable lighting solutions for modern smart homes.");
  const [coreValues, setCoreValues] = useState(["Innovative", "Minimalist"]);
  const [newValue, setNewValue] = useState("");
  const [logoStyle, setLogoStyle] = useState("Iconic");
  const [sliders, setSliders] = useState<Record<string, number>>({
    modern: 80, playful: 45, luxury: 25, minimalist: 65, bold: 55,
  });
  const [showPanel, setShowPanel] = useState(true);

  const addValue = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && newValue.trim()) {
      setCoreValues([...coreValues, newValue.trim()]);
      setNewValue("");
    }
  };

  return (
    <div style={{ display: "flex", height: "100%", overflow: "hidden" }}>
      {/* Left inputs panel */}
      <div style={{ width: 260, borderRight: "1px solid var(--border)", overflowY: "auto", padding: "24px 20px", flexShrink: 0 }}>
        <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 15, marginBottom: 4 }}>Brand Inputs</h2>
        <p style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 24, lineHeight: 1.5 }}>Define the core identity to generate assets.</p>

        {/* Brand Name */}
        <div style={{ marginBottom: 20 }}>
          <label style={{ display: "block", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 8 }}>BRAND NAME</label>
          <input value={brandName} onChange={e => setBrandName(e.target.value)} style={{
            width: "100%", background: "var(--bg-card2)", border: "1px solid var(--border)",
            borderRadius: 6, padding: "10px 12px", color: "var(--text)", fontSize: 13,
            fontFamily: "DM Sans, sans-serif", outline: "none",
          }}
            onFocus={e => (e.target.style.borderColor = "var(--accent)")}
            onBlur={e => (e.target.style.borderColor = "var(--border)")}
          />
        </div>

        {/* Industry */}
        <div style={{ marginBottom: 20 }}>
          <label style={{ display: "block", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 8 }}>INDUSTRY</label>
          <select value={industry} onChange={e => setIndustry(e.target.value)} style={{
            width: "100%", background: "var(--bg-card2)", border: "1px solid var(--border)",
            borderRadius: 6, padding: "10px 12px", color: "var(--text)", fontSize: 13,
            fontFamily: "DM Sans, sans-serif", outline: "none", cursor: "pointer",
          }}>
            {["Technology & SaaS", "Fashion & Apparel", "Health & Wellness", "Food & Beverage", "Finance & Fintech", "Education", "Real Estate"].map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        {/* Core Values */}
        <div style={{ marginBottom: 20 }}>
          <label style={{ display: "block", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 8 }}>CORE VALUES</label>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 8 }}>
            {coreValues.map(v => (
              <span key={v} style={{
                display: "inline-flex", alignItems: "center", gap: 4,
                fontSize: 11, fontWeight: 600, padding: "4px 8px",
                background: "rgba(200,255,0,0.1)", border: "1px solid rgba(200,255,0,0.3)",
                borderRadius: 4, color: "var(--accent)",
              }}>
                {v}
                <button onClick={() => setCoreValues(coreValues.filter(c => c !== v))} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--accent)", fontSize: 12, lineHeight: 1, padding: 0 }}>×</button>
              </span>
            ))}
          </div>
          <input placeholder="Add values (press Enter)" value={newValue}
            onChange={e => setNewValue(e.target.value)} onKeyDown={addValue}
            style={{
              width: "100%", background: "var(--bg-card2)", border: "1px solid var(--border)",
              borderRadius: 6, padding: "8px 12px", color: "var(--text)", fontSize: 12,
              fontFamily: "DM Sans, sans-serif", outline: "none",
            }}
            onFocus={e => (e.target.style.borderColor = "var(--accent)")}
            onBlur={e => (e.target.style.borderColor = "var(--border)")}
          />
        </div>

        {/* Description */}
        <div style={{ marginBottom: 28 }}>
          <label style={{ display: "block", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 8 }}>DESCRIPTION</label>
          <textarea value={description} onChange={e => setDescription(e.target.value)} rows={4} style={{
            width: "100%", background: "var(--bg-card2)", border: "1px solid var(--border)",
            borderRadius: 6, padding: "10px 12px", color: "var(--text)", fontSize: 12,
            fontFamily: "DM Sans, sans-serif", outline: "none", resize: "none", lineHeight: 1.6,
          }}
            onFocus={e => (e.target.style.borderColor = "var(--accent)")}
            onBlur={e => (e.target.style.borderColor = "var(--border)")}
          />
        </div>

        <button style={{
          width: "100%", background: "var(--accent)", color: "#000", border: "none",
          borderRadius: 8, padding: "12px", fontFamily: "DM Sans, sans-serif",
          fontWeight: 700, fontSize: 13, cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
        }}>
          <span>⟳</span> Generate Identity
        </button>
      </div>

      {/* Center canvas */}
      <div style={{ flex: 1, overflowY: "auto", padding: "24px" }}>
        {/* Toolbar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ display: "flex", gap: 6 }}>
              {["↗", "✎", "−", "100%", "+"].map((t, i) => (
                <button key={i} style={{
                  background: "var(--bg-card2)", border: "1px solid var(--border)",
                  borderRadius: 6, padding: "6px 10px", color: "var(--text-muted)",
                  fontSize: 12, cursor: "pointer",
                }}>{t}</button>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button style={{
              background: "var(--bg-card2)", border: "1px solid var(--border)",
              borderRadius: 8, padding: "8px 16px", color: "var(--text)",
              fontSize: 13, fontWeight: 500, cursor: "pointer", display: "flex", alignItems: "center", gap: 6,
            }}>💾 Save</button>
            <button style={{
              background: "var(--accent)", border: "none",
              borderRadius: 8, padding: "8px 16px", color: "#000",
              fontSize: 13, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 6,
            }}>⬇ Export</button>
          </div>
        </div>

        {/* Logo preview */}
        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: 32, marginBottom: 16, minHeight: 220, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{
              width: 90, height: 90, borderRadius: "50%",
              background: "linear-gradient(135deg, #0055ff, #7c3aed)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 36, fontWeight: 800, fontFamily: "Syne, sans-serif",
              color: "#fff", margin: "0 auto 16px",
            }}>
              {brandName.charAt(0).toUpperCase()}
            </div>
            <p style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 28 }}>{brandName}</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {/* Palette */}
          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: 20 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "var(--text-muted)", textTransform: "uppercase" }}>PALETTE</p>
              <button style={{ fontSize: 11, color: "var(--accent)", background: "none", border: "none", cursor: "pointer", fontWeight: 600 }}>Shuffle</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { name: "Cobalt Blue", hex: "#0055FF", dark: false },
                { name: "Midnight Ocean", hex: "#020D1A", dark: true },
                { name: "Pearl White", hex: "#ECF2FE", dark: false },
              ].map(c => (
                <div key={c.hex} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: c.hex, border: "1px solid var(--border)", flexShrink: 0 }} />
                  <div>
                    <p style={{ fontSize: 12, fontWeight: 600 }}>{c.name}</p>
                    <p style={{ fontSize: 11, color: "var(--text-muted)" }}>{c.hex}</p>
                  </div>
                  <button style={{ marginLeft: "auto", background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)", fontSize: 12 }}>⎘</button>
                </div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: 20 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: 16 }}>TYPOGRAPHY</p>
            <div style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 10, color: "var(--text-muted)", fontWeight: 600 }}>Headings</span>
              <p style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 22, marginTop: 4 }}>Space Grotesk</p>
              <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>The quick brown fox jumps over the lazy dog.</p>
            </div>
            <div style={{ borderTop: "1px solid var(--border)", paddingTop: 16 }}>
              <span style={{ fontSize: 10, color: "var(--text-muted)", fontWeight: 600 }}>Body Copy</span>
              <p style={{ fontSize: 15, marginTop: 4 }}>Inter</p>
              <p style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 4, lineHeight: 1.6 }}>Efficiently unleash cross-media information without cross-media value.</p>
            </div>
          </div>
        </div>

        {/* Preview mockups */}
        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: 20, marginTop: 16 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: 16 }}>PREVIEW CONTEXT</p>
          <div style={{ display: "flex", gap: 12 }}>
            {["Business Card", "Mobile Splash", "+ Add Mockup"].map((m, i) => (
              <div key={m} style={{
                width: 80, height: 60, borderRadius: 8,
                background: i < 2 ? "linear-gradient(135deg, #0055ff22, #7c3aed22)" : "var(--bg-card2)",
                border: `1px dashed ${i < 2 ? "var(--border-light)" : "var(--border)"}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 10, color: i < 2 ? "var(--text-muted)" : "var(--text-dim)",
                cursor: "pointer", textAlign: "center", padding: 4,
              }}>{m}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel */}
      {showPanel && (
        <RightPanel sliders={sliders} setSliders={setSliders} logoStyle={logoStyle} setLogoStyle={setLogoStyle} />
      )}
    </div>
  );
}
