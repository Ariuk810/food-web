import { Input } from "@/components/ui/input";
import { MdOutlineArrowBackIos } from "react-icons/md";
export default function Home() {
  return (
    <div className="flex justify-center items-center gap-20">
      <div className="w-[416px] h-[676px] bg-white ">
        <button className="w-10 h-10 border border-gray-400 flex justify-center items-center">
          <MdOutlineArrowBackIos />
        </button>
        <h3 className="font-bold text-4xl pt-5">Log in</h3>
        <p className="text-gray-500 pt-2 text-2xl">
          Log in to enjoy your favorite dishes.
        </p>
        <div className="pt-5">
          <Input placeholder="Enter your email address" />
          <Input placeholder="Password" className="mt-5" />
        </div>
        <p className=" text-black pt-5 underline underline-offset-1 cursor-pointer">
          Forgot password ?
        </p>
        <button className="bg-gray-300 text-white rounded-md w-full py-2 mt-5">
          Let's go
        </button>
        <div className="flex justify-center gap-2 mt-5">
          <p className="text-gray-500 ">Don’t have an account?</p>
          <p className="text-blue-500 ">Sign up</p>
        </div>
      </div>
      <div className="w-[1156px] h-[1104px] mt-6">
        <img src="/Login.png" className="w-full h-full" />
      </div>
    </div>
  );
}
//
