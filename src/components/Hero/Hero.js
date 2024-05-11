import React, { useState } from 'react';
import Slider from "react-slick";
import Image1 from '../../assets/hero/ladysmile.png';
import Image2 from '../../assets/hero/img2.png';
import Image3 from '../../assets/hero/img3.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imageList = [
  {
    id: 1,
    img: Image2,
    title: "Up to 50% off Men's Wear",
    description: "Upgrade your wardrobe with our latest collection of men's wear. Enjoy up to 50% off on shirts, pants, jackets, and more. Don't miss out on this limited-time offer!",
  },
  {
    id: 2,
    img: Image1,
    title: "Up to 30% off Women's Wear",
    description: "Shop our stylish selection of women's wear and save big! Get up to 30% off on dresses, tops, skirts, and accessories. Elevate your look for less!",
  },
  {
    id: 3,
    img: Image3,
    title: "50% off All Products Sale",
    description: "Discover incredible deals on all our products with our exclusive sale event. Enjoy up to 50% off on everything from fashion to electronics. Hurry, while stocks last!",
  },
];

const Hero = ({ handlerOrderPopup }) => {
  const [showSignIn, setShowSignIn] = useState(false);

  const toggleSignIn = () => {
    setShowSignIn(!showSignIn);
  };

  var settings = {
    dots: false,
    arrows: false,
    infinte: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out',
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center duration-200'>
      {/* background design */}
      <div className='h-[700px] w-[700px] bg-[#B3E5B5] absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'></div>
      {/* hero section */}
      <div className='container pb-8 sm:pb-0'>
        <Slider {...settings}>
          {imageList.map((item) => (
            <div key={item.id}>
              <div className='grid grid-cols-1 sm:grid-cols-2'>
                {/* text content section */}
                <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-6 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{item.title}</h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className='text-sm'>{item.description}</p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300">
                    <button
                      onClick={toggleSignIn}
                      className='bg-gradient-to-t from-[#B3E5B5] to-[#FF0000] hover:from-[#FF0000] hover:to-[#B3E5B5] hover:scale-105 duration-200 text-white py-2 px-6 mx-2 rounded-full'>Shop Now</button>
                  </div>
                </div>
                {/* img section */}
                <div className='order-1 sm:order-2'>
                  <div>
                    <img src={item.img} alt='' className='w-[280px] h-auto sm:h-[450px] sm:scale-125 object-contain mx-auto' />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Hero;
