const db = require("../db");

exports.getAllNotes = (req, res) => {
  db.query("SELECT * FROM notes", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.createNote = (req, res) => {
  const { title, content } = req.body;
  db.query("INSERT INTO notes (title, content) VALUES (?, ?)", [title, content], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id: result.insertId, title, content });
  });
};

exports.updateNote = (req, res) => {
  const { title, content } = req.body;
  const { id } = req.params;
  db.query("UPDATE notes SET title=?, content=? WHERE id=?", [title, content, id], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(200);
  });
};

exports.deleteNote = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM notes WHERE id=?", [id], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(200);
  });
};
