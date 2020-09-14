import React from 'react';
import { Layout, PageHeader, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Content, Sider } = Layout;

function RenderHomePage(props) {
  const { userInfo, authService } = props;
  console.log(userInfo);
  return (
    <>
      <Layout>
        <PageHeader
          key="pageheader1"
          className="Title"
          title="Apollo"
          subTitle={`Hello, ${userInfo.name}`}
          style={{
            backgroundColor: '#191919',
            padding: '2rem',
            borderBottom: '1px solid #BC9D7E',
          }}
          extra={[
            <Link to="/newtopic" key="newtopiclink1">
              <Button
                key="1"
                style={{
                  backgroundColor: '#705C55',
                  border: '1px solid #BC9D7E',
                  fontWeight: 'bold',
                  color: '#191919',
                }}
              >
                New Topic
              </Button>
            </Link>,
            <Link to="/jointopic" key="jointopiclink1">
              <Button
                key="2"
                style={{
                  backgroundColor: '#705C55',
                  border: '1px solid #BC9D7E',
                  fontWeight: 'bold',
                  color: '#191919',
                }}
              >
                Join Topic
              </Button>
            </Link>,
            <Button
              key="3"
              onClick={() => authService.logout()}
              style={{
                backgroundColor: '#705C55',
                border: '1px solid #BC9D7E',
                fontWeight: 'bold',
                color: '#191919',
              }}
            >
              Sign Out
            </Button>,
            <Link to="/signout" style={{ color: '#705C55' }} key="signout2">
              <UserOutlined
                key="4"
                style={{
                  fontSize: '20px',
                  border: '1px solid #BC9D7E',
                  borderRadius: '5px',
                }}
              />
            </Link>,
          ]}
        />
        <Layout style={{ backgroundColor: '#0E3857', height: '90vh' }}>
          <Sider style={{ color: 'white', textAlign: 'center' }}>
            <h2>Topics</h2>
            <Link to="/newtopic">
              <Button
                key="newtopic"
                style={{
                  backgroundColor: '#705C55',
                  border: '1px solid #BC9D7E',
                  fontWeight: 'bold',
                  color: '#191919',
                }}
              >
                New Topic
              </Button>
            </Link>
            <Link to="/jointopic">
              <Button
                key="jointopic"
                style={{
                  backgroundColor: '#705C55',
                  border: '1px solid #BC9D7E',
                  fontWeight: 'bold',
                  color: '#191919',
                  hover: '#BC9D7E',
                }}
              >
                Join Topic
              </Button>
            </Link>
          </Sider>
          <Content></Content>
          <Sider style={{ color: 'white' }}>
            <h2>Thread</h2>
          </Sider>
        </Layout>
      </Layout>
    </>
  );
}
export default RenderHomePage;
