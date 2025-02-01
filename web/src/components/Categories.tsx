import Image from "next/image";

export default function Categories() {
  return (
    <>
      <section className="px-40 p-10 flex gap-10 bg-blue-400 flex-col">
        <h1 className="underline text-5xl">CATEGORIES</h1>
        <ul className="grid grid-cols-3 gap-10">
          <li className=" flex flex-col items-center gap-3">
            <Image src={"/file.svg"} width={60} height={60} alt="dummyCat1"/>
            <span>dummyCat1</span>
          </li>
          <li className=" flex flex-col items-center gap-3">
            <Image src={"/globe.svg"} width={60} height={60} alt="dummyCat2"/>
            <span>dummyCat2</span>
          </li>
          <li className=" flex flex-col items-center gap-3">
            <Image src={"/vercel.svg"} width={60} height={60} alt="dummyCat3"/>
            <span>dummyCat3</span>
          </li>
        </ul>
      </section>
    </>
  );
}
