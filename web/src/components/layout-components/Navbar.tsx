import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between bg-blue-800 p-5 px-40 max-xl:px-10">
        <Link href={"/"}>Logo</Link>
        <ul className="flex items-center gap-5">
          <li>
            <Link href={"/event-posts"}>Events</Link>
          </li>
          <li>
            <Link href={"/"}>Categories</Link>
          </li>
          <li>
            <Link href={"/"}>Badges</Link>
          </li>
          <li>
            <Link href={"/leaderboards"}>Leaderboards</Link>
          </li>
          <li className="mx-3 rounded-full border border-white px-3">
            <Link href={"/"}>Log In</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
