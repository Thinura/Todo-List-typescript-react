import { ComponentType } from "react";
import { Login } from "./Login";
import { ProfileProps } from "./Profile";

interface PrivateProps {
  isLoggedIn: boolean;
  component: ComponentType<ProfileProps>;
}

export const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name={"Thinura"} />;
  } else {
    return <Login />;
  }
};
