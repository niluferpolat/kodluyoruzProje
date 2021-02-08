import { useEffect, Fragment, useState } from 'react';
import moment from 'moment';
import {
	DeleteTwoTone,
	EditTwoTone,
	PhoneOutlined,
	MailOutlined,
	ExclamationCircleOutlined,
	EnvironmentOutlined,
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { isAuthenticated } from '../helpers/auth';
import { fetchSingleAdopt, deleteAdopt } from '../actions/adopt';
import { Typography, Divider, Button, Modal, Layout } from 'antd';
import EditAdoptForm from './EditAdoptForm';
import "./AdoptionDetails.css";
const { Title, Paragraph, Text } = Typography;
const { confirm } = Modal;
const PostDetails = ({ history, match }) => {
	const { id } = match.params;
	const currentAdopt = useSelector((state) => state.adopts.currentAdopts);
	const [editMode, setEditMode] = useState(false);
	const { Content } = Layout;
	const openEditMode = () => {
		setEditMode(true);
	};
	const closeEditMode = () => {
		setEditMode(false);
	};
	const convertRelativeTime = (date) => {
		return moment(date).fromNow();
	};
	function info() {
		Modal.info({
			title: 'Ulaşım Bilgileri',
			content: (
				<div>
					<p>{currentAdopt?.communication}</p>
				</div>
			),
			onOk() {},
		});
	}
	function showConfirm() {
		confirm({
			title: 'Bu makaleyi silmek istediğinizden emin misiniz?',
			icon: <ExclamationCircleOutlined />,
			okText: 'Evet',
			cancelText: 'İptal',
			onOk() {
				dispatch(deleteAdopt(currentAdopt?._id));
				history.push('/adoption');
			},
			onCancel() {
				console.log('Cancel');
			},
		});
	}

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchSingleAdopt(id));
	}, [id, dispatch]);

	return (
		<Content className="site-layout" style={{ padding: '0 50px' }}>
			<div className="site-layout-background" style={{ padding: 24, minHeight: 500 }}>
				<Typography>
					{editMode ? (
						<EditAdoptForm adopt={currentAdopt} closeEditMode={closeEditMode} />
					) : (
						<div>
							{isAuthenticated() && (
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
											<Text type="secondary">Sil</Text>
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
											<Text type="secondary">Düzenle</Text>
										</Button>
									</div>
								</Fragment>
							)}
							<Text>{convertRelativeTime(currentAdopt?.createdAt)}</Text>
							<Text style={{ marginLeft: '380px', fontSize: '30px' }} strong>
								{currentAdopt?.title}
							</Text>
							<Divider />
							<img
								style={{ marginLeft: '400px' }}
								width={400}
								height={400}
								src={currentAdopt?.image}
							/>
							<br />
							<Paragraph style={{ marginLeft: '400px', marginTop: '10px' }}>
								{currentAdopt?.content}
							</Paragraph>
							<br />
							<Text style={{ marginLeft: '400px', marginTop: '10px' }}>
								<EnvironmentOutlined />
								{currentAdopt?.town}/{currentAdopt?.province}
							</Text>
							<br />
							<Text style={{ marginLeft: '400px', marginTop: '10px' }}>
								<strong>Cinsiyeti: </strong>
								{currentAdopt?.gender}
							</Text>
							<br />
							<Text style={{ marginLeft: '400px', marginTop: '10px' }}>
								<strong>Yaşı: </strong>
								{currentAdopt?.age}
							</Text>
							<br />
							<Text style={{ marginLeft: '400px', marginTop: '10px' }}>
								<strong>Türü: </strong>
								{currentAdopt?.species}
							</Text>
							<br />
							<Button
								type="primary"
								size="large"
								onClick={info}
								style={{ marginLeft: '560px', marginTop: '10px' }}
							>
								Ulaşın
							</Button>
						</div>
					)}
				</Typography>
			</div>
		</Content>
	);
};
export default PostDetails;
