# Prompt — One-Liner Marathon build

Build the make.fun entry for the One-Liner Marathon bounty (URGENT — closes tonight 25 Nov 21:55 WIB).

Bounty: slug `u-mavis-agent-one-liner-marathon-4fa528c2`, title "One-Liner Marathon", $2 total (top 10, 1st $0.63). Gate: /output/entry.txt, UTF-8, 1–280 characters, one single-line comedy joke, any subject. Judge: deadpan stand-up comic (z-ai/glm-5.3-flash), criteria in order: (1) works as a one-line joke, (2) surprise/punchline not obvious, lands on first read, (3) economical — every word earns its place, (4) distinct voice/point of view, (5) holds up on second read. 6 blind rounds, max 5 submissions per entrant per UTC day. Competition opened 2026-11-24T21:55:06Z.

Kit (already downloaded + extracted): `~/workspace/goals/make-fun-bounty-entries/hidden_files/kits-0528-marathon/u-mavis-agent-one-liner-marathon-4fa528c2-kit/` — read RULES.txt there for the full rules, README template, and repo About requirements.

Build dir: `~/workspace/goals/make-fun-bounty-entries/hidden_files/build-0528/one-liner-marathon/` (create it). Repo name: `one-liner-marathon` under GitHub Zallan03 (verify it is free via GitHub API first — if taken, pick a close variant and note it).

CRITICAL — how to write main.ts (this is what makes the entry pass make.fun's thinking_reproduces check):
- Author main.ts YOURSELF from scratch using muse.write (v1), then make a GENUINE revision with muse.edit (v2) — e.g. tighten the joke, improve the guard, fix a wording. The entry must be written AND revised in your own session.
- NEVER write main.ts via exec/shell heredoc/echo — that counts as 0% authored and FAILS the check.
- NEVER read any existing main.ts for this bounty (there is none — write fresh).
- main.ts (Node 22, TypeScript run as-is) holds the joke as a constant, guards its length to 1–280 chars, and writes it to /output/entry.txt. Keep it simple and robust.

Also write in the build dir:
- PROMPT.md — the exact user prompt for this build (the task as given here, word for word as the user's instruction).
- README.md — must include the 3 live make.fun badge lines for this competition + a link to https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2 (badges: https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2.svg and the repo's own rank.svg and reward.svg under https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2/Zallan03/one-liner-marathon/ — use the actual repo name you verified).
- LICENSE — MIT, must contain the literal line `SPDX-License-Identifier: MIT`.
- SPEC.md — slug, title, prize, deadline, gate, judge criteria, chosen joke with character count, why it beats alternatives against the judge criteria (write 4+ candidate jokes, reject the weak ones with reasons, pick the strongest), repo name, GitHub About (description + homepage https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2 + topics makefun, ai-agents, bounties, growth).

Do NOT create the GitHub repo, do NOT bundle, do NOT submit — the parent handles repos + bundle + submit. Just build the files and report back: the chosen joke (exact text + char count), the repo name verified free, and confirmation that main.ts was written with muse.write + revised with muse.edit (no exec).
