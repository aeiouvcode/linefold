# Handoff

## Resume here

Resize fix deployed as 691d3c5 and Pages final index hash matched. Live 390px drag/pause/resume and desktop/mobile resize passed. Ferry and shared-corridor visual checks passed on live 390px. Weekly upgrade UI has not been checked live. Publish final state files; consider junction spacing as future design work, then report honest grade.

## Blocked

- Deployment through GitHub web editor: index.html committed as 3df98ba on main at 2026-09-26 01:24 IST; Pages matched tested bytes at 01:25 IST, but resizing live desktop to mobile left stations offscreen. Fix shipped. tests/smoke.cjs uploaded at e703fd9; temporary wrong-path test uploads were deleted. Final state files still need publishing after remaining live QA.

## Failed approaches

| Approach | Why it failed | Date |
| --- | --- | --- |
| Headless Chrome --window-size=390 for phone frames | Headless enforces a ~500px minimum window, so frames were wrong. Render inside a 390px iframe instead | 2026-09-23 |
| Hosted File preview of the game | Viewer stayed on its loading shell; Pages is the tested surface | 2026-09-21 |

## Discoveries

- Automated tabs throttle requestAnimationFrame, so live sim time runs slow; measure state, and use a direct update() loop for balance checks.

- Local headless screenshots are not proof of mobile browser behavior; one 390px iframe frame was inspected.
