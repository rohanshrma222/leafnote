import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import NavBar from "@/components/NavBar";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/app-sidebar";


export const metadata: Metadata = {
  title: "LeafNote",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              >
             <SidebarProvider> 
                <AppSidebar />
                <div className="flex min-h-screen w-full flex-col">
                    <NavBar />
                    <main className="flex flex-1 flex-col px-4 pt-10 xl:px-8">
                      {children}
                    </main>
                </div>
             </SidebarProvider>     
             <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
