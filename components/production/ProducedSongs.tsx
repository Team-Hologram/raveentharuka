"use client";

import { motion } from "framer-motion";
import { producedSongs } from "@/data/songs";
import MusicCard from "@/components/ui/MusicCard";

export default function ProducedSongs() {
    if (producedSongs.length === 0) return null;

    return (
        <section className="section-padding bg-charcoal relative">
            <div className="section-container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <p className="text-caption text-smoke mb-4">Behind the Sound</p>
                    <h2 className="heading-section text-cream">Produced Songs</h2>
                    <p className="text-body mt-4 max-w-2xl">
                        Songs produced by Raveen Tharuka for other artists and projects,
                        showcasing his versatility as a music producer.
                    </p>
                </motion.div>

                {/* Songs Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {producedSongs.map((song, index) => (
                        <MusicCard key={song.id} song={song} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
