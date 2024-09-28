import React from "react";
import PropTypes from 'prop-types';
import cn from 'classnames'
import SideBar from "../../components/SideBar/SideBar";
import Header from "../../components/Header/Header";

import './WidgetWrapper.scss'

const WidgetWrapper = (props) => {
    const {temperature = 20, children, pageName} = props;

    const isHot= temperature > 20;
    const isCold= temperature <= 10;
    const isNeutral= temperature > 10 && temperature <= 20;

    return (
        <div className={cn('widget-container', {'hot': isHot}, {'cold': isCold}, {'neutral': isNeutral})}>
            <Header pageName={pageName}/>
            <SideBar/>
        
            {children}    
        </div>
    )
}

WidgetWrapper.propTypes = {
    temperature: PropTypes.number,
    children: PropTypes.any,
    pageName: PropTypes.string
}

export default WidgetWrapper