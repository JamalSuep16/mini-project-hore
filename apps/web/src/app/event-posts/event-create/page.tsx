"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import { notify } from "@/utils/notify-toast";
import axios from "axios";

export default function RegisterPage() {
  const [formRegister, setFormRegister] = useState({
    title: "",
    desc: "",
    image: "",
    upcoming: "",
    price: "",
    date: "",
    location: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function getRoles() {
      try {
        const response = await axios.post("http://localhost:8000/api/v1/roles");
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }

    getRoles();
  }, []);

  async function handleSubmit() {
    try {
      setIsLoading(true);

      const response = await axios.post("http://localhost:8000/api/v1/roles");

      console.log(response);

      // if (!response.ok) {
      //   return notify("Error!");
      // }

      // notify("Registration successfull");
      router.push("/auth/login");
    } catch (error) {
      console.error(error);
    } finally {
      setFormRegister({
        title: "",
        desc: "",
        image: "",
        upcoming: "",
        price: "",
        date: "",
        location: "",
      });
      setIsLoading(false);
    }
  }

  return (
    <section className="flex min-h-screen flex-col items-center justify-center">
      <form
        className="flex flex-col gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="grid grid-cols-[125px_1fr] bg-pinkPastel p-2">
          <label htmlFor="title">title</label>
          <input
            type="text"
            id="title"
            value={formRegister.title}
            onChange={(e) =>
              setFormRegister((prev) => {
                return { ...prev, title: e.target.value };
              })
            }
            required
            className="bg-darkPurple"
          />
        </div>

        <div className="grid grid-cols-[125px_1fr] bg-pinkPastel p-2">
          <label htmlFor="desc">desc</label>
          <input
            type="text"
            id="desc"
            value={formRegister.desc}
            onChange={(e) =>
              setFormRegister((prev) => {
                return { ...prev, desc: e.target.value };
              })
            }
            required
            className="bg-darkPurple"
          />
        </div>

        <div className="grid grid-cols-[125px_1fr] bg-pinkPastel p-2">
          <label htmlFor="image">image</label>
          <input
            type="file"
            id="image"
            value={formRegister.image}
            onChange={(e) =>
              setFormRegister((prev) => {
                return { ...prev, image: e.target.value };
              })
            }
            required
            className="bg-darkPurple"
          />
        </div>

        <div className="grid grid-cols-[125px_1fr] bg-pinkPastel p-2">
          <label htmlFor="location">location</label>
          <input
            type="text"
            id="location"
            value={formRegister.location}
            onChange={(e) =>
              setFormRegister((prev) => {
                return { ...prev, location: e.target.value };
              })
            }
            required
          />
        </div>

        <div className="grid grid-cols-[125px_1fr] bg-pinkPastel p-2">
          <label htmlFor="location">location</label>
          <input
            type="text"
            id="location"
            value={formRegister.location}
            onChange={(e) =>
              setFormRegister((prev) => {
                return { ...prev, location: e.target.value };
              })
            }
            required
          />
        </div>

        <div className="grid grid-cols-[125px_1fr] bg-pinkPastel p-2">
          <label htmlFor="location">location</label>
          <input
            type="text"
            id="location"
            value={formRegister.location}
            onChange={(e) =>
              setFormRegister((prev) => {
                return { ...prev, location: e.target.value };
              })
            }
            required
          />
        </div>

        <div className="grid grid-cols-[125px_1fr] bg-pinkPastel p-2">
          <label htmlFor="referralCode">Referral Code</label>
          <input type="text" id="referralCode" />
        </div>

        <button
          type="submit"
          className={`${
            isLoading
              ? "border-gray-500 text-gray-500"
              : "border-black text-black"
          } mb-4 mt-2 border`}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Register"}
        </button>
      </form>
      <p>Already have an account? Login here</p>
    </section>
  );
}
