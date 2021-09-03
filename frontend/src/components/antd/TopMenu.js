import React from "react";
import { Menu } from "antd";
import {
  CameraOutlined,
  UserOutlined,
  FormOutlined,
  PlusSquareOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";
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
          <Link to="/feedListView">인증 게시판 </Link>
        </Menu.Item>
        <Menu.Item key="feedList" icon={<PlusSquareOutlined />}>
          <Link to="/feed/upload">인증 등록</Link>
        </Menu.Item>
        <Menu.Item key="challenge" icon={<FormOutlined />}>
          <Link to="/createChallenge">챌린지 등록</Link>
        </Menu.Item>
        <Menu.Item key="myPage" icon={<UserOutlined />}>
          <Link to="/myPage">마이 페이지</Link>
        </Menu.Item>
        <Menu.Item key="point" icon={<DollarCircleOutlined />}>
          <Link to="/point">포인트 충전</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default TopMenu;
