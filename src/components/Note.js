import React from 'react';
import {MdDeleteForever} from 'react-icons/md';
import { useRef,useEffect } from 'react';



const Note = (
        {note,color,setColor}
    ) => {
    const backGroundColor = ['#6D67E4',"#FFCB42","#F8F988","#9EDE73","#D09CFA"][Math.floor(Math.random() * 5)];
    const changeColor = useRef('');
    useEffect(() => {
        changeColor.current.style.backgroundColor = backGroundColor;
        setColor(backGroundColor);

    },[])
    
  return (
    <div className='note' ref={changeColor} >
        <span className='note-body'>{note.body}</span>
        <div className='note-footer'>
            <small className='note-date'>{note.date}</small>
            <MdDeleteForever className='delete-icon' size='1.3em'/>
        </div>
    </div>
  )
}

export default Note