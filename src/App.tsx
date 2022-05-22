import React from "react";
import "./App.css";
import { Box } from "./components/Box";
import Button from "./components/Button";
import Container from "./components/Container";
import { Counter } from "./components/Counter";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import { Input } from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import { ThemeContextProvider } from "./components/ThemeContext";
import { User } from "./components/User";
import { UserContextProvider } from "./components/UserContext";
import { UserLogin } from "./components/UserLogin";

const App: React.FC = () => {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];

  return (
    <div className="App">
      <Container styles={{ border: "1px solid black", padding: "1rem" }}>
        <Greet name={"Thinura"} messageCount={10} isLoggedIn={false} />
        <Person name={personName} />
        <PersonList names={nameList} />
        <Status status="loading" />
        <Heading>Placeholder text</Heading>
        <Oscar>
          <Heading>Oscar goes to Leonardo Dicpario!</Heading>
        </Oscar>
        <Greet name={"Thinura"} isLoggedIn={true} />
        <Button
          handleClick={(event) => {
            console.log(event);
            console.log("Button clicked");
          }}
        />
        <Input
          value=""
          handleChange={(event) => {
            console.log(event);
            console.log("Input changed");
          }}
        />
        <User />
        <Counter />
        <ThemeContextProvider>
          <Box />
        </ThemeContextProvider>
        <UserContextProvider>
          <UserLogin />
        </UserContextProvider>
      </Container>
    </div>
  );
};

export default App;
