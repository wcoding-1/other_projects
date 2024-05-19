
import React from "react";
import { render, screen, cleanup } from "@testing-library/react";

import {Todo} from './todo';

test('test strings', ()=>{
    render(<Todo/>);
    let todoElement = screen.getByTestId('todo-1')
    expect(todoElement).toBeInTheDocument()
    expect(todoElement).toHaveTextContent('Hello')
})
