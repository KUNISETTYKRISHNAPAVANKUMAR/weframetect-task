import React from 'react'
import bottle from "../images/bottle.png"
import Image from 'next/image'
import "../styles/Product.css"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Pagination } from '@mui/material';
import PaginationSize from './Pagination';

const Product = () => {
    let l = []
    for (let i = 0; i < 9; i++) {
        l.push(i)
    }
    return (
    <div className='product-con-parent'>
        
        <div className='product-con'>
            {
                l.map((eachProduct: number) => {
                    return (
                        <div className='product-card' key={eachProduct}>
                            <div className="card-head">
                                <div className="card-head-left">
                                    <FiberManualRecordIcon className='ellipse' />
                                    <div>nicht lieferbar</div>
                                </div>
                            </div>
                            <div className="card-img">
                                <Image src={bottle} width={300} height={240} alt='image' />
                            </div>
                            <div className="card-body">
                                <div className="card-body-top">
                                    <div className="body-company">
                                        Canify
                                    </div>
                                    <div className="body-chemicals">
                                        <div className="chemical1">THC 18% </div>
                                        <div className="chemical2">CBD 1%</div>
                                    </div>
                                    <div className="body-title">{eachProduct>2&&eachProduct<5?"Cannabis Flos 22/1 PT Ku.Pink Kush DAB Canify":"Cannabis Flos 18/1 PT Mango"}</div>
                                </div>
                                <div className="middle">
                                    <div className='middle-top'>
                                        <div>Kultivar</div>
                                        <div>{eachProduct>2&&eachProduct<5?"Pink Kush":"Mango"}</div>
                                    </div>
                                    <div className="middle-bottom">
                                        <div>Genetik</div>
                                        <div>Hybrid</div>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <div className="price">
                                        <div className="value">
                                            <div className="euro">€ </div>
                                            <div className="value-cost"> 11,66 <span>1</span></div>
                                        </div>
                                        <div className="tag">pro Gramm</div>
                                    </div>
                                    <button className='bottom-btn'>in den Warenkorb</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
            <div id="pagination">
            <PaginationSize/>
            </div>
        </div>
    )
}

export default Product