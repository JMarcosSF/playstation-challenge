import React, { Fragment} from 'react';
import { Button } from 'antd';

const NodeDataDisplayButtons = ({ buttonData }) => {

  const renderButtons = () => {
    return (buttonData.map(btn => {
      return (
        <Button onClick={ btn.onClick} style={ btn.style } icon={ btn.icon }>
          { btn.text}
        </Button>
      )
    }));
  }

  return (
    <>
      { renderButtons() }
    </>
  );

}

export default NodeDataDisplayButtons;