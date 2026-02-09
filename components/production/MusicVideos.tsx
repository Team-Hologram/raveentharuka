"use client";

import { motion } from "framer-motion";
import { musicVideos } from "@/data/songs";
import YouTubeEmbed from "@/components/ui/YouTubeEmbed";

export default function MusicVideos() {
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
                    <p className="text-caption text-smoke mb-4">Visual Stories</p>
                    <h2 className="heading-section text-cream">Music Videos</h2>
                </motion.div>

                {/* Videos Grid */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {musicVideos.map((video, index) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <YouTubeEmbed videoId={video.youtubeId || ""} title={video.title} />
                            <div className="mt-4">
                                <h3 className="font-heading text-lg text-cream">{video.title}</h3>
                                <p className="text-sm text-smoke mt-1">{video.year}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
