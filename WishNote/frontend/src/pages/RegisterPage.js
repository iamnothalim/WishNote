import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { withRouter } from 'react-router';
import {registerUser} from '../_actions/user_action';

function RegisterPage(props) {
    const dispatch = useDispatch();
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');

    const onUsernameHandler = (e) =>{
        setUsername(e.currentTarget.value)
    }
    const onPasswordHandler = (e) =>{
        setPassword(e.currentTarget.value)
    }
    const onConfirmPasswordHandler = (e) =>{
        setConfirmPassword(e.currentTarget.value)
    }
    const onSubmitHandler = (e) =>{
        e.preventDefault();

        if(Password !== ConfirmPassword){
            return alert('비밀번호를 다시한번 확인해주세요.');
        }

        let body = {
            username:Username,
            password:Password
        }

        dispatch(registerUser(body))
            .then(response=>{
                if(response.payload.success){
                    props.history.push('/login')
                }else{
                    alert('failed to sign up')
                }
            })
    }
    return (
        <div style={{
            display:'flex',justifyContent:'center',alignItems:'center'
            ,width:'100%',height:'100vh'
        }}>
            <form style={{display:'flex',flexDirection:'column'}}
                onSubmit={onSubmitHandler}
            >
                <label>username</label>
                <input type="text" value={Username} onChange={onUsernameHandler} />
                <label>password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                <label>Confirm password</label>
                <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
                <br/>
                <button>
                    회원가입
                </button>
            </form>
        </div>
    )
}

export default withRouter(RegisterPage) 
