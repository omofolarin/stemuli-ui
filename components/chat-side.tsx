import React from "react";
import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  root: {
    backgroundColor: "#fff",
    width: "100%",
  },
});

export default function ChatSide() {
  const classes = styles();
  return <div className={classes.root}>s</div>;
}
