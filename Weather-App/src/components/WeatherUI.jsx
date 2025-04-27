import React, { useState } from 'react'
import '../components/weather.css';

function WeatherUI() {

    const [input, setInput] = useState("");
    const [weather, setWeather] = useState();
    const [error, setError] = useState('');

    // console.log(weather);
    const apiKey = '78853d13757021c54e0771abdcb98c78';
    const city = `${input}`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    async function weatherAPi() {

        try {
           if (input==="") {
            
            console.log("enter");
            setError("Please enter city name");
            // setTimeout(() => {
            //     setError('');
            // }, 5000);
            
           } else {
            const response = await fetch(apiUrl)
            const data = await response.json();
            if (!response.ok) throw new Error('City not found');
            setWeather(data)
            console.log(data);
            setError('');
            // console.log(data.name);
            // console.log(data.main.temp);
            
           }

        } catch (err) {
            setError(err.message);
            setWeather(null);
        }
    }

    // Convert Kelvin to Celsius
    const kelvinToCelsius = (kelvin) => (kelvin - 273.15).toFixed(2);

      // Get current day name (e.g., "Monday")
      const getDayName = () => {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const today = new Date();
        return daysOfWeek[today.getDay()];
    }

    return (
        <>
            <div className="waether">
                <h1 className='heading'>Weather App</h1>
                <div className='srchinput'>
                    <input className="search" type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button className='btn' onClick={weatherAPi}>search</button>
                   
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {
                    weather && <>
                    <p className='day-name'>{getDayName()}</p>
                     <p className='temp'>{kelvinToCelsius(weather.main.temp)} °C</p>
                     <p className='name'>{weather.name}{" , "}{weather.sys.country}</p>
                     
                     <div>
                     <img className='img'
                            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                            alt={weather.weather[0].description}
                        />
                        <p className='weather-description'>{weather.weather[0].description}</p>
                     </div>
                        
                        <p className="humidity">Humidity{weather.main.humidity}</p>
                        <p className="wind-speed">Speed{weather.wind.speed}</p>
                        <p className="air-pressure">Air Pressure{weather.main.pressure}</p>

                       
                        

                    </>
                }
                
            </div>
        </>
    )
}

export default WeatherUI