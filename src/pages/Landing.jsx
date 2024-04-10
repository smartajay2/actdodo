import Header from "../components/Header.jsx";
import Colorcrd from "../components/Colorcrd.jsx";
import Todocontainer from "../components/TodoContainer.jsx";
import { useLocation } from "react-router-dom"

function Landing() {
  const data = useLocation()
  console.log(data)

  return (
    <div className='bg-black p-16'>
      <div className="bg-[#EFEFEF] p-10 border rounded-md" >
        {/* Header */}
        <Header username={data.state.user} />
        {/* card */}
        <div className="flex justify-between gap-7 flex-wrap">
          <Colorcrd bgcolor={"#8272DA"} title={"23"} subtitle={"chennai"} />
          <Colorcrd bgcolor={"#FD6663"} title={"April 05"} subtitle={"14:23:08"} />
          <Colorcrd bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"} />


        </div>
        {/* Todo container */}
        <Todocontainer />
      </div>
    </div>
  );
}

export default Landing


