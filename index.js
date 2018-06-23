import React from 'react';
import ReactDOM from 'react-dom';

import ImageBox from './components/ImageBox';
import ControlPanel from './components/ControlPanel';

import './main.css';

const Annotation = () => (
  <div className="flex-content main">
    <ImageBox />
    <ControlPanel />
  </div>
);

ReactDOM.render(<Annotation />, document.getElementById('root'));
