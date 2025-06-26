import React, { Component, ReactNode } from "react";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
};

export default class Modal extends Component<ModalProps> {
    render() {
        const { isOpen, onClose, children } = this.props;

        if (!isOpen) return null;

        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xs sm:max-w-md md:max-w-lg mx-4 relative">
                    <button
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                        onClick={onClose}
                    >
                        ✕
                    </button>
                    {children}
                </div>
            </div>
        );
    }
}