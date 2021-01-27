import { Button, Col, Layout as AntLayout, Row } from "antd";
import * as React from "react";
import { createUseStyles } from "react-jss";
import Header from "./header";
import Sidebar from "./sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const useLayoutStyles = createUseStyles({
  root: {},
  container: {
    width: "100%",
    height: "100vh",
  },
});

export default function Layout(props: LayoutProps): JSX.Element {
  const classes = useLayoutStyles();
  const { Sider, Content, Footer } = AntLayout;

  const { children } = props;

  return (
    <div className={classes.root}>
      <AntLayout>
        <Row gutter={0} className={classes.container}>
          <Col span={1}>
            <Sidebar />
          </Col>
          <Col span={23}>
            <Header />
            <AntLayout>
              <Content>{children}</Content>
            </AntLayout>
          </Col>
        </Row>
      </AntLayout>
    </div>
  );
}
