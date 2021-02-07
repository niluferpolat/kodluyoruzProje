import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchPosts } from '../actions/post';
import { Divider, List } from 'antd';
import { useSelector } from 'react-redux';
import Post from './post';
import './blog.css';
const Blog = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);
	const posts = useSelector((state) => state.posts.posts);
	return (
		<>
			<div className="blogHeader"></div>
			<Divider />
			<List
				className="list"
				grid={{ gutter: 5, column: 3 }}
				dataSource={posts}
				renderItem={(item) => (
					<List.Item>
						<Post {...item} />
					</List.Item>
				)}
			/>
		</>
	);
};
export default Blog;
