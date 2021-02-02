import { useEffect, Fragment, useState } from 'react';
import moment from 'moment';
import { DeleteTwoTone, EditTwoTone, ExclamationCircleOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { isAuthenticated } from '../helpers/auth';
import { fetchSinglePost, deletePost } from '../actions/post';
import EditPostForm from './EditPostForm';
import { Typography, Divider, Button, Modal } from 'antd';
import './postdetails.css';
const { Title, Paragraph, Text } = Typography;
const { confirm } = Modal;
const PostDetails = ({ history, match }) => {
	const { id } = match.params;
	const currentPost = useSelector((state) => state.posts.currentPost);
	const [editMode, setEditMode] = useState(false);
	const openEditMode = () => {
		setEditMode(true);
	};
	const closeEditMode = () => {
		setEditMode(false);
	};
	const convertRelativeTime = (date) => {
		return moment(date).fromNow();
	};
	function showConfirm() {
		confirm({
			title: 'Bu makaleyi silmek istediğinizden emin misiniz?',
			icon: <ExclamationCircleOutlined />,
			okText: 'Evet',
			cancelText: 'İptal',
			onOk() {
				dispatch(deletePost(currentPost?._id));
				history.push('/posts');
			},
			onCancel() {
				console.log('Cancel');
			},
		});
	}

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchSinglePost(id));
	}, [id, dispatch]);

	return (
		<Typography>
			{editMode ? (
				<EditPostForm post={currentPost} closeEditMode={closeEditMode} />
			) : (
				<div>
					<div className="header">
						<Title className="titleArticle">{currentPost?.title}</Title>

						{isAuthenticated() && isAuthenticated().role === 1 && (
							<Fragment>
								<div className="btns">
									<Button
										type="link"
										style={{
											float: 'right',
											fontSize: '20px',
											borderBlockColor: 'white',
											color: 'white',
										}}
										onClick={showConfirm}
									>
										<DeleteTwoTone twoToneColor="#ee99a0" />
										Sil
									</Button>
									<Button
										type="link"
										onClick={openEditMode}
										style={{
											float: 'right',
											fontSize: '20px',
											borderBlockColor: 'white',
											color: 'white',
										}}
									>
										<EditTwoTone twoToneColor="#ee99a0" />
										Düzenle
									</Button>
								</div>
							</Fragment>
						)}
						<Text className="timeArticle">{convertRelativeTime(currentPost?.createdAt)}</Text>

						<Divider />
					</div>
					<Paragraph className="article">{currentPost?.content}</Paragraph>
				</div>
			)}
		</Typography>
	);
};
export default PostDetails;
