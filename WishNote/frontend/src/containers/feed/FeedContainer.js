// import React, {useState} from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import FeedList from '';
// // import FeedWrite from 'FeedWrite';
// import {feedRemove, feedSave, feedSelectRow} from '../../_reducers/feed_reducer';


// function Container() {

//     //State
//     let [inputData, setInputData] = useState({
//         feedId :'',
//         feedTitle:'',
//         feedContent:''
//     });
//     //함수형 컴포넌트에서 dispatch 사용할수 있게 해줌
//     const dispatch = useDispatch();
//     //onRemove 와 onsave는 action 을 dispatch하는 함수
//     const onRemove = (feedId) => dispatch(feedRemove(feedId));
//     const onSave = (saveData) => dispatch(feedSave(saveData));
//     //reducer state의 selectRowData field를 가져와서 (구독)
//     const {selectRowData} =useSelector(state => state.feedReducer);
//     // user Function
//     const onRowClick = (feedId)=>
//     {
//         dispatch(feedSelectRow(feedId));
//         if(JSON.stringify(selectRowData) !== '{}'){
//             setInputData({
//                 feedId: setInputData.feedId,
//                 feedTitle:setInputData.feedTitle,
//                 feedContent:setInputData.feedContent
//             })
//         }
//     }

//     const changeInput = (e) =>{
//         setInputData({
//             ...inputData,
//             [e.target.name]:e.target.value
//         })
//     }

//     const resetForm = () =>{
//         setInputData({
//             feedId:'',
//             feedTitle: '',
//             feedContent: ''
//         })
//     }
//     const {feeds} = useSelector(state => state.feedReducer);

//     return (
//         <div>
//         <div>
//             <table border="1">
//                 <tbody>
//                     <tr align="center">
//                         <td width="50">번호</td>
//                         <td width="100">제목</td>
//                         <td width="200">내용</td>
//                     </tr>
//                     {
//                         boards.map(row =>
//                         (
//                             <FeedList 
//                                 key={row.feedId}
//                                 feedId={row.feedId}
//                                 feedTitle={row.feedTitle}
//                                 feedContent={row.feedContent}
//                                 onRemove={onRemove}
//                                 onRowClick={onRowClick}
//                             />
//                         ))
//                     }
//                 </tbody>
//             </table>
//         </div>
//         <div>
//             <FeedNew 
//                 onSave={onSave} 
//                 changeInput={changeInput} 
//                 inputData={inputData} 
//                 resetForm={resetForm}
//             />
//         </div>
//     </div>
//     );

// }
// export default FeedContainer;