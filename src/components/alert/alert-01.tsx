'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AlertProps {
  title: string;
  message: string;
  buttonText: string;
  showOnLoad?: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const Alert = ({
  title,
  message,
  buttonText,
  showOnLoad = false,
  onClose,
  onConfirm,
}: AlertProps) => {
  const [isOpen, setIsOpen] = useState(showOnLoad);

  useEffect(() => {
    setIsOpen(showOnLoad);
  }, [showOnLoad]);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  const handleConfirm = () => {
    setIsOpen(false);
    onConfirm();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop com blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
            onClick={handleClose}
          />

          {/* Alert principal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full border border-gray-200 dark:border-gray-700 overflow-hidden">
              {/* Header com botão de fechar */}
              <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {title}
                </h3>
                <button
                  onClick={handleClose}
                  className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Corpo do alert */}
              <div className="p-4">
                <p className="text-gray-700 dark:text-gray-300">{message}</p>
              </div>

              {/* Footer com botão de ação */}
              <div className="bg-gray-50 dark:bg-gray-700/50 px-4 py-3 flex justify-end gap-3">
                <button
                  onClick={handleConfirm}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-sm cursor-pointer"
                >
                  {buttonText}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Alert;