import React from "react";
import styled from "styled-components";
//import Button from "./Button";

const MonthBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    font-size: 1.2rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-items: center;
  }
`;

const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
`;

const Month = ({ day, category }) => {
  return (
    <>
      <MonthBlock>
        <Wrapper>
          <div className="right">
            <UserInfo>{day}</UserInfo>
            <UserInfo>{category}</UserInfo>
          </div>
        </Wrapper>
      </MonthBlock>
    </>
  );
};

export default Month;
