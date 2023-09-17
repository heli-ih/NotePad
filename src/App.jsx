import "./App.css";
import { useState } from "react";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";

function App() {
  const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("latest");

  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const handleDeleteNote = (id) => {
    setNotes((prevNotes) =>
      prevNotes.filter((n) => {
        n.id != id;
      })
    );
  };

  const handleCompleteNote = (e) => {
    // console.log(e);
    const noteId = Number(e.target.value);

    setNotes((prevNotes) => {
      prevNotes.map((n) => {
        n.id == noteId ? { ...n, completed: !n.completed } : n;
      });
    });
  };

  return (
    <div className="container">
      <NoteHeader
        notes={notes}
        sortBy={sortBy}
        onSort={(e) => setSortBy(e.target.value)}
      />
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNote} />
        <div className="note-container">
          <NoteStatus notes={notes} />
          <NoteList
            notes={notes}
            sortBy={sortBy}
            onDelete={handleDeleteNote}
            onComplete={handleCompleteNote}
            // errorrrrrrrrrrrrrrrrrrrrrrrrrrrrrr---------------------
          />
        </div>
      </div>
    </div>
  );
}

export default App;
