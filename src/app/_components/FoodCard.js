"use client";

import { EditIcon } from "../icons/Edit";

export const FoodCard = () => {
  return (
    <div className="w-[270px] h-[241px] border border-gray-200 rounded-2xl pl-4 pt-3 relative">
      <img src="/Hool.png" />
      <button className="absolute top-20 right-5 bg-white rounded-full w-10 h-10 flex items-center justify-center">
        <EditIcon />
      </button>
      <div className="flex  gap-10 pt-4">
        <h3 className="text-red-500 font-medium text-sm ">
          Brie Crostini Appetizer
        </h3>
        <p className="text-sm font-semibold">$12.99</p>
      </div>
      <p className="text-gray-600 text-xs mt-1 leading-snug">
        Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.
      </p>
    </div>
  );
};
