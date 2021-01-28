import { Row, Col, Tag } from "antd";
import * as React from "react";
import { createUseStyles } from "react-jss";
import theme from "../theme";
import {
  Video as VideoIcon,
  Document as DocumentIcon,
  Download as DownloadIcon,
} from "./icons";

const styles = createUseStyles({
  root: {
    margin: "0 16px",
  },
  avatar: {
    backgroundColor: theme.backgroundColor,
    width: "40px",
    height: "40px",
    borderRadius: "8px",
  },

  heading: {
    display: "flex",
    alignItems: "center",
    // justifyContent: "space-between",
    width: "100%",
  },

  date: {
    padding: "0 8px",
  },

  message: {
    padding: "8px 16px",
    backgroundColor: theme.backgroundColor,
    borderRadius: "5px",
  },

  attachmentsBox: {
    margin: "16px 0px",
  },

  tagContainer: {
    // padding: "8px 0",
  },

  emojiContainer: {
    display: "flex",
    padding: "4px 0",
  },

  emoji: {
    fontSize: "24px",
    position: "relative",
    top: "0.05em",
  },

  emojiTag: {
    fontSize: "24px",
    borderRadius: "16px",
    backgroundColor: theme.secondaryColor,
    padding: "4px 12px",
  },

  emojiCount: {
    paddingLeft: "8px",
    fontSize: "14px",
    position: "relative",
    top: "-0.25em",
  },

  attachment: {
    width: "100%",
    backgroundColor: theme.secondaryColor,
    borderRadius: "5px",
    padding: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "5em",
  },

  attachmentIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "8px",
    marginRight: "auto",
    backgroundColor: "rgba(255, 255, 255, 0.22)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& svg": {
      width: "2em",
      height: "2em",
    },
  },

  thumbnailContent: {
    width: "90%",
    padding: "16px 16px",
    marginTop: "16px",
  },

  thumbnailTitle: {
    fontSize: "16px",
    fontWidth: 500,
    marginBottom: "-0.15em",
  },

  downloadIcon: {
    width: "2.5em",
  },
});

export interface AttachmentsData {
  type: "document" | "image" | "video" | string;
  data: { title: string; size: string };
}

interface ChatReplyProps {
  pic: string;
  sender: string;
  date: string;
  contents: {
    text: string;
    reactions?: { emoji: React.ReactNode; count: number }[];
  }[];
  tags?: string[];
  attachments?: AttachmentsData[];
}

const ChatReply = (props: ChatReplyProps) => {
  const classes = styles();
  const { pic, sender, date, contents, tags, attachments } = props;
  return (
    <div className={classes.root}>
      <Row gutter={4}>
        <Col span={3}>
          <div className={classes.avatar}>
            <img src={pic} alt="sender" />
          </div>
        </Col>

        <Col span={21}>
          <div className={classes.message}>
            <div className="messageInner">
              <div className={classes.heading}>
                <p className="senderName">{sender}</p>

                <div className={classes.tagContainer}>
                  {Array.isArray(tags) &&
                    tags.map((tag, i) => (
                      <div className="tag" key={i.toString()}>
                        {tag}
                      </div>
                    ))}
                </div>

                <p className={classes.date}>{date}</p>
              </div>

              <div className="content">
                {Array.isArray(contents) &&
                  contents.map((content, i) => (
                    <React.Fragment key={i.toString()}>
                      <div key={i.toString()}>{content.text}</div>
                      <div className={classes.emojiContainer}>
                        {Array.isArray(content.reactions) &&
                          content.reactions.map((react, j) => (
                            <div key={j.toString()}>
                              {" "}
                              <Tag className={classes.emojiTag}>
                                <span className={classes.emoji}>
                                  {react.emoji}
                                </span>
                                <span className={classes.emojiCount}>
                                  {react.count}
                                </span>
                              </Tag>
                            </div>
                          ))}
                      </div>
                    </React.Fragment>
                  ))}
              </div>
            </div>
          </div>

          <div className={classes.attachmentsBox}>
            <Row gutter={16}>
              {Array.isArray(attachments) &&
                attachments.map((attachment, i) => (
                  <Col span={12} key={i.toString()}>
                    <div className={classes.attachment}>
                      <div className={classes.attachmentIcon}>
                        {attachment.type === "image" && (
                          <div>
                            <VideoIcon />
                          </div>
                        )}
                        {attachment.type === "document" && (
                          <div>
                            <DocumentIcon />
                          </div>
                        )}
                        {attachment.type === "video" && <div></div>}
                      </div>
                      <div className={classes.thumbnailContent}>
                        <p className={classes.thumbnailTitle}>
                          {attachment.data.title}
                        </p>
                        <p className="thumbnailSubtitle">
                          {attachment.data.size}
                        </p>
                      </div>
                      <div className={classes.downloadIcon}>
                        <DownloadIcon />
                      </div>
                    </div>
                  </Col>
                ))}
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ChatReply;
