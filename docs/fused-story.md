# The Dock: verified physical R&D, from spec to steel

For team review. 15 November 2026.

## What The Dock is

The Dock is ASKA Physical's open R&D hub for fabrication shops and jobsites. It publishes real hardware projects with plain numbers, rig-test results, and clear limits on what is untested. It serves crews who order steel, strip forms, and run cranes, and buyers who source material across borders. One hub, two halves: the floor and the gate.

The floor is the hardware. Five R&D modules, each tested on a rig and rated on a readiness rung. The gate is the discipline around it. Four checks run before money moves, and each check stops the job when it fails. Software proposes. Rigs verify. Engineers sign. Nothing ships on a simulation alone.

## The problem, in two parts

Lab results stall at the loading bay. Academic papers carry no shop tolerances. CAD concepts jam in muddy gloves. A tower crane burns 450 dollars an hour waiting on bolt alignment, per the deck.

Cross-border buying runs on free-form chat and PDF quotes. Specs go vague, mill certificates go unread, and the cheapest quote hides freight, insurance, and schedule risk. EU rules now ask for machine-readable compliance records. Regulation (EU) 2024/3110 applies from 8 January 2026. That date is checked. The carbon and passport duties arrive family by family after it, not all at once.

## The five modules

Each module lives on the Dock site as its own subpage, with a four-step shop method, a live calculator, and a copyable spec.

| Module | What it does | Readiness and proof | Headline figure |
|---|---|---|---|
| Rapid-GeoBinder | Low-clinker binder for precast. Forms strip in 4 hours with no steam. | Rung 3 of 5. 162 ASTM C39 cylinders crushed, plus a 2 cubic metre batch. | 2x daily precast turns |
| Kerf-Box Beam | Laser-cut sheet blanks ship flat and fold into closed structural tubes. | Rung 4 of 5. 40 linear metres folded in a pilot run. | 6.4x framing metres per flatbed |
| Pooled-Cut Nest | One cut plan pooled across several jobs, for plate, rebar, and timber. | Rung 5 of 5. Running in daily production. Scrap fell from 18.4 percent to 3.2 percent across 140 tonnes. | 21,400 dollars saved per 100 tonnes cut |
| Mill-Eye QC | Laser and certificate check at the receiving dock. | Rung 4 of 5. Live on 2 steel receiving docks. Caught 42 of 42 planted traps. | 1.8-second sweep, plus or minus 0.18 mm |
| Taper-Lock Node | Weld-free splice that self-centers as the crane lowers it. | Rung 3 of 5. 18 S355 coupons broken on the rig. Pull-out 312 kN. | Crane hold 38 min down to 5.5 min |

Numbers in the table come from the deck and the live site. They are presented, not independently checked. See the evidence note at the end.

## The gate: four checks

The gate half is the charter's design. It does not exist as code yet. It pairs each module with the check that tests its claims. The checks are built as Lean proofs plus plain Python with no network calls. Lean is a language for writing proofs a machine can check.

Brief gate. Locks 7 facts before sourcing starts: standard and grade, dimensions and tolerance, quantity and unit, hard and target window, delivery terms, what is fixed versus open, and EU compliance needs. GeoBinder's batch ticket is the locked brief. Its crush data is the test record the brief points to.

Qualify gate. Checks the supplier in 5 steps, in risk order: legal registration, live production proof, certificate plus raw test data, solvency, and transit custody. Mill-Eye is this gate running in hardware already. Its laser and certificate check is the Tier 3 step, which asks for certificate plus raw data.

Quote gate. Normalizes quotes to landed cost: base cost, freight and duty, all-risk insurance, schedule risk, and working-capital carry. Kerf-Box flatbed counts and Pooled-Cut savings feed this math. A cheap mill quote and a delivered quote stop looking alike.

Berth gate. Clears the shipment for delivery: bills of lading, batch certificates, product passports, and customs clearance, checked against the locked schedule. Taper-Lock's crane drop is this clearance in physical form. The PE stamp is the human sign-off.

A fail stops the job. Only a human principal can waive a failure, by signing the exact waiver text. No agent role can waive it.

