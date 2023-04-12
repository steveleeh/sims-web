import React from "react";
import { Layout } from "@douyinfe/semi-ui";
import SiderBar from "./SiderBar";
import NavBar from "./NavBar";
import Article from "./Article";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";

const { Header, Sider, Content } = Layout;

class App extends React.Component<{}> {
  render() {
    return (
      <Layout className="components-layout-demo">
        <Header>
          <NavBar></NavBar>
        </Header>
        <Layout>
          <Sider>
            <SiderBar></SiderBar>
          </Sider>
          <Content>
            <Article>
              <RouterProvider router={router} />
            </Article>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
