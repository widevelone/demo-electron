import axios from 'axios';
import { useState } from 'react'
import { requestApi, requestDefaultApi } from './requestApi';

export const useClientesApi = ({ generalApi }) => {
    const [data, setData] = useState([]);
    const [newPost, setNewPost] = useState({ title: "", body: "" });
    const [editingPost, setEditingPost] = useState(null);

    const handleSubmit = async (method, urlApi, values) => {

        if (editingPost) {
            axios.put(`http://localhost:3001/posts/${editingPost.id}`, editingPost)
                .then(() => {
                    axios.get("http://localhost:3001/posts")
                        .then((response) => {
                            setData(response.data);
                        });
                })
                .catch((error) => {
                    console.error("Error al editar el post:", error);
                });

            setEditingPost(null);
        } else {
            try {
                await requestApi(method, urlApi, values)
                requestDefaultApi(generalApi, setData)
            } catch (error) {
                console.log("error to create")
            }
        }
    };

    const handleEdit = (post) => {
        setNewPost({ title: post.title, body: post.body });
        setEditingPost(post);
    };

    const handleDelete = async (method, urlApi, values) => {
        try {
            await requestApi(method, urlApi, values)
            requestDefaultApi(generalApi, setData)
        } catch (error) {
            console.log("error to create")
        }
    };
    return {
        handleSubmit,
        handleEdit,
        handleDelete,
        data,
        setData,
        newPost,
        editingPost,
    }
}

export default useClientesApi