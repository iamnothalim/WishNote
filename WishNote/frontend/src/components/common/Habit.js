import React from "react";
import { Radar, ChartCard } from 'ant-design-pro/lib/Charts';

// const radarOriginData = [
//   {
//     name: 'mystate',
//     hobby: 10,
//     relationship: 8,
//     performance: 4,
//     asset: 5,
//     health: 7,
//   }
// ];
// const radarData = [];
// const radarTitleMap = {
//   hobby: 'hobby',
//   relationship: 'relationship',
//   performance: 'performance',
//   asset: 'asset',
//   health: 'health',
// };
// radarOriginData.forEach(item => {
//   Object.keys(item).forEach(key => {
//     if (key !== 'name') {
//       radarData.push({
//         name: item.name,
//         label: radarTitleMap[key],
//         value: item[key],
//       });
//     }
//   });
// });

const Habit = ({data}) => {
  console.log('여긴 안쪽',data)
    // const radarTitleMap = {
    //   hobby: 'hobby',
    //   relationship: 'relationship',
    //   performance: 'performance',
    //   asset: 'asset',
    //   health: 'health',
    // };
    
    // const asd = await axios.get('/api/auth/check');
    // const radarData = [];
    // const radarOriginData = asd.data.habbit;
    // await radarOriginData.forEach(item => {
      
    //     Object.keys(item).forEach(key => {
    //       if (key !== 'name') {
    //         radarData.push({
    //           name: item.name,
    //           label: radarTitleMap[key],
    //           value: item[key],
    //         });
    //       }
    //     });
    //   })
      //console.log('이거',radarData)
  //const [fuckingdata, setFuckingdata] = useState(radarData);

  return (
    <>
    <ChartCard title="제발성공해라">
      <Radar height={300} data={data} />
    </ChartCard>
    </>
  );
};

export default Habit;
