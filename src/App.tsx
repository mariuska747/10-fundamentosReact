// import AdvertsPage from "./pages/adverts/advertsPage";
import { useState } from "react";
import AdvertsPage from "./pages/adverts/AdvertsPage";
import LoginPage from "./pages/auth/LoginPage";

interface Props {
  defaultIsLogged: boolean;
}

function App({ defaultIsLogged }: Props) {
  const [isLogged, setisLogged] = useState(defaultIsLogged);

  const handleLogin = () => {
    setisLogged(true);
  };
  const handleLogout = () => {
    setisLogged(false);
  };

  return isLogged ? (
    <AdvertsPage onLogout={handleLogout} isLogged={isLogged} />
  ) : (
    <LoginPage onLogin={handleLogin} />
  );
}

export default App;
