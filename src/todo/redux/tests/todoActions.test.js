import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import { getAllTodo, GET_ALL_TODO } from '../todoActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const store = mockStore({ todo: [] });

describe('Test todoActions', () => {
    it('test getAllTodo', () => {
        store.dispatch(getAllTodo()).then(() => {
            const expectedActions = store.getActions();
            expect(expectedActions.length).toBe(1);            
            expect(expectedActions).toContainEqual({ type: GET_ALL_TODO });
        })
    });
})