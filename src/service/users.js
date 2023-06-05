import api from "../helper/api";

export const getUser = async (params = "") => {
  const res = await api.get(`users?${params}`);
  return res;
};
