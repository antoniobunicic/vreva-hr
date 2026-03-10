'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import HeroCanvas from './HeroCanvas';

const CHARS = 'abcdefghijklmnopqrstuvwxyz';

function Hero() {
  const { t, i18n } = useTranslation('hero');
  const words = t('rotatingWords', { returnObjects: true });
  const [display, setDisplay] = useState(words[0]);
  const indexRef = useRef(0);
  const wordsRef = useRef(words);
  wordsRef.current = words;

  useEffect(() => {
    indexRef.current = 0;
    setDisplay(wordsRef.current[0]);
  }, [i18n.language]);

  useEffect(() => {
    let scrambleTimer = null;
    const holdTimer = setInterval(() => {
      const w = wordsRef.current;
      indexRef.current = (indexRef.current + 1) % w.length;
      const target = w[indexRef.current];
      const len = target.length;
      let tick = 0;

      if (scrambleTimer) clearInterval(scrambleTimer);
      scrambleTimer = setInterval(() => {
        tick++;
        const locked = Math.min(Math.floor(tick / 5), len);
        let result = '';
        for (let i = 0; i < len; i++) {
          result += i < locked
            ? target[i]
            : CHARS[Math.floor(Math.random() * CHARS.length)];
        }
        setDisplay(result);
        if (locked >= len) {
          clearInterval(scrambleTimer);
          scrambleTimer = null;
        }
      }, 16);
    }, 3000);

    return () => {
      clearInterval(holdTimer);
      if (scrambleTimer) clearInterval(scrambleTimer);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section id="hero" className="hero">
      <HeroCanvas />

      <div className="hero-content">
        <h1 className="hero-title">
          {t('titleStart')}{' '}
          <span className="hero-rotating-sizer">
            {words.reduce((a, b) => a.length >= b.length ? a : b, '')}
            <span className="hero-rotating-word">
              {display}
            </span>
          </span>
        </h1>
        <p className="hero-description">{t('description')}</p>

        <div className="hero-cta">
          <a
            href="#contact"
            className="btn btn-primary hero-btn"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t('cta.primary')}
          </a>
          <Link href="/usluge" className="btn hero-btn-glass">
            {t('cta.secondary')}
          </Link>
        </div>
      </div>

      <div className="hero-scroll-hint" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}

export default Hero;
