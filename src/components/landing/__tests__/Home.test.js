import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import toJson from 'enzyme-to-json';
import Home from '../Home';


describe('Home.test.js', () => {

    it('renders without crashing', () => {
        const wrapper = shallow(<Home/>);

        expect(wrapper).toHaveLength(1);

        expect(wrapper.find('Header')).toHaveLength(1);
        expect(wrapper.find('Footer')).toHaveLength(1);   

        const tree = toJson(wrapper);
        expect(tree).toMatchSnapshot();    

    });
});
