import React from 'react';
import { isEmpty } from 'lodash';
import { getSubMenuElement } from './TreeDataElement';
import { Button, Menu, Breadcrumb, Icon } from 'antd';
import { withTreeDataPropagator } from '../hoc/withTreeDataPropagator';
import NodeDataDisplayButtons from "./NodeDataDisplayButtons";

const NodeDataDisplay = ({ selectedNode, breadCrumbPath, withTreeDataPropagator}) => {

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

  const buttons = [
    {
      style: {
        marginRight: '5px'
      },
      icon: 'folder-add',
      onClick: () => {},
      text: 'New Folder'
    },
    {
      style: {
        marginRight: '5px'
      },
      icon: 'link',
      onClick: () => {},
      text: 'Add Link'
    },
  ]

  if(isEmpty(selectedNode)) {
    return <div style={{textAlign: 'center'}}>Please select a node.</div>
  }
  return (
    <div>
      <Breadcrumb>
        { renderBreadCrumb() }
      </Breadcrumb>
      <br />
      <br />
      <div>
        <NodeDataDisplayButtons buttonData={ buttons } />
        <br />
        {(!selectedNode.children || selectedNode.children.length < 1) ? (
          <div style={{ margin: '20px 90px'}}>NO DATA</div>
          ) : (
          <Menu
            mode={'inline'}
          >
            { withTreeDataPropagator(selectedNode.children, getSubMenuElement) }
          </Menu>
        )}
      </div>
    </div>
  )
}

export default withTreeDataPropagator(NodeDataDisplay);