export interface GalleryImage {
    id: string;
    src: string;
    alt: string;
    width: number;
    height: number;
    category?: string;
}

// Placeholder images using Unsplash (will be replaced with actual images)
export const galleryImages: GalleryImage[] = [
    {
        id: "1",
        src: "/images/gallery/gallery-1.jpg",
        alt: "Raveen Tharuka performing live",
        width: 800,
        height: 1200,
        category: "performance",
    },
    {
        id: "2",
        src: "/images/gallery/gallery-2.jpg",
        alt: "Concert stage setup",
        width: 1200,
        height: 800,
        category: "concert",
    },
    {
        id: "3",
        src: "/images/gallery/gallery-3.jpg",
        alt: "Behind the scenes recording",
        width: 800,
        height: 800,
        category: "studio",
    },
    {
        id: "4",
        src: "/images/gallery/gallery-4.jpg",
        alt: "Live band performance",
        width: 1200,
        height: 900,
        category: "performance",
    },
    {
        id: "5",
        src: "/images/gallery/gallery-5.jpg",
        alt: "Music video shoot",
        width: 800,
        height: 1000,
        category: "video",
    },
    {
        id: "6",
        src: "/images/gallery/gallery-6.jpg",
        alt: "Award ceremony",
        width: 1000,
        height: 800,
        category: "awards",
    },
];
