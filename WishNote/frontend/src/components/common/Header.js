import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { Link } from 'react-router-dom';
const HeaderBlock = styled.div`
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
const Spacer = styled.div`
    height: 4rem;
`;

const UserInfo = styled.div`
    font-weight: 800;
    margin-right: 1rem;
`;

const Header = ({ user, onLogout }) => {
    return (
        <>
            <HeaderBlock>
                <Wrapper>
                    <Link to="/" className="logo">
                        Wish Note
                    </Link>
                    {user ? (
                        <div className="right">
                            <UserInfo>{user.username}</UserInfo>
                            <Button onClick={onLogout}>로그아웃</Button>
                        </div>
                    ) : (
                        <div className="right">
                            <Button to="/login">로그인</Button>
                        </div>
                    )}
                </Wrapper>
            </HeaderBlock>
            <Spacer />
        </>
    );
};

export default Header;
