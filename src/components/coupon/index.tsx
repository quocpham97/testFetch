import React from "react";
import { CouponModel } from "../../utils";
import { UserConsumer } from "../user-context";

function Coupon(props: CouponModel) {
  const { price, description, image } = props;
  return (
    <UserConsumer>
      {(userInfo) => (
        <div
          className="rounded mx-3 overflow-hidden"
          style={{
            minWidth: "200px",
            maxWidth: "200px",
            minHeight: "240px",
            border: "1px solid #F1F1F5",
            boxSizing: "border-box",
            boxShadow: "0px 12px 18px rgba(23, 23, 37, 0.04)",
          }}
        >
          <img src={image} alt="" className="w-full h-24" />
          <div className="p-4">
            <div className="flex items-center">
              {userInfo.availableCoin < price && (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1"
                >
                  <path
                    d="M8.02317 15.9537C12.4287 15.9537 16 12.3824 16 7.97687C16 3.57137 12.4287 0 8.02317 0C3.61767 0 0.0463028 3.57137 0.0463028 7.97687C0.0463028 12.3824 3.61767 15.9537 8.02317 15.9537Z"
                    fill="#696974"
                  />
                  <path d="M7.33418 10.8082H11.0521V11.9458H5.9099V3.75158H7.33418V10.8082Z" fill="white" />
                  <path
                    d="M7.99999 16C3.58844 16 0 12.4115 0 7.99999C0 3.58844 3.58844 0 7.99999 0C12.4115 0 16 3.58844 16 7.99999C16 12.4115 12.4115 16 7.99999 16ZM7.99999 1.57688C4.4578 1.57688 1.57688 4.4578 1.57688 7.99999C1.57688 11.5422 4.4578 14.4231 7.99999 14.4231C11.5422 14.4231 14.4231 11.5422 14.4231 7.99999C14.4231 4.4578 11.5422 1.57688 7.99999 1.57688Z"
                    fill="#B5B5BE"
                  />
                  <path
                    d="M13.3333 4.36521C13.4015 4.46471 13.4639 4.57284 13.5263 4.68096C15.2974 7.74859 14.2429 11.684 11.1753 13.4551C9.18494 14.6042 6.82678 14.5614 4.93463 13.55L3.84214 14.7468C6.25528 16.1889 9.36466 16.3213 11.9677 14.8184C15.7883 12.6126 17.1017 7.71073 14.8959 3.89021C14.7503 3.63792 14.5972 3.40056 14.4281 3.17246L13.3333 4.36521Z"
                    fill="#44444F"
                  />
                  <path
                    d="M13.2864 1.91438C13.0261 1.68553 12.7544 1.47394 12.4713 1.27962L11.3902 2.45911C11.683 2.6425 11.9564 2.84777 12.2167 3.07662L13.2864 1.91438Z"
                    fill="#44444F"
                  />
                  <path
                    d="M3.55512 12.5575C3.30685 12.3217 3.07399 12.0664 2.86685 11.7908L1.78575 12.9703C2.0049 13.2389 2.24177 13.492 2.48772 13.7237L3.55512 12.5575Z"
                    fill="#44444F"
                  />
                </svg>
              )}
              <p
                className="font-semibold"
                style={{ color: `${userInfo.availableCoin >= price ? "#0062FF" : "#696974"}` }}
              >
                {new Intl.NumberFormat("en-VN").format(price)} Coins
              </p>
            </div>
            <p className="my-2" style={{ letterSpacing: "-0.005em", color: "#92929D" }}>
              {description}
            </p>
            {!(userInfo.availableCoin >= price) && (
              <p style={{ color: "#0062FF", letterSpacing: "-0.5px" }}>Insufficient coins</p>
            )}
          </div>
        </div>
      )}
    </UserConsumer>
  );
}

export default Coupon;
