import {useState} from 'react';
import {Calendar, ExternalLink, Eye, Filter, Grid, Link, Mail} from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'Autumn Framework',
        image: 'https://raw.githubusercontent.com/NuclearMissile/Autumn/master/autumn.png',
        link: 'https://github.com/NuclearMissile/Autumn',
        category: 'Kotlin',
        description: 'A Kotlin framework for building web applications'
    },
    {
        id: 2,
        title: 'Todo List',
        image: 'https://github.com/NuclearMissile/react-todo-list/raw/master/img.png',
        link: 'https://nuclearmissile.github.io/react-todo-list',
        category: 'React',
        description: 'Todo list app built with React'
    },
    {
        id: 3,
        title: 'Typing Practice',
        image: 'https://github.com/NuclearMissile/react-typing-practice/raw/master/img.png',
        link: 'https://nuclearmissile.github.io/react-typing-practice/',
        category: 'React',
        description: 'Improve your typing speed with this interactive practice tool'
    },
    {
        id: 4,
        title: '4096',
        image: 'https://github.com/NuclearMissile/react-4096/raw/master/img.png',
        link: 'https://nuclearmissile.github.io/react-4096/',
        category: 'React',
        description: 'Classic 2048-style puzzle game built with React'
    },
    {
        id: 5,
        title: 'Minesweeper',
        image: 'https://github.com/NuclearMissile/react-minesweeper/raw/master/img.png',
        link: 'https://nuclearmissile.github.io/react-minesweeper/',
        category: 'React',
        description: 'Classic minesweeper game built with React'
    },
    {
        id: 6,
        title: 'Gallery',
        image: 'https://github.com/NuclearMissile/frontend-gallery/raw/master/img.png',
        link: 'https://github.com/NuclearMissile/frontend-gallery',
        category: 'React',
        description: 'This very gallery application showcasing projects'
    },
    {
        id: 7,
        title: 'KParserc',
        image: null,
        link: 'https://github.com/NuclearMissile/KParserc',
        category: 'Kotlin',
        description: 'Parser combinator library for Kotlin'
    },
    {
        id: 8,
        title: 'Tetris',
        image: 'https://github.com/NuclearMissile/react-tetris/raw/master/img.png',
        link: 'https://nuclearmissile.github.io/react-tetris',
        category: 'React',
        description: 'Classic Tetris game implemented in React'
    },
    {
        id: 9,
        title: 'Typing Practice2',
        image: 'https://github.com/NuclearMissile/typing-practice2/raw/master/img.png',
        link: 'https://nuclearmissile.github.io/typing-practice2',
        category: 'React',
        description: 'Enhanced version of the typing practice application'
    },
    {
        id: 10,
        title: 'Vue Typing Practice',
        image: 'https://github.com/NuclearMissile/vue-typing-practice/raw/master/img.png',
        link: 'https://nuclearmissile.github.io/vue-typing-practice',
        category: 'Vue3',
        description: 'Typing practice application built with Vue 3'
    },
    {
        id: 11,
        title: 'Snake',
        image: 'https://github.com/NuclearMissile/react-snake/raw/master/img.png',
        link: 'https://nuclearmissile.github.io/react-snake',
        category: 'React',
        description: 'Classic Snake game implemented in React'
    },
    {
        id: 12,
        title: 'Wordle',
        image: 'https://github.com/NuclearMissile/react-wordle/raw/master/img.png',
        link: 'https://nuclearmissile.github.io/react-wordle',
        category: 'React',
        description: 'Wordle game implemented in React'
    },
    {
        id: 13,
        title: 'Logistic React',
        image: 'https://github.com/NuclearMissile/logistic-react/raw/master/img.png',
        link: 'https://nuclearmissile.github.io/logistic-react',
        category: 'React',
        description: 'Logistic model and chaos visualization with React'
    }
];

const defaultImageUrl = 'https://avatars.githubusercontent.com/u/16224669';

