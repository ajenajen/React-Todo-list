export default function ProgressBar({ data }) {
  const total = data.length
  const completed = data.filter(i => i.completed === true).length
  const percentage = (completed * 100 ) / total

  return (
    <div style={{
      padding: 20,
      borderRadius: 12,
      background: '#E07C7C',
      color: '#fff'
    }}>
      <h1>Progress</h1>
      <div style={{
        position: 'relative',
        height: 5,
        borderRadius: 10,
        margin: '10px 0',
        background: '#3B3B3B',
      }}>
        <span style={{
          position: 'absolute',
          left: 0,
          top: 0,
          borderRadius: 10,
          height: 5,
          background: '#FFF',
          width: `${percentage}%`,
        }}></span>
      </div>
      <small style={{ opacity: 0.5 }}>{completed} completed</small>
    </div>
  )
}