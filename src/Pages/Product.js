import { useEffect, useState } from "react";
import "../tailwind.output.css";
import "./product.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../Redux/cartSlicer";
import Layout from "../Layout";

export default function Product1() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const url = "https://dummyjson.com/products?limit=100";
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function addtoCart(item) {
    if (isItemInCart(item.id)) {
      dispatch(removeItem(item.id));
    } else {
      dispatch(addItem(item));
    }
  }
  function isItemInCart(itemId) {
    return cartItems.some((item) => item.id === itemId);
  }

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= data.length / 10 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  async function getProducts() {
    const products = await fetch(url);
    const data = await products.json();

    setData(data.products);
    console.log(data);
  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className=" grid grid-cols-1 lg:grid-cols-4 gap-4  bg-white mt-4">
        {data.slice(page * 10 - 10, page * 10).map((item) => (
          <>
            <div className=" px-2 py-2   flex flex-col justify-between max-w-72 max-h-72 rounded-lg shadow-lg ">
              <div className=" rounded-t-lg w-64 h-64 object-cover  ">
                <a href="/">
                  <img
                    className=" rounded-t-lg w-full h-full  "
                    src={item.thumbnail}
                    alt={item.title}
                  />
                </a>
              </div>

                   <div className="mt-4 flex flex-col">
                  <a href={`/shop`}>
                    <p className="text-sm font-medium text-gray-900">
                      {item.title}
                    </p>
                  </a>
                  <p className="text-sm font-medium text-gray-900 flex items-center justify-between">
                    <span className="font-semibold text-lg">
                      ₹{item.price}
                    </span>
                    <span className="text-green-500">
                      {item.discountPercentage}% off
                    </span>
                  </p>
                </div>
              <div className="text-center py-3 mb-3 ">
                <button
                  onClick={() => addtoCart(item)}
                  className="w-full py-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <span className="inline-block w-18">
                    {" "}
                    {/* Set a fixed width */}
                    {isItemInCart(item.id) ? "Remove" : "Add to Cart"}
                  </span>
                </button>
              </div>
            </div>
          </>
        ))}
      </div>

      {/* Pagination starts here */}
      <div className="w-full  sm:bottom-0 flex justify-center items-center  py-2">
        <span
          className={`px-3 py-4 cursor-pointer block${
            page > 1 ? "" : "disable_btn"
          }`}
          onClick={() => selectPageHandler(page - 1)}
          style={page <= 1 ? { display: "none" } : {}}
        >
          ◀
        </span>
        {[...Array(Math.ceil(data.length / 10))].map((_, i) => {
          return (
            <span
              className={`flex items-center justify-center px-3 w-3 cursor-pointer hover:bg-green-400 rounded-full ${
                page === i + 1 ? "selected" : ""
              }
                }`}
              key={i}
              onClick={() => selectPageHandler(i + 1)}
            >
              {i + 1}
            </span>
          );
        })}
        <span
          className={`px-3  cursor-pointer block${
            page < data.length / 10 ? "" : "disable_btn"
          }`}
          onClick={() => selectPageHandler(page + 1)}
          style={page >= Math.ceil(data.length / 10) ? { display: "none" } : {}}
        >
          ▶
        </span>
      </div>
      {/* Pagination Ends here */}
    </>
  );
}
