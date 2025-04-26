import { Layout } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AppRoutes from './routes';

const { Content } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <AppRoutes />
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;