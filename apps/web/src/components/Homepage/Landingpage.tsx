import Image from "next/image";

export default function Landingpage() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10 md:p-14 px-5 md:px-20 lg:px-40 items-center">
      
      {/* Text Section */}
      <div className="flex flex-col justify-center gap-5">
        <h1 className="text-3xl md:text-5xl font-playwrite_AU_SA">Hore!</h1>
        <h2 className="text-xl md:text-3xl font-playwrite_AU_SA">
          by The Three Musketeers
        </h2>
        <p className="text-sm md:text-base leading-relaxed">
          HORE is a modern event management platform designed to simplify event planning and organization. 
          Whether it&apos;s a corporate conference, a wedding, or a community gathering, HORE provides 
          seamless tools for event scheduling, guest management, and ticketing.
        </p>
        <p className="font-bold text-primeJamal text-xs md:text-sm">
          Built as a mini project at Digital Tech School, this platform showcases innovative web development 
          techniques, ensuring a user-friendly experience for both organizers and attendees.
        </p>
      </div>

      {/* Image Section */}
      <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTgwOTN8MHwxfHNlYXJjaHwxfHxldmVudHxlbnwwfHx8fDE3Mzc0NDIyNzJ8MA&ixlib=rb-4.0.3&q=80&w=1080"
          fill
          alt="homepage"
          className="object-cover"
        />
      </div>

    </section>
  );
}
