# Handoff

## Resume here

Next distance audit: parallel offset for lines sharing a corridor, and station/terminus overlap when a train dwells on a terminus (train hides the station glyph).

## Blocked

- Nothing.

## Failed approaches

| Approach | Why it failed | Date |
| --- | --- | --- |
| Headless Chrome --window-size=390 for phone frames | Headless enforces a ~500px minimum window, so frames were wrong. Render inside a 390px iframe instead | 2026-09-23 |
| Hosted File preview of the game | Viewer stayed on its loading shell; Pages is the tested surface | 2026-09-21 |

## Discoveries

- Automated tabs throttle requestAnimationFrame, so live sim time runs slow; measure state, and use a direct update() loop for balance checks.
