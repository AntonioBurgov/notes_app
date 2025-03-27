import React, { useState, useEffect } from "react";
import { Note } from "../types/Note";

interface Props {
  onSubmit: (note: Omit<Note, "id">) => void;
  editNote?: Note;
}

const NoteForm: React.FC<Props> = ({ onSubmit, editNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editNote) {
      setTitle(editNote.title);
      setContent(editNote.content);
    }
  }, [editNote]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && content) {
      onSubmit({ title, content });
      setTitle("");
      setContent("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={e => setContent(e.target.value)}
      ></textarea>
      <button type="submit">{editNote ? "Update" : "Add"} Note</button>
    </form>
  );
};

export default NoteForm;
