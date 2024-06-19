import React, { FC, InputHTMLAttributes } from "react";
import "./Input.css";
interface InputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  placeholder?: string;
  value?: string;
}

export const Input: FC<InputProps> = ({
  placeholder = "",
  value,
  name,
  onChange,
}) => {
  return (
    <input
      name={name}
      value={value}
      onChange={onChange}
      className="input"
      placeholder={placeholder}
      type="text"
    />
  );
};
