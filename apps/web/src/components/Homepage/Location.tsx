import Image from "next/image";
import axios from "axios";
import Link from "next/link";

interface Events {
  id: number;
  title: string;
  image: string;
}

export default async function Location() {
  try {
    const response = await axios.get(
      "http://localhost:8000/api/v1/events/locations",
    );
    const locations = response.data.data || {}; // Ensure data is properly structured

    return (
      <section className="flex flex-col gap-10 p-10 px-5 sm:px-10 md:px-20 lg:px-40">
        <h1 className="font-playwrite_AU_SA text-3xl underline sm:text-4xl md:text-5xl">
          Location
        </h1>

        {Object.entries(locations).map(([location, events]) => (
          <div key={location}>
            <h2 className="my-6 font-playwrite_AU_SA text-2xl sm:text-3xl md:text-4xl">
              {location}
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {(events as Events[]).map((event: Events) => (
                <Link href={`/event-posts/${event.id}`} key={event.id}>
                  <div className="relative overflow-hidden rounded-3xl shadow-lg transition-transform hover:scale-105">
                    <Image
                      src={event.image || "/default-event.jpg"}
                      width={400}
                      height={200}
                      alt={event.title}
                      className="h-48 w-full rounded-3xl object-cover sm:h-56 md:h-64"
                    />
                    <div className="absolute inset-0 flex items-center justify-center rounded-3xl bg-black bg-opacity-60 font-delius text-lg text-yellowPastel sm:text-xl">
                      {event.title}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    );
  } catch (error) {
    console.error("Error fetching events:", error);
    return (
      <p className="text-center text-lg sm:text-xl">
        Failed to load events. Please try again later.
      </p>
    );
  }
}
