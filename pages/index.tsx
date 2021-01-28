import * as React from "react";
import { Col, Row } from "antd";
import ChatBoard from "../components/chat-board";
import Chat from "../components/chat";
import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  root: {
    width: "100%",
    maxWidth: "1800px",
    margin: "auto",
    padding: "2%",
    minHeight: "80vh",
  },
});

export default function Home() {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Row gutter={16}>
        <Col span={6}>
          <Chat />
        </Col>

        <Col span={18}>
          <ChatBoard />
        </Col>
      </Row>
    </div>
  );
}
