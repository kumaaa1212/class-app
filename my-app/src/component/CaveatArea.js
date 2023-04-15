import React from 'react'
import '.././style/caution.css'
const CaveatArea = ({ cautoinstate, notionstate }) => {
  const showcautionclass = Array.from(new Set(cautoinstate)) || [];
  const shownotionclass = Array.from(new Set(notionstate)) || [];
  return (
    <div className='container'>
      <div>
        <h1>取得不可講義</h1>
        <ul>
          {showcautionclass.map((list) => (
            <li key={list}>{list}</li>
          ))}
        </ul>
      </div>
      <div>
        <h1>注意講義</h1>
        <ul>
          {shownotionclass.map((list) => (
            <li key={list}>{list}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CaveatArea;
