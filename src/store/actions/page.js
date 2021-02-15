import { FETCH_PAGE } from "../types";
import axios from "configs/axios";

export const fetchPage = (url, page) => (disptach) => {
  return axios
    .get(url, {
      headers: { "Access-Control-Allow-Origin": "*" },
    })
    .then((response) => {
      disptach({
        type: FETCH_PAGE,
        payload: {
          [page]: response.data,
        },
      });
      return response.data;
    });
};
