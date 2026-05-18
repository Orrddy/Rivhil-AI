"use client";
import Link from "next/link";
import { useState } from "react";
import Logo from "@/components/Logo";

const STATS = [
  { value: "4", label: "AI Modules" },
  { value: "10", label: "Topics Covered" },
  { value: "400+", label: "Brand Assets" },
  { value: "400k+", label: "Brands Built" },
];

const GATES = [
  { num: "01", title: "Discovery", desc: "Deep-dive into your brand's core purpose, audience, and competitive position.", tags: ["PURPOSE", "AUDIENCE", "POSITIONING"] },
  { num: "02", title: "Strategy", desc: "Define your brand architecture, messaging hierarchy, and go-to-market approach.", tags: ["MESSAGING", "ARCHITECTURE", "GTM"] },
  { num: "03", title: "Brand Identity", desc: "Generate your complete visual system — logo, palette, typography, and guidelines.", tags: ["LOGO", "COLOR", "TYPOGRAPHY"] },
  { num: "04", title: "Website Copy", desc: "AI-crafted copy for every page, calibrated to your brand voice and audience.", tags: ["HOMEPAGE", "ABOUT", "PRODUCT"] },
  { num: "05", title: "Marketing Pack", desc: "Launch-ready social posts, ad copy, email sequences, and pitch decks.", tags: ["SOCIAL", "ADS", "EMAIL"] },
];

const STEPS = [
  { num: "01", title: "Answer the brief.", desc: "Tell us about your brand in plain language. No jargon, no forms — just a conversation." },
  { num: "02", title: "AI builds everything.", desc: "Our models synthesize your inputs into a complete brand system in under 2 minutes." },
  { num: "03", title: "Start building.", desc: "Download assets, share guidelines, launch your site — all from one workspace." },
];

const ECOSYSTEM = [
  { title: "Brand Intelligence", desc: "Competitive analysis and market positioning built into every generation." },
  { title: "Living Guidelines", desc: "Your brand doc updates automatically as you refine and iterate." },
  { title: "Asset Library", desc: "Every logo, color, and template export-ready in every format." },
  { title: "Team Collaboration", desc: "Invite stakeholders, collect feedback, and ship faster together." },
  { title: "Website Builder", desc: "Turn your brand into a live site with one click. No code required." },
  { title: "Launch Toolkit", desc: "PR templates, pitch decks, and investor materials — ready to go." },
];

