import Sidebar from "@/components/Sidebar";

export default function WorkspaceLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="workspace-wrap" style={{ background: "var(--bg)" }}>
      <Sidebar />
      <main className="workspace-main" style={{ paddingBottom: "env(safe-area-inset-bottom, 80px)" }}>
        {children}
      </main>
    </div>
  );
}
