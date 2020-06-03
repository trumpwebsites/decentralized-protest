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
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Your Community, Informed.</Modal.Title>
            </Modal.Header>

            <Modal.Body style={{ justifyContent: 'center' }}>
                <QRCode />
                This QR Code allows you to share these notifications with fellow protestors.
            </Modal.Body>
            
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default QRModal;
