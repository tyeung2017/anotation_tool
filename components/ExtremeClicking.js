import React from 'react';
import Rnd from 'react-rnd';

const style = {
  border: 'solid 1px blue',
  background: 'blue',
};

const Dot = (x, y) => (
  <Rnd
    style={style}

    default={{
  x, y, width: 20, height: 20,
  }}
    bounds="parent"
    enableResizing={false}
  />
);

export default Dot;
