import React from 'react';

export const withBreadCrumbSetter = (WrappedComponent) => {
  const getObject = (treeData, objId) => {
    var result = null;
    if(treeData instanceof Array) {
      for(var i = 0; i < treeData.length; i++) {
        result = getObject(treeData[i], objId);
        if (result) {
          break;
        }
      }
    }
    else
    {
      for(var prop in treeData) {
        if(prop == 'id') {
          if(treeData[prop] == objId) {
            return treeData;
          }
        }
        if(treeData[prop] instanceof Object || treeData[prop] instanceof Array) {
          result = getObject(treeData[prop], objId);
          if (result) {
            break;
          }
        }
      }
    }
    return result;
  }

  const getParent = (treeData, item) => {
    return getObject(treeData, item.parentid);
  }

  const setBreadCrumb = (treeData, item) => {
    let curr = [];
    function inner(treeData, item) {
      const parent = getParent(treeData, item);

      if(parent) curr = [parent.nameEn, ...curr]
      if(!parent)
        return;
      inner(treeData, parent);
    }
    inner(treeData, item);
    curr = [...curr, item.nameEn]
    return curr;
  }
  
  class HOC extends React.Component {
    state = {
      setBreadCrumbPath: setBreadCrumb
    }
    render() {
      return <WrappedComponent {...this.props} setBreadCrumbPath={this.state.setBreadCrumbPath}/>;
    }
  }

  return HOC;
};
