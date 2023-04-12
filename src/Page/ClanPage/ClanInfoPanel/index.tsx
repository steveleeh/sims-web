import React, { CSSProperties, Component } from "react";
import "./index.scss";
import { Descriptions, Tag } from "@douyinfe/semi-ui";

export interface IClanInfoPanelProps {
  style?: CSSProperties | undefined;
}

/**
 * 家族图谱信息
 */
export default class ClanInfoPanel extends Component<IClanInfoPanelProps> {
  render() {
    const { style } = this.props;
    const data = [
      { key: "姓名", value: "玛卡巴卡" },
      { key: "性别", value: "8" },
      { key: "年龄", value: "8" },
      { key: "家族", value: "兰尼斯特家族" },
      { key: "智商", value: -100 },
    ];
    return (
      <div style={style} className="clan_info_panel">
        <Descriptions data={data} />
      </div>
    );
  }
}
