import { useState } from 'react'
import * as ApiService from '../../../../src/modules/api/service'
import TodoItem from './TodoItem'

export default function TodoList(props) {
  const { list, setList } = props
  const [todo, setTodo] = useState({ title: '' })

  async function handleCreateItem(todo) {
    const result =  await ApiService.create(todo)
    // const data = await result.json();
    console.log('result',result)
    setTodo({ title: '' })
    setList(list => [...list, todo])
  }

  function handleRemoveItem(id) {
    setList(list.filter(item => item.id !== id))
  }

  function handleCompletedItem(id) {
    console.log(id)
    
  }

  return <div style={{
    display: 'block',
    width: '100%',
  }}>
    {list && list.map((item,index) => <TodoItem key={index} data={item} onRemoveData={handleRemoveItem} onClickCheckbox={handleCompletedItem} />)}
    <input value={todo.title}
      onChange={e => setTodo({
        id: Date.now(),
        title: e.target.value,
        completed: false
      })}
      onKeyDown={e => { e.keyCode === 13 && handleCreateItem(todo) }} />
  </div>
}