export interface WeatherCodeInfo {
  condition: string;
  iconClass: string;
}

export const weatherCodeMap: Record<number, WeatherCodeInfo> = {
  0: { condition: 'Clear sky', iconClass: 'wi-day-sunny' },
  1: { condition: 'Mainly clear', iconClass: 'wi-day-sunny-overcast' },
  2: { condition: 'Partly cloudy', iconClass: 'wi-day-cloudy' },
  3: { condition: 'Overcast', iconClass: 'wi-cloudy' },
  45: { condition: 'Fog', iconClass: 'wi-fog' },
  48: { condition: 'Depositing rime fog', iconClass: 'wi-fog' },
  51: { condition: 'Light drizzle', iconClass: 'wi-sprinkle' },
  53: { condition: 'Moderate drizzle', iconClass: 'wi-sprinkle' },
  55: { condition: 'Dense drizzle', iconClass: 'wi-showers' },
  56: { condition: 'Freezing light drizzle', iconClass: 'wi-snow' },
  57: { condition: 'Freezing dense drizzle', iconClass: 'wi-snow' },
  61: { condition: 'Slight rain', iconClass: 'wi-rain' },
  63: { condition: 'Moderate rain', iconClass: 'wi-rain' },
  65: { condition: 'Heavy rain', iconClass: 'wi-rain-wind' },
  66: { condition: 'Freezing light rain', iconClass: 'wi-rain-mix' },
  67: { condition: 'Freezing heavy rain', iconClass: 'wi-rain-mix' },
  71: { condition: 'Slight snow fall', iconClass: 'wi-snow' },
  73: { condition: 'Moderate snow fall', iconClass: 'wi-snow' },
  75: { condition: 'Heavy snow fall', iconClass: 'wi-snow-wind' },
  77: { condition: 'Snow grains', iconClass: 'wi-snow' },
  80: { condition: 'Slight rain showers', iconClass: 'wi-showers' },
  81: { condition: 'Moderate rain showers', iconClass: 'wi-showers' },
  82: { condition: 'Violent rain showers', iconClass: 'wi-thunderstorm' },
  85: { condition: 'Slight snow showers', iconClass: 'wi-snow' },
  86: { condition: 'Heavy snow showers', iconClass: 'wi-snow-wind' },
  95: { condition: 'Thunderstorm', iconClass: 'wi-thunderstorm' },
  96: { condition: 'Thunderstorm with slight hail', iconClass: 'wi-storm-showers' },
  99: { condition: 'Thunderstorm with heavy hail', iconClass: 'wi-hail' },
};
