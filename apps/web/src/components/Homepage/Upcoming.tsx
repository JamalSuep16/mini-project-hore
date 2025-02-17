import axios from "axios";
import Image from "next/image";
import Link from "next/link";

interface Upcoming {
  id: number;
  title: string;
  categories: string;
  desc: string;
  image: string;
  location: string;
  price: string;
  date: string;
}

export default async function UpcomingEvents() {
  const upcoming = await axios.get(
    "http://localhost:8000/api/v1/events/upcoming"
  );

  return (
    <section className="p-10 sm:p-14 px-5 sm:px-10 md:px-20 lg:px-40">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Header */}
        <h1 className="font-playwrite_AU_SA text-3xl md:text-5xl underline">
          Upcoming Events
        </h1>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcoming.data.data.map((post: Upcoming) => {
            // Format date
            const formattedDate = new Date(post.date).toLocaleDateString("en-GB");

            return (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden border-2 border-yellowPastel transition-transform hover:scale-105"
              >
                {/* Image Container */}
                <div className="relative w-full h-56 md:h-64">
                  <Image
                    src={post.image}
                    fill
                    alt={post.title}
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h2 className="text-[#9370DB] text-xl md:text-2xl font-medium mb-2">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="text-pink-300 text-sm md:text-base mb-4 line-clamp-3">
                    {post.desc}
                  </p>

                  {/* Category */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-gray-600">Category:</span>
                    <span className="text-[#9370DB]">{post.categories}</span>
                  </div>

                  {/* Price and Date */}
                  <div className="space-y-1 mb-4 text-sm md:text-base">
                    <p className="text-gray-600">{post.price}</p>
                    <p className="text-gray-600">Date: {formattedDate}</p>
                  </div>

                  {/* Read More Link */}
                  <Link
                    href={`/event-posts/${post.id}`}
                    className="text-blue-400 hover:text-blue-500 transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

  );
}
