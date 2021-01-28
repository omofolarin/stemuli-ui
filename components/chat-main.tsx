import { Row, Col } from "antd";
import React from "react";
import { createUseStyles } from "react-jss";
import ChatReply from "./chat-reply";

const styles = createUseStyles({
  root: {
    width: "100%",
    backgroundColor: "#fff",
    margin: "16px 0",
  },
});

export default function ChatMain() {
  const classes = styles();
  const replies = [
    {
      pic: "/",
      sender: "Randall Conner",
      date: "July 20, 2021 at 3:24PM",
      contents: [
        {
          text:
            "I would prefer a chat help style. I think it’s convenient for users who need help but might not be in a suitable environment",
        },
      ],
      attachments: [],
    },
    {
      pic: "/",
      sender: "Randall Conner",
      date: "July 20, 2021 at 3:24PM",
      contents: [
        {
          text:
            "I would prefer a chat help style. I think it’s convenient for users who need help but might not be in a suitable environment",

          reactions: [
            { emoji: "😀", count: 25 },
            { emoji: "🤗", count: 50 },
          ],
        },
        {
          text:
            "I would prefer a chat help style. I think it’s convenient for users who need help but might not be in a suitable environment.",
        },
      ],
      attachments: [],
    },

    {
      pic: "/",
      sender: "Randall Conner",
      date: "July 20, 2021 at 3:24PM",
      contents: [
        {
          text:
            "I would prefer a chat help style. I think it’s convenient for users who need help but might not be in a suitable environment.",
        },
      ],
      attachments: [
        { type: "document", data: { title: "Homework", size: "50.3M" } },
        { type: "image", data: { title: "Wireframe", size: "350k" } },
      ],
    },
  ];
  return (
    <div className={classes.root}>
      {replies.map((item, i) => (
        <ChatReply
          key={i.toString()}
          {...replies}
          pic={item.pic}
          sender={item.sender}
          date={item.date}
          contents={item.contents}
          attachments={item.attachments}
        />
      ))}
    </div>
  );
}
