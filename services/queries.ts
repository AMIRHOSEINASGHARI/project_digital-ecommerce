// configs
import api from "@/configs/api";
// types
import { FetchCart } from "@/types";

const fetchCart = (): Promise<FetchCart> => {
  return api.get(`/api/cart/main`).then((res) => res.data);
};

const fetchUserAddress = (id: string): Promise<FetchCart> => {
  return api.get(`/api/user/address/${id}`).then((res) => res.data);
};

export { fetchCart, fetchUserAddress };
