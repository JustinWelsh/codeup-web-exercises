"use strict";

mapboxgl.accessToken = MAPBOX_API_KEY;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-98.4946, 29.4252], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

$.get("http://api.openweathermap.org/data/2.5/onecall", {
    APPID: OPEN_WEATHER_KEY,
    lat:    29.423017,
    lon:   -98.48527,
    units: "imperial"
}).done(function(data) {
    console.log('The entire response:', data);
    //CURRENT DAY (needs fixing)
    // let date = "Display date";
    // let icon = `<img src="http://openweathermap.org/img/w/[icon].png" alt="">`;
    // let highLowLi = `<li> ${data.daily[0].temp.max}˚F / ${data.daily[0].temp.min}˚F </li>`;
    // let humidityLi = `<li>Humidity: ${data.daily[0].humidity}%</li>`;
    // let windLi = `<li>Wind: ${data.daily[0].wind_speed} mph</li>`;
    // let pressureLi = `<li>Rain: ${data.daily[0].rain * 100}%</li>`;
    // $('#weather').html(date + icon + highLowLi + humidityLi + windLi + pressureLi);

    let html = ""  //acting bucket
    for (let i =0; i <=4; i++) {
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
                    <li><img src="http://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}@2x.png"></li>
                    <li> ${data.daily[i].temp.max}˚F / ${data.daily[i].temp.min}˚F </li>
                    <li>Humidity: ${data.daily[i].humidity}%</li>
                    <li>Wind: ${data.daily[i].wind_speed} mph</li>
                    <li>Rain: ${data.daily[i].rain * 100}%</li>
                </ul>
                </div>`;
        $('#weather-cards').html(html);
    }
});