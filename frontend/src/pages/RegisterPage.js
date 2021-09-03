import React from "react";
import RegisterContainer from "../containers/auth/RegisterContainer";

function RegisterPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <RegisterContainer />
    </div>
  );
}

export default RegisterPage;
