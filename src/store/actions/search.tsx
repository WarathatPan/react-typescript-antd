import { searchActionType } from 'store/actionTypes';

export const SET_PREDICTION_SEARCH = (data: any) => ({
    type: searchActionType.SET_PREDICTION_SEARCH,
    payload: data
});
