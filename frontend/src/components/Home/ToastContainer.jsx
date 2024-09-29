import React from 'react';
import { Toaster } from 'react-hot-toast';

const ToastContainer = () => {
    return (
        <Toaster
            position="top-right"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
                // Default style
                duration: 5000,
                style: {
                    background: '#ffffff',
                    color: '#000000',
                    borderRadius: '8px',
                    padding: '16px',
                    border: '1px solid #e0e0e0',
                },

                // Success type (simple green text)
                success: {
                    style: {
                        background: '#ffffff',
                        color: '#2e7d32', // Green text for success
                    },
                },

                // Error type (simple red text)
                error: {
                    style: {
                        background: '#ffffff',
                        color: '#d32f2f', // Red text for error
                    },
                },

                // Info type (simple blue text)
                info: {
                    style: {
                        background: '#ffffff',
                        color: '#1976d2', // Blue text for info
                    },
                },

                // Warning type (simple orange text)
                warning: {
                    style: {
                        background: '#ffffff',
                        color: '#f57c00', // Orange text for warning
                    },
                },
            }}
        />
    );
};

export default ToastContainer;
