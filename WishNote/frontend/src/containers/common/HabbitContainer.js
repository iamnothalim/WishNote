import React from "react";
import { useSelector } from "react-redux";
import Habbit from "../../components/common/Habit";

const HabbitContainer = (props) => {

    const data = useSelector((state) => ({
        data: state.user.userData.habbit,
    }))
    console.log('이게 바깥',data.data);
    // const radarTitleMap = {
    //     hobby: 'hobby',
    //     relationship: 'relationship',
    //     performance: 'performance',
    //     asset: 'asset',
    //     health: 'health',
    // };
    //const radarData =[];
        
        // const asd =await axios.get('/api/auth/check');
        // const radarOriginData = asd.data.habbit;

        // radarOriginData.forEach(item => {
        //     Object.keys(item).forEach(key => {
        //         if (key !== 'name') {
        //             radarData.push({
        //                 name: item.name,
        //                 label: radarTitleMap[key],
        //                 value: item[key],
        //             });
        //         }
        //     });
        // })
    //console.log('여긴 바깥',radarData)
    return (
        <div>
            <Habbit data={data.data} />;
        </div>
    )
    
};

export default HabbitContainer;
