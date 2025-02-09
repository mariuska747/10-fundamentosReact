import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../pages/auth/context";
import { logout } from "../../pages/auth/service";
import Button from "../Button";
import "./header.css";

export default function Header() {
  const { isLogged, onLogout } = useAuth();

  const handleLogoutClick = async () => {
    await logout();
    onLogout();
  };

  return (
    <header className="bg-gray-800 p-4 text-white">
      <Link to="/">
        <h1>React Pop</h1>
      </Link>

      <nav className="flex justify-center space-x-4 align-middle">
        <NavLink to="/adverts" end>
          Adverts
        </NavLink>
        <NavLink to="/adverts/new">New Advert</NavLink>
        {isLogged ? (
          <Button $variant="primary" onClick={handleLogoutClick}>
            Logout
          </Button>
        ) : (
          <Button $variant="secondary" as={Link} to="/login">
            Login
          </Button>
        )}
      </nav>
    </header>
  );
}
