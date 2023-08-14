import { get } from "./http-client";
import { IGetWorksResponse } from "@interfaces/api/works";

const API_PATH = "/v1/works";

export const getWorks = async (): Promise<IGetWorksResponse> => {
  try {
    const res = await get<IGetWorksResponse>(`${API_PATH}`);
    return res;
  } catch (err: unknown) {
    throw Error("Failed to get Page list", err as Error);
  }
};
