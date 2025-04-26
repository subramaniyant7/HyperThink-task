import { render, screen } from '@testing-library/react';
import Sidebar from '../components/Sidebar';
import { BrowserRouter } from 'react-router-dom';

test('renders user profile or loader', () => {
  render(
    <BrowserRouter>
      <Sidebar />
    </BrowserRouter>
  );
  expect(screen.getByRole('menu')).toBeInTheDocument();
});