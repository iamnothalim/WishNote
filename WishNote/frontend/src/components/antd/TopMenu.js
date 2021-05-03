import React from "react";
import { Menu } from "antd";
import { CameraOutlined, UserOutlined, FormOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

class TopMenu extends React.Component {
  state = {
    current: "",
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <Menu.Item key="feed" icon={<CameraOutlined />}>
          인증 게시판
        </Menu.Item>
        <Menu.Item key="challenge" icon={<FormOutlined />}>
          챌린지 등록
        </Menu.Item>
        <Menu.Item key="myPage" icon={<UserOutlined />}>
          <Link to="/myPage">마이 페이지</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default TopMenu;
