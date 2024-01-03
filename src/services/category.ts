import { useContext, useEffect } from "react";
import ServerAPI, { httpType } from "./server";
import { UserContext } from "../Context/UserContext";

export const GetServerCategories = async () => {
  const data = {
    idUser: 0,
  };

  const res = await ServerAPI({
    endPoint: "/Category/getCategories.php",
    http: httpType.GET,
    data: data,
  });

  return res;
};
