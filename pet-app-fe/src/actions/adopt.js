import * as api from '../api/auth'
import * as types from './adoptTypes'

export const createAdopt = (post) => async (dispatch) => {
    try {
        const { data } = await api.createAdopt(post);
        dispatch({
            type: types.CREATE_ADOPT,
            payload: data,
        });
    } catch (error) {
        console.log(error);
    }
};
export const fetchAdopt = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAdopt();
        dispatch({
            type: types.FETCH_ADOPT,
            payload: data,
        });
    } catch (error) {
        console.log(error);
    }
};
export const fetchFourAdopt = () => async (dispatch) => {
    try {
        const { data } = await api.fetchFourAdopt();
        dispatch({
            type: types.FETCH_FOUR_ADOPT,
            payload: data,
        });
    } catch (error) {
        console.log(error);
    }
};
export const fetchSingleAdopt = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchSingleAdopt(id);
        dispatch({
            type: types.FETCH_SINGLE_ADOPT,
            payload: data,
        });
    } catch (error) {
        console.log(error);
    }
};
export const updateAdopt = (id, adopt) => async (dispatch) => {
    try {
        const { data } = await api.updateAdopt(id, adopt);

        dispatch({ type: types.UPDATE_ADOPT, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteAdopt = (id) => async (dispatch) => {
    try {
        const { data } = await api.deleteAdopt(id);
        dispatch({
            type: types.DELETE_ADOPT,
            payload: data._id,
        });
    } catch (error) {
        console.log(error);
    }
};