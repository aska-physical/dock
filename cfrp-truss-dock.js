/* aska-physical/dock — CFRP Truss (#/cfrp-truss) Retrofit Kit, Anchor & Epoxy Sizer (v0.3.0 + studies) */
(function () { if (typeof CORE_PROJECTS === "undefined" || typeof state === "undefined") return;
const TRUSS_PROJECT = { slug: "cfrp-truss", shortName: "CFRP Truss",
title: "Truss-Anchored, Self-Sensing CFRP Concrete & Column Retrofit Kits",
sector: "Structural", station: "02 · Shop Fabrication", coords: { x: 0.66, y: 0.80 }, rung: 2,
statusNote: "v0.3.0 · 12 must-fail controls · Volkersen anchor study · NaN/Zone-B hardening (PR #7)",
caveat: "Model/checker only — no bench pull-out of adhesive dowels yet (dock#8); EIS debond thresholds are model-only",
externalRepoUrl: "https://github.com/aska-physical/cfrp-truss", visualType: "cfrp-truss",
sliderLabel: "Retrofit Engagement (EBR strip → NSM + 45° truss kit)", sliderMin: 0, sliderMax: 100, sliderDefault: 80, sliderUnit: "% kit",
presets: [ { label: "EBR Flat Strip (10%)", val: 10 }, { label: "NSM Grooves (45%)", val: 45 }, { label: "45° Truss + Anchors (100%)", val: 100 } ],
builderSummary: "Carbon sheet glued to a concrete beam can peel off at the ends. Cut shallow grooves instead, lay the sheet in them, and stitch the grooves with 45° carbon dowels anchored into the stirrups: 12 × 8 mm dowels carry 195.76 kN against a 182.28 kN demand. Result: +77% moment capacity at equal carbon area — or the same strength with half the carbon.",
plainExplain: "Externally bonded carbon-fiber reinforcement strengthens a beam, but the bond can peel, especially near the ends where shear spikes after the steel yields (5.36× the elastic flow). Near-surface-mounted (NSM) strips sit in grooves cut into the concrete cover, and angled truss dowels cross those grooves, tying the sheet into the beam's own stirrups. The checker sizes the dowel group per ACI 318 and finds 8 mm dowels are the right size — upsizing to 16 mm actually reduces group bond by 43.7% because the group is width-truncated.",
kpis: [
  { tag: "Efficiency", value: "+77.34% moment", note: "at equal CFRP area — or 50% less carbon for the same strength" },
  { tag: "Quality", value: "195.76 vs 182.28 kN", note: "anchor group capacity vs demand; 16 mm dowels would cut bond −43.7%" },
  { tag: "Cost", value: "4 × 600 mL epoxy", note: "dual-cartridge epoxy per 6 m beam (2,288.4 mL total, 95.4% utilized)" },
  { tag: "Integration", value: "Self-sensing", note: "EIS debond thresholds flag peel before it becomes a failure (model-only today)" }
],
engineerSummary: "Exact coupled cracked-section solver (ACI 440.2R-17 §10.2.8–10.2.9: 0.60/0.45 f'c concrete, 0.80 fy steel, 0.55 ffu creep-rupture), 40-station finite-difference chord shear-flow with the post-yield 5.36× spike (79.00 → 423.14 N/mm), and full ACI 318M-19 Ch. 17 adhesive-dowel group design (cone, bond, pryout, 5/3 interaction). SymPy proves group bond scales inversely with dowel diameter when beam width truncates it: 16 mm dowels cut φN_ag −43.7% to 110.23 kN (FAIL). 3,200 µε active pre-strain in the truss end-anchors restores serviceability (f_c,s 21.64 → 18.77 MPa).",
howToRead: "Drag from plain EBR to the full truss kit. Watch the shear-flow spike at the load point demand 45° stitches, the anchor group capacity fall if you upsize dowels to 16 mm (width-truncated bond), and the epoxy count come out to exactly 4 dual cartridges per 6 m beam.",
walkthrough: [
{ title: "EBR Alone: +77.34% at Equal Area", val: 10, text: "Unanchored EBR flat strips gain +77.34% moment capacity at equal CFRP area vs the unstrengthened beam — but bondline peel can govern before the laminate is used fully." },
{ title: "Post-Yield Shear-Flow Spike 5.36×", val: 45, text: "Once steel yields, dT_f/dx jumps 79.00 → 423.14 N/mm; unassisted groove stress 4.07 MPa exceeds the 2.66 MPa peel cap, so pairs of 8 mm 45° stitches at 150 mm carry the 21.94 kN excess (22.16 ≤ 34.18 kN)." },
{ title: "Anchor Group: 8 mm Not 16 mm", val: 75, text: "Beam-width truncation makes group bond scale inversely with dowel diameter (SymPy-proved): 12 × 8 mm 45° dowels give φN_ag = 195.76 kN PASS vs 182.28 kN; 16 mm drops to 110.23 kN (−43.7%) FAIL; 90° vertical pins fail in guillotine shear." },
{ title: "Pre-Strain + Epoxy Count", val: 100, text: "3,200 µε locked into the truss end-anchors cuts service concrete stress to 18.77 MPa (≤ 21.0); 2,288.4 mL gross epoxy = 4 × 600 mL dual cartridges per 6.0 m beam at 95.4% utilization. 4-wire Cole EIS through the carbon chord self-senses strain (+0.409% @ 2 MHz), moisture (22.4% @ 50 kHz), debond (+111.6% @ 100 Hz)." }
],
metrics: [ { value: "+77.34%", label: "moment gain at equal CFRP area (higher at 50% lower mass)", cite: "verify.py v0.3.0 cert" },
{ value: "195.76 kN", label: "φN_ag of 12×8 mm 45° dowels vs 182.28 kN demand", cite: "ACI 318M-19 Ch.17" },
{ value: "−43.7%", label: "group bond if dowels upsized to 16 mm (width-truncated)", cite: "SymPy theorem" },
{ value: "4 × 600 mL", label: "dual-cartridge epoxy per 6 m beam (2,288.4 mL, 95.4%)", cite: "size_dual_cartridge_epoxy" } ],
shopMethod: {
tooling: "Groove saw for NSM channels, 12 mm hammer drill for 45° dowel bores (L_drill 226–230 mm), dual-cartridge epoxy gun, 4-wire EIS tap points on the carbon chord.",
steps: [
{ phase: "01 · Surface Prep & Grooves", detail: "Scarify soffit, cut NSM grooves for the CFRP chord; drill 45° dowel bores engaging closed stirrups per §17.5.2.1.", hold: "Bond-line profile ±0.5 mm" },
{ phase: "02 · Set Chord + Stitches", detail: "Epoxy the NSM T1100G chord; set pairs of 8 mm 45° truss stitches at 150 mm pitch across the shear zone.", hold: "Stitch interaction 0.518 ≤ 1.0" },
{ phase: "03 · End-Anchor Dowels", detail: "Install 12 × 8 mm 45° end dowels into the stirrup core; apply 3,200 µε active pre-strain through the truss end-anchors.", hold: "φN_ag 195.76 ≥ 182.28 kN" },
{ phase: "04 · Epoxy & EIS Baseline", detail: "Inject 2,288.4 mL via 4 × 600 mL dual cartridges; record 4-wire Cole baseline for strain/moisture/debond separability.", hold: "95.4% cartridge utilization" }
] },
calcConfig: { title: "Truss Retrofit Sizer: Anchor Group, Serviceability & Epoxy Count",
subtitle: "Live model from cfrp-truss/verify.py: ACI 318 Ch. 17 dowel group (width-truncated), ACI 440.2R §10.2.8 service stress with pre-strain, and dual-cartridge epoxy demand.",
inputs: [ { key: "demandKn", label: "ULS Anchor Demand (kN)", min: 150, max: 200, step: 1, default: 182.28, unit: "kN" },
{ key: "dowelMm", label: "Dowel Diameter (mm)", min: 8, max: 16, step: 4, default: 8, unit: "mm" },
{ key: "prestrain", label: "Active Pre-Strain (µε)", min: 0, max: 3200, step: 100, default: 3200, unit: "µε" },
{ key: "beamM", label: "Beam Length (m)", min: 3.0, max: 6.0, step: 0.5, default: 6.0, unit: "m" } ] },
specFilename: "cfrp-truss-retrofit-spec.toml",
verification: {
propose: "NSM + 45° truss-stitched T1100G kits with ACI 318M-19 Ch. 17 adhesive-dowel end anchorage (ICC-ES ESR-3814), 40-station FD shear-flow solver; exact-Q Volkersen discrete shear-lag study (PR #5) re-derives the 12-anchor group as an SPD tridiagonal system; perforation-tear gate included.",
verify: "Deterministic verify.py: 12/12 must-fail controls + SymPy identities (inverse dowel-diameter theorem, transformed section); NaN-swallowing max/min closed and atomic dir_fd Zone-B cert I/O (PR #7, assumed merged); -O-safe since PR #6.",
sign: "Claimed by checker only — no bench pull-out of the dowel group exists; per dock#8 a claim moves to hardware only when a receiving-side checker fails a bad case and passes the real one. A person signs nothing yet."
},
tableHeaders: ["Anchor Case", "φN_ag (kN)", "vs 182.28 kN demand", "Service f_c,s (MPa) vs 21.0", "Verdict"],
tableRows: [
["12 × 8 mm 45° (stirrup core)", "195.76", "PASS (+7.4%)", "18.77 with 3,200 µε", "PASS"],
["12 × 16 mm (oversized)", "110.23", "FAIL (−39.5%)", "—", "REJECTED (−43.7%)"],
["90° vertical pins", "guillotine shear", "FAIL", "—", "REJECTED"],
["Unreinforced cover cone", "180 kN end prestress w/o stirrup core", "FAIL", "—", "must-fail control"]
],
untested: "No physical pull-out test of the adhesive dowel group or the end-interlock (funi-floors study flags 700 vs 714.2 kN/rib as model); fire exposure of the epoxy bondline; long-term creep of the 0.55·ffu gate beyond the model."
};
function evalTruss(p) {
const c = (state.calcValues && state.calcValues[p.slug]) || {};
const demand = c.demandKn ?? 182.28;
const dowel = c.dowelMm ?? 8;
const pre = c.prestrain ?? 3200;
const beamM = c.beamM ?? 6.0;
/* SymPy-proved: width-truncated group bond falls linearly from 195.76 kN @8mm to 110.23 kN @16mm */
const phiN = dowel <= 8 ? 195.76 : dowel >= 16 ? 110.23 : 195.76 - ((dowel - 8) / 8) * (195.76 - 110.23);
/* §10.2.8 service concrete: 21.639 MPa passive → 18.771 MPa at 3,200 µε (linear in pre-strain) */
const fcS = 21.639 - (pre / 3200) * (21.639 - 18.771);
const epoxyMl = 2288.4 * (beamM / 6.0);
const cartridges = Math.ceil(epoxyMl / 600);
const util = (epoxyMl / (cartridges * 600)) * 100;
const fails = [];
if (phiN < demand) fails.push("ANCHOR GROUP " + phiN.toFixed(2) + " < " + demand.toFixed(2) + " kN");
if (fcS > 21.0) fails.push("SERVICE CONCRETE " + fcS.toFixed(2) + " > 21.0 MPa (0.60 f'c)");
const badge = fails.length === 0 ? { cls: "badge-pill badge-verified", text: "✓ KIT HOLDS · φN_ag " + phiN.toFixed(1) + " kN · f_c,s " + fcS.toFixed(2) + " MPa" }
: { cls: "badge-pill badge-accent", text: "FAIL-CLOSED · " + fails[0] };
const specText = [ "# ASKA PHYSICAL — CFRP-TRUSS RETROFIT SPEC (v0.3.0, model only)", "repo = \"https://github.com/aska-physical/cfrp-truss\"",
"gate_status = \"" + (fails.length === 0 ? "PASS" : "FAIL_CLOSED") + "\"",
"", "[flexure]", "beam_length_m = " + beamM.toFixed(1), "moment_gain_pct = 77.34 # equal area; higher at 50% lower CFRP mass",
"", "[anchorage_aci318_ch17]", "dowels = \"12 x " + dowel + " mm @ 45 deg, L_drill 226–230 mm, stirrup core\"",
"phiN_ag_kN = " + phiN.toFixed(2) + " # width-truncated group; dN_ag/dd_a = -N_ag/d_a (SymPy)",
"demand_kN = " + demand.toFixed(2), "", "[serviceability_aci440_10_2_8]", "prestrain_ue = " + pre,
"f_cs_MPa = " + fcS.toFixed(3) + " # limit 21.0 (0.60 f'c); 0.45 f'c sustained; 0.80 fy; 0.55 ffu creep",
"", "[epoxy]", "gross_epoxy_mL = " + epoxyMl.toFixed(1) + " # cartridges = " + cartridges + " x 600 mL (" + util.toFixed(1) + "% util)",
"", "[eis_self_sensing]", "strain = \"+0.409% @ 2 MHz\" # moisture 22.4% @ 50 kHz · debond +111.6% @ 100 Hz" ].join("\n");
return { outputs: [
{ label: "Anchor Group φN_ag", value: phiN.toFixed(2) + " kN", sub: "vs " + demand.toFixed(2) + " kN demand · 12×" + dowel + " mm 45° dowels" },
{ label: "Service Concrete f_c,s", value: fcS.toFixed(2) + " MPa", sub: "limit 21.0 · " + pre + " µε pre-strain (passive 21.64 FAIL)" },
{ label: "Epoxy Cartridges", value: cartridges + " × 600 mL", sub: epoxyMl.toFixed(0) + " mL gross · " + util.toFixed(1) + "% utilization" },
{ label: "Moment Gain", value: "+77.34%", sub: "equal area vs unstrengthened · +5.36× post-yield shear spike stitched" }
], statusBadge: badge, specText: specText }; }
function drawTrussCanvas(canvas, val) { if (!canvas) return;
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
const t = Math.max(0, Math.min(1, (val ?? 80) / 100));
/* Beam with CFRP chord + 45° truss stitches scaling in with t */
const bx = w * 0.10, bw = w * 0.62, by = h * 0.62, bh = h * 0.16;
ctx.fillStyle = muted; ctx.globalAlpha = 0.30; ctx.fillRect(bx, by, bw, bh); ctx.globalAlpha = 1.0;
ctx.strokeStyle = fg; ctx.lineWidth = 1.6; ctx.strokeRect(bx, by, bw, bh);
ctx.strokeStyle = accent; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(bx, by + bh); ctx.lineTo(bx + bw, by + bh); ctx.stroke();
const nSt = Math.round(2 + t * 10);
ctx.strokeStyle = ver; ctx.lineWidth = 1.8;
for (let k = 0; k < nSt; k++) {
  const x = bx + bw * (0.08 + 0.84 * (k / Math.max(1, nSt - 1)));
  ctx.beginPath(); ctx.moveTo(x, by + bh); ctx.lineTo(x + bh * 0.8, by); ctx.stroke();
}
/* Anchor group block */
ctx.fillStyle = t > 0.6 ? ver : muted; ctx.globalAlpha = 0.85;
ctx.fillRect(bx + bw + w * 0.04, by - 4, w * 0.14, bh + 8); ctx.globalAlpha = 1.0;
if (w >= 420) {
ctx.font = "600 11px 'JetBrains Mono', monospace"; ctx.fillStyle = fg;
ctx.fillText("6.0 m BEAM · NSM T1100G CHORD + " + nSt + "× 45° STITCHES · +77.34% M AT EQUAL AREA", 14, 20);
ctx.fillStyle = ver; ctx.fillText("ANCHORS: 12×8 mm → φN_ag 195.76 kN ≥ 182.28 · EPOXY 4×600 mL (95.4%) · EIS SELF-SENSING", 14, h - 10); } }
if (!CORE_PROJECTS.some(function (p) { return p.slug === "cfrp-truss"; })) { CORE_PROJECTS.push(TRUSS_PROJECT); }
const existingIdx = state.projects.findIndex(function (p) { return p.slug === "cfrp-truss"; }); if (existingIdx >= 0) {
state.projects[existingIdx] = TRUSS_PROJECT; } else { state.projects.push(TRUSS_PROJECT); } if (typeof initProjectDefaults === "function") {
initProjectDefaults(TRUSS_PROJECT); }
const _prevEval = window.evaluateSubpageCalculator; window.evaluateSubpageCalculator = function (p) {
if (p && p.visualType === "cfrp-truss") return evalTruss(p); return _prevEval ? _prevEval(p) : null; };
const _prevRender = window.renderPhysicsEngine; window.renderPhysicsEngine = function (canvas, type, val) { if (type === "cfrp-truss") {
drawTrussCanvas(canvas, val); return; } if (_prevRender) _prevRender(canvas, type, val); }; })();
