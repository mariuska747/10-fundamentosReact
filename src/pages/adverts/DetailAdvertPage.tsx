import { useParams } from "react-router-dom";
import Layout from "../../components/layout/layout";

function DetailAdvertPage() {
    const params = useParams<{ id: string }>();
    console.log(params);
  return (
    <Layout title="Detalle del anuncio">
      <div>
        <h1>DetailAdvertPage</h1>
        <p>{`ID: ${params.id} `}</p>
      </div>
    </Layout>
  );
}

export default DetailAdvertPage;
