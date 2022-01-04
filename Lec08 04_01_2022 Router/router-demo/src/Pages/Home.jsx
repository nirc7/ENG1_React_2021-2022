import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const btnGo2User = () => {
    let userObj2Send = {
      userId: 77,
      userName: "avi",
    };

    navigate("user/" + 88, { state: userObj2Send });
  };

  return (
    <div>
      <h2>Home</h2>
      <button onClick={() => navigate("about")}>go 2 About</button> <br />
      <button onClick={btnGo2User}>go 2 user</button>
    </div>
  );
}
