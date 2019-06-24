import React from 'react';
import { Tree, Spin } from "antd";
import { getTreeNodeElement } from './TreeDataElement';
import { withTreeDataPropagator } from '../hoc/withTreeDataPropagator';

const { DirectoryTree } = Tree;

export const SideTree = ({ treeData, loading, handleTreeNodeClick, withTreeDataPropagator }) => {

  const onSelect = (keys, event) => {
    const handleClick = handleTreeNodeClick();
    handleClick(event.selectedNodes[0].props.dataRef);
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
        <DirectoryTree showLine={true} onSelect={onSelect}>
          { withTreeDataPropagator(rootNodes, getTreeNodeElement) }
        </DirectoryTree>
      );
    }
  }

  let topLevelNodes = [];
  if(hasChildren(treeData[0]))
    topLevelNodes = treeData[0].children;
  return (
    renderDirectoryTree(topLevelNodes)
  );

};

export default withTreeDataPropagator(SideTree);