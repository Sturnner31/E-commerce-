import React from "react";

const Subscribe = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    // Do something with the email, such as sending it to a backend server
    console.log('Submitted email:', email);
    // You can also clear the input field after submission if needed
    event.target.reset();
  };

  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gradient-to-r from-primary to-secondary text-white"
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <form onSubmit={handleSubmit} className="flex items-center justify-center">
            <input
              data-aos="fade-up"
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 text-black"
              required
            />
            <button
              type="submit"
              className=" hover:scale-105 duration-300 text-yellow-100 py-1 px-4 rounded-full ml-2 group-hover:bg-white hover:text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 transform rotate"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
