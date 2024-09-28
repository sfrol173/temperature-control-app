import React from "react";
import PropTypes from "prop-types";
import {monthsArr,daysArr} from "../../config/App.js";
import './Header.scss';
import { useNavigate, useLocation} from 'react-router-dom'
import RightArrow from './icons/right-arrow.svg?react'

const Header = ({pageName}) => {
    const currentDate = new Date();
    const days = daysArr[currentDate.getDay()];//[0-6]
    const day = currentDate.getDate(); //[1-31]
    const months = monthsArr[currentDate.getMonth()];//[0-11]
    const navigate = useNavigate()
    const {pathname} = useLocation()

    const backPage = () => navigate(-1)
    const hasRoot = pathname === '/'

    return (
        <div className="header-wrapper">
            { !hasRoot && (
                <div className="header__page-name">
                    <span className="btn-back" onClick={backPage}>
                        <RightArrow/>
                    </span>
                    {pageName}
                </div>
            )}
            <div className="header">
                <div className="current-date">
                    <p className="day">{days}</p>
                    <p className="data">{day} {months}</p>
                </div>
            </div>
        </div>
    )
}

Header.propTypes = {
    pageName: PropTypes.string
}

export default Header
