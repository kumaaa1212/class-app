import { createContext, useEffect, useState } from 'react';
import './App.css';
import HomeArea from './component/HomeArea';
import SettingArea from './component/SettingArea';
import { TimetableData } from './countdata';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
export const Myclass = createContext();
function App() {
  const [state, setstate] = useState(TimetableData);
  // useEffect(() => {
  //   if (window.localStorage) {
  //     const json = localStorage.getItem('key_name');
  //     setstate(JSON.parse(json));
  //   }
  // }, []);
  return (
    <div className='conitaner'>
      <h1 className='maintitle'>Make the most of your time in college</h1>
      <BrowserRouter>
        <div>
          <ul className='linklist'>
            <Link to='/'><li>HOME</li></Link>
            <Link to='/SettingArea'><li>設定</li></Link>
          </ul>
        </div>
        <div>
          <Myclass.Provider value={[state, setstate]}>
            <Routes>
              <Route path='/' element={<HomeArea />} />
              <Route path='/SettingArea' element={<SettingArea />} />
            </Routes>
          </Myclass.Provider>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
