import React, { Fragment } from 'react';
import {isEmpty} from 'lodash';
import { getSubMenuElement } from './TreeDataElement';
import { withTreeDataPropagator } from '../hoc/withTreeDataPropagator';
import { Button, Menu, Breadcrumb, Icon } from 'antd';

const NodeShow = ({selectedNode, withTreeDataPropagator, breadCrumbPath}) => {

  const renderBreadCrumb = () => {
    return (breadCrumbPath.map(item => {
      if(item === 'Root') {
        return (
          <Breadcrumb.Item href="" key={ item }>
            <Icon type="home" />
          </Breadcrumb.Item>
        )
      }
      return (
        <Breadcrumb.Item key={ item }>{ item }</Breadcrumb.Item>
      )
    })
    )
  }

  const renderMenu = () => {
    if(isEmpty(selectedNode)) {
      return <div style={{textAlign: 'center'}}>Please select a node.</div>
    }
    if(!selectedNode.children || selectedNode.children.length < 1) {
      return (
        <div>
          <Breadcrumb>
            { renderBreadCrumb() }
          </Breadcrumb>
        </div>
       )
    } else {
      return (
        <div>
          <Breadcrumb>
            { renderBreadCrumb() }
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
