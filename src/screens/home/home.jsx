import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import './home.css';
import { Link } from 'react-router-dom';

export default function Home({ isMobile }) {

    
    return (
        <div className="home">
            <Navbar />
            <main className="home-content">
                <div className="hero-wrapper">
                <div className="hero">
                    <p className="hero-subtitle">Full-Stack Developer • Front-end & Mobile Specialist</p>

                    <h1 className="hero-title">
                        Olá, eu sou <span className="highlight">Caroline</span>,
                        <br />
                        desenvolvedora Full-Stack
                    </h1>

                    <p className="hero-description">
                        Transformo ideias em aplicações rápidas, funcionais e bem projetadas.
                    </p>

                    {isMobile ? (
                        <a href="#contact" className="hero-button">
                            Fale comigo
                        </a>
                    ) : (
                        <Link to="/contact" className="hero-button">
                            Fale comigo
                        </Link>
                    )}
                </div>
                <div className="hero-decoration">
                    <div className="bolha bolha-1"></div>
                    <div className="bolha bolha-2"></div>
                    <div className="bolha bolha-3"></div>
                </div>
            </div>
         </main>

{
        isMobile && (
            <div className="scroll-indicator" aria-hidden="true">
                <span className="scroll-indicator-text">role para baixo</span>
                <svg
                    className="scroll-indicator-arrow"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        d="M6 9l6 6 6-6"
                        stroke="#7a0a96"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
            
                )}
        </div>
    );
}