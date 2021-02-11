import * as types from "../actions/adoptTypes";


const initialState = {
    adopts: [],
    currentAdopts: null,
};

const adoptReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CREATE_ADOPT:
            return {
                ...state,
                adopts: [...state.adopts, action.payload],
            };
        case types.FETCH_ADOPT:
            return {
                ...state,
                adopts: action.payload,
            };
        case types.FETCH_FOUR_ADOPT:
            return {
                ...state,
                adopts: action.payload,
            };
        case types.FETCH_SINGLE_ADOPT:
            return {
                ...state,
                currentAdopts: action.payload,
            };
        case types.UPDATE_ADOPT:
            return {
                ...state,
                adopts: state.adopts.map((adopt) => {
                    if (adopt._id === action.payload._id) {
                        return action.payload;
                    } else {
                        return adopt;
                    }
                }),
                currentAdopts: action.payload,
            };
        case types.DELETE_ADOPT:
            return {
                ...state,
                adopts: state.adopts.filter((adopt) => adopt._id !== action.payload),
                currentAdopts: null,
            };

        default:
            return {
                ...state,
            };
    }
};

export default adoptReducer;