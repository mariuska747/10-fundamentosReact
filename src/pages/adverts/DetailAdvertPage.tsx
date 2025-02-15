import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Page from "../../components/layout/Page";
import { getAdvertDetail } from "./serviceAdvert";
import { deleteAdvert } from "./serviceAdvert";
import { Advert } from "./types";
import styles from "./DetailAdvertPage.module.css";
import Button from "../../components/Button";

function DetailAdvertPage() {
  const { id } = useParams<{ id: string }>();
  const [advert, setAdvert] = useState<Advert | null>(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdvert = async () => {
      if (!id) {
        navigate("/404", { replace: true });
        return;
      }

      try {
        const data = await getAdvertDetail(id);
        if (!data) {
          navigate("/404", { replace: true });
        } else {
          setAdvert(data);
        }
      } catch (error) {
        console.error("Error al obtener el anuncio:", error);
        navigate("/404", { replace: true });
      } finally {
        setLoading(false);
      }
    };

    fetchAdvert();
  }, [id, navigate]);

  if (loading) return <p>Cargando anuncio...</p>;
  if (!advert) return null;

  const handleDelete = async () => {
    if (!id) return;

    try {
      await deleteAdvert(id);
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Error al eliminar el anuncio:", error);
    }
  };

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
        {showConfirm ? (
          <div>
            <p>¿Seguro que quieres eliminar este anuncio?</p>
            <Button $variant="primary" onClick={handleDelete}>Sí, eliminar</Button>
            <Button $variant="primary"onClick={() => setShowConfirm(false)}>Cancelar</Button>
          </div>
        ) : (
          <Button $variant="primary" onClick={() => setShowConfirm(true)}>Eliminar Anuncio</Button>
        )}
      </div>
    </Page>
  );
}

export default DetailAdvertPage;
