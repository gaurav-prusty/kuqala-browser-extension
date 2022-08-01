import React from 'react';

// API key: 110d21a64bd538309f5f785320d34942
// lat: 28.63
// lon: 77.22

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
    
    navigator.geolocation.getCurrentPosition(success, failure);

    function failure() {
        console.log("nhk");
    }

    function success(pos) {
        lat = pos.coords.latitude;
        lon = pos.coords.longitude;
        weatherUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${apiID}`;
        cityNameUrl = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${apiID}`;
            
        fetch(weatherUrl)
            .then(res=> res.json())
            .then(jsonData=> {
                setTemp(parseFloat(jsonData.main.temp).toFixed(1));
                setIcon(jsonData.weather[0].icon);
                console.log(temp);
            });

        fetch(cityNameUrl)
            .then(res=> res.json())
            .then(jsonData => {
                setCityName(jsonData[0].local_names.en + ", " + jsonData[0].country);
                console.log(cityName);
            }); 
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


