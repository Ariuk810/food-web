"use client";
import { IoTrashOutline } from "react-icons/io5";
import { useState } from "react";
import { EditIcon } from "../icons/Edit";

export const FoodCard = (props) => {
  const { foodName, foodPrice, foodIngred } = props;

  const [editGang, setEditGang] = useState(false);
  return (
    <div className="w-[270px] h-[241px] border border-gray-200 rounded-2xl pl-4 pt-3 relative">
      <img src="/Hool.png" />
      <button
        className="absolute top-20 right-5 bg-white rounded-full w-10 h-10 flex items-center justify-center"
        onClick={() => setEditGang(true)}
      >
        <EditIcon />
      </button>

      {editGang && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md">
          <div className="w-[472px] h-[596px] relative bg-white rounded-2xl p-7 border border-gray-500">
            <button
              onClick={() => setEditGang(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4">Dishes info</h2>
            <div className="flex justify-between items-center pt-5">
              <p className="text-gray-500">Dish name</p>
              <input
                type="text"
                className="w-[288px] h-10 border border-gray-400 rounded-lg focus:ring-2 focus:ring-gray-300 pl-5"
              />
            </div>
            <div className="flex justify-between items-center pt-5">
              <p className="text-gray-500">Dish category</p>
              <select className="w-[288px] h-10 border border-gray-400 rounded-lg focus:ring-2 focus:ring-gray-300 pl-5">
                <option>asdfg</option>
              </select>
            </div>
            <div className="flex justify-between items-center pt-5">
              <p className="text-gray-500">Ingredients</p>
              <textarea className="w-[288px] h-10 border border-gray-400 rounded-lg focus:ring-2 focus:ring-gray-300 pl-5"></textarea>
            </div>
            <div className="flex justify-between items-center pt-5">
              <p className="text-gray-500">Price</p>
              <input
                type="number"
                className="w-[288px] h-10 border border-gray-400 rounded-lg focus:ring-2 focus:ring-gray-300 pl-5"
              />
            </div>
            <div className="flex justify-between items-center pt-5">
              <p className="text-gray-500">Price</p>
              <div className="relative w-[300px] h-[120px] rounded-xl overflow-hidden border border-gray-200">
                <img
                  src="qwer"
                  alt="Dish"
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-2 right-2 bg-white rounded-full w-6 h-6 flex items-center justify-center text-gray-600 hover:bg-gray-100">
                  ✕
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center pt-5">
              <div className="w-12 h-10 border border-red-400 flex justify-center items-center rounded-lg cursor-pointer ">
                <IoTrashOutline />
              </div>
              <button className="w-[126px] h-10 bg-black text-white rounded-lg cursor-pointer">
                Save changes
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex  gap-10 pt-4">
        <h3 className="text-red-500 font-medium text-sm ">{foodName}</h3>
        <p className="text-sm font-semibold">{foodPrice}</p>
      </div>
      <p className="text-gray-600 text-xs mt-1 leading-snug">{foodIngred}</p>
    </div>
  );
};

// {editGang && (
//   <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md">
//     <div className="w-[472px] h-[596px] bg-white rounded-2xl p-7 relative shadow-xl">
//       {/* Close button */}
//       <button
//         onClick={() => setEditGang(false)}
//         className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl"
//       >
//         ✕
//       </button>

//       {/* Title */}
//       <h2 className="text-xl font-bold mb-7">Dishes info</h2>

//       {/* Dish Name */}
//       <div className="flex items-center justify-between mb-5">
//         <p className="text-gray-400 text-sm">Dish name</p>
//         <input
//           type="text"
//           defaultValue="Brie Crostini Appetizer"
//           className="w-[300px] border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
//         />
//       </div>

//       {/* Dish Category */}
//       <div className="flex items-center justify-between mb-5">
//         <p className="text-gray-400 text-sm">Dish category</p>
//         <select className="w-[300px] border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300">
//           <option>Appetizer</option>
//           <option>Salad</option>
//           <option>Pizza</option>
//           <option>Main dish</option>
//           <option>Dessert</option>
//         </select>
//       </div>

//       {/* Ingredients */}
//       <div className="flex items-start justify-between mb-5">
//         <p className="text-gray-400 text-sm mt-2">Ingredients</p>
//         <textarea
//           rows={3}
//           defaultValue="Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar."
//           className="w-[300px] border border-gray-200 rounded-xl px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-gray-300"
//         />
//       </div>

//       {/* Price */}
//       <div className="flex items-center justify-between mb-5">
//         <p className="text-gray-400 text-sm">Price</p>
//         <input
//           type="text"
//           defaultValue="$12.99"
//           className="w-[300px] border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
//         />
//       </div>

//       {/* Image */}
//       <div className="flex items-start justify-between mb-8">
//         <p className="text-gray-400 text-sm mt-2">Image</p>
// <div className="relative w-[300px] h-[120px] rounded-xl overflow-hidden border border-gray-200">
//   <img
//     src="/brie.jpg"
//     alt="Dish"
//     className="w-full h-full object-cover"
//   />
//   <button className="absolute top-2 right-2 bg-white rounded-full w-6 h-6 flex items-center justify-center text-gray-600 hover:bg-gray-100">
//     ✕
//   </button>
// </div>
//       </div>

//       {/* Buttons */}
//       <div className="flex justify-between items-center mt-4">
//         <button className="border border-red-300 text-red-500 rounded-xl px-4 py-2 text-sm hover:bg-red-50">
//           🗑 Delete
//         </button>
//         <button className="bg-black text-white rounded-xl px-6 py-2 text-sm hover:bg-gray-800">
//           Save changes
//         </button>
//       </div>
//     </div>
//   </div>
// )}
