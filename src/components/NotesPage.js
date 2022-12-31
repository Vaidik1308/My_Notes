import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

const NotesPage = ({notes}) => {

  
  const notePageColor = useRef();
  const articleBackColor = useRef();
  const {id} = useParams();
  const note = notes.find((note) => (note.id).toString() === id);
  const backColor = ['#6D67E4',"#FFCB42","#F8F988","#9EDE73","#D09CFA"][Math.floor(Math.random() * 5)];
  useEffect(() => {
    notePageColor.current.style.backgroundColor = backColor;
    articleBackColor.current.style.border = `1px solid ${backColor}`;
  },[backColor])


  return (
    <div ref={notePageColor} className='notePage'>
      <article ref={articleBackColor} >
        {note &&
            <>
              <div className='notePageHead'>
                <h1 className='noteTitle'>{`Notes ${id}`}</h1>
                <p className='noteBody'>{note.body}</p>
              </div>
              <div className="noteFooter">
                <p className='dateTime'>{note.date}</p>
              </div>

            </>
          }
      </article>
    </div>
  )
}

export default NotesPage