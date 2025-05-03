import React, { useState } from 'react'
import '../components/weather.css';
import air from '../assets/air.png';
import humidity from '../assets/humidity.png';
import wind from '../assets/wind.png';

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
            if (input === "") {

                // console.log("enter");
                setError("Please enter city name");
                // setTimeout(() => {
                //     setError('');
                // }, 5000);
                setWeather("");

            } else {
                const response = await fetch(apiUrl)
                const data = await response.json();
                if (!response.ok) throw new Error('City not found');
                setWeather(data)
                // console.log(data);
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
    const kelvinToCelsius = (kelvin) => (kelvin - 273.15).toFixed(0);

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
                {error && <p className="error-message">{error}</p>}
                {
                    weather && <>
                        <p className='day-name'>{getDayName()}</p>
                        <p className='temp'>{kelvinToCelsius(weather.main.temp)}°C</p>
                        <p className='name'>{weather.name}{" , "}{weather.sys.country}</p>

                        <div className='imgdes'>
                            <img className='img'
                                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                alt={weather.weather[0].description}
                            />
                            <p className='wdescription'>{weather.weather[0].description}</p>
                        </div>



                        <div className="col">
                            <div className="col1">
                                <div className="card">
                                    <img src={humidity} alt="Humidity" className="icon" />
                                    <p className="value">{weather.main.humidity}%</p>
                                    <p className="label">Humidity</p>
                                </div>

                                <div className="card">
                                    <img src={wind} alt="Wind" className="icon" />
                                    <p className="value">{weather.wind.speed} mps</p>
                                    <p className="label">Wind</p>
                                </div>

                                <div className="card">
                                    <img src={air} alt="Air Pressure" className="icon" />
                                    <p className="value">{weather.main.pressure}</p>
                                    <p className="label">Air</p>
                                </div>
                            </div>
                        </div>




                    </>
                }

            </div>
        </>
    )
}

export default WeatherUI