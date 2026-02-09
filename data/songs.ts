export interface Song {
    id: string;
    title: string;
    year: string;
    spotifyId?: string;
    youtubeId?: string;
    thumbnail?: string;
    duration?: string;
    type: "original" | "cover" | "produced" | "collaboration";
    collaborator?: string;
}

export const songs: Song[] = [
    {
        id: "1",
        title: "Mata Danena",
        year: "2026",
        youtubeId: "g5qOn3uvW88",
        type: "original",
        duration: "3:38",
    },
    {
        id: "2",
        title: "Mata Aye Ona",
        year: "2025",
        youtubeId: "2euX0MvU-Wo",
        type: "original",
        duration: "3:45",
    },
    {
        id: "3",
        title: "Me Adare Ridum",
        year: "2025",
        youtubeId: "WQxZlKimGqo",
        type: "original",
        duration: "4:10",
    },
    {
        id: "4",
        title: "Himi Nathi Adareka",
        year: "2024",
        youtubeId: "XjiOCXBrekE",
        type: "original",
        duration: "3:58",
    },
    {
        id: "5",
        title: "Manalola",
        year: "2024",
        youtubeId: "QZHgvpgpSWA",
        type: "original",
        duration: "4:22",
    },
    {
        id: "6",
        title: "Landakata Metharam",
        year: "2023",
        youtubeId: "c2sDAjkA17k",
        type: "produced",
        duration: "3:30",
    },
];

export const musicVideos: Song[] = [
    {
        id: "mv1",
        title: "Mata Danena",
        year: "2026",
        youtubeId: "g5qOn3uvW88",
        type: "original",
        duration: "4:32",
    },
    {
        id: "mv2",
        title: "Mata Aye Ona",
        year: "2025",
        youtubeId: "2euX0MvU-Wo",
        type: "original",
        duration: "3:45",
    },
    {
        id: "mv3",
        title: "Me Adare Ridum",
        year: "2025",
        youtubeId: "WQxZlKimGqo",
        type: "original",
        duration: "4:10",
    },
    {
        id: "mv4",
        title: "Himi Nathi Adareka",
        year: "2024",
        youtubeId: "XjiOCXBrekE",
        type: "original",
        duration: "3:58",
    },
];

export const producedSongs: Song[] = [
    {
        id: "prod1",
        title: "Mata Danena",
        year: "2026",
        youtubeId: "g5qOn3uvW88",
        type: "original",
        duration: "4:32",
    },
    {
        id: "prod2",
        title: "Mata Aye Ona",
        year: "2025",
        youtubeId: "2euX0MvU-Wo",
        type: "original",
        duration: "3:45",
    },
    {
        id: "prod3",
        title: "Me Adare Ridum",
        year: "2025",
        youtubeId: "WQxZlKimGqo",
        type: "original",
        duration: "4:10",
    },
];

export const collaborations: Song[] = [
    {
        id: "collab1",
        title: "Mata Danena",
        year: "2026",
        youtubeId: "g5qOn3uvW88",
        type: "original",
        duration: "4:32",
    },
    {
        id: "collab2",
        title: "Mata Aye Ona",
        year: "2025",
        youtubeId: "2euX0MvU-Wo",
        type: "original",
        duration: "3:45",
    },
    {
        id: "collab3",
        title: "Me Adare Ridum",
        year: "2025",
        youtubeId: "WQxZlKimGqo",
        type: "original",
        duration: "4:10",
    },
];

export const featuredTracks = [
    {
        id: "ft1",
        title: "Hadawatha Parana",
        spotifyEmbedId: "7qjJw0NrAV7EpJG90kgNx4",
    },
    {
        id: "ft2",
        title: "Sansara Sihine",
        spotifyEmbedId: "7qjJw0NrAV7EpJG90kgNx4",
    },
    {
        id: "ft3",
        title: "Mage Prana",
        spotifyEmbedId: "7qjJw0NrAV7EpJG90kgNx4",
    },
];
