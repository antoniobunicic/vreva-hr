import React from 'react';
import { useTranslation } from 'react-i18next';
import dots from '../assets/dots.svg';

function Hero() {
    const { t } = useTranslation('hero');

    return (
        <section id="hero" className="hero">
            <div className="hero-blur hero-blur-1"></div>
            <div className="hero-blur hero-blur-2"></div>
            <div className="container">
                <h1 className="hero-title">{t('title')}</h1>
                <div className="hero-services">
                    <span className="hero-service">{t('services.web')}</span>
                    <span className="hero-service-separator">•</span>
                    <span className="hero-service">{t('services.software')}</span>
                    <span className="hero-service-separator">•</span>
                    <span className="hero-service">{t('services.consulting')}</span>
                </div>
                <div className="hero-cta">
                    <a href="#contact" className="btn btn-primary">{t('cta.primary')}</a>
                    <a href="#services" className="btn btn-secondary">{t('cta.secondary')}</a>
                </div>
            </div>
            <img src={dots} alt="Vreva logo" className="hero-dots"/>
        </section>
    );
}

export default Hero;
