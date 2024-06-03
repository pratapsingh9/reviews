import Rating from "@mui/material/Rating";
import Image from "next/image";
export default function ReviewsPages({
  reviewContent,
  profileImage,
  Ratings,
  Dates,
  Username,
}: {
  reviewContent: String;
  profileImage: any;
  Ratings: number;
  Dates: any;
  Username: String;
}) {
  console.log(reviewContent);
  return (
    <>
      <div className="flex my-2 mx-3 w-full max-w-screen-md  border border-gray-300 rounded-xl p-4 shadow-md">
        <div className="relative h-14 w-14 rounded-full border-2 border-white mt-2">
          <img
            src={profileImage}
            alt="profile"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col ml-2">
          <h1 className="ml-1 font-semibold">{Username}</h1>
          <Rating name="read-only" value={Ratings} readOnly />
          <p className="mt">{reviewContent}</p>
        </div>
        <p className="ml-auto pt-2 text-gray-500">{Dates}</p>
      </div>
    </>
  );
}
