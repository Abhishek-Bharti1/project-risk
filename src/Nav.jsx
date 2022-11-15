import React from 'react'
import {BsFillBellFill} from "react-icons/bs"
import {AiOutlineQuestionCircle} from "react-icons/ai"
import {BiCalendar} from "react-icons/bi"
import {CgProfile} from "react-icons/cg"
import "./Nav.css"
const Nav = () => {
  return (
    <>
    <nav>
        <div className='child1'><h3>Projects</h3></div>
        <div className='child2'>
        <div className='icons'> <BsFillBellFill/></div> 
          <div className='icons'><AiOutlineQuestionCircle/></div>
         <div className='icons'>
             <CgProfile/>
          </div>
        </div>
    </nav>

    <div className='level2'>
        
            <div><BiCalendar/></div>
            <div>All
                <select>
                <option></option>
                    <option>On track</option>
                    <option>On hold</option>
                    <option>At risk</option>

                </select>
            </div>
        
        
        <div>
            <button>+ New Project</button>
        </div>
    </div>
    <div className='level3'>
        <p>All</p>
        <p>Risk</p>
        <p>On hold</p>
        <p>Potential Risk</p>
        <p>On track</p>
        <p>Archieved</p>
    </div>
    </>
  )
}

export default Nav