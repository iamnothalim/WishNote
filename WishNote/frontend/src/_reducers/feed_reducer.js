
// // action type
// const MODE_REMOVE = 'REMOVE';
// const MODE_SAVE = 'SAVE';
// const MODE_SELECT_ROW = 'SELECT_ROW';

// // action create func
// export const feedSave = (saveData)=>({
//     type:MODE_SAVE,
//     saveData:{
//         feedId : saveData.feedId,
//         feedTitle : saveData.feedTitle,
//         feedContent : saveData.feedContent
//     }
// });
// export const feedRemove = (feedId) =>({
//     type: MODE_REMOVE,
//     feedId : feedId
// });
// export const feedSelectRow = (feedId)=>({
//     type: MODE_SELECT_ROW,
//     feedId : feedId
// });

// //initialState

// const initialState = {
//     feeds:[
//         {
//             feedId:1,
//             feedTitle: '제목1',
//             feedContent : '내용1'
//         },
//         {
//             feedId:2,
//             feedTitle: '제목2',
//             feedContent : '내용2'
//         },
//         {
//             feedId:3,
//             feedTitle: '제목3',
//             feedContent : '내용3'
//         },
//         {
//             feedId:4,
//             feedTitle: '제목4',
//             feedContent : '내용4'
//         },
//         {
//             feedId:5,
//             feedTitle: '제목5',
//             feedContent : '내용5'
//         }
//     ],
//     lastId:5,
//     selectRowData:{}
// }
// export default function feed_reducer (state=initialState, action){
//     switch(action.type) { //클릭한 feedId를 가지지않은 data만 return
//         case MODE_REMOVE:
//             return{
//                 ...state,feeds : state.feeds.filter(row =>
//                     row.feedId !== action.feedId)
//             };
//         case MODE_SAVE:
//             if(action.saveDate.feedId === ''){//feedId가 없다면 신규 데이터 저장
//                 return {
//                     lastId: state.lastId +1,
//                     feeds : state.feeds.concat({
//                         ...action.saveData,
//                         feedId:state.lastId+1
//                     }),
//                     selectRowData:{}
//                 };
//             }else { //feedId 가 있다면 기존 데이터 수정
//                 return { ...state, feeds: state.feeds.map(data => data.feedId === action.saveData.feedId ? {...action.saveData}: data), selectRowData: {} };
//             }
//             case MODE_SELECT_ROW:
//                 return{ //클릭한 boardId를 가진 state만 찾아서 return
//                     ...state,
//                     selectRowData:state.feeds.find(row => row.feedId === action.feedId)

//                 };
//                 default:
//                     return state;

//     }    
// }