const TESTIMONIALS = [
  { name: "Sarah K.", role: "Startup Founder", quote: "Rivhil AI gave my startup a brand that looks like I spent $20k on an agency. Built in 11 minutes.", stars: 5 },
  { name: "Marcus T.", role: "Creative Director", quote: "I've used every branding tool out there. Nothing comes close to the strategic depth RivhilAI produces.", stars: 5 },
  { name: "Priya M.", role: "E-commerce Founder", quote: "From zero to a full brand identity with guidelines in one afternoon. This is the future.", stars: 5 },
];

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)" }}>

      {/* Nav */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "16px 24px",
        background: "rgba(7,9,26,0.92)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
      }}>
        <Logo />
        <div className="nav-links">
          {["Features", "Pricing", "Examples"].map(l => (
            <a key={l} href="#" style={{ fontSize: 14, color: "var(--text-muted)", textDecoration: "none" }}>{l}</a>
          ))}
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <Link href="/login" className="hide-mobile" style={{ fontSize: 14, color: "var(--text-muted)", textDecoration: "none", fontWeight: 500 }}>Sign in</Link>
          <Link href="/signup" style={{
            background: "var(--accent)", color: "#000", fontWeight: 700,
            fontSize: 13, padding: "9px 18px", borderRadius: 8, textDecoration: "none", whiteSpace: "nowrap",
          }}>Start free →</Link>
          {/* Hamburger */}
          <button className="show-mobile" onClick={() => setMenuOpen(!menuOpen)} style={{
            background: "none", border: "none", cursor: "pointer", color: "var(--text)", fontSize: 22, padding: 4,
          }}>☰</button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 40,
          background: "var(--bg)", display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: 32,
        }}>
          <button onClick={() => setMenuOpen(false)} style={{ position: "absolute", top: 20, right: 24, background: "none", border: "none", color: "var(--text)", fontSize: 28, cursor: "pointer" }}>✕</button>
          {["Features", "Pricing", "Examples"].map(l => (
            <a key={l} href="#" onClick={() => setMenuOpen(false)} style={{ fontSize: 24, fontFamily: "Syne, sans-serif", fontWeight: 800, color: "var(--text)", textDecoration: "none" }}>{l}</a>
          ))}
          <Link href="/login" onClick={() => setMenuOpen(false)} style={{ fontSize: 18, color: "var(--text-muted)", textDecoration: "none" }}>Sign in</Link>
          <Link href="/signup" onClick={() => setMenuOpen(false)} style={{
            background: "var(--accent)", color: "#000", fontWeight: 700,
            fontSize: 16, padding: "14px 36px", borderRadius: 10, textDecoration: "none",
          }}>Start Building Free →</Link>
        </div>
      )}

      {/* Hero */}
      <section style={{ textAlign: "center", padding: "80px 20px 60px", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)",
          width: 600, height: 400,
          background: "radial-gradient(ellipse, rgba(200,255,0,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 24,
          background: "rgba(200,255,0,0.08)", border: "1px solid rgba(200,255,0,0.2)",
          borderRadius: 100, padding: "6px 14px",
        }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)" }} />
          <span style={{ fontSize: 11, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.05em" }}>AI BRAND GENERATION · NOW LIVE</span>
        </div>
        <h1 className="hero-title" style={{
          fontFamily: "Syne, sans-serif", fontWeight: 800,
          fontSize: "clamp(44px, 9vw, 88px)", lineHeight: 1.0,
          marginBottom: 24, letterSpacing: "-0.02em",
        }}>
          Start with<br />
          <span style={{ color: "var(--accent)" }}>your brand!</span>
        </h1>
        <p style={{ fontSize: "clamp(15px, 3vw, 18px)", color: "var(--text-muted)", maxWidth: 480, margin: "0 auto 40px", lineHeight: 1.7 }}>
          The only AI platform that builds your complete brand strategy, identity, and launch assets — all connected.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/signup" style={{
            background: "var(--accent)", color: "#000", fontWeight: 700,
            fontSize: "clamp(14px, 3vw, 16px)", padding: "14px 32px", borderRadius: 10, textDecoration: "none",
          }}>Build My Brand Free →</Link>
          <a href="#how" style={{
            background: "var(--bg-card2)", border: "1px solid var(--border)",
            color: "var(--text)", fontWeight: 500,
            fontSize: "clamp(14px, 3vw, 16px)", padding: "14px 28px", borderRadius: 10, textDecoration: "none",
          }}>See how it works</a>
        </div>

        {/* Stats */}
        <div className="grid-stats" style={{ marginTop: 64, borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          {STATS.map((s, i) => (
            <div key={s.label} style={{
              flex: 1, padding: "28px 16px", textAlign: "center",
              borderRight: i < STATS.length - 1 ? "1px solid var(--border)" : "none",
              borderBottom: "none",
            }}>
              <p style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(28px, 5vw, 40px)", color: "var(--accent)" }}>{s.value}</p>
              <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Five Gates */}
      <section style={{ padding: "80px 24px", maxWidth: 1000, margin: "0 auto" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: "var(--accent)", textTransform: "uppercase", marginBottom: 12 }}>THE SYSTEM</p>
        <h2 className="section-title" style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(30px, 5vw, 52px)", marginBottom: 48, lineHeight: 1.1 }}>
          Five Gates to<br /><span style={{ color: "var(--accent)" }}>Brand Mastery.</span>
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {GATES.map((g, i) => (
            <div key={g.num} className="gates-row" style={{
              padding: "22px 20px", borderRadius: 12,
              background: i === 2 ? "var(--bg-card)" : "transparent",
              border: `1px solid ${i === 2 ? "var(--border-light)" : "transparent"}`,
              transition: "all 0.2s", cursor: "default",
            }}
              onMouseOver={e => { (e.currentTarget as HTMLElement).style.background = "var(--bg-card)"; }}
              onMouseOut={e => { (e.currentTarget as HTMLElement).style.background = i === 2 ? "var(--bg-card)" : "transparent"; }}
            >
              <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 12, color: "var(--text-dim)" }}>{g.num}</span>
              <div>
                <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 18, marginBottom: 4 }}>{g.title}</h3>
                <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>{g.desc}</p>
              </div>
              <div className="gates-tags" style={{ display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "flex-end" }}>
                {g.tags.map(t => (
                  <span key={t} style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.08em", padding: "4px 8px", borderRadius: 4, background: "var(--bg-card2)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3 Steps */}
      <section id="how" style={{ padding: "80px 24px", background: "var(--bg-card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: "var(--accent)", textTransform: "uppercase", marginBottom: 12 }}>HOW IT WORKS</p>
          <h2 className="section-title" style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(30px, 5vw, 52px)", marginBottom: 48, lineHeight: 1.1 }}>
            Build in <span style={{ color: "var(--accent)" }}>3 Steps.</span>
          </h2>
          <div className="steps-grid">
            {STEPS.map(s => (
              <div key={s.num} style={{ background: "var(--bg-card2)", border: "1px solid var(--border)", borderRadius: 16, padding: "28px 24px" }}>
                <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 42, color: "var(--accent)", opacity: 0.3 }}>{s.num}</span>
                <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 20, margin: "12px 0 10px" }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section style={{ padding: "80px 24px", maxWidth: 1000, margin: "0 auto" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: "var(--accent)", textTransform: "uppercase", marginBottom: 12 }}>THE PLATFORM</p>
        <h2 className="section-title" style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(30px, 5vw, 52px)", marginBottom: 48, lineHeight: 1.1 }}>
          More than a tool —<br /><span style={{ color: "var(--accent)" }}>an ecosystem.</span>
        </h2>
        <div className="eco-grid">
          {ECOSYSTEM.map(e => (
            <div key={e.title} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 14, padding: "24px 20px" }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(200,255,0,0.1)", border: "1px solid rgba(200,255,0,0.2)", marginBottom: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)" }} />
              </div>
              <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 15, marginBottom: 8 }}>{e.title}</h3>
              <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>{e.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "80px 24px", background: "var(--bg-card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: "var(--accent)", textTransform: "uppercase", marginBottom: 12 }}>SOCIAL PROOF</p>
          <h2 className="section-title" style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(30px, 5vw, 48px)", marginBottom: 48, lineHeight: 1.1 }}>
            Loved by Founders<br />&amp; Creators.
          </h2>
          <div className="testi-grid">
            {TESTIMONIALS.map(t => (
              <div key={t.name} style={{ background: "var(--bg-card2)", border: "1px solid var(--border)", borderRadius: 16, padding: "24px 20px" }}>
                <div style={{ display: "flex", gap: 2, marginBottom: 14 }}>
                  {[...Array(t.stars)].map((_, i) => <span key={i} style={{ color: "var(--accent)", fontSize: 13 }}>★</span>)}
                </div>
                <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 18, fontStyle: "italic" }}>"{t.quote}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 34, height: 34, borderRadius: "50%", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, color: "#000", flexShrink: 0 }}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: 13 }}>{t.name}</p>
                    <p style={{ fontSize: 11, color: "var(--text-muted)" }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 24px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(32px, 7vw, 68px)", lineHeight: 1.05, marginBottom: 16 }}>
          Your brand is one<br />decision away.
        </h2>
        <p style={{ fontSize: "clamp(14px, 2.5vw, 16px)", color: "var(--text-muted)", marginBottom: 40, lineHeight: 1.7 }}>
          Every business starts with a brand. Build it in minutes.
        </p>
        <Link href="/signup" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "var(--accent)", color: "#000", fontWeight: 700,
          fontSize: "clamp(14px, 3vw, 17px)", padding: "16px 40px", borderRadius: 12, textDecoration: "none",
        }}>Start Building Free →</Link>
        <p style={{ fontSize: 12, color: "var(--text-dim)", marginTop: 14 }}>No credit card required · Cancel anytime</p>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid var(--border)", padding: "32px 24px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <Logo size="sm" />
        <p style={{ fontSize: 12, color: "var(--text-dim)" }}>© 2025 RivhilAI. All rights reserved.</p>
        <div style={{ display: "flex", gap: 20 }}>
          {["Privacy", "Terms", "Contact"].map(l => (
            <a key={l} href="#" style={{ fontSize: 12, color: "var(--text-muted)", textDecoration: "none" }}>{l}</a>
          ))}
        </div>
      </footer>
    </div>
  );
}
