import React from 'react';
import ReactDom from 'react-dom';
import Button from '../button';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import render2 from "react-test-renderer";

//effacer les donnes apres chaque test
afterEach(cleanup);

it("test button", () => {
    const div = document.createElement("div");
    ReactDom.render(<Button></Button>, div)
})

//tester si le Text Content de mon button est-t-il égale a "Cliquer"
it("test label du button", () => {
    const { getByTestId } = render(<Button label="Cliquer"></Button>)
    expect(getByTestId('button')).toHaveTextContent("Cliquer")
})



