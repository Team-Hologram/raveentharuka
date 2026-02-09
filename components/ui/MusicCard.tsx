"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Song } from "@/data/songs";

interface MusicCardProps {
    song: Song;
    index?: number;
    showVideo?: boolean;
    onPlay?: () => void;
}

export default function MusicCard({
    song,
    index = 0,
    showVideo = false,
    onPlay,
}: MusicCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
            }}
            className="group relative"
        >
            <motion.div
                className="card-base card-hover overflow-hidden"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
                {/* Thumbnail / Video Preview */}
                <div className="relative aspect-video bg-charcoal-muted overflow-hidden">
                    {song.youtubeId && (
                        <Image
                            src={`https://img.youtube.com/vi/${song.youtubeId}/maxresdefault.jpg`}
                            alt={song.title}
                            fill
                            className="object-cover gallery-image group-hover:scale-105 transition-transform duration-700 ease-luxury"
                        />
                    )}

                    {/* Play Overlay */}
                    <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-luxury flex items-center justify-center">
                        <motion.button
                            onClick={onPlay}
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{
                                duration: 0.3,
                                ease: [0.34, 1.56, 0.64, 1]
                            }}
                            className="w-16 h-16 rounded-full bg-cream/10 backdrop-blur-md border border-cream/30 flex items-center justify-center luxury-glow"
                        >
                            <svg
                                className="w-6 h-6 text-cream ml-1"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </motion.button>
                    </div>

                    {/* Duration Badge */}
                    {song.duration && (
                        <motion.div
                            className="absolute bottom-3 right-3 bg-charcoal/80 backdrop-blur-sm px-2 py-1 rounded-sm"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <span className="text-xs text-cream/80">{song.duration}</span>
                        </motion.div>
                    )}
                </div>

                {/* Song Info */}
                <div className="p-4 md:p-5">
                    <h3 className="font-heading text-lg text-cream mb-2 group-hover:text-cream/90 transition-colors duration-300 line-clamp-2">
                        {song.title}
                    </h3>

                    <div className="flex items-center justify-between">
                        <span className="text-sm text-smoke">{song.year}</span>

                        {song.collaborator && (
                            <span className="text-xs text-smoke-dark">
                                ft. {song.collaborator}
                            </span>
                        )}

                        {song.type !== "original" && (
                            <span className="text-xs text-smoke bg-smoke-dark/20 px-2 py-0.5 rounded-sm capitalize">
                                {song.type}
                            </span>
                        )}
                    </div>
                </div>

                {/* Bottom Glow Line on Hover */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cream/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
        </motion.div>
    );
}
