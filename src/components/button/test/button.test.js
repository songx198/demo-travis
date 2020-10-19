import React from 'react';
import ReactDom from 'react-dom';
import Button from '../button';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

//effacer les donnes apres chaque test
afterEach(cleanup);

it("test button", () => {
    const div = document.createElement("div");
    ReactDom.render(<Button></Button>, div)
})

//tester si le Text Content de mon button est-t-il égale a "Click"
it("test label du button", () => {
    const { getByTestId } = render(<Button label="Click"></Button>)
    expect(getByTestId('button')).toHaveTextContent("Click")
})



