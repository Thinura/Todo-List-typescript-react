import React from "react";

interface Props {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
}

const Button: React.FC<Props> = ({ handleClick }) => {
  return <button onClick={(event) => handleClick(event, 1)}>Click</button>;
};

export default Button;
