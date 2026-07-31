# Wix Exit Plan

## Goal
Get fully off Wix without paying the $900 Premium plan renewal.
Site content is already live on GitHub Pages — this is purely about DNS + domain registration.
**Status: core goal achieved** — Premium auto-renew is off (was actually due Aug 17, 2026, not Aug 8 as originally thought). Remaining work is verifying DNS survives and completing the registrar transfer once the ICANN lock lifts Sep 29, 2026.

## Key facts learned
- Domain `eranhalperingenomics.com` nameservers are currently `ns14/ns15.wixdns.net` (Wix DNS), even though the A/CNAME records in that zone already point to GitHub Pages.
- Registrar of record: Network Solutions (Wix's backend registrar partner). Registered through Wix per prior notes.
- Registry expiry: **2026-09-05** — no urgency on the domain itself.
- Domain created 2017-09-05, last updated 2024-05-28 — well outside any 60-day transfer lock.
- WHOIS privacy is ON (Perfect Privacy / Domain Discreet proxy) — registrant email shown publicly is masked. Real contact email on file with Wix account needs to be confirmed as current (should be eranhalperin@gmail.com, not a stale one from 2017).
- No MX or TXT records found — no email is routed through this domain, so DNS cutover has no email-breakage risk.
- Domain status: `clientTransferProhibited` (standard lock, must be turned off in Wix before transfer).
- Current working DNS records (verified live, safe to replicate anywhere):
  - A: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
  - CNAME: www → eran-halperin.github.io

## Decision: why decouple + transfer in parallel (not sequential)
- Canceling Wix Premium without first moving DNS off Wix's nameservers risks taking the live site down (Wix's own cancellation warning confirms this).
- A full registrar transfer alone is too slow/risky to rely on for the Aug 8 deadline (ICANN transfer process ~5-7 days, can slip).
- Decoupling DNS is fast (hours) and fully removes the deadline risk on its own. The registrar transfer can then happen at leisure since the domain doesn't expire until Sept 2026.
- Registrar transfer target: **not yet decided**. Options considered: Namecheap (simple, free WHOIS privacy), Cloudflare Registrar (cheapest, at-cost, requires Cloudflare DNS), Porkbun (cheap, well-regarded). Avoid GoDaddy (upsells).

## Ordered plan
1. [x] Confirm/update domain contact email in Wix account settings — email was already correct; mailing address/phone were wrong and got corrected too
2. [ ] BLOCKED until 2026-09-29 — unlock the domain in Wix's domain panel (removes clientTransferProhibited)
3. [ ] BLOCKED until 2026-09-29 — retrieve the EPP/auth code from Wix
4. [x] N/A — no self-service nameserver control exists in Wix; fast decouple isn't possible. Relying on Premium's natural non-renewal (Aug 17) instead.
5. [ ] ~Aug 17, 2026 — verify site still resolves + loads over HTTPS after Premium plan's paid period ends
6. [x] Done 2026-07-31 — turned off Premium auto-renew (avoids the $900 charge; plan stays active until Aug 17)
7. [ ] ~Sep 29, 2026 — pick registrar, initiate transfer using EPP code, approve ICANN confirmation email
8. [ ] Wait 5-7 days after step 7 for transfer to complete
9. [ ] ~Aug 6, 2026 — let domain renewal ($93.75, 3-year cycle) go through as normal; no action needed

## Session log
- **2026-07-31**: Diagnosed Wix's $900 charge as a Premium plan renewal (not domain renewal). Confirmed via `dig`/`whois` that DNS still runs through Wix nameservers despite site being hosted on GitHub Pages. Ruled out email-breakage risk (no MX/TXT records) and 60-day transfer lock risk (last update 2024). Decided on decouple-now + transfer-in-parallel strategy. Registrar for transfer still undecided. Step 1 done: email on file was already correct (eranhalperin@gmail.com); mailing address/phone were wrong and got corrected. Editing contact info triggered a mandatory ICANN re-verification requirement — must click verify link sent to eranhalperin@gmail.com by **Aug 14, 2026** or domain gets suspended (separate from the Aug 8 Premium deadline, handle it regardless). Also saw a Wix prompt claiming "domain is set to point away from Wix" — this is expected/known (custom DNS already points to GitHub Pages) and should be ignored; do NOT click its "reconnect" flow, that would break the GitHub Pages setup. Email verification confirmed done. Tried "Transfer away from Wix" — blocked: editing contact info triggered a 60-day ICANN transfer lock, domain locked until **Sep 29, 2026**. Checked "Manage DNS records" — NS records explicitly not editable there, and no separate nameservers section exists; Wix does not allow self-service nameserver changes short of a full transfer. Fast DNS decouple is therefore not possible before Aug 8.

Asked Wix's AI support bot whether cancelling Premium deletes custom DNS records — it claimed records are preserved. Treated that claim with caution (contradicts the explicit in-product cancellation warning) and used a monitored approach instead of blind trust.

**Resolved the actual deadline correctly**: turned OFF auto-renew (not a hard cancel) on the Premium plan via Wix dashboard. Plan stays active until its current paid period ends **2026-08-17**, then won't renew — this avoids the $900 charge. Also discovered the real billing breakdown: Premium plan next payment was Aug 17 ($900, now off); Domain renewal is a **separate** charge, $93.75 for a 3-year cycle, next payment **2026-08-06**, status ACTIVE — this is NOT the $900 problem, it's a normal renewal we actually *want* to happen, since the domain needs to stay alive through the Sep 29 transfer-lock window. Leaving its auto-renew on.

Next milestones: (1) ~Aug 17 — re-check DNS to confirm A/CNAME records survived Premium ending (task 5); (2) ~Sep 29 — transfer lock lifts, retrieve EPP code and initiate transfer to new registrar (tasks 2, 3, 7); registrar choice still undecided.

Considered automating the Aug 17 / Sep 29 check-ins via scheduled cloud routines, but without GitHub App access the routine can't write results back into this file, so a future session wouldn't see the outcome automatically. Decided against it — user will set personal calendar reminders for Aug 17 and Sep 29 and start a session with Claude manually on those dates instead. Just open a session and reference this file to pick up where we left off.
