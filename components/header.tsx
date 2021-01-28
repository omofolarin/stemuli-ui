import React from "react";
import { createUseStyles } from "react-jss";
import { Input, Layout as AntLayout, Tooltip } from "antd";
import {
  Add as AddIcon,
  Groups as GroupIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
} from "./icons";
import Button from "./button";
import theme from "../theme";

const styles = createUseStyles({
  root: {
    backgroundColor: "#FFFFFF",
    height: "70px",
  },

  inner: {
    maxWidth: "1700px",
    display: "flex",
    justifyContent: "space-between",
    margin: "auto",
  },

  navIcon: {
    cursor: "pointer",
  },

  navRight: {
    display: "flex",
    alignItems: "center",
  },

  button: {
    borderRadius: "4px",
    "& svg": {
      margin: "0 10px 0 0",
    },
  },

  messageButton: {
    marginLeft: "16px",
    width: "2.5em",
    height: "2.5em",
    backgroundColor: theme.backgroundColor,
    display: "flex",
    alignItems: "center",
    borderRadius: "50%",
    justifyContent: "center",
    cursor: "pointer",
    "& svg": {
      width: "1.5em",
      height: "1.5em",
      fill: theme.primaryColor,
      color: theme.primaryColor,
    },
  },

  search: {
    width: "20em",
    margin: "0 16px",

    "& .ant-input-affix-wrapper": {
      borderRadius: "5px",
    },

    "& .ant-input-affix-wrapper, input": {
      color: "rgba(0, 0, 0, 0.25)",
      backgroundColor: "#f5f5f5",
      opacity: 1,
    },

    "& .ant-input-affix-wrapper-focused": {
      borderColor: theme.primaryColor,
      boxShadow: `0 0 0 2px ${theme.inputOutline}`,
    },

    "& svg": {
      width: "16px",
      height: "16px",
    },
  },
});

export default function Header() {
  const classes = styles();
  const { Header: AntHeader } = AntLayout;
  return (
    <div>
      <AntHeader className={classes.root}>
        <div className={classes.inner}>
          <div className={classes.navIcon}>
            <MenuIcon />
          </div>

          <div className={classes.navRight}>
            <div className={classes.search}>
              <Input
                placeholder="Search for anything..."
                prefix={
                  <>
                    <SearchIcon />
                  </>
                }
              />
            </div>
            <div>
              <Button
                className={classes.button}
                icon={
                  <span>
                    <AddIcon />
                  </span>
                }
                type="primary"
              >
                Create
              </Button>
            </div>

            <Tooltip title="Messages">
              <Button
                shape="circle"
                icon={<GroupIcon />}
                className={classes.messageButton}
              />
            </Tooltip>
          </div>
        </div>
      </AntHeader>
    </div>
  );
}
