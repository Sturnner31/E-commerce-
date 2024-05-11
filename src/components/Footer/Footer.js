import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt, FaCcMastercard, FaCcVisa, FaPaypal } from "react-icons/fa";
import footerLogo from '../../assets/images/logo-1.png'

const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "/#contact" },
  
];

const Footer = () => {
  return (
    <div className="bg-gradient-to-t from-secondary to-primary text-black">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/* Company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="" className="max-w-[50px]" />
              QSA Store
            </h1>
            <p>
             At QSA Store, we prioritize customer satisfaction above all else. Our team is committed to delivering exceptional service and ensuring a seamless shopping experience for every customer. 
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            {FooterLinks.map((link) => (
              <div key={link.title} className="py-8 px-4">
                <h1 className="sm:text-xl text-lg font-bold sm:text-left text-justify mb-3">
                  {link.title}
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200">
                    <span>{link.title}</span>
                  </li>
                </ul>
              </div>
            ))}
          </div>

          {/* Accepted Payment Methods */}
          <div className="py-8 px-4">
            <h1 className="sm:text-xl text-lg font-bold sm:text-left text-justify mb-3">
              Accepted Payment Methods
            </h1>
            <div className="flex items-center gap-4">
              <FaCcMastercard className="text-3xl" />
              <FaCcVisa className="text-3xl" />
              <FaPaypal className="text-3xl" />
              {/* Add more icons for additional payment methods */}
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3 mt-6">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-3xl" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-3xl" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-3xl" />
            </a>
          </div>
          <div className="mt-12">
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Lagos, Nigeria</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+234 905-103-2697</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
