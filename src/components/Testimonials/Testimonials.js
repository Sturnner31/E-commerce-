import React from "react";
import Slider from "react-slick";
import Testy1 from '../../assets/Testimonials/profile-pic-2.png';
import Testy2 from '../../assets/Testimonials/she.jpg';
import Testy3 from '../../assets/Testimonials/clientlogo.jpg';
import Testy4 from '../../assets/Testimonials/profile-pic.png';


const TestimonialData = [
  {
    id: 1,
    name: "David",
    text: "I was amazed by the quality and variety of products available. Highly recommended!",
    img: Testy1,
  },
  {
    id: 2,
    name: "Bisola Johnson",
    text: "Fast delivery and excellent customer service. Will definitely be ordering again.",
    img: Testy2,
  },
  {
    id: 3,
    name: "James Gilbert",
    text:  "Impressed by the easy payment process and the professionalism of the staff. Great experience overall.",
    img: Testy3,
  },
  {
    id: 5,
    name: "Tope Adebayo",
    text: "The discounts and special offers are unbeatable. Couldn't be happier with my purchase.",
    img: Testy4,
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
        <p data-aos="fade-up" className="text-sm text-black">
          Hear it from our satisfied customers
        </p>
        <h1 data-aos="fade-up" className="text-3xl font-bold">
          Testimonials
        </h1>
        <p data-aos="fade-up" className="text-xs text-black">
          Discover what our customers have to say about their experience with us. Your satisfaction is our priority.
        </p>

        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-700 bg-gray-500/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;