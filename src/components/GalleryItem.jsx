import React from 'react';
import './GalleryItem.css';

const GalleryItem = ({image, title, link}) => {
    return (
        <div className="gallery-item">
            <a href={link} target="_blank">
                <img src={image} alt={title} className="gallery-item-image"/>
                <h3 className="gallery-item-title">{title}</h3>
            </a>
        </div>
    );
};


export default GalleryItem;