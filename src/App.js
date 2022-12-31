import { useState } from 'react';
import './App.css';
import NotesList from './components/NotesList';
import Header from './Header';

function App() {
  

  const [search,setSearch] = useState('');
  const [notes,setNotes] = useState([
      {
        "id":"1",
        "body" : "this is my notes",
        "date":"13/08/2022"
      },
      {
        "id":"2",
        "body" : "this is my notes",
        "date":"13/08/2022"
      },
      {
        "id":"3",
        "body" : "this is my notes",
        "date":"13/08/2022"
      },
      {
        "id":"4",
        "body" : "this is my notes",
        "date":"13/08/2022"
      },
      {
        "id":"5",
        "body" : "this is my notes",
        "date":"13/08/2022"
      },
      {
        "id":"6",
        "body" : "this is my notes",
        "date":"13/08/2022"
      },
      {
        "id":"7",
        "body" : "this is my notes",
        "date":"13/08/2022"
      },
      {
        "id":"8",
        "body" : "this is my notes",
        "date":"13/08/2022"
      },
      {
        "id":"9",
        "body" : "this is my notes",
        "date":"13/08/2022"
      }
  
  ])



  return (
    <div className="App">
      <Header
        title="My Notes"
        search={search}
        setSearch={setSearch}
      />
      <NotesList
        notes={notes}
        setNotes={setNotes}
      />

    </div>
  );
}

export default App;
