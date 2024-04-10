import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Signup(props) {
  const navigate = useNavigate()
  const users = props.users
  const setuser = props.setuser

  const [eusername, setEusername] = useState()
  const [epassword, setEpassword] = useState()

  function HandleUinput(evt) {
    setEusername(evt.target.value)
  }

  function HandlePinput(evt) {
    setEpassword(evt.target.value)

  }
  function Adduser() {
    setuser([...users, { username: eusername, password: epassword }])
    navigate("/")
  }
  return (
    <div className="bg-black p-10 ">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey Hi</h1>
        <p>Sign up here:</p>

        <div className="flex flex-col gap-2 my-2">
          <input
            className="w-52 boorder-black p-1 bg-transparent border rounded-md" type="text"
            placeholder="username" onChange={HandleUinput} />
          <input
            className="w-52 boorder-black p-1 bg-transparent border rounded-md" type="text"
            placeholder="password" onChange={HandlePinput} />
          <input
            className="w-52 boorder-black p-1 bg-transparent border rounded-md" type="text"
            placeholder="confirm password" />
          <button className="bg-[#FCA201] w-24 p-1 rounded-md " onClick={Adduser}>Sign Up</button>
          <p>Already have an account? <Link to={"/"} className="underline">Login</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Signup