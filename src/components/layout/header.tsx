import { useAuth } from "../../pages/auth/context";
import { logout } from "../../pages/auth/service";
import Button from "../Button";

export default function Header() {
  const { isLogged, onLogout } = useAuth();

  const handleLogoutClick = async () => {
    await logout();
    onLogout();
  };

  return (
    <header className="bg-gray-800 p-4 text-center text-white">
      <div></div>
      <h1>React Pop</h1>
      <nav>
        {isLogged ? (
          <Button $variant="primary" onClick={handleLogoutClick}>
            Logout
          </Button>
        ) : (
          <Button $variant="secondary">Login</Button>
        )}
      </nav>
    </header>
  );
}
