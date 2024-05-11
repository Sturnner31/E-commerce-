import React from "react";
import Slider from "react-slick";
import product1 from "../../assets/products/product1.jpg";
import Top1 from '../../assets/Topproducts/Top1.jpg';
import Top2 from '../../assets/Topproducts/Top2.jpg';
import Top3 from '../../assets/Topproducts/Top3.png';
import product6 from "../../assets/products/product6.jpg";
import { FaStar } from "react-icons/fa6";
import { FaArrowRight } from 'react-icons/fa6';

const ProductsData = [
  {
    id: 1,
    img: product1,
    title: "Cannon Camera",
    color: "Black",
    aosDelay: "0",
    price: "$200",
    rating: 4,
  },
  {
    id: 2,
    img: Top1,
    title: "Sofa",
    color: "Blue",
    aosDelay: "200",
    price: "$850",
  },
  {
    id: 3,
    img: Top2,
    title: "Headset",
    color: "White",
    aosDelay: "400",
    price: "$200",
  },
  {
    id: 4,
    img:Top3,
    title: "Playstation 5",
    color: "Black",
    aosDelay: "600",
    price: "$550",
  },
  {
    id: 5,
    img: product6,
    title: "Fashion's Wear",
    color: "Pink",
    aosDelay: "800",
    price: "$90",
  },
];

const Products = () => {
  const handleViewAllClick = () => {
    console.log("View All clicked");
  };

  const generateRandomRating = () => {
    return Math.floor(Math.random() * 3) + 3;
  };

  ProductsData.forEach((product) => {
    if (!product.rating) {
      product.rating = generateRandomRating();
    }
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out',
    pauseOnHover: false,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-20 mb-12 bg-[#F4F4F4]">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-gray-600">
            Discover the Latest Trends
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold text-[#333333]">
            Featured Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-600">
            Explore our handpicked selection of top-quality products
          </p>
        </div>
        <div>
          <div className="hidden lg:block">
            {/* Display as list on laptops and larger screens */}
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
              {ProductsData.map((data) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  key={data.id}
                  className="space-y-3"
                >
                  <img
                    src={data.img}
                    alt=""
                    className="h-[220px] w-[150px] object-cover rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold">{data.title}</h3>
                    <p className="text-sm text-gray-600">{data.color}</p>
                    <div className="flex items-center gap-1">
                      {[...Array(data.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-lg font-bold">{data.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:hidden">
            {/* Display as horizontal slider on tablets and mobile devices */}
            <Slider {...settings}>
              {ProductsData.map((data) => (
                <div
                  key={data.id}
                  className="space-y-3"
                  style={{ outline: "none" }} 
                >
                  <img
                    src={data.img}
                    alt=""
                    className="w-full h-[250px] object-cover rounded-md justify-center"
                  />
                  <div>
                    <h3 className="font-semibold">{data.title}</h3>
                    <p className="text-sm text-gray-600">{data.color}</p>
                    <div className="flex items-center gap-1">
                      {[...Array(data.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-lg font-bold">{data.price}</span>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          {/* view all button */}
          <div className="flex justify-center mt-5">
          

          <button
            className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-300 text-yellow-100 py-1 px-4 rounded-full mt-4 group-hover:bg-white hover:text-black flex items-center justify-center space-x-2"
            onClick={handleViewAllClick}>
              Explore All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
