import * as React from "react";
import { Col, Row } from "antd";
import General from "../components/general";
import Chat from "../components/chat";
import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  root: {
    width: "100%",
    maxWidth: "5800px",
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
          <General />
        </Col>
      </Row>
    </div>
  );
}
