# Checkpoint

Completed atomic steps, newest last. Do not redo anything listed here.

| Date | Step | Evidence (commit, URL, screenshot) |
| --- | --- | --- |
| 2026-09-21 | Tactile art pass, hidden ferry, phone composition | commits before this file |
| 2026-09-23 | Distance audit cycle 1-3 vs Mini Metro, G1-G9 fixed, boarding bug fixed | index.html commit "Distance audit vs Mini Metro..." |
| 2026-09-23 | Live verified: served index.html sha256 51c92c5a... matches tested file; drag, tunnel, pause, ferry pass at 390x844 | https://aeiouvcode.github.io/linefold/ |
| 2026-09-25 | Local shared-corridor lanes, matched train tracks, stations above trains, multi-engine line edits | `node --check` and `node tests/smoke.cjs`; local headless 390px iframe screenshot (not live QA) |
| 2026-09-26 | Code deployed as 3df98ba; Pages served tested SHA256 de106631...; live viewport change exposed offscreen stations, fixed locally and added resize regression test | https://aeiouvcode.github.io/linefold/ ; `node tests/smoke.cjs` |
| 2026-09-26 | Resize fix deployed as 691d3c5; served SHA256 572e267b... matches tested file. Live 390px drag spent one tunnel, pause/resume worked, and station bounds survived desktop/mobile resize | https://aeiouvcode.github.io/linefold/ ; live screenshot and browser state |
| 2026-09-26 | Live phone ferry opened after five river taps; seeded four-line overlap shows separated red/yellow/green corridor, but junctions remain crowded. No console errors | https://aeiouvcode.github.io/linefold/ ; live 390px screenshots |
