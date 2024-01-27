import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './Pages/Booking/BookingForm';

test('renders Booking link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Booking/);
  expect(linkElement).toBeInTheDocument();
});

test('Checks to see if any occasions, other than None, Birthday, or Anniversery can be selected', () => {
  const handleSubmit = jest.fn();
  render(<BookingForm onSubmit={handleSubmit} />);

  const input = screen.getByLabelText(/Occasion:/);
  fireEvent.change(input, { target: { value: "Wedding" } });

  const submitButton = screen.getByRole("button");
  fireEvent.click(submitButton);

  expect(handleSubmit).not.toHaveBeenCalled();
  expect(submitButton).toHaveAttribute("disabled");
});
