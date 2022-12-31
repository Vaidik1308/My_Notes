import React from 'react';
import {MdDeleteForever} from 'react-icons/md';
import { useRef } from 'react';



const Note = ({note}) => {
    const color = ['#6D67E4',"#FFCB42","#FF4848","#FFD371","#9EDE73"][Math.floor(Math.random() * 5)];
    const changeColor = useRef('');
    // useEffect(() => {
    //     changeColor.current.style.backgroundColor = color;
    // },[color])
    
  return (
    <div className='note' ref={changeColor} style={{backgroundColor: `${color}`}}>
        <span className='note-body'>{note.body}</span>
        <div className='note-footer'>
            <small className='note-date'>{note.date}</small>
            <MdDeleteForever className='delete-icon' size='1.3em'/>
        </div>
    </div>
  )
}

export default Note