import React, { useEffect } from "react";
import useClientesApi from "./server/clientes.api";
import { requestApi } from "./server/requestApi";

function App() {
  const {
    handleSubmit,
    handleInputChange,
    handleEdit,
    handleDelete,
    posts,
    setPosts,
    newPost,
    editingPost,
  } = useClientesApi()

  useEffect(() => {
    requestApi(setPosts, 'posts')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <h1>Posts</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Título"
          value={newPost.title}
          onChange={handleInputChange}
        />
        <textarea
          name="body"
          placeholder="Contenido"
          value={newPost.body}
          onChange={handleInputChange}
        />
        <button type="submit">{editingPost ? "Guardar" : "Crear"}</button>
      </form>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={() => handleEdit(post)}>Editar</button>
            <button onClick={() => handleDelete(post.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
