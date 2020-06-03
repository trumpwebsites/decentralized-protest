import React, { lazy } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const QRCode = lazy(() => import('./QRCode'));

export interface IQRModal {
    show: boolean
    onClose: () => void
}

const QRModal: React.FC<IQRModal> = ({show, onClose}) => {
    return (
        <Modal show={true} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Share</Modal.Title>
            </Modal.Header>

            <Modal.Body style={{ justifyContent: 'center' }}>
                <QRCode />
            </Modal.Body>
            
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default QRModal;
