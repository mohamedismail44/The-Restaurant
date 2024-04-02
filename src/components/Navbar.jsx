import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const toggleMenu = () => {
    const navToggle = document.getElementsByClassName("toggle");
    for (let i = 0; i < navToggle.length; i++) {
      navToggle.item(i).classList.toggle("hidden");
    }
  };

  return (
    <div>
      <nav className="flex flex-wrap items-center justify-between px-4 bg-gray-100">
        <div className="flex items-center "><img
          src="/recipeLogo.png"
          className="h-20 w-20"
          alt="Logo"
        />
        <h1 className="text-xl font-bold">The Restaurant</h1></div>
        
        <div className="flex md:hidden">
          <button onClick={() => toggleMenu()}>
            <img
              alt=""
              className="toggle block"
              src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
              width="40"
              height="40"
            />
            <img
              alt=""
              className="toggle hidden"
              src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
              width="40"
              height="40"
            />
          </button>
        </div>
        <div className="toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-primary md:border-none">
          <Link
            to="/"
            className="block md:inline-block text-primary hover:text-primaryHover px-3 py-3 border-b-2 border-primary md:border-none"
          >
            Home
          </Link>
          <Link
            to="/food-list"
            className="block md:inline-block text-primary hover:text-primaryHover px-3 py-3 border-b-2 border-primary md:border-none"
          >
            Food List
          </Link>
          <Link
            to="/healthy-food"
            className="block md:inline-block text-primary hover:text-primaryHover px-3 py-3 border-b-2 border-primary md:border-none"
          >
            Healthy Food
          </Link>
          <Link
            to="/contact"
            className="block md:inline-block text-primary hover:text-primaryHover px-3 py-3 border-b-2 border-primary md:border-none"
          >
            Contact
          </Link>
        </div>
        <div className="">
          {/* <Link
            to="/"
            
            className="toggle hidden md:flex w-full md:w-auto px-4 py-2 text-right bg-primary hover:bg-primaryHover text-white md:rounded"
          >
            Create Account
          </Link> */}
        </div>
      </nav>
      <script></script>
    </div>
  );
}
