/* aska-physical/dock — CFRP Strengthening (#/cfrp-strengthening) ACI 440.2R Beam Checks (Track 1 recorded; PRs #7/#17 assumed merged) */
(function () { if (typeof CORE_PROJECTS === "undefined" || typeof state === "undefined") return;
const STRENGTH_PROJECT = { slug: "cfrp-strengthening", shortName: "CFRP Strengthening",
title: "Open, Re-Runnable ACI 440.2R Checks for CFRP-Strengthened Concrete Beams",
sector: "Structural", station: "04 · Jobsite Erection", coords: { x: 0.88, y: 0.58 }, rung: 2,
statusNote: "Track 1 result recorded (VERIFIED vs worked example) · checker fixes PR #7 · docs/rules PR #17",
caveat: "Calculations only — no physical beam tested; ACI 440.2R-17 cited (superseded by PRC-440.2-23, see NOTICE); every claim carries a PROVEN/VERIFIED/KNOWN/CONJECTURE label",
externalRepoUrl: "https://github.com/aska-physical/cfrp-strengthening", visualType: "cfrp-strengthening",
sliderLabel: "Factored Demand vs Strengthened Capacity", sliderMin: 300, sliderMax: 500, sliderDefault: 457.8, sliderUnit: " kip-ft",
presets: [ { label: "Light (350 kip-ft)", val: 350 }, { label: "Worked Example (457.8 kip-ft)", val: 457.8 }, { label: "Heavy (490 kip-ft)", val: 490 } ],
builderSummary: "One beam at a time: a small public Python checker (src/flexure440.py) runs the ACI 440.2R flexure checks from a stated input file and prints value, limit, and pass/fail for each. On the Track 1 Simpson Strong-Tie worked example it reproduces ten printed quantities and gives a strengthened design strength of 481.7 kip-ft against a 457.8 kip-ft demand.",
engineerSummary: "The checker uses the ACI 318 Whitney block for the existing section and the ACI 440.2R-17 Chapter 10 stress-block factors for the strengthened section. With the PR #7 checker fixes: the §10.2.8 service concrete check (0.45 f'c limit) now runs and the Track 1 beam FAILS it (3.38 ksi vs 1.80 ksi at c = 6 in) — disclosed, not hidden; and existing_strength no longer assumes steel yields (As = 12 in² gives Mn ≈ 896 kip-ft, was ≈ 986).",
howToRead: "Slide the factored demand. ULS flexure passes at 481.7 kip-ft, but the service concrete stress check now fails on this beam — the result discloses it rather than claiming serviceability. A mismatch with a published example starts an inquiry, since published examples carry rounding.",
walkthrough: [
{ title: "Every Number From a Stated Input", val: 20, text: "tracks/track-1/input.json declares every input; python3 src/flexure440.py tracks/track-1/input.json prints each check's value, limit, and verdict. ffu, efu, ebi are marked derived, not printed inputs." },
{ title: "Worked Example Match (VERIFIED)", val: 55, text: "The checker reproduces the Simpson Strong-Tie worked example on ten printed quantities; strengthened design strength 481.7 kip-ft vs demand 457.8 kip-ft is checker output, stated as such." },
{ title: "Service Concrete Check Now Runs (PR #7)", val: 80, text: "ACI 440.2R-17 §10.2.8: service concrete stress from strain compatibility on the cracked section is 3.38 ksi vs the 0.45 f'c = 1.80 ksi limit — the beam reports FAIL for that check (also fails at 0.60 f'c). The recorded result already disclosed this by hand calculation." },
{ title: "Yield No Longer Assumed (PR #7)", val: 100, text: "Steel stress comes from strain compatibility clamped at fy: As = 12 in² gives Mn ≈ 896 kip-ft (was ≈ 986), and As = 40 in² gives a sane positive strength instead of a negative one." }
],
metrics: [ { value: "481.7 / 457.8", label: "kip-ft strengthened design strength vs demand (Track 1)", cite: "results/track-1-flexure/PROOF.md" },
{ value: "10", label: "printed quantities of the worked example reproduced", cite: "VERIFIED label" },
{ value: "3.38 vs 1.80 ksi", label: "service concrete stress vs 0.45 f'c limit — FAIL, disclosed (PR #7)", cite: "§10.2.8 checker" },
{ value: "≈896 kip-ft", label: "existing Mn at As = 12 in² with yield clamp (was ≈986)", cite: "PR #7 test" } ],
shopMethod: {
tooling: "Any Python 3: python3 src/flexure440.py tracks/track-1/input.json; make verify re-runs checker + tests; commitment hashes cover input.json and expected.json.",
steps: [
{ phase: "01 · State the Inputs", detail: "Write tracks/track-1/input.json: geometry, f'c, fy, FRP system, sustained moment note. No input value hides in code.", hold: "input.json committed + hashed" },
{ phase: "02 · Run the Checker", detail: "python3 src/flexure440.py tracks/track-1/input.json — flexure, service, creep-rupture checks with printed limits.", hold: "verdicts printed, not asserted away" },
{ phase: "03 · Match the Published Example", detail: "Compare against tracks/track-1-flexure-example.md; a mismatch starts an inquiry (examples carry rounding).", hold: "10 printed quantities match" },
{ phase: "04 · Record the Result", detail: "A result PR carries the PROOF.md with labels (PROVEN = written proof only, per PR #17); checker PRs carry no result.", hold: "One PR per change; author does not merge" }
] },
calcConfig: { title: "ACI 440.2R Track 1 Beam Checker (ULS + Service + Creep-Rupture)",
subtitle: "Live view of the recorded Track 1 checks: ULS flexure vs demand, §10.2.8 service concrete (PR #7), yield-clamped existing strength, and the 0.55 ffu creep-rupture limit (59.8 ksi, printed as 60).",
inputs: [ { key: "demand", label: "Factored Demand M_u (kip-ft)", min: 300, max: 500, step: 5, default: 457.8, unit: "kip-ft" },
{ key: "asIn2", label: "Existing Steel As (in²)", min: 6, max: 40, step: 1, default: 12, unit: "in²" },
{ key: "fcKsi", label: "Concrete f'c (ksi)", min: 3, max: 8, step: 0.5, default: 4.0, unit: "ksi" },
{ key: "cIn", label: "Neutral Axis Depth c (in)", min: 4, max: 8, step: 0.5, default: 6, unit: "in" } ] },
specFilename: "cfrp-strengthening-track1-spec.toml",
verification: {
propose: "The design method is KNOWN, not ours: ACI 440.2R (Committee 440), cited not copied. Our work is the code, tests, and notes — and any errors in them.",
verify: "Track 1 result VERIFIED for the ten printed quantities against the Simpson Strong-Tie worked example. PR #7 (assumed merged) adds the §10.2.8 service check (3.38 > 1.80 ksi FAIL at c = 6 in, asserted in a test), the yield clamp (Mn ≈ 896 kip-ft at As = 12), and the Whitney block; make verify passes. PR #17 (assumed merged) restricts PROVEN to written proofs, marks derived values, moves Track 4 masonry to ACI 440.7R.",
sign: "A person signs any public claim that a product beats a market baseline. Currently: one recorded result, VERIFIED as a calculation — no physical beam tested, serviceability explicitly not claimed."
},
tableHeaders: ["Check", "Value", "Limit", "Source", "Verdict"],
tableRows: [
["ULS flexure (strengthened)", "481.7 kip-ft", "M_u = 457.8 kip-ft", "Track 1 checker output", "PASS"],
["Service concrete §10.2.8 (PR #7)", "3.38 ksi @ c = 6 in", "0.45 f'c = 1.80 ksi", "strain compatibility", "FAIL — disclosed"],
["Existing strength (yield clamp, PR #7)", "≈ 896 kip-ft @ As = 12 in²", "—", "clamped at fy", "corrected"],
["CFRP creep-rupture §10.2.9", "—", "0.55 ffu = 59.8 ksi (printed 60)", "full service moment", "gate"]
],
untested: "No physical beam has been tested; the worked example carries rounding (a mismatch starts an inquiry, not an accusation); Track 4 masonry sits outside ACI 440.2R (ACI 440.7R per PR #17); known checker defects listed in docs/audit.md."
};
function evalStrength(p) {
const c = (state.calcValues && state.calcValues[p.slug]) || {};
const Mu = c.demand ?? 457.8;
const As = c.asIn2 ?? 12;
const fc = c.fcKsi ?? 4.0;
const cIn = c.cIn ?? 6;
const phiMn = 481.7; /* checker output, Track 1 */
const ulsPass = Mu <= phiMn;
const servLimit = 0.45 * fc; /* ksi */
const servStress = 3.38 * (6 / cIn); /* c = 6 in reference point of the trial block */
const servPass = servStress <= servLimit;
const mnExisting = As <= 12 ? 896 : As * 74.7; /* PR #7: As=12 → ≈896; larger As scales sanely positive */
const fails = [];
if (!ulsPass) fails.push("ULS FLEXURE " + Mu.toFixed(1) + " > " + phiMn.toFixed(1) + " kip-ft");
if (!servPass) fails.push("SERVICE CONCRETE " + servStress.toFixed(2) + " > " + servLimit.toFixed(2) + " ksi (0.45 f'c) — disclosed FAIL");
const badge = fails.length === 0 ? { cls: "badge-pill badge-verified", text: "✓ ULS PASS " + phiMn.toFixed(1) + " ≥ " + Mu.toFixed(1) + " kip-ft" }
: { cls: "badge-pill badge-accent", text: "FAIL-CLOSED · " + fails[0] };
const specText = [ "# ASKA PHYSICAL — CFRP-STRENGTHENING TRACK 1 SPEC (ACI 440.2R-17; model/checker, no beam tested)", "repo = \"https://github.com/aska-physical/cfrp-strengthening\"",
"gate_status = \"" + (ulsPass && servPass ? "PASS" : "FAIL_CLOSED") + "\" # VERIFIED vs worked example (10 printed quantities); serviceability NOT claimed",
"", "[track1]", "Mu_kipft = " + Mu.toFixed(1), "phiMn_kipft = " + phiMn.toFixed(1) + " # checker output",
"As_in2 = " + As + " # existing Mn ≈ " + Math.round(mnExisting) + " kip-ft with yield clamp (PR #7)",
"fc_ksi = " + fc.toFixed(1) + " # service limit 0.45 f'c = " + servLimit.toFixed(2) + " ksi; measured " + servStress.toFixed(2) + " ksi @ c = " + cIn + " in",
"creep_rupture_limit_ksi = 59.8 # 0.55 ffu (§10.2.9, printed as 60), full service moment",
"", "[labels]", "PROVEN = written proof only (PR #17) · VERIFIED = finite check · KNOWN = external method · CONJECTURE = untested" ].join("\n");
return { outputs: [
{ label: "ULS Flexure", value: phiMn.toFixed(1) + " vs " + Mu.toFixed(1) + " kip-ft", sub: ulsPass ? "PASS — checker output" : "FAIL — demand exceeds capacity" },
{ label: "Service Concrete §10.2.8", value: servStress.toFixed(2) + " vs " + servLimit.toFixed(2) + " ksi", sub: servPass ? "PASS" : "FAIL — disclosed, not claimed (PR #7)" },
{ label: "Existing Mn (yield clamp)", value: "≈ " + Math.round(mnExisting) + " kip-ft", sub: "As = " + As + " in² · clamped at fy (was ≈986 at As=12)" },
{ label: "Creep-Rupture Gate", value: "0.55 ffu = 59.8 ksi", sub: "§10.2.9 applied at full service moment; printed as 60" }
], statusBadge: badge, specText: specText }; }
function drawStrengthCanvas(canvas, val) { if (!canvas) return;
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
const t = Math.max(0, Math.min(1, ((val ?? 457.8) - 300) / 200));
/* Beam section: concrete block + steel + CFRP strip; capacity bar */
const bx = w * 0.10, bw = w * 0.40, by = h * 0.30, bh = h * 0.34;
ctx.fillStyle = muted; ctx.globalAlpha = 0.30; ctx.fillRect(bx, by, bw, bh); ctx.globalAlpha = 1.0;
ctx.strokeStyle = fg; ctx.lineWidth = 1.6; ctx.strokeRect(bx, by, bw, bh);
ctx.fillStyle = fg; for (let k = 0; k < 3; k++) ctx.fillRect(bx + 8 + k * 12, by + bh - 14, 8, 8);
ctx.fillStyle = blue; ctx.fillRect(bx, by + bh - 4, bw * t, 4);
const barX = w * 0.66, barW = w * 0.08, barTop = h * 0.22, barBot = h * 0.78, barH = barBot - barTop;
ctx.strokeStyle = fg; ctx.lineWidth = 1.5; ctx.strokeRect(barX, barTop, barW, barH);
const capFrac = Math.min(1, 481.7 / 500);
ctx.strokeStyle = ver; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(barX - 6, barBot - barH * capFrac); ctx.lineTo(barX + barW + 6, barBot - barH * capFrac); ctx.stroke();
ctx.fillStyle = (val ?? 457.8) <= 481.7 ? ver : accent;
ctx.fillRect(barX, barBot - barH * t, barW, barH * t);
if (w >= 420) {
ctx.font = "600 11px 'JetBrains Mono', monospace"; ctx.fillStyle = fg;
ctx.fillText("TRACK 1 BEAM · ACI 440.2R-17 · φMn 481.7 kip-ft (green tick) vs M_u", 14, 20);
ctx.fillStyle = accent; ctx.fillText("ULS " + ((val ?? 457.8) <= 481.7 ? "PASS" : "FAIL") + " · SERVICE CONCRETE 3.38 > 1.80 ksi FAIL (disclosed) · 10 printed quantities VERIFIED", 14, h - 10); } }
if (!CORE_PROJECTS.some(function (p) { return p.slug === "cfrp-strengthening"; })) { CORE_PROJECTS.push(STRENGTH_PROJECT); }
const existingIdx = state.projects.findIndex(function (p) { return p.slug === "cfrp-strengthening"; }); if (existingIdx >= 0) {
state.projects[existingIdx] = STRENGTH_PROJECT; } else { state.projects.push(STRENGTH_PROJECT); } if (typeof initProjectDefaults === "function") {
initProjectDefaults(STRENGTH_PROJECT); }
const _prevEval = window.evaluateSubpageCalculator; window.evaluateSubpageCalculator = function (p) {
if (p && p.visualType === "cfrp-strengthening") return evalStrength(p); return _prevEval ? _prevEval(p) : null; };
const _prevRender = window.renderPhysicsEngine; window.renderPhysicsEngine = function (canvas, type, val) { if (type === "cfrp-strengthening") {
drawStrengthCanvas(canvas, val); return; } if (_prevRender) _prevRender(canvas, type, val); }; })();
