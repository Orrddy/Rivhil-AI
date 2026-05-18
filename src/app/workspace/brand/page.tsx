"use client";

export default function BrandPage() {
  return (
    <div style={{ padding: "32px 40px", maxWidth: 900 }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 40 }}>
        <div>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: "var(--accent)", textTransform: "uppercase", marginBottom: 8 }}>AI GENERATED SUCCESSFULLY</p>
          <h1 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 40, marginBottom: 8 }}>Brand Guidelines</h1>
          <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6, maxWidth: 500 }}>
            Your comprehensive brand identity system. This document outlines the core elements of your brand's visual style, ensuring consistency across all touchpoints.
          </p>
          <p style={{ fontSize: 11, color: "var(--text-dim)", marginTop: 12 }}>⏱ Last updated 2 mins ago</p>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <button style={{
            background: "var(--bg-card2)", border: "1px solid var(--border)",
            borderRadius: 8, padding: "10px 18px", color: "var(--text)",
            fontSize: 13, fontWeight: 500, cursor: "pointer", display: "flex", alignItems: "center", gap: 6,
          }}>⬆ Share</button>
          <button style={{
            background: "var(--accent)", border: "none",
            borderRadius: 8, padding: "10px 18px", color: "#000",
            fontSize: 13, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 6,
          }}>⬇ Download PDF</button>
        </div>
      </div>

      {/* Logo Usage */}
      <section style={{ marginBottom: 48 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(200,255,0,0.15)", border: "1px solid var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: "var(--accent)" }}>◎</div>
            <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 20 }}>Logo System</h2>
          </div>
          <button style={{ fontSize: 12, color: "var(--accent)", background: "none", border: "none", cursor: "pointer", fontWeight: 600 }}>Edit Assets</button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {[
            { label: "Primary Logo", bg: "linear-gradient(135deg, #0a1628, #1a2a4a)", color: "#fff", desc: "For use on light and complex backgrounds." },
            { label: "Monochrome Black", bg: "#f5f5f5", color: "#000", desc: "For use on light single-color layouts or black and white print media." },
            { label: "Monochrome White", bg: "#0a0a0a", color: "#fff", desc: "Strictly for use on dark backgrounds or dark photographic overlays." },
          ].map(v => (
            <div key={v.label} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}>
              <div style={{ height: 140, background: v.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{
                  width: 60, height: 60, borderRadius: "50%",
                  background: v.color === "#fff" ? "rgba(0,85,255,0.8)" : "rgba(0,0,0,0.8)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 22, fontWeight: 800, fontFamily: "Syne, sans-serif", color: v.color,
                }}>L</div>
              </div>
              <div style={{ padding: "14px 16px" }}>
                <p style={{ fontWeight: 700, fontSize: 13, marginBottom: 4 }}>{v.label}</p>
                <p style={{ fontSize: 11, color: "var(--text-muted)", lineHeight: 1.5 }}>{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Color System */}
      <section style={{ marginBottom: 48 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(200,255,0,0.15)", border: "1px solid var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: "var(--accent)" }}>◑</div>
            <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 20 }}>Color System</h2>
          </div>
          <button style={{ fontSize: 12, color: "var(--accent)", background: "none", border: "none", cursor: "pointer", fontWeight: 600 }}>Adjust Palette</button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: 20 }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: 16 }}>PRIMARY BRAND COLORS</p>
            <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
              <div style={{ width: 60, height: 60, borderRadius: 10, background: "#0055FF" }} />
              <div style={{ width: 60, height: 60, borderRadius: 10, background: "#020D1A", border: "1px solid var(--border)" }} />
            </div>
            <div>
              <p style={{ fontWeight: 700, fontSize: 13 }}>Electric Blue</p>
              <p style={{ fontSize: 11, color: "var(--text-muted)" }}>HEX: #0055FF · RGB: 0, 85, 255</p>
            </div>
            <div style={{ marginTop: 12 }}>
              <p style={{ fontWeight: 700, fontSize: 13 }}>Midnight Ocean</p>
              <p style={{ fontSize: 11, color: "var(--text-muted)" }}>HEX: #020D1A · RGB: 2, 13, 26</p>
            </div>
          </div>
          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: 20 }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: 16 }}>SECONDARY GRADIENT</p>
            <div style={{
              height: 60, borderRadius: 10,
              background: "linear-gradient(90deg, #0055FF, #7c3aed, #ec4899)",
              marginBottom: 16,
            }} />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {["#0055FF", "#4a3aed", "#7c3aed", "#c43aed", "#ec4899"].map(c => (
                <div key={c} style={{ textAlign: "center" }}>
                  <div style={{ width: 16, height: 16, borderRadius: "50%", background: c, margin: "0 auto 4px" }} />
                  <p style={{ fontSize: 8, color: "var(--text-muted)" }}>{c}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Application */}
      <section style={{ marginBottom: 48 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <div style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(200,255,0,0.15)", border: "1px solid var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: "var(--accent)" }}>▣</div>
          <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 20 }}>Brand Application</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {[
            { label: "Business Card", dim: "Standard 3.5 × 2", bg: "linear-gradient(135deg, #0a1628, #0055ff22)" },
            { label: "App Icon", dim: "iOS & Android Adaptive", bg: "linear-gradient(135deg, #0055ff, #7c3aed)" },
            { label: "Merchandise", dim: "Various format exports", bg: "linear-gradient(135deg, #1a1a2e, #2a2a4e)" },
          ].map(item => (
            <div key={item.label} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}>
              <div style={{ height: 120, background: item.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{
                  width: 50, height: 50, borderRadius: 12,
                  background: "rgba(0,85,255,0.6)", border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 20, fontWeight: 800, color: "#fff",
                }}>L</div>
              </div>
              <div style={{ padding: "12px 16px" }}>
                <p style={{ fontWeight: 700, fontSize: 13 }}>{item.label}</p>
                <p style={{ fontSize: 11, color: "var(--text-muted)" }}>{item.dim}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <div style={{ borderTop: "1px solid var(--border)", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ fontSize: 11, color: "var(--text-dim)" }}>System-generated v1.0</p>
        <div style={{ display: "flex", gap: 20 }}>
          {["Support Assets", "Style Guide Settings", "Help"].map(l => (
            <a key={l} href="#" style={{ fontSize: 11, color: "var(--text-muted)", textDecoration: "none" }}>{l}</a>
          ))}
        </div>
      </div>
    </div>
  );
}
