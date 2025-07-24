import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home  () {
    let [input,setInput]=useState("")
    let navigate=useNavigate()
    function handleJoin(){
            navigate(`/room/${input}`)
    }
  return (
    <>
      <div className='home'>
        <input type='text' placeholder='Enter your roomId...' onChange={(e)=>setInput(e.target.value)} value={input}/>
        <button onClick={handleJoin}>Join Now</button>
      </div>
      <div className='footer'>made by prem.g</div>
    </>
  )
}

export default Home