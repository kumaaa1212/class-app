import React, { useState } from 'react'
import CaveatArea from './CaveatArea';
import Timetable from './Timetable';
import '../style/home.css'
const HomeArea = () => {
  const [cautoinstate,setcautoinstate] =useState([]);
  const [notionstate,setnotionstate] =useState([]);
  return (
    <div>
      <Timetable cautoinstate={cautoinstate} setcautoinstate={setcautoinstate} notionstate={notionstate} setnotionstate={setnotionstate}/>
      <CaveatArea cautoinstate={cautoinstate} setcautoinstate={setcautoinstate} notionstate={notionstate} setnotionstate={setnotionstate}/>
    </div>
  )
}
export default HomeArea