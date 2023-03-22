import React from 'react'
import SetTimetable from './SetTimetable'
import Setting from './Setting'
const SettingArea = ({state,setstate,countdata}) => {
  return (
    <div>
      <Setting />
      <SetTimetable state={state} setstate={setstate} countdata={countdata}/>
    </div>
  )
}

export default SettingArea