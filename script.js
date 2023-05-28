function getWeather() {
    let cityName = document.getElementById("cityName").value;
    let url = `https://api.weatherapi.com/v1/current.json?key=8033e3dc0dba43518a650350233004 &q=${cityName}&aqi=yes`
    // Make a request for a user with a given ID
    axios.get(url)
        .then((response)=> {
            // handle success
            let weatherData = response.data;
            console.log(weatherData);
            document.getElementById("info").innerHTML = weatherData = `
                <p>Location: ${response.data.location.name}, ${response.data.location.region}, ${response.data.location.country}</p>
                <p>Current Temperature: ${response.data.current.temp_c} &#8451;</p>
                <p>Current Condition: ${response.data.current.condition.text}</p>
                <p>Humidity: ${response.data.current.humidity}%</p>
            `

        })
        .catch( (error)=>{
            // handle error
            console.log(error);
        })
}