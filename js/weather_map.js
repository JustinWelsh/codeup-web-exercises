"use strict";
const sanAntonio = {
    lat:    29.423017,
    lon:   -98.48527,
};

const d = new Date();
const weekdayFullWord = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let dayFullWord = weekdayFullWord[d.getDay()];

const weekdayAbbreviated = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
let dayAbbreviated = weekdayAbbreviated[d.getDay()];
console.log(dayAbbreviated);

//API  WEATHER-MAP CALL:
function getWeather(lon = sanAntonio.lon , lat = sanAntonio.lat) {

    $.get("http://api.openweathermap.org/data/2.5/onecall", {
        APPID: OPEN_WEATHER_KEY,
        lat, //Object Property Variable Assignment Shorthand
        lon, //Object Property Variable Assignment Shorthand
        units: "imperial"
    }).done(function (data) {
        console.log('The entire response:', data);


        //CURRENT DAY (MOBILE SIZE)
        let currentDayCard = `<div class='card'>
        <ul>
           <li>City Location</li>
           <li>${data.current.temp.toFixed()}˚</li>
           <li>${dayFullWord}</li>
           <li>${data.current.weather[0].main}</li>
           <li>H ${data.daily[0].temp.max.toFixed()}˚ L ${data.daily[0].temp.min.toFixed()}˚</li>
        </ul>
    </div>`;

        $('#weather-current').html(currentDayCard);

        //ADD: HOURLY FORECAST (MOBILE SIZE)

        //5-DAY FORECAST (MOBILE SIZE)
        let html = ""  //acting bucket
        let dayIndex = d.getDay();
        console.log(dayIndex);

        for (let i = 0; i <= 6; i++) {
            //FIRST ATTEMPT
            // let date = "Display date";
            // // let icon = `<img src="http://openweathermap.org/img/w/[icon].png" alt="">`;
            // let highLowLi = `<li> ${data.daily[i].temp.max}˚F / ${data.daily[i].temp.min}˚F </li>`;
            // let humidityLi = `<li>Humidity: ${data.daily[i].humidity}%</li>`;
            // let windLi = `<li>Wind: ${data.daily[i].wind_speed} mph</li>`;
            // let pressureLi = `<li>Rain: ${data.daily[i].rain * 100}%</li>`
            // let date = "Display date";
            // let icon = `<img src="http://openweathermap.org/img/w/[icon].png" alt="">`;

            html += `
                <div class='card'>
                <ul>
                    <li>${weekdayAbbreviated[dayIndex]}</li>
                    <li><img src="http://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}@2x.png"></li>
                    <li> ${data.daily[i].temp.max.toFixed()}˚F / ${data.daily[i].temp.min.toFixed()}˚F </li>
                    <li>Humidity: ${data.daily[i].humidity}%</li>
                    <li>Wind: ${data.daily[i].wind_speed} mph</li>
                </ul>
                </div>`;
            // <li>Rain: ${data.daily[i].rain * 100}%</li> // Displays "NaN" when no value for rain from API

            $('#weather-cards').html(html);

            dayIndex++;
            if (dayIndex > 6) {
                dayIndex = 0;
            }
        }
    });
}
getWeather();


//API  MAPBOX CALL:
mapboxgl.accessToken = MAPBOX_API_KEY;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-98.4946, 29.4252], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

const marker = new mapboxgl.Marker({
        // color: "#FFFFFF",
        draggable: true
    }).setLngLat([sanAntonio.lon, sanAntonio.lat])
        .addTo(map);

// Old Way:
    // function onDragEnd() {
    //     const lngLat = marker.getLngLat();
    //     getWeather(lngLat.lng , lngLat.lat);
    //     console.log(lngLat.lng , lngLat.lat);
    // }

// Object Destructuring:
    function onDragEnd() {
        const {lng, lat} = marker.getLngLat();
        getWeather(lng, lat);
        console.log(lng, lat);
    }

marker.on('dragend', onDragEnd);

const geoCoder =  new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
});

map.addControl(
   geoCoder
);

const onResult = (result) => {
    console.log(result);

    let searchInput = result.result.center;
    getWeather(searchInput[0], searchInput[1]);
}
geoCoder.on('result', onResult)

