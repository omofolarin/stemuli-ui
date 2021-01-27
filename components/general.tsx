import { Row, Col } from "antd";
import React from "react";
import { createUseStyles } from "react-jss";
import GeneralMain from "./general-main";
import GeneralSidebar from "./general-sidebar";

const styles = createUseStyles({
  root: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    height: "100%",
  },
});

export default function General() {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Row gutter={1}>
        <Col span={16}>
          <GeneralMain />
        </Col>

        <Col span={8}>
          <GeneralSidebar />
        </Col>
      </Row>
    </div>
  );
}
