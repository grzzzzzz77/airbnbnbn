import React, { useState } from "react";
import {
  Row,
  Col,
  Typography,
  Divider,
  Button,
  Input,
  Rate,
  List,
  Comment,
  Avatar,
  Form,
} from "antd";
import { shallowEqual, useSelector } from "react-redux";

const { Title, Text } = Typography;
const { TextArea } = Input;

const RentDetailsPage = (props) => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [rating, setRating] = useState(0);
  const {name,price,message,reviews}=props;
  const handleCommentSubmit = () => {
    if (commentText && rating) {
      const newComment = {
        author: "浙江科技学院用户",
        avatar: "用户头像.jpg",
        content: commentText,
        datetime: new Date().toLocaleString(),
        rating: rating,
      };

      setComments([...comments, newComment]);
      setCommentText("");
      setRating(0);
    }
  };

  /** redux获取数据 */
  const { detailInfo, } = useSelector(
    (state) => ({
      detailInfo: state.detail.detailInfo,

    }),
    shallowEqual
  );

  return (
    <div>
      <Row gutter={16}>
        <Col span={12}>
          <Title level={3}>房屋信息</Title>
          <Divider />
          <Text strong style={{ fontSize: "24px" }}>
            位置：
          </Text>
          <Text style={{ fontSize: "20px" }}>{name||detailInfo.name}</Text>
          <br />
          <br />
          <Text strong style={{ fontSize: "24px" }}>
            价格：
          </Text>
          <Text style={{ fontSize: "20px" }}>{price||detailInfo.price_format}/晚</Text>
          <br />
          <br />
          <Text strong style={{ fontSize: "24px" }}>
            户型：
          </Text>
          <Text style={{ fontSize: "20px" }}>
            {message||detailInfo.verify_info.messages}
          </Text>
          <br />
          <br />
          <Text strong style={{ fontSize: "24px" }}>
            点评：
          </Text>
          <Text style={{ fontSize: "20px" }}>
            {detailInfo.reviews[0].comments}
          </Text>
          <br />

          <div style={{ marginTop: "20px" }}>
            <Title level={4} style={{ fontSize: "24px" }}>
              评论
            </Title>
            <Divider />
            <List
              itemLayout="horizontal"
              dataSource={comments}
              renderItem={(item) => (
                <Comment
                  author={item.author}
                  avatar={<Avatar src={item.avatar} alt="用户头像" />}
                  content={item.content}
                  datetime={item.datetime}
                  actions={[<Rate disabled defaultValue={item.rating} />]}
                />
              )}
            />

            <Form onFinish={handleCommentSubmit}>
              <Form.Item>
                <TextArea
                  rows={4}
                  placeholder="写下您的评论"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                />
              </Form.Item>
              <Form.Item>
                <Rate
                  allowHalf
                  value={rating}
                  onChange={(value) => setRating(value)}
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  提交评论
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default RentDetailsPage;
