import Image from "next/image";

export default function Location() {
  return (
    <>
      <section className="flex flex-col gap-10  p-10 px-40">
        <h1 className="font-playwrite_AU_SA text-5xl underline">Location</h1>
        <div className="grid grid-cols-3 gap-10">
          <div className="w-80 h-44 relative rounded-3xl">
            <Image
              src={"/akane.jpg"}
              fill
              alt="should be a location"
              className="object-cover"
            />
            <div className="absolute bg-black bg-opacity-60 w-full h-full z-10 flex justify-center items-center text-4xl font-delius text-yellowPastel">JAKARTA</div>
          </div>
          <div className="w-80 h-h-44 relative ">
            <Image
              src={"/akane.jpg"}
              fill
              alt="should be a location"
              className="object-cover"
            />
            <div className="absolute bg-black bg-opacity-60 w-full h-full z-10 flex justify-center items-center text-4xl font-delius text-yellowPastel ">BANDUNG</div>
          </div>
          <div className="w-80 h-h-44 relative ">
            <Image
              src={"/akane.jpg"}
              fill
              alt="should be a location"
              className="object-cover"
            />
            <div className="absolute bg-black bg-opacity-60 w-full h-full z-10 flex justify-center items-center text-4xl font-delius text-yellowPastel">CIKARANG</div>
          </div>
        </div>
      </section>
    </>
  );
}
