import React, { useState } from 'react';

const ImageModal = ({ imageSrc, imageAlt }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalImgSrc, setModalImgSrc] = useState('');
    const [captionText, setCaptionText] = useState('');

    const openModal = (src, alt) => {
        setModalImgSrc(src);
        setCaptionText(alt);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <img
                id="modalImg"
                src={imageSrc}
                alt={imageAlt}
                onClick={() => openModal(imageSrc, imageAlt)}
            />
            {isOpen && (
                <div id="myModal" className="modal" style={{ display: 'block' }}>
                    <span className="close" onClick={closeModal}>&times;</span>
                    <img className="modal-content" id="img01" src={modalImgSrc} alt={captionText} />
                    <div id="caption">{captionText}</div>
                </div>
            )}
        </div>
    );
};

export default ImageModal;
