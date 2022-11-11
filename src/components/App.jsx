import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  //useState that tracks array of notes
  const [notes, setNotes] = useState([]);

  function addNote(noteContent) {
    console.log(noteContent);
    setNotes((prevNotes) => {
      return [...prevNotes, noteContent];
    });
  }

  console.log(notes);

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      <div>
        {notes.map((note, index) => (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
          />
        ))}
      </div>
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </div>
  );
}

export default App;
