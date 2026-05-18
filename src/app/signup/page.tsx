"use client";
import Link from "next/link";
import Logo from "@/components/Logo";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex" style={{ background: "var(--bg)" }}>
      {/* Left — social proof */}
      <div className="hidden lg:flex flex-1 flex-col justify-between p-12"
        style={{ background: "linear-gradient(135deg, #07091a 0%, #0c1a3a 100%)", position: "relative", overflow: "hidden" }}>
        <Logo />

        <div>
          {/* Brand preview card */}
          <div style={{
            background: "var(--bg-card)", border: "1px solid var(--border)",
            borderRadius: 16, padding: 24, maxWidth: 360,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: "linear-gradient(135deg, #4a9eff, #7c3aed)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 18, fontWeight: 800, fontFamily: "Syne, sans-serif", color: "#fff",
              }}>O</div>
              <div>
                <p style={{ fontWeight: 700, fontSize: 14 }}>OBSIDIAN</p>
                <p style={{ fontSize: 11, color: "var(--text-muted)" }}>BUILT FOR THE REBEL</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
              {["#1a1a2e", "#c8ff00", "#4a9eff", "#ffffff"].map(c => (
                <div key={c} style={{ width: 28, height: 28, borderRadius: 6, background: c, border: "1px solid var(--border)" }} />
              ))}
            </div>
            <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.5 }}>Bold & Direct · The Rebel</p>
            <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)" }} />
              <span style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600 }}>AI VERIFIED IDENTITY COMPLETE</span>
            </div>
          </div>

          <div style={{ marginTop: 32 }}>
            <div style={{ display: "flex", marginBottom: 8 }}>
              {[...Array(5)].map((_, i) => (
                <div key={i} style={{
                  width: 28, height: 28, borderRadius: "50%", border: "2px solid var(--bg)",
                  background: ["#c8ff00", "#4a9eff", "#ff6b6b", "#a78bfa", "#34d399"][i],
                  marginLeft: i > 0 ? -8 : 0, fontSize: 11, fontWeight: 700,
                  display: "flex", alignItems: "center", justifyContent: "center", color: "#000",
                }}>{["S","M","J","A","K"][i]}</div>
              ))}
              <span style={{ marginLeft: 12, fontSize: 13, color: "var(--text-muted)" }}>
                <strong style={{ color: "var(--text)" }}>2,400+ founders</strong> built their brand this week
              </span>
            </div>
          </div>
        </div>

        <p style={{ fontSize: 12, color: "var(--text-dim)" }}>TRUSTED BY GLOBAL ENTREPRENEURS · STRATEGY-FIRST EXECUTION</p>
      </div>

      {/* Right — form */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div style={{ width: "100%", maxWidth: 400 }}>
          <div className="lg:hidden mb-8"><Logo /></div>

          <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: 16 }}>
            CREATE YOUR ACCOUNT
          </p>
          <h1 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 36, lineHeight: 1.1, marginBottom: 32 }}>
            Start building<br />your brand.
          </h1>

          {/* OAuth */}
          <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
            {["G  Google", "𝕏  X (Twitter)"].map((label, i) => (
              <button key={i} style={{
                flex: 1, background: "var(--bg-card2)", border: "1px solid var(--border)",
                borderRadius: 8, padding: "12px", color: "var(--text)",
                fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: 13,
                cursor: "pointer",
              }}>{label}</button>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
            <span style={{ fontSize: 11, color: "var(--text-muted)" }}>OR WITH EMAIL</span>
            <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
          </div>

          <form style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "flex", gap: 12 }}>
              {["First Name", "Last Name"].map(placeholder => (
                <input key={placeholder} type="text" placeholder={placeholder} style={{
                  flex: 1, background: "var(--bg-card2)", border: "1px solid var(--border)",
                  borderRadius: 8, padding: "13px 16px", color: "var(--text)",
                  fontFamily: "DM Sans, sans-serif", fontSize: 14, outline: "none",
                }}
                  onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                  onBlur={e => (e.target.style.borderColor = "var(--border)")}
                />
              ))}
            </div>
            <input type="email" placeholder="Email address" style={{
              width: "100%", background: "var(--bg-card2)", border: "1px solid var(--border)",
              borderRadius: 8, padding: "13px 16px", color: "var(--text)",
              fontFamily: "DM Sans, sans-serif", fontSize: 14, outline: "none",
            }}
              onFocus={e => (e.target.style.borderColor = "var(--accent)")}
              onBlur={e => (e.target.style.borderColor = "var(--border)")}
            />
            <input type="password" placeholder="Create password" style={{
              width: "100%", background: "var(--bg-card2)", border: "1px solid var(--border)",
              borderRadius: 8, padding: "13px 16px", color: "var(--text)",
              fontFamily: "DM Sans, sans-serif", fontSize: 14, outline: "none",
            }}
              onFocus={e => (e.target.style.borderColor = "var(--accent)")}
              onBlur={e => (e.target.style.borderColor = "var(--border)")}
            />

            <Link href="/onboarding" style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              width: "100%", background: "var(--accent)", color: "#000",
              fontWeight: 700, fontSize: 14, padding: "14px 24px",
              borderRadius: 8, textDecoration: "none", marginTop: 8,
            }}>
              Create My Brand Account →
            </Link>

            <p style={{ fontSize: 11, color: "var(--text-dim)", textAlign: "center", lineHeight: 1.6 }}>
              By signing up you agree to the{" "}
              <a href="#" style={{ color: "var(--text-muted)", textDecoration: "underline" }}>Terms of Service</a>
              {" "}and{" "}
              <a href="#" style={{ color: "var(--text-muted)", textDecoration: "underline" }}>Privacy Policy</a>
            </p>
          </form>

          <p style={{ textAlign: "center", fontSize: 13, color: "var(--text-muted)", marginTop: 24 }}>
            Already have an account?{" "}
            <Link href="/" style={{ color: "var(--accent)", textDecoration: "none", fontWeight: 600 }}>Sign in →</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
