const urlWeatherApi = "https://api.openweathermap.org/data/2.5/weather?id=5334223&units=metric&appid=180d290cb4799e855223c718d2f06c4c"
const urlForecastApi = "http://api.openweathermap.org/data/2.5/forecast?id=5334223&units=metric&appid=180d290cb4799e855223c718d2f06c4c"
const weatherDiv1 = document.getElementById("weather-1");
const weatherDiv2 = document.getElementById("weather-2");
const weatherDiv3 = document.getElementById("weather-3");

async function apiFetch(urlWeatherApi,urlForecastApi,weatherDiv1,weatherDiv2,weatherDiv3) {
    try {
        // Weather API Call
        const wResponse = await fetch(urlWeatherApi);
        if (wResponse.ok) {
            const weatherData = await wResponse.json();
            displayWeatherData(weatherData,weatherDiv1);
            displayLongWeatherData(weatherData,weatherDiv1);
      } else {
          throw Error(await wResponse.text());
      }
    } catch (error) {
        console.log(error);
    };

    try {
        // Forecast API Call
        const fResponse = await fetch(urlForecastApi);
        if (fResponse.ok) {
            const weatherData = await fResponse.json();
            console.log(weatherData)
            displayWeatherData(weatherData.list[4],weatherDiv2);
            displayWeatherData(weatherData.list[12],weatherDiv3);
      } else {
          throw Error(await fResponse.text());
      }
    } catch (error) {
        console.log(error);
    };
  }

// Display Day, Icon, Temperature on document
function displayWeatherData(weatherApiData,weatherDiv){    
    let day = document.createElement("h2");
    let weatherIcon = document.createElement("img");
    let temperature = document.createElement("h3");

    
    //Set and display Day
    if(weatherApiData.dt_txt != null){
        day.textContent = getWeekDay(weatherApiData.dt_txt);
    } else {
        let today = new Date(Date.now());
        day.textContent = convertDay(today.getDay());
    }
    
    
    
    // Set Icon
    weatherIcon.setAttribute('src', `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weatherApiData.weather[0].icon}.svg`);
    //
    //weatherIcon.setAttribute('src', `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weatherApiData.weather[0].icon}.svg`);
    weatherIcon.setAttribute('alt', capitalize(weatherApiData.weather[0].description));
    // Set Temperature
    temperature.textContent = `${weatherApiData.main.temp.toFixed(0)} °C`;

  
    // Display Elements
    weatherDiv.appendChild(day);
    weatherDiv.appendChild(weatherIcon);
    weatherDiv.appendChild(temperature);
    
}

// Display Condition and Humidity on document
function displayLongWeatherData(weatherApiData,weatherDiv){
    let condition = document.createElement("span");
    let humidity = document.createElement("span");

    // Set Condition
    condition.textContent = capitalize(weatherApiData.weather[0].description);
    // Set Humidity
    humidity.textContent = `Humidity: %${weatherApiData.main.humidity}`

    // Display Elements
    weatherDiv.appendChild(condition);
    weatherDiv.appendChild(humidity);
}


// Get Day from Date object
function getWeekDay(dayText){
    let day = new Date(dayText);
    day = convertDay(day.getDay());
    return day;
}

// Convert Date object to Day
function convertDay(date){
    switch(date) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";                            
        case 6:
            return "Saturday";                    
    }
}

// Capitalize string
function capitalize(string){
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
  }


// Call Fetch Function
apiFetch(urlWeatherApi,urlForecastApi,weatherDiv1,weatherDiv2,weatherDiv3);