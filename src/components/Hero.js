'use client';
import React from 'react';
import Link from 'next/link';
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
                    <Link href="/usluge/izrada-web-stranica" className="hero-service">{t('services.web')}</Link>
                    <span className="hero-service-separator">&mdash;</span>
                    <Link href="/usluge/razvoj-softvera" className="hero-service">{t('services.software')}</Link>
                    <span className="hero-service-separator">&mdash;</span>
                    <Link href="/usluge/it-savjetovanje" className="hero-service">{t('services.consulting')}</Link>
                </div>
                <h1 className="hero-title">{t('title')}</h1>
                <p className="hero-description">{t('description')}</p>
                <div className="hero-cta">
                    <a
                      href="#contact"
                      className="btn btn-primary"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      {t('cta.primary')}
                    </a>
                    <Link href="/usluge" className="btn btn-secondary">{t('cta.secondary')}</Link>
                </div>
                <img src={dots.src || dots} alt="Vreva logo" className="hero-dots"/>
            </div>
        </section>
    );
}

export default Hero;
