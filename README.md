# AfriAssistive

The record of an assistive device from referral to the only question that matters a year later: is the person still using it?

This repository is a working pilot. Names, phones, payments, and claims are synthetic. Paybill `880155` does not collect money. A claim pack is not submitted to SHA. A QR code opens the passport on this browser; a second phone will not see the record until there is a shared server.

## Open the pilot

The app is served for preview on port `8080`. Inside the platform, use **Reset pilot records** before a meeting so the sample data is clean.

Public pages:

| Path | What it is |
|---|---|
| `/` | Home |
| `/request` | Request a device |
| `/fault` | Report a fault, phone-shaped or desk-shaped |
| `/d/$token` | Public passport. No name on the page |

Inside `/app`, the home board depends on the role you pick:

| Role | Board |
|---|---|
| Beneficiary | My care |
| Referrer, clinician | Clinic day |
| Technician, hub | Workshop radio |
| Partner, admin | County board |

Other rooms: queue, workshop and QA, device registry, repairs desk, SHA claim packs, impact.

English and Kiswahili, text size, and contrast are in the bar on every page.

## What the pilot will not do

- Hand over a device with an unsigned fit lock.
- Close a repair while the failed spare is at zero.
- Write a claim for a gap the listed tariff does not cover, or for a device that is not fitted and handed over.
- Put the owner’s name, place, or health information on the public passport.
- Show a county total small enough to identify one household.

## Documents

| File | Use it for |
|---|---|
| [docs/README.md](docs/README.md) | Index of the set |
| [docs/system-flow.md](docs/system-flow.md) | How a device moves, and which screen does which job |
| [docs/investor-pitch.md](docs/investor-pitch.md) | What to say, and what not to claim |
| [docs/innovation-and-viability.md](docs/innovation-and-viability.md) | Why it matters, what is new, and who could pay |

## Develop

```bash
npm run dev          # http://127.0.0.1:8080
npm run typecheck
npm test
npm run build
```

Records for the pilot sit in the browser under the key `afriassistive-pilot-v2`. Resetting the pilot restores the synthetic set. Do not type a real patient’s name into this build.
