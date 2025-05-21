import React from 'react';
import GalleryItem from './GalleryItem';
import './Gallery.css';

const projects = [
    {
        id: 1,
        title: 'Autumn Framework',
        image: 'https://raw.githubusercontent.com/NuclearMissile/Autumn/master/autumn.png',
        link: 'https://github.com/NuclearMissile/Autumn'
    },
    {
        id: 2,
        title: 'React Todo List',
        image: 'https://github.com/NuclearMissile/react-todo-list/raw/master/img.png',
        link: 'https://nuclearmissile.github.io/react-todo-list'
    },
    {
        id: 3,
        title: 'React Typing Practice',
        image: 'https://github.com/NuclearMissile/react-typing-practice/raw/master/img.png',
        link: 'https://nuclearmissile.github.io/react-typing-practice/'
    },
    {
        id: 4,
        title: 'React 4096',
        image: 'https://github.com/NuclearMissile/react-4096/raw/master/img.png',
        link: 'https://nuclearmissile.github.io/react-4096/'
    },
    {
        id: 5,
        title: 'React Minesweeper',
        image: 'https://github.com/NuclearMissile/react-minesweeper/raw/master/img.png',
        link: 'https://nuclearmissile.github.io/react-minesweeper/'
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