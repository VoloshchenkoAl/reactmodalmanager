import {
    OPEN_MODAL,
    CLOSE_MODAL,
   CLOSE_ALL_MODALS 
} from '../constants/actionTypes';

const initialState = [];

const modals = (state = initialState, action) => {

    switch(action.type) {
        case OPEN_MODAL:
            return [
                ...state,
                {
                    modalType: action.modalType,
                    modalProps: action.modalProps
                }
            ];

        case CLOSE_MODAL:
            const newState = [...state];
            newState.pop();
            return newState;

        case CLOSE_ALL_MODALS:
            return initialState;

        default:
            return state;
    }

};

export default modals;