{
    const cityInput = document.getElementById("cityInput");
    const getWeatherButton = document.getElementById("getWeatherButton");
    const locationInfoContainer = document.getElementById("locationInfoContainer");
    const forecastContainer = document.getElementById("forecastContainer");

    locationInfoContainer.setAttribute("class", "container");
    forecastContainer.setAttribute("class", "container");

    getWeatherButton.onclick = getWeather;

    function getWeather() {

        const city = cityInput.value;
        const URL = `https://api.weatherapi.com/v1/forecast.json?key=e55f7ca4efdc49f2a3574844212109&q=${city}&days=3&aqi=no&alerts=no`;

        const xhr = new XMLHttpRequest();
    
        xhr.open('GET', URL);
        xhr.send();        
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4) {
                if (xhr.status === 200){
                    const weather = JSON.parse(xhr.responseText);
                    displayWeather(weather);
                } else {
                    console.log("Oops, something went wrong!");
                }
            }
        }
    }

    function displayWeather(weather){
        
        while (locationInfoContainer.firstChild){
            locationInfoContainer.removeChild(locationInfoContainer.lastChild);
        }
        while (forecastContainer.firstChild){
            forecastContainer.removeChild(forecastContainer.lastChild);
        }

        const locationInfoHeader = document.createElement("h2");
        locationInfoHeader.innerHTML = "Current location information";
        locationInfoContainer.appendChild(locationInfoHeader);

        const conditionImageContainer = document.createElement("div");
        const conditionImage = document.createElement("img");
        conditionImage.setAttribute("src", `https:${weather.current.condition.icon}`);
        conditionImageContainer.appendChild(conditionImage);
        locationInfoContainer.appendChild(conditionImageContainer);

        locationInfoContainer.appendChild(createInformationRow("City:", weather.location.name, false));
        locationInfoContainer.appendChild(createInformationRow("Region:", weather.location.region, false));
        locationInfoContainer.appendChild(createInformationRow("Country:", weather.location.country, false));
        locationInfoContainer.appendChild(createInformationRow("Temperature:", `${weather.current.temp_c} °C`, false));
        locationInfoContainer.appendChild(createInformationRow("Wind speed:", `${weather.current.wind_kph} kph`, false));
        locationInfoContainer.appendChild(createInformationRow("Condition: ", weather.current.condition.text, false));

        const forecastHeader = document.createElement("h2");
        forecastHeader.innerHTML = "Weather forecast";
        forecastContainer.appendChild(forecastHeader);

        const forecastFlexbox = document.createElement("div");
        forecastFlexbox.setAttribute("class", "forecast");

        weather.forecast.forecastday.forEach(day => {
            forecastFlexbox.appendChild(createForecastCard(day));
        });

        forecastContainer.appendChild(forecastFlexbox);
    }

    function createInformationRow(fieldName, value, forecast){

        const row = document.createElement("div");
        row.setAttribute("class", "row");

        const col25 = document.createElement("div");
        const col75 = document.createElement("div");

        if (forecast){
            col25.setAttribute("class", "col-25Card");
            col75.setAttribute("class", "col-75Card");
        } else {
            col75.setAttribute("class", "col-75");
            col25.setAttribute("class", "col-25");
        }

        const fieldNameElement = document.createElement("span");
        fieldNameElement.innerHTML = fieldName;

        const valueElement = document.createElement("span");
        valueElement.innerHTML = value;

        col25.appendChild(fieldNameElement);
        col75.appendChild(valueElement);

        row.appendChild(col25);
        row.appendChild(col75);

        return row  ;
    }

    function createForecastCard(day){

        console.log(day);

        const card = document.createElement("div");
        card.setAttribute("class", "card");

        const textImgContainer = document.createElement("div");
            
        const conditionImage = document.createElement("img");
        conditionImage.setAttribute("src", `https:${day.day.condition.icon}`);
        textImgContainer.appendChild(conditionImage);
        
        textImgContainer.appendChild(createInformationRow("Date:", day.date, true));
        textImgContainer.appendChild(createInformationRow("Condition:", day.day.condition.text, true));
        textImgContainer.appendChild(createInformationRow("Temperature:", `${day.day.avgtemp_c} °C`, true));
        textImgContainer.appendChild(createInformationRow("Chance of rain:", `${day.day.daily_chance_of_rain} %`, true));
        textImgContainer.appendChild(createInformationRow("Wind speed: ", `${day.day.maxwind_kph} kph`, true));

        card.appendChild(textImgContainer);

        return card;
    }
}
