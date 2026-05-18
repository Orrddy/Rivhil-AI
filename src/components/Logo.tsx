export default function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: 20, md: 26, lg: 34 };
  const px = sizes[size];
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div style={{
        width: px, height: px,
        background: "var(--accent)",
        borderRadius: 6,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: px * 0.5, fontWeight: 800,
        fontFamily: "Syne, sans-serif",
        color: "#000",
      }}>R</div>
      <span style={{
        fontFamily: "Syne, sans-serif", fontWeight: 800,
        fontSize: px * 0.7, color: "var(--text)",
        letterSpacing: "-0.02em",
      }}>
        Rivhil<span style={{ color: "var(--accent)" }}>AI</span>
      </span>
    </div>
  );
}
