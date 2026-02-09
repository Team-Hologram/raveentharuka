"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { upcomingEvents } from "@/data/events";
import EventCard from "@/components/ui/EventCard";

export default function UpcomingEvents() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 380;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="section-padding bg-charcoal-dark relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-smoke-dark/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cream/5 rounded-full blur-3xl" />
            </div>

            <div className="section-container relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
                >
                    <div>
                        <motion.p
                            className="text-caption text-smoke mb-4"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            Live Performances
                        </motion.p>
                        <motion.h2
                            className="heading-section text-cream"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Upcoming Events
                        </motion.h2>
                    </div>

                    {/* Navigation Arrows */}
                    <motion.div
                        className="flex gap-3"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <motion.button
                            onClick={() => scroll("left")}
                            className="w-12 h-12 rounded-full border border-smoke-dark/40 flex items-center justify-center text-smoke hover:text-cream hover:border-smoke transition-all duration-500 ease-luxury"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Previous events"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </motion.button>
                        <motion.button
                            onClick={() => scroll("right")}
                            className="w-12 h-12 rounded-full border border-smoke-dark/40 flex items-center justify-center text-smoke hover:text-cream hover:border-smoke transition-all duration-500 ease-luxury"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Next events"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Horizontal Scroll Container */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto hide-scrollbar pb-4 -mx-6 px-6"
                    style={{ scrollSnapType: "x mandatory" }}
                >
                    {upcomingEvents.map((event, index) => (
                        <div key={event.id} style={{ scrollSnapAlign: "start" }}>
                            <EventCard event={event} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
