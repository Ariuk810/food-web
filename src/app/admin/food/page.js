"use client";
import { BlackOrderIcon } from "@/app/icons/BlackOrder";
import { EditIcon } from "@/app/icons/Edit";
import { useEffect, useState } from "react";
import { NomNom } from "@/app/icons/NomNom";
import { WhiteMenuIcon } from "@/app/icons/WhiteMenu";
import Link from "next/link";
import { FoodCard } from "@/app/_components/FoodCard";
import { CategoryCard } from "@/app/_components/CategoryCard";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};

export default function Home() {
  const [categoryData, setCategoryData] = useState([]);

  const apiLink = `http://localhost:1000/category`;

  const getData = async () => {
    const data = await fetch(apiLink, options);
    const jsonData = await data.json();

    setCategoryData(jsonData.results);
    console.log(jsonData, "dataGang");
  };

  useEffect(() => {
    getData();
  }, []);
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
            className={`w-[165px] h-10 rounded-full flex justify-center items-center gap-5 cursor-pointer ${
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
              className={`w-[165px] h-10 rounded-full flex justify-center items-center gap-5 cursor-pointer ${
                true ? "bg-white text-black " : "bg-black text-white"
              }`}
            >
              <BlackOrderIcon />
              <p>Orders</p>
            </button>
          </div>
        </Link>
      </div>
      <div className="w-[1700px]">
        <div className="bg-white h-auto rounded-lg mt-[5%]">
          <p className="font-bold text-2xl pt-3 pl-3">Dishes category</p>
          <div className="w-[145px] mt-3 ml-3 h-9 border border-red-500 rounded-full flex justify-center items-center font-medium">
            <button>All Dishes</button>

            <div className="flex flex-wrap gap-5">
              {categoryData.map((category, index) => {
                return (
                  <CategoryCard
                    key={index}
                    Torol={category.categoryName}
                  ></CategoryCard>
                );
              })}
            </div>
          </div>
        </div>
        <div className="bg-white  h-auto rounded-lg mt-[5%] pt-4 pl-4">
          <div className="flex items-center ">
            <p className="font-bold text-2xl text-black">Appetizers</p>
            <p className="font-bold text-2xl text-black">(6)</p>
          </div>
          <div className="flex gap-5">
            <div className="w-[270px] h-[241px] border border-red-500 border-dashed rounded-lg flex flex-col items-center justify-center space-y-3">
              <button className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl">
                +
              </button>
              <p className="text-center text-black font-medium">
                Add new Dish to <br /> Appetizers
              </p>
            </div>
            <FoodCard />
          </div>
        </div>
      </div>
    </div>
  );
}
