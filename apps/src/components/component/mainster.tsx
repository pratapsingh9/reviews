
import Link from "next/link"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"

export function mainster() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-white shadow-md dark:bg-gray-950 dark:text-white">
        <Link className="flex items-center justify-center" href="#">
          <StarIcon className="h-6 w-6" />
          <span className="sr-only">Review Rater</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 transition-colors duration-300 ease-in-out"
            href="#"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 transition-colors duration-300 ease-in-out"
            href="#"
          >
            Reviews
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 transition-colors duration-300 ease-in-out"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 transition-colors duration-300 ease-in-out"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] animate-fade-in">
                  Share Your Feedback, Get Rewarded
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 animate-fade-in-up">
                  Review products, services, and experiences to earn rewards. Your feedback helps others make informed
                  decisions.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <Card className="w-full max-w-md animate-fade-in-up">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">Create an Account</CardTitle>
                    <CardDescription>Join our community of reviewers and start earning rewards.</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="John Doe" type="text" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" placeholder="m@example.com" type="email" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full animate-fade-in-up">Create Account</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl animate-fade-in">All Reviews</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 animate-fade-in-up">
                  Check out what others are saying about their experiences.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6">
              <div className="grid gap-4 animate-fade-in-up">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <div className="font-medium">John Doe</div>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <StarIcon className="h-4 w-4" />
                      <StarIcon className="h-4 w-4" />
                      <StarIcon className="h-4 w-4" />
                      <StarIcon className="h-4 w-4" />
                      <StarIcon className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="ml-auto text-xs text-gray-500 dark:text-gray-400">May 15, 2023</div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  I had a great experience with this product. It exceeded my expectations and I would highly recommend
                  it to others.
                </p>
              </div>
              <div className="grid gap-4 animate-fade-in-up">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>SA</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <div className="font-medium">Sarah Anderson</div>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <StarIcon className="h-4 w-4" />
                      <StarIcon className="h-4 w-4" />
                      <StarIcon className="h-4 w-4" />
                      <StarIcon className="h-4 w-4" />
                      <StarHalfIcon className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="ml-auto text-xs text-gray-500 dark:text-gray-400">April 28, 2023</div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  The product was good, but I had a few issues with the customer service. Overall, it was a decent
                  experience.
                </p>
              </div>
              <div className="grid gap-4 animate-fade-in-up">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>MJ</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <div className="font-medium">Michael Johnson</div>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <StarIcon className="h-4 w-4" />
                      <StarIcon className="h-4 w-4" />
                      <StarIcon className="h-4 w-4" />
                      <StarHalfIcon className="h-4 w-4" />
                      <StarHalfIcon className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="ml-auto text-xs text-gray-500 dark:text-gray-400">March 12, 2023</div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  The product was okay, but I had some issues with the functionality. I wouldn't recommend it to others.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white shadow-md dark:bg-gray-950 dark:text-white">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Review Rater. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4 transition-colors duration-300 ease-in-out"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 transition-colors duration-300 ease-in-out"
            href="#"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function StarHalfIcon(props:any) {
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
      <path d="M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2" />
    </svg>
  )
}


function StarIcon(props:any) {
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