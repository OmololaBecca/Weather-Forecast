const api ='f8f1bd81386b538512bbd69470d8ffa9';

const fetchApi = async () =>{
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=London&appid=${api}`);
   let fetchedData = await data.json()
   console.log(fetchedData)
}
fetchApi()
