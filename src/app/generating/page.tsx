"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/components/Logo";

const STEPS = [
  { id: "core", label: "Core values, positioning, and persona defined", sub: "Analyzing brand inputs..." },
  { id: "visual", label: "Visual Identity", sub: "Synthesizing color palettes and typographic systems..." },
  { id: "voice", label: "Brand Voice", sub: "Waiting for visual completion" },
  { id: "pack", label: "Brand Pack", sub: "Finalizing all assets" },
];

const LOG_LINES = [
  "> Initializing neural style transfer engine...",
  "> Parsing brand inputs and industry signals...",
  "> Running competitive landscape analysis...",
  "> Moodboard synthesis complete. 42 concepts evaluated.",
  "> Primary Color: #0055FF (Electric Blue)",
  "> Secondary Color: #020D1A (Midnight Ocean)",
  "> Typography: Space Grotesk + Inter",
  "> Logo archetype: Iconic · modernist geometry",
  "> Brand voice: Confident, clear, human-centric",
  "> Generating final brand pack assets...",
];

export default function GeneratingPage() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      p += 1;
      setProgress(p);
      if (p % 25 === 0 && currentStep < 3) setCurrentStep(s => s + 1);
      if (p >= 100) {
        clearInterval(interval);
        setDone(true);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (logs.length >= LOG_LINES.length) return;
    const t = setTimeout(() => {
      setLogs(l => [...l, LOG_LINES[l.length]]);
    }, 900 + logs.length * 300);
    return () => clearTimeout(t);
  }, [logs]);

  useEffect(() => {
    if (done) {
      const t = setTimeout(() => router.push("/workspace"), 1200);
      return () => clearTimeout(t);
    }
  }, [done, router]);

  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div style={{ padding: "20px 40px", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Logo />
        <span style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 600, letterSpacing: "0.05em" }}>
          MY BRAND — BRAND IDENTITY
        </span>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "60px 24px", gap: 48 }}>
        {/* Headline */}
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: "var(--accent)", textTransform: "uppercase", marginBottom: 20 }}>
            GENERATING YOUR BRAND IDENTITY
          </p>
          <h1 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 56, lineHeight: 1.05 }}>
            <span style={{ color: "var(--text-muted)" }}>RivhilAI is</span><br />
            <span style={{ color: "var(--text-muted)" }}>building</span><br />
            <span style={{ color: "var(--accent)" }}>your brand.</span>
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: 15, marginTop: 16 }}>
            Every output is connected... All of it — built for you.
          </p>
        </div>

        {/* Progress ring */}
        <div style={{ position: "relative", width: 140, height: 140 }}>
          <svg width="140" height="140" style={{ transform: "rotate(-90deg)" }}>
            <circle cx="70" cy="70" r="54" fill="none" stroke="var(--border)" strokeWidth="3" />
            <circle cx="70" cy="70" r="54" fill="none" stroke="var(--accent)" strokeWidth="3"
              strokeDasharray={circumference} strokeDashoffset={offset}
              strokeLinecap="round" style={{ transition: "stroke-dashoffset 0.1s linear" }} />
          </svg>
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: done ? 11 : 22, fontWeight: 800, fontFamily: "Syne, sans-serif", color: done ? "var(--accent)" : "var(--text)" }}>
              {done ? "COMPLETE" : `${progress}%`}
            </span>
          </div>
        </div>

        {/* Steps */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12, width: "100%", maxWidth: 480 }}>
          {STEPS.map((s, i) => {
            const state = i < currentStep ? "done" : i === currentStep ? "active" : "pending";
            return (
              <div key={s.id} style={{
                display: "flex", alignItems: "center", gap: 14, padding: "14px 18px",
                background: state === "active" ? "var(--bg-card)" : "transparent",
                border: `1px solid ${state === "active" ? "var(--border-light)" : "transparent"}`,
                borderRadius: 10, transition: "all 0.3s",
              }}>
                <div style={{
                  width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: state === "done" ? "rgba(200,255,0,0.15)" : state === "active" ? "rgba(200,255,0,0.1)" : "var(--bg-card2)",
                  border: `1px solid ${state === "done" ? "var(--accent)" : state === "active" ? "rgba(200,255,0,0.4)" : "var(--border)"}`,
                  fontSize: 12,
                }}>
                  {state === "done" ? <span style={{ color: "var(--accent)" }}>✓</span>
                    : state === "active" ? <span style={{ color: "var(--accent)", animation: "spin 1s linear infinite" }}>⟳</span>
                      : <span style={{ color: "var(--text-dim)" }}>{i + 1}</span>}
                </div>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 600, color: state === "pending" ? "var(--text-dim)" : state === "active" ? "var(--accent)" : "var(--text)" }}>
                    {s.label}
                  </p>
                  {state === "active" && (
                    <p style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>{s.sub}</p>
                  )}
                </div>
                {state === "active" && (
                  <div style={{ marginLeft: "auto", display: "flex", gap: 3 }}>
                    {[...Array(3)].map((_, i) => (
                      <div key={i} style={{
                        width: 4, height: 4, borderRadius: "50%", background: "var(--accent)",
                        opacity: 0.4 + i * 0.3,
                      }} />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Terminal */}
        <div style={{
          width: "100%", maxWidth: 560,
          background: "#030508", border: "1px solid var(--border)",
          borderRadius: 10, overflow: "hidden",
        }}>
          <div style={{ padding: "10px 14px", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", gap: 6 }}>
              {["#ff5f56", "#ffbd2e", "#27c93f"].map(c => (
                <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
              ))}
            </div>
            <span style={{ fontSize: 10, color: "var(--text-muted)", fontWeight: 600, letterSpacing: "0.08em" }}>LIVE OUTPUT FEED</span>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: done ? "var(--accent)" : "#27c93f", animation: done ? "none" : "pulse 1s infinite" }} />
          </div>
          <div style={{ padding: "16px", fontFamily: "monospace", fontSize: 12, lineHeight: 1.7, color: "#4ade80", minHeight: 160, maxHeight: 200, overflowY: "auto" }}>
            {logs.map((line, i) => (
              <div key={i} style={{ opacity: i === logs.length - 1 ? 1 : 0.7 }}>{line}</div>
            ))}
            {!done && <span style={{ color: "var(--accent)" }}>█</span>}
          </div>
        </div>

        <p style={{ fontSize: 12, color: "var(--text-dim)", textAlign: "center" }}>
          {done ? "✓ Brand identity complete — redirecting..." : "DO NOT CLOSE THIS TAB. YOUR BRAND IS BEING BUILT."}
        </p>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.3; } }
      `}</style>
    </div>
  );
}
