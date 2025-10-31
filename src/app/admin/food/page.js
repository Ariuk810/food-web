import { BlackOrderIcon } from "@/app/icons/BlackOrder";
import { MenuIcon } from "@/app/icons/Menu";
import { NomNom } from "@/app/icons/NomNom";
import { WhiteMenuIcon } from "@/app/icons/WhiteMenu";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-100 flex gap-[1%]">
      <div className="w-[250px] h-screen bg-white">
        <div className="flex items-center gap-3 pt-5 justify-center">
          <NomNom />
          <div>
            <p className="font-bold text-2xl">NomNom</p>
            <p className="text-[#71717A]">Swift delivery</p>
          </div>
        </div>
        <div className="flex justify-center pt-10">
          <button
            className={`w-[165px] h-[40px] rounded-full flex justify-center items-center gap-5 cursor-pointer ${
              true ? "bg-black text-white " : "bg-white text-black"
            }`}
          >
            <WhiteMenuIcon />
            <p>Food Menu</p>
          </button>
        </div>
        <Link href={`/admin`}>
          <div className="flex justify-center pt-10">
            <button
              className={`w-[165px] h-[40px] rounded-full flex justify-center items-center gap-5 cursor-pointer ${
                true ? "bg-white text-black " : "bg-black text-white"
              }`}
            >
              <BlackOrderIcon />
              <p>Orders</p>
            </button>
          </div>
        </Link>
      </div>
      <div>
        <div className="bg-white w-[1171px] h-auto rounded-lg mt-[8%]">
          <p className="font-bold text-2xl pt-3 pl-3">Dishes category</p>
          <div className="w-[145px] mt-3 ml-3 h-[36px] border border-red-500 rounded-full flex justify-center items-center font-medium">
            <p>All Dishes</p>
          </div>
        </div>
        <div className="bg-white w-[1171px] h-auto rounded-lg mt-[5%] pt-4 pl-4">
          <div className="flex items-center ">
            <p className="font-bold text-2xl text-black">Appetizers</p>
            <p className="font-bold text-2xl text-black">(6)</p>
          </div>
          <div className="w-[270px] h-[241px] border-1 border-red-500 border-dashed rounded-lg flex flex-col items-center justify-center space-y-3">
            <button className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl">
              +
            </button>
            <p class="text-center text-black font-medium">
              Add new Dish to <br /> Appetizers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
