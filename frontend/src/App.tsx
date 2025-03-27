import React, { useEffect, useState } from "react";
import axios from "axios";
import { Note } from "./types/Note";
import NoteForm from "./components/NoteForm";
import NoteItem from "./components/NoteItem";

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [editingNote, setEditingNote] = useState<Note | undefined>(undefined);

  const fetchNotes = async () => {
    const res = await axios.get("http://localhost:5001/api/notes");
    setNotes(res.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const addNote = async (note: Omit<Note, "id">) => {
    await axios.post("http://localhost:5001/api/notes", note);
    fetchNotes();
  };

  const updateNote = async (note: Omit<Note, "id">) => {
    if (editingNote) {
      await axios.put(`http://localhost:5001/api/notes/${editingNote.id}`, note);
      setEditingNote(undefined);
      fetchNotes();
    }
  };

  const deleteNote = async (id: number) => {
    await axios.delete(`http://localhost:5001/api/notes/${id}`);
    fetchNotes();
  };

  const handleSubmit = (note: Omit<Note, "id">) => {
    if (editingNote) {
      updateNote(note);
    } else {
      addNote(note);
    }
  };

  return (
    <div className="app">
      <h1>Notes App</h1>
      <NoteForm onSubmit={handleSubmit} editNote={editingNote} />
      <div className="notes-list">
        {notes.map(note => (
          <NoteItem
            key={note.id}
            note={note}
            onDelete={deleteNote}
            onEdit={setEditingNote}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
