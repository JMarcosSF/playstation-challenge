import React, { Fragment } from 'react';
import NodeDataDisplay from './NodeDataDisplay';

const NodeShow = ({selectedNode, breadCrumbPath}) => {

  return (
    <>
      { <NodeDataDisplay selectedNode={ selectedNode } breadCrumbPath={ breadCrumbPath } />}
    </>
  );
};

export default NodeShow;
