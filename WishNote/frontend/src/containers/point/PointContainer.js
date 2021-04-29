import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChargePoint from '../../components/point/ChargePoint';
import Upload from '../../components/common/Upload';
import { charge } from "../../_actions/user_action";

const PointContainer = (props) => {

    const dispatch = useDispatch();
    // "halim" 을 불러옴 -> id
    const userdata =useSelector(state=>({
        id:state.user.userData.id,
        point:state.user.userData.point
    }))

    const onSubmitHandler = (values)=>{
        let body = parseInt(values.charge);
        console.log(body);
        dispatch(charge(body,userdata));
    }


    return (
        <div>
            <ChargePoint 
                onSubmitHandler={onSubmitHandler}
                userdata={userdata}
            />
            <Upload/>
        </div>
    )
}

export default PointContainer;
