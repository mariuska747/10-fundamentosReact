import { client } from "../../api/client";
import { Advert } from "./types";

const advertsUrl = "/api/v1/adverts";

// Obtener anuncios
export const getLatestAdverts = async () => {
  const response = await client.get<Advert[]>(advertsUrl);
  return response.data;
};

// Crear un nuevo anuncio
export const createAdvert = async (advertData: {
  name: string;
  sale: boolean;
  price: number;
  tags: string[];
  photo?: File;
}) => {
  const formData = new FormData();
  formData.append("name", advertData.name);
  formData.append("sale", String(advertData.sale));
  formData.append("price", String(advertData.price));
  advertData.tags.forEach((tag) => formData.append("tags", tag));

  if (advertData.photo) {
    formData.append("photo", advertData.photo);
  }

  const response = await client.post(advertsUrl, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return response.data;
};

export const getAdvertDetail = async (id: string) => {
  const response = await client.get<Advert>(`/api/v1/adverts/${id}`);
  return response.data;
};

export const deleteAdvert = async (id: string) => {
  try {
    await client.delete(`/api/v1/adverts/${id}`);
  } catch (error) {
    throw new Error("Error al eliminar el anuncio");
  }
};
