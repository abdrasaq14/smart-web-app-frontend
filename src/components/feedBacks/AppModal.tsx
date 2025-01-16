import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  closeOnOutsideClick?: boolean; // New prop to enable/disable outside click
  children: React.ReactNode;
}

const AppModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  closeOnOutsideClick = true, // Default is true
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 backdrop-blur-sm z-50 h-auto min-h-auto overflow-y-auto"
      onClick={() => closeOnOutsideClick && onClose()} // Conditionally close on outside click
    >
      <div
        className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg relative max-h-[650px] overflow-y-auto custom-scrollbar"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <button
          className="absolute top-3 right-5 bg-primary-blackLighter px-2 py-[0.5px] rounded-lg flex items-center justify-center text-white hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default AppModal;
