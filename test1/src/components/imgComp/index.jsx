

import React, { useRef, useEffect } from 'react';
import './index.less';

export default function ImgComp(props) {

    const canvasWidth = props.canvasWidth;
    const canvasHeight = props.canvasHeight;
    const divRef = useRef(null);

    useEffect(() => {
       const info = document.querySelector('.customTemplate').getBoundingClientRect();
      /*  const div = divRef.current;
       const value = info.width / canvasWidth;
       const height = value * props.dataObj.style.height;
       const top = value * props.dataObj.style.top;
       div.style.height = height + 'px';
       div.style.top = top + 'px'; */
    
    }, []);

    return <div ref={divRef} className='imgComp' style={{
        width: props.dataObj.style.width + 'px',
        left: props.dataObj.style.left + 'px',
        top: props.dataObj.style.top + 'px',
        transform: `rotate(${props.dataObj.style.rotate}deg)`
    }}
    >
        <img className='img' src={props.dataObj.url} />
    </div>
};


