import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import store from '../../store';
import _ from 'lodash';

import TodoList from '../todoList';
import { todoMock } from './todoMock';

configure({ adapter: new Adapter() });

describe('Test <TodoList />', function () {

    let component;
    const todoGroup = _.groupBy(todoMock.data, 'status');
    beforeEach(() => {
        component = shallow(
            <Provider store={store}>
                <TodoList
                    headerTitle={todoMock.defaultHeaderTitle}
                    todos={todoGroup[todoMock.defaultStatus]}
                    status={todoMock.defaultStatus}
                />
            </Provider>
        );
    });

    it('render <TodoList /> ', () => {
        expect(toJson(component)).toMatchSnapshot();
    });

});