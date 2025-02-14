"use client"

import { useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";

export default function Feedback() {
  const [feedbackForm, setFeedbackForm] = useState({
    title: "",
    comment: "",
    rating: 0,
  });
  const [hoveredRating, setHoveredRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Feedback submitted:", feedbackForm);
  };

  const handleRatingClick = (rating: number) => {
    setFeedbackForm(prev => ({ ...prev, rating }));
  };

  const handleRatingHover = (rating: number) => {
    setHoveredRating(rating);
  };

  

  if (submitted) {
    return (
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
          <div className="text-center">
            <div className="mb-4 text-6xl">🎉</div>
            <h2 className="mb-2 text-2xl font-bold">Thank You!</h2>
            <p className="text-gray-600">Your feedback has been submitted successfully.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-4xl rounded-lg bg-white p-6 shadow-lg">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Share Your Feedback</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-[250px_1fr]">
          {/* Image and Rating Section */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative h-48 w-48 overflow-hidden rounded-lg">
              <Image
                src="/akane.jpg"
                fill
                alt="Product image"
                className="object-cover"
                priority
              />
            </div>
            <div className="text-center">
              <h3 className="font-medium">How was your experience?</h3>
              <div className="mt-2 flex justify-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onMouseEnter={() => handleRatingHover(star)}
                    onMouseLeave={() => handleRatingHover(0)}
                    onClick={() => handleRatingClick(star)}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      size={28}
                      className={`${
                        star <= (hoveredRating || feedbackForm.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label 
                htmlFor="title" 
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                value={feedbackForm.title}
                onChange={(e) => 
                  setFeedbackForm(prev => ({ ...prev, title: e.target.value }))
                }
                required
                className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Brief summary of your feedback"
              />
            </div>

            <div>
              <label 
                htmlFor="comment" 
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Comment
              </label>
              <textarea
                id="comment"
                value={feedbackForm.comment}
                onChange={(e) => 
                  setFeedbackForm(prev => ({ ...prev, comment: e.target.value }))
                }
                required
                rows={6}
                className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Share your thoughts and experience..."
              />
            </div>

            <button
              type="submit"
              disabled={!feedbackForm.rating}
              className="w-full rounded-md bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700 disabled:bg-gray-400"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}