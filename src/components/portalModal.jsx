import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ open, onClose, children }) => {
    if (!open) return null;

    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal">
                <button className="modal-close" onClick={onClose}>Закрыть</button>
                {children}
            </div>
        </div>,
        document.getElementById('modal-root')  // DOM-узел, куда будет произведен рендер портала
    );
};

const PortalExample = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <div className="app">
            <button onClick={toggleModal}>Открыть модальное окно</button>
            <Modal open={modalOpen} onClose={toggleModal}>
                <h2>Модальное окно</h2>
                <p>Это содержимое модального окна.</p>
            </Modal>
        </div>
    );
};

export default PortalExample;
