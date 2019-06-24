import React, { Component } from 'react';
import { connect} from 'react-redux';
import { debounce } from 'lodash';
import { Layout, Menu, Breadcrumb, Modal } from 'antd';
import SideTree from './components/SideTree';
import NodeShow from './components/NodeShow'
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
    return debounce((item) => {
      this.setState({
        selectedTreeNode: item,
      })
    }, delay);
  }

  render() {
    {this.props.error && this.error()}
    return (
      <div className="App">
        <Layout>
          <Header className="header">
            <div className="logo" />
          </Header>
          <Layout>
            <Sider width={'20%'} style={{ background: '#fff' }}>
              <SideTree
                treeData={this.props.treeData}
                loading={this.props.loading}
                handleTreeNodeClick={this.handleTreeNodeClick}
              />
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Content
                style={{
                  background: '#fff',
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                <NodeShow selectedNode={this.state.selectedTreeNode} />
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

export default connect(mapStateToProps, { fetchTrees })(App);