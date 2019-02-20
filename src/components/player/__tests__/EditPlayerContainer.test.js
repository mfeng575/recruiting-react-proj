import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import toJson from 'enzyme-to-json';
import {EditPlayerContainer} from '../EditPlayerContainer';


describe('EditPlayerContainer.test.js', () => {

    it('renders without crashing', () => {
        const props = {
            action: {
            },
            initialValues: {id: '', firstName: '', lastName: '', score: 0},
            match: {params: {id:'1'}}
        };

        const wrapper = shallow(<EditPlayerContainer {...props}/>);
        expect(wrapper.length).toEqual(1);

        const tree = toJson(wrapper);
        expect(tree).toMatchSnapshot();
    });

});



    
        