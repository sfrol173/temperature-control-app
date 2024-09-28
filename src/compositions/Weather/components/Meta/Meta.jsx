import React from "react";
import Cloud from "./icons/cloud.svg?react"
import Humidity from "./icons/humidity.svg?react"
import Temp from "./icons/temp.svg?react"
import PropTypes from 'prop-types';
import "./Meta.scss"

const Meta = (props) => {
	const {city, cloud, humidity, feelslike} = props;
	return (
		<div className="meta">
			<span className="meta__item"> {city} </span>
			<span className="meta__item meta--cloud">
          <span className="meta__icon">
            <Cloud/>
          </span>
				{cloud}%
        </span>
			<span className="meta__item meta--humidity">
          <span className="meta__icon">
           <Humidity/>
          </span>
				{humidity}%
        </span>
			<span className="meta__item meta--feelslike">
          <span className="meta__icon">
            <Temp/>
          </span>
				{feelslike}
        </span>
		</div>
	)
}

Meta.propTypes = {
	city: PropTypes.string,
	cloud: PropTypes.number,
	humidity: PropTypes.number,
	feelslike: PropTypes.number
}

export default Meta;