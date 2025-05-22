import React, {useState} from 'react';
import GalleryItem from './GalleryItem';
import './Gallery.css';

const projects = [
    {
        id: 1,
        title: 'Autumn Framework',
        image: 'https://raw.githubusercontent.com/NuclearMissile/Autumn/master/autumn.png',
        link: 'https://github.com/NuclearMissile/Autumn',
        category: 'Kotlin'
    },
    {
        id: 2,
        title: 'React Todo List',
        image: 'https://github.com/NuclearMissile/react-todo-list/raw/master/img.png',
        link: 'https://nuclearmissile.github.io/react-todo-list',
        category: 'React'
    },
    {
        id: 3,
        title: 'React Typing Practice',
        image: 'https://github.com/NuclearMissile/react-typing-practice/raw/master/img.png',
        link: 'https://nuclearmissile.github.io/react-typing-practice/',
        category: 'React'
    },
    {
        id: 4,
        title: 'React 4096',
        image: 'https://github.com/NuclearMissile/react-4096/raw/master/img.png',
        link: 'https://nuclearmissile.github.io/react-4096/',
        category: 'React'
    },
    {
        id: 5,
        title: 'React Minesweeper',
        image: 'https://github.com/NuclearMissile/react-minesweeper/raw/master/img.png',
        link: 'https://nuclearmissile.github.io/react-minesweeper/',
        category: 'React'
    },
    {
        id: 6,
        title: 'React Gallery',
        image: 'https://github.com/NuclearMissile/frontend-gallery/raw/master/img.png',
        link: 'https://github.com/NuclearMissile/frontend-gallery',
        category: 'React'
    },
    {
        id: 7,
        title: 'KParserc',
        image: null,
        link: 'https://github.com/NuclearMissile/KParserc',
        category: 'Kotlin'
    },
];

const defaultImageUrl = 'https://avatars.githubusercontent.com/u/16224669';

const Gallery = () => {
    // Get unique categories from projects
    const allCategories = [...new Set(projects.map(project => project.category))];
    // State for selected category
    const [selectedCategory, setSelectedCategory] = useState('');
    // Filter projects based on selected category or show all if none selected
    const filteredProjects = selectedCategory === ''
        ? projects
        : projects.filter(project => project.category === selectedCategory);
    // Group filtered projects by category
    const projectsByCategory = filteredProjects.reduce((acc, project) => {
        if (!acc[project.category]) {
            acc[project.category] = [];
        }
        acc[project.category].push(project);
        return acc;
    }, {});

    return (
        <div className="gallery-container">
            <div className="category-filter">
                <div className="filter-header">
                    <div className="filter-label">Categories:</div>
                </div>
                <div className="filter-dropdown">
                    <select
                        value={selectedCategory}
                        onChange={e => setSelectedCategory(e.target.value)}
                        className="category-select"
                    >
                        <option value="">All</option>
                        {allCategories.map(category => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {Object.keys(projectsByCategory).map(category => (
                <div key={category} className="category-section">
                    <h2 className="category-title">{category}</h2>
                    <div className="gallery-grid">
                        {projectsByCategory[category].map(project => (
                            <GalleryItem
                                key={project.id}
                                image={project.image ?? defaultImageUrl}
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
