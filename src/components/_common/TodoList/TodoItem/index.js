import { useState } from 'react'

export default function TodoItem({ data, onRemoveData, onUpdateData }) {
  const { id, title, completed } = data
  const [isToggle, setIsToggle] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [todo, setTodo] = useState(data)

  function handleEditData(todo) {
    onUpdateData(todo)
    setIsEdit(false)
  }

  return (
    <div style={{
      fontSize: 14,
      background: 'white',
      padding: '12px 16px',
      display: 'flex',
      alignItem: 'center',
      justifyContent: 'space-between',
      borderRadius: '20px',
      marginBottom: '10px',
    }}>
    {!isEdit ? (
      <>
        <div style={{
          position: 'relative',
          paddingLeft: 25
        }}>
          <Checkbox isCompleted={completed} onClickCheckbox={() => onUpdateData({
            ...data,
            completed: !data.completed
          })} />
          <span style={{ 
            color: completed ? '#A9A9A9' : '#000',
            textDecoration: completed ? 'line-through' : 'none' 
          }}>{title}</span>
        </div>
        <ButtonList isToggle={isToggle} onToggleChange={() => setIsToggle(!isToggle)}>
          <a onClick={() => setIsEdit(true)}>Edit</a>
          <a style={{ color: '#E07C7C' }} onClick={() => {
            onRemoveData(id)
            setIsToggle(!isToggle)
          }}>Delete</a>
        </ButtonList>
      </>
    ) : (
      <>
        <input value={todo.title}
          onChange={e => setTodo({
            ...todo,
            title: e.target.value
          })}
          style={{
            fontSize: 14,
            border: 0,
            width: '80%'
          }} />
          <a onClick={() => handleEditData(todo)} style={{ color: '#fff', background: '#585292', padding: '6px 10px', margin: '-5px', borderRadius: 20 }}>Save</a>
      </>
    )}
    </div>
  )
}

function Checkbox({ isCompleted, onClickCheckbox }) {
  return <div style={{
    position: 'absolute',
    left: 0,
    top: -2,
    width: 12,
    height: 12,
    borderRadius: 6,
    border: '2px solid #585292',
    background: isCompleted ? '#585292' : '#fff',
    cursor: 'pointer',
  }} onClick={onClickCheckbox}>
    <span style={{
      position: 'absolute',
      left: 4,
      top: 1,
      display: 'block',
      transform: 'rotate(45deg)',
      height: 7,
      width: 3,
      borderBottom: '1px solid #fff',
      borderRight:'1px solid #fff',
      opacity: isCompleted ? 1 : 0,
    }}></span>
  </div>
}

function ButtonList({ children, isToggle, onToggleChange }) {
  
  return <div style={{
    position: 'relative',
    cursor: 'pointer'
  }} onClick={onToggleChange}>
    <span style={{ color: '#9796A8', fontSize: 24 }}>...</span>
    <div style={{ 
      display: isToggle ? 'flex': 'none',
      flexDirection: 'column',
      fontSize: 12,
      lineHeight: 1.5,
      position: 'absolute',
      top: 24,
      right: -2,
      padding: '10px 15px',
      background: '#fff',
      borderRadius: 10,
      boxShadow: '0px 0px 3px rgba(0,0,0,0.2)',
      zIndex: 9
    }}>
      {children}
    </div>
  </div>
}