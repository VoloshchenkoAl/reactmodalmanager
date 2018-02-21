import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalWrap from './ModalWrap';
import { MODAL_TYPES } from '../../constants/modalTypes';

// list of modals
import Modal1 from './items/Modal1';
import Modal2 from './items/Modal2';
import Modal3 from './items/Modal3';
import Modal4 from './items/Modal4';

const ModalComponentsTable = {
    [MODAL_TYPES.MODAL_1]: Modal1,
    [MODAL_TYPES.MODAL_2]: Modal2,
    [MODAL_TYPES.MODAL_3]: Modal3,
    [MODAL_TYPES.MODAL_4]: Modal4
};

class ModalManager extends Component {

	render() {

		const { currentModals } = this.props;

		if(currentModals.length === 0) {
			return null;
		}

		const renderModals = currentModals.map( (modalDescription, index) => {
			const { modalType, modalProps } = modalDescription;
			const ModalComponent = ModalComponentsTable[modalType];
			
			return (
				<ModalWrap key={modalType + index}>
					<ModalComponent {...modalProps} />
				</ModalWrap>
			)
		});

		const renderModalsLength = renderModals.length;

		return renderModals[renderModalsLength - 1];
	}
};

const mapStateToProps = state => ({
	currentModals: state.modals
});

export default connect(mapStateToProps)(ModalManager);