"use client";

import { DownIcon } from "../icons/DownIcon";
import { UpDown } from "../icons/UpDown";

export const AdminCard = (props) => {
  const { customer, food, date, total, delivery, state, number } = props;

  return (
    <div className="border border-gray-100 w-full h-[56px] flex items-center ">
      <button className="w-[20px] h-[20px] border border-black rounded-[5px] ml-3 "></button>
      <p className="w-[56px] ml-10">{number}</p>
      <p className="text-gray-500 w-[56px] ml-3">{customer}</p>
      <p className="text-gray-500  w-[213px] ml-60 ">{food}</p>
      <div>
        <DownIcon />
      </div>
      <p className="text-gray-500 w-[160px] ml-10">{date}</p>
      <div></div>
      <p className="text-gray-500 w-[160px] ml-10">{total}</p>
      <p className="text-gray-500 w-[213px] ml-10 h-[56px]">{delivery}</p>
      <div className="w-[160px]  ml-10">
        <button className=" w-[94px] h-[32px] border border-red-600 rounded-2xl text-black flex items-center justify-center gap-2">
          <p className="font-bold">Pending</p>
          <UpDown />
        </button>
      </div>
      <div></div>
    </div>
  );
};
