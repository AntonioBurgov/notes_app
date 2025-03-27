import React from "react";
import { Note } from "../types/Note";

interface Props {
  note: Note;
  onDelete: (id: number) => void;
  onEdit: (note: Note) => void;
}

const NoteItem: React.FC<Props> = ({ note, onDelete, onEdit }) => {
  return (
    <div className="note-item">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={() => onEdit(note)}>Edit</button>
      <button onClick={() => onDelete(note.id)}>Delete</button>
    </div>
  );
};

export default NoteItem;
