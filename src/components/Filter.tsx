"use client"
import React, { useState } from 'react'
import { RangeSlider } from './Slider'
import "../styles/Filter.css"
import CheckboxLabels from './CheckBox'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ClearIcon from '@mui/icons-material/Clear';

const Filter = () => {
  let [status, setStatus] = useState(true)
  return (
    <div className='filter-con'>
      <div className="filter-head">
        Filter
      </div>
      <div className="toprange">
        <h4>Preis</h4>
        <RangeSlider val="€" />
      </div>
      <div className="filter-checklist">
        <div className="checklist-head">
          <div id='checklist-title'>Hersteller</div>
          <div id='checklist-icon' onClick={() => setStatus(!status)}>{status ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</div></div>
        {status ? <CheckboxLabels /> : ""}
        <button className="checklist-tag">
          mehr anzeigen
        </button>
      </div>
      <div className="range-middle">
        <h4>THC Gehalt</h4>
        <RangeSlider val="%" />
      </div>
      <div className="range-bottom">
        <h4>CBD Gehalt</h4>
        <RangeSlider val="%" />
      </div>
      <div className="filter-middle">
        <h4>Genetik</h4>
        <div className='filter-middle-con'>
          <div id='first'>Indica</div>
          <div>Sativa</div>
          <div>Hybrid</div>
        </div>
      </div>
      <div className="filter-bottom">
        <h4>Bestrahltung</h4>
        <div className="filter-bottom-con">
          <div id="first">bestrahlt</div>
          <div>nicht bestrahlt</div>

        </div>
        <div className="filter-bottom">
          <div className="bottom-checklist-head">
            <div id='checklist-title'>Terpene</div>
            <div id='checklist-icon' >
              <KeyboardArrowDownIcon />
            </div>
          </div>
            <div id="comment">
              <ClearIcon id="cross"/>
              <div>alle Filter zurücksetzen</div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Filter