import React from "react";
import Coupon from "../coupon";
import { CouponModel } from "../../utils";

interface IProps {
  sectionName: string;
  coupons: CouponModel[];
}

function CouponSection(props: IProps) {
  const { sectionName, coupons } = props;

  return (
    <div>
      <p className="font-semibold p-6" style={{ color: "#171725" }}>
        {sectionName}
      </p>
      <div className="flex overflow-x-auto mx-3 pb-6">
        {coupons.map((coupon, index) => (
          <Coupon {...coupon} key={index} />
        ))}
      </div>
    </div>
  );
}

export default CouponSection;
