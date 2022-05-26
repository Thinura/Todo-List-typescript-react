import React from "react";
import "./App.css";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { Box } from "./components/Box";
import Button from "./components/Button";
import Container from "./components/Container";
import { Counter } from "./components/Counter";
import { CounterClass } from "./components/CounterClass";
import { DomRef } from "./components/DomRef";
import { List } from "./components/generics/List";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import { CustomButton } from "./components/html/Button";
import { CustomComponent } from "./components/html/CustomComponent";
import { Input } from "./components/Input";
import { MutableRef } from "./components/MutableRef";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import { Text } from "./components/polymorphic/Text";
import { RandomNumber } from "./components/restriction/RandomNumber";
import Status from "./components/Status";
import { Toast } from "./components/templateliterals/Toast";
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
        <DomRef />
        <MutableRef />
        <CounterClass message="The count value is" />
        <Private isLoggedIn={true} component={Profile} />
        <Private isLoggedIn={false} component={Profile} />
        <List
          items={["Batman", "Superman", "Wonder Woman"]}
          onClick={(item) => console.log(item)}
        />
        <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />
        <RandomNumber value={10} isPositive />
        <RandomNumber value={-3} isNegative />
        <RandomNumber value={0} isZero />
        <Toast position="center" />
        <Toast position="right-top" />
        <Toast position="left-top" />
        <Toast position="right-center" />
        <CustomButton variant="primary">Primary</CustomButton>
        <CustomComponent isLoggedIn={true} name={"Thinura"} messageCount={2} />
        <Text as={"h1"} size={"lg"}>
          Heading
        </Text>
        <Text as={"p"} size={"md"}>
          Paragraph
        </Text>
        <Text as={"label"} size={"sm"} color={"secondary"}>
          Label
        </Text>
      </Container>
    </div>
  );
};

export default App;
