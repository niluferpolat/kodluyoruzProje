import React, { useState } from 'react';
import {
    Form,
    Input,
    Button,

} from "antd"
import { useDispatch } from "react-redux";
import FileBase64 from "react-file-base64"
import TextArea from 'antd/lib/input/TextArea';
import { updatePost } from '../actions/post'

const EditPostForm = ({ history, post, closeEditMode }) => {
    const [form] = Form.useForm();
    const [file, setFile] = useState(post?.image);
    const dispatch = useDispatch();
    const onFinish = (values) => {
        const updatedPost = {
            _id: post._id,
            ...values,
            image: file,
        };
        dispatch(updatePost(post._id, updatedPost));
        setFile(null);
        closeEditMode();
        history.push("/posts")
    };
    return (
        <Form

            form={form}
            name="addarticle"
            onFinish={onFinish}
            scrollToFirstError
        >
            <Form.Item
                name="title"

            >
                <Input id="title" defaultValue={post?.title} name="title" placeholder="Başlık" />
            </Form.Item>
            <Form.Item
                name="content"

            >
                <TextArea id="content" defaultValue={post?.content} name="content" placeholder="Makale" />
            </Form.Item>
            <Form.Item name="image">
                <FileBase64 name="image" multiple={false} onDone={({ base64 }) => setFile(base64)} />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Onayla
                </Button>
            </Form.Item>
        </Form>
    );
}
export default EditPostForm;