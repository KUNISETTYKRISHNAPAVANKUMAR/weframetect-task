"use client"
import React, { useState } from 'react'
import "../styles/LogoSection.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ListIcon from '@mui/icons-material/List';

const LogoSection = () => {
    let [status,setStatus]=useState(true)
    return (
        <div className='logosection'>
            <div className="logo">
                <div></div>
                <h2> Blüten</h2>
            </div>
            <div className="logosection-right">
                <div className="logosection-input-con">
                    <input type="text" placeholder='Suchen' />
                    <SearchOutlinedIcon id="header-search-icon" />
                </div>
                <select>
                    <option value="Sortieren nach">Sortieren nach</option>
                </select>
                <div className="switch" onClick={()=>setStatus(!status)}>
                    Verfügbarkeit
                    {
                        status?<ToggleOnIcon id="on"/>:<ToggleOffIcon id="off"/>
                    }
                </div>
                <div id="hamburger">
                    <ListIcon/>
                </div>
            </div>
        </div>
    )
}

export default LogoSection