
import AppSideBar from "@/components/AppSideBar"
import AppNavBar from "@/components/AppNavBar"
import { Metadata } from "next"
import * as react from 'react'
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import { SidebarProvider } from "@/components/ui/sidebar"


export const metadata: Metadata = {
  title: "dashboard",
  description: "This is the dashboard page of the bmmsl management system",
}



export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full flex bg-black"  >
      <SidebarProvider>
      <AppSideBar />
      <div>
        <ThemeProvider attribute="class" 
        defaultTheme="dark" 
        enableSystem
        disableTransitionOnChange
        
        >
          
            {children}
         
        </ThemeProvider>
        </div>
      <AppNavBar />
      </SidebarProvider>
    </main>
  );
}
