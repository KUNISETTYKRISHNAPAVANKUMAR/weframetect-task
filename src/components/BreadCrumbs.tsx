import { ArrowCircleRight, ArrowForward, ArrowRightSharp } from '@mui/icons-material'
import Link from 'next/link'
import React from 'react'
import "../styles/BreadCrumbs.css"
const BreadCrumbs = () => {
  return (
    <div className="bread-con">

    <div className='breadcrumbs'>
        <Link href="/home">Home</Link>
        <ArrowForward/>
        <Link href="/livebestand">Livebestand</Link>
        <ArrowForward/>
        <Link href="/" className='active'>Cannabis Blüten</Link>
    </div>
    <div className="breadcrumb-right">
        <div>GKV mit Kostenübernahme?</div>
        <button id='breadcrumb-right-btn'>Preisoptionen</button>
    </div>
    </div>
  )
}

export default BreadCrumbs