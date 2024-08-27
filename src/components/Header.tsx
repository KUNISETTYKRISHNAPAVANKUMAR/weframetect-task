"use client"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import React, { useRef, useState } from 'react'
import "../styles/Header.css"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  let [page, setPage] = useState("Rezept einlösen");
  let list = ["Rezept einlösen", "Live Bestand", "Videosprechstunde", "FAQs", "Kontakt"];
  let reference = useRef<HTMLDivElement>(null);

  const hideElement = () => {
    if (reference.current) {
      reference.current.style.display = "none";
    }
  }

  const displayElement = () => {
    if (reference.current) {
      reference.current.style.display = "block";
    }
  }

  return (
    <div className='header'>
      <div className="header-search">
        <input type="text" placeholder='Suchen' />
        <SearchOutlinedIcon id="header-search-icon" />
      </div>
        <div className="header-right">
          <div id="hamburger-icon" onClick={() => displayElement()}>
            <MenuIcon />
          </div>
          <div className="header-right-points" ref={reference}>
            <div onClick={() => hideElement()}>
              <CloseIcon id="close-sidebar" />
            </div>
            {
              list.map((eachItem: string, index: number) => {
                return (
                  <div className={`${page === eachItem ? "active" : ""} each-right-point`} key={index} onClick={() => setPage(eachItem)}>
                    <div className={`${page === eachItem ? "right-point-active" : "right-points"}  right-points`}></div>
                    <p className={`${page === eachItem ? "active" : ""} each-right-point-p`}> {eachItem}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="right-bts">
          <div className="right-bts-cart">
            <ShoppingCartOutlinedIcon id="cart" />
            <div id='cart-num'>1</div>
          </div>
          <div className="right-bts-btn">
            Anmelden
          </div>
      </div>
    </div>
  )
}

export default Header;
