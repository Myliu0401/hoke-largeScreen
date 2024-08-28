import React from 'react';
import { renderTemplateData } from '../utils/index.js';



export default function App(props) {

  return <div className='customTemplate' style={{ width: props.canvasWidth + 'px', height: props.canvasHeight + 'px' }}>
    {renderTemplateData(props.templateData)}
  </div>;
};


