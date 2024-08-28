

import React, { useRef, useEffect } from 'react';
import './index.less';


export default function TextComp(props) {

    const canvasWidth = props.canvasWidth;
    const canvasHeight = props.canvasHeight;
    const divRef = useRef(null);

    useEffect(() => {
        const info = document.querySelector('.customTemplate').getBoundingClientRect();

        /* const div = divRef.current;
        const value = info.width / canvasWidth;
        const height = value * props.dataObj.style.height;
        const top = value * props.dataObj.style.top;
        div.style.height = height + 'px';
        div.style.top = top + 'px';
        div.style.left = props.dataObj.style.left * (info.width / canvasWidth) + 1 + 'px'; */
    }, []);

    return <div
        ref={divRef}
        className='textComp'
        style={{
            width: props.dataObj.style.width + 'px',
            height: props.dataObj.style.height + 'px',
            left: props.dataObj.style.left + 'px',
            top: props.dataObj.style.top + 'px', 
            transform: `rotate(${props.dataObj.style.rotate}deg)`,
            textAlign: props.dataObj.style.textAlign,
            letterSpacing: props.dataObj.style.letterSpacing + 'px',
            writingMode: props.dataObj.style.writingMode ? 'vertical-lr' : 'initial',
            lineHeight: props.dataObj.style.lineHeight,
        }}
        dangerouslySetInnerHTML={{ __html: props.dataObj.text }}></div>
}


// 转换字体大小
function convertPxToVw(htmlString) {
    const value = 10.8108;
    return htmlString.replace(/font-size:\s*(\d+)px/gi, function (match, p1) {
        const fontSize = p1 / value;
        return `font-size: ${fontSize.toFixed(2)}vw;`;
    });
}