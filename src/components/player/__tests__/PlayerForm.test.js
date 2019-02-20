import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import toJson from 'enzyme-to-json';
import {PlayerForm} from '../PlayerForm';



function setup(heading) {
    const props = {
        handleSubmit: jest.fn(),
        pristine: true,
        reset: jest.fn(),
        submitting: false,
        heading: heading,
        handleSave: jest.fn(),
        handleCancel: jest.fn(),
    };

    return shallow(<PlayerForm {...props}/>);
}


describe('PlayerForm.test.js', () => {

    it('renders without crashing', () => {
        const wrapper = setup('Add Player');
        expect(wrapper.length).toEqual(1);
        const tree = toJson(wrapper);
        expect(tree).toMatchSnapshot();
    });


    it('renders form and display "Add Player" in h1', () => {
        const wrapper = setup('Add Player');
        expect(wrapper.find('h1').text()).toEqual('Add Player');
    });


    it('displays "Edit Player" in h1', () => {
        const wrapper = setup('Edit Player');
        expect(wrapper.find('h1').text()).toEqual('Edit Player');
    });

    
});

