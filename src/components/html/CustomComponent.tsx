import { ComponentProps } from "react";
import Greet from "../Greet";

export const CustomComponent = (props: ComponentProps<typeof Greet>) => {
  return <div>{props.isLoggedIn && "TRUE"}</div>;
};
