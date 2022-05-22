import React from "react";
import { PersonListProps } from "../interface/PersonList.interface";

const PersonList: React.FC<PersonListProps> = ({ names }) => {
  return (
    <div>
      {names.map((name) => (
        <h2 key={name.first}>
          {name.first} {name.last}
        </h2>
      ))}
    </div>
  );
};

export default PersonList;
