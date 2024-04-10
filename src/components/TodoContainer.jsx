import Addtodoform from "./AddTodoForm"
import Todolist from "./Todolist"
import { useState } from "react"

function Todocontainer() {

  const [Activityarr, setactivity] = useState([

    {
      id: 1,
      activity: "Go for a walk"
    }
    ,
    {
      id: 2,
      activity: "Go to office"
    }
    ,
    {
      id: 3,
      activity: "thanks bye"
    }

  ])
  return (
    <div>

      <div className="flex gap-5 m-5 flex-wrap">
        {/* <div className="flex flex-col gap-3"> */}
        <Addtodoform Activityarr={Activityarr} setactivity={setactivity} />
        <Todolist Activityarr={Activityarr} setactivity={setactivity} />
      </div>

    </div>
  )
}

export default Todocontainer