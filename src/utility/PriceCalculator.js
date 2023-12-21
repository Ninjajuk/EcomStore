// Calculate the total price and total discount amount
import { useSelector, useDispatch } from "react-redux";

const cartItems = useSelector((state) => state.cart);

export const { totalPrice, totalDiscount, totalQuantity } = cartItems.reduce(
  (acc, item) => {
    const itemPrice = item.price * item.quantity;
    const discountAmount = Math.round(
      (itemPrice * item.discountPercentage) / 100
    );

    return {
      totalPrice: acc.totalPrice + itemPrice,
      totalDiscount: acc.totalDiscount + discountAmount,
      totalQuantity: acc.totalQuantity + item.quantity
    };
  },
  { totalPrice: 0, totalDiscount: 0, totalQuantity: 0 }
);

// Calculate the final price after applying discounts
const finalPrice = totalPrice - totalDiscount;
