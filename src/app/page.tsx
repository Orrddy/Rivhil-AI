"use client";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Logo from "@/components/Logo";

export default function LoginPage() {
  const [show, setShow] = useState(false);

  return (
    <div className="min-h-screen flex" style={{ background: "var(--bg)" }}>
      {/* Left — visual */}
      <div className="hidden lg:flex flex-1 relative overflow-hidden items-center justify-center"
        style={{ background: "linear-gradient(135deg, #07091a 0%, #0c1a3a 100%)" }}>
        {/* Glow */}
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: 500, height: 500,
          background: "radial-gradient(circle, rgba(200,255,0,0.07) 0%, transparent 70%)",
          borderRadius: "50%",
        }} />
        {/* Orbit ring */}
        <div style={{
          width: 340, height: 340,
          border: "1px solid rgba(200,255,0,0.15)",
          borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
          position: "relative",
        }}>
          <div style={{
            width: 240, height: 240,
            border: "1px solid rgba(200,255,0,0.08)",
            borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <div style={{
              width: 90, height: 90,
              background: "var(--bg-card)",
              border: "1px solid var(--border-light)",
              borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 32, fontWeight: 800,
              fontFamily: "Syne, sans-serif",
              color: "var(--accent)",
            }}>R</div>
          </div>
          {/* Orbit dot */}
          <div style={{
            position: "absolute", top: 10, left: "50%",
            transform: "translateX(-50%)",
            width: 10, height: 10,
            background: "var(--accent)", borderRadius: "50%",
          }} />
        </div>

        {/* Testimonial */}
        <div style={{
          position: "absolute", bottom: 48, left: 40, right: 40,
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          borderRadius: 12, padding: "16px 20px",
        }}>
          <p style={{ fontSize: 13, color: "#cdd6f0", lineHeight: 1.5, fontStyle: "italic" }}>
            "Rivhil AI gave my startup a brand that looks like I spent $20k on an agency. Built in 11 minutes."
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 12 }}>
            <div style={{
              width: 30, height: 30, borderRadius: "50%",
              background: "var(--accent)", display: "flex",
              alignItems: "center", justifyContent: "center",
              fontSize: 12, fontWeight: 700, color: "#000",
            }}>S</div>
            <div>
              <p style={{ fontSize: 12, fontWeight: 600 }}>Sarah K.</p>
              <p style={{ fontSize: 11, color: "var(--text-muted)" }}>Startup Founder</p>
            </div>
            <div style={{ marginLeft: "auto", display: "flex", gap: 2 }}>
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: "var(--accent)", fontSize: 11 }}>★</span>
              ))}
            </div>
          </div>
        </div>

        {/* Logo top-left */}
        <div style={{ position: "absolute", top: 32, left: 40 }}>
          <Logo />
        </div>
      </div>

      {/* Right — form */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12" style={{ maxWidth: 480, margin: "0 auto" }}>
        <div className="lg:hidden mb-8">
          <Logo />
        </div>

        <div style={{ width: "100%", maxWidth: 400 }}>
          <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: 16 }}>
            WELCOME BACK
          </p>
          <h1 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 40, lineHeight: 1.1, marginBottom: 36 }}>
            Sign in to<br />your workspace.
          </h1>

          <form style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <label style={{ display: "block", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 8 }}>
                EMAIL ADDRESS
              </label>
              <input type="email" placeholder="you@company.com" style={{
                width: "100%", background: "var(--bg-card2)",
                border: "1px solid var(--border)", borderRadius: 8,
                padding: "13px 16px", color: "var(--text)",
                fontFamily: "DM Sans, sans-serif", fontSize: 14, outline: "none",
              }}
                onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                onBlur={e => (e.target.style.borderColor = "var(--border)")}
              />
            </div>

            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <label style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                  PASSWORD
                </label>
                <a href="#" style={{ fontSize: 12, color: "var(--accent)", textDecoration: "none" }}>Forgot password?</a>
              </div>
              <div style={{ position: "relative" }}>
                <input type={show ? "text" : "password"} placeholder="••••••••" style={{
                  width: "100%", background: "var(--bg-card2)",
                  border: "1px solid var(--border)", borderRadius: 8,
                  padding: "13px 44px 13px 16px", color: "var(--text)",
                  fontFamily: "DM Sans, sans-serif", fontSize: 14, outline: "none",
                }}
                  onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                  onBlur={e => (e.target.style.borderColor = "var(--border)")}
                />
                <button type="button" onClick={() => setShow(!show)} style={{
                  position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)",
                  background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)",
                  display: "flex",
                }}>
                  {show ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}>
              <input type="checkbox" id="remember" style={{ accentColor: "var(--accent)", width: 14, height: 14 }} />
              <label htmlFor="remember" style={{ fontSize: 13, color: "var(--text-muted)", cursor: "pointer" }}>Remember me</label>
            </div>

            <Link href="/workspace" style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              width: "100%", background: "var(--accent)", color: "#000",
              fontWeight: 700, fontSize: 14, padding: "14px 24px",
              borderRadius: 8, textDecoration: "none", marginTop: 8,
              transition: "opacity 0.2s",
            }}>
              Enter Workspace →
            </Link>
          </form>

          <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "24px 0" }}>
            <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
            <span style={{ fontSize: 12, color: "var(--text-muted)" }}>OR CONTINUE WITH</span>
            <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            {["Google", "X"].map(provider => (
              <button key={provider} style={{
                flex: 1, background: "var(--bg-card2)", border: "1px solid var(--border)",
                borderRadius: 8, padding: "12px", color: "var(--text)",
                fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: 14,
                cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                transition: "border-color 0.2s",
              }}
                onMouseOver={e => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border-light)")}
                onMouseOut={e => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
              >
                <span style={{ fontSize: 15 }}>{provider === "Google" ? "G" : "𝕏"}</span>
                {provider}
              </button>
            ))}
          </div>

          <p style={{ textAlign: "center", fontSize: 13, color: "var(--text-muted)", marginTop: 28 }}>
            Don't have an account?{" "}
            <Link href="/signup" style={{ color: "var(--accent)", textDecoration: "none", fontWeight: 600 }}>
              Start building free →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
