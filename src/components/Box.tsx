import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
export const Box = () => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <div
        style={{
          backgroundColor: theme.primary.main,
          color: theme.primary.text,
        }}>
        Primary Theme context
      </div>
      <div
        style={{
          backgroundColor: theme.secondary.main,
          color: theme.secondary.text,
        }}>
        Secondary Theme context
      </div>
    </>
  );
};
