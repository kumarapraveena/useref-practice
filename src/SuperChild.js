import React from 'react'
import { useContext } from 'react'
import {GlobalInfo} from "./App"
const SuperChild = () => {
    const{appColor}=useContext(GlobalInfo)
  return (
    <div>ChildComponent Bhayya1!1
        <h1 style={{color:appColor}}> This is SuperChild Component Using Child</h1>
    </div>
  )
}

export default SuperChild