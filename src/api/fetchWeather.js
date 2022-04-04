const API_KEY = "433d77afc2dc2d65b828fd53e8fc94d4";

export const fetchWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
