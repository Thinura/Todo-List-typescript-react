import React from "react";

interface Props {
  status: "loading" | "success" | "error";
}

const Status: React.FC<Props> = ({ status }) => {
  let message;
  if (status === "loading") {
    message = "Loading...";
  } else if (status === "success") {
    message = "Data fetched successfully!";
  } else if (status === "error") {
    message = "Error fetching data.";
  }
  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
};

export default Status;
