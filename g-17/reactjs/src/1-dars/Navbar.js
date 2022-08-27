import React from 'react'
import { useState } from 'react'

export const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const toggle = () => setMenu(!menu);
    return (
        <nav>

            <div className="nav-menu">
                <div className="nav-logo">
                    <a href="#">
                        <svg width="85" className='svg' height="13" viewBox="0 0 85 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.40593 4.26198C4.53687 4.2482 4.64692 4.16832 4.70058 4.04783L6.50009 0L8.2996 4.04756C8.35295 4.16806 8.46301 4.24793 8.59425 4.26172L13 4.72229L9.70651 7.68458C9.60847 7.7726 9.56649 7.90197 9.59374 8.03114L10.5171 12.3634L6.68205 10.1464C6.56792 10.0804 6.43187 10.0806 6.31774 10.1464L2.48269 12.3634L3.40605 8.03114C3.43351 7.90208 3.39143 7.7725 3.29349 7.68469L0 4.72239L4.40593 4.26198Z" />
                           
                        </svg>
                    </a>
                </div>
                <button className={menu ? "menu activ" : "menu"} onClick={toggle}>

                </button>
            </div>
            <ul className={menu ? "nav-item activ" : "nav-item"}>
                <li className="nav-link"><a href="#">Home</a></li>
                <li className="nav-link"><a href="#">Contact</a></li>
                <li className="nav-link"><a href="#">Portfolio</a></li>
            </ul>
        </nav>
    )
}
