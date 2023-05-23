import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { wpBaseUrl } from "../../config/index";

export const useApi = (config: AxiosRequestConfig): Promise<AxiosResponse> =>
  axios({
    method: config.method || "get",
    baseURL: wpBaseUrl,
    url: config.url,
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      // TODO: 認証が必要になったらコメント外す
      // Authorization: `Bearer ${localStorage.idToken}`
    },
    params: config.params,
  }).catch((err: any) => {
    throw err;
  });
