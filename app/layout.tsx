// next
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

// components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// provider
import Providers from "./providers";

const poppins = Poppins({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
    title: "AutoWheels",
    description: "Created by ibrag1moff.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${poppins.className}`}>
                <Providers>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
