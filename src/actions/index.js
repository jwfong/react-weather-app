import axios from 'axios';

const getURL = function(city, state) {
  return "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather"+
         ".forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20"+
         "where%20text%3D%22"+ city +"%2C%20"+ state +"%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
}


export function fetchWeatherRequest() {
  return {
    type: 'FETCH_WEATHER',
  }
}

export function fetchWeatherSuccess(data) {
  return {
    type: 'FETCH_WEATHER_SUCCESS',
    data
  }
}

export function fetchWeatherError(data) {
  return {
    type: 'FETCH_WEATHER_ERROR',
    data
  }
}

export function storeLocation(city, state) {
  return {
    type: 'STORE_LOCATION',
    city,
    state
  }
}

export function fetchWeather(currentCity, currentState) {
  let url = getURL(currentCity, currentState);
  // console.log(url)
  let weatherInfo = axios.get(url)

  return (dispatch) => {
    dispatch(fetchWeatherRequest());
    dispatch(storeLocation(currentCity, currentState))
    return weatherInfo.then(
      success => dispatch(fetchWeatherSuccess(success))
      // error => dispatch(fetchWeatherError(error))
    )
  }
}