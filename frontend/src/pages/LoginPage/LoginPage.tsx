import { ChangeEvent, FormEvent, useState } from "react";
import { Input } from "src/components/input/Input";
import "./LoginPage.css";
import { LOCAL_STORAGE_TOKEN } from "src/components/consts/localStarage";
import { axiosRequest } from "src/components/api";
export interface AuthStateUserData {
  login: string;
  password: string;
}

const LoginPage = () => {
  const [loginData, setLoginData] = useState<AuthStateUserData>({
    login: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const toogleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await axiosRequest.post("/login", { data: loginData });
      if (res.data) {
        localStorage.setItem(LOCAL_STORAGE_TOKEN, res.data.token);
        window.location.href = "/";
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="loginPage">
      <h2>Login</h2>
      <form className="loginPage_form" onSubmit={onSubmit}>
        <div className="loginPage_inputs">
          <Input
            name="login"
            value={loginData.login}
            onChange={handleChange}
            placeholder="login"
          />
          <Input
            name="password"
            value={loginData.password}
            type={showPassword ? "text" : "password"}
            onChange={handleChange}
            placeholder="password"
            icon={true}
            isShowPassword={showPassword}
            ToggleShowPassword={toogleShowPassword}
          />
        </div>
        <button className="button" type="submit">
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
