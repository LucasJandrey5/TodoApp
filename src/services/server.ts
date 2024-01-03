import axios, { Axios } from "axios";
import React from "react";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export enum httpType {
  GET = "get",
  POST = "post",
}

const ServerAPI = async (props: {
  endPoint: string;
  http: httpType;
  data: object;
}) => {
  const url =
    "https://marcosvir.phost0001.servidorwebfacil.com/lucasjandrey" +
    props.endPoint;

  const api = axios.create();

  const response = api
    .patch(url, props.data, {
      httpAgent: props.http,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.data;
    });

  return response;
};

export default ServerAPI;
