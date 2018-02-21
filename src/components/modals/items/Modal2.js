import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../../actions/modalActions';
import { MODAL_TYPES } from '../../../constants/modalTypes';

const Modal2 = ({
    closeModal,
    openModal3
}) => (
    <div>
        <h2>Modal 2</h2>
        <button onClick={openModal3}>open modal 3</button>
        <button onClick={closeModal}>close modal 2</button>
    </div>
);

Modal2.propTypes = {
    closeModal: PropTypes.func.isRequired,
    openModal3: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    closeModal: () => {
        dispatch(closeModal());
    },
    openModal3: () => {
        dispatch(openModal(MODAL_TYPES.MODAL_3));
    }
});

export default connect(null, mapDispatchToProps)(Modal2);