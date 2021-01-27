import React from "react";
import { createUseStyles } from "react-jss";
import { Layout as AntLayout } from "antd";

const styles = createUseStyles({
  root: {
    backgroundColor: "#FFFFFF",
    height: "70px",
  },
});

export default function Header() {
  const classes = styles();
  const { Header: AntHeader } = AntLayout;
  return (
    <div>
      <AntHeader className={classes.root}>header</AntHeader>
    </div>
  );
}
