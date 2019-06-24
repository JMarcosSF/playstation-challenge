import React from 'react';
import {isEmpty} from 'lodash';
import { withRecursedTreeDataHandler } from '../hoc/withRecursedTreeDataHandler';
import { Button, Menu } from 'antd';

const NodeShow = ({selectedNode, recursiveTreeHandler}) => {

  // TODO Add breadcrumb

  const renderMenu = () => {
    if(isEmpty(selectedNode)) {
      return <div>Please select a node.</div>
    }
    if(!selectedNode.children || selectedNode.children.length < 1) {
      return <div>No data to display</div>
    } else {
      return (
        <div>
          <br />
          <Menu
            mode={'inline'}
          >
            { recursiveTreeHandler(selectedNode.children) }
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

export default withRecursedTreeDataHandler(NodeShow);
