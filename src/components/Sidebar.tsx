"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const NAV = [
  { label: "Discovery", href: "/workspace", icon: "◎", status: "active" },
  { label: "Strategy", href: "/workspace/strategy", icon: "⊞", status: null },
  { label: "Brand Identity", href: "/workspace/brand", icon: "◫", status: "soon" },
  { label: "Website Copy", href: "/workspace/copy", icon: "☰", status: "soon" },
  { label: "Marketing Pack", href: "/workspace/marketing", icon: "⚡", status: "soon" },
  { label: "Launch", href: "/workspace/launch", icon: "🚀", status: "soon" },
];

const PROGRESS = [
  { label: "Discovery Phase", state: "active" },
  { label: "Visual Assets", state: "locked" },
];

export default function Sidebar() {
  const path = usePathname();

  return (
    <aside style={{
      width: 220, height: "100vh", background: "#060918",
      borderRight: "1px solid var(--border)",
      display: "flex", flexDirection: "column", flexShrink: 0,
    }}>
      {/* Logo */}
      <div style={{ padding: "24px 20px 20px", borderBottom: "1px solid var(--border)" }}>
        <Logo size="sm" />
        <p style={{ fontSize: 10, color: "var(--text-dim)", marginTop: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>WORKSPACE</p>
        <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>Welcome back, Joseph</p>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: "12px 8px", overflowY: "auto" }}>
        {NAV.map(item => {
          const active = path === item.href || (item.href !== "/workspace" && path.startsWith(item.href));
          return (
            <Link key={item.href} href={item.href} style={{
              display: "flex", alignItems: "center", gap: 10,
              padding: "9px 12px", borderRadius: 8, marginBottom: 2,
              background: active ? "rgba(200,255,0,0.08)" : "transparent",
              borderLeft: active ? "2px solid var(--accent)" : "2px solid transparent",
              textDecoration: "none", transition: "all 0.15s",
            }}>
              <span style={{ fontSize: 14, color: active ? "var(--accent)" : "var(--text-muted)" }}>{item.icon}</span>
              <span style={{ fontSize: 13, fontWeight: active ? 600 : 500, color: active ? "var(--text)" : "var(--text-muted)", flex: 1 }}>
                {item.label}
              </span>
              {item.status === "soon" && (
                <span style={{ fontSize: 9, fontWeight: 700, padding: "2px 6px", background: "var(--accent)", color: "#000", borderRadius: 3, letterSpacing: "0.05em" }}>
                  SOON
                </span>
              )}
            </Link>
          );
        })}

        {/* Progress */}
        <div style={{ marginTop: 24, paddingLeft: 12, borderLeft: "1px solid var(--border)" }}>
          {PROGRESS.map(p => (
            <div key={p.label} style={{ marginBottom: 16, paddingLeft: 12, position: "relative" }}>
              <div style={{
                position: "absolute", left: -5, top: 4,
                width: 9, height: 9, borderRadius: "50%",
                background: p.state === "active" ? "var(--accent)" : "var(--border-light)",
                border: p.state === "active" ? "none" : "1px solid var(--border)",
              }} />
              <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.08em", color: p.state === "active" ? "var(--accent)" : "var(--text-dim)", textTransform: "uppercase", marginBottom: 2 }}>
                {p.state === "active" ? "IN PROGRESS" : "LOCKED"}
              </p>
              <p style={{ fontSize: 12, color: p.state === "active" ? "var(--text-muted)" : "var(--text-dim)" }}>{p.label}</p>
            </div>
          ))}
        </div>
      </nav>

      {/* User */}
      <div style={{ padding: "16px", borderTop: "1px solid var(--border)", display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          width: 32, height: 32, borderRadius: "50%",
          background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 12, fontWeight: 800, color: "#000", fontFamily: "Syne, sans-serif",
        }}>JP</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ fontSize: 12, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Joseph P.</p>
          <p style={{ fontSize: 10, color: "var(--accent)", fontWeight: 600 }}>Premium Plan</p>
        </div>
      </div>
    </aside>
  );
}
