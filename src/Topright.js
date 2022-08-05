import axios from 'axios';
import React from 'react';

// API key: 110d21a64bd538309f5f785320d34942

let lat = 0;
let lon = 0;
let weatherUrl = "";
let cityNameUrl = "";
const apiID = "110d21a64bd538309f5f785320d34942";

function Topright() {
    let [temp, setTemp] = React.useState(0);
    let [icon, setIcon] = React.useState("");
    let [cityName, setCityName] = React.useState("");
    
    let weatherIconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    
    //initialise geolocation API
    navigator.geolocation.getCurrentPosition(success, failure);

    //-->failure code
    function failure() {
        alert("Enable location access!");
    }

    //-->success code; latitude and longitude fetch
    function success(pos) {
        //Bangalore lat-lon; uncomment :32,33 for live weather data 
        // lat = 12.9716;
        // lon = 77.5946;
        lat = pos.coords.latitude;
        lon = pos.coords.longitude;

        weatherUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${apiID}`;
        cityNameUrl = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${apiID}`;

        //weather data fetch from API
        axios.get(weatherUrl)
            .then(res=> {
                setTemp(parseFloat(res.data.main.temp).toFixed(0));
                setIcon(res.data.weather[0].icon);              //change: 1--> 0 if no image rendered.
            })

        axios.get(cityNameUrl)
            .then(res=> {
                setCityName(res.data[0].name + ", " + res.data[0].country);
            })
     }

    return (  
        <div className='top-right'>
            <img className='weather-icon' src={weatherIconUrl} ></img>
            <p className='weather-info temp'>{temp}&#176;</p>
            <p className='weather-info loc'>{cityName}</p>
        </div>
        
    );
}


export default Topright;


