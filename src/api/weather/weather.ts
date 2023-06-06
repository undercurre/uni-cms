import type * as WeatherModel from './weather.model'
import prerequest from '@/utils/request'

class WeatherService {
  // 获取列表
  static getWeather() {
    return prerequest.get<WeatherModel.GetWeatherResp>(
      'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly',
      {
        params: {
          lat: '35.5',
          lon: '-78.5',
        },
        header: {
          'X-RapidAPI-Key':
            '94a53686ecmshb1da8c5a9629feep1096a5jsnf2f80e73552f',
          'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
        },
      },
    )
  }
}

export default WeatherService
