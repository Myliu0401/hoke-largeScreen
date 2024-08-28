import React from "react";
import ImgComp from "../components/imgComp/index.jsx";
import TextComp from "../components/textComp/index.jsx";

/* import Temp1 from '../template/temp1/index.jsx';
import Temp2 from '../template/temp2/index.jsx';
import Temp3 from '../template/temp3/index.jsx';
import Temp4 from '../template/temp4/index.jsx';
import Temp5 from '../template/temp5/index.jsx';


// 获取指定模板
export function getSpecifiedTemplate(info = {}) {


  switch (info.templateName) {
    case "template1":
      return <Temp1 componentDatas={info.componentDatas} />;
    case 'template2':
      return <Temp2 componentDatas={info.componentDatas} />;
    case 'template3':
      return <Temp3 componentDatas={info.componentDatas} />;
    case 'template4':
      return <Temp4 componentDatas={info.componentDatas} />;
    case 'template5':
      return <Temp5 componentDatas={info.componentDatas} />;
  };

  
  return <div>404</div>
}; */

// 获取端的类型
export function getDeviceType() {
  var userAgent = navigator.userAgent;

  if (/iPhone|iPod|Android|Windows Phone/i.test(userAgent)) {
    return "Mobile";
  } else if (/iPad/i.test(userAgent)) {
    return "iPad";
  } else {
    return "PC";
  }
}

// 渲染自定义
export function renderTemplateData(templateData) {

  return templateData.elementData.map((item) => {
    if (item.eleType === "img") {
      return (
        <ImgComp
          key={item.id}
          dataObj={item.data}
          canvasWidth={templateData.width}
          canvasHeight={templateData.height}
        />
      );
    } else if (item.eleType === "text") {
      return <TextComp
        key={item.id}
        dataObj={item.data}
        canvasWidth={templateData.width}
        canvasHeight={templateData.height}
      />;
    }
  });
}
