"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax effect on hero image
            gsap.to(imageRef.current, {
                y: 150,
                scale: 1.1,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1.5,
                },
            });

            // Fade out content on scroll
            gsap.to(contentRef.current, {
                opacity: 0,
                y: -50,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "20% top",
                    end: "60% top",
                    scrub: 1,
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative h-screen min-h-[700px] overflow-hidden"
        >
            {/* Background Image with Parallax */}
            <div
                ref={imageRef}
                className="absolute inset-0 w-full h-[120%] -top-[10%]"
            >
                <Image
                    src="/images/hero.jpg"
                    alt="Raveen Tharuka - Sri Lankan Artist"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="100vw"
                    quality={90}
                />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-overlay" />
                <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/40 to-transparent" />
            </div>

            {/* Content */}
            <div
                ref={contentRef}
                className="relative z-10 h-full flex items-center section-container"
            >
                <div className="max-w-3xl">
                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-caption text-smoke-light mb-6"
                    >
                        Sri Lankan Artist • Singer • Performer
                    </motion.p>

                    {/* Artist Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="heading-display text-cream mb-8"
                    >
                        Raveen
                        <br />
                        <span className="text-cream/90">Tharuka</span>
                    </motion.h1>

                    {/* About Text */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="text-body max-w-xl mb-10"
                    >
                        A voice that echoes through the soul. Crafting melodies that paint
                        emotions and tell stories of love, life, and everything in between.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link href="#music" className="btn-primary">
                            Listen Now
                        </Link>
                        <Link href="#booking" className="btn-secondary">
                            Book for Event
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-2"
                >
                    <span className="text-xs text-smoke uppercase tracking-widest">
                        Scroll
                    </span>
                    <svg
                        className="w-5 h-5 text-smoke"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    );
}
