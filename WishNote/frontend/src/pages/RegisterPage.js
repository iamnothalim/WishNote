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
      {/* <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandler}
      >
        <label>username</label>
        <input type="text" value={Username} onChange={onUsernameHandler} />
        <label>password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />
        <label>Confirm password</label>
        <input
          type="password"
          value={ConfirmPassword}
          onChange={onConfirmPasswordHandler}
        />
        <br />
        <button>회원가입</button>
      </form> */}
      <RegisterContainer />
    </div>
  );
}

export default RegisterPage;
