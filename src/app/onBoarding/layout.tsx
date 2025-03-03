"use client";

import { NavigationProvider } from "@/lib/context/navigation";
import { Authenticated } from "convex/react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NavigationProvider>
        <Authenticated>
          <main className="flex-1 overflow-y-auto">{children}</main>
        </Authenticated>
    </NavigationProvider>
  );
}