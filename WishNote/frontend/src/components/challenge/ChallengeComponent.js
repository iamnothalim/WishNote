import React from 'react';
import { Button, List, Space,Form ,Input} from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


// const listData = [];
// for (let i = 0; i < 23; i++) {
//     listData.push({
//         href: 'https://ant.design',
//         challengeName: `ant design part ${i}`,
//         description:
//             'Ant Design, a design language for background applications, is refined by Ant UED Team.',
//         creator:
//             'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
//     });
// }



const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);
const ChallengeComponent = ({listData,onClickHandler}) => {
    return (
        <Form onFinish={onClickHandler}>
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 2,
            }}
            dataSource={listData}
            renderItem={item => (
                <List.Item
                    key={item.challengeName}
                    // actions={[
                    //     <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                    //     <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                    //     <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                    // ]}
                    extra={
                        
                        <img
                            width={272}
                            alt="logo"
                            src={`/api/${item.challengeImg}`}
                        />
                    }
                >
                    <List.Item.Meta
                        // title={<a href={item.href}>{item.challengeName}</a>}
                        title={<a onClick={onClickHandler}>*{item.challengeName}*</a> }
                        description={item.creator}
                    />
                    <p>비용: {item.deposit}원</p>
                    <p>설명: {item.description}</p>
                    {/* <Input name="와다다댕댕댕">참가하기</Input> */}
                </List.Item>
            )}
        />
        </Form>
    )
};

export default ChallengeComponent;
