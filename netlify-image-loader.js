export default function netlifyImageLoader({ src, width, quality }) {
  if (process.env.NODE_ENV === 'development') {
    return src;
  }
  const params = new URLSearchParams({
    url: src,
    w: width.toString(),
    q: (quality || 75).toString(),
  });
  return `/.netlify/images?${params.toString()}`;
}
