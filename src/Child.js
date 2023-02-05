import React from 'react'
import { useContext } from 'react'
import {GlobalInfo} from "./App"
import SuperChild from './SuperChild'
const Child = () => {
    const{appColor}=useContext(GlobalInfo)
  return (
    <div>ChildComponent Bhayya1!1
        <h1 style={{color:appColor}}> This is Child Component Using Child</h1>
        <SuperChild/>
    </div>
  )
}

export default Child