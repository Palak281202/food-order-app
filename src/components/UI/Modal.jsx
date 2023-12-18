import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

export default function Modal({ children, open, onClose, className = '' }) {
    const dialog = useRef();
    let cssClasses = 'modal ' + className;
    useEffect(() => {
        const modal = dialog.current;
        if (open) {
            modal.showModal();
        }
        else{
            modal.close();
        }

        // return () => modal.close();
    }, [open]);
    return createPortal(
        <div>
            <dialog ref={dialog} className={cssClasses} onClose={onClose}>
                {children}
            </dialog>
        </div>,
        document.getElementById('modal')
    )
}
