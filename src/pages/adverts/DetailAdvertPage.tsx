import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Page from "../../components/layout/Page";
import { getAdvertDetail } from "./serviceAdvert"; // Asegúrate de tener esta función
import { Advert } from "./types"; // Importa la interfaz de Advert
import styles from "./DetailAdvertPage.module.css"; // Si usas estilos

function DetailAdvertPage() {
  const { id } = useParams<{ id: string }>();
  const [advert, setAdvert] = useState<Advert | null>(null);

  useEffect(() => {
    const fetchAdvert = async () => {
      try {
        if (id) {
          const data = await getAdvertDetail(id);
          setAdvert(data);
        }
      } catch (error) {
        console.error("Error al obtener el anuncio:", error);
      }
    };
    fetchAdvert();
  }, [id]);

  if (!advert) return <p>Cargando anuncio...</p>;

  return (
    <Page title="Detalle del anuncio">
      <div className={styles.detailContainer}>
        <h1>{advert.name}</h1>
        <img
          src={advert.photo || "/images/default-image.jpg"}
          alt={advert.name}
          className={styles.advertImage}
        />
        <p>
          <strong>Precio:</strong> {advert.price} €
        </p>
        <p>
          <strong>Tipo:</strong> {advert.sale ? "Venta" : "Compra"}
        </p>
        <p>
          <strong>Tags:</strong> {advert.tags.join(", ")}
        </p>
        <p>
          <strong>Publicado el:</strong>{" "}
          {new Date(advert.createdAt).toLocaleDateString()}
        </p>
      </div>
    </Page>
  );
}

export default DetailAdvertPage;
