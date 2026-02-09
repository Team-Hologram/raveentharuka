"use client";

import { motion } from "framer-motion";

interface YouTubeEmbedProps {
    videoId: string;
    title?: string;
    className?: string;
}

export default function YouTubeEmbed({
    videoId,
    title = "YouTube video",
    className = "",
}: YouTubeEmbedProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`embed-container aspect-video ${className}`}
        >
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&color=white`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
                loading="lazy"
            />
        </motion.div>
    );
}
