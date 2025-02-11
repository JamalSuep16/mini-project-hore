"use client"

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Event {
  id: number;
  title: string;
  desc: string;
  categories: string;
  image: string;
  upcoming: boolean;
  price: number;
  date: string;
}

export default function EventDetails() {
  const rating = [1, 2, 3, 4, 5];

  // ✅ Fix 1: Initialize state properly
  const [singleEvent, setSingleEvent] = useState<Event | null>(null);
  

  useEffect(() => {
    async function fetchSingleEvent() {
      try {
        const res = await axios.get(`http://localhost:8000/api/v1/events/10`);
        
        // ✅ Fix 2: Extract `res.data.data`, not the entire response
        setSingleEvent(res.data.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchSingleEvent();
  }, []); // ✅ Fix 3: Add empty dependency array

  if (!singleEvent) return <p>Loading...</p>;

  console.log(singleEvent)

  return (
    <>
      <section className="grid grid-cols-2 gap-14 p-10 px-40">
        {/* ✅ Fix 4: Remove `.map()` and access event data directly */}
        <div className="sticky top-20 flex h-fit flex-col gap-3 rounded-lg border-4 p-5">
          <div className="relative h-52 w-full">
            <Image
              src={singleEvent.image} // Use actual event image
              fill
              alt={singleEvent.title}
              className="object-cover"
            />
          </div>
          {/* title */}
          <h1>{singleEvent.title}</h1>

          {/* Desc */}
          <h2>{singleEvent.desc}</h2>

          {/* Category */}
          <h3>Category: {singleEvent.categories}</h3>

          {/* Price */}
          <h3>Rp.{singleEvent.price.toLocaleString()}</h3>

          {/* Date */}
          <h3>Date: {new Date(singleEvent.date).toLocaleDateString()}</h3>
        </div>

        {/* description */}
        <div className="">
          <span>Event description</span>
          <p>{singleEvent.desc}</p>

          <div className="mt-5 flex flex-col gap-2">
            {rating.map((rate, index) => (
              <div key={index} className="flex gap-1">
                <input type="radio" name="rating" />
                <label htmlFor={`rate-${index}`}>
                  <Image
                    src={`/rating/rating${rate}.png`}
                    alt={`star ${rate}`}
                    width={100}
                    height={100}
                  />
                </label>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
