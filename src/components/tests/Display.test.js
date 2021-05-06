import React from 'react';
import { getByRole, getByTestId, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Display from '../Display'
import App from '../../App'

import fetchShow from '../../api/fetchShow'

const testShow = {
        name:'',
        summary:'',
        seasons:[{id:1,name:'Season 1', episodes:[]},
                 {id:2, name:'Season 2', episodes:[]}]
    }


jest.mock("../../api/fetchShow");

test('Display component renders without any passed in props',()=>{
    render(<Display />)
})

test('when the fetch button is pressed, the show component will display', async ()=>{
    render(<Display />)
    fetchShow.mockResolvedValueOnce(testShow);

    const button = screen.getByRole("button");
    userEvent.click(button);

    await waitFor(() => {
        const renderedShow = screen.getByTestId('show-container')
        expect(renderedShow).toBeInTheDocument();

    });
})

test('', async ()=>{
    render(<Display />)
    fetchShow.mockResolvedValueOnce(testShow);

    const button = screen.getByRole("button");
    userEvent.click(button);

    await waitFor(() => {
        const renderedSeasons = screen.getAllByTestId('season-option')
        expect(renderedSeasons).toHaveLength(2);

    });
})

test('Test that when the fetch button is pressed, displayFun is called',async ()=>{
    const displayFunc = jest.fn(() => { return true });
    Display.displayFunc = displayFunc
    render(<Display displayFun={displayFunc}/>);
    fetchShow.mockResolvedValueOnce(testShow);
    
    const button = screen.getByRole("button");
    userEvent.click(button);
    await waitFor(() => {
        expect(displayFunc).toHaveBeenCalled(); 
    });
        
})  




///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.