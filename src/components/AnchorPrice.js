import React from 'react';

// Anchor price (sidrena cijena) — required by law next to every displayed price.
function AnchorPrice({ label, value, note, className = 'sp-anchor' }) {
  if (!label || !value) return null;
  return <p className={className}>{label}: {value} {note}</p>;
}

export default AnchorPrice;
