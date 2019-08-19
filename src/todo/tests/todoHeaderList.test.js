import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import store from '../../store';

import TodoHeaderList from '../todoHeaderList';
import { todoMock } from './todoMock';

configure({ adapter: new Adapter() });

describe('Test <TodoHeaderList />', function () {

    let component;
    let goTo = jest.fn();
    beforeEach(() => {
        component = shallow(
            <TodoHeaderList
                title={todoMock.defaultHeaderTitle}
                status={todoMock.defaultStatus}
                goTo={goTo}
            />
        );
    });

    it('render <TodoHeaderList /> ', () => {
        expect(toJson(component)).toMatchSnapshot();
    });

});