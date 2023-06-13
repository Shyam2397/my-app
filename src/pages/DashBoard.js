import { useEffect } from "react"
import BasePage from "../basepage/basepage"

function DashBoard() {
    useEffect(()=>{
        console.log("i am mounted")
    })
  return (
    <BasePage>
        <div>DashBoard</div>
    </BasePage>
    
  )
}

export default DashBoard