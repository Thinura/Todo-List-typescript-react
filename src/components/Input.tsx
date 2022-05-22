import React from "react";

interface Props {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<Props> = ({ handleChange, value }) => {
  return <input type={"text"} value={value} onChange={handleChange} />;
};
