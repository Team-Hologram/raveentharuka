"use client";

import { motion } from "framer-motion";
import SpotifyEmbed from "@/components/ui/SpotifyEmbed";

export default function FeaturedMusic() {
    return (
        <section className="section-padding bg-charcoal-dark relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0">
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-smoke-dark/5 rounded-full blur-3xl" />
            </div>

            <div className="section-container relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-caption text-smoke mb-4">Featured Playlist</p>
                        <h2 className="heading-section text-cream mb-6">
                            The Sound of <br />
                            <span className="text-smoke-light">Raveen Tharuka</span>
                        </h2>
                        <p className="text-body mb-8 max-w-md">
                            A carefully curated collection of songs that define my musical
                            journey. From soulful ballads to energetic melodies, experience
                            the complete spectrum of my artistry.
                        </p>

                        {/* Stats */}
                        <div className="flex gap-12">
                            <div>
                                <span className="block text-3xl font-heading text-cream">
                                    50+
                                </span>
                                <span className="text-sm text-smoke">Songs Released</span>
                            </div>
                            <div>
                                <span className="block text-3xl font-heading text-cream">
                                    10M+
                                </span>
                                <span className="text-sm text-smoke">Streams</span>
                            </div>
                            <div>
                                <span className="block text-3xl font-heading text-cream">
                                    100+
                                </span>
                                <span className="text-sm text-smoke">Live Shows</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Spotify Playlist Embed */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <SpotifyEmbed
                            playlistId="0vdkqzGVuWnwD3JWI8ZPT8"
                            type="playlist"
                            height={380}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
