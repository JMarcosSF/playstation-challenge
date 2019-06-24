import React from 'react';
import { getTreeNodeElement, getSubMenuElement } from '../components/TreeDataElement';

export const withTreeDataPropagator = WrappedComponent => props => {

  function propagateTreeNodes(data) {
    return data.map(item => {
      if (item.children) {
        if(props.selectedNode)
          return  getSubMenuElement(item, propagateTreeNodes);
        return(
          getTreeNodeElement(item, propagateTreeNodes)
        )
      }
    });
  }

  return <WrappedComponent {...props} withTreeDataPropagator={propagateTreeNodes}></WrappedComponent>
};