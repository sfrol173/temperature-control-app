import React from "react";
import './PageWeatherCity.scss';
import {useParams} from "react-router-dom"
import Weather from "../../compositions/Weather/Weather"
import WidgetWrapper from "../../compositions/WidgetWrapper/WidgetWrapper";

const PageWeatherCity = () =>{
    const {cityName} = useParams();
    
    
    return(
        <WidgetWrapper pageName={`Weather ${cityName}`}>
            <div class="weather__title">{cityName}</div>
            <Weather city={cityName}/>
        </WidgetWrapper>
    )
}

export default PageWeatherCity;