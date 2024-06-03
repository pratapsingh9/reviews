
import Link from "next/link"
import './styles.css';
import './styless.css'
import ReviewComponen from "./Reviews";
export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-900 text-white py-4 px-6 md:px-8">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="text-xl font-bold" prefetch={false}>
            Website Reviews
          </Link>
          <Link
            href="#"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
            prefetch={false}
          >
            Submit Review
          </Link>
        </div>
      </header>
      <main className="flex-1 py-8 px-4 md:px-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">
                <Link href="#" prefetch={false}>
                  Acme Inc Website Review
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">
                The Acme Inc website is a well-designed and user-friendly platform that makes it easy to find the
                products and services I need.
              </p>
              <div className="flex items-center">
                <div className="bg-green-500 text-white font-medium py-1 px-2 rounded mr-2">4.5</div>
                <div className="text-gray-500">by John Doe</div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">
                <Link href="#" prefetch={false}>
                  Widgets Co Website Review
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">
                The Widgets Co website is a bit outdated and could use some improvements, but it still gets the job
                done.
              </p>
              <div className="flex items-center">
                <div className="bg-yellow-500 text-white font-medium py-1 px-2 rounded mr-2">3.2</div>
                <div className="text-gray-500">by Jane Smith</div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">
                <Link href="#" prefetch={false}>
                  Gadgets Galore Website Review
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">
                The Gadgets Galore website has a great selection of products and the checkout process is smooth and easy
                to use.
              </p>
              <div className="flex items-center">
                <div className="bg-green-500 text-white font-medium py-1 px-2 rounded mr-2">4.8</div>
                <div className="text-gray-500">by Sarah Lee</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <ReviewComponen/>
      <footer className="bg-gray-900 text-white py-4 px-6 md:px-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Website Reviews. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
