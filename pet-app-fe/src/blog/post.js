import moment from "moment";
import { Link } from "react-router-dom";
import { Card, Button, Typography } from 'antd';

const Post = ({ _id, title, content, image, createdAt }) => {
    const convertRelativeTime = (date) => {
        return moment(date).fromNow();
    }
    const { Meta } = Card;
    const { Text } = Typography;
    return (
        <Card
            hoverable
            style={{ width: 220 }}
            cover={<img src={image} height="250px" width="300px" alt="" />}
        >   <Text disabled>{convertRelativeTime(createdAt)}</Text>
            <br />
            <Text strong>{title}</Text>
            <Meta description={content?.substring(0, 100) + "..."} />
            <Button type="link"><Link to={`/posts/${_id}`}>Daha fazla...</Link></Button>
        </Card>
    )
}
export default Post;