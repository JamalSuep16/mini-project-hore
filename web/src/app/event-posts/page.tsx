import Image from "next/image";

export default function EventPostsPage() {
  return (
    <>
      <section className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center bg-lightAnas text-darkAnas p-5 gap-3 w-80 rounded-lg">
          <div className="relative h-32 w-full rounded-md overflow-hidden">
            <Image src="/akane.jpg" fill alt="testing" className="object-cover"/>
          </div>
          <div className="flex flex-col w-full gap-2">
            <h1 className="font-bold text-xl bg-lightSena p-2 rounded-sm">Events title</h1>
            <p>this date is a new date</p>
            <p>in Jakarta</p>
            <p>Rp.3.000.000</p>
            <p>by a Muskateer!</p>
          </div>
        </div>
      </section>
    </>
  );
}
