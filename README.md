# vreva.hr

Vreva website — [vreva.hr](https://vreva.hr)

## Stack

- **Next.js 15** — App Router, `output: 'export'` (static site generation)
- **react-i18next** — HR (default) / EN language switching
- **CSS modules** — custom styles in `src/styles/`
- **@phosphor-icons/react** — icons

## Structure

```
app/              # Next.js App Router pages (metadata, routing)
src/
  components/     # React components ('use client')
  views/          # Page content components
  i18n/           # i18n config + locales (hr/en)
  styles/         # CSS files
  assets/         # SVGs, images
public/           # Static assets
```

## Routes

| Path | Description |
|---|---|
| `/` | Homepage |
| `/o-nama` | About |
| `/usluge` | Services overview |
| `/usluge/izrada-web-stranica` | Web development |
| `/usluge/razvoj-softvera` | Software development |
| `/usluge/it-savjetovanje` | IT consulting |
| `/usluge/izrada-web-stranica/[niche]` | Niche pages |

## Commands

```bash
npm run dev      # development server
npm run build    # static export → /out
```
