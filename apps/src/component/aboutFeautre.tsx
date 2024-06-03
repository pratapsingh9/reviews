import { DeleteIcon, SearchIcon, StarIcon } from "lucide-react";

export default function AboutFeatures() {
  return (
    <>
      <section className="w-full h-full py-8 md:py-24 lg:py-32 rounded-xl shadow-md">
        <div className="container max-w-screen-lg mx-auto flex flex-col items-center justify-center gap-4 px-4 md:px-6">
          <div className="space-y-3 flex flex-col text-center">
            <h2 className="text-3xl mb-3 font-bold tracking-tighter sm:text-4xl md:text-5xl">
              How It Works
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 text-base sm:text-lg md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-6 dark:text-gray-400">
              Leaving and reading reviews on our platform is easy and
              straightforward.
            </p>
          </div>
          <div className="grid max-w-5xl mt-8 grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-4">
              <SearchIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Find Products</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Browse our extensive catalog to find the products or services
                you're interested in.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <DeleteIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Write a Review</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Share your honest feedback and experiences with the community.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <StarIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Read Reviews</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Discover what others have to say about the products or services
                you're interested in.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
