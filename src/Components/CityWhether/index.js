import React from 'react';

const CityWhether = ({cityWeather}) => {
    return (
        <div>
           <p>City Name:{cityWeather?.name}</p>
           <p>Temperature:{cityWeather?.main?.temp}</p>
           <p>Pressure:{cityWeather?.main?.pressure}</p>
           <p>Humidity:{cityWeather?.main?.humidity}</p>
        </div>
    );
};

export default CityWhether;
