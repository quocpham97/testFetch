import React from "react";
import "./App.css";
import CouponSection from "./components/coupon-section";
import Navbar from "./components/navbar";
import { sections } from "./utils";
import bg from "./assets/images/bg-1.png";

function App() {
  return (
    <div
      className="w-full justify-center items-center  min-h-screen not-italic text-base font-normal"
      style={{ color: "#B5B5BE" }}
    >
      <div className="mb-32">
        <section className="p-4 pb-52 min" style={{ backgroundColor: "#171725" }}>
          <div className="ml-2 mb-4 mt-11">
            <button className="rounded-full bg-white p-3" style={{ color: "#171725" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          <div className="mb-2 px-2">
            <h1 className="text-3xl font-semibold leading-10 text-white">Silver Tier</h1>
          </div>
          <div className="px-2">
            <p>
              In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem exclusive
              rewards.
            </p>
          </div>
        </section>
        <section className="-mt-52 px-4">
          <div
            className="mt-10 p-6 bg-white rounded-lg box-content"
            style={{
              border: "1px solid #FAFAFB",
              boxShadow: "0px 12px 18px rgba(23, 23, 37, 0.04)",
              backgroundImage: `url(${bg})`,
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div>
              <p className="font-semibold ">Available Coin balance</p>
            </div>
            <div className="my-2">
              <h1 className="text-5xl font-normal" style={{ lineHeight: "56px", color: "#171725" }}>
                340
              </h1>
            </div>
            <div className="my-8">
              <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-300">
                <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: "60%" }}></div>
              </div>
            </div>
            <div className="my-2">
              <p>You have paid rental fee for $1,200.</p>
              <p>Pay more $800 to achieve Gold Tier.</p>
            </div>
            <div className="my-4 flex text-blue-600">
              <span>View tier benefits </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
            <div className="mt-6 mb-4 text-center">
              <button
                className="w-full rounded text-lg text-white leading-6 font-semibold"
                style={{ backgroundColor: "#171725", padding: "18px 0" }}
              >
                My Coupons
              </button>
            </div>
            <div className="text-center">
              <p>Updated : 02/11/2021</p>
            </div>
          </div>
        </section>
        {sections &&
          sections.map((section, index) => (
            <section>
              <CouponSection
                sectionName={section.sectionName}
                coupons={section.coupons}
                key={index}
              />
            </section>
          ))}
      </div>
      <Navbar />
    </div>
  );
}

export default App;
