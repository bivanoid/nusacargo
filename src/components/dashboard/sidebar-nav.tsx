"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/shipments", label: "Pengiriman" },
  { href: "/analytics", label: "Analitik" },
  { href: "/settings", label: "Pengaturan" },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-1">
      {NAV.map((item) => {
        const active = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`rounded-md px-3 py-2 text-sm ${
              active
                ? "bg-brand text-background"
                : "hover:bg-muted"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}