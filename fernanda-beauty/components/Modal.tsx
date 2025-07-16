import React from 'react';
import { XIcon } from '../constants';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative bg-gray-900/70 backdrop-blur-xl border border-pink-400/20 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 shadow-2xl shadow-pink-500/10 transform transition-all duration-300 scale-95"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white hover:bg-white/10 rounded-full p-2 transition-colors"
        >
          <XIcon className="w-6 h-6" />
        </button>
        <h2 className="text-4xl font-serif text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-pink-300">
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
