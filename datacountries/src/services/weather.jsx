import axios from "axios"
const API_KEY = import.meta.env.VITE_SOME_KEY

const getWeather = (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    const request = axios.get(url)
    return request.then(response => response.data)
}
export default { getWeather }