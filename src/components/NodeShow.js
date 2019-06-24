import React from 'react';
import {isEmpty} from 'lodash';
import { getSubMenuElement } from './TreeDataElement';
import { withTreeDataPropagator } from '../hoc/withTreeDataPropagator';
import { Button, Menu } from 'antd';

const NodeShow = ({selectedNode, withTreeDataPropagator}) => {

  // TODO Add breadcrumb

  const renderMenu = () => {
    if(isEmpty(selectedNode)) {
      return <div style={{textAlign: 'center'}}>Please select a node.</div>
    }
    if(!selectedNode.children || selectedNode.children.length < 1) {
      return <div style={{textAlign: 'center'}}>No data to display</div>
    } else {
      return (
        <div>
          <br />
          <Menu
            mode={'inline'}
          >
            { withTreeDataPropagator(selectedNode.children, getSubMenuElement) }
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

export default withTreeDataPropagator(NodeShow);
