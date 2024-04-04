const apiKey = "98cf0e809d970beace1ab487de422805";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
    
        /*
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png"
        } else if(data.weather[0] == "Clear"){
            weatherIcon.src = "images/clear.png"
        }  else if(data.weather[0] == "Rain"){
            weatherIcon.src = "images/rain.png"
        } else if(data.weather[0] == "Drizzle"){
            weatherIcon.src = "images/drizzle.png"
        } else if(data.weather[0] == "Mist"){
            weatherIcon.src = "images/mist.png"
        }
        */
       //switch case to improve the efficiency of the code. 

       const information = data.weather[0].main; // asign data.weather[0].main to a variable, so switch can evaluate the condition.
        switch (information) {
            case "Clouds":
            weatherIcon.src = "images/clouds.png"
            break;
            case "Clear":
            weatherIcon.src = "images/clear.png"
            break;
            case "Rain":
            weatherIcon.src = "images/rain.png"
            break;
            case "Drizzle":
            weatherIcon.src = "images/drizzle.png"
            break;
            case "Mist":
            weatherIcon.src = "images/mist.png"
            break;
            case "Snow":
            weatherIcon.src = "images/snow.png"
            break;
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () =>{
    checkWeather(searchBox.value);
})

checkWeather();
