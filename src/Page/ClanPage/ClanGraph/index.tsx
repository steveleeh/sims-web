import { PureComponent } from "react";
import G6 from "@antv/g6";

export interface IClanGraphProps {}

export interface IClanGraphState {}

/**
 * 家族图谱
 */
export default class ClanGraph extends PureComponent<
  IClanGraphProps,
  IClanGraphState
> {
  componentDidMount() {
    fetch(
      "https://gw.alipayobjects.com/os/antvdemo/assets/data/algorithm-category.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const container = document.getElementById("container");
        if (!container) {
          return;
        }
        const width = container.scrollWidth;
        const height = container.scrollHeight || 500;
        const graph = new G6.TreeGraph({
          container: "container",
          width,
          height,
          linkCenter: true,
          modes: {
            default: [
              {
                type: "collapse-expand",
                onChange: function onChange(item: any, collapsed) {
                  const data = item.getModel();
                  data.collapsed = collapsed;
                  return true;
                },
              },
              "drag-canvas",
              "zoom-canvas",
            ],
          },
          defaultNode: {
            size: 26,
            anchorPoints: [
              [0, 0.5],
              [1, 0.5],
            ],
          },
          defaultEdge: {
            type: "cubic-vertical",
          },
          layout: {
            type: "compactBox",
            direction: "TB",
            getId: function getId(d: any) {
              return d.id;
            },
            getHeight: function getHeight() {
              return 16;
            },
            getWidth: function getWidth() {
              return 16;
            },
            getVGap: function getVGap() {
              return 80;
            },
            getHGap: function getHGap() {
              return 20;
            },
          },
        });

        graph.node(function (node) {
          let position = "right";
          let rotate = 0;
          if (!node.children) {
            position = "bottom";
            rotate = Math.PI / 2;
          }
          return {
            label: node.id,
            labelCfg: {
              position,
              offset: 5,
              style: {
                rotate,
                textAlign: "start",
              },
            },
          };
        });

        graph.data(data);
        graph.render();
        graph.fitView();

        if (typeof window !== "undefined")
          window.onresize = () => {
            if (!graph || graph.get("destroyed")) return;
            if (!container || !container.scrollWidth || !container.scrollHeight)
              return;
            graph.changeSize(container.scrollWidth, container.scrollHeight);
          };
      });
  }

  render() {
    return <div id="container" />;
  }
}
