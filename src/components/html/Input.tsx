import { ComponentProps } from "react";

type InputProps = ComponentProps<"input">;

export const CustomInput = (props: InputProps) => {
  return <input {...props} />;
};
