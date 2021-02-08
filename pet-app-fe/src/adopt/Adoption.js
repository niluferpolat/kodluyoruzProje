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
			<div className="adoptHeader">
				{!isAuthenticated() && (
					<Fragment>
						<Button className="btn_Sahiplendir" type="primary" onClick={warning}>
							Sahiplendir
						</Button>
					</Fragment>
				)}
				{isAuthenticated() && (
					<Fragment>
						<Link to="/adoption/addAdopt">
							<Button className="btn_Sahiplendir" type="primary">
								Sahiplendir
							</Button>
						</Link>
					</Fragment>
				)}
			</div>
			<Divider />
			<div className="adoptBody">
				<Content className="site-layout" style={{ padding: '0 50px' }}>
					<div className="site-layout-background">
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
