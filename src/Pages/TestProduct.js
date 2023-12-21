import { useEffect, useState } from "react";
import "../tailwind.output.css";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../Redux/cartSlicer";

export default function TestProduct() {
  const [data, setData] = useState([]);
  const url = "https://dummyjson.com/products";
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function addtoCart(item) {
    dispatch(add(item));
  }
  function removeCart(item) {
    dispatch(remove({ id: item }));
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
                  {cartItems.some((p) => p.id === item.id) ? (
                    <button
                      className="group-hover:bg-purple-700 group-hover:text-white transition duration-300 ease-in text-purple-700 border-2 border-purple-700 rounded-lg font-semibold p-3"
                      onClick={() => removeCart(item)}
                    >
                      Remove item
                    </button>
                  ) : (
                    <button
                      className="group-hover:bg-purple-700 group-hover:text-white transition duration-300 ease-in text-purple-700 border-2 border-purple-700 rounded-lg font-semibold p-3"
                      onClick={() => addtoCart(item)}
                    >
                      Add to cart
                    </button>
                  )}
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
