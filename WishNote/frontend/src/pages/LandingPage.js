import React, { useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import { useSelector } from 'react-redux';

function LandingPage(props) {
    const testData = useSelector(state=>state.user);
    console.log('요게 테스트 데이타',testData);
    
    //console.log(testData.loginSuccess.loginSuccess)
    const onClickHandler =()=>{
        axios.get('/api/auth/logout')
            .then(response=>{
                if(response.data.success){
                    props.history.push('/login');
                }else{
                    alert('로그아웃 하는데 실패 했습니다.')
                }
            })
    }

    return (
        <div style={{
            display:'flex',justifyContent:'center',alignItems:'center'
            ,width:'100%',height:'100vh'
        }}>
            <h2>시작 페이지</h2>
                <button onClick={onClickHandler}>
                    로그아웃
                </button>
            
            
        </div>
    )
}

export default withRouter(LandingPage) 
