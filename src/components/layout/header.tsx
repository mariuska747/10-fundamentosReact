import { logout } from "../../pages/auth/service";
import Button from "../Button";


export interface HeaderProps {
    onLogout: () => void;
    isLogged: boolean;
  }

export default function Header({ onLogout, isLogged }: HeaderProps) {

    const handleLogoutClick = async () => {
        await logout();
        onLogout();
      };


    return (
        <header className="bg-gray-800 text-white text-center p-4">
            <div></div>
            <h1>React Pop</h1>
            <nav>
                {isLogged ? (<Button $variant="primary" onClick={handleLogoutClick}>
                Logout
                </Button>) :
                (<Button $variant="secondary">
                Login
                </Button>)}
            </nav>
        </header>
    );
}