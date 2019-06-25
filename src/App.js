import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withBreadCrumbSetter } from './hoc/withBreadCrumbSetter';
import { debounce } from 'lodash';
import { Layout, Menu, Icon, Modal, Avatar, PageHeader } from 'antd';
import SideTree from './components/SideTree';
import NodeShow from './components/NodeShow'
import './App.css';
import {fetchTrees} from "./actions";

const { Header, Content, Sider } = Layout;

class App extends Component {

  state = {
    selectedTreeNode: {},
    breadCrumbPath: [],
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
    return debounce((item) => {
      this.setState({
        selectedTreeNode: item,
        breadCrumbPath: this.props.setBreadCrumbPath(this.props.treeData, item),
      });
    }, delay);
  }

  render() {
    {this.props.error && this.error()}
    return (
      <div className="App">
        <PageHeader>
          <div style={{position:'absolute', left: '35%'}}>
            <h2>Submit Feedback To abcd@xyz.com</h2>
          </div>
          <div style={{ marginLeft: '96%'}}>
            <Avatar size={50} icon="user" />
          </div>
        </PageHeader>
        <Layout>
          <Header className="header">
            <div className="logo" />
          </Header>
          <Layout style={{ padding: '0 0px 2px' }}>
            <Sider width={'20%'} style={{ background: '#fff' }}>
                <Menu style={{textAlign:'center'}}onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                  <Menu.Item key="menu-1">
                    <Icon type="unordered-list" />
                    <span></span>
                  </Menu.Item>
                  <Menu.Item key="menu-2">
                    <Icon type="menu-unfold" />
                  </Menu.Item>
                </Menu>
              <SideTree
                treeData={this.props.treeData}
                loading={this.props.loading}
                handleTreeNodeClick={this.handleTreeNodeClick}
              />
            </Sider>
            <Layout style={{ padding: '0 2px 0px' }}>
              <Content
                style={{
                  background: '#fff',
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                <NodeShow selectedNode={this.state.selectedTreeNode} breadCrumbPath={this.state.breadCrumbPath} />
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}
const delay = 300;

const mapStateToProps = (state, ownProps) => {
  return {
    treeData: Object.values(state.treeData.nodes),
    loading: state.treeData.isFetching,
    error: state.treeData.errorMessage,
  };
}

export default withBreadCrumbSetter(connect(mapStateToProps, { fetchTrees })(App));