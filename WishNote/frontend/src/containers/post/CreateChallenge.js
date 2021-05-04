import React from "react";
import CreateChallengeComponent from "../../components/challenge/CreateChallengeComponent";
import {useDispatch} from 'react-redux';
import { withRouter} from 'react-router-dom';

const CreateChallenge = (props) => {
    const dispatch = useDispatch();
    const onSubmitHandler= (values) => {
        let body = {
            challengeName: values.ChallengeName,
            category: values.category,
            name:values.Name,
            id:values.Id,
        };
        // dispatch(registerUser(body)).then((response) => {
        //     if (response.payload.success) {
        //         alert(response.payload.msg);
        //         props.history.push("/login");
        //     } else {
        //         alert(response.payload.msg);
        //     }
        // });
    };
    return (
        <CreateChallengeComponent
            onSubmitHandler={onSubmitHandler}
        />
    );
};

export default withRouter(CreateChallenge);