export interface Event {
    id: string;
    date: string;
    day: string;
    month: string;
    year: string;
    city: string;
    venue: string;
    eventType: string;
    ticketUrl?: string;
    image?: string;
    description?: string;
}

export const upcomingEvents: Event[] = [
    {
        id: "1",
        date: "2026-03-15",
        day: "15",
        month: "MAR",
        year: "2026",
        city: "Colombo",
        venue: "Nelum Pokuna Theatre",
        eventType: "Concert",
        image: "/images/gallery/event-1.jpg",
        ticketUrl: "#",
    },
    {
        id: "2",
        date: "2026-03-22",
        day: "22",
        month: "MAR",
        year: "2026",
        city: "Kandy",
        venue: "Kandy City Centre",
        eventType: "Live Performance",
        image: "/images/gallery/event-2.jpg",
        ticketUrl: "#",
    },
    {
        id: "3",
        date: "2026-04-05",
        day: "05",
        month: "APR",
        year: "2026",
        city: "Galle",
        venue: "Galle Face Hotel",
        eventType: "Private Event",
        image: "/images/gallery/event-3.jpg",
    },
    {
        id: "4",
        date: "2026-04-18",
        day: "18",
        month: "APR",
        year: "2026",
        city: "Negombo",
        venue: "Jetwing Blue",
        eventType: "Wedding",
        image: "/images/gallery/event-4.jpg",
    },
    {
        id: "5",
        date: "2026-05-01",
        day: "01",
        month: "MAY",
        year: "2026",
        city: "Colombo",
        venue: "BMICH",
        eventType: "Festival",
        ticketUrl: "#",
    },
];
