import React, { Fragment } from 'react';
import { Tree, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { TreeNode } = Tree;

export const withRecursedTreeDataHandler = WrappedComponent => props => {

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

  const getRecursedEl = (item, func) => {
    let el = {};
    if(props.selectedNode) {
      el = [(
        <SubMenu
          key={ item.id }
          title={
            <span>
          <Icon type={ getIconType(item.type) } />
          <span>{ item.nameEn }</span>
        </span>
          }
        >
          {func(item.children)}
        </SubMenu>
      ), (
        <Menu.Item key={ item.id }>{ item.nameEn }</Menu.Item>
      )];
    } else {
      el = [(
        <TreeNode icon={<Icon type={ getIconType(item.type) } />} title={item.nameEn} key={item.id} dataRef={item}>
          {func(item.children)}
        </TreeNode>
      ), (
        <></>
      )];
    }

    return el;
  };

  const renderTreeNodes = data =>
    data.map(item => {
      if (item.children) {
        return(
          getRecursedEl(item, renderTreeNodes)[0]
        )
      }
      return getRecursedEl(item, renderTreeNodes)[1];
    });

  return <WrappedComponent {...props} recursiveTreeHandler={renderTreeNodes}></WrappedComponent>
};