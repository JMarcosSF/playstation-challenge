import React, { Component, Fragment } from 'react';
import { Tree, Spin } from "antd";
import { withRecursedTreeDataHandler } from '../hoc/withRecursedTreeDataHandler';

const { DirectoryTree } = Tree;

export const SideTree = ({ treeData, loading, handleTreeNodeClick, recursiveTreeHandler }) => {

  const onSelect = (keys, event) => {
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

  const style = {
    position: 'absolute',
    margin: '0',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }
  const renderDirectoryTree = (rootNodes) => {
    if(loading) {
      return (
        <Spin size="large" style={style}/>
      );
    } else {
      return (
        <DirectoryTree showLine={true} onSelect={onSelect} onExpand={onExpand}>
          { recursiveTreeHandler(rootNodes) }
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

export default withRecursedTreeDataHandler(SideTree);