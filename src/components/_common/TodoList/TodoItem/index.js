export default function TodoItem({ data, onRemoveData, onClickCheckbox }) {
  const { id, title, completed } = data
  
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
      <div style={{
        position: 'relative',
        paddingLeft: 25
      }}>
        <Checkbox isCompleted={completed} onClickCheckbox={() => onClickCheckbox(id)} />
        <span style={{ 
          color: completed ? '#A9A9A9' : '#000',
          textDecoration: completed ? 'line-through' : 'none' 
        }}>{title}</span>
      </div>
      <div><button onClick={() => onRemoveData(id)}>del</button></div>
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