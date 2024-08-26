import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';
import { user } from '../../constants/_navItems';
import logout from '../../methods/_logout';
const { Header, Content, Footer, Sider } = Layout;
const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
  (icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  }),
);
const UserLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={user} /> */}
        <ul className="p-4">
          {user?.map((e) =>
            <li className='my-2' key={e.path}>
              <NavLink className="text-white" to={e.path}>{e.label}</NavLink>
            </li>
          )}
          <li><button onClick={()=>logout()} className="text-red-500">خروج از سایت</button></li>
        </ul>
      </Sider>
      <Layout>
        {/* <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        /> */}
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: "100vh",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          عکاس باشی
        </Footer>
      </Layout>
    </Layout>
  );
};
export default UserLayout;