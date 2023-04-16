import React from "react";

const Product = ({handleViewDetail, data}) => {
  return (
    <div className=" grid grid-cols-4 justify-items-center">
      {data.length > 0 &&
        data.map((item, index) => (
          <div
            className="cursor-pointer rounded-xl relative items-center w-80 border-2 border-gray-600 hover:bg-gray-200 group justify-between mt-3"
            key={index}
            onClick={() => handleViewDetail(item)}
          >
            <article>
              <img
                className="w-80 rounded-xl group-hover:saturate-200 h-80"
                src={item.img}
                alt="not-found"
              />
              <p className=" cursor-pointer text-center text-xl font-bold font-sans mt-2 text-black group-hover:text-red-700">
                {item.name}
              </p>
              <p className="text-center text-lg font-bold font-sans ">
                {item.price}$
              </p>
            </article>
          </div>
        ))}
    </div>
  );
};

export default Product;
