// import React from 'react';
// import { Upload, message } from 'antd';
// import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

// function getBase64(img, callback) {
//     const reader = new FileReader();
//     reader.addEventListener('load', () => callback(reader.result));
//     reader.readAsDataURL(img);
//     console.log(reader.readAsDataURL(img));
// }

// function beforeUpload(file) {
//     const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
//     if (!isJpgOrPng) {
//         message.error('You can only upload JPG/PNG file!');
//     }
//     const isLt2M = file.size / 1024 / 1024 < 2;
//     if (!isLt2M) {
//         message.error('Image must smaller than 2MB!');
//     }
//     return isJpgOrPng && isLt2M;
// }

// class Avatar extends React.Component {
//     state = {
//         loading: false,
//     };

//     handleChange = info => {
//         if (info.file.status === 'uploading') {
//             this.setState({ loading: true });
//             return;
//         }
//         if (info.file.status === 'done') {
//             // Get this url from response in real world.
//             getBase64(info.file.originFileObj, imageUrl =>
//                 this.setState({
//                     imageUrl,
//                     loading: false,
//                 }),
//             );
//         }
//     };

//     render() {
//         const { loading, imageUrl } = this.state;
//         const uploadButton = (
//             <div>
//                 {loading ? <LoadingOutlined /> : <PlusOutlined />}
//                 <div style={{ marginTop: 8 }}>Upload</div>
//             </div>
//         );
//         return (
//             <Upload
//                 name="avatar"
//                 listType="picture-card"
//                 className="avatar-uploader"
//                 showUploadList={false}
//                 //action에다 업로드된 이미지 주소를 넣는다?
//                 action="/api/upload"
//                 beforeUpload={beforeUpload}
//                 onChange={this.handleChange}
//             >
//                 {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
//             </Upload>
//         );
//     }
// }
// export default Avatar;

import React from "react";
import { Upload, message, Button } from "antd";
import Icon from "@ant-design/icons";
import CenterBlock from "../../components/common/Center";
const props = {
  name: "img",
  action: "/api/upload",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const Uploadfile = () => {
  return (
    <CenterBlock>
      <Upload {...props}>
        <Button>
          <Icon type="upload" /> Click to Upload
        </Button>
      </Upload>
    </CenterBlock>
  );
};

export default Uploadfile;
