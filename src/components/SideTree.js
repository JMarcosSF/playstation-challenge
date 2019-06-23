import React, { Component, Fragment } from 'react';
import { connect} from 'react-redux';
import { Tree, Icon, Spin } from "antd";
import { fetchTrees } from "../actions";

const { TreeNode, DirectoryTree } = Tree;

class SideTree extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTrees();
  }

  onSelect = (keys, event) => {
    // console.log('Trigger Select', keys, event);
    console.log(event.node.props.dataRef)
  };

  onExpand = () => {
    console.log('Trigger Expand');
  };

  hasChildren(node) {
    if(node) {
      return node.children && node.children.length;
    }
  }

  renderTreeNodes = data =>
    data.map(item => {
      if (item.children) {
        return (
          <TreeNode title={item.nameEn} key={item.id} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode {...item} isLeaf />;
    });

  renderDirectoryTree = (rootNodes) => {
    const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
    if(this.props.loading) {
      return (
        <Spin indicator={antIcon} />
      );
    } else {
      return (
        <DirectoryTree onSelect={this.onSelect} onExpand={this.onExpand}>
          { this.renderTreeNodes(rootNodes) }
        </DirectoryTree>
      );
    }
  }

  render() {
    let rootNodes = [];
    if(this.hasChildren(this.props.trees[0]))
      rootNodes = this.props.trees[0].children;
    return (
      this.renderDirectoryTree(rootNodes)
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    trees: Object.values(state.treeData.nodes),
  }
};

export default connect(mapStateToProps, { fetchTrees })(SideTree)