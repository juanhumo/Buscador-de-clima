let weather = {
    "apiKey":"6ec6130360ef0c0a8405d52ffaf7b224",
    fetchWeather:function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + this.apiKey
        )
        .then((response)=>response.json())
        .then((data)=>this.displayWeather(data));
    },
    displayWeather: function(data){
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name, icon, description,temp, humidity, speed)
        document.querySelector(".city").textContent = "Clima en " + name;
        document.querySelector(".icon").src = ""
    }
};

