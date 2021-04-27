import React, { useState }  from 'react';
import {useDispatch} from 'react-redux';
import {registerUser} from '../../_actions/user_action';
import { withRouter} from 'react-router-dom';
import RegisterComponent from '../../components/auth/RegisterComponent';


const RegisterContainer = (props) => {
    const dispatch = useDispatch();
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    const onUsernameHandler = (e) => {
        setUsername(e.currentTarget.value);
    };
    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value);
    };
    const onConfirmPasswordHandler = (e) => {
        setConfirmPassword(e.currentTarget.value);
    };
    const onSubmitHandler = (e) => {
        e.preventDefault();

        // if (Password !== ConfirmPassword) {
        //     return alert("비밀번호를 다시한번 확인해주세요.");
        // }

        let body = {
            username: Username,
            password: Password,
        };

        dispatch(registerUser(body)).then((response) => {
            if (response.payload.success) {
                props.history.push("/login");
            } else {
                alert("failed to sign up");
            }
        });
    };
    return (
        <RegisterComponent 
            onUsernameHandler={onUsernameHandler}
            onPasswordHandler={onPasswordHandler}
            Username={Username}
            Password={Password}
            onSubmitHandler={onSubmitHandler}
        />
    )
};

export default withRouter(RegisterContainer);

