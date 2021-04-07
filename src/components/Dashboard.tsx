import React from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../actions/types";

export const Dashboard: React.FC = () => {
  const user = useSelector((state: IRootState) => state.user);

  return (
    <>
      First name: {user.firstName}
      <br />
      Last name: {user.lastName}
      <br />
      Email: {user.email}
      <br />
      Password: {user.password}
    </>
  );
};
