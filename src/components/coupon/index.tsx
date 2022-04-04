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
            <p
              className="font-semibold"
              style={{ color: `${userInfo.availableCoin > price ? "#0062FF" : "#696974"}` }}
            >
              {new Intl.NumberFormat("en-VN").format(price)} Coins
            </p>
            <p className="my-2">{description}</p>
            {!(userInfo.availableCoin > price) && (
              <p style={{ color: "#0062FF" }}>Insufficient coins</p>
            )}
          </div>
        </div>
      )}
    </UserConsumer>
  );
}

export default Coupon;
