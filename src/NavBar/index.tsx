import React from "react";
import { Nav } from "@douyinfe/semi-ui";
import {
  IconUser,
  IconStar,
  IconSetting,
  IconSemiLogo,
} from "@douyinfe/semi-icons";

export default class NavBar extends React.Component {
  render() {
    return (
      <Nav
        defaultOpenKeys={["job"]}
        mode="horizontal"
        bodyStyle={{ height: 64 }}
        onSelect={(key) => console.log(key)}
        header={{
          logo: <IconSemiLogo style={{ height: "36px", fontSize: 36 }} />,
          text: "Sims 管理后台",
        }}
      />
    );
  }
}
