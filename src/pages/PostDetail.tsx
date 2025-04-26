import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../services/api';
import { Input, Button, Form } from 'antd';

const PostDetail = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    api.get(`/posts/${postId}`).then(res => setPost(res.data));
  }, [postId]);

  const onFinish = async (values: any) => {
    await api.put(`/posts/${postId}`, values);
    alert('Post updated!');
  };

  return post ? (
    <Form initialValues={post} onFinish={onFinish} layout="vertical">
      <Form.Item label="Title" name="title">
        <Input />
      </Form.Item>
      <Form.Item label="Body" name="body">
        <Input.TextArea rows={4} />
      </Form.Item>
      <Button type="primary" htmlType="submit">Save</Button>
    </Form>
  ) : (<p>Loading...</p>);
};

export default PostDetail;