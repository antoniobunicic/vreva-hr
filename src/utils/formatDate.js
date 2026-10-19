// Formats an ISO date (YYYY-MM-DD) for display in article listings and headers.
// Parsed as UTC so the rendered day never shifts with the viewer's timezone —
// SSG output and the hydrated client have to agree on the string.
const LOCALES = { hr: 'hr-HR', en: 'en-GB' };

export function formatArticleDate(isoDate, language = 'hr') {
  const locale = LOCALES[language] || LOCALES.hr;
  const date = new Date(`${isoDate}T00:00:00Z`);
  return new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}
