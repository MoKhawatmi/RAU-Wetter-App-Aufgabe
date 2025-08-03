import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { weatherCodeMap } from '../types/weatherCodeMap';
import type { WeatherCodeInfo } from '../types/weatherCodeMap';

interface CityResult {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    country: string;
}

interface WeatherData {
    temperature: number;
    windspeed: number;
    weathercode: number;
    time: string;
}


const WeatherService: React.FC = () => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState<CityResult[]>([]);
    const [selectedCity, setSelectedCity] = useState<CityResult | null>(null);
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [weatherInfo, setWeatherInfo] = useState<WeatherCodeInfo>({
        condition: 'Unknown',
        iconClass: 'wi-na'
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchSuggestions = async () => {
            if (query.length < 3) {
                setSuggestions([]); 
                return;
            }
            try {
                const res = await axios.get<{ results: CityResult[] }>('https://geocoding-api.open-meteo.com/v1/search', {
                    params: {
                        name: query,
                        count: 5,
                        language: 'en',
                        format: 'json',
                    },
                });
                setSuggestions(res.data.results.filter((result: CityResult) => result.country === "Germany") || []);
            } catch (err) {
                console.error('Error fetching city suggestions:', err);
            }
        };

        const timeout = setTimeout(fetchSuggestions, 300);
        return () => clearTimeout(timeout);
    }, [query]);

    const handleCitySelect = async (city: CityResult) => {
        setSelectedCity(city);
        setSuggestions([]);
        setLoading(true);
        try {
            const res = await axios.get('https://api.open-meteo.com/v1/forecast', {
                params: {
                    latitude: city.latitude,
                    longitude: city.longitude,
                    current_weather: true,
                },
            });
            setWeather(res.data.current_weather);
            if (res.data.current_weather) {
                setWeatherInfo(weatherCodeMap[res.data.current_weather.weathercode])
            }
        } catch (err) {
            console.error('Error fetching weather data:', err);
        } finally {
            setLoading(false);
        }
    };



    return (
        <div className="weather-service p-6 max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">Weather Lookup</h2>
            <div className="relative">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter city name..."
                    className="w-full rounded bg-white block min-w-0 grow my-3 py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                />
                {suggestions.length > 0 && (
                    <ul className="w-full bg-white border rounded shadow mb-4 absolute">
                        {suggestions.map((city) => (
                            <li
                                key={city.id}
                                onClick={() => handleCitySelect(city)}
                                className="cursor-pointer hover:bg-gray-100 p-2"
                            >
                                {city.name}, {city.country}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {loading && <p>Loading weather data...</p>}

            {weather && selectedCity && (
                <div className="weather-info bg-blue-50 p-4 rounded shadow">
                    <h3 className="font-semibold mb-2">Weather in {selectedCity.name}, {selectedCity.country}</h3>
                    <div className="flex flex-row justify-center items-center my-3">
                        <i className={`wi ${weatherInfo.iconClass} text-5xl text-blue-600 mx-3`} />
                        <p className="text-xl font-extrabold">{weatherInfo.condition}</p>
                    </div>
                    <p><strong>Temperature:</strong> {weather.temperature}°C</p>
                    <p><strong>Wind Speed:</strong> {weather.windspeed} km/h</p>
                    <p><strong>Time:</strong> {weather.time.split("T").join(" ")}</p>
                </div>
            )}
        </div>
    );
};

export default WeatherService;
