import { useEffect, useState } from "react";
import axiosClient from "../config/axiosConfig";

const useGet = (url) => {
  console.log('ENTRA a customHook useGET');
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      console.log('TRAE getData de USEGET');
      const response = await axiosClient.get(url);
      console.log('ACTUALIZA DATA en useGET');
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   console.log('getData USEEFFECT useGET');
  //   getData();
  // },[]);
  
  return [data, setData, getData];
}
 
export default useGet;