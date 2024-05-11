import React from "react";
import product2 from "../../assets/products/product2.jpg";
import product3 from "../../assets/products/product3.jpg";
import product4 from "../../assets/products/product4.jpg";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: product2,
    title: "Simple Wear",
    description:
      "Discover the latest trends in casual fashion with our Simple Wear collection. From comfy tees to stylish hoodies, our selection offers versatile pieces perfect for everyday wear. Upgrade your wardrobe and express your unique style effortlessly.",
  },
  {
    id: 2,
    img: product3,
    title: "Body Cream",
    description:
      "Indulge in luxurious skincare with our Body Cream collection. Formulated with nourishing ingredients, our creams deeply moisturize and soothe your skin, leaving it soft, smooth, and radiant. Treat yourself to a spa-like experience at home and pamper your skin with our premium products.",
  },
  {
    id: 3,
    img: product4,
    title: "Facial Cream",
    description:
      "Revitalize your complexion with our Facial Cream collection. Infused with potent antioxidants and vitamins, our creams replenish moisture, reduce signs of aging, and promote a healthy glow. Experience the transformative power of our skincare solutions and achieve radiant, youthful-looking skin.",
  },
];

const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24 px-16">
  <p data-aos="fade-up" className="text-sm text-gray-600">
    Explore Our Top Picks
  </p>
  <h1 data-aos="fade-up" className="text-3xl font-bold">
    Discover the Best Products
  </h1>
  <p data-aos="fade-up" className="text-sm text-[#333333]">
    Find high-quality products curated just for you. Whether you're looking for trendy fashion, innovative gadgets, or essential everyday items, we've got you covered. Browse our selection and experience the ultimate shopping satisfaction.
  </p>
</div>

        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-300 text-yellow-100 py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-black"
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
