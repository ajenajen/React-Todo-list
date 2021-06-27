import { useState, useEffect } from 'react'
import * as ApiService from '../../../../src/modules/api/service'
import TodoItem from './TodoItem'

export default function TodoList(props) {
  const { list, setList } = props
  const [todo, setTodo] = useState({ title: '' })

  const handleCreateItem = async (data) => {
    const result =  await ApiService.create(data)
    setTodo({ title: '' })
    setList(list => [...list, data])
  }

  const onUpdateData = async (data) => {
    const result =  await ApiService.update({
      id: data.id, 
      data: { ...data }
    })
    setList(list => list.map((item) => (item.id !== result.id ? item : result)))
  }

  const handleRemoveItem = async (id) => {
    const result =  await ApiService.remove(id)
    setList(list.filter(item => item.id !== id))
  }


  // useEffect(() => {
  //   onUpdateData()
  // }, [list])

  // Context 
  // handleError
  // Notice before remove

  return <div style={{
    display: 'flex',
    flexDirection: 'column',
  }}>
    {list && list.map((item,index) => <TodoItem key={index} data={item}
      onRemoveData={handleRemoveItem} 
      onUpdateData={onUpdateData} />
    )}
    <input placeholder='Add your todo...' value={todo.title}
      onChange={e => setTodo({
        id: Date.now(),
        title: e.target.value,
        completed: false
      })}
      onKeyDown={e => { e.keyCode === 13 && handleCreateItem(todo) }}
      style={{
        fontSize: 14,
        background: 'white',
        padding: '12px 16px',
        borderRadius: '20px',
        marginBottom: '10px',
        border: 0
      }} />
  </div>
}