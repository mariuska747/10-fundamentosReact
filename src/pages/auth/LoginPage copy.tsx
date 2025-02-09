import React from "react";
import { useState } from "react";
import Button from "../../components/Button";
import { login } from "./service";
import storage from "../../utils/storage";
import { setAuthorizationHeader } from "../../api/client";
import { useAuth } from "./context";
import { useLocation, useNavigate } from "react-router-dom";

function LoginPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isChecked, setIsChecked] = useState(!!storage.get("auth")); // Recupera estado previo del localStorage
  const { onLogin } = useAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await login({
        email,
        password,
      });
      onLogin();
      console.log("Respuesta del servidor", response);

      const accessToken = storage.get("auth");

      if (!isChecked || !accessToken) {
        storage.remove("auth"); // Elimina el token si el checkbox está desactivado
      } else {
        storage.set("auth", accessToken);
      }
      // console.log("Token recibido:", accessToken);
      navigate(location.state?.from ? location.state.from : "/", {
        replace: true,
      });
    } catch (error) {
      console.error("Error", error);
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const isDisabled = !email || !password;

  return (
    <div>
      <h1 className="m-3">Log in to React Pop</h1>
      <form onSubmit={handleSubmit} className="ml-2 space-y-4">
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          Recuérdame
        </label>
        <Button type="submit" $variant="primary" disabled={isDisabled}>
          Log in
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;
