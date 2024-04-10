import { useState } from "react"

function Addtodoform(props) {

  const Activityarr = props.Activityarr
  const setactivity = props.setactivity


  const [newactivity, setnewactivity] = useState("")

  function handlechnage(evt) {
    setnewactivity(evt.target.value)
  }
  function addactivity() {
    setactivity([...Activityarr, { id: Activityarr.length + 1, activity: newactivity }])
    setnewactivity([])
  }
  return (

    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-medium">Manage Activities</h1>

      <div>
        <input value={newactivity} onChange={handlechnage} type="text" className="border border-black p-1  bg-transparent" placeholder="Next Activity?"></input>
        <button onClick={addactivity} className="bg-black text-white p-1 border-s-4 border-black border-t-3 border-y-2 text-center ">Add</button>
      </div>

    </div>
  )
}

export default Addtodoform