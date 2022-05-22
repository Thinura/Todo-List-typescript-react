import React from "react";
import { ContainerProps } from "../interface/Container.interface";

const Container: React.FC<ContainerProps> = ({ styles, children }) => {
  return <div style={styles}>{children}</div>;
};

export default Container;
