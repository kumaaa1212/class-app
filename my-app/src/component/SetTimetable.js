import React, { useContext, useState } from 'react'
import { Myclass } from '../App';
const SetTimetable = () => {
  const [state,setstate] =useContext(Myclass);
  const [absencestate,setabsencestate] =useState(15);
  const handlechenge = (value) => {
    setabsencestate(value);
   const newarry = state.map((data) => {
    return {...data,one:{...data.one,atted:value, noatted:Math.floor(value-value/3*2),},two:{...data.two,atted:value,noatted:Math.floor(value-value/3*2)},three:{...data.three,atted:value,noatted:Math.floor(value-value/3*2)},four:{...data.four,atted:value,noatted:Math.floor(value-value/3*2)},five:{...data.five,atted:value,noatted:Math.floor(value-value/3*2)},six:{...data.six,atted:value,noatted:Math.floor(value-value/3*2)}}
   })
    setstate(newarry);
  }
  return (
    <div>
      <div className='countarea'>
        <div className='allinput'>
          <h1>全授業回数</h1>
          <input type="text" value={absencestate} onChange={(e) => handlechenge(e.target.value)} />
        </div>
        <div className='possiblecount'>
          <h1>欠席可能回数</h1>
          <p>{ Math.floor(absencestate-absencestate/3*2)}</p>
        </div>
      </div>
    </div>
  )
}

export default SetTimetable