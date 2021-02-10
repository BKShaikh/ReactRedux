import configureMockStore from 'redux-mock-store';
import { render, fireEvent, screen, cleanup, waitFor } from "@testing-library/react";
import React from "react";
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from "react-redux";
import store from "../store";
import thunk from 'redux-thunk';
import { Login } from './Login'
//import { render, fireEvent, screen } from '../TestUtil';
global.matchMedia = global.matchMedia || function () {
    return {
        addListener: jest.fn(),
        removeListener: jest.fn(),
    };
};

const history = createMemoryHistory();
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);
const storeMock = mockStore(store.getState());


describe("Login Page", () => {
    afterEach(() => cleanup)

    test("Login Page", () => {
        render(
            <Provider store={storeMock}>
                <Login />
            </Provider>
        )
        expect(screen.getByTestId(/loginForm/i)).toBeInTheDocument()
    });
    test("Login Page Renders Correctly", () => {
        render(
            <Provider store={storeMock}>
                <Login />
            </Provider>
        )
        expect(screen.getByTestId(/UsernameInput/i)).toBeTruthy();
        expect(screen.getByTestId(/PasswordInput/i)).toBeTruthy();
        expect(screen.getByTestId(/submitButton/i)).toBeTruthy();
    });
    test("Login Page Renders Values Change Correctly", () => {
        render(
            <Provider store={storeMock}>
                <Login />
            </Provider>
        )
        fireEvent.change(screen.getByTestId(/UsernameInput/i), {
            target: { value: "admin" }
        });
        fireEvent.change(screen.getByTestId(/PasswordInput/i), {
            target: { value: "admin" }
        });
        expect(screen.getByTestId(/UsernameInput/i).value).toBe("admin");
        expect(screen.getByTestId(/PasswordInput/i).value).toBe("admin");
    });



    test("Login On Submit", async () => {
        const loginButton = jest.fn();
        const { debug } = render(<Login onLoginPressed={loginButton} />);
        fireEvent.change(screen.getByTestId(/UsernameInput/i), {
            target: { value: 'admin' }
        });
        fireEvent.change(screen.getByTestId(/PasswordInput/i), {
            target: { value: 'admin' }
        });
        fireEvent.click(screen.getByTestId("submitButton"));

        await waitFor(() => {
            expect(loginButton).toHaveBeenCalled();
        });
    });
    test("Login On Submit Failed Due to Password", async () => {
        const loginButton = jest.fn();
        const { debug } = render(<Login onFormSubmitFailed={loginButton} />);
        fireEvent.change(screen.getByTestId(/UsernameInput/i), {
            target: { value: 'admin' }
        });
        fireEvent.change(screen.getByTestId(/PasswordInput/i), {
            target: { value: '' }
        });
        fireEvent.click(screen.getByTestId("submitButton"));

        await waitFor(() => {
            expect(loginButton).toHaveBeenCalled();
        });
    });
    test("Login On Submit Failed Due to Username", async () => {
        const loginButton = jest.fn();
        const { debug } = render(<Login onFormSubmitFailed={loginButton} />);
        fireEvent.change(screen.getByTestId(/UsernameInput/i), {
            target: { value: '' }
        });
        fireEvent.change(screen.getByTestId(/PasswordInput/i), {
            target: { value: 'admin' }
        });
        fireEvent.click(screen.getByTestId("submitButton"));

        await waitFor(() => {
            expect(loginButton).toHaveBeenCalled();
        });
    });
});