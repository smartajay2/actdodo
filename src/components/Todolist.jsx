import Todoitem from "./Todoitem"

function Todolist(props) {
  const Activityarr = props.Activityarr
  const setactivity = props.setactivity

  return (
    <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
      <h1 className="text-2xl font-medium">Today's Activity</h1>


      {
        Activityarr.map(function (item, index) {
          return <Todoitem id={item.id} activity={item.activity} key={index}
            index={index} Activityarr={Activityarr} setactivity={setactivity} />
        })
      }

    </div>
  )
}

export default Todolist