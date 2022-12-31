import React from 'react'

const NewNotes = () => {
  return (
    <div className='newNotes'>
        <h1>New Note</h1>
        <div className="form-div">
            <form action="" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="newNote"></label>
                <textarea 
                    name="" 
                    id="" 
                    cols="40" 
                    rows="40"
                    placeholder='add tasks,info,......'
                >    
                </textarea>
            </form>
        </div>
    </div>
  )
}

export default NewNotes