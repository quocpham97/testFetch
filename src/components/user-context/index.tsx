import React from "react";

const userInfo = {
  availableCoin: 340,
  paid: 1200,
  nextAchieve: 2000,
};

const UserContext = React.createContext(userInfo);

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
