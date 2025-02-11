"use client";

export default function Logout() {
  return (
    <button
      onClick={async () => {
        await fetch("http://localhost:8000/api/v1/auth/logout", {
          method: "POST",
          credentials: "include",
        });
      }}
       className="rounded-full border-2 border-darkPurple px-3 py-1 font-delius text-darkPurple"
    >
      Logout
    </button>
  );
}
