import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ModalManager from './modals/ModalManager';
import { openModal } from '../actions/modalActions';
import { MODAL_TYPES } from '../constants/modalTypes';

const App = ({
    openModal1,
    openModal2
}) => (
    <div>
        <header>
            <button onClick={openModal1} >Open Modal 1</button>
            <button onClick={openModal2} >Open Modal 2</button>
        </header>
        <ModalManager />
    </div>
);

App.propTypes = {
    openModal1: PropTypes.func.isRequired,
    openModal2: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    openModal1: () => {
        dispatch(openModal(MODAL_TYPES.MODAL_1));
    },
    openModal2: () => {
        dispatch(openModal(MODAL_TYPES.MODAL_2));
    }
});

export default connect(null, mapDispatchToProps)(App);