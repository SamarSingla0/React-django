import api from "../api.js";
import { useEffect, useState } from "react";
import "../styles/Home.css";
import Note from "../components/Note.jsx";

function Home() {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = () => {
    api
      .get("/api/notes/")
      .then((res) => res.data)
      .then((data) => setNotes(data))
      .catch((err) => alert(err));
  };

  const deleteNote = (id) => {
    api
      .delete(`/api/notes/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) alert("Note deleted successfully");
        else alert("Failed to delete note");
        getNotes();
      })
      .catch((err) => alert(err));
  };

  const createNote = (e) => {
    e.preventDefault();

    api
      .post("/api/notes/", { content, title })
      .then((res) => {
        if (res.status === 201) alert("Note created successfully");
        else alert("Failed to create note");

        // CLEAR INPUTS
        setTitle("");
        setContent("");

        getNotes();
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="home-wrapper">

      <h1>Home Page</h1>
      <h2>Notes</h2>

      {/* Render Notes (ONLY ONCE) */}
      

      <h2>Create a Note</h2>

      <form onSubmit={createNote} className="note-form">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          required
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />

        <input type="submit" value="Submit" />
      </form>


      {notes.map((note) => (
        <Note note={note} onDelete={deleteNote} key={note.id} />
      ))}

    </div>
  );
}

export default Home;
