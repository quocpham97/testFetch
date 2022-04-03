import imgPetrol from "./assets/images/petrol.png";
import imgPetrol2 from "./assets/images/petrol-2.png";
import imgRentalRebate from "./assets/images/rental-rebate.png";
import imgRentalRebate2 from "./assets/images/rental-rebate-2.png";
import imgFoodBeverage from "./assets/images/food-beverage.png";
import imgFoodBeverage2 from "./assets/images/food-beverage-2.png";

export interface CouponModel {
  title: string;
  image: string;
  description: string;
  isInsufficient: boolean;
  isEnable: boolean;
}

export interface Section {
  sectionName: string;
  coupons: CouponModel[];
}

const petrols: CouponModel[] = [
  {
    title: "15 Coins",
    image: imgPetrol,
    description: "50% discount for every $100 top-up on your Shell Petrol Card",
    isInsufficient: false,
    isEnable: true,
  },
  {
    title: "1,000 Coins",
    image: imgPetrol2,
    description: "70% discount top-up on your Shell Petrol Card",
    isInsufficient: true,
    isEnable: false,
  },
];

const rentalRebates: CouponModel[] = [
  {
    title: "20 Coins",
    image: imgRentalRebate,
    description: "Get $20 Rental rebate",
    isInsufficient: false,
    isEnable: true,
  },
  {
    title: "15 Coins",
    image: imgRentalRebate2,
    description: "Get $500 Rental rebate",
    isInsufficient: false,
    isEnable: true,
  },
];

const foodBeverage: CouponModel[] = [
  {
    title: "25 Coins",
    image: imgFoodBeverage,
    description: "NTUC Fairprice $50 Voucher",
    isInsufficient: false,
    isEnable: true,
  },
  {
    title: "5 Coins",
    image: imgFoodBeverage2,
    description: "Free Cold Stone Sundae at any flavour!",
    isInsufficient: false,
    isEnable: true,
  },
];

export const sections: Section[] = [
  {
    sectionName: "Petrol",
    coupons: petrols,
  },
  {
    sectionName: "Rental Rebate",
    coupons: rentalRebates,
  },
  {
    sectionName: "Food and Beverage",
    coupons: foodBeverage,
  },
];
