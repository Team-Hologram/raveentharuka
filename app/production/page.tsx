import type { Metadata } from "next";
import AllSongs from "@/components/production/AllSongs";
import MusicVideos from "@/components/production/MusicVideos";
import ProducedSongs from "@/components/production/ProducedSongs";
import Collaborations from "@/components/production/Collaborations";

export const metadata: Metadata = {
    title: "Production | Raveen Tharuka",
    description:
        "Explore the complete musical production of Raveen Tharuka - songs, music videos, productions, and collaborations.",
    openGraph: {
        title: "Production | Raveen Tharuka",
        description:
            "Explore the complete musical production of Raveen Tharuka - songs, music videos, productions, and collaborations.",
    },
};

export default function ProductionPage() {
    return (
        <>
            {/* Page Header */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-charcoal relative">
                <div className="section-container">
                    <p className="text-caption text-smoke mb-4">Musical Journey</p>
                    <h1 className="heading-display text-cream">Production</h1>
                    <p className="text-body mt-6 max-w-2xl">
                        Explore the complete collection of my musical work — from original
                        songs and music videos to productions and collaborations with
                        talented artists.
                    </p>
                </div>
            </section>

            {/* Content Sections */}
            <AllSongs />
            <MusicVideos />
            <ProducedSongs />
            <Collaborations />
        </>
    );
}
