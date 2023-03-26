import { Button } from '@mui/material';
import React, { useContext, useState } from 'react'
import { Myclass } from '../App';
import '../style/setting.css';

const Setting = () => {
  const [state, setstate] = useContext(Myclass)
  const [editlist, seteditlist] = useState(false)
  const handledit = () => {
    seteditlist(!editlist)
    if (window.localStorage) {
      const json = JSON.stringify(state, undefined, 1);
      localStorage.setItem('key_name', json);
    }
  }
  const handlechenge = (key, value, day,count) => {
    const findlist = state.find((list) => list.day === day)
    const newlist = {
      ...findlist,
      [key]:{clannname:value,atted:count,noatted:count-count/3*2,nowattend:0,absent:0},
    }
    const updatalist = state.map((data) => {
      if (data.day === newlist.day) {
        return newlist
      }
      else {
        return data
      }
    })
    setstate(updatalist)
  }
  return (
    <div className='container'>
      <div className='editbtn'>
        <Button variant="contained" size='large' onClick={() => handledit()}>編集</Button>
      </div>
      <section className='heroarea'>
        <div className='timetablearea'>
          <div className='timeTitle'>
            <p>曜日</p>
            <ul className='listtitle'>
              <li>１時間目</li>
              <li>２時間目</li>
              <li>３時間目</li>
              <li>４時間目</li>
              <li>５時間目</li>
              <li>６時間目</li>
            </ul>
          </div>
          <div className='classNamelist'>
          {state.map((data) => (
            <div key={data.day}>
              <p>{data.day}</p>
              <ul>
                <li className='lists'>
                  {editlist ? (<input value={data.one.clannname} onChange={(e) => handlechenge('one',e.target.value, data.day,data.one.atted)}></input>) : (<p>{data.one.clannname}</p>)}
                </li>
                <li className='lists'>
                  {editlist ? (<input value={data.two.clannname} onChange={(e) => handlechenge('two', e.target.value, data.day,data.two.atted)}></input>) : (<p>{data.two.clannname}</p>)}
                </li>
                <li className='lists'>
                  {editlist ? (<input value={data.three.clannname} onChange={(e) => handlechenge('three', e.target.value, data.day,data.three.atted)}></input>) : (<p>{data.three.clannname}</p>)}
                </li>
                <li className='lists'>
                  {editlist ? (<input value={data.four.clannname} onChange={(e) => handlechenge('four', e.target.value, data.day,data.four.atted)}></input>) : (<p>{data.four.clannname}</p>)}
                </li>
                <li className='lists'>
                  {editlist ? (<input value={data.five.clannname} onChange={(e) => handlechenge('five', e.target.value, data.day,data.five.atted)}></input>) : (<p>{data.five.clannname}</p>)}
                </li>
                <li className='lists'>
                  {editlist ? (<input value={data.six.clannname} onChange={(e) => handlechenge('six', e.target.value, data.day,data.five.atted)}></input>) : (<p>{data.six.clannname}</p>)}
                </li>
              </ul>
            </div>
          ))}
          </div>
        </div>
      </section>
      <h1>講義名の重複は避けてください</h1>
    </div>
  )
}

export default Setting