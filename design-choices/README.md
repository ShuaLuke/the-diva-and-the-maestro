# Design choices

Ten directions for the home page, side by side. Designs 1 to 6 explore period and mood; 7 to 10 start from the audience and from what the best book, editorial, museum and documentary sites already do. The switcher's "Audience & gold standard" button holds that thinking and a recommendation. Nothing here touches the live site: these are plain HTML files that reuse the photographs in `src/assets/archive/`.

Open `index.html` in a browser (double-click it in Finder) and click between the designs, or use the arrow keys or the number keys. The notes bar under the tabs gives each design's vibe, rationale, audience and trade-offs; "Hide notes" collapses it and the N key toggles it. Each design can also be opened on its own.

| # | Name | In a sentence |
| --- | --- | --- |
| 1 | Showbill | An 1898 theatre bill: wood type, ticket-stub buttons, acts instead of sections. |
| 2 | Lithograph | A two-colour sheet-music cover: teal and vermilion duotones, soft 1900s display type. |
| 3 | The Box | The archive laid out on a table: typewriter labels, taped prints, index cards. |
| 4 | Velvet | The dark direction done warm: aubergine and gold, with cream programme pages in between. |
| 5 | Marquee | A contemporary publisher campaign: wide black sans, collage, ticker, bright accents. |
| 6 | Deco | Harlem Renaissance geometry: Aaron Douglas palette, rings and rays, marquee lettering. |
| 7 | Overlooked | Editorial longform in the manner of a serious newspaper feature: white, captioned photographs at natural proportions, narrow measure. |
| 8 | Exhibition | A museum show: objects with labels, galleries, a listening room with three real recordings, a timeline. |
| 9 | Publisher | A big-house book page: cover first, praise, buy row, excerpt, authors, events, kits. |
| 10 | Documentary | A PBS-style companion: slow move on an old photograph, five dated chapters, a phonograph player. |

Fonts load from Google Fonts, so the pages need an internet connection to look right. Designs 7, 8 and 10 play recordings from `public/audio/`, which works when the folder is served (for example with `python3 -m http.server` from the project root) and may be blocked when opened straight from Finder.
