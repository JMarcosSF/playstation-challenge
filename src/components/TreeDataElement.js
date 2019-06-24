import {Icon, Tree, Menu} from "antd";
import React from "react";

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

export const getSubMenuElement = (item, func) => {
  return (
    <Menu.SubMenu
      key={ item.id }
      title={
        <span>
          <Icon type={ getIconType(item.type) } />
          <span>{ item.nameEn }</span>
        </span>
      }
    >
      {func(item.children)}
    </Menu.SubMenu>
  );
}

export const getTreeNodeElement = (item, func) => {
  return (
    <Tree.TreeNode icon={<Icon type={ getIconType(item.type) } />} title={item.nameEn} key={item.id} dataRef={item}>
      {func(item.children)}
    </Tree.TreeNode>
  );
}