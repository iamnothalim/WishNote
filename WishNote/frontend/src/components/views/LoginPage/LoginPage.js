import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {loginUser} from '../../../_actions/user_action';
import { withRouter} from 'react-router-dom';
function LoginPage(props) {
    const dispatch = useDispatch();
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');

    const onUsernameHandler = (e) =>{
        setUsername(e.currentTarget.value)
    }
    const onPasswordHandler = (e) =>{
        setPassword(e.currentTarget.value)
    }
    const onSubmitHandler = (e) =>{
        e.preventDefault();

        let body = {
            username:Username,
            password:Password
        }

        dispatch(loginUser(body))
            .then(response=>{
                if(response.payload.loginSuccess){
                    props.history.push('/');
                }else{
                    alert('Error');
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
                <br/>
                <button>
                    Login
                </button>
            </form>
        </div>
    )
}

export default withRouter(LoginPage) 
