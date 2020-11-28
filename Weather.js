import React , {useEffect,useState} from 'react'
import axios from "axios"

function Weather() {
    const[location,setlocation]=useState({})
    const[current,setCurrent]=useState({})
 
    
    useEffect(() => {
        axios.get("http://api.weatherstack.com/current?access_key=b6f07c666ca63011388c4ae9702ed6c6&query=Accra")
        .then((res) => {
            console.log(res.data)
            setlocation([res.data.location])
            setCurrent([res.data.current])
            

            
        })
        .catch((err)=>{
            console.error(err)
        })
        },[])
        
    return (
        <div>

             Hey there,in { location.name } it is currently
            { current.weather_descriptions } and the temperature here is{ current.temperature}
        
        </div>

    )
}

export default Weather
