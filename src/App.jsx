import React from 'react'
import Header from './components/Header'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import './App.css'

export default function App() {
    return (
        <div className="app">
            <Header/>
            <main className="main-content">
                <Gallery/>
            </main>
            <Footer/>
        </div>
    )
}
