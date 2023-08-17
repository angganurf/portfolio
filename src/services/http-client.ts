import { HttpMethod } from "@/enums/http-method";
import {
  HttpResponse,
  RequestConfig,
  RequestWithFile,
} from "@/interfaces/api/http-client";

const API_BASE_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}`;

const getRequestEndpoint = (
  url: string,
  externalResource = false,
  baseUrl?: string
): string => {
  if (baseUrl) {
    return `${baseUrl}${url}`;
  }
  if (!externalResource) {
    return `${API_BASE_URL}${url}`;
  }
  return url;
};

const handleResponse = async <T>(response: Response): Promise<T> => {
  return response.text().then((text: string) => {
    const json: HttpResponse<T> = text && JSON.parse(text);
    const { data, status, error } = json;
    if (!response.ok || !status) {
      const errorMessage = (error && error.message) || response.statusText;
      return Promise.reject({
        message: errorMessage,
        status: response.status,
      });
    }
    return data as T;
  });
};

const getHeader = (configHeader?: HeadersInit): HeadersInit => {
  const defaultHeader: any = configHeader ?? {};
  const headers: Record<string, string> = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Accept-Encoding": "gzip",
    ...Object(defaultHeader),
  };
  return headers;
};

const getRequestOptions = (
  method: HttpMethod,
  config?: RequestConfig
): RequestInit => {
  return {
    mode: "cors",
    credentials: "same-origin",
    ...config,
    method,
    headers: getHeader(config?.headers),
  };
};

export const get = async <R>(
  url: string,
  config?: RequestConfig
): Promise<R> => {
  const requestOptions: RequestInit = getRequestOptions(HttpMethod.GET, {
    next: { tags: ["collection"] },
  });
  const requestUrl = getRequestEndpoint(
    url,
    !!config?.externalResource,
    config?.baseUrl
  );
  const response = await fetch(requestUrl, requestOptions);
  return handleResponse(response);
};

export const post = async <P, R>(
  url: string,
  body: P,
  config?: RequestConfig
): Promise<R> => {
  const requestOptions: RequestInit = {
    ...getRequestOptions(HttpMethod.POST, config),
    body: JSON.stringify(body),
  };
  const requestUrl = getRequestEndpoint(
    url,
    !!config?.externalResource,
    config?.baseUrl
  );
  const response = await fetch(requestUrl, requestOptions);
  return handleResponse(response);
};

export const postFile = async <P, R>(
  url: string,
  body: P & RequestWithFile,
  config?: RequestConfig
): Promise<R> => {
  const formData = new FormData();
  for (const [key, value] of Object.entries(body)) {
    if (value) {
      formData.append(key, value);
    }
  }
  const requestOptions: RequestInit = {
    ...getRequestOptions(HttpMethod.POST, config),
    body: formData,
  };
  if (
    requestOptions.headers &&
    (requestOptions.headers as Record<string, string>)["Content-Type"]
  ) {
    delete (requestOptions.headers as Record<string, string>)["confit-Type"];
  }
  const requestUrl = getRequestEndpoint(
    url,
    !!config?.externalResource,
    config?.baseUrl
  );
  const response = await fetch(requestUrl, requestOptions);
  return handleResponse(response);
};

export const put = async <P, R>(
  url: string,
  body: P,
  config?: RequestConfig
): Promise<R> => {
  const requestOptions: RequestInit = {
    ...getRequestOptions(HttpMethod.PUT, config),
    body: JSON.stringify(body),
  };
  const requestUrl = getRequestEndpoint(
    url,
    !!config?.externalResource,
    config?.baseUrl
  );
  const response = await fetch(requestUrl, requestOptions);
  return handleResponse(response);
};

export const del = async <R>(
  url: string,
  config?: RequestConfig
): Promise<R> => {
  const requestOptions: RequestInit = getRequestOptions(
    HttpMethod.DELETE,
    config
  );
  const requestUrl = getRequestEndpoint(
    url,
    !!config?.externalResource,
    config?.baseUrl
  );
  const response = await fetch(requestUrl, requestOptions);
  return handleResponse(response);
};

export const deleteMethod = async <R>(
  url: string,
  config: RequestConfig
): Promise<R> => {
  const requestOptions: RequestInit = getRequestOptions(
    HttpMethod.DELETE,
    config
  );
  const requestUrl = getRequestEndpoint(
    url,
    !!config?.externalResource,
    config?.baseUrl
  );
  const response = await fetch(requestUrl, requestOptions);
  return handleResponse(response);
};
