import { useState } from "react";
import axios from '../boot/axios'

export default function useGetCats() {
  const [cat, setCat] = useState([]);
  const getCat = () => {
    const url = "/user/category";
    axios.get(url).then((res) => {
      const data = res?.data?.data?.map((e) => ({ value : e?._id , label : e.title }));
      setCat(data)
    //   setProducts(data);
    });
  };
  return [cat, getCat];
}