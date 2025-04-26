import { useEffect, useState } from 'react';
import api from '../services/api';
import { List, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

interface Post {
  id: number;
  title: string;
  body: string;
}

const Blogs = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      const randomId = Math.floor(Math.random() * 10) + 1;
      const response = await api.get(`/users/${randomId}/posts`);
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <List
      itemLayout="vertical"
      dataSource={posts}
      renderItem={item => (
        <List.Item
          key={item.id}
          actions={[
            <Button onClick={() => navigate(`/posts/${item.id}`)}>Edit</Button>,
            <Button danger>Delete</Button>
          ]}
          extra={<img width={100} alt="thumbnail" src="/sample.jpg" />}
        >
          <List.Item.Meta
            title={item.title}
            description={item.body.substring(0, 100) + '...'}
          />
        </List.Item>
      )}
    />
  );
};

export default Blogs;