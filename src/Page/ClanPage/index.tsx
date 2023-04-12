import { PureComponent } from "react";
import G6 from "@antv/g6";
import ClanGraph from "./ClanGraph";
import ClanInfoPanel from "./ClanInfoPanel";

export interface IClanPageProps {}

export interface IClanPageState {}

/**
 * 家族图谱
 */
export default class ClanPage extends PureComponent<
  IClanPageProps,
  IClanPageState
> {
  render() {
    return (
      <div>
        <ClanGraph></ClanGraph>
        <ClanInfoPanel
          style={{ position: "absolute", right: 12, top: 88 }}
        ></ClanInfoPanel>
      </div>
    );
  }
}
