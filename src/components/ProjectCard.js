'use client';
import React, { useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

function ProjectCard({ projectKey, projectImage, projectVideo, clientLogo, scrollablePreview }) {
  const { t } = useTranslation('projects');
  const browserContentRef = useRef(null);
  const dragState = useRef({ isDragging: false, startY: 0, startScroll: 0 });
  const isVisible = useRef(false);

  const handleImageLoad = useCallback(() => {
    if (browserContentRef.current) {
      browserContentRef.current.scrollTop = 0;
    }
  }, []);

  const animateScroll = useCallback(() => {
    const el = browserContentRef.current;
    if (!el) return;
    el.scrollTop = 0;
    const scrollAmount = 150;
    const duration = 600;
    const pause = 400;

    const smoothScroll = (target, ms) => {
      const start = el.scrollTop;
      const diff = target - start;
      const startTime = performance.now();
      const step = (now) => {
        const elapsed = Math.min((now - startTime) / ms, 1);
        const ease = elapsed < 0.5 ? 2 * elapsed * elapsed : -1 + (4 - 2 * elapsed) * elapsed;
        el.scrollTop = start + diff * ease;
        if (elapsed < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    setTimeout(() => {
      smoothScroll(scrollAmount, duration);
      setTimeout(() => smoothScroll(0, duration), duration + pause);
    }, 300);
  }, []);

  useEffect(() => {
    if (!scrollablePreview || !browserContentRef.current) return;

    const el = browserContentRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const wasVisible = isVisible.current;
        isVisible.current = entry.isIntersecting;
        if (entry.isIntersecting && !wasVisible) {
          animateScroll();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [scrollablePreview, animateScroll]);

  const handleMouseDown = useCallback((e) => {
    const el = browserContentRef.current;
    dragState.current = { isDragging: true, startY: e.clientY, startScroll: el.scrollTop };
    el.style.cursor = 'grabbing';
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!dragState.current.isDragging) return;
    const dy = e.clientY - dragState.current.startY;
    browserContentRef.current.scrollTop = dragState.current.startScroll - dy;
  }, []);

  const handleMouseUp = useCallback(() => {
    dragState.current.isDragging = false;
    if (browserContentRef.current) {
      browserContentRef.current.style.cursor = 'grab';
    }
  }, []);

  const isAngler = projectKey === 'angler';
  const isMultiImage = Array.isArray(projectImage);
  const isMonochromeSvg = projectKey === 'timetable' || projectKey === 'thesis';

  return (
    <div className={`project-card ${!projectImage && !projectVideo ? 'no-image' : ''} ${isAngler ? 'angler-multi-image' : ''}`}>
      {projectVideo && (
        <div className="project-image project-video">
          <video src={projectVideo} autoPlay loop muted playsInline preload="metadata" />
        </div>
      )}

      {scrollablePreview && projectImage && (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
        <section
          className="project-image project-scrollable-preview"
          aria-label={t(`cards.${projectKey}.title`)}
          ref={browserContentRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <Image src={projectImage} alt={t(`cards.${projectKey}.title`)} draggable="false" onLoad={handleImageLoad} sizes="(max-width: 768px) 100vw, 50vw" />
        </section>
      )}

      {projectImage && !isMultiImage && !scrollablePreview && (
        <div className={`project-image ${isMonochromeSvg ? 'project-image-mono' : ''}`}>
          <Image src={projectImage} alt={t(`cards.${projectKey}.title`)} sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
      )}

      {isMultiImage && (
        <div className="project-image angler-images">
          {projectImage.map((img, index) => (
            <Image key={index} src={img} alt={`${t(`cards.${projectKey}.title`)} ${index + 1}`} sizes="(max-width: 768px) 33vw, 200px" />
          ))}
        </div>
      )}

      <div className="project-content">
          <h3 className="project-title">{t(`cards.${projectKey}.title`)}</h3>
          {clientLogo && (
          <div className="project-client-logo">
            <Image src={clientLogo} alt="Client logo" />
          </div>
        )}
          <p className="project-description">{t(`cards.${projectKey}.description`)}</p>
        {t(`cards.${projectKey}.tags`, { returnObjects: true }).length > 0 && (
          <div className="project-tags">
            {t(`cards.${projectKey}.tags`, { returnObjects: true }).map((tag, index) => (
              <span key={index} className="project-tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
