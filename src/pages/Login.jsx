import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props) {
  const navigate = useNavigate()
  const [eusername, setEusername] = useState()
  const [epassword, setEpassword] = useState()
  const [ruser, setRuser] = useState(true)


  const users = props.users


  function HandleUinput(evt) {
    setEusername(evt.target.value)
  }

  function HandlePinput(evt) {
    setEpassword(evt.target.value)

  }
  function Checkuser() {
    console.log(users)
    var userfound = false

    users.forEach(function (item) {
      if (item.username === eusername && item.password === epassword) {
        console.log("login successsful")
        userfound = true
        navigate('/Landing', { state: { user: eusername } })

      }

    })
    if (userfound === false) {
      console.log("login failed")
      setRuser(false)

    }

  }

  return (
    <div className="bg-black p-10 ">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey Hi</h1>
        {ruser ? <p>I help you manage activities after you login: </p> : <p className="text-red-500">Please sign in before you login</p>}

        <div className="flex flex-col gap-2 my-2">
          <input
            className="w-52 boorder-black p-1 bg-transparent border rounded-md" type="text"
            placeholder="username" onChange={HandleUinput} />
          <input
            className="w-52 boorder-black p-1 bg-transparent border rounded-md" type="text"
            placeholder="password" onChange={HandlePinput} />

          <button className="bg-[#8272DA] w-24 p-1 rounded-md " onClick={Checkuser}>Login</button>
          <p>Don't have an account? <Link to={"/signup"} className="underline">Sign Up</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login