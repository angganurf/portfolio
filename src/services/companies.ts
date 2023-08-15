import { IGetCompaniesResponse } from "@interfaces/api/companies";
import { get } from "./http-client";

const API_PATH = "/v1/companies";

export const getCompanie = async (): Promise<IGetCompaniesResponse> => {
  try {
    const res = await get<IGetCompaniesResponse>(`${API_PATH}`);
    return res;
  } catch (err: unknown) {
    throw Error("Failed to get Companies list", err as Error);
  }
};
