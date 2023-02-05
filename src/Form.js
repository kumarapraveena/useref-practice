// // import React from 'react'
// // import {useState,useEffect} from "react"

// // const Form = () => {
// //  const[count,setCount]=useState(0)
// //  useEffect(()=>console.log(count),[])
// //   return (
// //     <div>
// //         <h1>You Clicked {count} times</h1>
// //         <button onClick={()=>setCount(count+1)}>Click</button>
// //     </div>
// //   )
// // }

// // export default Form
// //-----------------------------
// import React from 'react'
// import { useState } from 'react'
// const Form = () => {
// const [user,setUser]=useState({
//     username:"",
//     password:""
// })
// const {username,password}=user
// const handler=(e)=>{
// setUser({...user,[e.target.name]:[e.target.value]})
// }
// const handleSubmit=(e)=>{
// e.preventDefault()
// console.log(user.username)
// }
//   return (
//     <div>
//         <form onSubmit={handleSubmit}>
//         <input type="text" placeholder='username' value={username} name="username" onChange={handler}/><br/>
//         <input type="text" placeholder='password' value={password} name="password" onChange={handler}/><br/>
//         {/* {console.log(user)} */}
//         <input type="submit" name="submit"/>
//         </form>


//     </div>
//   )
// }

// export default Form
// import React from 'react'

// const Form = () => {
//   const num=[1,3,5,7,9,11,13]
//   const newNum=num.map((nums)=>{
//     return <li>{nums}</li>
//   })
//   return (
//     <div>Form
//       <ul>{newNum}</ul>
//     </div>
//   )
// }

// export default Form
import React from 'react'
//import {Redirect} from "react-router"
import {useNavigation} from "react-router-dom"
import { useState } from 'react'

const Form = () => {
  const navigate=useNavigation()
const [auth,setAuth]=useState(false)
// const navigate=useNavigation()
if(auth){
 navigate("/dash")
}
  return (
    <div>Form Page
      <button onClick={()=>setAuth(true)}>click</button>
    </div>
  )
}

export default Form