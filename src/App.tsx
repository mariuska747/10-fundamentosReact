import AdvertsPage from "./pages/adverts/AdvertsPage";
import LoginPage from "./pages/auth/LoginPage";
import { useAuth } from "./pages/auth/context";




function App() {

  const {isLogged,onLogin,onLogout} = useAuth();


  return authValue?.isLogged ? (
    <AdvertsPage onLogout={onLogout} isLogged={isLogged} />
  ) : (
    <LoginPage onLogin={onLogin} />
  );
}

export default App;
