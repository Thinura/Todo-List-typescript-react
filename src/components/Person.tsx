import React from "react";

interface Props {
  name: {
    first: string;
    last: string;
  };
}

const Person: React.FC<Props> = ({ name: { first, last } }) => {
  return (
    <h2>
      {first} {last}
    </h2>
  );
};

export default Person;
