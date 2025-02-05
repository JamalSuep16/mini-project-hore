import Image from "next/image";

export default function EventDetails() {
  return (
    <>
      <section className="grid grid-cols-2 gap-14 p-10 px-40">
        <div className="sticky top-20 flex h-fit flex-col gap-3 rounded-lg border p-5">
          <div className="relative h-52 w-full">
            <Image
              src={"/akane.jpg"}
              fill
              alt="dummy event image"
              className="object-cover"
            />
          </div>
          {/* title */}
          <h1>Events title</h1>

          {/* Desc */}
          <h2>Descriprion</h2>

          {/* Location */}
          <h2>Location</h2>

          {/* price */}
          <h3>Rp.3.000.000</h3>

          {/* organizer */}
          <h3>by a muskateer</h3>
        </div>

        {/* description */}
        <div className="">
          <span>Event description</span>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
            similique ipsum iure vero. Dignissimos, deleniti assumenda
            consequuntur aperiam unde nihil atque in facilis earum minus officia
            fugit laudantium libero repellendus est quae fuga voluptates
            voluptatum optio placeat laboriosam hic doloremque. Iusto numquam
            mollitia ratione, eligendi ex nulla nam quam minus doloribus cumque
            veniam consequuntur! Quibusdam a id incidunt fugiat, asperiores
            voluptates expedita aperiam inventore tempora eaque dolorem fugit
            ipsum ut! In consequatur quibusdam porro voluptas dolores alias
            facere expedita iure odit corrupti omnis sunt, qui obcaecati nobis
            natus distinctio sequi quod. Voluptatem laboriosam, amet at dolorem
            eius non magni soluta quaerat sapiente esse iusto hic similique. Aut
            eligendi delectus molestiae repellat blanditiis distinctio in illum
            autem eum facilis quo error expedita hic voluptates doloremque
            laboriosam assumenda eius, soluta tenetur! Quos, modi porro.
            Maiores, excepturi. Aperiam earum maxime ratione! Beatae dolores et
            est non adipisci molestias, inventore, explicabo voluptates
            distinctio ducimus reprehenderit placeat perspiciatis blanditiis vel
            omnis unde minima laudantium. Aut, sint quia voluptatum architecto
            itaque provident, accusantium molestias voluptates hic pariatur cum
            accusamus totam delectus temporibus sapiente aspernatur assumenda
            quae autem dolore qui, inventore eius nesciunt. Doloribus, magni
            facilis aliquid eaque facere iure sed! Ad dignissimos veritatis
            eligendi odit tenetur!
          </p>
        </div>
      </section>
    </>
  );
}
