import Categories from "@/components/Homepage/Categories";
import Homepage from "@/components/Homepage/Landingpage";
import Location from "@/components/Homepage/Location";
// import Upcoming from "@/components/Homepage/Upcoming";

export default function Home() {
  return (
    <>
      <Homepage />

      {/* <Upcoming /> */}

      <Categories />

      <Location />
    </>
  );
}
