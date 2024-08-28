import React from "react";
import "../assets/global.css";
import "../assets/template.less";
//import { getSpecifiedTemplate } from '../utils/index.js';
import { renderTemplateData } from '../utils/index.js';



export default function App(props) {

  return <div className='customTemplate'>
    {renderTemplateData(props.templateData)}
  </div>;
};
