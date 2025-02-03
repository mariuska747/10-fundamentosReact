// import AdvertsPage from "./pages/adverts/advertsPage";
import { useState } from "react";
import AdvertsPage from "./pages/adverts/AdvertsPage";
import LoginPage from "./pages/auth/LoginPage";



function App() {
  const [isLogged, setisLogged] = useState(false);
  
  const handleLogin = () => {
    setisLogged(true);
  }

  return isLogged ? <AdvertsPage /> : <LoginPage onLogin={handleLogin} />;

}

export default App;
