import { useEffect, useState } from "react";
import styles from "./AdvertsPage.module.css";
import { getLatestAdverts } from "./service";
import { Advert } from "./types";
import Layout from "../../components/layout/layout";

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
  const [search, setSearch] = useState("");  // Para filtrar por nombre
  const [saleType, setSaleType] = useState("todos");  // Para venta/compra/todos
  
  const filteredAdverts = adverts.filter(advert => 
    advert.name.toLowerCase().includes(search.toLowerCase()) && 
    (saleType === "todos" || advert.tags === saleType)
  );

  useEffect(() => {
    console.log("AdvertsPage useEffect");
    getLatestAdverts().then((response) => {
      console.log(response);
      setAdverts(response);
    });
  }, []);

  return (
    <Layout title="Compra lo que sea">
      <div>
        <h1 className="my-10 text-center text-blue-500">Adverts</h1>
        <ul>
          {adverts.map((advert) => (
            <li key={advert.id} className={styles.advert}>
              <img
                src={advert.photo ? advert.photo : ""}
                alt={advert.name}
                width="50px"
              />
              <h3>{advert.name}</h3>
              <p>Precio: {advert.price} €</p>
              <p>Compra/Venta: {advert.sale ? "Sale" : "Purchase"}</p>
              <p>Tags {advert.tags.join(", ")}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={saleType} onChange={(e) => setSaleType(e.target.value)}>
          <option value="todos">Todos</option>
          <option value="purchase">Purchase</option>
          <option value="sale">Sale</option>
        </select>
        <div>
          {filteredAdverts.map(advert => (
            <p key={advert.id}>{advert.name} - {advert.saleType}</p>
          ))}
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
