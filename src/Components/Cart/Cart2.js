import "./cart.css";

function ShoppingCart() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          position: "relative"

          // boxShadow:'rgba(0, 0, 0, 0.2) 0px 1px 2px 0px';
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexGrow: "1",
            margin: "10px 20px"
          }}
          className="cartdiv"
        >
          <div className="cartContainer">
            <div style={{ height: "112px", width: "112px" }}>
              <img
                src="https://rukminim1.flixcart.com/image/224/224/l3rmzrk0/computer/s/z/r/-original-imagetgzg4pgszmt.jpeg?q=90"
                className="cartImage"
                alt="hi"
              />
            </div>
            <div className="cart-item-descrip">
              <div className="CarttextHeadcon">
                <a href="/" className="cartTextHead">
                  ASUS TUF Gaming F15 Core i5 10th Gen
                </a>
              </div>
              <div>15.6 inch, Black Plastic, 2.30 kg kg</div>
              <div
                style={{
                  display: "flex",
                  color: "#878787",
                  height: "20px",
                  margin: "8px"
                }}
              >
                Seller:TBL Online
                <img
                  alt="hi"
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                  style={{ height: "15px", margin: "5px 6px" }}
                />
              </div>
              <span style={{ textDecoration: "line-through" }}>₹70,990</span>
              <span
                style={{
                  paddingLeft: "5px",
                  color: "#212121",
                  fontWeight: "500",
                  fontSize: "18px"
                }}
              >
                ₹52,990
              </span>
              <span style={{ color: "green", paddingLeft: "10px" }}>
                25% Off
              </span>
            </div>
          </div>
          <div>
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

          <div className="cartContainer">
            <div style={{ height: "112px", width: "112px" }}>
              <img
                src="https://rukminim1.flixcart.com/image/224/224/l3rmzrk0/computer/s/z/r/-original-imagetgzg4pgszmt.jpeg?q=90"
                className="cartImage"
                alt="hi"
              />
            </div>
            <div className="cart-item-descrip">
              <div className="CarttextHeadcon">
                <a href="/" className="cartTextHead">
                  ASUS TUF Gaming F15 Core i5 10th Gen
                </a>
              </div>
              <div>15.6 inch, Black Plastic, 2.30 kg kg</div>
              <div
                style={{
                  display: "flex",
                  color: "#878787",
                  height: "20px",
                  margin: "8px"
                }}
              >
                Seller:TBL Online
                <img
                  alt="hi"
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                  style={{ height: "15px", margin: "5px 6px" }}
                />
              </div>
              <span style={{ textDecoration: "line-through" }}>₹70,990</span>
              <span
                style={{
                  paddingLeft: "5px",
                  color: "#212121",
                  fontWeight: "500",
                  fontSize: "18px"
                }}
              >
                ₹52,990
              </span>
              <span style={{ color: "green", paddingLeft: "10px" }}>
                25% Off
              </span>
            </div>
          </div>
          <div>
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

          <div className="cartContainer">
            <div style={{ height: "112px", width: "112px" }}>
              <img
                src="https://rukminim1.flixcart.com/image/224/224/l3rmzrk0/computer/s/z/r/-original-imagetgzg4pgszmt.jpeg?q=90"
                className="cartImage"
                alt="hi"
              />
            </div>
            <div className="cart-item-descrip">
              <div className="CarttextHeadcon">
                <a href="/" className="cartTextHead">
                  ASUS TUF Gaming F15 Core i5 10th Gen
                </a>
              </div>
              <div>15.6 inch, Black Plastic, 2.30 kg kg</div>
              <div
                style={{
                  display: "flex",
                  color: "#878787",
                  height: "20px",
                  margin: "8px"
                }}
              >
                Seller:TBL Online
                <img
                  alt="hi"
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                  style={{ height: "15px", margin: "5px 6px" }}
                />
              </div>
              <span style={{ textDecoration: "line-through" }}>₹70,990</span>
              <span
                style={{
                  paddingLeft: "5px",
                  color: "#212121",
                  fontWeight: "500",
                  fontSize: "18px"
                }}
              >
                ₹52,990
              </span>
              <span style={{ color: "green", paddingLeft: "10px" }}>
                25% Off
              </span>
            </div>
          </div>
          <div>
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

          <div className="cartContainer">
            <div style={{ height: "112px", width: "112px" }}>
              <img
                src="https://rukminim1.flixcart.com/image/224/224/l3rmzrk0/computer/s/z/r/-original-imagetgzg4pgszmt.jpeg?q=90"
                className="cartImage"
                alt="hi"
              />
            </div>
            <div className="cart-item-descrip">
              <div className="CarttextHeadcon">
                <a href="/" className="cartTextHead">
                  ASUS TUF Gaming F15 Core i5 10th Gen
                </a>
              </div>
              <div>15.6 inch, Black Plastic, 2.30 kg kg</div>
              <div
                style={{
                  display: "flex",
                  color: "#878787",
                  height: "20px",
                  margin: "8px"
                }}
              >
                Seller:TBL Online
                <img
                  alt="hi"
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                  style={{ height: "15px", margin: "5px 6px" }}
                />
              </div>
              <span style={{ textDecoration: "line-through" }}>₹70,990</span>
              <span
                style={{
                  paddingLeft: "5px",
                  color: "#212121",
                  fontWeight: "500",
                  fontSize: "18px"
                }}
              >
                ₹52,990
              </span>
              <span style={{ color: "green", paddingLeft: "10px" }}>
                25% Off
              </span>
            </div>
          </div>
          <div>
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
        </div>

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
                <div>Total Amount</div>
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
        </div>
      </div>
    </>
  );
}
export default ShoppingCart;
