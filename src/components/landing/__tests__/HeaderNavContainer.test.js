import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import toJson from 'enzyme-to-json';
import {HeaderNavContainer} from '../HeaderNavContainer';


describe('HeaderNavContainer.test.js', () => {

    it('renders without crashing', () => {
        const props = { apiCallsInProgress: 0 }
        const wrapper = shallow(<HeaderNavContainer {...props}/>);

        expect(wrapper).toHaveLength(1);

        expect(wrapper.find('nav')).toHaveLength(1);
        expect(wrapper.find('NavLink')).toHaveLength(2);

        const tree = toJson(wrapper);
        expect(tree).toMatchSnapshot();          
    });
});
