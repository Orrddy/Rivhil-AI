"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/components/Logo";

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
  { left: "Complex", right: "Minimalist", key: "minimalist" },
  { left: "Corporate", right: "Human", key: "human" },
  { left: "Minimal", right: "Expressive", key: "expressive" },
];

function getArchetype(vals: Record<string, number>) {
  const avg = Object.values(vals).reduce((a, b) => a + b, 0) / Object.values(vals).length;
  if (avg > 70) return { name: "The Rebel", tags: ["MODERN", "BOLD", "EXPRESSIVE"] };
  if (vals.human > 60 && vals.playful > 50) return { name: "The Curator", tags: ["MODERN", "PLAYFUL", "HUMAN"] };
  if (vals.minimalist > 60) return { name: "The Architect", tags: ["MINIMAL", "MODERN", "PRECISE"] };
  return { name: "The Guardian", tags: ["TRUSTED", "HUMAN", "CLEAR"] };
}

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    brandName: "", industry: "", product: "", audience: "", differentiation: "", competitors: "",
  });
  const [sliders, setSliders] = useState<Record<string, number>>({
    modern: 80, playful: 50, accessible: 30, minimalist: 40, human: 90, expressive: 20,
  });
  const [logoStyle, setLogoStyle] = useState("iconic");

  const archetype = getArchetype(sliders);

  const handleSubmit = () => {
    router.push("/generating");
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div style={{
        padding: "20px 40px", borderBottom: "1px solid var(--border)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <Logo />
        <div style={{ display: "flex", gap: 8 }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{
              width: 32, height: 3, borderRadius: 2,
              background: i <= step ? "var(--accent)" : "var(--border)",
              transition: "background 0.3s",
            }} />
          ))}
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "60px 24px" }}>
        <div style={{ width: "100%", maxWidth: 720 }}>

          {/* Step 0 — Basics */}
          {step === 0 && (
            <div>
              <h1 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 42, marginBottom: 8 }}>
                Let's start with the basics.
              </h1>
              <p style={{ color: "var(--text-muted)", fontSize: 15, marginBottom: 48 }}>
                Tell us the core identifier of your upcoming brand venture.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 48 }}>
                <div>
                  <label style={{ display: "block", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 8 }}>BRAND NAME</label>
                  <input placeholder="e.g. Glossd" value={form.brandName}
                    onChange={e => setForm({ ...form, brandName: e.target.value })}
                    style={{ width: "100%", background: "var(--bg-card2)", border: "1px solid var(--border)", borderRadius: 8, padding: "14px 16px", color: "var(--text)", fontFamily: "DM Sans, sans-serif", fontSize: 15, outline: "none" }}
                    onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                    onBlur={e => (e.target.style.borderColor = "var(--border)")}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 8 }}>INDUSTRY</label>
                  <input placeholder="e.g. Sustainable Skincare" value={form.industry}
                    onChange={e => setForm({ ...form, industry: e.target.value })}
                    style={{ width: "100%", background: "var(--bg-card2)", border: "1px solid var(--border)", borderRadius: 8, padding: "14px 16px", color: "var(--text)", fontFamily: "DM Sans, sans-serif", fontSize: 15, outline: "none" }}
                    onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                    onBlur={e => (e.target.style.borderColor = "var(--border)")}
                  />
                </div>
              </div>

              <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 36, marginBottom: 8 }}>
                Tell us what you're building.
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: 15, marginBottom: 32 }}>
                The deeper the detail, the more accurate the AI generation will be.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                {[
                  { label: "THE PRODUCT", key: "product", placeholder: "What are you offering?" },
                  { label: "TARGET AUDIENCE", key: "audience", placeholder: "Who are you selling to?" },
                  { label: "DIFFERENTIATION", key: "differentiation", placeholder: "What makes you unique?" },
                  { label: "TOP COMPETITORS", key: "competitors", placeholder: "Who else is in the space?" },
                ].map(field => (
                  <div key={field.key}>
                    <label style={{ display: "block", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 8 }}>{field.label}</label>
                    <textarea placeholder={field.placeholder}
                      value={form[field.key as keyof typeof form]}
                      onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                      rows={3}
                      style={{ width: "100%", background: "var(--bg-card2)", border: "1px solid var(--border)", borderRadius: 8, padding: "14px 16px", color: "var(--text)", fontFamily: "DM Sans, sans-serif", fontSize: 14, outline: "none", resize: "none" }}
                      onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                      onBlur={e => (e.target.style.borderColor = "var(--border)")}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 1 — Personality */}
          {step === 1 && (
            <div>
              <h1 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 42, marginBottom: 8 }}>
                Define how your brand feels.
              </h1>
              <p style={{ color: "var(--text-muted)", fontSize: 15, marginBottom: 48 }}>
                Set the emotional tone for your visual and verbal identity.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 32 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                  {SLIDERS.map(s => (
                    <div key={s.key}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10, fontSize: 12, color: "var(--text-muted)", fontWeight: 500 }}>
                        <span>{s.left}</span><span>{s.right}</span>
                      </div>
                      <input type="range" min={0} max={100} value={sliders[s.key]}
                        onChange={e => setSliders({ ...sliders, [s.key]: +e.target.value })}
                        style={{ width: "100%", accentColor: "var(--accent)", cursor: "pointer" }}
                      />
                    </div>
                  ))}
                </div>

                {/* Archetype card */}
                <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: 24, height: "fit-content" }}>
                  <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", color: "var(--text-muted)", marginBottom: 12 }}>CURRENT ARCHETYPE</p>
                  <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 22, marginBottom: 12 }}>{archetype.name}</h3>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
                    {archetype.tags.map(t => (
                      <span key={t} style={{ fontSize: 10, fontWeight: 700, padding: "3px 8px", background: "var(--accent)", color: "#000", borderRadius: 4 }}>{t}</span>
                    ))}
                  </div>
                  <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.6 }}>
                    Your brand feels approachable, forward-thinking, and deeply connected to its community.
                  </p>
                </div>
              </div>

              <div style={{ marginTop: 48 }}>
                <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 32, marginBottom: 8 }}>Logo style.</h2>
                <p style={{ color: "var(--text-muted)", fontSize: 14, marginBottom: 24 }}>Set the emotional tone for your logo.</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
                  {LOGO_STYLES.map(s => (
                    <button key={s.id} onClick={() => setLogoStyle(s.id)} style={{
                      background: logoStyle === s.id ? "rgba(200,255,0,0.1)" : "var(--bg-card2)",
                      border: `2px solid ${logoStyle === s.id ? "var(--accent)" : "var(--border)"}`,
                      borderRadius: 10, padding: "20px 12px", cursor: "pointer",
                      display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
                      transition: "all 0.2s",
                    }}>
                      <span style={{ fontSize: 22, color: logoStyle === s.id ? "var(--accent)" : "var(--text-muted)" }}>{s.icon}</span>
                      <span style={{ fontSize: 13, fontWeight: 600, color: logoStyle === s.id ? "var(--accent)" : "var(--text)" }}>{s.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2 — Confirm */}
          {step === 2 && (
            <div style={{ textAlign: "center", maxWidth: 520, margin: "0 auto" }}>
              <div style={{
                width: 80, height: 80, borderRadius: "50%",
                background: "rgba(200,255,0,0.1)", border: "2px solid var(--accent)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 32, margin: "0 auto 32px",
              }}>✓</div>
              <h1 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 42, marginBottom: 16 }}>
                Ready to build.
              </h1>
              <p style={{ color: "var(--text-muted)", fontSize: 16, lineHeight: 1.7, marginBottom: 40 }}>
                RivhilAI will now generate your complete brand identity — logo concepts, color palette, typography, brand voice, and more.
              </p>
              <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: 24, marginBottom: 40, textAlign: "left" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  {[
                    ["Brand", form.brandName || "—"],
                    ["Industry", form.industry || "—"],
                    ["Archetype", archetype.name],
                    ["Logo Style", logoStyle.charAt(0).toUpperCase() + logoStyle.slice(1)],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <p style={{ fontSize: 11, color: "var(--text-muted)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>{k}</p>
                      <p style={{ fontSize: 14, fontWeight: 600 }}>{v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 48 }}>
            {step > 0 ? (
              <button onClick={() => setStep(step - 1)} style={{
                background: "none", border: "1px solid var(--border)", borderRadius: 8,
                padding: "13px 24px", color: "var(--text-muted)", cursor: "pointer",
                fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: 14,
              }}>← Back</button>
            ) : <div />}

            {step < 2 ? (
              <button onClick={() => setStep(step + 1)} style={{
                background: "var(--accent)", color: "#000", border: "none",
                borderRadius: 8, padding: "13px 32px",
                fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: 14,
                cursor: "pointer",
              }}>Continue →</button>
            ) : (
              <button onClick={handleSubmit} style={{
                background: "var(--accent)", color: "#000", border: "none",
                borderRadius: 8, padding: "13px 32px",
                fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: 14,
                cursor: "pointer",
              }}>Generate My Brand →</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
