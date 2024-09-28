import React, {useEffect, useState} from "react";
import {sendRequest} from "../../helpers/sendRequest"
import Meta from "./components/Meta/Meta";
import Forecast from "./components/Forecast/Forecast";
import {API_URL, API_KEY} from "../../config/API.js"
import {monthsArr,daysArr} from "../../config/App.js"

const Weather = ({city="Kyiv"}) => {
	const [forecast, setForecast] = useState([])
	const [meta, setMeta] = useState({})

	useEffect(() => {
		//http://api.weatherapi.com/v1/forecast.json?key=72ba1fa11a3d475e907182935232205&q=Vinnytsya&days=3&aqi=no&alerts=no
		sendRequest(`${API_URL}?key=${API_KEY}&q=${city}&days=3&aqi=no&alerts=no`)
			.then((data) => {
				const {current,forecast, location} = data				
				setMeta({
					city: city,
					cloud: current.cloud,
					humidity: current.humidity,
					feelslike: current.feelslike_c
				});
				const updateForecast = forecast.forecastday.map((item)=>{
						let currentDate = new Date(item.date);
						let weekDay = daysArr[currentDate.getDay()]
						let day = currentDate.getDate();
						let month = monthsArr[currentDate.getMonth()]
						return { 
							date: item.date,
							day: day,
							month: month,
							weekDay: weekDay,
							forecastIcon: item.day.condition.icon,
							forecastText: item.day.condition.text,
							maxTemp: item.day.maxtemp_c
						}
				})
				setForecast(updateForecast);
			})
	}, [])
	
	return (
		<div className="weather-wrapper">
			<Meta
				city={meta?.city}
				cloud={meta?.cloud}
				humidity={meta?.humidity}
				feelslike={meta?.feelslike}
			/>
			<Forecast cards={forecast}/>
		</div>
	)
}

// Weather.defaultPrpos = {
// 	city:"kyiv"
// }

export default Weather;