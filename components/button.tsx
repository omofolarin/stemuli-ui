import * as React from "react";
import { Button as AntButton, ButtonProps } from "antd";
import { createUseStyles } from "react-jss";

import theme from "../theme";

const styles = createUseStyles({
  root: {
    "& .ant-btn-primary": {
      backgroundColor: theme.primaryColor,
      border: theme.primaryColor,
    },
  },
});

export default function Button(props: ButtonProps) {
  const classes = styles();

  return (
    <div className={classes.root}>
      <AntButton {...props} />
    </div>
  );
}
