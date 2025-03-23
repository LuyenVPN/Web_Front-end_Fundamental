
const weatherData = {
    "Hà Nội": {
        temperature: 25,
        humidity: 79,
        windSpeed: 5,
        description: "CÓ MÂY",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGzZ7V3Pc6iLCdyRewSyi0OFXbNPV98D_iaQ&s"
    },
    "Hồ Chí Minh": {
        temperature: 32,
        humidity: 75,
        windSpeed: 7,
        description: "NẮNG",
        icon: "https://png.pngtree.com/png-clipart/20210710/ourmid/pngtree-summer-cute-element-cartoon-sun-png-image_3551117.jpg"
    },
    "Đà Nẵng": {
        temperature: 28,
        humidity: 82,
        windSpeed: 12,
        description: "MƯA RÀO",
        icon: "https://png.pngtree.com/png-clipart/20210902/ourmid/pngtree-thundershower-severe-weather-in-summer-png-image_3849113.jpg"
    }
};


function getWeather() {
    const cityInput = document.getElementById("cityInput").value.trim();
    const cityName = document.getElementById("cityName");
    const temperature = document.getElementById("temperature");
    const humidity = document.getElementById("humidity");
    const windSpeed = document.getElementById("windSpeed");
    const weatherIcon = document.getElementById("weatherIcon");


    if (weatherData[cityInput]) {
        const cityWeather = weatherData[cityInput];


        cityName.textContent = cityInput;
        temperature.textContent = `${cityWeather.temperature}°C`;
        humidity.textContent = `${cityWeather.humidity}%`;
        windSpeed.textContent = `${cityWeather.windSpeed} km/h`;
        weatherIcon.src = cityWeather.icon;
    } else {
        alert("Không tìm thấy thông tin thời tiết cho thành phố này!");
    }
}

getWeather()