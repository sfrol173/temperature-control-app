### Html структуру

```html
<div class="weather-wrapper">
  <div class="meta">
    <span class="meta__item"> city </span>
    <span class="meta__item meta--cloud">
      <span class="meta__icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="27"
          viewBox="0 0 42 27"
        >
          <path
            d="M33.6 11.4c-1.1-3.2-4-5.3-7.4-5.3-.6 0-1.2.1-1.8.2C22.7 3 19.3.9 15.5.9c-5.5 0-10 4.5-10 10v.6c-3 .9-5.2 3.8-5.2 7.1s1.6 5.7 4.9 7.3c1.3.7 2.5 1 3.4 1h24.3c4.9-.2 8.8-3.6 8.8-7.8 0-3.9-3.5-7.2-8.1-7.7zm-.7 13.5H8.6c-.6 0-1.5-.3-2.6-.8-2.5-1.2-3.7-3-3.7-5.5 0-2.6 1.9-4.9 4.5-5.3l1-.2-.2-1c-.1-.4-.1-.7-.1-1.2 0-4.4 3.6-8 8-8 3.2 0 6.2 2 7.4 5l.3.8.8-.2c.8-.2 1.5-.4 2.2-.4 2.7 0 4.9 1.8 5.6 4.5l.2.7h.7c3.8.2 6.9 2.8 6.9 5.8.1 3.1-2.9 5.6-6.7 5.8z"
          ></path>
        </svg>
      </span>
      cloud%
    </span>
    <span class="meta__item meta--humidity">
      <span class="meta__icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
          <path
            d="M23.476 13.993L16.847 3.437a1.04 1.04 0 00-1.694 0L8.494 14.043A9.986 9.986 0 007 19a9 9 0 0018 0 10.063 10.063 0 00-1.524-5.007zM16 26a7.009 7.009 0 01-7-7 7.978 7.978 0 011.218-3.943l.935-1.49 10.074 10.074A6.977 6.977 0 0116 26.001z"
          ></path>
        </svg>
      </span>
      humidity%
    </span>
    <span class="meta__item meta--feelslike">
      <span class="meta__icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 317.8 317.8"
        >
          <path
            d="M137.6 30.9c.1 8.1 8.1 14.7 18 14.7s17.9-6.6 18-14.7h.1l-.1-.2c0-5.3-13.5-27.3-18.1-27.4-4.6-.1-18 22.1-18 27.4l-.1.2h.2zm-110 110v-.1l-.2.1c-5.3 0-27.3 13.5-27.4 18-.1 4.6 22.1 18 27.4 18l.2.1c8.1-.1 14.7-8.2 14.7-18 0-10-6.6-18-14.7-18.1zM268 74.5h28.9v12.9H268zm0 84.1h49.8v12.9H268zm0-28.1h28.9v12.9H268zM52.2 81v.2l.1-.1c5.9 5.6 16.2 4.6 23.2-2.3 7-7 8-17.3 2.3-23.1l.1-.1h-.2C74 51.9 48.9 45.8 45.6 49c-3.3 3.1 2.8 28.3 6.6 32zm23.3 158.1c-7-7-17.3-8-23.1-2.3l-.1-.1v.2c-3.7 3.7-9.8 28.8-6.6 32.1 3.2 3.3 28.4-2.8 32.1-6.6l.2-.1-.1-.1c5.6-5.8 4.6-16.2-2.4-23.1zM268 102.5h49.8v12.9H268z"
          ></path>
          <path
            d="M243.7 188.6V41.1c0-18.2-14.8-32.9-32.9-32.9-18.2 0-32.9 14.8-32.9 32.9v22.3c-7.1-1.7-14.5-2.7-22.2-2.7-54.2 0-98.3 44.1-98.3 98.3 0 51.2 39.4 93.2 89.5 97.7 1 5.6 2.8 11 5.2 16-8.2 1.4-14.3 7.3-14.4 14.4h-.1l.1.2v.1c0 5.2 13.5 27.3 18 27.3 3.2.1 10.6-10.6 14.9-18.8 11.1 8.8 25.1 14 40.2 14 35.9 0 65.1-29.2 65.1-65.1-.1-23.4-12.3-44.5-32.2-56.2zm-98 55c-42.4-4.9-75.5-40.9-75.5-84.7 0-47.1 38.3-85.4 85.4-85.4 7.7 0 15.1 1.1 22.2 3v112.1c-19.6 11.5-31.7 32.2-32.1 55zm65 53.3c-28.8 0-52.2-23.4-52.2-52.2 0-19.7 11-37.6 28.6-46.5l3.5-1.8V41.1c0-11.1 9-20.1 20.1-20.1 11.1 0 20.1 9 20.1 20.1v155.3l3.5 1.8c17.7 9 28.6 26.8 28.6 46.5 0 28.7-23.4 52.2-52.2 52.2z"
          ></path>
          <path
            d="M221.4 204.6l-2.4-.6V61.1h-16.6V204l-2.4.6c-18.1 4.8-30.8 21.3-30.8 40.1 0 22.9 18.6 41.5 41.5 41.5s41.5-18.6 41.5-41.5c0-18.8-12.6-35.3-30.8-40.1zm-14.9 22.3c-8 1.8-13.8 9.1-13.8 17.3 0 4.6-3.7 8.3-8.3 8.3s-8.3-3.7-8.3-8.3c0-16.1 11-29.9 26.7-33.5 4.5-1 8.9 1.9 9.9 6.3 1.1 4.4-1.7 8.9-6.2 9.9zM268 46.5h49.8v12.9H268z"
          ></path>
        </svg>
      </span>
      feelslike
    </span>
  </div>

  <div class="forecast">
    <div class="forecast__card card--selected">
      <p class="card__data">
        {weekDay} <br />
        {day} {month}
      </p>
      <div class="card__icon">
        <img src="forecastIcon" alt="forecastText" />
      </div>
      <span class="card__temp">{maxTemp}</span>
    </div>
  </div>
</div>
```

#### Props

```js
const props = {
  meta: "obj",
  forecast: "array",
};
```

## Технічні вимоги

Усі частини мають бути зроблені в окремих файлах, компонентах.
Всі дані та функції які необхідні для компонетів потрібно передати з нашого головного компонента.

```js
const data = {
  meta: {
    city: "Kyiv",
    cloud: 46,
    humidity: 46,
    feelslike: 20,
  },
  forecast: [
    {
      weekDay: "Sunday",
      month: "September",
      day: 15,
      forecastIcon: "http://cdn.weatherapi.com/weather/64x64/day/116.png",
      forecastText: "Partly cloudy",
      maxTemp: 23.2,
    },
    {
      weekDay: "Monday",
      month: "September",
      day: 16,
      forecastIcon: "http://cdn.weatherapi.com/weather/64x64/day/116.png",
      forecastText: "Partly cloudy",
      maxTemp: 21.5,
    },
    {
      weekDay: "Tuesday",
      month: "September",
      day: 17,
      forecastIcon: "http://cdn.weatherapi.com/weather/64x64/day/116.png",
      forecastText: "Partly cloudy",
      maxTemp: 23.2,
    },
    {
      weekDay: "Wednesday",
      month: "September",
      day: 18,
      forecastIcon: "http://cdn.weatherapi.com/weather/64x64/day/116.png",
      forecastText: "Partly cloudy",
      maxTemp: 23.2,
    },
    {
      weekDay: "Thursday",
      month: "September",
      day: 19,
      forecastIcon: "http://cdn.weatherapi.com/weather/64x64/day/116.png",
      forecastText: "Partly cloudy",
      maxTemp: 23.2,
    },
  ],
};
```
