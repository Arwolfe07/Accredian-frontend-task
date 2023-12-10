import * as api from "../apis";
import { currentUser } from "./currentUser";

export const signup = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signup(authData);
        dispatch({ type: 'AUTH', data });
        dispatch(currentUser(JSON.parse(localStorage.getItem('Profile'))));
        dispatch({ type: 'SET_MESSAGE', message: data.message });
        navigate('/');
    } catch (error) {
        if (error?.response.data.state === 'UAE') {
            dispatch({ type: 'SET_MESSAGE', message: error?.response.data.message });
        }
        else{
            navigate('/error',{replace: true});
        }
    }
};

export const login = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.login(authData);
        dispatch({ type: 'AUTH', data });
        dispatch(currentUser(JSON.parse(localStorage.getItem('Profile'))));
        dispatch({ type: 'SET_MESSAGE', message: data.message });
        navigate('/');
    } catch (error) {
        if (error?.response.data.state === 'IC') {
            dispatch({ type: 'SET_MESSAGE', message: error?.response.data.message });
        } else if (error?.response.data.state === 'UDE') {
            dispatch({ type: 'SET_MESSAGE', message: error?.response.data.message });
        }
        else
        {
            navigate('/error',{replace: true});
        }
    }
};