const timeE1=document.getElementById('time');
const dateE1= document.getElementById('date')
const currentWeatherItemsE1= document.getElementById('current-weather-items');
const timezone= document.getElementById('time-zone');
const countryE1= document.getElementById('country');
const weatherforecastE1= document.getElementById('weather-forecast');
const currentTempE1= document.getElementById('current-temp');

const day=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday'];
const month=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'August', 'September', 'October', 'November', 'December'];

const API_KEY="de9febdd9b2cf4fbef220c7bcee43367";

setInterval(()=>{
    const time = newDate();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >=13 ? hour%12:hour
    const minutes = time.getMinutes();
    const ampm = hour>=12 ? "pm" : "am"
}, 1000);

timeE1.innerHTML = hoursIn12HrFormat+ ':' +minutes+ ''+`<span id='am-pm'>${ampm}</span>`

dateE1.innerHTML = day[day]+', '+date+''+month[month]

getWeatherData() 
    navigator.geolocation.getCurrentPosition (( success => {
        
         let {latitude, longitude } = success.coords; 

         fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res=>res.json()).then(data=>{  
         console.log(data);
         showWeatherData(data){
            timezone.innerHTML=data.timezone;
            countryE1.innerHTML=data.lat +'N' +data.lon+ 'E'
         }
        })
    })        
)

let otherDayForecast=""
    data.daily.array.forEach((d, idx) => {
        if(idx==0){
            currentTempE1.innerHTML=`   <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png">
            <div class="temp">Night- ${day.temp.night}"&#176; F </div>
            <div class="temp">Day- ${day.temp.day}"&#176; F</div>`
            
            weatherforecastE1.innerHTML= otherDayForecast
        }else{
            otherDayForecast += `
            <div class="weather-forecast-item">
              <div class="day">${window.moment(day.dt*1000).format('ddd')}</div>
              <img src="http://openweathermap.org/img/wn/{day.weather[0].icon}@2x.png">
              <div class="temp">Night- ${day.temp.night}"&#176; F </div>
              <div class="temp">Day- ${day.temp.day}"&#176; F</div>
            
            
            `
        }
    });

<div class="other">
    <div class ="day">${window.moment(day.dt*1000).format('ddd')}</div>
</div>