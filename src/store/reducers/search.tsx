import { searchActionType } from '../actionTypes'

interface search {
    predictions: any,
}
const initialState: search = {
    predictions: []
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case searchActionType.SET_PREDICTION_SEARCH:
            return {
                predictions: action.payload
            };
        default:
            return state;
    }
}

export default reducers;