"use client";

import { ReactNode } from "react";
import Header from "@/components/layout/header";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

interface AdminShellProps {
  currentPage: string;
  onPageChange: (pageName: string) => void;
  children: ReactNode;
  contentClassName?: string;
}

export default function AdminShell({
  currentPage,
  onPageChange,
  children,
  contentClassName,
}: AdminShellProps) {
  return (
    <TooltipProvider>
      <SidebarProvider>
        {/* Sidebar visible uniquement en grand écran */}
        <AppSidebar className="hidden md:flex" variant="inset" />

        <SidebarInset >
          <Header currentPage={currentPage} onPageChange={onPageChange} />
          <main
            className={`flex flex-1 flex-col px-4 py-6 sm:px-6 ${contentClassName ?? ""}`}
          >
            {children}
          </main>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
}
