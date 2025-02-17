import Image from "next/image";
import axios from "axios";

export default async function Categories() {
  const cate = await axios.get("http://localhost:8000/api/v1/categories");

  interface Cate {
    id: number;
    name: string;
    preview: string;
    imageURL: string;
  }

  return (
    <section className="flex flex-col gap-10 p-10 md:p-14 px-5 md:px-20 lg:px-40">
      <h1 className="font-playwrite_AU_SA text-3xl md:text-4xl lg:text-5xl underline text-center">
        Categories
      </h1>

      {/* Responsive Grid */}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {cate.data.data.map((cate: Cate) => (
          <li key={cate.id} className="flex flex-col items-center gap-3 p-5">
            <div className="relative h-48 md:h-52 w-full max-w-xs overflow-hidden rounded-lg shadow-lg">
              <Image
                src={cate.imageURL}
                fill
                alt={cate.name}
                className="object-cover"
              />
              <div className="absolute flex h-full w-full flex-col items-center justify-center gap-2 bg-black bg-opacity-50 p-3 text-center">
                <h2 className="font-playwrite_AU_SA text-2xl md:text-3xl font-bold text-white">
                  {cate.name}
                </h2>
                <p className="font-medium text-sm md:text-base text-bluePastel">
                  {cate.preview}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
