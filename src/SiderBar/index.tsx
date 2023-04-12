import React from "react";
import { Nav } from "@douyinfe/semi-ui";
import {
  IconUser,
  IconStar,
  IconSetting,
  IconSemiLogo,
} from "@douyinfe/semi-icons";

export default class SiderBar extends React.Component {
  render() {
    return (
      <Nav
        defaultOpenKeys={["clan"]}
        bodyStyle={{ height: "calc(100vh - 152px)" }}
        items={[
          { itemKey: "clan", text: "家族", icon: <IconUser /> },
          { itemKey: "person", text: "人员", icon: <IconStar /> },
        ]}
        onSelect={(key) => console.log(key)}
        footer={{
          collapseButton: true,
        }}
      />
    );
  }
}
