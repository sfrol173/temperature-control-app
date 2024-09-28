import React from 'react'
import PropTypes from "prop-types"
import ForecastCard from './Forecastcard';
import "./Forecast.scss"

const Forecast = (props) => {
	const {cards} = props;
	return (
		<div className="forecast">
			{cards?.map((card, index) => (
				<ForecastCard
					key={index}
					day={card.day}
					weekDay={card.weekDay}
					month={card.month}
					forecastIcon={card.forecastIcon}
					forecastText={card.forecastText}
					maxTemp={card.maxTemp}
				/>
			))}
		</div>
	)
}

Forecast.propTypes = {
	cards: PropTypes.array
}
export default Forecast;

