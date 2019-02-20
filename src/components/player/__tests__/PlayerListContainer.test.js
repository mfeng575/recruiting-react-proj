import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import toJson from 'enzyme-to-json';
import createMemoryHistory from 'history/createMemoryHistory';
import { PlayerListContainer } from '../PlayerListContainer';


describe('PlayerListContainer.test.js', () => {

    it('renders without crashing', () => {
        const props = {
            players: [
                { firstName: 'Tiger' }
            ],
            action: { 
            },
            history: createMemoryHistory()
        };

        const wrapper = shallow(<PlayerListContainer {...props} />);

        expect(wrapper).toHaveLength(1);

        const tree = toJson(wrapper);
        expect(tree).toMatchSnapshot();

        expect(wrapper.find('button')).toHaveLength(1);
    });

  
});

