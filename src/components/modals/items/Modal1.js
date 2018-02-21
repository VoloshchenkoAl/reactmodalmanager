import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../../actions/modalActions';
import { MODAL_TYPES } from '../../../constants/modalTypes';

const Modal1 = ({
    closeModal,
    openModal4
}) => (
    <div>
        <h2>Modal 1</h2>
        <button onClick={openModal4}>open modal 4</button>
        <button onClick={closeModal}>close modal 1</button>
    </div>
);

Modal1.propTypes = {
    closeModal: PropTypes.func.isRequired,
    openModal4: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    closeModal: () => {
        dispatch(closeModal());
    },
    openModal4: () => {
        dispatch(openModal(MODAL_TYPES.MODAL_4));
    }
});

export default connect(null, mapDispatchToProps)(Modal1);