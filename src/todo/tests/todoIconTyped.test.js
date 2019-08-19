import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { todoMock } from './todoMock';

configure({ adapter: new Adapter() });

import TodoIconTyped from '../todoIconTyped';

describe('Test <TodoIconTyped />', function () {

    let component;

    beforeEach(() => {
        component = shallow(
            <TodoIconTyped
                status={todoMock.defaultStatus}
            />
        );
    });

    it('render <TodoIconTyped /> ', () => {
        expect(toJson(component)).toMatchSnapshot();
    });

    it('render <TodoIconTyped /> ', () => {
        component = shallow(
            <TodoIconTyped
                status="TODO"
            />
        );
        expect(toJson(component).type).toEqual('ListAltIcon');
    });

    it('render <TodoIconTyped status="DOING"/> ', () => {        
        component = shallow(
            <TodoIconTyped
                status="DOING"
            />
        );
        expect(toJson(component).type).toEqual('UpdateIcon');
    });

    it('render <TodoIconTyped status="DONE"/> ', () => {        
        component = shallow(
            <TodoIconTyped
                status="DONE"
            />
        );
        expect(toJson(component).type).toEqual('CheckCircleOutlineIcon');
    });
   
});