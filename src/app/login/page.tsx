"use client";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Logo from "@/components/Logo";

export default function LoginPage() {
  const [show, setShow] = useState(false);

  return (
    <div className="auth-wrap" style={{ background: "var(--bg)" }}>

      {/* Left — hidden on mobile */}
      <div className="auth-left hide-mobile" style={{
        background: "linear-gradient(135deg, #07091a 0%, #0c1a3a 100%)",
        position: "relative", overflow: "hidden",
        alignItems: "center", justifyContent: "center",
      }}>
        <div style={{ position: "absolute", top: 32, left: 32 }}><Logo /></div>
        <div style={{ width: 300, height: 300, border: "1px solid rgba(200,255,0,0.15)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
          <div style={{ width: 200, height: 200, border: "1px solid rgba(200,255,0,0.08)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 80, height: 80, background: "var(--bg-card)", border: "1px solid var(--border-light)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, fontWeight: 800, fontFamily: "Syne, sans-serif", color: "var(--accent)" }}>R</div>
          </div>
          <div style={{ position: "absolute", top: 8, left: "50%", transform: "translateX(-50%)", width: 10, height: 10, background: "var(--accent)", borderRadius: "50%" }} />
        </div>
        <div style={{ position: "absolute", bottom: 40, left: 32, right: 32, background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: "16px 20px" }}>
          <p style={{ fontSize: 13, color: "#cdd6f0", lineHeight: 1.5, fontStyle: "italic" }}>"Rivhil AI gave my startup a brand that looks like I spent $20k on an agency. Built in 11 minutes."</p>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 12 }}>
            <div style={{ width: 30, height: 30, borderRadius: "50%", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#000" }}>S</div>
            <div>
              <p style={{ fontSize: 12, fontWeight: 600 }}>Sarah K.</p>
              <p style={{ fontSize: 11, color: "var(--text-muted)" }}>Startup Founder</p>
            </div>
            <div style={{ marginLeft: "auto", display: "flex", gap: 2 }}>
              {[...Array(5)].map((_, i) => <span key={i} style={{ color: "var(--accent)", fontSize: 11 }}>★</span>)}
            </div>
          </div>
        </div>
      </div>

      {/* Right — form */}
      <div className="auth-right">
        <div style={{ width: "100%", maxWidth: 400 }}>
          <div className="show-mobile" style={{ marginBottom: 32, justifyContent: "center" }}><Logo /></div>

          <p style={tag}>WELCOME BACK</p>
          <h1 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(30px, 8vw, 42px)", lineHeight: 1.1, marginBottom: 32 }}>
            Sign in to<br />your workspace.
          </h1>

          <form style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <label style={lbl}>EMAIL ADDRESS</label>
              <input type="email" placeholder="you@company.com" style={inp}
                onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                onBlur={e => (e.target.style.borderColor = "var(--border)")} />
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <label style={lbl}>PASSWORD</label>
                <a href="#" style={{ fontSize: 12, color: "var(--accent)", textDecoration: "none" }}>Forgot password?</a>
              </div>
              <div style={{ position: "relative" }}>
                <input type={show ? "text" : "password"} placeholder="••••••••" style={{ ...inp, paddingRight: 44 }}
                  onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                  onBlur={e => (e.target.style.borderColor = "var(--border)")} />
                <button type="button" onClick={() => setShow(!show)} style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)", display: "flex" }}>
                  {show ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <input type="checkbox" id="rem" style={{ accentColor: "var(--accent)", width: 14, height: 14 }} />
              <label htmlFor="rem" style={{ fontSize: 13, color: "var(--text-muted)", cursor: "pointer" }}>Remember me</label>
            </div>
            <Link href="/workspace" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", background: "var(--accent)", color: "#000", fontWeight: 700, fontSize: 14, padding: "14px 24px", borderRadius: 8, textDecoration: "none", marginTop: 4 }}>
              Enter Workspace →
            </Link>
          </form>

          <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "22px 0" }}>
            <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
            <span style={{ fontSize: 11, color: "var(--text-muted)" }}>OR CONTINUE WITH</span>
            <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            {["G  Google", "𝕏  X"].map(p => (
              <button key={p} style={{ flex: 1, background: "var(--bg-card2)", border: "1px solid var(--border)", borderRadius: 8, padding: "12px", color: "var(--text)", fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: 14, cursor: "pointer" }}>{p}</button>
            ))}
          </div>
          <p style={{ textAlign: "center", fontSize: 13, color: "var(--text-muted)", marginTop: 24 }}>
            Don't have an account?{" "}
            <Link href="/signup" style={{ color: "var(--accent)", textDecoration: "none", fontWeight: 600 }}>Start building free →</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

const tag: React.CSSProperties = { fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: 14 };
const lbl: React.CSSProperties = { display: "block", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 8 };
const inp: React.CSSProperties = { width: "100%", background: "var(--bg-card2)", border: "1px solid var(--border)", borderRadius: 8, padding: "13px 16px", color: "var(--text)", fontFamily: "DM Sans, sans-serif", fontSize: 14, outline: "none" };
