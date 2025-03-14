import React from 'react'

import './style.css'


const AnotherProductSection = () => {
    return (
        <section className='another__product'>
            <div className="container">
                <div className="another__product__inner">
                    <h2>Також в нашій мережі</h2>
                    <div className="box">
                        <a href="#">

                            <div className="stake__house-box">
                                <img src="/images/steyk.jpeg" alt="" className="stake-house-img" />
                                <img src="/images/stake-logo.svg" alt="" className='box-logo' />
                            </div>
                        </a>
                        <a href="#">
                            <div className="stake__house-box">
                                <img src="/images/smok.jpeg" alt="" className="stake-house-img" />
                                <img src="/images/bbq-logo.svg" alt="" className='box-logo' />
                            </div>
                        </a>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default AnotherProductSection
