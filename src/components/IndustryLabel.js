import React from 'react';

// "Izrada web stranica za apartmane i smještaj" → muted prefix + emphasised
// industry, so a list of ten industries doesn't read as ten identical lines.
// The full heading stays in the link text (good for SEO and screen readers).
function IndustryLabel({ heading }) {
  const match = /^(.*?\s(?:za|for))\s(.+)$/i.exec(heading);
  if (!match) return <span className="industry-name">{heading}</span>;

  return (
    <span className="industry-label">
      <span className="industry-prefix">{match[1]} </span>
      <span className="industry-name">{match[2]}</span>
    </span>
  );
}

export default IndustryLabel;
