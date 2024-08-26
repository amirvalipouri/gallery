import React, { useEffect, useState } from "react";
import axios from '../boot/axios'
import { useSelector } from "react-redux";
export const CartCountContext = React.createContext();

export default function CartCountProvider({ children }) {
  const [count, setCount] = useState(0);
  const isLogged = useSelector((s) => s.isLogged);
  const getCount = () => {

    const url = "/user/cart/count";
    if (isLogged) {
      axios.get(url).then(({ data }) => {
        setCount(data?.data);
      });
    }

  };
  useEffect(getCount, []);
  return (
    <CartCountContext.Provider value={[count, setCount]}>
      {children}
    </CartCountContext.Provider>
  );
}