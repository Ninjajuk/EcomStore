import { data } from "./data";
import { MdOutlineMail, MdOutlineLocalPhone } from "react-icons/md";
import { useState, useEffect } from "react";
import "./card3.css";
import Navbar1 from "../Navbar/Navbar1";
import Layout1 from "../../Layout/Layout";

const TeamCard = () => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const hasPrev = index > 0;
  const hasNext = index < data.length - 1;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function prev() {
    if (hasPrev) {
      setIndex(index - 1);
    }
  }

  function next() {
    if (hasNext) {
      setIndex(index + 1);
    }
  }

  return (
    <>
      <Layout1>
        <div className="card-container">
          <div
            className={`px-16 py-6 bg-green-400 grid ${
              isMobile ? "grid-cols-1" : "md:grid-cols-2 lg:grid-cols-3"
            } gap-1 items-center justify-center`}
          >
            {data.slice(index, index + (isMobile ? 1 : 3)).map((item) => (
              <div
                className="px-4 py-4 h-68 bg-gray-200 shadow rounded-lg"
                key={item.id}
              >
                <div className="w-24 h-24 my-2 mx-auto items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="text-center">
                  <p className="font-semibold py-2">{item.name}</p>
                  <p className="pb-2 ">{item.jobProfile}</p>
                  <p className="role bg-green-400 hover:bg-green-600 cursor-pointer py-2 w-16 mx-auto my-0 border-2 rounded-lg">
                    Admin
                  </p>
                </div>
                <div className="flex gap-2 py-2">
                  <div className="flex items-center justify-center w-1/2 bg-gray-400 hover:bg-green-600 cursor-pointer py-2 rounded-lg">
                    <span className="px-2">
                      <MdOutlineMail />
                    </span>
                    <span>Email</span>
                  </div>
                  <div className="flex items-center justify-center w-1/2 bg-gray-400 hover:bg-green-600 cursor-pointer py-2 rounded-lg">
                    <span className="px-2">
                      <MdOutlineLocalPhone />
                    </span>
                    <span>Call</span>
                  </div>
                </div>
              </div>
            ))}
            {isMobile ? (
              <div>
                <button
                  className={` absolute left-0  bg-gray-400  hover:bg-gray-600 w-8 h-8 rounded-full flex items-center justify-center ${
                    hasPrev ? "show" : "hide"
                  }`}
                  onClick={prev}
                >
                  &#10094;
                </button>
                <button
                  className={` absolute right-0  bg-gray-400 hover:bg-gray-600 w-8 h-8 rounded-full flex items-center justify-center ${
                    hasNext ? "show" : "hide"
                  }`}
                  onClick={next}
                >
                  &#10095;
                </button>
              </div>
            ) : (
              <>
                <button
                  className={`absolute  left-0  bg-gray-400 hover:bg-gray-600 w-4 h-8 ${
                    index + 3 > 3 ? "show" : "hide"
                  }`}
                  onClick={prev}
                >
                  &#10094;
                </button>
                <button
                  className={`absolute btn-smallscreen right-0 bg-gray-400 hover:bg-gray-600 w-4 h-8  ${
                    index + 3 === data.length && index === data.length - 3
                      ? "hide"
                      : "show"
                  }`}
                  onClick={next}
                  disabled={
                    index + 3 === data.length && index === data.length - 3
                  }
                >
                  &#10095;
                </button>
              </>
            )}
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          {/* Aspect ratio container */}
          <div className="relative aspect-w-16 aspect-h-9">
            {/* Image */}
            <img
              src="https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
              alt="Image"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="p-6">
            <div className="font-bold text-xl mb-2">Card Title</div>
            <p className="text-gray-700 text-base">
              This is a description or content for the card. You can customize
              it based on your needs.
            </p>
          </div>
        </div>

        <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg bg-white">
          {/* Aspect ratio container */}
          <div className="relative aspect-w-640 aspect-h-300">
            {/* Image */}
            <img
              src="https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
              alt="Image"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="p-6">
            <div className="font-bold text-xl mb-2">Card Title</div>
            <p className="text-gray-700 text-base">
              This is a description or content for the card. You can customize
              it based on your needs.
            </p>
          </div>
        </div>
      </Layout1>
    </>
  );
};

export default TeamCard;
