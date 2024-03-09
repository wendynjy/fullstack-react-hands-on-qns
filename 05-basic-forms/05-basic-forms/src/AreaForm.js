import React, {useState} from 'react'

export default function AreaForm(){
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [area, setArea] = useState('');

  const updateWidth = (event) => {
    setWidth(event.target.value);
    calculateArea(event.target.value, height);
  };

  const updateHeight = (event) => {
    setHeight(event.target.value);
    calculateArea(width, event.target.value);
  };

  const calculateArea = (w, h) => {
    const areaResult = w && h ? w * h : '';
    setArea(areaResult);
  };

    return (
      <React.Fragment>
        <div>
          <label>Width:</label>
          <input type="text" value={width} onChange={updateWidth}/>
        </div>
        <div>
          <label>Height:</label>
          <input type="text" value={height} onChange={updateHeight}/>
        </div>
        <div>Area = {area}</div>
      </React.Fragment>
    )

}

