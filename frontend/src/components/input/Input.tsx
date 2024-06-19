import { FC, InputHTMLAttributes } from "react";
import "./Input.css";
import { ReactComponent as EyeSlashIcon } from "../../assets/closeEye.svg";
import { ReactComponent as EyeIcon } from "../../assets/eye.svg";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  placeholder?: string;
  value?: string;
  icon?: boolean;
  isShowPassword?: boolean;
  ToggleShowPassword?: () => void;
}

export const Input: FC<InputProps> = ({
  placeholder = "",
  value,
  name,
  onChange,
  type,
  icon = false,
  isShowPassword = false,
  ToggleShowPassword,
}) => {
  return (
    <div className="inputDiv">
      <input
        name={name}
        value={value}
        onChange={onChange}
        className="input"
        placeholder={placeholder}
        type={type}
      />
      {icon && !isShowPassword ? (
        <EyeIcon onClick={ToggleShowPassword} />
      ) : isShowPassword ? (
        <EyeSlashIcon onClick={ToggleShowPassword} />
      ) : null}
    </div>
  );
};
