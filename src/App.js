import React, { Component } from 'react';
import { connect} from 'react-redux';
import { Layout, Menu, Breadcrumb, Modal } from 'antd';
import SideTree from './components/SideTree';
import './App.css';

const { Header, Content, Sider } = Layout;

class App extends Component {

  error() {
    Modal.error({
      title: 'This is an error message',
      content: 'some messages...some messages...',
    });
  }

  render() {
    {this.props.error && this.error()}
    return (
      <div className="App">
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
              <SideTree loading={this.props.loading}/>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                style={{
                  background: '#fff',
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                Content
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state.treeData)
  return {
    loading: state.treeData.isFetching,
    error: state.treeData.errorMessage,
  };
}

export default connect(mapStateToProps)(App);