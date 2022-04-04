import imgPetrol from "./assets/images/petrol.png";
import imgPetrol2 from "./assets/images/petrol-2.png";
import imgRentalRebate from "./assets/images/rental-rebate.png";
import imgRentalRebate2 from "./assets/images/rental-rebate-2.png";
import imgFoodBeverage from "./assets/images/food-beverage.png";
import imgFoodBeverage2 from "./assets/images/food-beverage-2.png";

export interface CouponModel {
  id: number;
  price: number;
  image: string;
  description: string;
}

export interface Section {
  id: number;
  sectionName: string;
  coupons: CouponModel[];
}

const petrols: CouponModel[] = [
  {
    id: 1101,
    price: 15,
    image: imgPetrol,
    description: "50% discount for every $100 top-up on your Shell Petrol Card",
  },
  {
    id: 1105,
    price: 1000,
    image: imgPetrol2,
    description: "70% discount top-up on your Shell Petrol Card",
  },
];

const rentalRebates: CouponModel[] = [
  {
    id: 1102,
    price: 20,
    image: imgRentalRebate,
    description: "Get $20 Rental rebate",
  },
  {
    id: 1108,
    price: 15,
    image: imgRentalRebate2,
    description: "Get $500 Rental rebate",
  },
];

const foodBeverage: CouponModel[] = [
  {
    id: 1110,
    price: 25,
    image: imgFoodBeverage,
    description: "NTUC Fairprice $50 Voucher",
  },
  {
    id: 1112,
    price: 5,
    image: imgFoodBeverage2,
    description: "Free Cold Stone Sundae at any flavour!",
  },
];

export const sections: Section[] = [
  {
    id: 1,
    sectionName: "Petrol",
    coupons: petrols,
  },
  {
    id: 2,
    sectionName: "Rental Rebate",
    coupons: rentalRebates,
  },
  {
    id: 3,
    sectionName: "Food and Beverage",
    coupons: foodBeverage,
  },
];

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});
