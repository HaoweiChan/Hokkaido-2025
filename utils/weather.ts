// Simple wrapper for Open-Meteo API
// Docs: https://open-meteo.com/en/docs

interface WeatherResult {
  code: number; // WMO code
  minTemp: number;
  maxTemp: number;
}

export const getWeatherForDate = async (lat: number, lon: number, dateStr: string): Promise<WeatherResult | null> => {
  try {
    // dateStr is like "12/17". We need "2025-12-17"
    const year = new Date().getFullYear();
    const [month, day] = dateStr.split('/');
    const formattedDate = `${year}-${month}-${day}`;

    // Use forecast endpoint for upcoming days
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&start_date=${formattedDate}&end_date=${formattedDate}`;

    const response = await fetch(url);
    const data = await response.json();

    if (!data.daily || !data.daily.weather_code) return null;

    return {
      code: data.daily.weather_code[0],
      minTemp: data.daily.temperature_2m_min[0],
      maxTemp: data.daily.temperature_2m_max[0]
    };
  } catch (error) {
    console.error("Weather fetch failed", error);
    return null;
  }
};

export const getWeatherIconLabel = (code: number): { label: string, icon: string } => {
  // WMO Weather interpretation codes
  // 0: Clear sky
  // 1, 2, 3: Mainly clear, partly cloudy, and overcast
  // 45, 48: Fog
  // 51, 53, 55: Drizzle
  // 61, 63, 65: Rain
  // 71, 73, 75: Snow fall
  // 77: Snow grains
  // 80, 81, 82: Rain showers
  // 85, 86: Snow showers
  // 95: Thunderstorm

  if (code === 0) return { label: '晴天', icon: '☀️' };
  if (code <= 3) return { label: '多雲', icon: '☁️' };
  if (code <= 48) return { label: '霧', icon: '🌫️' };
  if (code <= 67) return { label: '雨', icon: '🌧️' };
  if (code <= 77) return { label: '雪', icon: '❄️' };
  if (code <= 86) return { label: '陣雪', icon: '🌨️' };
  return { label: '雷暴', icon: '⚡' };
};

