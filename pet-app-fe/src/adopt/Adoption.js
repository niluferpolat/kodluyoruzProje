import { PlusCircleOutlined } from '@ant-design/icons';
import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdopt } from '../actions/adopt';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../helpers/auth';
import { Layout, Divider, Button, Modal, List } from 'antd';
import Adopt from './Adopt';
import './Adoption.css';
const { Content } = Layout;

function warning() {
	Modal.warning({
		title: 'Uyarı!',
		content: 'Sahiplendirme İlanı Açmak İçin Üye Girişi Yapınız',
	});
}
const Adoption = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchAdopt());
	}, [dispatch]);
	const adopts = useSelector((state) => state.adopts.adopts);
	return (
		<>
			<div className="adoptHeader"></div>
			<div className="adoptBody">
				<Content className="site-layout" style={{ padding: '0 50px' }}>
					<div className="site-layout-background">
						{!isAuthenticated() && (
							<Fragment>
								<Button type="primary" onClick={warning} style={{ float: 'right' }}>
									Yeni Sahiplendirme İlanı
									<PlusCircleOutlined />
								</Button>
							</Fragment>
						)}
						{isAuthenticated() && (
							<Fragment>
								<Link to="/adoption/addAdopt">
									<Button type="primary" style={{ float: 'right' }}>
										Yeni Sahiplendirme İlanı
										<PlusCircleOutlined />
									</Button>
								</Link>
							</Fragment>
						)}

						<Divider />
						<List
							className="listItems"
							grid={{ gutter: 16, column: 4 }}
							dataSource={adopts}
							renderItem={(item) => (
								<List.Item>
									<Adopt {...item} />
								</List.Item>
							)}
						/>
					</div>
				</Content>
			</div>
		</>
	);
};
export default Adoption;
