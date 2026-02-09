"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { GalleryImage as GalleryImageType } from "@/data/gallery";

interface GalleryImageProps {
    image: GalleryImageType;
    index?: number;
    onClick?: () => void;
}

export default function GalleryImage({
    image,
    index = 0,
    onClick,
}: GalleryImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
            }}
            className="group relative overflow-hidden rounded-sm cursor-pointer"
            onClick={onClick}
        >
            <motion.div
                className="relative aspect-[4/5] bg-charcoal-muted overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
                {/* Placeholder Shimmer */}
                {!isLoaded && (
                    <div className="absolute inset-0 bg-gradient-to-r from-charcoal-muted via-charcoal-light to-charcoal-muted animate-pulse" />
                )}

                <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className={`object-cover gallery-image group-hover:scale-110 transition-all duration-1000 ease-luxury ${isLoaded ? "opacity-100" : "opacity-0"
                        }`}
                    onLoad={() => setIsLoaded(true)}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-luxury" />

                {/* Expand Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{
                            duration: 0.4,
                            ease: [0.34, 1.56, 0.64, 1]
                        }}
                        className="w-14 h-14 rounded-full bg-cream/10 backdrop-blur-md border border-cream/30 flex items-center justify-center luxury-glow"
                    >
                        <svg
                            className="w-5 h-5 text-cream"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                            />
                        </svg>
                    </motion.div>
                </div>

                {/* Bottom Glow Line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cream/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
        </motion.div>
    );
}

// Lightbox Component with Luxury Transitions
interface LightboxProps {
    image: GalleryImageType | null;
    onClose: () => void;
}

export function Lightbox({ image, onClose }: LightboxProps) {
    if (!image) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="fixed inset-0 z-[100] bg-charcoal/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
                onClick={onClose}
            >
                {/* Close Button */}
                <motion.button
                    onClick={onClose}
                    className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-cream/60 hover:text-cream transition-colors duration-300 z-10"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </motion.button>

                {/* Image */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    transition={{
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                    className="relative max-w-5xl max-h-[85vh] w-full h-full"
                    onClick={(e) => e.stopPropagation()}
                >
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-contain"
                        sizes="(max-width: 1280px) 100vw, 1280px"
                    />
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
