import { AxiosError, AxiosResponse } from "axios";

export enum HTTP_STATUS {
  SUCCESS = 200,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  FORBIDDEN = 403,
  SERVER_ERROR = 500,
  UNAUTHORIZED = 401,
}

export function onResponseError(error: AxiosError): Promise<any> {
  if (error.response?.status === HTTP_STATUS.SERVER_ERROR) {
    return Promise.reject(error.response.data);
  } else if (error.response?.status === HTTP_STATUS.UNAUTHORIZED) {
    return Promise.reject(error.response.data);
  }
  return Promise.reject(error.response);
}

export function onResponse(response: AxiosResponse): Promise<AxiosResponse> {
  if (response.status === HTTP_STATUS.SUCCESS) {
    return Promise.resolve(response);
  }
  return Promise.reject(response);
}
