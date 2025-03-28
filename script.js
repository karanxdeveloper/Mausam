const apiKey = "24d7b07afdc6a7da79fcacc3c8e1a24f"
const  apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const temp = document.querySelector(".temp");
const city = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

const theme = document.querySelector(".theme")
const main = document.querySelector(".main")
const card = document.querySelector(".card")

const searchBox = document.querySelector(".search-box")
const searchBtn = document.querySelector(".search-btn")

const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(cityName){
    try{

        const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
        let data = await response.json();
        console.log(data);
        
        temp.innerHTML = Math.floor(data.main.temp) + "°C" + ` ${data.weather[0].main}`;
        city.innerHTML = data.name 
        humidity.innerHTML = data.main.humidity + "%";
        wind.innerHTML = data.wind.speed + " km/h";
    console.log(data.weather[0].main);
    console.log(weatherIcon.src);
    
        switch (data.weather[0].main) {
            case "Clouds":
                weatherIcon.src = "images/clouds.png"
                console.log(weatherIcon.src)
                break;
            case "Clear":
                weatherIcon.src = "images/clear.png"
                break;
            case "Drizzle":
                weatherIcon.src = "images/drizzle.png"
                break;
            case "Mist":
                weatherIcon.src = "images/mist.png"
                break;
            case "Rain":
                weatherIcon.src = "images/rain.png"
                break;
            case "Snow":
                weatherIcon.src = "images/snow.png"
                break;
            case "Haze":
                weatherIcon.src = "images/haze.png"
        }
    }catch(error){
        city.innerHTML = "City not found";
        temp.innerHTML = "-- --";
        humidity.innerHTML = "-- --";
        wind.innerHTML = "-- --";
    }
    
    
}

searchBtn.addEventListener("click",(e)=>{

    checkWeather(searchBox.value)

})

let status = true;

function handleTheme(){
    if(status){
        theme.innerHTML = `<i class="ri-moon-line"></i>`
        card.style.backgroundColor = "#029e6f"
        theme.style.backgroundColor = "#029e6f"
        main.style.backgroundColor = "white"
       
        status = !status
    }else{
        theme.innerHTML = `<i class="ri-sun-line"></i>`
        card.style.backgroundColor = "black"
        theme.style.backgroundColor = "black"
        main.style.backgroundColor = "#0b0f16"
        status = !status
    }
     
}

theme.addEventListener("click",()=>{
    handleTheme()
})

