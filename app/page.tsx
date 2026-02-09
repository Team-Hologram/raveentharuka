import Hero from "@/components/home/Hero";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import NewReleases from "@/components/home/NewReleases";
import FeaturedMusic from "@/components/home/FeaturedMusic";
import Gallery from "@/components/home/Gallery";
import BookingForm from "@/components/home/BookingForm";

export default function HomePage() {
    return (
        <>
            <Hero />
            <UpcomingEvents />
            <NewReleases />
            <FeaturedMusic />
            <Gallery />
            <BookingForm />
        </>
    );
}
