import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders Movie Manager header and search input', () => {
  render(<App />);
  const headerElement = screen.getByText(/Movie Manager/i);
  expect(headerElement).toBeInTheDocument();

  const searchInput = screen.getByPlaceholderText(/Tìm tên phim/i);
  expect(searchInput).toBeInTheDocument();
});

test('allows searching movies by title', () => {
  render(<App />);
  const searchInput = screen.getByPlaceholderText(/Tìm tên phim/i);

  fireEvent.change(searchInput, { target: { value: 'Interstellar' } });
  expect(screen.getAllByText('Interstellar').length).toBeGreaterThan(0);
  expect(screen.queryByText('Spirited Away')).not.toBeInTheDocument();
});

test('toggles theme between light and dark', () => {
  render(<App />);
  const themeButton = screen.getByRole('button', { name: /toggle theme/i });
  expect(themeButton).toBeInTheDocument();

  fireEvent.click(themeButton);
  expect(document.body.getAttribute('data-bs-theme')).toBe('dark');
});

test('renders and finds Your Name movie', () => {
  render(<App />);
  const searchInput = screen.getByPlaceholderText(/Tìm tên phim/i);

  fireEvent.change(searchInput, { target: { value: 'Your Name' } });
  expect(screen.getByText('Your Name')).toBeInTheDocument();
});

