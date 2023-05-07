import "./Login.css";
import { loginUrl } from "./Spotify";


const Login = () => {
  const queryParams = new URLSearchParams(window.location.hash);

  return (
    <div className="login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify logo"
      />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
};

export default Login;
