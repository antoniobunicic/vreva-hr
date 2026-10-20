export default function netlifyImageLoader({ src, width, quality }) {
  // SVGs are already resolution-independent: rasterising them through the
  // image CDN only adds weight and rounds the aspect ratio. Serve as-is.
  if (process.env.NODE_ENV === 'development' || src.endsWith('.svg')) {
    return src;
  }
  const params = new URLSearchParams({
    url: src,
    w: width.toString(),
    q: (quality || 75).toString(),
  });
  return `/.netlify/images?${params.toString()}`;
}
