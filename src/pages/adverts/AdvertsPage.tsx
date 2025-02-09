import { useEffect, useState } from "react";
import styles from "./AdvertsPage.module.css";
import { getLatestAdverts } from "./serviceAdvert";
import { Advert } from "./types";
import Layout from "../../components/layout/layout";
import { Link } from "react-router-dom";

/*
const adverts = [
  {
    id: "94d0ca7f-3a2c-4df8-8502-7c7273a58e67",
    createdAt: "2025-01-30T14:23:51.000Z",
    name: "queso de burgos",
    sale: true,
    price: 30,
    tags: ["lifestyle"],
    photo: "http://localhost:3001/public/1738247031129-909187199.jpeg",
  },
  {
    id: "57d7b36e-61eb-44b7-9432-c95f35a386b1",
    createdAt: "2025-02-02T15:33:16.000Z",
    name: "yamaha fazer",
    sale: false,
    price: 4000,
    tags: [
      "lifestyle",
      "motor"
    ],
    photo: null
  },
];*/

function AdvertsPage() {
  const [adverts, setAdverts] = useState<Advert[]>([]);
  const [search, setSearch] = useState(""); // Para filtrar por nombre
  const [saleType, setSaleType] = useState("todos"); // Para venta/compra/todos

  useEffect(() => {
    getLatestAdverts().then((response) => {
      // console.log(response);
      setAdverts(response);
    });
  }, []);

  // 🔹 Filtramos antes de renderizar
  const filteredAdverts = adverts.filter(
    (advert) =>
      advert.name.toLowerCase().includes(search.toLowerCase()) &&
      (saleType === "todos" ||
        (advert.sale ? "sale" : "purchase") === saleType),
  );

  return (
    <Layout title="Compra lo que sea">
      <div className="my-10 text-center">
        {/* Inputs de búsqueda y filtrado por tipo de anuncio */}
        <div>
          <input
            type="text"
            placeholder="Buscar por nombre"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={saleType}
            onChange={(e) => setSaleType(e.target.value)}
          >
            <option value="todos">Todos</option>
            <option value="purchase">Compra</option>
            <option value="sale">Venta</option>
          </select>
        </div>

        {/* Mostramos los anuncios filtrados o un mensaje de que no hay anuncios disponibles */}

        <div>
          <ul className={styles.advert_ul}>
            {filteredAdverts.length > 0 ? (
              filteredAdverts.map((advert) => (
                <li key={advert.id} className={styles.advert_li}>
                  <img src={advert.photo || ""} alt="Foto" width="50px" />
                  <Link to={`/adverts/${advert.id}`}>
                    <h3 className="to-cyan-700">{advert.name}</h3>
                  </Link>
                  <p>Precio: {advert.price} €</p>
                  <p>C/V: {advert.sale ? "Venta" : "Compra"}</p>
                  <p>Tags: {advert.tags.join(", ")}</p>
                </li>
              ))
            ) : (
              <p>No hay anuncios disponibles</p>
            )}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

/*
function AdvertsPage() {
    const [adverts, setAdverts] = useState<string[]>([]);

    useEffect(() => {
        console.log("AdvertsPage useEffect");
        getLatestAdverts().then((response) => { 
            console.log(response); 
            setAdverts(response);    
        });
    },[]);

    
    return (
        <div>
            <h1>Listado de tags</h1>
            {adverts.length > 0 ? (
                adverts.map((tag, index) => (
                    <p key={index}>Tag: {tag}</p>
                ))
            ) : (
                <p>⚠ No hay datos disponibles ⚠</p>
            )}
        </div>
    )
}
    */
export default AdvertsPage;
