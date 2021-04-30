import React from 'react';
//import axios from 'axios';

// const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('img', e.target.img.files[0]);
//     //for (var pair of formData.entries()) { console.log(pair[0]+ ', ' + pair[1]); }
//     register(formData)
// }
// const register = (regiInfo) => {
//     for (var pair of regiInfo.entries()) { console.log('요거요거',pair[0]+ ', ' + pair[1]); }
//     axios.post('/api/upload',regiInfo,{
//         headers:{'Content-Type':'multipart/form-data'}
//     });
// }
// const Upload = () => {
//     return (
//         // encType='multipart/form-data'
//         <form onSubmit={handleSubmit}>
//             <p><input type='file' accept='image/jpg,impge/png,image/jpeg,image/gif' name='img'></input></p>
//             <p><input type='submit' value='제출'></input></p>
//         </form>
//     )
// };

// import { Upload, message, Button } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';

// const props = {
//     name: 'img',
//     action: '/api/upload',
//     headers: {
//         authorization: 'authorization-text',
//     },
//     onChange(info) {
//         if (info.file.status !== 'uploading') {
//             console.log(info.file, info.fileList);
//         }
//         if (info.file.status === 'done') {
//             message.success(`${info.file.name} file uploaded successfully`);
//         } else if (info.file.status === 'error') {
//             message.error(`${info.file.name} file upload failed.`);
//         }
//     },
// };

// const Uploadimg = () => {
//     return(
//     <Upload {...props}>
//         <Button icon={<UploadOutlined />}>Click to Upload</Button>
//     </Upload>
//     )
// };

import { Upload, message,Button } from 'antd';
import { LoadingOutlined, PlusOutlined,UploadOutlined } from '@ant-design/icons';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

class Avatar extends React.Component {
  state = {
    loading: false,
  };

  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };

  render() {
    const { loading, imageUrl } = this.state;
    const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );
    return (
        <>
      <Upload
        name="img"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="/api/upload"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
      <Button icon={<UploadOutlined />}>Upload</Button>
      </>
    );
  }
}

export default Avatar;