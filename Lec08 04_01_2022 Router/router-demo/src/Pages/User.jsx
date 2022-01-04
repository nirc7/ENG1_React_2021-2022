import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function User() {
  const params = useParams();
  const { state } = useLocation();
  
  let userObj2Send = state;
  
  return (
    <div>
      <h2>User</h2>
      user id = {params != null ? params.userId : -7} <br />
      user name is {userObj2Send != null ? userObj2Send.userName  : "no name"}
      <br />
    </div>
  );
}
