/**
 * v0 by Vercel.
 * @see https://v0.dev/t/dW8LLSMFTsR
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <StarIcon className="h-6 w-6" />
          <span className="sr-only">Review Guru</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Browse Reviews
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Write a Review
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="container space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Discover the Best Products and Services
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Read honest reviews from real users and make informed decisions.
                </p>
                <div className="space-x-4">
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    Start Browsing
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    Write a Review
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Hero"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Reviews</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Check out the latest and greatest reviews from our community.
              </p>
            </div>
            <div className="grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              <Card className="flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <img src="/placeholder.svg" alt="User" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-sm font-semibold">John Doe</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Reviewed: Acme Blender</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    "The Acme Blender is a game-changer in my kitchen. It's powerful, easy to use, and produces the
                    smoothest smoothies."
                  </p>
                </div>
                <div className="mt-auto flex items-center gap-2">
                  <StarIcon className="h-5 w-5 fill-yellow-500" />
                  <StarIcon className="h-5 w-5 fill-yellow-500" />
                  <StarIcon className="h-5 w-5 fill-yellow-500" />
                  <StarIcon className="h-5 w-5 fill-yellow-500" />
                  <StarIcon className="h-5 w-5 fill-gray-300 dark:fill-gray-600" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">4.2</span>
                </div>
              </Card>
              <Card className="flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <img src="/placeholder.svg" alt="User" />
                      <AvatarFallback>SA</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-sm font-semibold">Sarah Anderson</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Reviewed: Zenith Vacuum Cleaner</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    "The Zenith Vacuum Cleaner is a lifesaver! It's powerful, lightweight, and makes cleaning a breeze.
                    Highly recommended."
                  </p>
                </div>
                <div className="mt-auto flex items-center gap-2">
                  <StarIcon className="h-5 w-5 fill-yellow-500" />
                  <StarIcon className="h-5 w-5 fill-yellow-500" />
                  <StarIcon className="h-5 w-5 fill-yellow-500" />
                  <StarIcon className="h-5 w-5 fill-yellow-500" />
                  <StarIcon className="h-5 w-5 fill-yellow-500" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">5.0</span>
                </div>
              </Card>
              <Card className="flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <img src="/placeholder.svg" alt="User" />
                      <AvatarFallback>MJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-sm font-semibold">Michael Johnson</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Reviewed: Apex Fitness Tracker</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    "The Apex Fitness Tracker is a game-changer for my workout routine. It's accurate, user-friendly,
                    and helps me stay motivated."
                  </p>
                </div>
                <div className="mt-auto flex items-center gap-2">
                  <StarIcon className="h-5 w-5 fill-yellow-500" />
                  <StarIcon className="h-5 w-5 fill-yellow-500" />
                  <StarIcon className="h-5 w-5 fill-yellow-500" />
                  <StarIcon className="h-5 w-5 fill-yellow-500" />
                  <StarIcon className="h-5 w-5 fill-gray-300 dark:fill-gray-600" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">4.4</span>
                </div>
              </Card>
            </div>
          </div>
        </section>
        
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Review Categories</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Browse reviews by category to find what you're looking for.
              </p>
            </div>
            <div className="grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              <Link
                href="#"
                className="group flex flex-col items-center justify-center space-y-2 rounded-lg bg-white p-4 text-center transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
                prefetch={false}
              >
                <CircuitBoardIcon className="h-12 w-12 text-primary group-hover:text-gray-900 dark:group-hover:text-gray-50" />
                <h4 className="text-sm font-semibold group-hover:text-gray-900 dark:group-hover:text-gray-50">
                  Electronics
                </h4>
              </Link>
              <Link
                href="#"
                className="group flex flex-col items-center justify-center space-y-2 rounded-lg bg-white p-4 text-center transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
                prefetch={false}
              >
                <HomeIcon className="h-12 w-12 text-primary group-hover:text-gray-900 dark:group-hover:text-gray-50" />
                <h4 className="text-sm font-semibold group-hover:text-gray-900 dark:group-hover:text-gray-50">
                  Home & Garden
                </h4>
              </Link>
              <Link
                href="#"
                className="group flex flex-col items-center justify-center space-y-2 rounded-lg bg-white p-4 text-center transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
                prefetch={false}
              >
                <LuggageIcon className="h-12 w-12 text-primary group-hover:text-gray-900 dark:group-hover:text-gray-50" />
                <h4 className="text-sm font-semibold group-hover:text-gray-900 dark:group-hover:text-gray-50">
                  Travel
                </h4>
              </Link>
              <Link
                href="#"
                className="group flex flex-col items-center justify-center space-y-2 rounded-lg bg-white p-4 text-center transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:"
                prefetch={false}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function CircuitBoardIcon(props) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M11 9h4a2 2 0 0 0 2-2V3" />
      <circle cx="9" cy="9" r="2" />
      <path d="M7 21v-4a2 2 0 0 1 2-2h4" />
      <circle cx="15" cy="15" r="2" />
    </svg>
  )
}


function DeleteIcon(props) {
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
      <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
      <line x1="18" x2="12" y1="9" y2="15" />
      <line x1="12" x2="18" y1="9" y2="15" />
    </svg>
  )
}


function HomeIcon(props) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function LuggageIcon(props) {
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
      <path d="M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0" />
      <path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14" />
      <path d="M10 20h4" />
      <circle cx="16" cy="20" r="2" />
      <circle cx="8" cy="20" r="2" />
    </svg>
  )
}


function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function StarIcon(props) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}