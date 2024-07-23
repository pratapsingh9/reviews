"use client";
import React , {useReducer} from "react";
import NavigationBar from "@/component/naivagationbar";
import FooterComponent from "@/component/footer";
import MainScreen  from "@/components/component/main-screen";


export default function page() {
  const initalstate = {
    loading:'true'
  }

  function reducer(state:any,action:any) {
    switch (action) {
      case 'break':
        console.log("bbreak is pressed")
        break;
      case 'continue':
        console.log("continue button is pressed towards the end")
        break;
      default:
        break;
    }
  }

  const [state, dispatch] = useReducer(first, second, third)
  return (
    <div className="bg-slate-100 ">
      <nav>
        <NavigationBar />
      </nav>
      {/* <div className="w-1/5 border-black border h-[100vh]">
      </div> */}
      <MainScreen />
    </div>
  );
}
