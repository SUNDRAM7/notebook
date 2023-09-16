/*import Note from "./Note";
export default function NotesCards({notes}){
return(
    notes.map(note=> <Note key={note.id} note={note} /> )
);

}*/
import React from 'react';
import Note from './Note';

export default function NotesCards({ notes }) {
  // Check if 'notes' is null or undefined before mapping
  if (!notes) {
    return null; // or any other UI you prefer when 'notes' is null
  }

  return (
    <div>
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
}
