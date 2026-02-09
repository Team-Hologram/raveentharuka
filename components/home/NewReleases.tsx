"use client";

import { motion } from "framer-motion";
import SpotifyEmbed from "@/components/ui/SpotifyEmbed";

const newReleases = [
    {
        id: "1",
        title: "Mata Danena",
        year: "2026",
        spotifyId: "6OaGJVfSATSufy9ruVmMlT",
    },
    {
        id: "2",
        title: "Mata Aye Ona",
        year: "2025",
        spotifyId: "2OIoqI00cXI5wUuZxYoWMx",
    },
    {
        id: "3",
        title: "Me Adare Ridum",
        year: "2025",
        spotifyId: "6nYApiV4NLPPqm6uT6Wgb6",
    },
];

export default function NewReleases() {
    return (
        <section id="music" className="section-padding bg-charcoal relative">
            <div className="section-container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <p className="text-caption text-smoke mb-4">Latest Music</p>
                    <h2 className="heading-section text-cream">New Releases</h2>
                </motion.div>

                {/* Music Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newReleases.map((track, index) => (
                        <motion.div
                            key={track.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="mb-4">
                                <h3 className="font-heading text-xl text-cream mb-1">
                                    {track.title}
                                </h3>
                                <p className="text-sm text-smoke">{track.year}</p>
                            </div>
                            <SpotifyEmbed trackId={track.spotifyId} height={152} />
                        </motion.div>
                    ))}
                </div>

                {/* View All Link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <a
                        href="https://open.spotify.com/artist/0vdkqzGVuWnwD3JWI8ZPT8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-smoke-light hover:text-cream transition-colors group"
                    >
                        <span className="text-sm uppercase tracking-widest">
                            Listen on Spotify
                        </span>
                        <svg
                            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
