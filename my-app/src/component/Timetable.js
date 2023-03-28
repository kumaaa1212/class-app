import React, { useContext, useEffect, useState } from 'react'
import { Myclass } from '../App'
import Button from '@mui/material/Button';
const Timetable = ({ cautoinstate, setcautoinstate, notionstate, setnotionstate }) => {
  const [state, setstate] = useContext(Myclass);
  const [showclass, setshowclass] = useState();
  const handleshow = (key, day, time, id, count, possicount, nowcount, nowabsent) => {
    const showHome = {
      objkey: key,
      classDay: day,
      classtime: time,
      classname: id,
      attend: count,
      noatted: possicount,
      nowcount: nowcount,
      nowabsent: nowabsent,
    }
    setshowclass(showHome);
  }
  const handlecount = (type) => {
    if (showclass.nowcount == showclass.attend) {
      return false
    }
    switch (type) {
      case 'attend': return setshowclass({ ...showclass, nowcount: showclass.nowcount + 1 });
      case 'absent': return setshowclass({ ...showclass, nowabsent: showclass.nowabsent + 1 });
      default: return showclass
    }
  }
  const keepData = async (key, day, time, id, count, possicount, result) => {
    const upDataClass = state.filter((list) => list.day === day);
    const takeArry = upDataClass.shift();
    const chengeObj = {
      [key]: { ...time, clannname: id, atted: count, noatted: possicount, nowattend: showclass.nowcount, absent: showclass.nowabsent, pass: result }
    }
    console.log(chengeObj);
    const chengeobjtarget = Object.assign(takeArry, chengeObj);
    const keepclasslist = state.map((data) => {
      if (data.day === chengeobjtarget.day) {
        return chengeobjtarget
      }
      else {
        return data
      }
    })
    if (showclass.nowabsent > showclass.noatted) {
      alert(`${showclass.classname}の講義を落としました`);
      setcautoinstate([...cautoinstate, showclass.classname]);
      setshowclass({ ...showclass, result: true });
      return false
    }
    else if (showclass.nowabsent > showclass.noatted * 0.6) {
      alert('この講義の欠席回数は６割を超えました')
      setnotionstate([...notionstate, showclass.classname]);
    }
    setstate(keepclasslist);
    if (window.localStorage) {
      const json = JSON.stringify(state, undefined, 1);
      localStorage.setItem('key_name', json);
    }
  }
  return (
    <div className='container'>
      <section className='heroarea'>
        <div className='timetablearea'>
          <div className='timeTitle'>
            <p>曜日</p>
            <ul>
              <li className='lists'>１時間目</li>
              <li>２時間目</li>
              <li>３時間目</li>
              <li>４時間目</li>
              <li>５時間目</li>
              <li>６時間目</li>
            </ul>
          </div>
          <div className='classNamelist'>
            {state.map((list) => (
              <div key={list.day}>
                <p>{list.day}</p>
                <ul>
                  <li onClick={() => handleshow(Object.keys(list)[1], list.day, list.one, list.one.clannname, list.one.atted, list.one.noatted, list.one.nowattend, list.one.absent)} className='lists'>{list.one.clannname}</li>
                  <li onClick={() => handleshow(Object.keys(list)[2], list.day, list.two, list.two.clannname, list.two.atted, list.two.noatted, list.two.nowattend, list.two.absent)} className='lists'>{list.two.clannname}</li>
                  <li onClick={() => handleshow(Object.keys(list)[3], list.day, list.three, list.three.clannname, list.three.atted, list.three.noatted, list.three.nowattend, list.three.absent)} className='lists'>{list.three.clannname}</li>
                  <li onClick={() => handleshow(Object.keys(list)[4], list.day, list.four, list.four.clannname, list.four.atted, list.four.noatted, list.four.nowattend, list.four.absent)} className='lists'>{list.four.clannname}</li>
                  <li onClick={() => handleshow(Object.keys(list)[5], list.day, list.five, list.five.clannname, list.five.atted, list.five.noatted, list.five.nowattend, list.five.absent)} className='lists'>{list.five.clannname}</li>
                  <li onClick={() => handleshow(Object.keys(list)[6], list.day, list.six, list.six.clannname, list.six.atted, list.six.noatted, list.six.nowattend, list.six.absent)} className='lists'>{list.six.clannname}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='selectarea'>
        <div className='AttendanceCheck'>{showclass ? (<div className='btnarea'>
          <div className='btn'>
            <Button variant='contained' color='success' size='large' onClick={() => handlecount('attend')}>
              出席
            </Button>
          </div>
          <div className='btn'>
            <Button variant="contained" color="error" size='large' onClick={() => handlecount('absent')}>
              欠席
            </Button>
          </div>
        </div>) : (<h1>選択させていません</h1>)}
        </div>
        <div>
          <div className='selectshow' >{showclass && (<div>
            <h2>授業名:{showclass.classname}</h2>
            <h2>授業回数:{showclass.attend}</h2>
            <h2>欠席可能回数:{showclass.noatted}</h2>
            <h2>出席回数:{showclass.nowcount}/{showclass.attend}</h2>
            <h2>欠席回数:{showclass.nowabsent}</h2>
          </div>)}</div>
          <div>
            {showclass && (<Button variant="contained" size='large' onClick={() => keepData(showclass['objkey'], showclass.classDay, showclass.classtime, showclass.classname, showclass.attend, showclass.noatted)}>
              保存
            </Button>)}
          </div>
        </div>
      </section>
    </div>
  )
}
export default Timetable