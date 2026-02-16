"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Event } from "@/data/events";

interface EventCardProps {
    event: Event;
    index?: number;
}

export default function EventCard({ event, index = 0 }: EventCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            className="group relative min-w-[300px] md:min-w-[360px] flex-shrink-0"
        >
            <motion.div
                className="relative h-[420px] md:h-[480px] overflow-hidden rounded-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
                {/* Background Image or Gradient */}
                <div className="absolute inset-0 bg-charcoal-muted">
                    {event.image ? (
                        <Image
                            src={event.image}
                            alt={event.venue}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                    ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-light via-charcoal-muted to-charcoal-dark" />
                    )}
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                    {/* Top Section - Date & Badge */}
                    <div className="flex items-start justify-between">
                        {/* Date Display */}
                        <motion.div
                            className="bg-cream/10 backdrop-blur-sm border border-cream/20 rounded-sm px-4 py-3 text-center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <span className="block text-4xl md:text-5xl font-heading text-cream leading-none">
                                {event.day}
                            </span>
                            <span className="block text-sm text-smoke uppercase tracking-widest mt-1">
                                {event.month}
                            </span>
                            <span className="block text-xs text-smoke-dark mt-1">
                                {event.year}
                            </span>
                        </motion.div>

                        {/* Event Type Badge */}
                        <span className="inline-block text-xs text-cream/80 bg-cream/10 backdrop-blur-sm border border-cream/10 px-3 py-1.5 rounded-sm uppercase tracking-wider">
                            {event.eventType}
                        </span>
                    </div>

                    {/* Bottom Section - Event Details */}
                    <div className="space-y-4">
                        {/* Venue Name */}
                        <h3 className="font-heading text-2xl md:text-3xl text-cream leading-tight group-hover:text-cream/90 transition-colors duration-300">
                            {event.venue}
                        </h3>

                        {/* Location */}
                        <div className="flex items-center gap-2 text-smoke-light">
                            <svg
                                className="w-4 h-4 text-smoke"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                            <span className="text-sm">{event.city}</span>
                        </div>

                        {/* Description if available */}
                        {event.description && (
                            <p className="text-sm text-smoke-light line-clamp-2">
                                {event.description}
                            </p>
                        )}

                        {/* Ticket CTA */}
                        {event.ticketUrl && (
                            <motion.a
                                href={event.ticketUrl}
                                className="inline-flex items-center gap-3 bg-cream/10 backdrop-blur-sm border border-cream/20 px-5 py-3 rounded-sm text-cream text-sm uppercase tracking-wider hover:bg-cream/20 hover:border-cream/30 transition-all duration-300"
                                whileHover={{ x: 5 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span>Get Tickets</span>
                                <svg
                                    className="w-4 h-4"
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
                            </motion.a>
                        )}
                    </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-t from-cream/5 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cream/30 to-transparent" />
                </div>
            </motion.div>
        </motion.div>
    );
}
