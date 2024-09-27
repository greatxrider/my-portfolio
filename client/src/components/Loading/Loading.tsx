import React from 'react';
import './Loading.css'; // Optional: for styling

const Loading = () => {
    return (
        <div className="loading">
            <div className="spinner"></div>
            <p>Loading...</p>
        </div>
    );
};

export default Loading;