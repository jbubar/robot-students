import {
  render,
  screen,
  cleanup,
  waitForElement
} from "@testing-library/react";
import axiosMock from "axios";
import App from './App';

afterEach(cleanup);

test('Fetches API data and renders it on the page', () => {
  axiosMock.get.mockResolvedValueOnce({ data: { student: "charles" } });
  render(<App />);
  const linkElement = screen.getByText(/charles/i);
  expect(linkElement).toBeInTheDocument();
});
