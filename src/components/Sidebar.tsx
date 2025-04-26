import { Layout, Menu, Avatar, Spin } from 'antd';
import { Link } from 'react-router-dom';
import { useUser } from '../hooks/useUser';

const { Sider } = Layout;

const Sidebar = () => {
  const user = useUser();

  return (
    <Sider width={250} style={{ background: '#fff', padding: '20px' }}>
      {user ? (
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <Avatar size={64} src={`https://i.pravatar.cc/150?img=${user.id}`} />
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ) : (
        <Spin />
      )}
      <Menu mode="vertical">
        <Menu.Item key="dashboard">
          <Link to="/">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="blogs">
          <Link to="/blogs">Blogs</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;