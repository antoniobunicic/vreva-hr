'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import apartmaniImg from '../assets/projects/accommodation/apartmani-bunicic-hero.webp';
import krunaImg from '../assets/projects/kruna/kruna-hero.webp';
import otoolesImg from '../assets/projects/accommodation/otooles-hero.webp';
import houseLucyImg from '../assets/projects/accommodation/house-lucy-razanac-hero.webp';
import timetableImg from '../assets/projects/atron/timetable-system.svg';
import flexportalImg from '../assets/projects/flexportal/flexportal-hero.webp';
import sensorNetworkImg from '../assets/projects/iot/sensor-network.svg';

const showcase = [
  // Lightweight SVG first (priority) so the heavier screenshots can load
  // in the background before they cycle into view.
  { type: 'plain', image: sensorNetworkImg, alt: 'Sensor Network', mono: true },
  { type: 'browser', image: apartmaniImg, alt: 'Apartmani Bunicic' },
  { type: 'plain', image: krunaImg, alt: 'Kruna' },
  { type: 'phone', image: otoolesImg, alt: "O'Tooles" },
  { type: 'plain', image: timetableImg, alt: 'Atron Timetable', mono: true },
  { type: 'browser', image: houseLucyImg, alt: 'House Lucy Ražanac' },
  { type: 'plain', image: flexportalImg, alt: 'Sympower FlexPortal' },
];

const heroServices = [
  { key: 'webdev', href: '/usluge/izrada-web-stranica' },
  { key: 'fullstack', href: '/usluge/razvoj-softvera' },
  { key: 'ai', href: '/usluge/ai-integracija' },
  { key: 'leadership', href: '/usluge/it-savjetovanje' },
];

function Hero() {
  const { t } = useTranslation(['hero', 'services']);
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    let interval = null;
    const start = () => {
      if (interval) return;
      interval = setInterval(() => {
        setActive((prev) => (prev + 1) % showcase.length);
      }, 2600);
    };
    const stop = () => {
      if (!interval) return;
      clearInterval(interval);
      interval = null;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) start();
        else stop();
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
      stop();
    };
  }, []);

  return (
    <section id="hero" className="hero" ref={sectionRef}>
      <div className="hero-content">
        <h1 className="hero-title">{t('title')}</h1>
        <p className="hero-description">{t('description')}</p>
      </div>

      <div className="hero-showcase" aria-hidden="true">
        {showcase.map((s, i) => {
          const isActive = active === i;
          const isPrev = i === (active - 1 + showcase.length) % showcase.length;
          const state = isActive ? ' active' : isPrev ? ' prev' : '';
          return (
          <div key={i} className={`hero-mockup-wrap${state}`}>
            <div className={`hero-mockup hero-mockup--${s.type}${s.mono ? ' is-mono' : ''}`}>
              {s.type === 'browser' && (
                <div className="hero-mockup-chrome">
                  <span /><span /><span />
                </div>
              )}
              <div className="hero-mockup-screen">
                <Image src={s.image} alt={s.alt} sizes="(max-width: 768px) 85vw, 540px" priority={i === 0} />
              </div>
            </div>
          </div>
          );
        })}
      </div>


      {/* What we do, at a glance — four links along the bottom of the hero */}
      <nav className="hero-services" aria-label={t('section.title', { ns: 'services' })}>
        {heroServices.map((service, index) => (
          <Link key={service.key} href={service.href} className="hero-service">
            <span className="hero-service-index">{String(index + 1).padStart(2, '0')}</span>
            <span className="hero-service-name">{t(`dropdown.${service.key}`, { ns: 'services' })}</span>
            <span className="hero-service-arrow" aria-hidden="true">&rarr;</span>
          </Link>
        ))}
      </nav>
    </section>
  );
}

export default Hero;
