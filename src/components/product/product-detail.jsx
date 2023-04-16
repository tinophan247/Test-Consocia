import React from "react";

const ProductDetail = ({ handleBackToHome, data }) => {  
  return (
    <div className="max-w-full">
      <p
        onClick={handleBackToHome}
        className="m-10 text-blue-500 font-bold text-xl cursor-pointer"
      >
        Back to Home
      </p>
      <div className="flex justify-evenly">
        <div className="cursor-pointer relative mt-10">
          <img
            className=" rounded-xl w-400 h-400"
            src={data.img}
            alt="not-found"
          />
        </div>
        <div>
          <div className="mt-10 text-2xl font-bold text-gray-500">
            {data.name}
          </div>
          <div className="mt-2 text-gray-400 border-t-2 border-b-2 border-gray-400  ">
            Product ID : {data.id}
          </div>
          <div className="text-3xl text-red-500 font-bold font-serif">
            {data.price}$
          </div>
          <div className="grid justify-items-center mt-5">
            <button className=" bg-red-400 font-bold  w-60 h-10 rounded-full">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
