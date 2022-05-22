import React from "react";
import { PersonProps } from "../interface/Person.interface";

const Person: React.FC<PersonProps> = ({ name: { first, last } }) => {
  return (
    <h2>
      {first} {last}
    </h2>
  );
};

export default Person;
