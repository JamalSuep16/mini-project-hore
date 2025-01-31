import Image from "next/image";

export default function Homepage() {
  return (
    <>
      <section className="fixed px-40 p-10 flex gap-20 bg-blue-400">
        <div className="h-96 w-1/2 flex flex-col justify-center gap-3">
          <h1 className="text-5xl">Hore!</h1>
          <h2 className="text-3xl">by The Three Musketeers</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque in
            voluptatum vero inventore voluptas quod quis adipisci repellat nam!
            Sit, fuga. Voluptatum magni adipisci laborum eaque sit nostrum
            nihil, vitae tempora numquam atque.
          </p>
          <p className="font-bold text-primeJamal">
            placeat et neque consectetur commodi dolor provident pariatur nulla
            officiis, illum qui in
          </p>
        </div>
        <div className="relative h-96 w-1/2 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTgwOTN8MHwxfHNlYXJjaHwxfHxldmVudHxlbnwwfHx8fDE3Mzc0NDIyNzJ8MA&ixlib=rb-4.0.3&q=80&w=1080"
            fill
            alt="homepage"
            className="object-cover"
          />
        </div>
      </section>
    </>
  );
}
