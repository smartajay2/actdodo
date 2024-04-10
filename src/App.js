import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Landing from './pages/Landing';
import { useState } from "react";
function App(){
  const [users, setuser] = useState(

    [
      {
        username: "john",
        password: "123"
      },
      {
        username: "ajay",
        password: "123"
      }
    ]
  )
  return(
    
    <>
    <BrowserRouter>
       <Routes>
         <Route path='/' element={<Login users={users} setuser={setuser}/>} ></Route>
         <Route path='/signup' element={<Signup  users={users} setuser={setuser}/>}></Route>
         <Route path='/Landing' element={<Landing />}></Route>
 
       </Routes>
     </BrowserRouter>
   </>
  )

}


export default App



// {/* <div style={{ backgroundColor: "#FD6663" }} className="px-10 py-5 border rounded-md text-center flex-grow">
//             <h1 className="font-medium text-2xl">April 05</h1>
//             <p>14:23:08</p>
//           </div>

//           this things svoided by props
//           <div style={{ backgroundColor: "#FCA201" }} className="px-10 py-5 border rounded-md text-center flex-grow">
//             <h1 className="font-medium text-2xl">Built Using</h1>
//             <p>React</p>
//           </div> */}
// <div className='bg-black p-16'>
//   <div className="bg-[#EFEFEF] p-10 border rounded-md" >
//     {/* Header */}
//     <Header />
//     {/* card */}
//     <div className="flex justify-between gap-7 flex-wrap">
//       <Card bgcolor={"#8272DA"} title={"23"} subtitle={"chennai"} />
//       <Card bgcolor={"#FD6663"} title={"April 05"} subtitle={"14:23:08"} />
//       <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"} />


//     </div>
//     {/* Todo container */}
//     <Todocontainer />
//   </div>
// </div>