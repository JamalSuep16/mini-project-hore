"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function RegisterPage() {
  const [formRegister, setFormRegister] = useState({
    title: "",
    categories: "",
    desc: "",
    image: null as File | null,
    upcoming: false,
    price: "",
    date: "",
    location: "",
  });

  const [submited, setSubmited] = useState(false);
  const [cate, setCate] = useState<{ name: string }[]>([]);
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
      formData.append("upcoming", String(formRegister.upcoming));
      formData.append("price", formRegister.price);
      formData.append("date", formRegister.date);
      formData.append("location", formRegister.location);

      await axios.post("http://localhost:8000/api/v1/events", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setSubmited(true);
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

      setTimeout(() => setSubmited(false), 3000);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-lightPurple p-6">
      {submited && (
        <div className="fixed top-4 right-4 animate-fade-in-down bg-bluePastel text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span className="font-delius">Event Created Successfully! 🎉</span>
        </div>
      )}

      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-playwrite_AU_SA text-darkPurple mb-6 text-center">Create New Event</h2>
        
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="space-y-4">
            {/* Title Field */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="title" className="text-sm font-montserrat text-darkPurple">
                Event Title
              </label>
              <input
                type="text"
                id="title"
                value={formRegister.title}
                onChange={(e) =>
                  setFormRegister((prev) => ({ ...prev, title: e.target.value }))
                }
                required
                className="px-4 py-2 border border-pinkPastel rounded-lg focus:ring-2 focus:ring-bluePastel focus:border-bluePastel outline-none transition duration-200 font-delius"
              />
            </div>

            {/* Categories Field */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="categories" className="text-sm font-montserrat text-darkPurple">
                Category
              </label>
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
                className="px-4 py-2 border border-pinkPastel rounded-lg focus:ring-2 focus:ring-bluePastel focus:border-bluePastel outline-none transition duration-200 font-delius"
              >
                <option value="default" disabled>
                  Select a category
                </option>
                {cate?.map((cat, index) => (
                  <option key={index} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Description Field */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="desc" className="text-sm font-montserrat text-darkPurple">
                Description
              </label>
              <textarea
                id="desc"
                value={formRegister.desc}
                onChange={(e) =>
                  setFormRegister((prev) => ({ ...prev, desc: e.target.value }))
                }
                required
                rows={4}
                className="px-4 py-2 border border-pinkPastel rounded-lg focus:ring-2 focus:ring-bluePastel focus:border-bluePastel outline-none transition duration-200 font-delius"
              />
            </div>

            {/* Image Upload Field */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="image" className="text-sm font-montserrat text-darkPurple">
                Event Image
              </label>
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
                className="px-4 py-2 border border-pinkPastel rounded-lg focus:ring-2 focus:ring-bluePastel focus:border-bluePastel outline-none transition duration-200 font-delius"
              />
            </div>

            {/* Upcoming Field */}
            <div className="flex flex-col space-y-2">
              <span className="text-sm font-montserrat text-darkPurple">Upcoming Event?</span>
              <div className="flex space-x-6">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="upcoming"
                    value="true"
                    checked={formRegister.upcoming === true}
                    onChange={() =>
                      setFormRegister((prev) => ({ ...prev, upcoming: true }))
                    }
                    required
                    className="w-4 h-4 text-bluePastel focus:ring-bluePastel"
                  />
                  <span className="text-darkPurple font-delius">Yes</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="upcoming"
                    value="false"
                    checked={formRegister.upcoming === false}
                    onChange={() =>
                      setFormRegister((prev) => ({ ...prev, upcoming: false }))
                    }
                    className="w-4 h-4 text-bluePastel focus:ring-bluePastel"
                  />
                  <span className="text-darkPurple font-delius">No</span>
                </label>
              </div>
            </div>

            {/* Date Field */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="date" className="text-sm font-montserrat text-darkPurple">
                Event Date
              </label>
              <input
                type="date"
                id="date"
                value={formRegister.date}
                onChange={(e) =>
                  setFormRegister((prev) => ({ ...prev, date: e.target.value }))
                }
                required
                className="px-4 py-2 border border-pinkPastel rounded-lg focus:ring-2 focus:ring-bluePastel focus:border-bluePastel outline-none transition duration-200 font-delius"
              />
            </div>

            {/* Price Field */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="price" className="text-sm font-montserrat text-darkPurple">
                Price (IDR)
              </label>
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
                className="px-4 py-2 border border-pinkPastel rounded-lg focus:ring-2 focus:ring-bluePastel focus:border-bluePastel outline-none transition duration-200 font-delius"
              />
            </div>

            {/* Location Field */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="location" className="text-sm font-montserrat text-darkPurple">
                Location
              </label>
              <input
                type="text"
                id="location"
                value={formRegister.location}
                onChange={(e) =>
                  setFormRegister((prev) => ({ ...prev, location: e.target.value }))
                }
                required
                className="px-4 py-2 border border-pinkPastel rounded-lg focus:ring-2 focus:ring-bluePastel focus:border-bluePastel outline-none transition duration-200 font-delius"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-3 px-4 rounded-lg text-white font-montserrat transition duration-200 ${
              isLoading
                ? "bg-darkPurple cursor-not-allowed opacity-70"
                : "bg-bluePastel hover:bg-yellowPastel hover:text-darkPurple active:bg-pinkPastel"
            }`}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center space-x-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Creating Event...</span>
              </div>
            ) : (
              "Create Event"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}