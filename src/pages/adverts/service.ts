import { client } from "../../api/client";
import { Advert } from "./types";

const advertsUrl = "/api/v1/adverts/tags";


// export const getLatestAdverts = async () => {
//     return await client.get<Advert[]>(advertsUrl);
// }

export const getLatestAdverts = async () => {
    return await client.get<string[]>(advertsUrl);
};