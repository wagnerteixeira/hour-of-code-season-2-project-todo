import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import store from '../../store';

import TodoItem from '../todoItem';
import { todoMock } from './todoMock';

configure({ adapter: new Adapter() });

describe('Test <TodoItem />', function () {

    let component;
    let goTo = jest.fn();
    const _todoMock = { ...todoMock.data[0] }
    beforeEach(() => {
        component = shallow(
            <Provider store={store}>
                <TodoItem
                    goTo={goTo}
                    key={_todoMock.id}
                    todo={_todoMock}
                />
            </Provider>
        );
    });

    it('render <TodoItem /> ', () => {
        expect(toJson(component)).toMatchSnapshot();
    });

});