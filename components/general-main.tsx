import React from "react";
import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  root: {
    width: "100%",
    backgroundColor: "#fff",
  },
});

export default function GeneralMain() {
  const classes = styles();
  return <div className={classes.root}>j</div>;
}
