import {useState} from 'react'

function Todo() {
    const [todos,setTodos]=useState([]);
    const [inputValue,setInputValue]=useSTate('');
    //inputの表示
    function handleInputChange(event) {
        setInputValue(event.target.value);
      }
    //ボタン
      function handleSubmit() {
        if (inputValue.trim()) {
          setTodos([...todos, inputValue.trim()]);
          setInputValue('');
        }
      }
      //削除
    function handleDelete(index) {

        setTodos(todos.filter((_, i) => i !== index));
      
      }
    return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
        <li key={index}>
        {todo}
        <button onClick={() => handleDelete(index)}>Delete</button>
        </li>
         ))}
     </ul>
    </div>
  )
}

export default Todo
