import { getAuthUserData } from './../redux/auth-reducer'

const SET_INITIALIZER = 'SET_INITIALIZER';


let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_INITIALIZER:
            return {
                ...state,
                initialized: true
            };

        default:
            return state;
    };
};
export const initializedSuccess = () => ({ type: SET_INITIALIZER });
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    promise.then(() => {
        dispatch(initializedSuccess());
    })

}

export default appReducer;