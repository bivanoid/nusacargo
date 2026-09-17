import type { ReactNode } from "react";
import { SidebarNav } from "@/components/dashboard/sidebar-nav";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground lg:grid lg:grid-cols-[240px_1fr]">
      <aside className="border-b border-border bg-surface p-4 lg:border-r lg:border-b-0">
        <p className="mb-6 text-sm font-semibold">
          NusaCargo Control Tower
        </p>

        <SidebarNav />

        <div className="mt-6">
          <ThemeToggle />
        </div>
      </aside>

      <main className="p-6">
        {children}
      </main>
    </div>
  );
}
