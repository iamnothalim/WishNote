
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
