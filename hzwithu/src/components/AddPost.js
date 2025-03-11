// src/components/AddPost.js
import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "posts"), { title, content });
    setTitle("");
    setContent("");
  };

  return (
    <form className="container mt-4" onSubmit={handleSubmit}>
      <input className="form-control mb-2" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea className="form-control mb-2" rows="4" placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required />
      <button className="btn btn-success" type="submit">Add Post</button>
    </form>
  );
};

export default AddPost;
