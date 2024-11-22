import React, { useState, useEffect } from "react";
import api from "../services/api";
import Card from "../components/Card";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("/posts").then((response) => setPosts(response.data));
  }, []);

  return (
    <div>
      <h2>Publicações</h2>
      {posts.map((post) => (
        <Card key={post.id} titulo={post.title} conteudo={post.content} />
      ))}
    </div>
  );
};

export default Posts;
