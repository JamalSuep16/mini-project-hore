import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center p-5 bg-blue-800 px-40 max-xl:px-10">
        <h1>Logo</h1>
        <ul className="flex gap-5 items-center">
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
          <li className="border border-white rounded-full px-3 mx-3">
            <Link href={"/"}>Log In</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
