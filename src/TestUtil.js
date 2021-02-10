import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
// Import your own reducer
import users from './Login/UserReducer';
import { members } from './Members/MemberReducer';

const reducers = {
    users, members
};
const rootReducer = combineReducers(reducers);

function render(
    ui,
    {
        initialState,
        store = createStore(rootReducer, initialState),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }) {
        console.log("inside custom rendere initialState", initialState)
        console.log("inside custom rendere store", store)
        console.log("inside custom rendere childer", children)
        console.log("store actions ", store.getActions())
        return <Provider store={store}>{children}</Provider>
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }