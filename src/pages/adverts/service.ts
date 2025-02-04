import { client } from "../../api/client";
import { Advert } from "./types";

const advertsUrl = "/api/v1/adverts";

// export const getLatestAdverts = async () => {
//     return await client.get<Advert[]>(advertsUrl);
// }

export const getLatestAdverts = async () => {
  const response = await client.get<Advert[]>(advertsUrl);
  return response.data;
};
