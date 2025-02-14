"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function RegisterPage() {
  const [formRegister, setFormRegister] = useState({
    title: "",
    categories: "",
    desc: "",
    image: null as File | null,
    upcoming: false, // Updated to boolean
    price: "",
    date: "",
    location: "",
  });
  const [submited, setSubmited] = useState(false);
  const [cate, setCate] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getCategories() {
      try {
        const res = await axios.get("http://localhost:8000/api/v1/categories");
        setCate(res.data.data);
      } catch (error) {
        console.error(error);
      }
    }

    getCategories();
  }, []);

  async function handleSubmit() {
    try {
      setIsLoading(true);

      const formData = new FormData();
      formData.append("title", formRegister.title);
      formData.append("categories", formRegister.categories);
      formData.append("desc", formRegister.desc);
      if (formRegister.image) {
        formData.append("image", formRegister.image);
      }
      formData.append("upcoming", String(formRegister.upcoming)); // Convert boolean to string
      formData.append("price", formRegister.price);
      formData.append("date", formRegister.date);
      formData.append("location", formRegister.location);

      const response = await axios.post(
        "http://localhost:8000/api/v1/events",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } },
      );
    } catch (error) {
      console.error(error);
    } finally {
      setFormRegister({
        title: "",
        categories: "",
        desc: "",
        image: null,
        upcoming: false,
        price: "",
        date: "",
        location: "",
      });
      setIsLoading(false);
    }
  }

  console.log(cate);

  return (
    <section className="flex min-h-screen flex-col items-center justify-center">
      <form
        className="flex flex-col gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        {/** Title Field */}
        <div className="grid grid-cols-[125px_1fr] bg-pinkPastel p-2">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={formRegister.title}
            onChange={(e) =>
              setFormRegister((prev) => ({ ...prev, title: e.target.value }))
            }
            required
            className="bg-darkPurple"
          />
        </div>

        {/** Categories Field */}
        <div className="grid grid-cols-[125px_1fr] bg-pinkPastel p-2">
          <label htmlFor="categories">Categories</label>
          <select
            id="categories"
            defaultValue="default"
            onChange={(e) =>
              setFormRegister((prev) => ({
                ...prev,
                categories: e.target.value,
              }))
            }
            required
            className="bg-darkPurple"
          >
            <option value="default" disabled>
              pick a categories!!
            </option>
            {cate?.map((cat, index) => {
              return (
                <option key={index} value={cat.name}>
                  {cat.name}
                </option>
              );
            })}
          </select>
        </div>

        {/** Description Field */}
        <div className="grid grid-cols-[125px_1fr] bg-pinkPastel p-2">
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            id="desc"
            value={formRegister.desc}
            onChange={(e) =>
              setFormRegister((prev) => ({ ...prev, desc: e.target.value }))
            }
            required
            className="bg-darkPurple"
          />
        </div>

        {/** Image Upload Field */}
        <div className="grid grid-cols-[125px_1fr] bg-pinkPastel p-2">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) =>
              setFormRegister((prev) => ({
                ...prev,
                image: e.target.files?.[0] || null,
              }))
            }
            required
            className="bg-darkPurple"
          />
        </div>

        {/** Upcoming Field (Boolean Radio Buttons) */}
        <div className="grid grid-cols-[125px_1fr] bg-pinkPastel p-2">
          <label>Upcoming</label>
          <div className="flex gap-4">
            <label>
              <input
                type="radio"
                name="upcoming"
                value="true"
                checked={formRegister.upcoming === true}
                onChange={() =>
                  setFormRegister((prev) => ({ ...prev, upcoming: true }))
                }
                required
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="upcoming"
                value="false"
                checked={formRegister.upcoming === false}
                onChange={() =>
                  setFormRegister((prev) => ({ ...prev, upcoming: false }))
                }
              />
              No
            </label>
          </div>
        </div>

        {/** Date Field (Date Input) */}
        <div className="grid grid-cols-[125px_1fr] bg-pinkPastel p-2">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={formRegister.date}
            onChange={(e) =>
              setFormRegister((prev) => ({ ...prev, date: e.target.value }))
            }
            required
          />
        </div>

        {/** Price Field (Number Input) */}
        <div className="grid grid-cols-[125px_1fr] bg-pinkPastel p-2">
          <label htmlFor="price">Price (IDR)</label>
          <input
            type="number"
            id="price"
            value={formRegister.price}
            onChange={(e) =>
              setFormRegister((prev) => ({ ...prev, price: e.target.value }))
            }
            min="0"
            step="1000"
            required
          />
        </div>

        {/** Location Field */}
        <div className="grid grid-cols-[125px_1fr] bg-pinkPastel p-2">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            value={formRegister.location}
            onChange={(e) =>
              setFormRegister((prev) => ({ ...prev, location: e.target.value }))
            }
            required
          />
        </div>

        {/** Submit Button */}
        <button
          type="submit"
          className={`${
            isLoading
              ? "border-gray-500 text-gray-500"
              : "border-black text-black"
          } mb-4 mt-2 border`}
          disabled={isLoading}
          onClick={setSubmited(()=>{return true})}
        >
          {isLoading ? "Loading..." : "Create Event"}
        </button>
      </form>
    </section>
  );
}
