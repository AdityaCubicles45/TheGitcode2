"use client";

import Header from "@/components/ui/Header";
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
        <div className="flex h-screen">
            <div className="flex-1 flex flex-col min-w-0">
                <Header />
                <main className="flex-1 overflow-y-auto">{children}</main>
             </div>
        </div>
        </Authenticated>
    </NavigationProvider>
  );
}