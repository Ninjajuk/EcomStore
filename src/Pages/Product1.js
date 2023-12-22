import { useEffect, useState } from "react";
import "../tailwind.output.css";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../Redux/cartSlicer";

export default function Product1() {
  const [data, setData] = useState([]);
  const url = "https://dummyjson.com/products";
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function addtoCart(item) {
    if (isItemInCart(item.id)) {
      dispatch(remove(item.id));
    } else {
      dispatch(add(item));
    }
  }

  function isItemInCart(itemId) {
    return cartItems.some((item) => item.id === itemId);
  }
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
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white px-5 py-5">
        {data.map((item) => (
          <>
            <div className=" flex justify-center items-center flex-col max-w-72 max-h-72 shadow-lg ">
              <div className=" rounded-t-lg w-64 h-64 object-cover  ">
                <a href="/">
                  <img
                    className=" rounded-t-lg w-full h-full  "
                    src={item.thumbnail}
                    alt={item.title}
                  />
                </a>
              </div>

              <div className="">
                <a href="/">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {item.title}
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      ${item.price}
                    </span>
                  </h5>
                </a>

                <div className="text-center py-3 mb-3 ">
                  <button
                    onClick={() => addtoCart(item)}
                    className=" w-full p-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    {isItemInCart(item.id) ? "Remove from cart" : "Add to cart"}
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      {/* Pagination */}
      <span>1</span>
    </>
  );
}
