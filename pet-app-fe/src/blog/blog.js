import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchPosts } from "../actions/post"
import { List } from "antd"
import { useSelector } from "react-redux"
import Post from "./post"
const Blog = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch])
    const posts = useSelector((state) => state.posts.posts);
    return (<>
        <List grid={{ gutter: 16, column: 4 }}
            dataSource={posts}
            renderItem={item => (
                <List.Item>
                    <Post {...item} />
                </List.Item>
            )}
        />




    </>)
}
export default Blog;