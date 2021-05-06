
import React, { useState } from 'react'
import { Typography, Button, Form, message, Upload, Input } from 'antd';
import { PlusOutlined, Plus, InboxOutlined } from '@ant-design/icons';
import { withRouter} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createFeed } from '../../_actions/feed_action';

const { TextArea } = Input;
const { Title } = Typography;

function FeedUploadPage(props) {
    const dispatch = useDispatch();
    const user = useSelector((state) => ({
        userid: state.user.userData.id,
        challengename: state.user.userData.challengeName,
    }))
    const [FeedTitle, setFeedTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [Categories, setCategories] = useState("health ")
    const [FilePath, setFilePath] = useState("")
    // const [Duration, setDuration] = useState("")
    // const [Thumbnail, setThumbnail] = useState("")
    console.log('아이디는', user.userid);
    console.log('챌린지 이름은', user.challengename);

    const onTitleChange = (e) => {
        setFeedTitle(e.currentTarget.value)
    }
    const onDescriptionChange = (e) => {
        setDescription(e.currentTarget.value)
    }
    const onCategoryChange = (e) => {
        setCategories(e.currentTarget.value)
    }
    const normFile = (e) => {
        console.log('Upload event:', e);
        setFilePath(e);
        //console.log(FilePath.file.originFileObj);
        if (Array.isArray(e)) {
            return e;
        }

        return e && e.fileList;
    };
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


    const onSubmit = async(e) => {
        e.preventDefault();
        const variables = {
            userid: user.userid,
            title: Categories,
            description: Description,
            file: FilePath.file.originFileObj,
        }
        const formData = new FormData();
        formData.append("userId", variables.userid);
        formData.append("title", variables.title);
        formData.append("description", variables.description);
        formData.append("image", variables.file);
        console.log('수박!', variables);

        await dispatch(createFeed(formData)).then((response) => {
            if (response.payload.success) {
                alert(response.payload.msg);
                props.history.push("/");
            } else {
                alert(response.payload.msg);
            }
        })
        // Axios.post('/api/feed/uploadFeed', variables)
        //     .then(response =>{
        //         if(response.data.success){
        //             console.log(response.data)
        //         }else{
        //             alert('업로드에 실패했습니다')
        //         }
        //     })   
    }
    const ashgdia = { ...user.challengename };
    console.log(ashgdia[0]);
    console.log(Object.keys(ashgdia).length);
    let cba = [];
    for (let i = 0; i < Object.keys(ashgdia).length; i++) {
        cba.push(ashgdia[i])
    }
    console.log(cba);

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2}> 첼린지 인증 </Title>
            </div>

            {/* <Form onSubmit={onSubmit} onFinish={onSubmitHandler} > */}
            <Form  >
                <div style={{ display: "flex", justifyContent: 'space-between' }}>
                    {/* thumbnail */}
                </div>
                <br />
                <br />
                <label>첼린지명</label>
                {/* <Input
                    onChange={onTitleChange}
                    value={FeedTitle}
                /> */}
                <select onChange={onCategoryChange}>
                    {cba.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                </select>
                <br />
                <br />
                <label>이번 도전은 어떠셨나요?</label>
                <Form.Item name="description" >
                    <TextArea showCount maxLength={100} onChange={onDescriptionChange} />
                </Form.Item>
                <br />
                <br />

                {/* <select onChange={onCategoryChange}>
                    {Category.map((item, index) => (
                        <option key={index} value={item.label}>{item.label}</option>
                    ))}
                </select> */}
                <Form.Item label="Image" >
                    {/* <div>
                        <img src={imgBase64} />
                    </div>
                    <input type="file" name="imgFile" id="imgFile" onChange={handleChangeFile} value={imgFile} /> */}
                    <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                        <Upload.Dragger name="img" action="/api/upload" method="POST" >
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                        </Upload.Dragger>
                    </Form.Item>
                </Form.Item>
                <br />
                <br />
                <Button type="primary" size="large" onClick={onSubmit}>
                    인증하기
                </Button>
            </Form>
        </div>
    )
}

export default withRouter(FeedUploadPage);
