/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4PYlduGqEXe
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import React, { ReactNode, useState } from "react";

export default function ReviewComponen() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      title: "Excellent e-commerce experience",
      description:
        "I recently made a purchase on this website and was thoroughly impressed with the entire process. The website was user-friendly, the checkout was seamless, and the product arrived quickly and in perfect condition. Highly recommend!",
      rating: 4.5,
      upvotes: 123,
      downvotes: 12,
      category: "ecommerce",
      author: "JohnDoe123",
    },
    {
      id: 2,
      title: "Disappointing news website",
      description:
        "I'm really disappointed with this news website. The articles are often biased and lack depth. The website design is also outdated and difficult to navigate. I won't be returning to this site.",
      rating: 2,
      upvotes: 45,
      downvotes: 78,
      category: "news",
      author: "JaneSmith456",
    },
    {
      id: 3,
      title: "Fantastic travel booking experience",
      description:
        "I recently used this website to book a trip and had an amazing experience. The search functionality was intuitive, the prices were competitive, and the customer service was top-notch. I'll definitely be using this site for all my future travel needs.",
      rating: 4.8,
      upvotes: 201,
      downvotes: 15,
      category: "travel",
      author: "MikeBrown789",
    },
    {
      id: 4,
      title: "Mediocre streaming service",
      description:
        "I've been a subscriber to this streaming service for a few months now and I'm not overly impressed. The content selection is limited, the video quality is inconsistent, and the user interface is clunky. I'm considering cancelling my subscription.",
      rating: 3,
      upvotes: 67,
      downvotes: 54,
      category: "entertainment",
      author: "SarahJohnson012",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("recent");
  const [filterCategory, setFilterCategory] = useState("all");
  const filteredReviews = reviews
    .filter((review) => {
      if (filterCategory === "all") return true;
      return review.category === filterCategory;
    })
    .sort((a, b) => {
      if (sortBy === "recent") {
        return b.id - a.id;
      } else if (sortBy === "top") {
        return b.upvotes - a.upvotes;
      } else {
        return a.rating - b.rating;
      }
    })
    .filter((review) => {
      return (
        review.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        review.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  const handleUpvote = (reviewId) => {
    setReviews(
      reviews.map((review) =>
        review.id === reviewId
          ? { ...review, upvotes: review.upvotes + 1 }
          : review
      )
    );
  };
  const handleDownvote = (reviewId) => {
    setReviews(
      reviews.map((review) =>
        review.id === reviewId
          ? { ...review, downvotes: review.downvotes + 1 }
          : review
      )
    );
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Recent Reviews</h1>
        <div className="flex items-center space-x-4">
          <div>
            <label htmlFor="sort-by" className="mr-2">
              Sort by:
            </label>
            <select
              id="sort-by"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-2 py-1 border rounded-md"
            >
              <option value="recent">Recent</option>
              <option value="top">Top Rated</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>
          <div>
            <label htmlFor="filter-category" className="mr-2">
              Filter by:
            </label>
            <select
              id="filter-category"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-2 py-1 border rounded-md"
            >
              <option value="all">All</option>
              <option value="ecommerce">E-commerce</option>
              <option value="news">News</option>
              <option value="travel">Travel</option>
              <option value="entertainment">Entertainment</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              placeholder="Search reviews..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-2 py-1 border rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{review.title}</h2>
              <p className="text-gray-600 mb-4">{review.description}</p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-500 font-bold">
                    {review.rating.toFixed(1)}
                  </span>
                  <span className="text-gray-500">
                    ({review.upvotes + review.downvotes} votes)
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    className="text-gray-500 hover:text-green-500"
                    onClick={() => handleUpvote(review.id)}
                  >
                    <ThumbsUpIcon className="w-5 h-5" />
                  </button>
                  <button
                    className="text-gray-500 hover:text-red-500"
                    onClick={() => handleDownvote(review.id)}
                  >
                    <ThumbsDownIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <UserIcon className="w-4 h-4 mr-2" />
                <span>{review.author}</span>
                <span className="mx-2">•</span>
                <span>{review.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ThumbsDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 14V2" />
      <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
    </svg>
  );
}

function ThumbsUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  );
}

function props(id: Number, data: ReactNode) {
  return <div>{data}</div>;
}

function UserIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
