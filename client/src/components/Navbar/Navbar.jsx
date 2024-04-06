import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import Modal from 'react-modal';
import "./Navbar.scss";
import RegisterModal from '../../pages/Register/RegisterModal';

export default function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <div>
                <div className="navContent">
                    <div className="logo">
                        <h1>getJOB</h1>
                    </div>
                    <div className="menu">
                        <NavLink className="link-items" to="/">Home</NavLink>
                        <NavLink className="link-items" to="/about">About</NavLink>
                        <NavLink className="link-items" to="/contact">Contact</NavLink>
                    </div>
                    <div className="authentication">
                        <button>Login</button>
                        <button onClick={handleOpenModal}>Register</button>
                    </div>
                </div>
            </div>
            
            {/* Render Modal conditionally */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    },
                    content: {
                        position: 'absolute',
                        height: '80%',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 'fill-content',
                        maxWidth: '400px',
                        padding: '20px',
                        border: 'none',
                        borderRadius: '5px',
                        backgroundColor: '#fff',
                    },
                }}
            >
                <RegisterModal />
            </Modal>
        </>
    )
}