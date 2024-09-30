import React from "react";
import Container from "../../components/Container/Container"
import "./PageWeatherDashboard.scss"
import {Link} from "react-router-dom" 
import WidgetWrapper from "../../compositions/WidgetWrapper/WidgetWrapper";

const citys = [
    { city: "Vinnytsya", name: "Винница" },
    { city: "Poltava", name: "Полтава" },
    { city: "Kharkiv", name: "Харьков" },
    { city: "Lugansk", name: "Луганск" }, //
    { city: "Rivne", name: "Ровно" },
    { city: "Kherson", name: "Херсон" },
    { city: "Donetsk", name: "Донецк" }, //
    { city: "Lutsk", name: "Луцк" },
    { city: "Khmelnytskyi", name: "Хмельницкий" },
    { city: "Zhytomyr", name: "Житомир" },
    { city: "Lviv", name: "Львов" },
    { city: "Sumy", name: "Сумы" },
    { city: "Cherkassy", name: "Черкассы" },
    { city: "Zaporizhia", name: "Запорожье" },
    { city: "Nikolaev", name: "Николаев" }, //
    { city: "Ternopil", name: "Тернополь" },
    { city: "Chernigiiv", name: "Чернигов" },
    { city: "Odessa", name: "Одесса" },
    { city: "Uzhhorod", name: "Ужгород" },
    { city: "Chernivtsi", name: "Черновцы" },
    { city: "Kyiv", name: "Киев" },
  ];

const PageWeatherDashboard = () =>{
    return(
        <WidgetWrapper pageName={"Weather dashboard"}> 
            <div className="weather-dashboard">
                <Container>
                    <div className="weathers">
                        {citys.map(({city, name }, index)=>{
                            return <Link key={index} to={city} className="weather-card">{name}</Link>
                        })}
                    </div>
                </Container>
            </div>
        </WidgetWrapper>
    )
}
export default PageWeatherDashboard 
