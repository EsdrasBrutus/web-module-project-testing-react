import React from 'react';
import { getByAltText, getByText, render, screen } from '@testing-library/react';
import Episode from '../Episode';

const testEpisode = {
    id:1,
    name: "",
    image: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
    season: 1,
    number: 1,
    summary: "A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.",
    runtime: 1
}

const testEpisode2 = {
    id:2,
    name: "",
    image: null,
    season: 2,
    number: 2,
    summary: "A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.",
    runtime: 2
}

const testEpisodeWithoutImage = {
    //Add in approprate test data structure here.
}

test("renders without error", () => {
    render(<Episode episode={testEpisode}/>)

}); 

test("renders the summury test passed as prop", ()=>{
    const { getByText } = render(<Episode episode={testEpisode}/>)
    const summary = getByText(/A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest./i);

    expect(summary).toBeInTheDocument();
    
});

test("renders default image when image is not defined", ()=>{
    const { getByAltText }= render(<Episode episode={testEpisode2}/>)

    const img = getByAltText(/stranger_things.png/i)

    expect(img).toHaveAttribute('src','./stranger_things.png')
    
})

//Tasks
//1. Complete a test that shows the Episode component renders. Pass in the provided example episode data as a test prop.
//2. Modify the test data to display a specific summary statement. Complete a test that shows that the summary value passed in to the Episode component displays as expected. Use no more then 3 different expect statements to test the the existance of the summary value.
//3. The episode component displays a default value ('./stranger_things.png') when a image url is not provided. Create a new piece of test data with the image property set to null. Test that the alt tag of the image displayed is set to './stranger_things.png'.