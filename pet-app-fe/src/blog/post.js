import moment from 'moment';
import { Link } from 'react-router-dom';
import { Card, Button, Typography } from 'antd';
import './post.css';


const Post = ({ _id, title, content, image, createdAt }) => {
	const convertRelativeTime = (date) => {
		return moment(date).fromNow();
	};
	const { Meta } = Card;
	const { Text } = Typography;
	return (
		<>
			<div className="all">
				<Card className="card" hoverable>
					<img className="imgStyle" src={image} height="300px" alt="" />{' '}
					<div className="contentStyle">
						<Text className="time">{convertRelativeTime(createdAt)}</Text>
						<br />
						<Text className="title" strong>
							{title}
						</Text>
						<hr />
						<Meta className="description" description={content?.substring(0, 90) + '...'} />
						<Button type="link">
							<Link className="link" to={`/posts/${_id}`}>
								Daha fazla...
							</Link>
						</Button>
					</div>
				</Card>
			</div>
			</>
		
	);
};
export default Post;
