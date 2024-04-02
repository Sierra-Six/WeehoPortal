"use client";

import React, { useState } from "react";
import { Margarine } from "next/font/google";
import Head from "next/head";

const LandPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isOpen1, setIsOpen1] = useState(false);

  const [isOpen2, setIsOpen2] = useState(false);

  const [isOpen3, setIsOpen3] = useState(false);

  const [isOpen4, setIsOpen4] = useState(false);

  const [isOpen5, setIsOpen5] = useState(false);

  const [isOpen6, setIsOpen6] = useState(false);

  const [isOpen7, setIsOpen7] = useState(false);


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
  };

  const toggleDropdown4 = () => {
    setIsOpen4(!isOpen4);
  };

  const toggleDropdown5 = () => {
    setIsOpen5(!isOpen5);
  };

  const toggleDropdown6 = () => {
    setIsOpen6(!isOpen6);
  };

  const toggleDropdown7 = () => {
    setIsOpen7(!isOpen7);
  };


  return (
    <div className="">
      <div className="flex justify-center bg-white shadow-xl p-4">
        <button className="absolute top-8 left-12" onClick={toggleDropdown}>
          <img src="/images/bars.png" alt="bars" className="w-10 h-8 mr-2" />
        </button>
        {isOpen && (
          <div className="absolute  top-12 left-12  ">
            <ul>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <b>Welcome to Weeho</b>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <a href="https://www.weeho.in/">
                  <u>Visit Weeho</u>
                </a>
              </li>
            </ul>
            <ul>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <b>Performers</b>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Mandeep Singh
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Rupali Bhattacharjee
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Naviin Gandharv
              </li>
            </ul>
            <ul>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <b>Programs</b>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Friends Party
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Family Parties
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Family Get-together
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                And many More
              </li>
            </ul>
          </div>
        )}

        <div>
          <img
            className=""
            src="/images/Weeho.png"
            alt="Company Logo"
            height={50}
            width={130}
          />
        </div>
      </div>

      <div>
        <div className="flex justify-center mt-5 font-bold text-2xl">
          <p>What weeho does ? </p>
        </div>
        <div className="flex justify-center mt-2 pl-30 pr-30">
          <p>
            Weeho prganize all types of events Our sole mission is aiming
            towards bringing your vision into reality and creating over-lasting
            memories of the remarkable event.
          </p>
        </div>
      </div>

      <div className="">
        <div className="flex justify-center mt-10 font-bold text-2xl">
          <p>Types of events</p>
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="h-10  rounded-xl border-2 border-gray-300 shadow-xl pr-40"
            onClick={toggleDropdown1}
          >
            Birthday Parties
          </button>
        </div>

        <div className="">
          {isOpen1 && (
            <div className="mt-2 ml-80 mr-80 p-4 border-2 border-gray-300 rounded-xl ">
              <ul>
                <li>
                  <p className="max-w-sm m-5 ml-40">
                    Celebrate the special moments in life with our unforgettable
                    online birthday party experiences. Whether you're planning a
                    surprise for a loved one or organizing your own celebration,
                    we've got you covered. Our team of experts will help you
                    create a virtual party that's just as exciting and engaging
                    as an in person event.
                  </p>
                </li>

                <div className="m-5 ml-40">
                  <span className="bg-red-600 text-white p-3 mr-20 rounded-3xl px-5">
                    <button>Read More</button>
                  </span>
                  <span className="bg-red-600 text-white p-3 rounded-3xl px-5">
                    <button>Book event</button>
                  </span>
                </div>
              </ul>
            </div>
          )}
        </div>





        <div className="flex justify-center mt-2">
          <button
            className="h-10  rounded-xl border-2 border-gray-300 shadow-xl pr-40"
            onClick={toggleDropdown2}
          >
            Friends Parties
          </button>
        </div>

        <div className="">
          {isOpen2 && (
            <div className="mt-2 ml-80 mr-80 p-4 border-2 border-gray-300 rounded-xl ">
              <ul>
                <li>
                  <p className="max-w-sm m-5 ml-40">
                    Celebrate the special moments in life with our unforgettable
                    online birthday party experiences. Whether you're planning a
                    surprise for a loved one or organizing your own celebration,
                    we've got you covered. Our team of experts will help you
                    create a virtual party that's just as exciting and engaging
                    as an in person event.
                  </p>
                </li>

                <div className="m-5 ml-40">
                  <span className="bg-red-600 text-white p-3 mr-20 rounded-3xl px-5">
                    <button>Read More</button>
                  </span>
                  <span className="bg-red-600 text-white p-3 rounded-3xl px-5">
                    <button>Book event</button>
                  </span>
                </div>
              </ul>
            </div>
          )}
        </div>




        <div className="flex justify-center mt-2">
          <button
            className="h-10  rounded-xl border-2 border-gray-300 shadow-xl pr-40"
            onClick={toggleDropdown3}
          >
            Corporate Parties
          </button>
        </div>

        <div className="">
          {isOpen3 && (
            <div className="mt-2 ml-80 mr-80 p-4 border-2 border-gray-300 rounded-xl ">
              <ul>
                <li>
                  <p className="max-w-sm m-5 ml-40">
                    Celebrate the special moments in life with our unforgettable
                    online birthday party experiences. Whether you're planning a
                    surprise for a loved one or organizing your own celebration,
                    we've got you covered. Our team of experts will help you
                    create a virtual party that's just as exciting and engaging
                    as an in person event.
                  </p>
                </li>

                <div className="m-5 ml-40">
                  <span className="bg-red-600 text-white p-3 mr-20 rounded-3xl px-5">
                    <button>Read More</button>
                  </span>
                  <span className="bg-red-600 text-white p-3 rounded-3xl px-5">
                    <button>Book event</button>
                  </span>
                </div>
              </ul>
            </div>
          )}
        </div>




        <div className="flex justify-center mt-2">
          <button
            className="h-10 rounded-xl border-2 border-gray-300 shadow-xl pr-40"
            onClick={toggleDropdown4}
          >
            Personal Ceremony
          </button>
        </div>
 
        <div className="">
          {isOpen4 && (
            <div className="mt-2 ml-80 mr-80 p-4 border-2 border-gray-300 rounded-xl ">
              <ul>
                <li>
                  <p className="max-w-sm m-5 ml-40">
                    Celebrate the special moments in life with our unforgettable
                    online birthday party experiences. Whether you're planning a
                    surprise for a loved one or organizing your own celebration,
                    we've got you covered. Our team of experts will help you
                    create a virtual party that's just as exciting and engaging
                    as an in person event.
                  </p>
                </li>

                <div className="m-5 ml-40">
                  <span className="bg-red-600 text-white p-3 mr-20 rounded-3xl px-5">
                    <button>Read More</button>
                  </span>
                  <span className="bg-red-600 text-white p-3 rounded-3xl px-5">
                    <button>Book event</button>
                  </span>
                </div>
              </ul>
            </div>
          )}
        </div>




        <div className="flex justify-center mt-2">
          <button
            className="h-10  rounded-xl border-2 border-gray-300 shadow-xl pr-40"
            onClick={toggleDropdown5}
          >
            Family get-together
          </button>
        </div>

        
        <div className="">
          {isOpen5 && (
            <div className="mt-2 ml-80 mr-80 p-4 border-2 border-gray-300 rounded-xl ">
              <ul>
                <li>
                  <p className="max-w-sm m-5 ml-40">
                    Celebrate the special moments in life with our unforgettable
                    online birthday party experiences. Whether you're planning a
                    surprise for a loved one or organizing your own celebration,
                    we've got you covered. Our team of experts will help you
                    create a virtual party that's just as exciting and engaging
                    as an in person event.
                  </p>
                </li>

                <div className="m-5 ml-40">
                  <span className="bg-red-600 text-white p-3 mr-20 rounded-3xl px-5">
                    <button>Read More</button>
                  </span>
                  <span className="bg-red-600 text-white p-3 rounded-3xl px-5">
                    <button>Book event</button>
                  </span>
                </div>
              </ul>
            </div>
          )}
        </div>




        <div className="flex justify-center mt-2">
          <button
            className="h-10  rounded-xl border-2 border-gray-300 shadow-xl pr-40"
            onClick={toggleDropdown6}
          >
            Corporate Celebration
          </button>
        </div>

        
        <div className="">
          {isOpen6 && (
            <div className="mt-2 ml-80 mr-80 p-4 border-2 border-gray-300 rounded-xl ">
              <ul>
                <li>
                  <p className="max-w-sm m-5 ml-40">
                    Celebrate the special moments in life with our unforgettable
                    online birthday party experiences. Whether you're planning a
                    surprise for a loved one or organizing your own celebration,
                    we've got you covered. Our team of experts will help you
                    create a virtual party that's just as exciting and engaging
                    as an in person event.
                  </p>
                </li>

                <div className="m-5 ml-40">
                  <span className="bg-red-600 text-white p-3 mr-20 rounded-3xl px-5">
                    <button>Read More</button>
                  </span>
                  <span className="bg-red-600 text-white p-3 rounded-3xl px-5">
                    <button>Book event</button>
                  </span>
                </div>
              </ul>
            </div>
          )}
        </div>




        <div className="flex justify-center mt-2">
          <button
            className="h-10 rounded-xl border-2 border-gray-300 shadow-xl pr-60"
            onClick={toggleDropdown7}
          >
            MICE Events
          </button>
        </div>

        
        <div className="">
          {isOpen7 && (
            <div className="mt-2 ml-80 mr-80 p-4 border-2 border-gray-300 rounded-xl ">
              <ul>
                <li>
                  <p className="max-w-sm m-5 ml-40">
                    Celebrate the special moments in life with our unforgettable
                    online birthday party experiences. Whether you're planning a
                    surprise for a loved one or organizing your own celebration,
                    we've got you covered. Our team of experts will help you
                    create a virtual party that's just as exciting and engaging
                    as an in person event.
                  </p>
                </li>

                <div className="m-5 ml-40">
                  <span className="bg-red-600 text-white p-3 mr-20 rounded-3xl px-5">
                    <button>Read More</button>
                  </span>
                  <span className="bg-red-600 text-white p-3 rounded-3xl px-5">
                    <button>Book event</button>
                  </span>
                </div>
              </ul>
            </div>
          )}
        </div>


      </div>
    </div>
  );
};

export default LandPage;
