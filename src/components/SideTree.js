import React, { Component, Fragment } from 'react';
import { connect} from 'react-redux';
import { Tree, Icon, Spin } from "antd";
import { fetchTrees } from "../actions";

const { TreeNode, DirectoryTree } = Tree;

export const SideTree = ({ treeData, loading, handleTreeNodeClick }) => {

  const onSelect = (keys, event) => {
    // console.log(event.selectedNodes[0].props.dataRef);
    const handleClick = handleTreeNodeClick();
    handleClick(event.selectedNodes[0].props.dataRef);
  };

  const onExpand = () => {
    console.log('Trigger Expand');
  };

  const hasChildren = (node) => {
    if(node) {
      return node.children && node.children.length;
    }
  }

  const getIconType = (type) => {
    let iconType = ''
    switch(type) {
      case 'folder':
        iconType = 'folder';
        break;
      case 'document':
        iconType = 'file';
        break;
      case 'link':
        iconType = 'link';
        break;
      default:
        iconType = 'file-unknown';
    }
    return iconType;
  }

  const renderTreeNodes = data =>
    data.map(item => {
      if (item.children) {
        return (
          <TreeNode icon={<Icon type={ getIconType(item.type) } />} title={item.nameEn} key={item.id} dataRef={item}>
            {renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode icon={<Icon type={ getIconType(item.type) } />} {...item} isLeaf />;
    });

  const renderDirectoryTree = (rootNodes) => {
    const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
    if(loading) {
      return (
        <Spin indicator={antIcon} />
      );
    } else {
      return (
        <DirectoryTree showLine={true} onSelect={onSelect} onExpand={onExpand}>
          { renderTreeNodes(rootNodes) }
        </DirectoryTree>
      );
    }
  }

  let rootNodes = [];
  if(hasChildren(treeData[0]))
    rootNodes = treeData[0].children;
  return (
    renderDirectoryTree(rootNodes)
  );

};

export default SideTree;