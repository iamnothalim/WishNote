import React, { useEffect, useState } from 'react'
import FeedComments from './Sections/FeedCommnets';
import axios from 'axios';
import { Link,withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Moment from 'react-moment'
import { Button, Input } from 'antd';



function DetailFeedPage(props) {
    console.log('디테일 페이지')
   
    const postId = props.match.params._id
    const [Feed, setFeed] = useState([])
    const [FeedCommentLists, setFeedCommentLists] = useState([])
    console.log("postId",postId)
    
    const feedVariable = {
        postId: postId
    }
    
    useEffect(async() => {
        console.log('디테일에유')
        // const res = await axios.get("/api/feed/feed/getFeeds");
        // // const inputdata = res.data.data.feed.map((data) => ({
        // //     // userId: data.userId,
        // //     // title: data.title,
        // //     // description: data.description,
        // //     // category: data.category,
        // //     // views: data.views,
        // //     // image: data.image,
        // // }));

        // setFeeds[inputdata[0]];
        // console.log('data',data)
        // DB
        const res =await axios.get(`/api/feed/feed/${postId}`)
        // console.log("res",res)
        // .then(response => {
        //     // if (response.data) {
        //     //     console.log(response.data.feed)
        //     //     setFeed(response.data.feed)
        //     // } else {
        //     //     alert('Failed to get feed Info')
        //     // }
        //     console.log("res",response)
        // })
        setFeedCommentLists(res.data.data);
        
        // axios.post('/api/feedComment/getFeedComments', feedVariable)
        // .then(response => {
        //     if (response.data.success) {
        //         console.log('response.data.feedComments',response.data.feedComments)
        //         setFeedCommentLists(response.data.feedComments)
        //     } else {
        //         alert('Failed to get feed Info')
        //     }
        // })

    }, [])
    console.log("FeedCommentLists!!",FeedCommentLists);

    const updateFeedComment = (newFeedComment) => {
        setFeedCommentLists(FeedCommentLists.concat(newFeedComment))
    };


    return (
       


        
        <div style={{display:"flex" ,position:"absolute", left:"50%",transform:"translateX(-50%)" ,paddingTop:"30px"}}>
          <div style={{flexDirection:"column", paddingBottom:"0px", paddingTop:"0px" ,display:"grid", gridAutoColumns:"2" ,backgroundColor:"#fafafa"}}>


            <div style={{fontWeight:    "bold", height:"60px",padding:"16px", border:"0.5px solid #000",backgroundColor:"rgba(255,255,255),1)" }}>{FeedCommentLists.userId}</div>
            <div><img src={FeedCommentLists.image}  style={{maxHeight:"614px" ,maxWidth:"614px", minHeight:"614px" }}/></div>
            
                <div style={{border:"0.5px solid #000"}}>
                    <div style={{fontSize:"20px", fontWeight:"bold"}}>{FeedCommentLists.title} </div>
                    <div> #{FeedCommentLists.category}</div>
                    <div>{FeedCommentLists.description}</div>
                    <div style={{fontSize:"10px"}} ><Moment format="YYYY/MM/DD"> {FeedCommentLists.createdAt}</Moment></div>
                </div>
            <div style={{fontSize:"15px",textAlign:"right",textDecoration:"none", color:"#fafafa"}}><Link to={"/feed/upload"}>인증하기</Link> | <Link to={"/feedlistView"}>목록</Link></div>
        

          </div>
        </div>
      
      

    )

    


}
export default withRouter(DetailFeedPage);



// const TableDivStyled = styled.div`
//   width: 650px;
//   margin: auto;
//   table {
//     width: 650px;
//     th,
//     td {
//       border: 1px solid #444444;
//     }
//     text-align: center;
//     th {
//       width: 100px;
//     }
//     td {
//       width: 150px;
//     }
//     .content {
//       height: 400px;
//     }
//   }
// `;
// const ReplyContentStyled = styled.div`
//   width: 660px;
//   margin: auto;
//   form {
//     input {
//       vertical-align: middle;
//       width: 500px;
//       height: 30px;
//     }
//     button {
//       box-shadow: 2px 2px 2px gray;
//       border-radius: 20px;
//       padding: 10px;
//       vertical-align: middle;
//       width: 100px;
//       height: 30px;
//       font-size: 15px;
//       margin: 0 0 0 20px;
//     }
//   }
// `;
// const ReplyListStyled = styled.div``;

// const UserClickStyled = styled.div`
//   div {
//     vertical-align: middle;
//     display: inline-block;
//     margin: 15px 15px 15px 0;
//     button {
//       box-shadow: 2px 2px 2px gray;
//       border-radius: 20px;
//       padding: 10px;
//       vertical-align: middle;
//       width: 100px;
//       height: 30px;
//       font-size: 15px;
//       margin: 0 0 0 20px;
//     }
//   }
// `;

// const ReplyItemStyled = styled.div`
//   width: 650px;
//   div {
//     display: inline-block;
//   }
//   .reUserid {
//     vertical-align: middle;
//     width: 150px;
//     margin: 0 15px 0 0;
//   }
//   .reContent {
//     white-space: normal;
//     width: 300px;
//     margin: 0 15px 0 0;
//   }
//   .reDate {
//     width: 150px;
//   }
// `;

// const DetailFeedPage = ({match, props, history}) =>{


//     const user = useSelector((state)=> state.user);
//     console.log(user);

//     const onDelClick = (e) =>{
//         const _id = match.params._id;
//         axios.delete(`/api/feedComment/del/${_id}`).then(history.push("/feed"));

//     };

//     const [feedLists,setFeedLists] = useState([
        
//     ]);

//     const [feedComment, setFeedComment] = useState([

//     ]);

//     useEffect(
//         async() =>{
//             try {
//                 const feedNumber = match.props._id;
//                 const res = await axios.get(`/api/feed/${feedNumber}`);
//                 const inputdata = await res.data.data.feed.map((data)=>({
//                     _id:data._id,
//                     userId: data.userId,
//                     title: data.title,
//                     description: data.description,
//                     category: data.category,  
//                     views: data.views,
//                     image: data.image,
//                     date : data.createdAt,

//                 }));
//                 setFeedLists(inputdata[0]);

//                 const feedCommentData = await res.data.data.FeedComment.map((data)=>({
//                     writer : data._id,
//                     postId : data.userId,
//                     content : data.content,
//                     commentTime : data.commentTime,
                    
//                 }));
//                 console.log('feedCommentData ==>', feedCommentData);
//                 setFeedComment(feedComment.concat(feedCommentData));
//             }catch(error){
//                 console.log(error);
//             }
//         },
//         []
//     );
//     const [writeFeedCommnet, setwriteFeedCommnet] =  useState("");
//     const writeFeecCommentChange = (e) =>{
//         setwriteFeedCommnet(e.currentTarget.value);
//     };

//     const writeFeecCommentSubmit = (e)=>{
//         e.preventDefault();
//         const _id = match.params._id;
//         if(writeFeedCommnet == ""){
//             return alert('댓글을 입력해주세요');
//         }else{
//             axios.post(`/feed/feedComment/write/${_id}`,{
//                 feedNo: _id,
//                 feedComment: writeFeedCommnet,
//             });
//             setFeedComment("");
//             history.replace(`/feed/${_id}`);
//         }
//     };

//     const updateButton = () =>{
//         const con = window.confirm ('수정시 전 데이터는 저장되지않습니다');
//         if(con == true){
//             history.push(`/feedupdate/${feedLists._id}`);
//         }else{
//             return false;
//         }
//     ;
//     }
//     return (
//         <div>
            
//         </div>

//     )
// }
// export default withRouter(DetailFeedPage);

