import { useState } from "react";
import { createAdvert } from "./serviceAdvert"

const NewAdvert = () => {
  const [name, setName] = useState("");
  const [sale, setSale] = useState(false);
  const [price, setPrice] = useState(0);
  const [tags, setTags] = useState<string[]>([]);
  const [photo, setPhoto] = useState<File | undefined>(undefined);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await createAdvert({ name, sale, price, tags, photo });
      alert("Anuncio creado con éxito");
    } catch (error) {
      console.error("Error al crear el anuncio:", error);
      alert("Hubo un error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>¿Es en venta?</label>
      <input type="checkbox" checked={sale} onChange={(e) => setSale(e.target.checked)} />

      <label>Precio:</label>
      <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} />

      <label>Tags:</label>
      <select multiple onChange={(e) => setTags(Array.from(e.target.selectedOptions, (opt) => opt.value))}>
        <option value="lifestyle">Lifestyle</option>
        <option value="mobile">Mobile</option>
        <option value="motor">Motor</option>
        <option value="work">Work</option>
      </select>

      <label>Foto:</label>
      <input type="file" onChange={(e) => setPhoto(e.target.files?.[0])} />

      <button type="submit">Crear Anuncio</button>
    </form>
  );
};

export default NewAdvert;

