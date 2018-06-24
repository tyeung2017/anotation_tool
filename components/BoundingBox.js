import React from 'react';
import Rnd from 'react-rnd';


const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'solid 1px red',
  background: 'transparent',
};


const handleDragStop = (e, data) => {
  console.log('>>>>handleDragStop', data.x, data.y);
};


const handleResizeStop = (_, __, ele, ___, pos) => {
  console.log('>>>>handleResizeStop', ele.clientWidth, ele.clientHeight, pos.x, pos.y);
};


const BoundingBox = ({
  x, y, width, height,
}) => (
  <Rnd
    style={style}

    default={{
  x, y, width, height,
  }}
    bounds="parent"
    onResizeStop={handleResizeStop}
    onDragStop={handleDragStop}
  />
);

export default BoundingBox;

