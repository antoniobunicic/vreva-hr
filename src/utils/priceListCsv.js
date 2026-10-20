// Builds the downloadable price list (roba/usluga, mjera, cijena, sidrena
// cijena) from the same locale data the /cijene page renders, so the file
// can never drift from what's shown.

// "1.200 €" / "€1,200" → 1200 (all list prices are whole euros)
const toNumber = (value) => parseInt(String(value).replace(/\D/g, ''), 10);

export function buildPriceListCsv(pricing) {
  const { csv } = pricing;
  const formatPrice = (value) => {
    const fixed = toNumber(value).toFixed(2);
    return csv.decimal === ',' ? fixed.replace('.', ',') : fixed;
  };
  const escape = (cell) => {
    const text = String(cell);
    return /["\n\r]/.test(text) || text.includes(csv.separator)
      ? `"${text.replace(/"/g, '""')}"`
      : text;
  };

  const packages = [...pricing.packages, ...(pricing.webshop ? [pricing.webshop] : [])]
    .map((pkg) => [pkg.name, csv.unitPackage, pkg.price, pkg.anchor]);
  const extras = (pricing.extras?.items ?? [])
    .map((item) => [item.name, item.period, item.price, item.anchor]);

  const rows = [...packages, ...extras].map(([name, unit, price, anchor]) => [
    name.replace(/\n/g, ' – '),
    unit,
    formatPrice(price),
    formatPrice(anchor ?? price),
  ]);

  return [csv.headers, ...rows]
    .map((row) => row.map(escape).join(csv.separator))
    .join('\r\n');
}

export function downloadPriceListCsv(pricing) {
  // BOM so Excel opens the file as UTF-8 (č, ć, ž, €)
  const blob = new Blob([`﻿${buildPriceListCsv(pricing)}`], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = pricing.csv.filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
