function Todoitem(props) {
  const activityarr = props.Activityarr
  const setactivity = props.setactivity

  function Handledelete(deleteid) {
    var temp = activityarr.filter(function (item) {
      if (item.id === deleteid) {
        return false
      }

      else {
        return true
      }

    })
    setactivity(temp)
  }

  return (
    <div className="flex justify-between">
      <p>{props.index + 1}.{props.activity}</p>
      <button className="text-red-500" onClick={() => Handledelete(props.id)}>Delete</button>
    </div>
  );

}

export default Todoitem

