

// 'use client'
// import { useState } from "react";
// import "./cardStyles.css";
// import { Element } from "react-scroll";
// import './gradients.css'
// import { RecoilRoot } from "recoil";

// import FooterComponent from "@/component/footer";
// import { reviewdata } from "@/utils/customerreviews";

// import { useSession } from "next-auth/react";

// import {
//   signIn, signOut
// } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import AboutFeatures from "@/component/aboutFeautre";
// import axios from "axios";
// import LottieAnimation, {
//   LikeLottie,
// } from "@/component/LottieAnimation";
// export default function Component() {
//   const router = useRouter();
//   const sessionData = useSession();
//   return (
//     <>
//       {JSON.stringify(sessionData)}
//       <input type="text" className="bg-slate-200 rounded-md border-blue-400" />
//       <input type="text" className="bg-slate-200 rounded-md border-blue -400" />
//       <button className="mr -4 bg-purple-300 rounded-md" onClick={() => {
//         signIn();
//       }}>signIn</button>
//       <button className="bg-green-400" onClick={() => {
//         signOut();
//       }}>signOut</button>
//     </>
//   )
//   // const [password, setPassword] = useState("");
//   // const [confirmPassword, setConfirmPassword] = useState("");
//   // const [username, setUsername] = useState("");
//   // const [submitted, setSubmitted] = useState(false);

//   // const onSubmitted = () => {
//   //   try {
//   //     setSubmitted(true);
//   //   } catch (error) {
//   //     setSubmitted(false);
//   //   }
//   // };

//   // const handleSignUp = async () => {
//   //   try {
//   //     let response = await axios.post("http://localhost:4040/user/login", {
//   //       username,
//   //       password,
//   //     });
//   //     response = response.data;
//   //     if (response.status != 200) {
//   //     }
//   //   } catch (error) {
//   //     alert("Error occurred");
//   //   }
//   // };

//   // return (
//   //   <RecoilRoot>
//   //   <div className="flex flex-col min-h-screen">

//   //     <main className="flex-1">
//   //       <Element name="section1">
//   //         <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
//   //           <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
//   //             <div className="grid max-w-[1300px] mx-auto gap-16 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
//   //               <div>
//   //                 <h1 className="lg:tracking-wide text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] animate-fade-in md:tracking-wide">
//   //                   Share Your Feedback Get Insights
//   //                 </h1>
//   //                 <p className="max-w-[700px] mt-8 text-gray-500 md:text-xl dark:text-gray-400 animate-fade-in-up">
//   //                   Review products, services, and experiences to earn rewards.
//   //                   Your feedback helps others make informed decisions.
//   //                 </p>
//   //                 <div>
//   //                   <div className="mt-8">Start Browsing</div>
//   //                 </div>
//   //               </div>
//   //               <div className="flex ml-7 flex-col items-start space-y-4">
//   //                 <LottieAnimation />
//   //               </div>
//   //             </div>
//   //           </div>
//   //         </section>
//   //       </Element>
//   //       <Element name="section2">
//   //         <section className="w-full py-12 md:py-24 lg:py-32">
//   //           <div className="container space-y-12 px-4 md:px-6">
//   //             <div className="flex items-center">
//   //               <div className="flex flex-col items-center container mx-auto px-4 py-12">
//   //                 <h2 className="text-3xl mb-2 font-bold tracking-tighter sm:text-5xl animate-fade-in">
//   //                   What Our Customers Say
//   //                 </h2>
//   //                 <p className="max-w-[900px] text-gray-500 md:text-xl dark:text-gray-400 animate-fade-in-up">
//   //                   Check out what others are saying about their experiences.
//   //                 </p>
//   //               </div>
//   //             </div>
//   //             <div className="mx-auto grid max-w-5xl gap-6">
//   //               <div className="marquee-wrapper">
//   //                 <div className="marquee-left">

//   //                 </div>
//   //               </div>
//   //               <div className="marquee-wrapper mt-6">
//   //                 <div className="marquee-right">

//   //                 </div>
//   //               </div>
//   //             </div>
//   //           </div>
//   //         </section>
//   //       </Element>
//   //       <section>
//   //         <div className="flex flex-col justify-center">
//   //           <h1 className="text-3xl items-center text-center mb-3 font-bold tracking-tighter sm:text-4xl md:text-5xl">
//   //             Start Exploring Today
//   //           </h1>
//   //           <div className="mt-4"></div>
//   //           <div className="flex lg:ml-5 sm:w-3/4 mt-5 ml-15 flex-row justify-center gap-12">
//   //             <LikeLottie  />
//   //           </div>
//   //         </div>
//   //       </section>
//   //     </main>
//   //     <AboutFeatures />
//   //     <FooterComponent />
//   //   </div>
//   //   </RecoilRoot>
//   // );
// }

// function StarHalfIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2" />
//     </svg>
//   );
// }

// function StarIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
//     </svg>
//   );
// }

// // latest changes of website reponseive
'use client'
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Component() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <>
      {session ? (
        <div>
          <img src={session.user.image} className="rounded-full ml-[50%]"  alt="" />
          <p>Signed in as {JSON.stringify(session.user)}</p>
          <button className="bg-blue-200 rounded-lg h-9 w-20" onClick={()=>{
            signOut()
          }}>
            Sign Out
          </button>
          {/* Add your sign out button here */}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <CustomGoogleSignInButton />

        </div>
      )}
    </>
  );
}



const CustomGoogleSignInButton = () => {
  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className="bg-white text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded shadow hover:bg-gray-100"
    >
      <img
        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
        alt="Google logo"
        className="w-5 h-5 inline mr-2"
      />
      Sign in with Google
    </button>
  );
};