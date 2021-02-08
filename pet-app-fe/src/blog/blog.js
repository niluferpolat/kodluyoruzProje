import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchPosts } from '../actions/post';
import { Divider, List, Layout } from 'antd';
import { useSelector } from 'react-redux';
import Post from './post';
import './blog.css';
const Blog = () => {
	const { Footer } = Layout;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);
	const posts = useSelector((state) => state.posts.posts);
	return (
		<>
			<div className="blogHeader"></div>
			<Divider />
			<div className="blogBody">
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
				<Footer className="site-footer">Petstagram ©2020 Created by IN</Footer>
			</div>
		</>
	);
};
export default Blog;
