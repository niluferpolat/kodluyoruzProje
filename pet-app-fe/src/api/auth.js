import axios from "axios";

/*Login ve signup api*/
export const signup = async (data) => {
    const config = {
        headers: {
            'Content-type': 'application/json',
        }
    }
    const response = await axios.post('/api/auth/signup', data, config);
    return response;
}
export const signin = async (data) => {
    const config = {
        headers: {
            'Content-type': 'application/json',
        }
    }
    const response = await axios.post('/api/auth/signin', data, config);
    return response;
}
/*blog api*/
export const createPost = async (post) => await axios.post('/api/auth/add_article', post);
export const fetchPosts = async () => await axios.get('/api/auth/posts');
export const fetchSinglePost = async (id) => await axios.get(`/api/auth/posts/${id}`);
export const deletePost = async (id) => await axios.delete(`/api/auth/posts/${id}`);
export const updatePost = async (id, updatedPost) => await axios.patch(`/api/auth/posts/${id}`, updatedPost);