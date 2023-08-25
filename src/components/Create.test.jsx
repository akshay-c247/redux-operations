import {render,screen} from '@testing-library/react'
import Create from './Create'
import { useSelector, useDispatch } from 'react-redux'; 

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom')),
    useNavigate: () => mockedUsedNavigate,
}))
test("fields should be empty",()=>{
    

    render(<Create/>)
    const inputelement=screen.getByPlaceholderText("Name")
    expect(inputelement).toBeInTheDocument()
})
test("fields should be empty",()=>{
    

    render(<Create/>)
    const inputelement=screen.getByPlaceholderText("Email")
    expect(inputelement).toBeInTheDocument()
})
test("button should be disable",()=>{
    

    render(<Create/>)
    const buttonelement=screen.getByRole("button",{name:"Submit",exact:false})
    expect(buttonelement).toBeDisabled()
})