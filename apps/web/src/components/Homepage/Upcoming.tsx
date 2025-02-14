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
    "http://localhost:8000/api/v1/events/upcoming",
  );

  return (
    <section className=" p-14 px-40">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Header */}
        <h1 className="font-playwrite_AU_SA text-5xl underline">
          Upcomming Events
        </h1>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcoming.data.data.map((post: Upcoming) => (
            <div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden border-2 border-yellowPastel">
              {/* Image Container */}
              <div className="relative h-48 w-full">
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
                <h2 className="text-[#9370DB] text-2xl font-medium mb-2">
                  {post.title}
                </h2>

                {/* Description */}
                <p className="text-pink-300 mb-4">
                  {post.desc}
                </p>

                {/* Category */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-gray-600">Category:</span>
                  <span className="text-[#9370DB]">{post.categories}</span>
                </div>

                {/* Price and Date */}
                <div className="space-y-1 mb-4">
                  <p className="text-gray-600">
                    {post.price}
                  </p>
                  <p className="text-gray-600">
                    Date: {post.date}
                  </p>
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
          ))}
        </div>
      </div>
    </section>
  );
}