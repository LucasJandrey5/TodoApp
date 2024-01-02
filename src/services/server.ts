import axios, { Axios } from "axios";
import React from "react";

export enum httpType {
  GET,
  POST,
}

const ServerAPI = async (props: {
  endPoint: string;
  httpType: httpType;
  data: object;
}) => {
  const url =
    "https://marcosvir.phost0001.servidorwebfacil.com/lucasjandrey" +
    props.endPoint;

  const api = axios.create();

  // api.interceptors.request.use(
  //   (request) => {
  //     console.log("Starting Request: ", request.data);
  //     return request;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );

  // api.interceptors.response.use(
  //   (response) => {
  //     console.log("Response Body:", response.data);
  //     return response;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );

  const response = api
    .post(url, props.data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.data;
    });

  return response;
};

export default ServerAPI;
