import React from 'react';
import GalleryItem from './GalleryItem';
import './Gallery.css';

const projects = [
    {
        id: 1,
        title: 'Autumn Framework',
        image: 'https://raw.githubusercontent.com/NuclearMissile/Autumn/master/autumn.png',
        link: 'https://github.com/NuclearMissile/Autumn',
        category: 'Backend'
    },
    {
        id: 2,
        title: 'React Todo List',
        image: 'https://github.com/NuclearMissile/react-todo-list/raw/master/img.png',
        link: 'https://nuclearmissile.github.io/react-todo-list',
        category: 'React Apps'
    },
    {
        id: 3,
        title: 'React Typing Practice',
        image: 'https://github.com/NuclearMissile/react-typing-practice/raw/master/img.png',
        link: 'https://nuclearmissile.github.io/react-typing-practice/',
        category: 'React Apps'
    },
    {
        id: 4,
        title: 'React 4096',
        image: 'https://github.com/NuclearMissile/react-4096/raw/master/img.png',
        link: 'https://nuclearmissile.github.io/react-4096/',
        category: 'React Apps'
    },
    {
        id: 5,
        title: 'React Minesweeper',
        image: 'https://github.com/NuclearMissile/react-minesweeper/raw/master/img.png',
        link: 'https://nuclearmissile.github.io/react-minesweeper/',
        category: 'React Apps'
    }
];

const Gallery = () => {
    // Group projects by category
    const projectsByCategory = projects.reduce((acc, project) => {
        if (!acc[project.category]) {
            acc[project.category] = [];
        }
        acc[project.category].push(project);
        return acc;
    }, {});

    // Get unique categories
    const categories = Object.keys(projectsByCategory);

    return (
        <div className="gallery-container">
            {categories.map(category => (
                <div key={category} className="category-section">
                    <h2 className="category-title">{category}</h2>
                    <div className="gallery-grid">
                        {projectsByCategory[category].map(project => (
                            <GalleryItem
                                key={project.id}
                                image={project.image}
                                title={project.title}
                                link={project.link}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Gallery;
