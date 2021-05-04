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