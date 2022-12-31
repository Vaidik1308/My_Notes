import { useState } from 'react';
import './App.css';
import Header from './Header';
import { Route,Routes } from 'react-router-dom';
import NewNotes from './components/NewNotes';
import NotesPage from './components/NotesPage'
import HomePage from './components/HomePage';
import NotFound from './components/NotFound';

function App() {

  const [color,setColor] = useState(null);
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
  
  ]);

  console.log(color);



  return (
    <div className="App">
      <Header
        title="My Notes"
        search={search}
        setSearch={setSearch}
      />

      <Routes>
        <Route 
          path='/' 
          element={<HomePage 
            notes={notes} 
            setNotes={setNotes}
            color={color}
            setColor={setColor}
          />}
        />
        <Route 
          path='/note/:id' 
          element={<NotesPage
            notes={notes}
            color={color}  
          />} 
        />
        <Route path='/note'  element={<NewNotes/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>

    </div>
  );
}

export default App;
