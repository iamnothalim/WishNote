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

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/common/Header";
import axios from "axios";
import { withRouter } from "react-router";
import { logoutUser } from "../../_actions/user_action";

const HeaderContainer = (props) => {
  // const  user  = useSelector((state) => (
  //     state.user
  // ));
  // const [user, setUser] = useState("")
  // const dispatch = useDispatch();
  // useEffect(() => {
  //     dispatch(auth()).then((response) => {
  //         setUser(response.payload.username);
  //     });
  // }, [dispatch]);
  const user = useSelector((state) => ({
    user: state.user.userData.id,
  }));

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logoutUser()).then((response) => {
      if (!response.payload.loginSuccess) {
        props.history.push("/login");
      } else {
        alert("로그아웃 하는데 실패 했습니다.");
      }
    });
  };
  return <Header user={user} onLogout={onLogout} />;
};

export default withRouter(HeaderContainer);
