"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
  return `${value}°C`;
}
interface RangeSliderProps {
  val: string;  
}
export  const RangeSlider: React.FC<RangeSliderProps> = ({ val }) => {
  const [value, setValue] = React.useState<number[]>([20, 37]);
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <div className="slider">
      
      <Slider sx={{
        width: 250, 
        color:'#62C3C6',
        '& .MuiSlider-thumb': {
          borderRadius: '30px 0',
        }
      }}
      getAriaLabel={() => 'Temperature range'}
      value={value}
      onChange={handleChange}
      getAriaValueText={valuetext}
      />
      <div className="range">
        <div>{value[0]+ ` ${val}`}</div>
        -
        <div>{value[1]+` ${val}`}</div>
      </div>
      </div>
  );
}
