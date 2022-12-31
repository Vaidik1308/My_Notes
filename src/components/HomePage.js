import React from 'react'
import NotesList from './NotesList';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const HomePage = (
  {notes,setNotes}
  ) => {
  return (
    <div className='HomePage'>
        <NotesList
            notes={notes}
            setNotes={setNotes}
        />
        <Box className='Addbtn' sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab size="large" color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Box>
        
    </div>
  )
}

export default HomePage