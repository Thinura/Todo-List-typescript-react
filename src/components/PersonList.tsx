import React from "react";

interface Props {
  names: {
    first: string;
    last: string;
  }[];
}

const PersonList: React.FC<Props> = ({ names }) => {
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
