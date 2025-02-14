"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

export default function Location() {
  const [locations, setLocations] = useState<{ [key: string]: any[] }>({});

  useEffect(() => {
    axios.get("http://localhost:8000/api/v1/events/locations") // Adjust endpoint based on your API route
      .then((response) => setLocations(response.data.data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  return (
    <section className="flex flex-col gap-10 p-10 px-40">
      <h1 className="font-playwrite_AU_SA text-5xl underline">Location</h1>
      {Object.entries(locations).map(([location, events]) => (
        <div key={location}>
          <h2 className="text-4xl font-playwrite_AU_SA my-8">{location}</h2>
          <div className="grid grid-cols-3 gap-10 mt-4 ">
            {events.map((event) => (
              <div key={event.id} className="w-80 h-44 relative rounded-3xl ">
                <Image
                  src={event.image || "/default-event.jpg"} // Ensure images are available
                  fill
                  alt={event.title}
                  className="object-cover rounded-3xl"
                />
                <div className="absolute bg-black bg-opacity-60 w-full h-full z-10 flex justify-center items-center text-xl font-delius text-yellowPastel rounded-3xl">
                  {event.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
