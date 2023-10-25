import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import qs from "qs";
import config from "../config/config.js"; // Import your configuration

interface BaselinkerRequestOptions {
  method: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parameters: Record<string, any>;
}

async function get({ method, parameters }: BaselinkerRequestOptions) {
  return makeRequest("get", method, parameters);
}

async function post({ method, parameters }: BaselinkerRequestOptions) {
  return makeRequest("post", method, parameters);
}

async function put({ method, parameters }: BaselinkerRequestOptions) {
  return makeRequest("put", method, parameters);
}

async function del({ method, parameters }: BaselinkerRequestOptions) {
  return makeRequest("delete", method, parameters);
}

async function makeRequest(
  verb: string,
  method: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parameters: Record<string, any>
) {
  const requestData = {
    method,
    parameters: JSON.stringify(parameters),
  };

  const requestConfig: AxiosRequestConfig = {
    method: verb,
    maxBodyLength: Infinity,
    url: config.baselinker.connectorUrl,
    headers: {
      "X-BLToken": config.baselinker.blToken,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: qs.stringify(requestData),
  };

  return axios
    .request(requestConfig)
    .then((response: AxiosResponse) => response.data)
    .catch((error: AxiosError) => {
      throw error;
    });
}

export { get, post, put, del };
