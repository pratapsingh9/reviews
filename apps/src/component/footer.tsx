
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function FooterComponent() {
  return (
    <footer className="bg-gray-100 py-12 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col items-start">
            <Link href="#" className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-50" prefetch={false}>
              Reviews Co.
            </Link>
            <nav className="space-y-2">
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                Reviews
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                About
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-50">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                <FacebookIcon className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                <TwitterIcon className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                <InstagramIcon className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                <LinkedinIcon className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-50">Legal</h3>
            <nav className="space-y-2">
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                prefetch={false}
              >
                Cookie Policy
              </Link>
            </nav>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-50">Subscribe</h3>
            <p className="mb-4 text-gray-600 dark:text-gray-400">Get the latest updates and news from our company.</p>
            <form className="flex w-full max-w-md">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-l-md border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-gray-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50"
              />
              <Button
                type="submit"
                className="rounded-r-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-800 focus:outline-none dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-300 pt-8 text-center text-sm text-gray-600 dark:border-gray-700 dark:text-gray-400">
          &copy; 2024 Reviews Co. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

function FacebookIcon(props:any) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props:any) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props:any) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function TwitterIcon(props:any) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}