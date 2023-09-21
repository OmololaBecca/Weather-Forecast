const api ='f8f1bd81386b538512bbd69470d8ffa9';
const searchIcon =document.getElementById('search-icon')
const city= document.getElementById('location')
const weatherDisplay=document.querySelector('.weather-display-div')
const gifRain=document.querySelector('.rain')
const gifCloud=document.querySelector('.cloud')
const gifSunny=document.querySelector('.sunny')
const gifWind=document.querySelector('.windy')
const gifClearSky=document.querySelector('.clear-sky')
const weatherCondition=document.querySelector('.weather-condition')





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

    // Appending of elements

    let displayCard =document.createElement("div")
    displayCard.className ="displayed-card" 

    let searchedCityWeather=document.createElement("p")
    searchedCityWeather.className="searched-city-weather"

    let degreeAndP =document.createElement("div")
    degreeAndP.className ="degree-div"
    degreeAndP.appendChild(document.createTextNode("18"))

    // let searchedDescp =document.createElement("p")
    // searchedDescp.className ="searched-descp"

    let degree = document.createElement("sup")
    degree.className="degree"
    degree.appendChild(document.createTextNode("0"))
    console.log(degree)

    degreeAndP.appendChild(document.createTextNode("C"))

    let cityName = document.createElement("p")
    cityName.className="city-name"



    //  degreeAndP.appendChild(searchedDescp)
     degreeAndP.appendChild(degree)
     displayCard.appendChild(searchedCityWeather)
     displayCard.appendChild(degreeAndP)
     displayCard.appendChild(cityName)
     weatherDisplay.appendChild(displayCard)



    // storing of the datas in a variable
     let receivedDescp = fetchedData.weather[0].main
     let receivedData = Math.floor(fetchedData.main.temp)
     let cityDataName =fetchedData.name

     
     searchedCityWeather.innerText= receivedDescp;
      degreeAndP.innerText= receivedData;
     cityName.innerText = cityDataName;


     //the changing of the images
 let randomImages=searchedCityWeather.innerText
     if(randomImages=="Clouds"){
       document.body.style.backgroundImage= "url('./Assets/jeremy-thomas-jh2KTqHLMjE-unsplash.jpg')"
       document.body.style.backgroundSize = "cover"
       document.body.style.backgroundRepeat = "no repeat"
       document.body.style.backgroundPosition = "center"
       gifCloud.style.display="block"
     }else if(randomImages=="Rain"){
        document.body.style.backgroundImage = "url('/Assets/raimond-klavins-rxm_S9XmK-Y-unsplash.jpg')"
        searchedCityWeather.style.color="black"
        cityName.style.color="black"
         degreeAndP.style.color="black"
          gifRain.style.display="block"
     }else if(randomImages=="wind"){
       document.body.style.backgroundImage="url"('./Assets/khamkeo-vilaysing-WtwSsqwYlA0-unsplash.jpg')
       gifWind.style.display="block"
       
     }else if(randomImages=="Sunny"){
      document.body.style.backgroundImage ="url('./Assets/aaron-burden-BTubi6qaY6Q-unsplash.jpg')"
      gifSunny.style.display="block"
     }else{
         document.body.style.backgroundImage ="url('./Assets/tom-barrett-hgGplX3PFBg-unsplash.jpg')"
         gifClearSky.style.display="block"
     }
     
    }
    fetchApi()
     
    
})






