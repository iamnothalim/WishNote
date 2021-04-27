// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import Header from '../../components/common/Header';
// import { logout } from '../../modules/user';
// const HeaderContainer = () => {
//     const { user } = useSelector(({ user }) => ({
//         user: user.user,
//     }));
//     const dispatch = useDispatch();
//     const onLogout = () => {
//         dispatch(logout());
//     };
//     return <Header user={user} onLogout={onLogout} />;
// };

// export default HeaderContainer;

import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/common/Header';
import axios from "axios";
import { auth } from "../../_actions/user_action";
import { withRouter } from "react-router";


const HeaderContainer = (props) => {
    // const  user  = useSelector((state) => (
    //     state.user
    // ));
    const [user, setUser] = useState("")
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(auth()).then((response) => {
            setUser(response.payload.username); 
        });
    }, [dispatch]);
    console.log("요게 테스트 데이타", user);
    const onLogout = () => {
        axios.get("/api/auth/logout").then((response) => {
            if (response.data.success) {
                props.history.push("/login");
            } else {
                alert("로그아웃 하는데 실패 했습니다.");
            }
        });
    };
    return (
        <Header user={user} onLogout={onLogout} />
    );
};

export default withRouter(HeaderContainer);