// src/__tests__/Home.test.js
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for the toBeInTheDocument() matcher
import Home from '../components/Home';
import { name, city } from '../data/user';

test('renders the h1 with the text "Name is a Web Developer from City"', () => {
  render(<Home />);

  const h1 = screen.getByText(new RegExp(`${name} is a Web Developer from ${city}`, "i"));
  expect(h1).toBeInTheDocument();
  expect(h1.tagName).toBe("H1"); // check that the element is a <h1>
});

test('the h1 has an inline style attribute with a color of "firebrick"', () => {
  render(<Home />);

  const h1 = screen.getByText(new RegExp(`${name} is a Web Developer from ${city}`, "i"));
  expect(h1).toHaveStyle({ color: "firebrick" });
});
