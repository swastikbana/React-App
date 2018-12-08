import React from 'react';
import {mount} from 'enzyme';
import QuotePanel from '../QuotePanel';
import Root from '../../Root';

let wrapped;

beforeEach(()=>{  //Executed before each statement runs
    wrapped = mount(
        <Root>
            <QuotePanel/>
        </Root>
        ); //Wraped version of QuotePAnel component
});


it('shows a Quote box with ID as quote-box',()=>{
    expect(wrapped.find('#quote-box').length).toEqual(1);
});

it('shows a element with a corresponding id="text" inside Quote box ',()=>{
    expect(wrapped.find('#quote-box').length).toEqual(1);
});

afterEach(()=>{
    wrapped.unmount();
})


 
