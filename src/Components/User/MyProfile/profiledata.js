import {
  FaFolder,
  FaPowerOff,
  FaCog,
  FaCreditCard,
  FaAngleDown,
  FaAngleUp,
  FaRegHeart,
  FaBookmark
} from "react-icons/fa";

export const userprofile = [
  {
    id: 1,
    menu: "My Profile",
    icon: <FaFolder />,
    submenu: [],
    path: "/profile",
    active: false
  },
  {
    id: 2,
    menu: "MY ORDERS",
    icon: <FaFolder />,
    submenu: [],
    path: "/myorder",
    active: false
  },
  {
    id: 3,
    menu: "MY Wishlist",
    icon: <FaRegHeart />,
    submenu: [],
    path: "/wishlist",
    active: false
  },
  {
    id: 4,
    menu: "SETTINGS",
    icon: <FaCog />,
    iconDown: <FaAngleDown />,
    iconUp: <FaAngleUp />,
    submenu: [
      {
        title: "Profile Information",
        path: "/profile/information",
        active: false
      },
      { title: "Manage Address", path: "/profile/address", active: false },
      { title: "PAN Card", path: "/pan", active: false }
    ],
    path: "",
    active: false
  },
  {
    id: 5,
    menu: "PAYMENTS",
    icon: <FaCreditCard />,
    iconDown: <FaAngleDown />,
    iconUp: <FaAngleUp />,
    submenu: [
      { title: "Gift Cards", path: "payments/prof" },
      { title: "Saved UPI", path: "payments/savedupi" },
      { title: "Saved Cards", path: "payments/savedcards" }
    ],
    path: "/payment",
    active: false
  },
  {
    id: 6,
    menu: "MY STUFF",
    icon: <FaBookmark />,
    iconDown: <FaAngleDown />,
    iconUp: <FaAngleUp />,
    submenu: [
      { title: "MY Coupons", path: "/mystuff/coupons", active: false },
      { title: "MY Reviews & Ratings", path: "/mystuff/review", active: false },
      {
        title: "All Notifications",
        path: "/mystuff/notifications",
        active: false
      }
    ],
    path: "/coupon",
    active: false
  },
  // { menu: "Project", icon: <FaFolder />, submenu: "", path: "" },
  // { menu: "Calender", icon: <FaRegCalendarAlt />, submenu: "", path: "" },
  // { menu: "Documents", icon: <FaFileAlt />, submenu: "", path: "" },
  { id: 7, menu: "Logout", icon: <FaPowerOff />, submenu: [], path: "/logout" }
];

const orderHistory = [
  {
    orderId: "ORD12345",
    items: [
      { itemName: "Product A", price: 25.0 },
      { itemName: "Product B", price: 30.0 }
    ],
    totalPrice: 55.0,
    buyDate: "2023-09-15 10:30 AM",
    deliveryAddress: "123 Main St, Cityville, USA",
    paymentMode: "Credit Card",
    orderStatus: "Delivered",
    trackingInfo: "Tracking Number: TRK987654321",
    invoiceReceipt: "Download Invoice"
  },
  {
    orderId: "ORD54321",
    items: [
      { itemName: "Product C", price: 40.0 },
      { itemName: "Product D", price: 15.0 }
    ],
    totalPrice: 55.0,
    buyDate: "2023-09-10 09:45 AM",
    deliveryAddress: "456 Elm St, Townsville, USA",
    paymentMode: "PayPal",
    orderStatus: "Shipped",
    trackingInfo: "Tracking Number: TRK123456789",
    invoiceReceipt: "Download Invoice"
  }
];
