import { profileActionType } from 'store/actionTypes';

export const UPDATE_PROFILE_DETAILS = (data: any) => ({
    type: profileActionType.UPDATE_PROFILE_DETAILS,
    payload: data
});
