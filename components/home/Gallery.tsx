"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import GalleryImage, { Lightbox } from "@/components/ui/GalleryImage";
import { galleryImages, GalleryImage as GalleryImageType } from "@/data/gallery";

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<GalleryImageType | null>(
        null
    );

    return (
        <>
            <section className="section-padding bg-charcoal relative">
                <div className="section-container">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <p className="text-caption text-smoke mb-4">Moments Captured</p>
                        <h2 className="heading-section text-cream">Gallery</h2>
                    </motion.div>

                    {/* Masonry Grid */}
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {galleryImages.map((image, index) => (
                            <div key={image.id} className="break-inside-avoid">
                                <GalleryImage
                                    image={image}
                                    index={index}
                                    onClick={() => setSelectedImage(image)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {selectedImage && (
                <Lightbox
                    image={selectedImage}
                    onClose={() => setSelectedImage(null)}
                />
            )}
        </>
    );
}
