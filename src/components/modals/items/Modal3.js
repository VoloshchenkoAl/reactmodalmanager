import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modalActions';

const Modal3 = ({
    closeModal  
}) => (
    <div>
        <h2>Modal 3</h2>
        <p>close modal 3. open modal 2 from modals cache</p>
        <button onClick={closeModal}>close modal 3</button>
    </div>
);

Modal3.propTypes = {
    closeModal: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    closeModal: () => {
        dispatch(closeModal());
    }
});

export default connect(null, mapDispatchToProps)(Modal3);