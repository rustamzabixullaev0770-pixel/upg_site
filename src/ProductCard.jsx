import React from "react";
import PrimaryBtn from "./components/PrimaryBtn";

export default function ProductCard({item}) {
  return (
    <div className="border border-gray-200 rounded-lg p-3 hover:shadow-lg flex flex-col justify-between transition duration-300 bg-white">
      

      <div className="flex justify-center items-center h-44">
        <img
          className="object-contain h-full"
          src={item.img}
          alt="product"
        />
      </div>

      <p className="font-semibold text-sm mt-3">
        {item.name}
      </p>

   
      <div className="flex justify-between items-center mt-2">
        <div className="text-gray-400 text-sm">
<p>icon</p>
        </div>
      </div>

      
      <div className="mt-3">
        <p className="text-xs text-gray-400">Цена:</p>
        <p className="text-pink-500 font-semibold text-lg">
         {item.price} so'm
        </p>
      </div>

 
      <PrimaryBtn text="В корзину" />
    </div>
  );
}