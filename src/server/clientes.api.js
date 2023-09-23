import axios from 'axios';
import { useState } from 'react'

export const useClientesApi = () => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({ title: "", body: "" });
    const [editingPost, setEditingPost] = useState(null);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewPost({
            ...newPost,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (editingPost) {
            // Actualizar un post existente
            axios.put(`http://localhost:3001/posts/${editingPost.id}`, editingPost)
                .then(() => {
                    // Actualizar la lista de posts después de la edición
                    axios.get("http://localhost:3001/posts")
                        .then((response) => {
                            setPosts(response.data);
                        });
                })
                .catch((error) => {
                    console.error("Error al editar el post:", error);
                });

            // Limpiar el estado de edición
            setEditingPost(null);
        } else {
            // Crear un nuevo post
            axios.post("http://localhost:3001/posts", newPost)
                .then(() => {
                    // Actualizar la lista de posts después de la creación
                    axios.get("http://localhost:3001/posts")
                        .then((response) => {
                            setPosts(response.data);
                        });
                })
                .catch((error) => {
                    console.error("Error al crear el nuevo post:", error);
                });
        }

        // Limpiar el formulario
        setNewPost({ title: "", body: "" });
    };

    const handleEdit = (post) => {
        // Llenar el formulario de edición con los datos del post
        setNewPost({ title: post.title, body: post.body });
        setEditingPost(post);
    };

    const handleDelete = (postId) => {
        // Eliminar un post
        axios.delete(`http://localhost:3001/posts/${postId}`)
            .then(() => {
                // Actualizar la lista de posts después de la eliminación
                axios.get("http://localhost:3001/posts")
                    .then((response) => {
                        setPosts(response.data);
                    });
            })
            .catch((error) => {
                console.error("Error al eliminar el post:", error);
            });
    };
    return {
        handleSubmit,
        handleInputChange,
        handleEdit,
        handleDelete,
        posts,
        setPosts,
        newPost,
        editingPost,
    }
}

export default useClientesApi