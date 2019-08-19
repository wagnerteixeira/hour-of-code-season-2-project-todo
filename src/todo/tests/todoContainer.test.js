import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import store from '../../store';
import _ from 'lodash';

import TodoContainer from '../todoContainer';
import { todoMock } from './todoMock';

configure({ adapter: new Adapter() });

describe('Test <TodoContainer />', function () {

    let component;
    const todoGroup = _.groupBy(todoMock.data, 'status');

    const todoList = todoGroup['TODO'] || [];
    const doingList = todoGroup['DOING'] || [];
    const doneList = todoGroup['DONE'] || [];

    beforeEach(() => {
        component = shallow(
            <Provider store={store}>
                <TodoContainer
                    todoList={todoList}
                    doingList={doingList}
                    doneList={doneList}
                />
            </Provider>
        );
    });

    it('render <TodoContainer /> ', () => {
        expect(toJson(component)).toMatchSnapshot();
    });

});