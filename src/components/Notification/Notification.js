import React from "react";

const Notification = ({ message }) => {
  return (
    <>
      <p>{message}</p>
    </>
  );
};

export default Notification;

Notification.defaultProps = {
  message: "No feedback given",
};
