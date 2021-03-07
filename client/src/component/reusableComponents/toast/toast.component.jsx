import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import { motion } from 'framer-motion';

const Toast = ({ message, icon, image, delay=500, position }) => {
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        //will set isopen to false after 5 sec
        let timeout = setTimeout(() => {
            setIsOpen(false);
        }, delay);
        return (() => {
            clearTimeout(timeout);
        });

    });

    if (isOpen) {
        return null;
    }
    else {
        return ReactDom.createPortal(
            <div className="toastContainer">
                <div className="toastMessage">

                </div>
                {
                    image && <div className="toastImage">

                    </div>
                }
                {
                    icon && <div className="toastIcon">

                    </div>
                }
            </div>,
            document.getElementById('toast')
        )
    }
}