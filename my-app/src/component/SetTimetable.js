import { Button } from '@mui/material';
import React, { useContext, useState } from 'react'
import { Myclass } from '../App';
import {TimetableData} from '../countdata'
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
  const handlereset = () =>{
    const json = JSON.stringify(TimetableData, undefined, 1);
    localStorage.setItem('key_name', json);
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
        <Button variant="contained" size='large' onClick={() => handlereset()}>リセット</Button>
        <p className='reset'>*データをリセットするにはリセットボタンを押して再度読み込んでください</p>
      </div>
    </div>
  )
}

export default SetTimetable