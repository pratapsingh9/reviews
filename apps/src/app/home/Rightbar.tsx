import React from "react";
import { CiSearch } from "react-icons/ci";

interface TrendingItems {
  title: string;
  profile: string;
}

const TrendingItem: TrendingItems[] = [
  {
    title: "Sports - Trending",
    profile: "Johnny Sins",
  },
  {
    title: "Increase in nsi",
    profile: "Gregory Dimitrov",
  },
  {
    title: "Indian Bills",
    profile: "Cody Fisher",
  },
  {
    title: "Microsoft Outrage",
    profile: "Technology",
  },
];


export default function Rightbar() {
  return (
    <div className="p-4 bg-white">
      <SearchBar />
      <div className="mt-8 w-full rounded-xl border border-gray-300 p-4 shadow-md">
        <h1 className="text-lg font-semibold">Who to Follow</h1>
        <ul className="mt-4 space-y-4">
          <li className="flex items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoM-G1dvmpiYr78W26mzWUyoFX_iaTDiO2Rw&s"
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="ml-3">
              <p className="font-semibold">Jane Cooper</p>
              <p className="text-sm text-gray-500">@JCooper</p>
            </div>
            <button className="ml-auto bg-blue-500 text-white py-1 px-3 rounded-full">
              Follow
            </button>
          </li>
          <li className="flex items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoM-G1dvmpiYr78W26mzWUyoFX_iaTDiO2Rw&s"
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="ml-3">
              <p className="font-semibold">Cody Fisher</p>
              <p className="text-sm text-gray-500">@CodyFisher</p>
            </div>
            <button className="ml-auto bg-blue-500 text-white py-1 px-3 rounded-full">
              Follow
            </button>
          </li>
          <li className="flex items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoM-G1dvmpiYr78W26mzWUyoFX_iaTDiO2Rw&s"
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="ml-3">
              <p className="font-semibold">Guy Hawkins</p>
              <p className="text-sm text-gray-500">@GuyHawkins</p>
            </div>
            <button className="ml-auto bg-blue-500 text-white py-1 px-3 rounded-full">
              Follow
            </button>
          </li>
        </ul>
        <div className="text-blue-400 font-semibold mt-4 hover:cursor-pointer">
          Show More
        </div>
      </div>
      <div className="mt-8 w-full bg-white rounded-xl border border-gray-300 p-4 shadow-md">
        <h1 className="text-lg font-semibold">Trending</h1>
        <ul className="mt-4 space-y-4">
          {TrendingItem.map((item, index) => (
            <TrendingLink key={index} id={index + 1} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function TrendingLink({ id, title, profile }) {
  return (
    <li>
      <p className="font-semibold">
        {id}. {title}
      </p>
      <p className="text-sm text-gray-500 mr-9">{profile}</p>
    </li>
  );
}

function SearchBar() {
  return (
    <div className="relative">
      <div className="flex items-center bg-gray-100 rounded-full p-2 transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-500">
        <CiSearch className="text-2xl text-gray-600 ml-2" />
        <input
          type="text"
          className="flex-1 bg-transparent text-gray-700 ml-2 outline-none"
          placeholder="Search..."
        />
      </div>
    </div>
  );
}
