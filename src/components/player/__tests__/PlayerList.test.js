import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import toJson from 'enzyme-to-json';
import PlayerList from '../PlayerList';


describe('PlayerList.test.js', () => {

    it('renders without crashing', () => {
        const props = {
            players: [
                { id: '1', firstName: 'Java Clean Code' },
                { id: '2', firstName: 'Java The Good Pards' },                
            ],
            handleRowSelect: jest.fn()            
        };
        
        const wrapper = shallow(<PlayerList {...props}/>);

        expect(wrapper).toHaveLength(1);
        expect(wrapper.find('BootstrapTable')).toHaveLength(1);

        const tree = toJson(wrapper);
        expect(tree).toMatchSnapshot();
    });
});
