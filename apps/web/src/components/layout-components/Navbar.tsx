import Link from "next/link";
import Image from "next/image";

import Logout from "../logout";
import SearchBar from "../Searchbar";

export default function Navbar() {
  return (
    <>
      <nav className="max-xl:px- flex items-center justify-between p-5 px-40">
        <Link href={"/"}>
          <Image
            src={"/hore.jpg"}
            width={60}
            height={60}
            alt="hore logo"
            className="object-cover"
          />
        </Link>

        <SearchBar/>

        <ul className="flex items-center gap-5">
          <li>
            <Link className="navbar" href={"/event-posts"}>
              Events
            </Link>
          </li>
          <li>
            <Link className="navbar" href={"/categories-posts"}>
              Categories
            </Link>
          </li>
          <li>
            <Link className="navbar" href={"/"}>
              Badges
            </Link>
          </li>
          <li>
            <Link className="navbar" href={"/leaderboards"}>
              Leaderboards
            </Link>
          </li>
          <li className="mx-3 rounded-full border-2 border-darkPurple px-3 py-1">
            <Link href={"/"} className="text-darkPurple font-delius">Log In</Link>
          </li>
            <Logout />

        </ul>
      </nav>
    </>
  );
}
