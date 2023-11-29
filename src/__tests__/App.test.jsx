import { render, screen, waitFor } from "@testing-library/react";
import { getByText } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import App from "../App"

test('modal is initially closed', async () => {
  const app = render(<App />);
  const openModalButton = screen.getByText(/Open modal/i);
  
  expect(screen.queryByText(/fjal/i)).not.toBeInTheDocument();

  userEvent.click(openModalButton);

  await waitFor(() => {
    expect(screen.getByText(/fjal/i)).toBeInTheDocument();
});
});


  test('product click adds to filterImages and removes from filterProducts', async() => {
    render(<App />);
  const openModalButton = screen.getByText(/Open modal/i);
  userEvent.click(openModalButton);
await waitFor(()=>{
  const productTitle = screen.getByText(/fjal/i);
  userEvent.click(productTitle);
 




})


   
  });
  