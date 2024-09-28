import React from "react";
import cn from "classnames";
import PropTypes from "prop-types"

const ForecastCard = (props) => {
	const {weekDay, day, month, forecastIcon, forecastText, maxTemp} = props;
	const currentDate = new Date()
	const isSelected = currentDate.getDate() === day;
	return (
		<div className={cn("forecast__card", {"card--selected": isSelected})}>
			<p className="card__data">
				{weekDay} <br/>
				{day} {month}
			</p>
			<div className="card__icon">
				<img src={forecastIcon} alt={forecastText}/>
			</div>
			<span className="card__temp">{maxTemp}</span>
		</div>
	)
}

ForecastCard.propTypes = {
	weekDay: PropTypes.string,
	day: PropTypes.number,
	month: PropTypes.string,
	forecastIcon: PropTypes.string,
	forecastText: PropTypes.string,
	maxTemp: PropTypes.number
}


export default ForecastCard;