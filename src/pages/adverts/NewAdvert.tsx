import { useState } from "react";
import { createAdvert } from "./serviceAdvert";
import styles from "./NewAdvert.module.css";
import { useAuth } from "../auth/context";
import storage from "../../utils/storage";
import Page from "../../components/layout/Page";

const NewAdvert = () => {
  const [name, setName] = useState("");
  const [sale, setSale] = useState(false);
  const [price, setPrice] = useState<string | number>(""); // Para evitar el warning de input number
  const [tags, setTags] = useState<string[]>([]);
  const [photo, setPhoto] = useState<File | undefined>(undefined);
  const { isLogged } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const accessToken = storage.get("auth");
      if (isLogged && accessToken) {
        await createAdvert({
          name,
          sale,
          price: price === "" ? 0 : Number(price),
          tags,
          photo,
        });
        alert("Anuncio creado con éxito");
        console.log("Usuario logueado");
      }
    } catch (error) {
      console.error("Error al crear el anuncio:", error);
      alert("Hubo un error");
    }
  };

  return (
    <Page title="Nuevo anuncio">
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>Nombre:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label className="checkbox-label">¿Es en venta? Marca la casilla</label>
        <input
          type="checkbox"
          checked={sale}
          onChange={(e) => setSale(e.target.checked)}
        />

        <label>Precio:</label>
        <input
          type="number"
          value={price}
          onChange={(e) =>
            setPrice(e.target.value === "" ? "" : Number(e.target.value))
          }
          required
        />

        <label>Tags:</label>
        <select
          multiple
          onChange={(e) =>
            setTags(Array.from(e.target.selectedOptions, (opt) => opt.value))
          }
          required
        >
          <option value="lifestyle">Lifestyle</option>
          <option value="mobile">Mobile</option>
          <option value="motor">Motor</option>
          <option value="work">Work</option>
        </select>

        <label>Foto:</label>
        <input type="file" onChange={(e) => setPhoto(e.target.files?.[0])} />

        <button type="submit">Crear Anuncio</button>
      </form>
    </Page>
  );
};

export default NewAdvert;
