import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

test("Greet renders correctly", () => {
  render(<Greet />) //render create the virtul DOM
  const textElement = screen.getByText(/greet/i)
  expect(textElement).toBeInTheDocument()
})

test("Greet renders with name", () => {
  render(<Greet name='Jerry'/>)
  const textElement = screen.getByText('Greet Jerry')
  expect(textElement).toBeInTheDocument()
})