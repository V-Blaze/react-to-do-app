import { render, screen } from '@testing-library/react';
import TodoContainer from './components/TodoContainer';

test('renders learn react link', () => {
  render(<TodoContainer />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
