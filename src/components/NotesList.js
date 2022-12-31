import React from 'react';
import Note from './Note';

const NotesList = (
    {notes,setColor}
) => {
  return (
    <div className='noteLists'>
        {notes?
        (notes.map((note) => (
            <Note
                key={note.id}
                note={note}
                setColor={setColor}
            />
        ))):
        (<p style={{fontSize: "1.3rem",textAlign: "center"}}>Add Notes</p>)
    }

    </div>
  )
}

export default NotesList