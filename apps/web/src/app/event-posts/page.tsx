"use client";

import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";

interface Event {
  id: number;
  title: string;
  desc: string;
  categories: string;
  image: string;
  upcoming: boolean;
  date: string;
  location:string
  price: number
}

interface EventsResponse {
  data: Event[];
  meta: {
    totalPages: number;
    currentPage: number;
    limit: number;
    totalCount: number;
  };
}

export default function EventPostsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(2);
  const [totalPages, setTotalPages] = useState(3);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchEvents() {
      setIsLoading(true);
      try {
        const response = await axios.get<EventsResponse>(
          `http://localhost:8000/api/v1/events/paginated?page=${page}&limit=${limit}`,
        );

        // Update events from response data
        setEvents(response.data.data);
        // Update total pages from meta data if available, otherwise keep default 3
        setTotalPages(response.data.meta?.totalPages || 3);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchEvents();
  }, [page, limit]);

  const handlePageChange = (newPage: number) => {
    // Ensure page stays within bounds (1 to totalPages)
    const boundedPage = Math.max(1, Math.min(newPage, totalPages));
    setPage(boundedPage);
  };

  if (isLoading) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  return (
    <section>
      <h1 className="mx-40 mt-10 font-playwrite_AU_SA">Events</h1>

      <div className="mt-4 flex items-center justify-center gap-4">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page <= 1}
          className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:bg-gray-300"
        >
          Previous
        </button>

        <p className="text-lg">
          Page {page} of {totalPages}
        </p>

        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page >= totalPages}
          className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:bg-gray-300"
        >
          Next
        </button>
      </div>

      <div className="grid grid-cols-2 p-20">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-lightAnas text-darkAnas flex w-96 flex-col gap-3 justify-self-center rounded-lg border-4 border-lightPurple p-5 shadow-2xl"
          >
            <div className="relative h-44 w-full overflow-hidden rounded-md">
              <Image
                src={event.image}
                fill
                alt={event.title}
                className="object-cover"
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <div className="bg-lightSena flex flex-col gap-3 rounded-sm p-2 font-bold">
                <h1 className="text-2xl">{event.title}</h1>
                <p>{event.categories}</p>
              </div>
              <p>{event.date}</p>
              <p>{event.desc}</p>
              <p>{event.location}</p>
              <p>{`Rp. ${event.price} 000`}</p>
              <p>by a Muskateer!</p>
              <Link href={`/event-posts/${String(event.id)}`}>Read More</Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center gap-4 pb-8">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page <= 1}
          className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:bg-gray-300"
        >
          Previous
        </button>

        <p className="text-lg">
          Page {page} of {totalPages}
        </p>

        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page >= totalPages}
          className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:bg-gray-300"
        >
          Next
        </button>

        <select
          value={page}
          onChange={(e) => handlePageChange(Number(e.target.value))}
          className="ml-4 rounded-md border p-2"
        >
          {Array.from({ length: totalPages }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}
