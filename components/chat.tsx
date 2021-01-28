import * as React from "react";
import { createUseStyles } from "react-jss";
import theme from "../theme";
import {
  Add as AddIcon,
  Stars as StarIcon,
  Mentions as MentionsIcon,
  Document as DocumentIcon,
  Groups as GroupIcon,
} from "./icons";
import Button from "./button";
import { List } from "antd";
import CollapsibleMenu from "./collapsible-menu";

const styles = createUseStyles({
  root: {
    backgroundColor: "#fff",
    width: "100%",
  },
  heading: {
    borderBottom: `1px solid ${theme.outlineColor}`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    padding: "8px 16px",
    height: "4.8em",
    "& p": {
      fontSize: "1.7rem",
      fontWeight: "bold",
    },
  },

  listItem: {
    margin: "0 16px",
  },

  listItemDense: {
    margin: "0 16px",
    padding: "4px 0",
    "& .ant-list-item-meta-title": {
      fontWeight: 400,
      fontSize: "14px",
    },
  },

  topMenu: {
    borderBottom: `1px solid ${theme.outlineColor}`,
  },

  maskHash: {
    backgroundColor: theme.backgroundColor,
    width: "2em",
    height: "2em",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  documentIcon: {
    "& svg": {
      width: 20,
      height: 20,
    },
  },
});

export default function Chat() {
  const classes = styles();
  const chartMainMenu = [
    { title: "Mentions", url: "/", icon: <MentionsIcon /> },
    { title: "Stared", url: "/", icon: <StarIcon /> },
  ];

  const chartGroups = [
    "Design",
    "Engagement-partners",
    "highschoolers",
    "goalsofttheweek",
    "homework",
    "engagement-partner",
  ].map((title) => ({
    title,
    icon: <div className={classes.maskHash}>#</div>,
    url: "/",
  }));

  const directMessagingData = [
    "Randall Corner",
    "David Ologbonori",
    "Amada Cooper",
    "James Allen",
    "Gloria Marcel",
    "Taylor Shead",
    "Wade Aston",
  ].map((title) => ({
    title,
    icon: null,
    url: "/",
  }));

  return (
    <div className={classes.root}>
      <div className={classes.heading}>
        <p>Chat</p>
        <div>
          <Button
            type="primary"
            shape="circle"
            icon={<AddIcon />}
            size="large"
          />
        </div>
      </div>

      <div className={classes.topMenu}>
        <List
          itemLayout="horizontal"
          dataSource={chartMainMenu}
          split={false}
          renderItem={(item) => (
            <List.Item className={classes.listItem}>
              <List.Item.Meta
                avatar={<div>{item.icon}</div>}
                title={<a href={item.url}>{item.title}</a>}
              />
            </List.Item>
          )}
        />
      </div>

      <div>
        <CollapsibleMenu
          heading={"Groups"}
          headingIcon={
            <div className={classes.documentIcon}>
              <GroupIcon />
            </div>
          }
          menuData={chartGroups}
          listItemProps={{ className: classes.listItemDense }}
          listProps={{ split: false }}
        />
      </div>

      <div>
        <CollapsibleMenu
          headingIcon={
            <div className={classes.documentIcon}>
              <DocumentIcon />
            </div>
          }
          heading={"Direct Messaging"}
          menuData={directMessagingData}
          listItemProps={{ className: classes.listItemDense }}
          listProps={{ split: false }}
        />
      </div>
    </div>
  );
}
