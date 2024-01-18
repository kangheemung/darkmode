import { useState } from 'react'


function Problem() {
  const [text, setText] = useState('');
  function handleInputChange(e){
    setText(e.target.value);
  }
  return (
    <div>
        <input type="text" value={text} onChange={handleInputChange}/>
        <p>Input text: TODO</p>
        <p>Input text: {text}</p>
    </div>
  )
}

export default Problem
