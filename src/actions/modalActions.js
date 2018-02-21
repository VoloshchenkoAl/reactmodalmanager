import {
    OPEN_MODAL,
    CLOSE_MODAL,
    CLOSE_ALL_MODALS,
} from '../constants/actionTypes';

export const openModal = (modalType, modalProps = {}) => ({
    type: OPEN_MODAL,
    modalType,
    modalProps
});

export const closeModal = () => ({
    type: CLOSE_MODAL
});

export const closeAllModals = () => ({
    type: CLOSE_ALL_MODALS
});