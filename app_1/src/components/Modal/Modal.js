import React from "react";
import ReactDOM from "react-dom";
import Button from '../Button/Button';
import './Modal.css';

const Modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null
	return ReactDOM.createPortal(
		<div className="Modal">
			<div className="SearchButton">
				<Button onClick={onClose} search={true}>Back</Button>
			</div>
			{children}
		</div>,
		document.getElementById('modal-root'))
}
export default Modal