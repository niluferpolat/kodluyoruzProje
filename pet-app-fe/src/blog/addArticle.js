import React, { useState } from 'react';
import {
    Form,
    Input,
    Button,

} from "antd"
import { useDispatch } from "react-redux";
import FileBase64 from "react-file-base64"
import TextArea from 'antd/lib/input/TextArea';
import { createPost } from '../actions/post'

const AddArticle = () => {
    const [form] = Form.useForm();
    const [file, setFile] = useState(null);
    const dispatch = useDispatch();
    const onFinish = (values) => {
        dispatch(createPost({ ...values, image: file }));
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
                rules={[
                    {
                        required: true,
                        message: 'Lütfen bir başlık giriniz',
                    },
                ]}
            >
                <Input id="title" name="title" placeholder="Başlık" />
            </Form.Item>
            <Form.Item
                name="content"
                rules={[
                    {
                        required: true,
                        message: 'Lütfen makalenizi yazınız',
                    },
                ]}
            >
                <TextArea id="content" name="content" placeholder="Makale" />
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
export default AddArticle;