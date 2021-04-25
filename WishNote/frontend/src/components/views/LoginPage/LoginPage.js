import React, { useState } from 'react'

function LoginPage() {

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

export default LoginPage
