import React from 'react'
import "../styles/Footer.css"

const Footer = () => {
    let list = ["Rezept einlösen", "Live Bestand", "Videosprechstunde", "FAQs", "Kontakt"];

    return (
        <div className='footer'>
            <div className="footer-con">

            <div className='part1'>
                <div className="dark">AGB</div>
                <div className="dark">Impressum</div>
                <div className="dark">Datenschutz</div>
            </div>
            <div className='part2 light'>
                {
                    list.map((eachItem: string, index: number) => {
                        return (
                            <div className="part2-con" key={index}>
                                <div className="footer-div"></div>
                                <p className=""> {eachItem}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className='part3'>
                <div className="dark">Standort</div>
                <div className="light">hi</div>
            </div>
            <div className='part4'>
                <div className="dark">Telefon</div>
                <div className="light">0223 545 5250</div>
            </div>
            <div className='part5'>
                <div className="dark">Öffnungszeiten<div>Mo-Fr</div></div>
                <div className="light">09:00 – 18:00 Uhr</div>
                <div className="dark">Sa</div>
                <div className="light">09:00 – 14:00 Uhr</div>
            </div>
                </div>
        </div>
    )
}

export default Footer;
