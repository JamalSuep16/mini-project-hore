import axios from "axios";

export async function UpcomingEvents() {
  const res = await axios.get("http://localhost:8000/api/v1/events/upcoming");
  console.log(res);

  return (
    <>
      <section className="flex gap-20 p-10 px-40">
        {/* {res.data.map()} */}
      </section>
    </>
  );
}
