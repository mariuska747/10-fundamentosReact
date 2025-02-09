import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import AdvertsPage from "./pages/adverts/AdvertsPage";
import NewAdvert from "./pages/adverts/NewAdvert";
import LoginPage from "./pages/auth/LoginPage";
import DetailAdvertPage from "./pages/adverts/DetailAdvertPage";
import RequireAuth from "./pages/auth/RequireAuth1";


function App() {
  // const { isLogged } = useAuth();
  // return isLogged ? <AdvertsPage/>: < LoginPage />;

  return (
    <Routes>
      <Route
        path="adverts"
        element={
          <div>
            <h2>Parent route</h2>
              <Outlet />
          </div>
        }
      >
        <Route index element={<AdvertsPage />} />
        <Route path="new" element={<RequireAuth><NewAdvert /></RequireAuth>} />
        <Route path=":id" element={<DetailAdvertPage />} />
      </Route>

      <Route path="/" element={<Navigate to="/adverts" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/404"
        element={<h1 className="justify-center">404 Not Found</h1>}
      />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
}

export default App;
