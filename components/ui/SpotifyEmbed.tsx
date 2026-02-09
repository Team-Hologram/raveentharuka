"use client";

import { motion } from "framer-motion";

interface SpotifyEmbedProps {
    trackId?: string;
    playlistId?: string;
    type?: "track" | "playlist" | "album";
    height?: number;
    className?: string;
}

export default function SpotifyEmbed({
    trackId,
    playlistId,
    type = "track",
    height = 152,
    className = "",
}: SpotifyEmbedProps) {
    const embedId = trackId || playlistId;
    const embedType = playlistId ? "artist" : type;

    if (!embedId) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`embed-container ${className}`}
        >
            <div className="relative bg-charcoal-light border border-smoke-dark/20 rounded-xl overflow-hidden">
                <iframe
                    src={`https://open.spotify.com/embed/${embedType}/${embedId}?utm_source=generator&theme=0`}
                    width="100%"
                    height={height}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="border-0"
                    style={{ borderRadius: "12px" }}
                />
            </div>
        </motion.div>
    );
}
