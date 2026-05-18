"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const NAV = [
  { label: "Discovery", href: "/workspace", icon: "◎" },
  { label: "Strategy", href: "/workspace/strategy", icon: "⊞", soon: true },
  { label: "Brand Identity", href: "/workspace/brand", icon: "◫", soon: true },
  { label: "Website Copy", href: "/workspace/copy", icon: "☰", soon: true },
  { label: "Marketing Pack", href: "/workspace/marketing", icon: "⚡", soon: true },
  { label: "Launch", href: "/workspace/launch", icon: "🚀", soon: true },
];

const PROGRESS = [
  { label: "Discovery Phase", state: "active" },
  { label: "Visual Assets", state: "locked" },
];

export default function Sidebar() {
  const path = usePathname();

  const isActive = (href: string) =>
    href === "/workspace" ? path === href : path.startsWith(href);

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="sidebar-wrap">
        <div style={{ padding: "22px 18px 18px", borderBottom: "1px solid var(--border)" }}>
          <Logo size="sm" />
          <p style={{ fontSize: 10, color: "var(--text-dim)", marginTop: 10, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>WORKSPACE</p>
          <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>Welcome back, Joseph</p>
        </div>

        <nav style={{ flex: 1, padding: "10px 8px", overflowY: "auto" }}>
          {NAV.map(item => {
            const active = isActive(item.href);
            return (
              <Link key={item.href} href={item.href} style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "9px 12px", borderRadius: 8, marginBottom: 2,
                background: active ? "rgba(200,255,0,0.08)" : "transparent",
                borderLeft: active ? "2px solid var(--accent)" : "2px solid transparent",
                textDecoration: "none", transition: "all 0.15s",
              }}>
                <span style={{ fontSize: 14, color: active ? "var(--accent)" : "var(--text-muted)" }}>{item.icon}</span>
                <span style={{ fontSize: 13, fontWeight: active ? 600 : 500, color: active ? "var(--text)" : "var(--text-muted)", flex: 1 }}>{item.label}</span>
                {item.soon && <span style={{ fontSize: 9, fontWeight: 700, padding: "2px 6px", background: "var(--accent)", color: "#000", borderRadius: 3 }}>SOON</span>}
              </Link>
            );
          })}

          <div style={{ marginTop: 20, paddingLeft: 12, borderLeft: "1px solid var(--border)" }}>
            {PROGRESS.map(p => (
              <div key={p.label} style={{ marginBottom: 14, paddingLeft: 12, position: "relative" }}>
                <div style={{ position: "absolute", left: -5, top: 4, width: 9, height: 9, borderRadius: "50%", background: p.state === "active" ? "var(--accent)" : "var(--border-light)", border: p.state === "active" ? "none" : "1px solid var(--border)" }} />
                <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.08em", color: p.state === "active" ? "var(--accent)" : "var(--text-dim)", textTransform: "uppercase", marginBottom: 2 }}>
                  {p.state === "active" ? "IN PROGRESS" : "LOCKED"}
                </p>
                <p style={{ fontSize: 12, color: p.state === "active" ? "var(--text-muted)" : "var(--text-dim)" }}>{p.label}</p>
              </div>
            ))}
          </div>
        </nav>

        <div style={{ padding: "14px 16px", borderTop: "1px solid var(--border)", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: "#000", fontFamily: "Syne, sans-serif" }}>JP</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ fontSize: 12, fontWeight: 600 }}>Joseph P.</p>
            <p style={{ fontSize: 10, color: "var(--accent)", fontWeight: 600 }}>Premium Plan</p>
          </div>
        </div>
      </aside>

      {/* Mobile bottom nav */}
      <nav className="mobile-bottom-nav">
        {NAV.slice(0, 5).map(item => {
          const active = isActive(item.href);
          return (
            <Link key={item.href} href={item.href} style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
              padding: "6px 8px", textDecoration: "none", minWidth: 48,
            }}>
              <span style={{ fontSize: 18, color: active ? "var(--accent)" : "var(--text-dim)" }}>{item.icon}</span>
              <span style={{ fontSize: 9, fontWeight: 600, color: active ? "var(--accent)" : "var(--text-dim)", letterSpacing: "0.04em" }}>
                {item.label.split(" ")[0]}
              </span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
