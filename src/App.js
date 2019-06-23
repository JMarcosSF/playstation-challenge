import React, { Component } from 'react';
import { connect} from 'react-redux';
import { Layout, Menu, Breadcrumb, Modal } from 'antd';
import SideTree from './components/SideTree';
import './App.css';
import {fetchTrees} from "./actions";

const { Header, Content, Sider } = Layout;

class App extends Component {

  state = {
    selectedTreeNode: {},
  }

  componentDidMount() {
    this.props.fetchTrees();
  }

  error() {
    Modal.error({
      title: 'This is an error message',
      content: this.props.error,
    });
  }

  handleTreeNodeClick = (item) => {
    console.log(item)
    this.setState({
      selectedTreeNode: item,
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
              <SideTree
                treeData={this.props.treeData}
                loading={this.props.loading}
                handleTreeNodeClick={this.handleTreeNodeClick}
              />
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
                {this.state.selectedTreeNode.id}
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    treeData: Object.values(state.treeData.nodes),
    loading: state.treeData.isFetching,
    error: state.treeData.errorMessage,
  };
}

export default connect(mapStateToProps, { fetchTrees })(App);