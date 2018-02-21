import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closeAllModals } from '../../../actions/modalActions';

const Modal4 = ({
    closeAllModals
}) => (
    <div>
        <h2>Modal 4</h2>
        <p>remove modal cache</p>
        <button onClick={closeAllModals}>close all modals</button>
    </div>
);

Modal4.propTypes = {
    closeAllModals: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    closeAllModals: () => {
        dispatch(closeAllModals());
    },
});

export default connect(null, mapDispatchToProps)(Modal4);