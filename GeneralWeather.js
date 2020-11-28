import React,{useState} from 'react'
import axios from "axios"

function GeneralWeather() {
    const[random, setRandom]=useState("")
    const [outcome,setOutcome]=useState({})
    const[search, setSearch]=useState([])

    const handleRandomInput=(event)=>{
        setRandom(event.target.value)
    }
    
    const handleSearch=(event)=>{
    axios.get(`http://api.weatherstack.com/current?access_key=e0ce8feaec7c86a971fd8d6cdf17aa1b&query=${random}`)
        .then((res)=> {
            console.log(random)
            setOutcome([res.data.current])
            setSearch([...search,res.data.current])
            setRandom("")

        })

        .catch((err)=>{
            console.error(err)

                
        })
            
    }

    return (
        <div>
            <input value={random} onChange={handleRandomInput}></input>
            <button onClick={handleSearch}>Search Now!</button>
            <ul>
                {outcome.map((outcome=>(
                    
                <li>{outcome.country}
                {outcome.weather_description} {outcome.temperature}</li>)))}
            </ul>
        </div>
    )
}

export default GeneralWeather
