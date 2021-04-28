import React from 'react';
import LoginContainer from '../containers/auth/LoginContainer';
import HeaderContainer from '../containers/common/HeaderContainer';

function LoginPage() {
    return (
        <>
        <HeaderContainer/>
        <div style={{
            display:'flex',justifyContent:'center',alignItems:'center'
            ,width:'100%',height:'100vh'
        }}>
            {/* <form style={{display:'flex',flexDirection:'column'}}
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
            </form> */}
            <LoginContainer />
        </div>
        </>
    )
}

export default LoginPage; 
