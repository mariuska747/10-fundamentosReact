import { useParams } from "react-router-dom";
import Page from "../../components/layout/Page";

function DetailAdvertPage() {
  const params = useParams<{ id: string }>();
  console.log(params);
  return (
    <Page title="Detalle del anuncio">
      <div>
        <h1>DetailAdvertPage</h1>
        <p>{`ID: ${params.id} `}</p>
      </div>
    </Page>
  );
}

export default DetailAdvertPage;