const GalleryItem = ({image, title, link, description, category}) => {
    const [imageError, setImageError] = useState(false);

    return (
        <div
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
            <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                <img
                    src={imageError ? defaultImageUrl : image}
                    alt={title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={() => setImageError(true)}
                />
                <div
                    className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                <div
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <ExternalLink className="w-5 h-5 text-white drop-shadow-lg"/>
                </div>
            </div>

            <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                    <span className={'px-3 py-1 text-xs font-semibold rounded-full text-stone-800 bg-stone-100'}>
                        {category}
                    </span>
                    <Eye
                        className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {description}
                </p>

                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-300"
                >
                    View Project
                    <ExternalLink className="w-4 h-4 ml-1"/>
                </a>
            </div>

            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                aria-label={`View ${title} project`}
            />
        </div>
    );
};

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg border-b border-gray-200/50 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300">
                        <div
                            className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                            <Grid className="w-6 h-6 text-white"/>
                        </div>
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Gallery
                        </h1>
                    </div>

                    <div className="hidden md:flex items-center space-x-6">
                        <a
                            href="https://github.com/NuclearMissile/frontend-gallery"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
                        >
                            <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"/>
                            <span className="font-medium">GitHub</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

const Gallery = () => {
    const allCategories = [...new Set(projects.map(project => project.category))];
    const [selectedCategory, setSelectedCategory] = useState('');

    const filteredProjects = selectedCategory === ''
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    const projectsByCategory = filteredProjects.reduce((acc, project) => {
        if (!acc[project.category]) {
            acc[project.category] = [];
        }
        acc[project.category].push(project);
        return acc;
    }, {});

    return (
        <div className="max-w-7xl mx-auto px-6 py-8">
            {/* Hero Section */}
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    My Project
                    <span
                        className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Gallery</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    A collection of my personal projects showcasing various technologies and frameworks
                </p>
            </div>

            {/* Filter Section */}
            <div className="mb-12">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                            <div
                                className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                                <Filter className="w-5 h-5 text-white"/>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">Filter by Category</h3>
                        </div>
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                            {filteredProjects.length} projects
                        </span>
                    </div>

                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full md:w-64 px-4 py-3 text-gray-700 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-gray-100"
                    >
                        <option value="">All Categories</option>
                        {allCategories.map(category => (
                            <option key={category} value={category}>
                                {category} ({projects.filter(p => p.category === category).length})
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="space-y-16">
                {Object.keys(projectsByCategory).map(category => (
                    <div key={category} className="category-section">
                        <div className="flex items-center space-x-4 mb-8">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                                category === 'React' ? 'bg-blue-500' :
                                    category === 'Vue3' ? 'bg-green-500' :
                                        'bg-purple-500'
                            }`}>
                                <span className="text-white font-bold text-lg">
                                    {category.charAt(0)}
                                </span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">{category}</h3>
                                <p className="text-gray-600">
                                    {projectsByCategory[category].length} project{projectsByCategory[category].length !== 1 ? 's' : ''}
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {projectsByCategory[category].map(project => (
                                <GalleryItem
                                    key={project.id}
                                    image={project.image ?? defaultImageUrl}
                                    title={project.title}
                                    link={project.link}
                                    description={project.description}
                                    category={project.category}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-20">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <div
                                className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                                <Grid className="w-6 h-6 text-white"/>
                            </div>
                            <h3 className="text-xl font-bold">About</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            A curated gallery showcasing my personal projects and experiments with various technologies
                            and frameworks.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <div
                                className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                                <Mail className="w-6 h-6 text-white"/>
                            </div>
                            <h3 className="text-xl font-bold">Contact</h3>
                        </div>
                        <div className="space-y-3">
                            <a
                                href="mailto:torrific55@gmail.com"
                                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300"
                            >
                                <span>torrific55@gmail.com</span>
                            </a>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <div
                                className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                                <Link className="w-6 h-6 text-white"/>
                            </div>
                            <h3 className="text-xl font-bold">Follow</h3>
                        </div>
                        <div className="space-y-3">
                            <a
                                href="https://github.com/NuclearMissile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                            >
                                <span>GitHub Profile</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                        <div className="flex items-center space-x-2 text-gray-400">
                            <Calendar className="w-4 h-4"/>
                            <span>&copy; {currentYear} All rights reserved.</span>
                        </div>
                        <div className="text-gray-400 text-sm">
                            Built with React & Tailwind CSS
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
            <Header/>
            <main className="flex-1">
                <Gallery/>
            </main>
            <Footer/>
        </div>
    );
}