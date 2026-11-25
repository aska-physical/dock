/* aska-physical/dock — OptiFab (#/optifab) Campus Model, Plant Gate & 64-Byte Frame Sizer (v0.3.2; pins funi-frame v0.1.1; standalone mirror optifab.askaconsult.com) */
(function () { if (typeof CORE_PROJECTS === "undefined" || typeof state === "undefined") return;
const OPTIFAB_PROJECT = { slug: "optifab", shortName: "OptiFab",
title: "Modelling the Ideal Datacenter: One Checked Campus Stack",
sector: "Data Centers",
station: "07 · Whole-Campus Model & Gate", coords: { x: 0.88, y: 0.30 }, rung: 2,
statusNote: "v0.3.2 · claimed · 19 findings · 29/29 controls · 16 Lean theorems · pins funi-frame v0.1.1",
caveat: "No person has reviewed it; nothing is measured — model only · standalone mirror at optifab.askaconsult.com",
externalRepoUrl: "https://github.com/aska-physical/optifab", visualType: "optifab",
sliderLabel: "IT Load as % of 10 MW Nameplate", sliderMin: 0, sliderMax: 100, sliderDefault: 100, sliderUnit: "% of nameplate",
presets: [ { label: "Below Load Floor (4%)", val: 4 }, { label: "Half Load (50%)", val: 50 },
{ label: "Full Load (100%)", val: 100 } ],
builderSummary: "A campus runs on a scheduler that places jobs on machines, and a bad placement wastes the whole plant. Optifab models the building, the cooling plant, and the software gate as one checked stack, and blocks any change that breaks the load floor (0.564 MW), the 41.46 °C re-cooling limit, or the 2,500 kWh thermal budget (14.69 min of ride-through at full load). 16 theorems proved in Lean, 29/29 controls passing.",
plainExplain: "Think of a data-center campus as one machine with a software gate at the door: the scheduler may place jobs only within three budgets — a minimum load floor so the plant stays in its efficient band, a re-cooling ceiling set by thermodynamics, and a thermal battery that buys ride-through when the grid wobbles. Optifab writes those budgets down as a checked model — every claim proved in Lean or explicitly flagged — so a proposed change is verified before it touches a valve. Nothing here is measured yet; it is a model, and the page says so.",
kpis: [
  { tag: "Integration", value: "One checked stack", note: "building + cooling plant + software gate; agrees with the funi-frame v0.1.1 certificate (2.854–2.959 vs 2.85–2.96 MW IT)" },
  { tag: "Quality", value: "16 theorems · 29/29", note: "proved in Lean under 6 kernels; 29/29 must-fail controls; 130 citations" },
  { tag: "Efficiency", value: "14.69 min ride-through", note: "at full load, from the 2,500 kWh_th PCM budget" },
  { tag: "Cost", value: "0.564 MW load floor", note: "below it the plant runs inefficiently; the floor is site-dependent (2.804 MW @ 38 °C, none @ 41 °C)" }
],
engineerSummary: "Models the ideal datacenter as one structure across four organisations: funi-frame v0.1.1's 10 MW / 2,500 m² campus, a sorption plant with the adopted 41.46 °C second-law recooling limit, a 2,500 kWh_th PCM budget (14.69 min full-load ride-through with the fixed heat counted), a 12-margin vector with radius 0.1989 at the certified point, and Weft's gate predicate with the plant model proved in Lean (16 theorems) over exact integers.",
howToRead: "Drag the slider from 0% to 100% of the 10 MW nameplate. Watch the load bar cross the 5.6% floor: below it the campus stops cooling itself and the air-side load must move to the aquifer loop; above it the sorption loop, the PCM budget, and the margin radius hold the contract.",
walkthrough: [
{ title: "Below the Load Floor", val: 4, text: "At 0.4 MW the captured heat can no longer drive the chiller — the campus stops cooling itself, and the air-side load has to move to the aquifer loop or a chiller. That is a change of operating mode, not a failure." },
{ title: "Half Load Raises the Capture Bar", val: 50, text: "At 5 MW the capture fraction needed for self-cooling rises to 64.4%; at a tenth of load it is 74.9%. The wall that kills the thermal bridge also cuts the floor by a third, from 0.85 MW to 0.56 MW." },
{ title: "The Gate's Radius Is the Headroom", val: 85, text: "Twelve margins, one vector. The floor punching collar sits at 80.1% — the tightest certified limit. Any change moving the vector by more than 0.1989 from the certified point passes a limit, so the gate refuses it; at the v0.3.1 start design the outage margin (961,695 ppm) is tightest and the first radius is 38,305 ppm." },
{ title: "Full Load, Full Contract", val: 100, text: "PUE 1.074 with no water if recooling stays below 41.46 °C (reversible COP 2.051 at the 30 °C design point), 14.69 minutes of PCM ride-through at full load with the fixed heat load counted, and the whole state — 12 margins, budget, load, recooling, time — packed into one 64-byte frame." }
],
metrics: [ { value: "2.85–2.96 MW IT", label: "extra IT load the freed 3.06 MW of utility power carries — now agrees with the funi-frame v0.1.1 certificate (2.854–2.959 vs 2.85–2.96)", cite: "docs/MODEL.md §1 · PR #19 agreement check" },
{ value: "0.564 MW", label: "load floor at 30 °C recooling (5.6% of nameplate) — site-dependent: 2.804 MW @ 38 °C, 6.113 MW @ 40 °C, none @ 41 °C", cite: "docs/MODEL.md §3 · finding 19" },
{ value: "14.69 min", label: "PCM ride-through at full load from the 2,500 kWh_th budget with the fixed heat load counted (v0.3.1 correction)", cite: "docs/MODEL.md §4 · CHANGELOG v0.3.1" },
{ value: "16 theorems · 29/29", label: "gate + plant model + loop proved in Lean under 6 kernels; 29/29 must-fail controls incl. upstream-agreement checks; 130 citations + 1 search hold vs fresh clones", cite: "formal/ · results/ · PR #19" } ],
shopMethod: {
tooling: "Python 3.10+ with SymPy; pinned upstream clones (36 repos); elan + bubblewrap for the Lean replay.",
steps: [
{ phase: "01 · Pin Upstream & Recompute", detail: "Clone the 36 pinned repositories, run python3 verify.py; every figure must reproduce results/certificate.json.", hold: "verify.py exit 0" },
{ phase: "02 · Run the Gate on Weft's Vectors", detail: "plant_gate must pass all 15 Weft weight-update vectors and match Weft's own function on the 100,000-case differential test; agreement checks assert optifab and funi-frame v0.1.1 (17d05bb) agree on IT load, recooling limit, reversible COP and revenue.", hold: "0 mismatches · 130 citations hold" },
{ phase: "03 · Replay the Ledger in Lean", detail: "Run python3 verify.py --formal: the comparator accepts 16 theorems (gate + plant model + loop) under 6 kernels and replays every ledger decision; both recorded model runs were remade on the corrected v0.3.1 model (objective 0.919529, the best a direct search finds).", hold: "comparator accepts · 29/29 controls" },
{ phase: "04 · File the Frame & Handoff", detail: "Pack the 12 margins, budget, load, recooling temperature, and time into the 64-byte frame; flag recooling_not_measured if the slot is empty.", hold: "frame round-trips" }
] },
calcConfig: { title: "Campus Contract Sizer: Load Floor, Recooling Limit & Thermal Budget",
subtitle: "Live solver from optifab/verify.py (v0.3.2): test the 0.564 MW load floor, the 41.46 °C second-law recooling limit, the 2,500 kWh_th PCM budget (14.69 min at full load), and the 2.85–2.96 MW of unlocked IT load that now matches funi-frame v0.1.1.",
inputs: [ { key: "itMw", label: "IT Hall Compute Load P_IT (MW)", min: 1.0, max: 10.0, step: 0.5, default: 10.0, unit: "MW" },
{ key: "liqPct", label: "Direct-to-Chip Capture α_liq (%)", min: 62, max: 95, step: 1, default: 85, unit: "%" },
{ key: "recoolC", label: "Recooling Temperature T_a (°C)", min: 25, max: 45, step: 1, default: 30, unit: "°C" },
{ key: "shedPct", label: "Load Shed in an Outage (%)", min: 0, max: 75, step: 5, default: 0, unit: "%" } ] },
specFilename: "optifab-plant-gate.toml",
verification: {
propose: "One physical structure holding four organisations' work — aska-physical's building, thermal plant, and sensors; Foundation-0's mathematics; Moissanite-Labs' Weft gate; Proven-Commons' bar for verified software — mapped as 41 repositories and 43 links, now cited to 130 lines at pinned commits that hold against fresh clones (v0.3.2). Add-only exact-Q study (PR #15) certifies the outage-defect catches, the K-stage thermal-buffer surge contraction (2048/429 ≈ 4.77×), and the passive multi-sink manifold closure.",
verify: "verify.py (v0.3.2) recomputes all 19 findings from pinned certificates and runs 29 must-fail controls — including the v0.3.1 corrected outage margin (961,695 ppm, tightest at the start) and the upstream-agreement checks (PR #19); NaN-swallowing closed and atomic dir_fd Zone-B certificate I/O (PR #16), -O-safe. The exact gate passes Weft's 15 vectors and agrees with Weft's own function on 100,000 generated cases; the Lean comparator accepts 16 theorems under 6 kernels and replays every ledger decision with 0 mismatches.",
sign: "Claimed, not signed. AI agents wrote v0.3.x and no person has reviewed it; under the Foundation-0 rule a person signs, nothing here counts until a named person has reviewed it. The subpage is mirrored standalone at optifab.askaconsult.com (PR #12)."
},
tableHeaders: ["Contract Term", "Workload Must", "Plant Offers", "Gate"],
tableRows: [
["IT load", "Stay above the 0.564 MW floor at 30 °C recooling, or move air load to the aquifer loop", "PUE 1.074, no water, if recooling < 41.46 °C", "MODEL §3 · finding 19"],
["Cooling outage / burst", "Charge every outage and burst above capacity to the thermal budget", "14.69 min ride-through at full load, fixed heat counted (v0.3.1)", "MODEL §4"],
["Margin moves", "Keep the margin vector within 0.1989 of the certified point", "Rack vibration at 17.9% of its limit", "MODEL §5"],
["Capacity planning", "Plan capacity in IT power, not utility power", "2.85–2.96 MW more IT than a conventional plant — matches funi-frame v0.1.1", "MODEL §1 · PR #19"] ],
untested: "No sensor feeds the chain and no valve, load, or machine obeys the gate; the plant model, the margins, the proposer, and the Python are unproved (3 of the 5 issue-#14 defects still need a design decision); the 30 °C design recooling is an unsourced proposal and finding 19's floor moves with it; a real sorption machine needs a manufacturer's curve to confirm COP 0.62 at 58 °C drive; funi-floors/venturi-collars certificates are taken on trust (tracker #3)."
};
/* Model constants, all pinned in optifab docs/MODEL.md. COP 0.62, drive 58 °C (331.15 K),
   chilled water 15–18 °C, fixed air-side load 0.213 MW, PCM budget 2,500 kWh_th. */
const OPTI_COP = 0.62, OPTI_TH_K = 331.15, OPTI_TC18_K = 291.15, OPTI_TC15_K = 288.15;
const OPTI_QFIX_MW = 0.213, OPTI_PCM_KWH = 2500, OPTI_PUE_F = 1.074, OPTI_FREED_PER_MW = 0.3065;
function optiRecoolMaxK(tcK) { return (tcK * OPTI_TH_K * (1 + OPTI_COP)) / (OPTI_COP * OPTI_TH_K + tcK); }
function evalOptifab(p) {
const c = (state.calcValues && state.calcValues[p.slug]) || {};
const Pit = c.itMw ?? 10.0;
const aLiq = (c.liqPct ?? 85) / 100.0;
const TaC = c.recoolC ?? 30;
const shed = (c.shedPct ?? 0) / 100.0;
const TaK = TaC + 273.15;
/* §1: freed utility power scales with load; IT carried is freed / PUE if every overhead
   grows with load, or freed / (1 + 1/COP_loop) if only the cooling loop grows (COP_loop 28). */
const freedMw = OPTI_FREED_PER_MW * Pit;
const itLow = freedMw / OPTI_PUE_F;
const itHigh = freedMw / (1 + 1 / 28);
/* §3: P_min = q_fix / ((1 + COP) * α − 1); capture needed at this load is (1 + q_fix/P) / (1 + COP). */
const alphaCrit = 1 / (1 + OPTI_COP);
const floorDenom = (1 + OPTI_COP) * aLiq - 1;
const floorMw = floorDenom > 0 ? OPTI_QFIX_MW / floorDenom : Infinity;
const alphaNeed = (1 + OPTI_QFIX_MW / Pit) / (1 + OPTI_COP);
const selfCools = aLiq > alphaCrit && Pit >= floorMw;
/* §2: T_a ≤ T_c·T_h·(1+COP) / (COP·T_h + T_c); reversible COP at the entered recooling temp. */
const taMaxC = optiRecoolMaxK(OPTI_TC18_K) - 273.15;
const taMax15C = optiRecoolMaxK(OPTI_TC15_K) - 273.15;
const copRev = (OPTI_TC18_K / (TaK - OPTI_TC18_K)) * ((OPTI_TH_K - TaK) / OPTI_TH_K);
const copFracPct = copRev > 0 ? (OPTI_COP / copRev) * 100 : Infinity;
/* §4: t = B / (P·(1−s)); §5: radius R* = 0.1989, tightest margin the floor punching collar at 80.1%. */
const rideMin = OPTI_PCM_KWH / (Pit * 1000 * (1 - shed)) * 60;
const fails = [];
if (aLiq <= alphaCrit) fails.push("CAPTURE " + Math.round(aLiq * 100) + "% ≤ " + (alphaCrit * 100).toFixed(1) + "% SELF-COOL THRESHOLD");
else if (!selfCools) fails.push("BELOW LOAD FLOOR (" + Pit.toFixed(1) + " MW < " + (isFinite(floorMw) ? floorMw.toFixed(2) : "∞") + " MW: SELF-COOLING FAILS)");
if (TaC >= taMaxC) fails.push("RECOOLING " + TaC + " °C ≥ " + taMaxC.toFixed(1) + " °C SECOND-LAW LIMIT");
const badge = fails.length === 0 ? { cls: "badge-pill badge-verified", text: "✓ PLANT GATE HOLDS · PUE 1.074 · R* 0.1989" }
: { cls: "badge-pill badge-accent", text: "FAIL-CLOSED · " + fails[0] };
const specText = [ "# ASKA PHYSICAL — OPTIFAB v0.3.2 CAMPUS CONTRACT & PLANT GATE SPEC (pins funi-frame v0.1.1 @ 17d05bb)", "repo = \"https://github.com/aska-physical/optifab\"",
"gate_status = \"" + (fails.length === 0 ? "PASS" : "FAIL_CLOSED") + "\" # claimed, unreviewed: no person has signed · standalone mirror: optifab.askaconsult.com",
"", "[campus]", "hall_it_capacity_MW = " + Pit.toFixed(1) + " # reference campus: 10 MW on a 2,500 m2 plan, two storeys",
"liquid_capture_fraction = " + aLiq.toFixed(2) + " # critical threshold = " + alphaCrit.toFixed(4),
"PUE_optifab = 1.074 # vs 1.380 conventional; WUE = 0.0 L/kWh",
"freed_substation_power_MW = " + freedMw.toFixed(2) + " # carries " + itLow.toFixed(2) + "–" + itHigh.toFixed(2) + " MW of IT load",
"", "[recooling_limit]", "recooling_temp_C = " + TaC + " # second-law maximum = " + taMaxC.toFixed(1) + " C at 18 C chilled water (" + taMax15C.toFixed(1) + " C at 15 C)",
"sorption_COP_claimed = 0.62 # " + copFracPct.toFixed(0) + "% of the reversible COP at this recooling temperature",
"", "[load_floor]", "load_floor_MW = " + (isFinite(floorMw) ? floorMw.toFixed(3) : "inf") + " # " + (isFinite(floorMw) ? (floorMw / 10 * 100).toFixed(1) + "% of nameplate at 30 °C recooling (finding 19: 2.804 MW @ 38 °C, 6.113 MW @ 40 °C)" : "no self-cooling at this capture fraction"),
"capture_needed_at_this_load_pct = " + (alphaNeed * 100).toFixed(1) + " # 63.0 at full load, 64.4 at half, 67.0 at a quarter, 74.9 at a tenth",
"self_cooling = " + (selfCools ? "true" : "false") + " # below the floor, move the air-side load to the aquifer loop",
"", "[thermal_budget]", "pcm_budget_kWh_th = 2500 # ride-through " + rideMin.toFixed(1) + " min at " + Pit.toFixed(1) + " MW with " + Math.round(shed * 100) + "% shed; certified 14.69 min at full load with the fixed heat load counted (v0.3.1)",
"", "[plant_gate]", "margin_radius_R_star = 0.1989 # at the certified point; tightest margin: floor punching collar at 80.1%. At the v0.3.1 start design the outage margin is tightest (961,695 ppm) and the first radius is 38,305 ppm",
"gate = \"Weft I3 predicate, plant units: baseline = certified margin vector, budget = PCM kWh_th\"",
"frame64 = \"12 margins + budget + load + recooling + time in 16 float32, 64 bytes (Weft layout)\"" ].join("\n");
return { outputs: [
{ label: "Extra IT Load Unlocked", value: itLow.toFixed(2) + "–" + itHigh.toFixed(2) + " MW", sub: "Freed " + freedMw.toFixed(2) + " MW utility at " + Pit.toFixed(1) + " MW IT; a value per MW of IT is 3.6–7.4% high if misread" },
{ label: "Load Floor & Self-Cooling", value: isFinite(floorMw) ? floorMw.toFixed(3) + " MW" : "NO SELF-COOLING", sub: selfCools ? "Self-cools at " + Pit.toFixed(1) + " MW; needs α ≥ " + (alphaNeed * 100).toFixed(1) + "% at this load; floor is 0.564 MW at 30 °C recooling" : "Below floor — move air-side load to the aquifer loop" },
{ label: "Recooling Limit & COP Headroom", value: taMaxC.toFixed(1) + " °C max", sub: copFracPct <= 100 ? "Claimed COP 0.62 is " + copFracPct.toFixed(0) + "% of reversible at " + TaC + " °C recooling" : "Claimed COP 0.62 exceeds the reversible limit at " + TaC + " °C — impossible" },
{ label: "PCM Ride-Through", value: rideMin.toFixed(1) + " min", sub: "2,500 kWh_th budget · certified 14.69 min at full load with fixed heat counted (v0.3.1) · 10% burst for 2.5 h" }
], statusBadge: badge, specText: specText }; }
function drawOptifabCanvas(canvas, val) { if (!canvas) return;
const rect = canvas.getBoundingClientRect();
const w = Math.max(260, rect.width || canvas.clientWidth || 640);
const h = Math.max(160, rect.height || canvas.clientHeight || 300);
const dpr = window.devicePixelRatio || 1; if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr); }
const ctx = canvas.getContext("2d"); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
const cs = getComputedStyle(document.documentElement);
const tk = (k, fb) => (cs.getPropertyValue(k) || "").trim() || fb;
const bg = tk("--bg-canvas", "#F1EFE8"), fg = tk("--fg", "#151513"), muted = tk("--fg-muted", "#57554E");
const accent = tk("--accent", "#C24124"), blue = tk("--blueprint", "#1E40AF"), ver = tk("--verified", "#166534");
const grid = tk("--grid-line", "rgba(21,21,19,0.06)"); ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h); ctx.strokeStyle = grid; ctx.lineWidth = 1;
for (let x = 24; x < w; x += 28) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
for (let y = 24; y < h; y += 28) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }
const t = Math.max(0, Math.min(1, (val ?? 100) / 100));
const loadMw = 10 * t;
const floorMw = 0.564; /* finding 19 at 30 °C recooling */
const ok = loadMw >= floorMw;
const mode = ok ? ver : accent;
/* Campus schematic: vault roof, two floors of racks, sorption box, PCM skid, aquifer line. */
const bx = w * 0.06, bw = w * 0.58, roofY = h * 0.30, midY = h * 0.52, baseY = h * 0.74;
ctx.strokeStyle = blue; ctx.lineWidth = 2;
ctx.strokeRect(bx, roofY, 12, baseY - roofY); ctx.strokeRect(bx + bw - 12, roofY, 12, baseY - roofY);
ctx.beginPath(); ctx.moveTo(bx - 4, roofY + 4); ctx.quadraticCurveTo(bx + bw * 0.5, roofY - h * 0.15, bx + bw + 4, roofY + 4);
ctx.strokeStyle = ver; ctx.lineWidth = 4; ctx.stroke();
[midY, baseY].forEach(function (fy) { ctx.fillStyle = muted; ctx.fillRect(bx + 12, fy - 4, bw - 24, 5);
for (let k = 0; k < 3; k++) { const rx = bx + bw * (0.18 + k * 0.24), rw = bw * 0.14, rh = h * 0.12;
ctx.fillStyle = ok ? ver : accent; ctx.globalAlpha = 0.25 + 0.75 * t; ctx.fillRect(rx, fy - 6 - rh, rw, rh); ctx.globalAlpha = 1.0; } });
/* Sorption chiller + PCM skid boxes, aquifer line. */
ctx.strokeStyle = blue; ctx.lineWidth = 1.6;
ctx.strokeRect(bx + bw + w * 0.02, midY - h * 0.10, w * 0.10, h * 0.10);
ctx.strokeRect(bx + bw + w * 0.02, baseY - h * 0.10, w * 0.10, h * 0.10);
ctx.strokeStyle = muted; ctx.setLineDash([5, 4]); ctx.beginPath();
ctx.moveTo(bx, baseY + h * 0.10); ctx.lineTo(bx + bw + w * 0.14, baseY + h * 0.10); ctx.stroke(); ctx.setLineDash([]);
/* Load bar (right): 0–10 MW with the 5.6% floor tick. */
const barX = w * 0.86, barW = w * 0.045, barTop = h * 0.22, barBot = h * 0.78, barH = barBot - barTop;
ctx.strokeStyle = fg; ctx.lineWidth = 1.5; ctx.strokeRect(barX, barTop, barW, barH);
const fillH = barH * t; ctx.fillStyle = mode; ctx.fillRect(barX, barBot - fillH, barW, fillH);
const floorY = barBot - barH * (floorMw / 10);
ctx.strokeStyle = accent; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(barX - 6, floorY); ctx.lineTo(barX + barW + 6, floorY); ctx.stroke();
if (w >= 420) {
ctx.font = "600 11px 'JetBrains Mono', monospace"; ctx.fillStyle = fg;
ctx.fillText("10 MW IT · 2,500 m² · 2 STOREYS · PUE 1.074", 14, 20);
ctx.fillStyle = blue; ctx.fillText("SORPTION 58°C · COP 0.62", bx + bw + w * 0.02, midY - h * 0.13);
ctx.fillText("PCM 2,500 kWh_th", bx + bw + w * 0.02, baseY - h * 0.13);
ctx.fillStyle = muted; ctx.fillText("AQUIFER LOOP", bx + 4, baseY + h * 0.10 + 14);
ctx.fillStyle = accent; ctx.fillText("FLOOR 0.564 MW", barX - 98, floorY + 4);
ctx.fillStyle = mode;
ctx.fillText(ok ? "SELF-COOLING · α 85% > 61.73% · R* 0.1989" : "BELOW FLOOR — AIR LOAD TO AQUIFER LOOP", 14, h - 10); } }
if (!CORE_PROJECTS.some(function (p) { return p.slug === "optifab"; })) { CORE_PROJECTS.push(OPTIFAB_PROJECT); }
const existingIdx = state.projects.findIndex(function (p) { return p.slug === "optifab"; }); if (existingIdx >= 0) {
state.projects[existingIdx] = OPTIFAB_PROJECT; } else { state.projects.push(OPTIFAB_PROJECT); } if (typeof initProjectDefaults === "function") {
initProjectDefaults(OPTIFAB_PROJECT); }
const _prevEval = window.evaluateSubpageCalculator; window.evaluateSubpageCalculator = function (p) {
if (p && p.visualType === "optifab") return evalOptifab(p); return _prevEval ? _prevEval(p) : null; };
const _prevRender = window.renderPhysicsEngine; window.renderPhysicsEngine = function (canvas, type, val) { if (type === "optifab") {
drawOptifabCanvas(canvas, val); return; } if (_prevRender) _prevRender(canvas, type, val); }; })();
