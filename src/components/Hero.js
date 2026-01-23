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
                <div className="hero-services">
                    <a href="#services" className="hero-service">{t('services.web')}</a>
                    <span className="hero-service-separator">—</span>
                    <a href="#services" className="hero-service">{t('services.software')}</a>
                    <span className="hero-service-separator">—</span>
                    <a href="#services" className="hero-service">{t('services.consulting')}</a>
                </div>
                <h1 className="hero-title">{t('title')}</h1>
                <p className="hero-description">{t('description')}</p>
                <div className="hero-cta">
                    <a href="#contact" className="btn btn-primary">{t('cta.primary')}</a>
                    <a href="#services" className="btn btn-secondary">{t('cta.secondary')}</a>
                </div>
                <img src={dots} alt="Vreva logo" className="hero-dots"/>
            </div>
        </section>
    );
}

export default Hero;
