import React, { Fragment } from 'react';
import {isEmpty} from 'lodash';
import { getSubMenuElement } from './TreeDataElement';
import { withTreeDataPropagator } from '../hoc/withTreeDataPropagator';
import { Button, Menu, Breadcrumb, Icon } from 'antd';

const NodeShow = ({selectedNode, withTreeDataPropagator}) => {

  const renderMenu = () => {
    if(isEmpty(selectedNode)) {
      return <div style={{textAlign: 'center'}}>Please select a node.</div>
    }
    if(!selectedNode.children || selectedNode.children.length < 1) {
      return <div style={{textAlign: 'center'}}>No data to display</div>
    } else {
      return (
        <div>
          <Breadcrumb>
            <Breadcrumb.Item href="">
              <Icon type="home" />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">
              <Icon type="user" />
              <span>Application List</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Application</Breadcrumb.Item>
          </Breadcrumb>
          <br />
          <br />
          <div>
            <Button style={ buttonStyle } icon="folder-add">New Folder</Button>
            <Button style={ buttonStyle } icon="link">Add Link</Button>
            <br />
            <Menu
              mode={'inline'}
            >
              { withTreeDataPropagator(selectedNode.children, getSubMenuElement) }
            </Menu>
          </div>
        </div>
      );
    }
  }

  const buttonStyle = {
    marginRight: '5px'
  }
  return (
    <>
      { renderMenu() }
    </>
  );
};

export default withTreeDataPropagator(NodeShow);
