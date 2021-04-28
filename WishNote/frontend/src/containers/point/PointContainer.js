import React from 'react';
import { useDispatch } from 'react-redux';
import ChargePoint from '../../components/point/ChargePoint';

const PointContainer = (props) => {

    const dispatch = useDispatch();
    const onSubmitHandler = (values)=>{
        let body = parseInt(values.charge);
        console.log(body);
    }

    // const userdata =dispatch(auth()).then((response) => {
    //         console.log(response);
    //         userdata = response;
    //     });
    
    return (
        <div>
            <ChargePoint onSubmitHandler={onSubmitHandler}/>
        </div>
    )
}

export default PointContainer;
