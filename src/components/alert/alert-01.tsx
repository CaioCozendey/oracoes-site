import React from 'react';

interface SimpleAlertProps {
  isOpen: boolean;
  message: string;
  buttonText?: string;
  onClose: () => void;
  onConfirm?: () => void;
}

export const Alert: React.FC<SimpleAlertProps> = ({
  isOpen,
  message,
  buttonText = 'OK',
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm ? onConfirm() : onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 max-w-xs mx-4">
        <p className="text-center mb-4 dark:text-white">{message}</p>
        <div className="flex justify-center">
          <button
            onClick={handleConfirm}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};