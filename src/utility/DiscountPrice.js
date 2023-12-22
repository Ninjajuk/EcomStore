const productsData = {
  products: [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
      ]
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/2/1.jpg",
        "https://i.dummyjson.com/data/products/2/2.jpg",
        "https://i.dummyjson.com/data/products/2/3.jpg",
        "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
      ]
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      images: ["https://i.dummyjson.com/data/products/3/1.jpg"]
    }
  ],
  total: 100,
  skip: 0,
  limit: 30
};

const discountPrice = (price, discountPercentage) => {
  return price - (price * discountPercentage) / 100;
};
const totalsave = (price, discountPrice) => {
  return price - discountPrice;
};
const calculateDiscountPriceProducts = (product) => {
  return product.map((pro) => {
    const discoPrice = discountPrice(pro.price, pro.discountPercentage);
    const yousave = totalsave(pro.price, discoPrice);
    return {
      id: pro.id,
      title: pro.title,
      price: pro.price,
      discountprice: Math.round(discoPrice),
      yousave: Math.round(yousave)
    };
  });
};
const discountedPrice = calculateDiscountPriceProducts(productsData.products);
console.log(discountedPrice);
console.log(discountedPrice.yousave);

// // Function to calculate discounted prices for all products
// const calculateDiscountedPricesForProducts = (products) => {
//   return products.map(product => {
//     const discountedPrice = calculateDiscountedPrice(product.price, product.discountPercentage);
//     return {
//       id: product.id,
//       title: product.title,
//       discountedPrice: discountedPrice.toFixed(2)
//     };
//   });
// };
