import React, { useState } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { useDispatch } from 'react-redux';
import FileBase64 from 'react-file-base64';
import TextArea from 'antd/lib/input/TextArea';
import { updateAdopt } from '../actions/adopt';
import './EditAdoptForm.css';

const EditAdoptForm = ({ history, adopt, closeEditMode }) => {
	const [form] = Form.useForm();
	const [file, setFile] = useState(adopt?.image);
	const dispatch = useDispatch();
	const { Option } = Select;
	const onFinish = (values) => {
		const updatedAdopt = {
			_id: adopt._id,
			...values,
			image: file,
		};
		dispatch(updateAdopt(adopt._id, updatedAdopt));
		setFile(null);
		closeEditMode();
		history.push('/adoption');
	};
	return (
		<div>
			<Form
				className="all-form"
				form={form}
				name="addadoption"
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
					<Input
						id="title"
						defaultValue={adopt?.title}
						name="title"
						placeholder="Başlık"
						autoComplete="off"
					/>
				</Form.Item>
				<Form.Item name="content">
					<TextArea
						id="content"
						name="content"
						defaultValue={adopt?.content}
						placeholder="Eklemek İstedikleriniz(İsteğe Bağlı)"
					/>
				</Form.Item>
				<Form.Item name="image">
					<FileBase64 name="image" multiple={false} onDone={({ base64 }) => setFile(base64)} />
				</Form.Item>
				<Form.Item style={{ marginBottom: 0 }}>
					<Form.Item
						name="species"
						rules={[{ required: true }]}
						label="Türü"
						style={{ display: 'inline-block', width: 'calc(12% - 8px)' }}
					>
						<Select id="species" style={{ width: 120 }}>
							<Option value="kedi">Kedi</Option>
							<Option value="köpek">Köpek</Option>
							<Option value="kuş">Kuş</Option>
							<Option value="kemirgen">Kemirgen</Option>
							<Option value="diğer">Diğer</Option>
						</Select>
					</Form.Item>
					<Form.Item
						name="gender"
						label="Cinsiyeti"
						rules={[{ required: true }]}
						style={{ display: 'inline-block', width: 'calc(12% - 8px)', margin: '0 8px' }}
					>
						<Select id="gender" style={{ width: 120 }}>
							<Option value="dişi">Dişi</Option>
							<Option value="erkek">Erkek</Option>
						</Select>
					</Form.Item>
					<Form.Item
						name="age"
						label="Yaşı"
						rules={[{ required: true }]}
						style={{ display: 'inline-block', width: 'calc(12% - 8px)', margin: '0 8px' }}
					>
						<Select id="age" style={{ width: 120 }}>
							<Option value="0-1">0-12 Aylık</Option>
							<Option value="1-7">1-7 Yaşında</Option>
							<Option value="8-12">8-12 Yaşında</Option>
							<Option value="12+">12 Yaş Üstü</Option>
						</Select>
					</Form.Item>
				</Form.Item>
				<Form.Item style={{ marginBottom: 0 }}>
					<Form.Item
						name="province"
						rules={[{ required: true }]}
						label="İl"
						style={{ display: 'inline-block', width: 'calc(12% - 8px)' }}
					>
						<Input id="province" defaultValue={adopt?.province} name="province" />
					</Form.Item>
					<Form.Item
						name="town"
						label="İlçe"
						rules={[{ required: true }]}
						style={{ display: 'inline-block', width: 'calc(12% - 8px)', margin: '0 8px' }}
					>
						<Input id="town" name="town" defaultValue={adopt?.town} />
					</Form.Item>
				</Form.Item>
				<Form.Item name="communication" rules={[{ required: true }]}>
					<Input
						id="communication"
						defaultValue={adopt?.communication}
						name="communication"
						placeholder="Email ya da Telefon Numarası Giriniz"
					/>
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit">
						Onayla
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};
export default EditAdoptForm;
