import moment from 'moment';
import { EnvironmentOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Card, Button, Typography } from 'antd';
import './Adopt.css';
const Adopt = ({ _id, title, content, image, gender, createdAt, province, town }) => {
	const convertRelativeTime = (date) => {
		return moment(date).fromNow();
	};
	const { Meta } = Card;
	const { Text } = Typography;
	return (
		<>
			<Card className="cardItems" hoverable actions={[]}>
				<img className="card-photo" src={image} />
				<Text>{convertRelativeTime(createdAt)}</Text>
				<br />
				<Text strong>{title}</Text>
				<hr />
				<Meta description={content?.substring(0, 90) + '...'} />
				<br />
				<Text>
					<EnvironmentOutlined /> {town}/{province}
				</Text>
				<br />
				<Button type="link">
					<Link to={`/adoption/${_id}`}>Daha fazla...</Link>
				</Button>
			</Card>
		</>
	);
};
export default Adopt;
