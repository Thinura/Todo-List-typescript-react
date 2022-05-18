import React from "react";

interface Props {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
}

const Greet: React.FC<Props> = ({ name, messageCount = 0, isLoggedIn }) => {
  return (
    <div>
      <h2>
        {isLoggedIn
          ? `Welcome ${name}! You have ${messageCount} unread messages`
          : "Welcome Guest!"}
      </h2>
    </div>
  );
};

export default Greet;
