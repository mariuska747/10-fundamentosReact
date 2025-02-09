import AdvertsPage from "./pages/adverts/AdvertsPage";
import NewAdvert from "./pages/adverts/NewAdvert";
import LoginPage from "./pages/auth/LoginPage";
import { useAuth } from "./pages/auth/context";

function App() {
  const { isLogged } = useAuth();

  return isLogged ? <AdvertsPage /> : <NewAdvert />;
}

export default App;
