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
  const ConditionalString = reviewContent.length > 20 ? reviewContent.substring(0,19) + "...." : reviewContent;
  return (
    <>
      <div className="flex flex-col my-4 mx-3 w-full max-w-screen-md border border-gray-300 rounded-xl p-4 shadow-md">
        <div className="flex items-center">
          <div className="relative h-14 w-14 md:h-20 md:w-20 rounded-full border-2 border-white mt-2 md:mt-0 md:mr-4">
            <img
              src={profileImage}
              alt="profile"
              className="rounded-full"
              width={100}
              height={100}
            />
          </div>
          <div className="flex flex-col flex-grow mt-2 md:mt-0">
            <h1 className="font-semibold">{Username}</h1>
            <Rating name="read-only" value={Ratings} readOnly />
            <p className="mt-2">{ConditionalString}</p>
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-500 md:mt-0">{Dates}</p>
      </div>
    </>
  );
}
