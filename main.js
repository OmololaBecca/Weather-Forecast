const api ='f8f1bd81386b538512bbd69470d8ffa9';
const searchIcon =document.getElementById('search-icon')
const city= document.getElementById('location')
const weatherDisplay=document.querySelector('.weather-display-div')
const searchedCityWeather=document.querySelector('.searched-city-weather')
const degreeAndP=document.querySelector('.degree-div')
const cityName=document.querySelector('.city-name')
const gifRain=document.querySelector('.rain')
const gifCloud=document.querySelector('.cloud')
const gifSunny=document.querySelector('.sunny')
const gifWind=document.querySelector('.windy')
const gifClearSky=document.querySelector('.clear-sky')
const weatherCondition=document.querySelector('.weather-condition')
const errorTag=document.querySelector('.error-tag')
const degreeTag=document.querySelector('.pee-degree')
const weatherTag=document.querySelector('.weather-p')





searchIcon.addEventListener('click' ,() =>{
  
    const fetchApi = async () =>{
        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city.value}&appid=${api}`);
       let fetchedData = await data.json()
       console.log(fetchedData)
    //    console.log(fetchedData.weather[0].description)
    //    console.log(fetchedData.name)
    //    console.log(fetchedData.sys.country)
    
    //    let searchLocation = fetchedData.name;
    //    let searchCountry = fetchedData.sys.country;
    
    //    console.log(`${searchLocation}, ${searchCountry}`) 

// error handling message
    if (fetchedData.message =="city not found"){
      errorTag.innerHTML ="city not found"
      console.log("not found")
    }else{
      errorTag.innerHTML =""
    }

    // storing of the datas in a variable
     let receivedDescp = fetchedData.weather[0].main
     let receivedData = Math.floor(fetchedData.main.temp)
     let cityDataName =fetchedData.name

     
     searchedCityWeather.innerHTML= receivedDescp;
      degreeAndP.innerHTML= receivedData;
     cityName.innerHTML = cityDataName;


     //the changing of the images
 let randomImages=searchedCityWeather.innerText
     if(randomImages=="Clouds"){
       document.body.style.backgroundImage= "url('./Assets/jeremy-thomas-jh2KTqHLMjE-unsplash.jpg')"
       document.body.style.backgroundSize = "cover"
       document.body.style.backgroundRepeat = "no repeat"
       document.body.style.backgroundPosition = "center"
       gifCloud.style.display="block"
       gifRain.style.display="none"
       gifWind.style.display="none"
       gifSunny.style.display="none"
       gifClearSky.style.display="none"
       degreeTag.style.display ="block"
       weatherTag.style.display="block"
     }else if(randomImages=="Rain"){
        document.body.style.backgroundImage = "url('/Assets/raimond-klavins-rxm_S9XmK-Y-unsplash.jpg')"
        searchedCityWeather.style.color="black"
        cityName.style.color="black"
         degreeAndP.style.color="black"
          gifRain.style.display="block"
          gifCloud.style.display="none"
          gifWind.style.display="none"
       gifSunny.style.display="none"
       gifClearSky.style.display="none"
       degreeTag.style.display ="block"
       weatherTag.style.display="block"

     }else if(randomImages=="wind"){
       document.body.style.backgroundImage="url"('./Assets/khamkeo-vilaysing-WtwSsqwYlA0-unsplash.jpg')
       gifWind.style.display="block"
       gifRain.style.display="none"
       gifCloud.style.display="none"
       gifSunny.style.display="none"
       gifClearSky.style.display="none"
       degreeTag.style.display ="block"
       weatherTag.style.display="block"
       
     }else if(randomImages=="Sunny"){
      document.body.style.backgroundImage ="url('./Assets/aaron-burden-BTubi6qaY6Q-unsplash.jpg')"
      gifSunny.style.display="block"
      gifWind.style.display="none"
      gifRain.style.display="none"
      gifCloud.style.display="none"
       gifClearSky.style.display="none"
       degreeTag.style.display ="block"
       weatherTag.style.display="block"
     }else{
         document.body.style.backgroundImage ="url('./Assets/tom-barrett-hgGplX3PFBg-unsplash.jpg')"
         gifClearSky.style.display="block"
         gifSunny.style.display="none"
      gifWind.style.display="none"
      gifRain.style.display="none"
      gifCloud.style.display="none"
      degreeTag.style.display ="block"
      weatherTag.style.display="block"
     }
     
    }
    fetchApi()
     
    
})






