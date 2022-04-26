import { profileActionType } from '../actionTypes'

interface profile {
    id: string | null,
    username: string | null,
    address: string | null,
    email: string | null,
    tel: string | null,
    configApp: any,
    information: any,
    photo: any,
    role: any,
}
const initialState: profile = {
    id: null,
    username: null,
    address: null,
    email: null,
    tel: null,
    configApp: {},
    information: {},
    photo: {},
    role: {},
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case profileActionType.UPDATE_PROFILE_DETAILS:
            return action.payload;
        default:
            return state;
    }
}

export default reducers;