import Image from "next/image";
import Link from "next/link";
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
    <>
      <section className="flex flex-col gap-10 p-14 px-40">
        <h1 className="font-playwrite_AU_SA text-5xl underline">Categories</h1>
        <ul className="grid grid-cols-2 gap-10">
          {cate.data.data.map((cate: Cate) => {
            return (
              <Link href={`/categories-posts/${cate.name}`} key={cate.id}>
                <li className="flex flex-col items-center gap-3 p-10">
                  <div className="relative h-52 w-80 overflow-hidden rounded-lg">
                    <Image
                      src={cate.imageURL}
                      fill
                      alt={cate.name}
                      className="object-cover"
                    />
                    <div className="absolute flex h-full w-full flex-col items-center justify-center gap-3 bg-black bg-opacity-50">
                      <h2 className="font-playwrite_AU_SA text-4xl font-bold">
                        {cate.name}
                      </h2>
                      <p className="font-medium text-bluePastel">
                        {cate.preview}
                      </p>
                    </div>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </section>
    </>
  );
}
