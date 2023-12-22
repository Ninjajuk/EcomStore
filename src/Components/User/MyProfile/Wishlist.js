import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
// import LeftProfileDiv from "./LeftProfileDiv";
import { products } from "../../Cart/data";
import CategoryFilter from "../../CategoryFilter";
import Navbar1 from "../../Navbar/Navbar1";
import LeftProfileDiv from "./LeftProfileDiv";
import { ProfileDiv } from "./ProfileDiv";

const Wishlist = () => {
  // const [showDelete, setShowDelete] = useState(false);

  // const showDeleteText = (show) => {
  //   setShowDelete(show);
  // };
  const [isactive, setIsActive] = useState(false);
  const [showButtonsIndex, setShowButtonsIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setShowButtonsIndex(index);
  };

  const handleMouseLeave = () => {
    setShowButtonsIndex(-1);
  };
  return (
    <>
      <ProfileDiv>
        <div className="h-full md:px-24 mt-[56px] md:flex bg-gray-300 overflow-y-auto ">
          {/* <CategoryFilter /> */}

          <div className=" px-4 py-8  md:w-2/3 md:h-auto md:order-2 md:mt-0 mt-4">
            {/* Content for the first wishlist heading div */}
            <div className="h-[60px] flex py-6 first:pt-0 last:pb-0 cursor-pointer items-center bg-white rounded-md shadow-md p-4 md:items-start">
              <p className="text-gray-600 font-semibold md:px-3">My Wishlist</p>
            </div>
            <div className="flex flex-col w-full">
              {products.slice(0, 4).map((item, index) => (
                <div className="flex w-full mt-4 md:px-3 bg-white rounded-md shadow-md p-4">
                  {/* image container */}
                  <div className="w-1/4  bg-blue-300">
                    <div className="px-2 py-2 h-48  rounded-md">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-contain md:object-fit  "
                      />
                    </div>
                  </div>
                  {/* image container ends her */}

                  {/* PRice dteails starts here  */}
                  <div className="w-3/4 bg-green-300 relative flex justify-between items-center">
                    <div className="flex flex-col">
                      <h1 className="px-4 py-2">{item.title}</h1>
                      <p className="flex py-2">
                        <span className="px-4 text-xl font-medium">
                          {item.p2}
                        </span>
                      </p>
                    </div>
                    <button
                      key={index}
                      className="px-4 mx-4 text-red-600 absolute bottom-0 right-0 mb-5 rounded-md text-xl font-medium"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <FaTrash />
                    </button>
                    {showButtonsIndex === index && (
                      <p className="absolute bottom-0 right-0 mb-12 mr-6 text-red-600">
                        Delete
                      </p>
                    )}
                  </div>

                  {/* PRice dteails  container ends here */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </ProfileDiv>
    </>
  );
};

export default Wishlist;
