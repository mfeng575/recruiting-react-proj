import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import toJson from 'enzyme-to-json';
import Spinner from '../Spinner';

describe('Spinner.test.js', () => {
    let wrapper = undefined;

    beforeEach(() => {
        wrapper = shallow(<Spinner/>);
        return wrapper;
    });


    it('renders without crashing', () => {
        expect(wrapper.length).toEqual(1);
    });


    it('renders as expected', () => {
        const tree = toJson(wrapper);
        expect(tree).toMatchSnapshot();
    });    
});
