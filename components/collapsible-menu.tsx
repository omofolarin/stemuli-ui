import {
  Collapse,
  CollapsePanelProps,
  CollapseProps,
  List,
  ListProps,
} from "antd";
import { ListItemProps } from "antd/lib/list";
import {
  DropdownLess as DropdownLessIcon,
  DropdownMore as DropdownMoreIcon,
} from "./icons";

interface CollapsibleMenuProps {
  heading: string;
  menuData: { title: React.ReactNode; icon: React.ReactNode; url: string }[];
  className?: string;
  headingIcon?: React.ReactNode;
  collapseProps?: CollapseProps;
  panelProps?: CollapsePanelProps;
  listItemProps?: ListItemProps;
  listProps?: ListProps<CollapsibleMenuProps["menuData"][0]>;
}
const CollapsibleMenu = (props: CollapsibleMenuProps) => {
  const { Panel } = Collapse;
  const {
    heading,
    headingIcon,
    menuData,
    className,
    collapseProps,
    panelProps,
    listProps,
    listItemProps,
  } = props;

  return (
    <div className={className}>
      <Collapse
        defaultActiveKey={["1"]}
        expandIconPosition="right"
        bordered={false}
        expandIcon={(panelProps) => {
          if (panelProps.isActive) {
            return (
              <span
                role="img"
                aria-label="right"
                className="anticon anticon-right ant-collapse-arrow"
              >
                <DropdownLessIcon />
              </span>
            );
          } else {
            return (
              <span
                role="img"
                aria-label="right"
                className="anticon anticon-right ant-collapse-arrow"
              >
                <DropdownMoreIcon />
              </span>
            );
          }
        }}
        {...collapseProps}
      >
        <Panel
          header={
            <div style={{ display: "flex", alignItems: "flex-start" }}>
              <div>{headingIcon}</div>
              <p style={{ paddingLeft: "14px" }}> {heading}</p>
            </div>
          }
          key="1"
          {...panelProps}
        >
          <List
            bordered={false}
            dataSource={menuData}
            renderItem={(item) => (
              <List.Item {...listItemProps}>
                <List.Item.Meta
                  avatar={<div>{item.icon}</div>}
                  title={<a href={item.url}>{item.title}</a>}
                />
              </List.Item>
            )}
            {...listProps}
          />
        </Panel>
      </Collapse>
    </div>
  );
};

export default CollapsibleMenu;
