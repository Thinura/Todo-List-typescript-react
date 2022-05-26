import { ComponentProps, ElementType, ReactNode } from "react";

type TextOwnProps<E extends ElementType> = {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  children: ReactNode;
  as?: E;
};

type TextProps<E extends ElementType> = TextOwnProps<E> &
  Omit<ComponentProps<E>, keyof TextOwnProps<E>>;

export const Text = <E extends ElementType = "div">({
  size,
  color,
  children,
  as,
}: TextProps<E>) => {
  const Component = as || "div";
  return (
    <Component className={`class-with-${size}-${color}`}>{children}</Component>
  );
};
