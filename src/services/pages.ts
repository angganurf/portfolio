import { IGetPagesResponse } from "@/interfaces/api/pages";
import { get } from "./http-client";

const API_PATH = "/v1/pages";

export const getPages = async (): Promise<IGetPagesResponse> => {
  try {
    const res = await get<IGetPagesResponse>(`${API_PATH}`);
    return res;
  } catch (err: unknown) {
    throw Error("Failed to get Page list", err as Error);
  }
};
