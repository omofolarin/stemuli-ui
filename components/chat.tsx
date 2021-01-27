import React from "react";
import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  root: {
    backgroundColor: "#fff",
    width: "100%",
  },
});

export default function Chat() {
  const classes = styles();

  return <div className={classes.root}>c</div>;
}
