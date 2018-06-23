import React from 'react';
import BoundingBox from './BoundingBox';

const coordinates = (e) => {
//   const offset = this.getClientRects()[0];
  console.log(this, e.clientX);
//   alert(e.clientX - offset.left);
};

const ImageBox = () => (
  <div className="imageBox">
    <div>Image Box</div>

    <div // eslint-disable-line
      className="offsetParent"
      style={{
        border: '1px dotted green', width: '300px', height: '500px', position: 'absolute', left: '150px', top: '150px',
}}
      onClick={coordinates}
    >
      <BoundingBox x={0} y={0} width={100} height={100} />
    </div>
  </div>
);
 // eslint-disable-line

export default ImageBox;
