"use client";
// next themes
import { ThemeProvider } from "next-themes";

// react
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider enableSystem attribute="class">
            {children}
        </ThemeProvider>
    );
}
