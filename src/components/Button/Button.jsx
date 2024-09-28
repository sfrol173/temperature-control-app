import React from "react"
import PropTypes from "prop-types"
import cn from "classnames"

import "./Button.scss"

const Button = (props) =>{
    const {className, onClick, type="button", children, ...restProps} = props;
    return(
        <button className= {cn("button", className)} type={type} onClick={onClick} {...restProps}>
                {children}
        </button>
    )
}




Button.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.any,
    restProps: PropTypes.object
}


export default Button;