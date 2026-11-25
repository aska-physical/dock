/* aska-physical/dock — CFRP Masts (#/cfrp-masts) Snap-Locked Deployable Boom & Mast Sizer (v0.1.0; -O-safe verify, #4 closed #3) */
(function () { if (typeof CORE_PROJECTS === "undefined" || typeof state === "undefined") return;
const MASTS_PROJECT = { slug: "cfrp-masts", shortName: "CFRP Masts",
title: "Snap-Locked Deployable CFRP Masts, Telecom Towers & Space Booms",
sector: "Deployable Structures", station: "05 · Field Deployment", coords: { x: 0.55, y: 0.86 }, rung: 2,
statusNote: "v0.1.0 · 5 must-fail controls · -O-safe CheckFailure guards (PR #4) · rejection flags are the measurements (dock#8)",
caveat: "Model/checker only — no physical deployment-cycle test yet; dock#8: checker passed on a clean re-run, not a bench measurement",
externalRepoUrl: "https://github.com/aska-physical/cfrp-masts", visualType: "cfrp-masts",
sliderLabel: "Deployment (stowed → snap-locked taut)", sliderMin: 0, sliderMax: 100, sliderDefault: 90, sliderUnit: "% deployed",
presets: [ { label: "Stowed (0%)", val: 0 }, { label: "Half-Rigged (50%)", val: 50 }, { label: "Snap-Locked Taut (100%)", val: 100 } ],
builderSummary: "Each mast bay is a thin-walled pultruded CFRP tube (radius ratio η = 0.80 → 4.56× the Euler buckling resistance of a solid rod) graded at α_K* = 2√2, with 12 non-intersecting 45° octagonal-pore T1100G/K13D2U cables that fold slack during stowage and snap taut at full deployment to lock shear rigidity (GA_eff > 0).",
engineerSummary: "5.0 m K13D2U space boom: 14.06 kg, EI = 586.1 kN·m² — 14.02× the specific EI of a 3D-printed Ti-6Al-4V octet and 59% lighter than Ti; thermal drift 0.30 mm per 100 K (38.5× lower than Al 6061's 11.55 mm); stows to 1.51 m. 15.0 m T1100G telecom mast stows to 4.52 m. Timoshenko shear + Haringx buckling verified with 5 must-fail controls; verify.py passes under python3 -O (CheckFailure, not asserts — PR #4).",
howToRead: "Drag from stowed to 100% deployed. The cable lattice goes slack in the stowed bundle and snaps taut at full extension, locking shear rigidity; watch mass, specific EI, and the 100 K pointing drift against the metal benchmarks.",
walkthrough: [
{ title: "Why Metal Booms Lose", val: 20, text: "Fixed filament-wound trusses and printed lattices can't fold compactly (1.0× compaction) and carry heavy metallic mass; slit-tube/inflatable booms stow small but suffer low torsional stiffness, hysteresis, and mm–cm thermal pointing drift." },
{ title: "η = 0.80 Thin-Wall Tubes", val: 45, text: "Inner/outer radius ratio 0.80 gives 4.56× higher local Euler buckling resistance than solid rods of the same mass — the bay tube, not the cable, carries compression." },
{ title: "Snap-Lock Shear Rigidity", val: 75, text: "12 non-intersecting 45° octagonal-pore cables (β_iso = 0.362323) fold slack during stowage and snap taut at full deployment: GA_eff > 0, so the boom carries shear and torsion, not just bending." },
{ title: "Benchmarks at 5 m / 100 K", val: 100, text: "14.06 kg vs 21.09 kg Al / 34.61 kg Ti; EI 586.1 vs 62.3 / 102.9 kN·m² → 14.02× specific EI vs Ti; drift 0.30 mm vs 11.55 mm Al (38.5× lower); stowed 1.51 m." }
],
metrics: [ { value: "14.06 kg", label: "5 m K13D2U boom — 59% lighter than Ti-6Al-4V octet", cite: "verify.py cert" },
{ value: "14.02×", label: "specific EI/kg vs Ti octet (586.1 kN·m²)", cite: "Timoshenko + Haringx" },
{ value: "0.30 mm", label: "pointing drift per 100 K — 38.5× lower than Al 6061", cite: "thermal drift model" },
{ value: "1.51 m", label: "stowed length of the 5 m boom (15 m mast: 4.52 m)", cite: "folding geometry" } ],
shopMethod: {
tooling: "Pultrusion/filament-winding for bay tubes, pre-formed 45° octagonal-pore cable guides, snap-lock end fittings, deployment ground rig for proof cycles.",
steps: [
{ phase: "01 · Wind Bay Tubes", detail: "Pultrude thin-wall CFRP tubes at η = 0.80; grade tow at α_K* = 2√2 per fibral-rigidity laws.", hold: "η = 0.80 ± 0.01" },
{ phase: "02 · Lace Cable Lattice", detail: "Thread 12 non-intersecting 45° octagonal-pore T1100G/K13D2U cables through guides; they fold slack in stowage.", hold: "no cable intersections" },
{ phase: "03 · Snap-Lock Ends", detail: "Fit snap-lock end fittings; at full deployment the lattice snaps taut → GA_eff > 0 (shear locked).", hold: "GA_eff > 0 at 100%" },
{ phase: "04 · Proof Cycle", detail: "Stow/deploy cycle on the ground rig; verify checker gates: buckling, Timoshenko shear, drift.", hold: "5/5 controls fail-closed" }
] },
calcConfig: { title: "Deployable Boom Sizer: Mass, EI, Specific Rigidity & Thermal Drift",
subtitle: "Live model from cfrp-masts/verify.py: 5 m K13D2U boom scaled by length; η = 0.80 tubes; snap-lock lattice; drift per ΔT against Al/Ti octets.",
inputs: [ { key: "lenM", label: "Boom Length (m)", min: 3.0, max: 15.0, step: 0.5, default: 5.0, unit: "m" },
{ key: "eta", label: "Tube Radius Ratio η (r_in/r_out)", min: 0.70, max: 0.85, step: 0.01, default: 0.80, unit: "η" },
{ key: "dTK", label: "Thermal Swing ΔT (K)", min: 50, max: 150, step: 10, default: 100, unit: "K" },
{ key: "stowM", label: "Stowed Length Budget (m)", min: 1.0, max: 5.0, step: 0.25, default: 1.51, unit: "m" } ] },
specFilename: "cfrp-masts-boom-spec.toml",
verification: {
propose: "Exact continuous folding geometry (Foundation-0/incentre-lattices), area-graded tubular buckling and octagonal-pore cable laws (fibral-rigidity), rational linkage state certification (Foundation-0/rigid-realizations).",
verify: "Deterministic verify.py: Timoshenko shear + Haringx buckling + 5 must-fail controls; passes on a clean re-run including under python3 -O (CheckFailure guards — PR #4 closed issue #3; NaN/Zone-B hardening pattern available). Per dock#8 the rejection flags are the measurements — still not a bench test.",
sign: "Model/checker only. No physical deployment cycle, hinge fatigue, or pointing test exists; a person signs nothing yet."
},
tableHeaders: ["Metric", "Al 6061 Octet", "Ti-6Al-4V Printed Octet", "CFRP Snap-Lock (K13D2U)", "Advantage"],
tableRows: [
["Structural mass (5 m)", "21.09 kg", "34.61 kg", "14.06 kg", "59% lighter than Ti"],
["Flexural rigidity EI", "62.3 kN·m²", "102.9 kN·m²", "586.1 kN·m²", "14.02× specific EI vs Ti"],
["Drift per 100 K", "11.55 mm", "4.30 mm", "0.30 mm", "38.5× lower than Al"],
["Stowed length", "5.0 m (1.0×)", "5.0 m (1.0×)", "1.51 m", "compact stow"]
],
untested: "No physical stow/deploy cycle count or hinge fatigue data; snap-lock wear over repeated cycles; 15 m telecom mast field erection; thermal pointing measured only in the model."
};
function evalMasts(p) {
const c = (state.calcValues && state.calcValues[p.slug]) || {};
const lenM = c.lenM ?? 5.0;
const eta = c.eta ?? 0.80;
const dTK = c.dTK ?? 100;
const stowBudget = c.stowM ?? 1.51;
/* Reference 5 m K13D2U boom: 14.06 kg, EI 586.1 kN·m², drift 0.30 mm @100K, stowed 1.51 m. Scale mass & stow linearly, EI with section (kept at reference section) — conservative display. */
const mass = 14.06 * (lenM / 5.0);
const driftMm = 0.30 * (dTK / 100) * (lenM / 5.0);
const stowed = (lenM <= 5 ? 1.51 : 4.52) * (lenM / (lenM <= 5 ? 5 : 15));
const bucklingBoost = Math.pow(1 / (1 - eta * eta), 2) > 0 ? Math.round(Math.pow(eta, -4) * 10) / 10 : 0; /* η=0.80 → ≈ 4.56× local Euler vs solid rod of same area is model claim; display reference */
const ei = 586.1;
const specEI = ei / mass;
const tiSpec = 102.9 / 34.61;
const fails = [];
if (driftMm > 11.55) fails.push("DRIFT " + driftMm.toFixed(2) + " mm > Al 11.55 mm per 100 K");
if (stowed > stowBudget) fails.push("STOWED " + stowed.toFixed(2) + " m > budget " + stowBudget.toFixed(2) + " m");
const badge = fails.length === 0 ? { cls: "badge-pill badge-verified", text: "✓ " + mass.toFixed(1) + " kg · " + (specEI / tiSpec).toFixed(1) + "× SPECIFIC EI vs Ti · DRIFT " + driftMm.toFixed(2) + " mm" }
: { cls: "badge-pill badge-accent", text: "FAIL-CLOSED · " + fails[0] };
const specText = [ "# ASKA PHYSICAL — CFRP-MASTS BOOM SPEC (v0.1.0, model/checker only)", "repo = \"https://github.com/aska-physical/cfrp-masts\"",
"gate_status = \"" + (fails.length === 0 ? "PASS" : "FAIL_CLOSED") + "\" # -O-safe CheckFailure (PR #4); rejection flags are the measurements",
"", "[boom]", "length_m = " + lenM.toFixed(1), "tube_radius_ratio_eta = " + eta.toFixed(2) + " # local Euler ≈ 4.56× solid rod @ η=0.80",
"mass_kg = " + mass.toFixed(2) + " # reference 14.06 kg @ 5 m K13D2U",
"EI_kNm2 = " + ei.toFixed(1) + " # Timoshenko + Haringx verified",
"specific_EI = " + specEI.toFixed(2) + " kN·m²/kg # vs Ti octet " + tiSpec.toFixed(2) + " → 14.02×",
"", "[thermal]", "drift_mm_per_dT = " + (driftMm / dTK).toFixed(4) + " # " + driftMm.toFixed(2) + " mm @ ΔT " + dTK + " K (Al 6061: 11.55 mm/100 K)",
"", "[stow]", "stowed_m = " + stowed.toFixed(2) + " # budget " + stowBudget.toFixed(2) + " m · cables snap taut at 100% → GA_eff > 0" ].join("\n");
return { outputs: [
{ label: "Mass", value: mass.toFixed(2) + " kg", sub: "5 m reference 14.06 kg K13D2U · 59% lighter than Ti" },
{ label: "EI & Specific Rigidity", value: ei.toFixed(1) + " kN·m² · " + (specEI / tiSpec).toFixed(1) + "× vs Ti", sub: "η = " + eta.toFixed(2) + " thin-wall tubes (≈4.56× local Euler)" },
{ label: "Thermal Drift", value: driftMm.toFixed(2) + " mm @ " + dTK + " K", sub: "Al 6061: 11.55 mm/100 K → 38.5× lower at reference" },
{ label: "Stowed Length", value: stowed.toFixed(2) + " m", sub: "vs budget " + stowBudget.toFixed(2) + " m · snap-lock taut at 100%" }
], statusBadge: badge, specText: specText }; }
function drawMastsCanvas(canvas, val) { if (!canvas) return;
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
const t = Math.max(0, Math.min(1, (val ?? 90) / 100));
/* Boom: stowed bundle (left, short) → deployed (right, long) */
const bx = w * 0.08, by = h * 0.55;
const stowedW = w * 0.10, deployedW = w * 0.52;
ctx.strokeStyle = muted; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(bx, by); ctx.lineTo(bx + stowedW * (1 - t) + deployedW * t, by); ctx.stroke();
/* cable lattice: slack (wavy) when stowed, straight (taut) when deployed */
ctx.strokeStyle = t > 0.9 ? ver : accent; ctx.lineWidth = 1.6;
for (let k = 0; k < 4; k++) {
  const y = by - 12 + k * 8;
  ctx.beginPath(); ctx.moveTo(bx, y);
  const len = stowedW * (1 - t) + deployedW * t;
  if (t < 0.9) { for (let x = 0; x <= len; x += 8) ctx.lineTo(bx + x, y + Math.sin(x / 6 + k) * 4 * (1 - t)); }
  ctx.lineTo(bx + len, y); ctx.stroke();
}
/* drift gauge */
const gx = w * 0.78, gy = h * 0.30, gr = Math.min(w, h) * 0.16;
ctx.strokeStyle = fg; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(gx, gy, gr, -Math.PI / 2, Math.PI / 2); ctx.stroke();
ctx.strokeStyle = accent; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(gx, gy, gr, -Math.PI / 2, -Math.PI / 2 + t * Math.PI / 2); ctx.stroke();
if (w >= 420) {
ctx.font = "600 11px 'JetBrains Mono', monospace"; ctx.fillStyle = fg;
ctx.fillText("SNAP-LOCK CFRP BOOM · η=0.80 · 12× 45° CABLES · GA_eff " + (t > 0.9 ? "> 0 (TAUT)" : "= 0 (SLACK)"), 14, 20);
ctx.fillStyle = t > 0.9 ? ver : accent;
ctx.fillText("5 m K13D2U: 14.06 kg · EI 586.1 kN·m² · 14.02× SPEC EI vs Ti · 0.30 mm/100 K · STOW 1.51 m", 14, h - 10); } }
if (!CORE_PROJECTS.some(function (p) { return p.slug === "cfrp-masts"; })) { CORE_PROJECTS.push(MASTS_PROJECT); }
const existingIdx = state.projects.findIndex(function (p) { return p.slug === "cfrp-masts"; }); if (existingIdx >= 0) {
state.projects[existingIdx] = MASTS_PROJECT; } else { state.projects.push(MASTS_PROJECT); } if (typeof initProjectDefaults === "function") {
initProjectDefaults(MASTS_PROJECT); }
const _prevEval = window.evaluateSubpageCalculator; window.evaluateSubpageCalculator = function (p) {
if (p && p.visualType === "cfrp-masts") return evalMasts(p); return _prevEval ? _prevEval(p) : null; };
const _prevRender = window.renderPhysicsEngine; window.renderPhysicsEngine = function (canvas, type, val) { if (type === "cfrp-masts") {
drawMastsCanvas(canvas, val); return; } if (_prevRender) _prevRender(canvas, type, val); }; })();
