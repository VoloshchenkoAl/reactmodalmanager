import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closeModal, closeAllModals } from '../../actions/modalActions';

const ModalWrap = ({
	children,
	closeModal,
	closeAllModals
}) => {

	const modals = React.Children.map(children, modal => 
		React.cloneElement(modal, {
			...modal.props,
			...{ closeModal, closeAllModals }
		})
	);

	return (
		<Modal
			isOpen={true}
			ariaHideApp={false}
			shouldCloseOnEsc={false}
			parentSelector={() => document.body}
		>
			<div>
				{modals}
			</div>
		</Modal>
	);

};

ModalWrap.propTypes = {
    closeModal: PropTypes.func.isRequired,
    closeAllModals: PropTypes.func.isRequired,
	children: PropTypes.element.isRequired
};

const mapDispatchToProps = dispatch => ({
	closeAllModals: () => {
		dispatch(closeAllModals());
	},
	closeModal: () => { 
		dispatch(closeModal()); 
	}
});

export default connect(null, mapDispatchToProps)(ModalWrap);