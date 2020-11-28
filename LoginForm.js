import React,{useState} from 'react'
import HomePage from './HomePage'


function LoginForm() {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Loggedin, setLoggedin] = useState(false)

    const handleEmail=(event)=>{
        setEmail(event.target.value)

    }

    const handlePassword=(event)=>{
        setPassword(event.target.value)
    }

    const handleLoggedin=(event)=>{
        event.preventDefault()
        if(Email==="benten@gmail.com"&& Password==="9876")
        setLoggedin(true)
    }

    const handleLoggedout=(event)=>{
        setLoggedin(false)
    }
    return (

        <div>{Loggedin
            ?
            <>

            <p>Hey there! You are logged in!</p>
            <HomePage/>  
            <button onClick={handleLoggedout}>Log out</button>
            </>
            :
            <>
            <form>
              <label>Email</label>
             <input type="Email" value={Email} onChange={handleEmail}></input>

             <label>Password</label>
             <input type="Password" value={Password} onChange={handlePassword}></input>

            <br></br>
            <button onClick={handleLoggedin}>Login</button>

                </form>
                </>}
        </div>
    )
}

export default LoginForm
