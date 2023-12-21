import "./cart.css";
import { products } from "./data";

function ShoppingCart() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="flex flex-col " style={{ width: "66.66%" }}>
          <div className="my-2.5 mx-5 font-medium">Delivery Addresses </div>
          {products.map((item) => (
            <div className=" cartdiv flex flex-col mx-[20px] my-[10px]">
              <div className="cartContainer">
                <div style={{ height: "112px", width: "112px" }}>
                  <img src={item.img} className="cartImage" alt="hi" />
                </div>
                <div className="cart-item-descrip">
                  <div className="CarttextHeadcon">
                    <a href="/" className="cartTextHead">
                      {item.title}
                    </a>
                  </div>
                  <div> {item.subtitle}</div>
                  <div className="flex h-[20px] m-[8px]">
                    {item.seller}
                    <img
                      alt="hi"
                      src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                      style={{ height: "15px", margin: "5px 6px" }}
                    />
                  </div>
                  <span style={{ textDecoration: "line-through" }}>
                    {item.p1}
                  </span>
                  <span
                    style={{
                      paddingLeft: "5px",
                      color: "#212121",
                      fontWeight: "500",
                      fontSize: "18px"
                    }}
                  >
                    {item.p2}
                  </span>
                  <span style={{ color: "green", paddingLeft: "10px" }}>
                    {item.p3}
                  </span>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  padding: "10px ",
                  alignItems: "center"
                  // backgroundColor: "rosybrown"
                }}
              >
                <button className="cart-btn" disabled="">
                  {" "}
                  –{" "}
                </button>
                <div className="cartItemsinputcont">
                  <input type="text" className="cartItemsinput" value="1" />
                </div>
                <button className="cart-btn" disabled="">
                  {" "}
                  +{" "}
                </button>
                <div style={{ marginLeft: "25px" }}>
                  <div className="cartSaveLater">Save for later</div>
                  <div className="cartSaveLater">Remove</div>
                </div>
              </div>
            </div>
          ))}
          <div className="mb-3 pb-3 mr-5 shadow-lg ">
            <button
              style={{
                width: "25%",
                cursor: "pointer",
                backgroundColor: "#fb641b",
                boxShadow: "0 1px 2px 0 rgba(0,0,0,.2)",
                color: "#fff",
                padding: "5px",
                borderRadius: "2px",
                padding: "10px",
                float: "right"
              }}
            >
              Place Order
            </button>
          </div>
        </div>

        {/* Price Detail right bar Starts here */}
        <div className="cartPriceCont">
          <div style={{ width: "100%" }}>
            <span
              style={{
                minHeight: "47px",
                borderRadius: "2px 2px 0 0",
                color: "gray",
                fontWeight: "500",
                fontSize: "20px"
              }}
            >
              Price details
            </span>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px 0px"
                }}
              >
                <div>Price (1 item)</div>
                <div>₹70,990</div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px 0px"
                }}
              >
                <div>Discount</div>
                <div style={{ color: "green" }}>− ₹18,000</div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px 0px"
                }}
              >
                <div>Delivery Charges</div>
                <div style={{ color: "green" }}>Free</div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderTop: "1px dashed #e0e0e0",
                  fontWeight: "500",
                  fontSize: "18px",
                  padding: "10px 0px"
                }}
              >
                <div className="">Total Amount</div>
                <div> ₹52,990</div>
              </div>
              <div
                className="_3s5O6i"
                style={{
                  color: "#388e3c",
                  fontWeight: "500",
                  borderRadius: "2px",
                  borderTop: "1px dashed #e0e0e0",
                  padding: "10px 0px"
                }}
              >
                You will save ₹18,000 on this order
              </div>
            </div>
          </div>
          {/* Price Detail right bar Ends here */}
        </div>
      </div>
    </>
  );
}
export default ShoppingCart;
