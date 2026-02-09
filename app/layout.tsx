import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Raveen Tharuka | Official Website",
    description:
        "Official website of Raveen Tharuka - Sri Lankan singer, performer, and music artist. Book for events, explore music, and stay updated with upcoming performances.",
    keywords: [
        "Raveen Tharuka",
        "Sri Lankan singer",
        "Sri Lankan artist",
        "music artist",
        "live performance",
        "wedding singer",
        "concert",
        "Sri Lanka music",
    ],
    authors: [{ name: "Raveen Tharuka" }],
    creator: "Raveen Tharuka",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://raveentharuka.com",
        siteName: "Raveen Tharuka Official",
        title: "Raveen Tharuka | Official Website",
        description:
            "Official website of Raveen Tharuka - Sri Lankan singer and music artist.",
        images: [
            {
                url: "/images/hero.jpg",
                width: 1200,
                height: 630,
                alt: "Raveen Tharuka - Sri Lankan Artist",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Raveen Tharuka | Official Website",
        description:
            "Official website of Raveen Tharuka - Sri Lankan singer and music artist.",
        images: ["/images/hero.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
            <body className="min-h-screen bg-charcoal">
                {/* Grain Overlay for Cinematic Effect */}
                <div className="grain-overlay" aria-hidden="true" />

                {/* Navigation */}
                <Navigation />

                {/* Main Content */}
                <main>{children}</main>

                {/* Footer */}
                <Footer />
            </body>
        </html>
    );
}