## How a job runs

A job runs in four steps: specify, source, negotiate, deliver. The buyer writes a half-page brief that the brief gate can check. The crew maps standards and longlists mills. The architect turns drawings into the 7 locked facts. Quotes arrive as structured files, not chat. The gates run. The reviewer hunts for mismatches. The buyer signs.

Six roles share the work, each with a hard limit. The director coordinates and never commits commercially. The researcher maps standards and never picks winners. The architect writes the brief and never contacts vendors. The designer shapes the packets and never touches gate logic. The builder writes the parsers and never waives a failure. The reviewer checks and never expands scope.

## The org, reconciled

The charter drew a six-repo org as if the org were empty. It is not. The org holds 9 repos today.

Exists now: dock (the hub and the site), 6 R&D repos (cfrp-strengthening, fibral-rigidity, cfrp-truss, cfrp-masts, venturi-collars, impedence-analyzers), .github, aska-site.

Proposed, not yet created: physical-doctrine (operating rules), spec-codecs (checked parsers for briefs, tolerances, delivery terms, EU rules), supplier-bar (the 5-step vetting harness), blue-catalog (3D assembly taxonomy), berth-steward (policy bot that blocks leaked pricing and supplier IDs).

The 6 R&D repos are the pipeline the gates serve. The gates do not replace them. The new repos slot in beside them.

One naming decision stays open. The name Dock now covers the hub site and the procurement kernel. This draft keeps one name on purpose. The site is The Dock. The kernel is the dock code inside the dock repo, under gates/. If that reads as confusing, the kernel takes its own name before Phase 1 starts.

## Rollout: 16 weeks, 4 phases

Phase 0, weeks 1 to 2. Charter, doctrine, and the brief workbench. This starts from the live site, not from zero. The site already runs. The brief linter is the new piece.

Phase 1, weeks 3 to 6. Checked brief codec. Round-trip proofs for the 7 brief facts. Planted-bug tests. Non-author review before anything lands.

Phase 2, weeks 7 to 11. Landed-cost engine, supplier bar, and the encrypted bid vault. Pilots on live consignments across the charter's 6 corridors: CA, US, TR, AE, JO, OM.

Phase 3, weeks 12 to 16. The 6-role crew, EU compliance codecs, and public challenge tracks with pinned checkers.

## Guardrails

Four rules hold through every phase. The linter states that Dock checks spec completeness and commercial comparability. Structural suitability stays with the buyer's licensed engineers. Only a human principal can waive a gate failure.

The policy bot blocks any commit outside examples and synthetic tests that carries supplier tax IDs, live unit pricing, bank details, or client names. Every schedule carries at least one human clarifying round, because mills quote local standards and use unbriefed sub-agents.

## What is proven, what is presented

Checked 15 November 2026: the EU regulation application date above, the 9-repo org list, and the live site with 5 subpages. PR #2, carrying the updated site and link preview tags, merged 15 November 2026. PRs #3 and #4 also merged.

Presented by the deck and the live site, not independently checked: rig counts (18 coupons, 162 cylinders, 42 of 42 traps), savings figures (21,400 dollars per 100 tonnes, scrap 18.4 to 3.2 percent), crane rate (450 dollars an hour), and the 5.5-minute crane drop.

Presented by the charter, not checked: Kojo and ProcurePro figures, the 41-platform benchmark scores, and the 6-corridor claim.

Corrected in this draft: the charter reads carbon (GWP) declarations and Digital Product Passports as live duties from January 2026. They are not. Each applies family by family, after the standard for that family is renewed. Construction passports are not due before late 2028 on the current indicative plan.

## The ask

Fabrication pilots, precast yard trials, and open engineering specs at github.com/aska-physical. The deck's pilot bay is the front door. The gate half gives pilot partners a reason to trust the numbers: every claim on a subpage maps to a check, and every check names its evidence.

## Decisions needed

Approve the module-to-gate pairing above, or correct a pairing. Approve creating the 5 proposed repos, or hold them. Approve the corrected EU wording, or keep the charter's version. Settle the naming: one name for site and kernel, or a separate kernel name.
