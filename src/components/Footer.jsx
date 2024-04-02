import React from "react";

export default function Footer() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
          <div className="p-5">
            <h3 className="font-bold text-xl text-primary">The Restaurant</h3>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-primary font-bold">
              Resources
            </div>
            <a
              className="hover:text-primaryHover duration-500 my-3 block"
              href="/#"
            >
              Documentation <span className="text-primary text-xs p-1"></span>
            </a>
            <a
              className="hover:text-primaryHover duration-500 my-3 block"
              href="/#"
            >
              Tutorials <span className="text-primary text-xs p-1"></span>
            </a>
            <a
              className="hover:text-primaryHover duration-500 my-3 block"
              href="/#"
            >
              Support <span className="text-primary text-xs p-1">New</span>
            </a>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-primary font-bold">
              Support
            </div>
            <a
              className="hover:text-primaryHover duration-500 my-3 block"
              href="/#"
            >
              Help Center <span className="text-primary text-xs p-1"></span>
            </a>
            <a
              className="hover:text-primaryHover duration-500 my-3 block"
              href="/#"
            >
              Privacy Policy <span className="text-primary text-xs p-1"></span>
            </a>
            <a
              className="hover:text-primaryHover duration-500 my-3 block"
              href="/#"
            >
              Conditions <span className="text-primary text-xs p-1"></span>
            </a>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-primary font-bold">
              Contact us
            </div>
            <a
              className="hover:text-primaryHover duration-500 my-3 block"
              href="/#"
            >
              XXX XXXX, Floor 4 San Francisco, CA
              <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a
              className="hover:text-primaryHover duration-500 my-3 block"
              href="/#"
            >
              contact@company.com
              <span className="text-teal-600 text-xs p-1"></span>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 pt-2">
        <div
          className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
      max-w-screen-lg items-center"
        >
          <div className="my-5">© Copyright 2024. All Rights Reserved.</div>
        </div>
      </div>
    </>
  );
}
