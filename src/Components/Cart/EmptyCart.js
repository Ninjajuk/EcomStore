import "./cart.css";

function EmptyCart() {
  return (
    <>
      <div className="cartcont">
        <div class="cartcont2">
          <div className="imgcartcont">
            <img
              src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
              className="imgcartemp"
              alt="cartimg"
            />
            <div class="emptytext">Your cart is empty!</div>
            <div class="emptytext2">
              Explore our wide selection and find something you like
            </div>
            <div className="mt-4">
              <a
                href="/"
                className=" bg-green-500 hover:bg-green-600 text-sm text-green px-12 py-2 rounded-sm shadow mt-3"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default EmptyCart;
