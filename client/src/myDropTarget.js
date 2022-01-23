import { useDrop } from 'react-dnd'

function MyDropTarget(props) {
  const [collectedProps, drop] = useDrop(() => ({
    accept: 'knight'
  }))

  return <div 
  ref={drop} 
  style={{
    width: "200px",
    height: "auto",
    padding: "30px",
    backgroundColor: `darkGrey`,
    margin: "15px 15px",
  }}></div>
}

export default MyDropTarget;