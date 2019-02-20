import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import toJson from 'enzyme-to-json';
import Footer from '../Footer';


describe('Footer.test.js', () => {

    it('renders without crashing', () => {
        
        const wrapper = shallow(<Footer />);

        expect(wrapper).toHaveLength(1);

        expect(wrapper.find('footer')).toHaveLength(1);
        
        const tree = toJson(wrapper);
        expect(tree).toMatchSnapshot();
        
    });
});
