import React from "react";
import "./App.css";
import CouponSection from "./components/coupon-section";
import Navbar from "./components/navbar";
import { sections, formatter } from "./utils";
import bg from "./assets/images/bg.png";
import { UserProvider } from "./components/user-context";

function App() {
  const userInfo = {
    availableCoin: 340,
    paid: 1200,
    nextAchieve: 2000,
  };

  return (
    <UserProvider value={userInfo}>
      <div
        className="w-full justify-center items-center  min-h-screen not-italic text-base font-normal"
        style={{ color: "#B5B5BE" }}
      >
        <div className="mb-32">
          <section className="p-4 pb-52" style={{ backgroundColor: "#171725" }}>
            <div className="ml-2 mb-4 mt-11">
              <button className="rounded-full bg-white p-2" style={{ color: "#171725" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
              <h3 className="font-semibold leading-10 text-white" style={{ fontSize: "32px" }}>
                Silver Tier
              </h3>
            </div>
            <div className="px-2">
              <p style={{ letterSpacing: "-0.005em" }}>
                In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem exclusive rewards.
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
                <p className="text-sm font-semibold leading-6">Available Coin balance</p>
              </div>
              <div className="my-2">
                <h1
                  className="text-5xl font-normal"
                  style={{
                    lineHeight: "56px",
                    color: "#171725",
                    letterSpacing: "-0.5px",
                  }}
                >
                  {userInfo.availableCoin}
                </h1>
              </div>
              <div style={{ marginTop: "33px", marginBottom: "34px" }}>
                <div
                  className="w-full dark:bg-gray-300"
                  style={{
                    height: "5px",
                    backgroundColor: "#E2E2EA",
                    borderRadius: "2.5px",
                  }}
                >
                  <div
                    style={{
                      width: `${(userInfo.paid * 100) / userInfo.nextAchieve}%`,
                      height: "5px",
                      backgroundColor: "#0062FF",
                      borderRadius: "2.5px",
                    }}
                  ></div>
                </div>
              </div>
              <div className="my-2" style={{ letterSpacing: "-0.005em" }}>
                <p>You have paid rental fee for {formatter.format(userInfo.paid)}.</p>
                <p>Pay more {formatter.format(userInfo.nextAchieve - userInfo.paid)} to achieve Gold Tier.</p>
              </div>
              <div className="my-4">
                <a className="flex" style={{ color: "#0062FF", letterSpacing: "-0.005em" }}>
                  <span>View tier benefits </span>
                  <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9 18L15 12L9 6"
                        stroke="#0062FF"
                        strokeWidth="2"
                        strokeLinecap="square"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              </div>
              <div className="mt-6 mb-4 text-center">
                <button
                  className="w-full rounded text-lg text-white leading-6 font-semibold"
                  style={{ backgroundColor: "#171725", padding: "18px 0" }}
                >
                  My Coupons
                </button>
              </div>
              <div className="text-center text-sm" style={{ letterSpacing: "-0.5px" }}>
                <p>Updated : 02/11/2021</p>
              </div>
            </div>
          </section>
          {sections &&
            sections.map((section) => (
              <section>
                <CouponSection sectionName={section.sectionName} coupons={section.coupons} key={section.id} />
              </section>
            ))}
        </div>
        <Navbar />
      </div>
    </UserProvider>
  );
}

export default App;
