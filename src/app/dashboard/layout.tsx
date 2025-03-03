"use client";

import Footer from "@/components/ui/Footer";
import { NavigationProvider } from "@/lib/context/navigation";
import { Authenticated } from "convex/react";
import Navbar from "./components/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NavigationProvider>
        <Authenticated>
          <Navbar />
          <main className="flex-1 overflow-y-auto">{children}</main>
          <Footer />
        </Authenticated>
    </NavigationProvider>
  );
}