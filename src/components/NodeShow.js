import React from 'react';
import {isEmpty} from 'lodash';
import { Button, Menu, Icon } from 'antd';
const { SubMenu } = Menu;

const NodeShow = ({selectedNode}) => {
  console.log('In NodeShow:')
  console.log(selectedNode);

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

  // TODO Add breadcrumb

  const renderTreeNodes = data =>
      data.map(item => {
        if (item.children) {
          return(
            <SubMenu
              key={ item.id }
              title={
                <span>
                  <Icon type={ getIconType(item.type) } />
                  <span>{ item.nameEn }</span>
                </span>
                }
            >
              {renderTreeNodes(item.children)}
            </SubMenu>
          )
        }
        return <Menu.Item key={ item.id }>{ item.nameEn}</Menu.Item>;
      });

  const renderMenu = () => {
    if(isEmpty(selectedNode)) {
        return <div></div>
    } else {
        return (
            <div>
                <br />
                <Menu
                  mode={'inline'}
                >
                  { renderTreeNodes(selectedNode.children) }
                </Menu>
            </div>
        );
    }
  }

  const buttonStyle = {
    marginRight: '5px'
  }
  return (
    <div>
      <div >
        <Button style={ buttonStyle } icon="folder-add">New Folder</Button>
        <Button style={ buttonStyle } icon="link">Add Link</Button>
      </div>
      { renderMenu() }
    </div>
  );
};

export default NodeShow;
