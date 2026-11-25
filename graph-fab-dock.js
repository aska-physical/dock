/* aska-physical/dock — Graph-Fab (#/graph-fab) Research holding pen (README only, NO checker — dock#8 P6: no claims before verify.py returns a result) */
(function () { if (typeof CORE_PROJECTS === "undefined" || typeof state === "undefined") return;
const GRAPHFAB_PROJECT = { slug: "graph-fab", shortName: "Graph-Fab",
title: "Graphene Materials Research (holding pen — no checker yet)",
sector: "Materials", station: "01 · Material & Mix", coords: { x: 0.10, y: 0.24 }, rung: 1,
statusNote: "README only · no verify.py · no results — dock#8 P6: no repository and no claim before verify.py returns a result",
caveat: "Nothing on this page is a claim. Per dock#8 P6, graphene stays untouched until a checker exists; the org profile's materials figures are not graphene claims",
externalRepoUrl: "https://github.com/aska-physical/graph-fab", visualType: "graph-fab",
sliderLabel: "Research scope exploration (no claims)", sliderMin: 0, sliderMax: 100, sliderDefault: 25, sliderUnit: "% scoped",
presets: [ { label: "Literature scan (25%)", val: 25 }, { label: "Candidate feedstocks (60%)", val: 60 }, { label: "Checker design (100%)", val: 100 } ],
builderSummary: "This page deliberately makes no claims. graph-fab is a holding pen: under the dock#8 plan (P6), graphene research stays unpublished until a re-runnable checker exists and returns a result.",
plainExplain: "Graphene is surrounded by marketing, so the rule on this dock is simple: no public claim before a checker exists. graph-fab holds a README and nothing else, on purpose — when a verify.py appears and returns results, this subpage will carry them with the same propose · verify · sign structure as every other project.",
kpis: [
  { tag: "Quality", value: "0 claims", note: "no verify.py, no results/, no certificate — by policy (dock#8 P6)" }
],
engineerSummary: "The lattice and hardware repos (fibral-rigidity, cfrp-masts, cfrp-truss) carry the carbon-fiber claims with checkers. Graphene stays out of the profile figures until a checker can fail a bad case and pass a real one on the receiving side (dock#8).",
howToRead: "This subpage is a placeholder with an explicit boundary: the slider moves research scope only; there is no calculator output because there is no checker to compute one.",
walkthrough: [
{ title: "Why Empty", val: 25, text: "dock#8 P6: 'Leave graphene alone until a checker exists. No repository and no claim before verify.py returns a result.' The profile states cooling, carbon, stiffness figures as checker outputs — none of those are graphene." },
{ title: "What Would Unlock It", val: 60, text: "A deterministic verify.py + certificate pattern like the sibling repos: declared inputs, must-fail controls that reject planted bad cases under python3 -O, and a bound recorded instead of raw rounding error." },
{ title: "Receiving-Side Rule", val: 85, text: "dock#8: a claim moves from the lattice/proof side to the hardware side only when a checker on the receiving side fails a bad case and passes the real case. A model number stays a model number until a bench measurement exists." },
{ title: "Next Step", val: 100, text: "Design the first checker (candidate: graphene membrane permeation or thermal-interface figure with a published benchmark), one issue before any code change, one PR per change, author does not merge." }
],
metrics: [ { value: "0", label: "claims posted — no checker exists (dock#8 P6)", cite: "README only" },
{ value: "—", label: "no verify.py, no results/, no certificate", cite: "repo tree" },
{ value: "—", label: "no bench measurement", cite: "dock#8" },
{ value: "—", label: "profile figures are checker outputs of other repos", cite: ".github profile" } ],
shopMethod: {
tooling: "None yet — no hardware, no code. When a checker is designed: Python 3 stdlib + SymPy pattern from fibral-rigidity.",
steps: [
{ phase: "01 · Open the Track Issue", detail: "One issue in graph-fab before any code change (dock#8 rule).", hold: "issue exists" },
{ phase: "02 · Draft verify.py", detail: "Deterministic checker with declared inputs and must-fail controls; passes under python3 and -O.", hold: "verify.py exit 0 both modes" },
{ phase: "03 · First Result PR", detail: "One PR with the checker + certificate; author does not merge; a second reviewer looks.", hold: "PR opened, not self-merged" },
{ phase: "04 · Only Then Claims", detail: "Profile/subpage figures may cite graph-fab only after a merged, reviewed result exists.", hold: "merged + reviewed" }
] },
calcConfig: { title: "No checker — nothing to compute",
subtitle: "graph-fab has no verify.py. This panel intentionally reports no numbers: per dock#8 P6 there are no claims before a checker returns a result.",
inputs: [ { key: "scope", label: "Research Scope Explored", min: 0, max: 100, step: 5, default: 25, unit: "%" },
{ key: "candidates", label: "Candidate Feedstocks Noted", min: 0, max: 20, step: 1, default: 0, unit: "n" },
{ key: "controls", label: "Planted Bad Cases Defined", min: 0, max: 10, step: 1, default: 0, unit: "n" },
{ key: "reviews", label: "Independent Reviews", min: 0, max: 5, step: 1, default: 0, unit: "n" } ] },
specFilename: "graph-fab-none.toml",
verification: {
propose: "Nothing proposed. dock#8 P6 holds graphene until a checker exists.",
verify: "No verify.py — no result to verify. The rule: no repository content and no claim before verify.py returns a result.",
sign: "No person has signed anything here, because there is nothing to sign. This subpage exists so the dock lists every org repo honestly, including the empty ones."
},
tableHeaders: ["Item", "Status", "Rule"],
tableRows: [
["verify.py", "absent", "dock#8 P6"],
["results / certificate", "absent", "dock#8 P6"],
["public claims", "none", "no checker → no claim"],
["profile figures", "from other repos' checkers", ".github profile"]
],
untested: "Everything. This repo is a holding pen by policy (dock#8 P6), not by accident."
};
function evalGraphFab(p) {
const c = (state.calcValues && state.calcValues[p.slug]) || {};
const scope = c.scope ?? 25;
const badge = { cls: "badge-pill badge-amber", text: "● NO CHECKER — claims held per dock#8 P6" };
const specText = [ "# ASKA PHYSICAL — GRAPH-FAB (no result claimed)", "repo = \"https://github.com/aska-physical/graph-fab\"",
"gate_status = \"NONE\" # no verify.py exists; per dock#8 P6 nothing is posted before verify.py returns a result",
"claims = [] # holding pen", "scope_explored_pct = " + scope ].join("\n");
return { outputs: [
{ label: "Checker", value: "absent", sub: "no verify.py — no numbers computed" },
{ label: "Claims", value: "0", sub: "held per dock#8 P6 until a checker fails bad cases and passes the real one" },
{ label: "Bench measurements", value: "0", sub: "a model number stays a model number until a bench exists" },
{ label: "Scope explored", value: scope + "%", sub: "literature/feedstock scan only — not a result" }
], statusBadge: badge, specText: specText }; }
function drawGraphFabCanvas(canvas, val) { if (!canvas) return;
const rect = canvas.getBoundingClientRect();
const w = Math.max(260, rect.width || canvas.clientWidth || 640);
const h = Math.max(160, rect.height || canvas.clientHeight || 300);
const dpr = window.devicePixelRatio || 1; if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr); }
const ctx = canvas.getContext("2d"); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
const cs = getComputedStyle(document.documentElement);
const tk = (k, fb) => (cs.getPropertyValue(k) || "").trim() || fb;
const bg = tk("--bg-canvas", "#F1EFE8"), fg = tk("--fg", "#151513"), muted = tk("--fg-muted", "#57554E");
const accent = tk("--accent", "#C24124"), blue = tk("--blueprint", "#1E40AF");
const grid = tk("--grid-line", "rgba(21,21,19,0.06)"); ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h); ctx.strokeStyle = grid; ctx.lineWidth = 1;
for (let x = 24; x < w; x += 28) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
for (let y = 24; y < h; y += 28) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }
const t = Math.max(0, Math.min(1, (val ?? 25) / 100));
/* Hex lattice, drawn faint; claim dots only appear with a checker — none exist */
const cx = w * 0.36, cy = h * 0.52, R = Math.min(w, h) * 0.30;
ctx.strokeStyle = blue; ctx.globalAlpha = 0.25 + 0.3 * t; ctx.lineWidth = 1.2;
for (let ring = 0; ring < 3; ring++) {
  for (let k = 0; k < 6; k++) {
    const a0 = Math.PI / 6 + k * Math.PI / 3, a1 = a0 + Math.PI / 3;
    ctx.beginPath();
    ctx.moveTo(cx + R * ring * 0.55 * Math.cos(a0), cy + R * ring * 0.55 * Math.sin(a0));
    ctx.lineTo(cx + R * ring * 0.55 * Math.cos(a1), cy + R * ring * 0.55 * Math.sin(a1));
    ctx.stroke();
  }
}
ctx.globalAlpha = 1.0;
ctx.strokeStyle = muted; ctx.beginPath(); ctx.arc(cx, cy, R, 0, 7); ctx.stroke();
if (w >= 420) {
ctx.font = "600 11px 'JetBrains Mono', monospace"; ctx.fillStyle = fg;
ctx.fillText("GRAPHENE LATTICE (SCHEMATIC) · NO CHECKER · NO CLAIMS", 14, 20);
ctx.fillStyle = accent;
ctx.fillText("dock#8 P6: no repository content and no claim before verify.py returns a result", 14, h - 10); } }
if (!CORE_PROJECTS.some(function (p) { return p.slug === "graph-fab"; })) { CORE_PROJECTS.push(GRAPHFAB_PROJECT); }
const existingIdx = state.projects.findIndex(function (p) { return p.slug === "graph-fab"; }); if (existingIdx >= 0) {
state.projects[existingIdx] = GRAPHFAB_PROJECT; } else { state.projects.push(GRAPHFAB_PROJECT); } if (typeof initProjectDefaults === "function") {
initProjectDefaults(GRAPHFAB_PROJECT); }
const _prevEval = window.evaluateSubpageCalculator; window.evaluateSubpageCalculator = function (p) {
if (p && p.visualType === "graph-fab") return evalGraphFab(p); return _prevEval ? _prevEval(p) : null; };
const _prevRender = window.renderPhysicsEngine; window.renderPhysicsEngine = function (canvas, type, val) { if (type === "graph-fab") {
drawGraphFabCanvas(canvas, val); return; } if (_prevRender) _prevRender(canvas, type, val); }; })();
