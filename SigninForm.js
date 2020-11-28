import React,{useState} from 'react'
import LoginForm from './LoginForm'

function SigninForm() {
    const [firstname,setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpswd, setConfirmpswd]= useState("")
    const [signedin, setSignedin]= useState(false)


    const handleFirstnameInput=(event)=>{
        setFirstname(event.target.value)
    }

    const handleLastnameInput=(event)=>{
        setLastname(event.target.value)
    }

    const handleEmailInput=(event)=>{
        setEmail(event.target.value)
    }

    const handlePasswordInput=(event)=>{
        setPassword(event.target.value)
    }

    const handleConfirmpswdInput=(event)=>{
        setConfirmpswd(event.target.value)
    }

    const handleSignedin=(event)=>{
        event.preventDefault()
        if( email==="benten@gmail.com" && password==="9876" && confirmpswd==="9876")
        setSignedin(true)
    }

    const handleSignedout=(event)=>{
        setSignedin(false)
    }

    return (
        <div>
            {signedin
            ?

            <>


            <LoginForm/>
            <button onClick={handleSignedout}>Sign out</button>
            </>
            :
            
            <>
            <form>
            <label>First Name</label>
            <input type="name" value={firstname} onChange={handleFirstnameInput}></input>

            <br></br>
            <label>Last Name</label>
            <input type="name" value={lastname} onChange={handleLastnameInput}></input>
 
            <br></br>
            <label>Email</label>
            <input type="email" value={email} onChange={handleEmailInput}></input>

            <br></br>
            <label>Password</label>
            <input type="password" value={password} onChange={handlePasswordInput}></input>
                
                
            <label>Confirm Password</label>
            <input type="password" value={confirmpswd} onChange={handleConfirmpswdInput}></input>

                <br></br>
            <button onClick={handleSignedin}>Sign in</button>
            
            </form>
            </>
            }
        </div>
    )
}

export default SigninForm
