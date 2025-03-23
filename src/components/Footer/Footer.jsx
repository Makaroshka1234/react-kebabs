import React from 'react'
import './footer.css'
import { Link } from 'react-router'


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer-top">
                        <ul className="footer__list nav">
                            <li className='footer__list-item'>
                                <h2 className="list-title">Навігація</h2>
                            </li>
                            <li className='footer__list-item'>
                                <Link to={'/aboutUs'} >
                                    <p className="list-title">Про нас</p>
                                </Link>
                            </li>
                            <li className='footer__list-item'>
                                <p className="list-title">Контакти</p>
                            </li>
                            <li className='footer__list-item'>
                                <p className="list-title">Блог</p>
                            </li>
                            <li className='footer__list-item'>
                                <Link to={'/deliveryandpayment'} >
                                    <p className="list-title">Доставка та оплата</p>
                                </Link>
                            </li>
                            <li className='footer__list-item'>
                                <p className="list-title">Вхід</p>
                            </li>
                        </ul>
                        <ul className="footer__list menu">
                            <li className='footer__list-item'>
                                <h2 className="list-title">Меню</h2>
                            </li>
                            <li className='footer__list-item'>
                                <p className="list-title">Кебаб</p>
                            </li>
                            <li className='footer__list-item'>
                                <p className="list-title">Комбо меню</p>
                            </li>
                            <li className='footer__list-item'>
                                <p className="list-title">Страви</p>
                            </li>
                            <li className='footer__list-item'>
                                <p className="list-title">Соуси</p>
                            </li>
                            <li className='footer__list-item'>
                                <p className="list-title">Напої</p>
                            </li>
                        </ul>
                        <div className="footer-center">
                            <img src="/images/footer-logo.svg" alt="" className="footer-logo" />
                            <ul className="footer__social-list">
                                <svg
                                    height="50px"
                                    width="50px"
                                    viewBox="0 0 512 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2 }}
                                    className='social-img'
                                >
                                    <path
                                        d="M512,257.555c0,-141.385 -114.615,-256 -256,-256c-141.385,0 -256,114.615 -256,256c0,127.777 93.616,233.685 216,252.89l0,-178.89l-65,0l0,-74l65,0l0,-56.4c0,-64.16 38.219,-99.6 96.695,-99.6c28.009,0 57.305,5 57.305,5l0,63l-32.281,0c-31.801,0 -41.719,19.733 -41.719,39.978l0,48.022l71,0l-11.35,74l-59.65,0l0,178.89c122.385,-19.205 216,-125.113 216,-252.89Z"
                                        fill="#D72200"
                                    />
                                </svg>

                                <svg
                                    height="50px"
                                    width="50px"
                                    viewBox="0 0 512 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2 }}
                                    className='social-img'
                                >
                                    <path
                                        d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm0,96c-43.453,0 -48.902,0.184 -65.968,0.963c-17.03,0.777 -28.661,3.482 -38.839,7.437c-10.521,4.089 -19.444,9.56 -28.339,18.455c-8.895,8.895 -14.366,17.818 -18.455,28.339c-3.955,10.177 -6.659,21.808 -7.437,38.838c-0.778,17.066 -0.962,22.515 -0.962,65.968c0,43.453 0.184,48.902 0.962,65.968c0.778,17.03 3.482,28.661 7.437,38.838c4.089,10.521 9.56,19.444 18.455,28.34c8.895,8.895 17.818,14.366 28.339,18.455c10.178,3.954 21.809,6.659 38.839,7.436c17.066,0.779 22.515,0.963 65.968,0.963c43.453,0 48.902,-0.184 65.968,-0.963c17.03,-0.777 28.661,-3.482 38.838,-7.436c10.521,-4.089 19.444,-9.56 28.34,-18.455c8.895,-8.896 14.366,-17.819 18.455,-28.34c3.954,-10.177 6.659,-21.808 7.436,-38.838c0.779,-17.066 0.963,-22.515 0.963,-65.968c0,-43.453 -0.184,-48.902 -0.963,-65.968c-0.777,-17.03 -3.482,-28.661 -7.436,-38.838c-4.089,-10.521 -9.56,-19.444 -18.455,-28.339c-8.896,-8.895 -17.819,-14.366 -28.34,-18.455c-10.177,-3.955 -21.808,-6.66 -38.838,-7.437c-17.066,-0.779 -22.515,-0.963 -65.968,-0.963Zm0,28.829c42.722,0 47.782,0.163 64.654,0.933c15.6,0.712 24.071,3.318 29.709,5.509c7.469,2.902 12.799,6.37 18.397,11.969c5.6,5.598 9.067,10.929 11.969,18.397c2.191,5.638 4.798,14.109 5.509,29.709c0.77,16.872 0.933,21.932 0.933,64.654c0,42.722 -0.163,47.782 -0.933,64.654c-0.711,15.6 -3.318,24.071 -5.509,29.709c-2.902,7.469 -6.369,12.799 -11.969,18.397c-5.598,5.6 -10.928,9.067 -18.397,11.969c-5.638,2.191 -14.109,4.798 -29.709,5.509c-16.869,0.77 -21.929,0.933 -64.654,0.933c-42.725,0 -47.784,-0.163 -64.654,-0.933c-15.6,-0.711 -24.071,-3.318 -29.709,-5.509c-7.469,-2.902 -12.799,-6.369 -18.398,-11.969c-5.599,-5.598 -9.066,-10.928 -11.968,-18.397c-2.191,-5.638 -4.798,-14.109 -5.51,-29.709c-0.77,-16.872 -0.932,-21.932 -0.932,-64.654c0,-42.722 0.162,-47.782 0.932,-64.654c0.712,-15.6 3.319,-24.071 5.51,-29.709c2.902,-7.468 6.369,-12.799 11.968,-18.397c5.599,-5.599 10.929,-9.067 18.398,-11.969c5.638,-2.191 14.109,-4.797 29.709,-5.509c16.872,-0.77 21.932,-0.933 64.654,-0.933Zm0,49.009c-45.377,0 -82.162,36.785 -82.162,82.162c0,45.377 36.785,82.162 82.162,82.162c45.377,0 82.162,-36.785 82.162,-82.162c0,-45.377 -36.785,-82.162 -82.162,-82.162Zm0,135.495c-29.455,0 -53.333,-23.878 -53.333,-53.333c0,-29.455 23.878,-53.333 53.333,-53.333c29.455,0 53.333,23.878 53.333,53.333c0,29.455 -23.878,53.333 -53.333,53.333Zm104.609,-138.741c0,10.604 -8.597,19.199 -19.201,19.199c-10.603,0 -19.199,-8.595 -19.199,-19.199c0,-10.604 8.596,-19.2 19.199,-19.2c10.604,0 19.201,8.596 19.201,19.2Z"
                                        fill="#D72200"

                                    />
                                </svg>

                                <svg
                                    height="50px"
                                    width="50px"
                                    viewBox="0 0 496 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className='social-img'

                                >
                                    <path
                                        d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"
                                        fill="#D72200"

                                    />
                                </svg>

                            </ul>
                        </div>
                        <ul className="footer__list">
                            <li className='footer__list-item'>
                                <h2 className="list-title">Контакти</h2>
                            </li>
                            <li className='footer__list-item'>
                                <p className="list-title">Номер доставки <br />  <span>+380 (63) 113 40 49</span></p>
                            </li>
                            <li className='footer__list-item'>
                                <p className="list-title">м. Львів, вул. Галицька 15 <br /><span> +380 (63) 479 96 92</span></p>
                            </li>
                            <li className='footer__list-item'>
                                <p className="list-title">м. Львів, вул. Січових Стрільців 11 <br /> <span> +38 (063) 790 54 50 </span> </p>
                            </li>
                            <li className='footer__list-item'>
                                <p className="list-title">м.Львів площа Міцкевича, 6/7 <br /><span> +38 (063) 790 54 50 </span></p>
                            </li>
                            <li className='footer__list-item'>
                                <p className="list-title">м. Львів, вул. Князя Романа 2 <br /> <span> +38 (063) 790 54 50 </span></p>
                            </li>
                            <li className='footer__list-item'>
                                <p className="list-title">м. Львів, вулиця Садова 2а <br /> <span> +38 (063) 790 54 50 </span></p>
                            </li>
                            <li className='footer__list-item'>
                                <p className="list-title">м. Львів, вул. Іоанна Павла ІІ, 4б (ринок «Шувар») <br /> <span> +38 (063) 790 54 50 </span></p>
                            </li>
                            <li className='footer__list-item'>
                                <p className="list-title">м. Львів, вулиця Чернівецька, 11/13 <br /><span> +38 (063) 790 54 50 </span></p>
                            </li>
                            <li className='footer__list-item'>
                                <p className="list-title">м. Львів, вул. Князя Романа 2 <br /> <span> +38 (063) 790 54 50 </span></p>
                            </li>
                            <li className='footer__list-item'>
                                <p className="list-title">м. Львів, вул. Князя Романа 2 <br /> <span> +38 (063) 790 54 50 </span></p>
                            </li>
                            <li className='footer__list-item'>
                                <p className="list-title">м. Львів, вул. Князя Романа 2 <br /> <span> +38 (063) 790 54 50 </span></p>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-bottom"></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
