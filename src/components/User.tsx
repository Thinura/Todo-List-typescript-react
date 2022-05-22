import { useState } from "react";
import { AuthUser } from "../interface/AuthUser.interface";

export const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => {
    setUser({
      name: "thinura",
      email: "thinnaa@ggg.com",
    });
  };
  const handleLogout = () => {
    setUser({
      name: "",
      email: "",
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user.name}</div>
      <div>User email is {user.email}</div>
    </div>
  );
};
