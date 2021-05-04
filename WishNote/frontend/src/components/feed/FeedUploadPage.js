// import React from 'react';

// function FeedWrite ({ onSave, changeInput, inputData, resetFrom}){
//     const saveBtnClick = (e)=>{
//         e.preventDefault ();
//         onSave(inputData);
//         resetFrom();
//     }
//     return (
//         <div>
//             <form onSubmit={saveBtnClick}>
//                 <div>
//                     제목 : <input type="text" name="feedTitle" onChange={changeInput} value={inputData.feedTitle} />
//                 </div>
//                 <div>
//                     내용 : <input type="text" name="feedContent"  onChange={changeInput} value={inputData.feedContent} />
//                 </div>
//                 <input type="hidden" name="feedId" onChange={changeInput} value={inputData.feedId} />
//                 <button type="submit" >신규 게시글 저장</button>
//             </form>
//         </div>
//     )

// };

// export default FeedWrite;

import React,{useState} from 'react'
import { Typography, Button, Form, message, Input} from 'antd';
import Dropzone from 'react-dropzone';
import {PlusOutlined ,Plus} from '@ant-design/icons';
import Axios from 'axios';
import {useSelector} from 'react-redux';

const {TextArea} = Input;
const {Title} = Typography;

const Category =[
    { value: 0, label: "건강" },
    { value: 1, label: "자산" },
    { value: 2, label: "역량" },
    { value: 3, label: "관계" },
    { value: 4, label: "취미" },
]
function FeedUploadPage(props) {

    const user = useSelector(state => state.user);
    const [FeedTitle, setFeedTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [Categories, setCategories] = useState("health ")  
    const [FilePath, setFilePath] = useState("")
    // const [Duration, setDuration] = useState("")
    // const [Thumbnail, setThumbnail] = useState("")


    const onTitleChange = (e) =>{
        setFeedTitle(e.currentTarget.value)
    }
    const onDescriptionChange= (e) =>{
        setDescription(e.currentTarget.value)
    }
    const onCategoryChange = (e) =>{
        setCategories(e.currentTarget.value)
    }

    // const onSubmit= (event) =>{
    //     event.preventDefault();

    //     if (user.userData && !user.userData.isAuth){
    //         return alert('로그인을 하셔야 이용 가능합니다')
    //     }
    //     if (FeedTitle === "" || Description === "" ||
    //     Categories === "" || FilePath === "" ||
    //     Duration === "" || Thumbnail === "") {
    //     return alert('남은 항목을 설정해주세요')
    //     }
    // }


    const onDrop = (files) => {
        let formData =new FormData;
        const config = {

            header: { 'content-type': 'multipart/form-data' }
            //파일 보낼 때 오류 방지
        }
        formData.append("file", files[0])
        console.log(files) //console 띄우면 파일 정보 배열로 출력됌
        
        Axios.post ('/api/feed/uploadfiles', formData,config)
        .then(response =>{
            if(response.data.success){
                message.success('성공적으로 업로드를 했습니다.')
                console.log(response.data)
                setTimeout(() =>{

                    props.history.push('/')
                },3000);
            }else{
                alert('업로드에 실패했습니다.')
            }
        })


    }
    const onSubmit = (e)=>{
        e.preventDefault();

        const variables = {
            userid: user.userData._id,
            title: FeedTitle,
            description: Description,
            filePath: FilePath,
            category: Categories,

        }

        Axios.post('/api/feed/uploadFeed', variables)
            .then(response =>{
                if(response.data.success){
                    console.log(response.data)
                }else{
                    alert('업로드에 실패했습니다')
                }
            })

            
    }

    return (
        <div style ={{maxWidth: '700px', margin: '2rem auto'}}>
            <div style={{ textAlign:'center', marginBottom:'2rem'}}>
                <Title level={2}> 첼린지 인증 </Title>
            </div>

            <Form onSubmit={onSubmit}>
                <div style={{display:"flex", justifyContent:'space-between'}}>
                    {/* drop zone */}

                    <Dropzone
                     onDrop={onDrop}
                     multiple={false}
                     maxSize={800000000}
                     >
                     {({ getRootProps, getInputProps}) => (

                     <div style={{ width: '300px', height: '240px', border: '1px solid lightgray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                     
                     {...getRootProps()}
                     >
                                <input {...getInputProps()} />
                                
                            
                                <PlusOutlined type = "PlusOutlined" style={{ fontSize: '3rem' }} />
                                
                     </div>
                    )}
                    </Dropzone>


                    {/* thumbnail */}
                    <div>
                        <img src alt/>
                    </div>

                </div>
                <br/>
                <br/>
                <label>첼린지명</label>
                <Input
                    onChange={onTitleChange}
                    value={FeedTitle}
                />
                <br/>
                <br/>
                <label>이번 도전은 어떠셨나요?</label>
                <TextArea
                    onChange={onDescriptionChange}
                    value={Description}
                />

                <br/>
                <br/>
             
                <select onChange={onCategoryChange}>
                    {Category.map((item, index) => (
                        <option key={index} value={item.label}>{item.label}</option>
                    ))}
                </select>

                <br/>
                <br/>
                <Button type="primary" size="large" onClick={onSubmit}>
                    인증하기
                </Button>
            </Form>
        </div>
    )
}

export default FeedUploadPage;
