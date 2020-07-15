import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from '../actions'

const initialState = {
    activity: null,
    isFetching: false,
    error: ''
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_START:
            return {
                ...state,
                error: '',
                isFetching: true
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                error: '',
                isFetching: false,
                activity: action.payload
            }
        case FETCH_FAIL:
            return {
                ...state,
                error: action.payload,
                isFetching: false,
            }
        default:
            return state;
    }
}

export default reducer;