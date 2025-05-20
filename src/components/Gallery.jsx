import React from 'react';
import GalleryItem from './GalleryItem';
import './Gallery.css';

const projects = [
    {
        id: 1,
        title: 'React Todo List',
        image: 'https://github.com/NuclearMissile/react-todo-list/raw/master/img.png',
        link: 'https://nuclearmissile.github.io/react-todo-list'
    },
    {
        id: 2,
        title: 'React Typing Practice',
        image: 'https://github.com/NuclearMissile/react-typing-practice/raw/master/img.png',
        link: 'https://nuclearmissile.github.io/react-typing-practice/'
    }
];

const Gallery = () => {
    return (
        <div className="gallery-container">
            <div className="gallery-grid">
                {projects.map(project =>
                    <GalleryItem
                        key={project.id}
                        image={project.image}
                        title={project.title}
                        link={project.link}
                    />
                )}
            </div>
        </div>
    );
};

export default Gallery;