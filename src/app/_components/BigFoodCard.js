"use client";
import { FoodCard } from "@/app/_components/FoodCard";
import { useState } from "react";
const UPLOAD_PRESET = "Food delivery";
const CLOUD_NAME = "dvxchfkte";
export const BigFoodCard = (props) => {
  const { categoryName, categoryId } = props;
  const [foodInput, setFoodInput] = useState(false);

  return (
    <div className="bg-white  h-auto rounded-lg mt-[5%] pt-4 pl-4">
      <div className="flex items-center ">
        <p className="font-bold text-2xl text-black">{categoryName}</p>
        <p className="font-bold text-2xl text-black">(6)</p>
      </div>
      <div className="flex gap-5">
        <div
          className="w-[270px] h-[241px] border border-red-500 border-dashed rounded-lg flex flex-col items-center justify-center space-y-3 "
          onClick={() => setFoodInput(true)}
        >
          <button className="bg-red-500 text-white rounded-full w-9 h-9 flex items-center justify-center text-2xl">
            +
          </button>
          <p className="text-center text-black font-medium">
            Add new Dish to <br /> Appetizers
          </p>
        </div>
        {foodInput && (
          <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50 z-50 backdrop-blur-md">
            <div className="bg-white rounded-2xl p-6 w-[460px] h-[592px] relative">
              <button
                onClick={() => setFoodInput(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-black"
              >
                ✕
              </button>
              <h2 className="text-xl font-bold mb-4">
                Add new Dish to Appetizers <br />
              </h2>

              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  placeholder="Type food name"
                  className="border border-gray-300 rounded-md px-3 py-2 w-1/2"
                />
                <input
                  placeholder="Enter price..."
                  className="border border-gray-300 rounded-md px-3 py-2 w-1/2"
                />
              </div>

              <textarea
                placeholder="List ingredients..."
                className="border border-gray-300 rounded-md px-3 py-2 w-full h-24 mb-3"
              />

              <div className="border-2 border-dashed border-gray-300 rounded-lg h-40 flex items-center justify-center mb-4">
                <p className="text-gray-400 text-center">
                  Choose a file or drag & drop it here
                </p>
              </div>

              <button className="bg-black text-white rounded-md w-full py-2">
                Add Dish
              </button>
            </div>
          </div>
        )}
        <FoodCard />
      </div>
    </div>
  );
};
