"use client";

import { motion } from "framer-motion";
import { collaborations } from "@/data/songs";
import MusicCard from "@/components/ui/MusicCard";

export default function Collaborations() {
    if (collaborations.length === 0) return null;

    return (
        <section className="section-padding bg-charcoal-dark relative">
            <div className="section-container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <p className="text-caption text-smoke mb-4">Featured With</p>
                    <h2 className="heading-section text-cream">Collaborations</h2>
                    <p className="text-body mt-4 max-w-2xl">
                        Special collaborations with fellow artists, bringing together
                        unique sounds and creative visions.
                    </p>
                </motion.div>

                {/* Collaborations Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {collaborations.map((song, index) => (
                        <MusicCard key={song.id} song={song} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
