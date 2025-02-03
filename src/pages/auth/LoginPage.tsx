import Button from "../../components/Button";
import { login } from "./service";

interface Props {
    onLogin: () => void;
}


function LoginPage({onLogin}: Props) {
  
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await login({ 
                email: event.target.email.value, 
                password: event.target.password.value 
            });
            console.log(response);
            onLogin();
                
        } catch (error) {
            console.error("Error", error);            
        }

    };

    return (
        <div>
          <h1>Log in to React Pop</h1>
          <form onSubmit={handleSubmit}>
            <label className="block">
              Email:
              <input
                type="text"
                name="email"
              />
            </label>
            <label className="block">
              Password:
              <input
                type="password"
                name="password"
              />
            </label>
            <Button type="submit" $variant="primary">
              Log in
            </Button>
          </form>
        </div>
      );

}

export default LoginPage;