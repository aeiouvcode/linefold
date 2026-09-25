# Current task

**Task:** Close the distance to Mini Metro (reference) at phone (390px) and desktop widths without copying its art.
**Spec:** Distance-to-reference audit, findings G1-G9 below.
**Started:** 2026-09-23

## Acceptance criteria

- [x] Side-by-side frames vs Mini Metro App Store screenshots at 390px and 1440px
- [x] Fixes worked in audit priority order (G1 first)
- [x] Live Pages bytes match the tested file; 390px live frame captured
- [x] Drag-to-draw, tunnel spend, pause/resume, ferry easter egg pass on live at 390x844

## Findings (worse than reference, priority order)

- G1 free-angle lines -> octilinear routing with rounded bends (fixed)
- G2 spindly weight -> scaled stations, 0.74R lines, terminus T-caps (fixed)
- G3 trains read as car icons -> solid line-colour carriages with riders (fixed)
- G4 river faint, crossings invisible -> flat water body, dashed tunnel crossings (fixed)
- G5 five HUD text clusters -> one clock/day/count cluster, intro text fades on first drag (fixed)
- G6 thin-dash line picker -> colour discs; hollow = unused (fixed)
- G7 empty lower third, stretched desktop -> rebalanced layout, desktop layout box (fixed)
- G8 red blob overflow, tiny riders -> ring timer, dark rider row (fixed)
- G9 background rules and contour blobs -> removed (fixed)
- Bug: passengers never boarded (pickup matched station shape) -> fixed

## Non-goals

- Real city geography, parallel-offset shared corridors, landscape layout, new upgrade types

## 2026-09-25 continuation

**Task:** Improve shared-corridor track legibility and train/station visibility without losing existing gameplay.

- [x] Offset shared line segments consistently in either travel direction.
- [x] Match train travel coordinates to rendered track.
- [x] Render station glyphs over trains and prevent starting carriages covering stations.
- [x] Local syntax, gameplay smoke and 390px iframe visual checks.
- [ ] Commit to GitHub and verify deployed Pages bytes and browser interaction after local midnight.

**Non-goals:** New city geography and level design.
