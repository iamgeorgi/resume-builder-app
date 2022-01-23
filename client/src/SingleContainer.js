import { useDrag } from 'react-dnd';

const SingleContainer = ({ color, img }) => {
  const [{isDragging}, drag] = useDrag(() => ({
    type: 'knight',
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return ( 
    <div 
    ref={drag} 
    style={{
      opacity: isDragging ? 0.5 : 1,
      width: "200px",
      height: "auto",
      padding: "30px",
      backgroundColor: `${color}`,
      margin: "15px 15px",
      cursor: 'move'
    }}
    >
      <img src={img} alt="" style={{
        width: "auto",
        height: "100px"
      }} />
      <h3>It's a heading</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non aliquam harum aspernatur molestiae, eum ullam soluta quia culpa, iste accusantium eaque, aut nam. Vitae aliquam ex voluptatum blanditiis veritatis omnis?</p>
    </div>
   );
}
 
export default SingleContainer;