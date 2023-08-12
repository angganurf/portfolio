export type RequestConfig = Omit<RequestInit, "method" | "body"> & {
  externalResource?: boolean;
  baseUrl?: string;
};

export type HttpResponse<T> = {
  data: T;
  error: {
    code: number;
    message: string;
  };
  status: boolean;
};

export type RequestWithFile = {
  file?: File;
};
