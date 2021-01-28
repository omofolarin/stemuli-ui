import { Row, Col } from "antd";
import React from "react";
import { createUseStyles } from "react-jss";
import theme from "../theme";
import Button from "./button";
import GeneralMain from "./general-main";
import GeneralSidebar from "./general-sidebar";
import { Search as SearchIcon, VertMore as VertMoreIcon } from "./icons";

const styles = createUseStyles({
  root: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 1)",
    height: "100%",
  },

  heading: {
    padding: "16px 16px",
    borderBottom: `1px solid ${theme.backgroundColor}`,
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    height: "4.8em",
    "& p": {
      fontSize: "1.3rem",
      lineHeight: 0.8,
      padding: "8px 0",
    },
  },

  actions: {
    display: "flex",
    width: "7em",
    justifyContent: "space-between",
    "& .ant-btn": {
      borderRadius: "8px",
      padding: "11px 11px",
      height: "40px",
    },
    "& svg": {
      width: "15px",
      height: "15px",
    },
  },
});

export default function ChatBoard() {
  const classes = styles();

  return (
    <div className={classes.root}>
      <div className={classes.heading}>
        <p># General</p>

        <div className={classes.actions}>
          <Button shape="round" icon={<SearchIcon />} />
          <Button shape="round" icon={<VertMoreIcon />} />
        </div>
      </div>
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
