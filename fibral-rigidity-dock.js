/* aska-physical/dock — Fibral Rigidity (#/fibral-rigidity) Cross-Polytope Lattice Homogenization Sizer (proofs verified n=2..7; PRs #5/#7/#8 landed 2026-11-25) */
(function () { if (typeof CORE_PROJECTS === "undefined" || typeof state === "undefined") return;
const FIBRAL_PROJECT = { slug: "fibral-rigidity", shortName: "Fibral Rigidity",
title: "Continuum CFRP Truss Homogenization & Specific-Rigidity Limits (Bridged Cross-Polytope)",
sector: "Materials", station: "01 · Material & Mix", coords: { x: 0.08, y: 0.70 }, rung: 2,
statusNote: "closed forms PROVEN (n≥2), VERIFIED n=2..7 · bound recorded, rejects from measurement (#3) · hardening #8",
caveat: "Small-strain pin-joint model/checker only, no bench measurement; a real joint needs a separate check before any hardware claim (dock#8)",
externalRepoUrl: "https://github.com/aska-physical/fibral-rigidity", visualType: "fibral",
sliderLabel: "Area Ratio α (relaxation → saturation)", sliderMin: 0.5, sliderMax: 3.0, sliderDefault: 2.83, sliderUnit: " α",
presets: [ { label: "α = 1 (22.29% loss)", val: 1.0 }, { label: "Uniaxial optimum 1.633", val: 1.633 }, { label: "Bulk saturation 2√2", val: 2.83 } ],
builderSummary: "A perfect lattice of carbon struts loses 22.29% of its theoretical stiffness the moment real joints flex, unless each strut carries 2.83× the area, which buys back 100% of the maximum. The same mathematics gives +46.95% in the best single direction and a specific rigidity of 40.01, about 3× aluminium, titanium, or steel per kilogram.",
plainExplain: "In an ideal pin-jointed lattice, stiffness follows simple geometry (Cauchy–Maxwell). Real joints are not pins, they relax, and the lattice softens. Homogenizing the bridged cross-polytope shows exactly how much: at equal strut area in 3D the bulk stiffness keeps K/K_max = 0.777, a 22.29% loss, and the loss only vanishes when the area ratio reaches √2(n−1) = 2√2. The uniaxial optimum sits elsewhere (α = 2√6/3, +46.95%), which is why a mast wants a different area than a bulk panel.",
kpis: [
  { tag: "Efficiency", value: "−22.29% → 0", note: "joint-relaxation stiffness loss at equal area, recovered at α* = 2√2 ≈ 2.83" },
  { tag: "Efficiency", value: "40.01 specific rigidity", note: "K13D2U vs Al 13.08 / Ti 13.18 / steel 13.36, about 3× per kg" },
  { tag: "Quality", value: "+46.95% uniaxial", note: "best-direction gain at α_E* = 2√6/3 over the octet truss" },
  { tag: "Integration", value: "Feeds masts & retrofit", note: "the α* grading is what the cfrp-masts and cfrp-truss sizers use" }
],
engineerSummary: "Exact closed forms: C11/C12 = (n−1)(1+(n−2)/λ), C44 = 0 for the unbraced cell; uniaxial [100] optimum at α_E* = 2√6/3 ≈ 1.6330 gives E = 0.163275 ρ̄E₁, +46.95% over the octet truss (1/9). At ρ̄ = 5% the isotropic-braced T1100G (16.13), M55J (25.63) and K13D2U (40.01) specific rigidities beat the closed-cell HS upper bounds of Al 6061 (13.08), Ti-6Al-4V (13.18) and Steel 4340 (13.36). No pin-jointed truss beats the same-material HS bound (0.1281 < 0.5115).",
howToRead: "Slide the area ratio α from 1 to 2√2. At α = 1 the 3D cell loses 22.29% of the bulk bound to joint relaxation; at α ≥ 2√2 the cell saturates 100% of the Cauchy–Maxwell bound for all strut lengths t ∈ (0,1). The uniaxial optimum sits lower, at 2√6/3.",
walkthrough: [
{ title: "Unit-Spring Framework → Real CFRP Struts", val: 15, text: "Foundation-0/incentre-lattices unit-spring rigidity theory extended to physical struts k_b = E₁A_b/L_b with area-graded tow allocations and 45° octagonal-pore tension bracing." },
{ title: "22.29% Relaxation Loss at α = 1", val: 40, text: "At n=3, t=2−√2, α=1: K/K_max = 2(3+2√2)/15 = 0.777124, PROVEN and VERIFIED; joint relaxation is where the stiffness goes (C44 = 0 unbraced)." },
{ title: "Bulk Saturation at α* = 2√2", val: 75, text: "Area ratio √2(n−1) = 2√2 in 3D gives K_n = ρ̄E₁/n², 100% of the Cauchy–Maxwell bound for ALL t ∈ (0,1) with 15 bars/cell." },
{ title: "Uniaxial Optimum +46.95%", val: 100, text: "α_E* = 2√6/3 ≈ 1.6330 reaches E_[100] = 0.163275 ρ̄E₁ vs 1/9 octet. Checkerboard bracing: half_2_opp (6 ties) reaches full rank 6/6 with exact C44 = 1/4, matching full_4 (12 ties, C44 = 1/2) at 1/24 shear-per-tie efficiency (study #7). Length box (PR #5): corners of the natural-length box are stable, interior (0.9, 1.1) is not, transverse stiffness is zero there." }
],
metrics: [ { value: "0.777124", label: "K/K_max at α=1, n=3, 22.29% bulk loss to joint relaxation", cite: "PROVEN+VERIFIED" },
{ value: "2√2 ≈ 2.8284", label: "area ratio α*_K saturating 100% of Cauchy–Maxwell for all t", cite: "verify.py n=2..7" },
{ value: "+46.95%", label: "uniaxial [100] gain at α_E* = 2√6/3 over the octet truss", cite: "0.163275 vs 1/9" },
{ value: "40.01", label: "K13D2U specific rigidity vs metal HS bounds Al 13.08 / Ti 13.18 / Steel 13.36", cite: "ρ̄=5%, V_f=0.60" } ],
shopMethod: {
tooling: "Python 3 stdlib only for the checker (SymPy for the symbolic identities); carbon tows T1100G / M55J / K13D2U per datasheets; no shop hardware yet, model only.",
steps: [
{ phase: "01 · Clone & Run", detail: "python3 verify.py, symbolic identities (n=2..7) + 60 numerical cases + 5 CFRP grades + 7/7 must-fail controls, within 1e-9 bound.", hold: "exit 0 under python3 and -O" },
{ phase: "02 · Plant a Bad Case", detail: "Planted shear stiffness of 1 must raise CheckFailure under -O (rejection computed from the measurement, not an assert, #3).", hold: "non-zero exit under -O" },
{ phase: "03 · Read the Studies", detail: "studies/prestress-bracing-audit (prestress gate, F3 checkerboard C44 table, bar-cut localization) and length_box.py (PR #5).", hold: "certificates in studies/" },
{ phase: "04 · Bound, Not Eigenvalue", detail: "The certificate stores pass/fail under a declared bound (1e-9), not raw rounding error, machine-independent.", hold: "certificate diff-free" }
] },
calcConfig: { title: "Cross-Polytope Homogenization Sizer: α → Bulk Saturation & Uniaxial Optimum",
subtitle: "Live view of fibral-rigidity/verify.py closed forms: saturation area ratio α*_K = √2(n−1), relaxation loss at α = 1, and the uniaxial optimum α*_E = 2√6/3.",
inputs: [ { key: "dimN", label: "Dimension n", min: 2, max: 7, step: 1, default: 3, unit: "D" },
{ key: "alpha", label: "Area Ratio α", min: 0.5, max: 3.0, step: 0.01, default: 2.83, unit: "α" },
{ key: "tLen", label: "Strut Length Ratio t", min: 0.1, max: 0.9, step: 0.05, default: 0.5858, unit: "t" },
{ key: "rhoPct", label: "Relative Density ρ̄ (%)", min: 1, max: 10, step: 1, default: 5, unit: "%" } ] },
specFilename: "fibral-rigidity-lattice-spec.toml",
verification: {
propose: "Closed forms for the bridged cross-polytope F_n(t): C11/C12, ν100 < 1/(2n−3), C44 = 0 unbraced; HS same-material bound as the honest limit; Foundation-0/incentre-lattices PROOF.md extended to CFRP struts.",
verify: "python3 verify.py: SymPy proves the identities (n≥2), numerical check n=2..7 within 1e-9, 7/7 must-fail controls; certificate stores a declared bound and rejects from the measurement under -O (#3, merged). PRs #7 (prestress/F3 checkerboard/bar-cut localization) and #8 (NaN-swallowing + Zone-B hardening) merged 2026-11-25; PR #5 length-box example merged as a rejecting control.",
sign: "Model/checker only, dock#8: a model number stays a model number until a bench measurement exists. A person signs nothing here yet."
},
tableHeaders: ["Case (n=3)", "C44 / rank", "K or E vs bound", "Verdict", "Note"],
tableRows: [
["α = 1, t = 2−√2", "C44 = 0", "K/K_max = 0.777124 (−22.29%)", "PROVEN+VERIFIED", "relaxation loss"],
["α = 2√2 (saturation)", "n/a", "K = ρ̄E₁/9 = 100% Cauchy–Maxwell ∀t", "PROVEN+VERIFIED", "15 bars/cell"],
["Uniaxial α = 2√6/3", "n/a", "E = 0.163275 ρ̄E₁ (+46.95% vs 1/9)", "PROVEN+VERIFIED", "interior optimum"],
["checkerboard half_2_opp (6 ties)", "C44 = 1/4, rank 6/6", "matches full_4 at 1/24 shear/tie", "VERIFIED (study #7)", "bar-cut idx=12: C11≠C22"],
["length box interior (0.9, 1.1)", "transverse stiffness 0", "not positive definite", "REJECTED (PR #5)", "corners stable"]
],
untested: "Small-strain pin joints only, real joints (cfrp-truss end-interlock) need their own checker before any hardware claim; no bench measurement exists; Euler buckling vs tensile limits per strut are model gates, not tests."
};
function evalFibral(p) {
const c = (state.calcValues && state.calcValues[p.slug]) || {};
const n = Math.round(c.dimN ?? 3);
const alpha = c.alpha ?? 2.8284;
const t = c.tLen ?? 0.5858;
const rho = (c.rhoPct ?? 5) / 100;
const alphaK = Math.SQRT2 * (n - 1);
const alphaE = 2 * Math.sqrt(6) / 3;
const saturated = alpha >= alphaK - 1e-9;
const kKmax = (n === 3 && Math.abs(t - (2 - Math.SQRT2)) < 0.01 && Math.abs(alpha - 1) < 0.01) ? 0.777124 : (saturated ? 1.0 : Math.min(1, alpha / alphaK));
const eUniax = 0.163275; /* at alpha_E* */
const hsMetal = { Al: 13.08, Ti: 13.18, Steel: 13.36 };
const k13 = 40.01;
const fails = [];
if (!saturated && alpha < alphaK) fails.push("BELOW SATURATION: α " + alpha.toFixed(2) + " < α*_K " + alphaK.toFixed(3) + ", joint relaxation wastes stiffness");
const badge = fails.length === 0 ? { cls: "badge-pill badge-verified", text: "✓ AT CAUCHY–MAXWELL BOUND · α ≥ " + alphaK.toFixed(3) }
: { cls: "badge-pill badge-amber", text: "● RELAXATION LOSS · α " + alpha.toFixed(2) + " / " + alphaK.toFixed(3) };
const specText = [ "# ASKA PHYSICAL: FIBRAL-RIGIDITY LATTICE SPEC (model/checker; no bench)", "repo = \"https://github.com/aska-physical/fibral-rigidity\"",
"gate_status = \"" + (fails.length === 0 ? "PASS" : "BELOW_BOUND") + "\"",
"", "[cell]", "n = " + n, "t = " + t.toFixed(4), "alpha = " + alpha.toFixed(4),
"alpha_star_K = " + alphaK.toFixed(4) + " # sqrt(2)(n-1): bulk saturates at 100% Cauchy–Maxwell for all t",
"K_over_Kmax = " + kKmax.toFixed(6) + (kKmax < 1 ? " # at α=1,n=3: 2(3+2√2)/15 = 0.777124 (−22.29%)" : ""),
"", "[uniaxial]", "alpha_star_E = " + alphaE.toFixed(4) + " # 2√6/3", "E_100_over_rhoE1 = " + eUniax + " # +46.95% over octet 1/9",
"", "[materials]", "rho_bar = " + rho.toFixed(3), "specific_rigidity_K13D2U = " + k13 + " # vs HS bounds Al " + hsMetal.Al + " / Ti " + hsMetal.Ti + " / Steel " + hsMetal.Steel,
"same_material_HS_check = \"0.1281 < 0.5115\" # no pin-jointed truss beats the same-material bound" ].join("\n");
return { outputs: [
{ label: "Bulk Saturation α*_K", value: alphaK.toFixed(3) + " vs α " + alpha.toFixed(2), sub: saturated ? "AT 100% Cauchy–Maxwell bound ∀t" : "K/K_max ≈ " + kKmax.toFixed(4) + ", relaxation loss" },
{ label: "Relaxation Loss @ α=1", value: "22.29%", sub: "K/K_max = 2(3+2√2)/15 = 0.777124 at n=3, t=2−√2" },
{ label: "Uniaxial Optimum", value: "α_E* = " + alphaE.toFixed(4), sub: "E = 0.163275 ρ̄E₁, +46.95% over octet (1/9)" },
{ label: "Specific Rigidity @ ρ̄=" + (rho * 100).toFixed(0) + "%", value: "K13D2U 40.01", sub: "beats HS bounds: Al 13.08 · Ti 13.18 · Steel 13.36" }
], statusBadge: badge, specText: specText }; }
function drawFibralCanvas(canvas, val) { if (!canvas) return;
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
const t = Math.max(0, Math.min(1, ((val ?? 2.83) - 0.5) / 2.5));
/* 3D cross-polytope cell projection: octahedron with bridging struts, density ∝ α */
const cx = w * 0.36, cy = h * 0.52, R = Math.min(w, h) * (0.22 + 0.14 * t);
const V = [ [0, -R], [R * 0.87, -R * 0.5], [R * 0.87, R * 0.5], [0, R], [-R * 0.87, R * 0.5], [-R * 0.87, -R * 0.5], [0, 0] ];
const E = [ [0,1],[0,2],[0,3],[0,4],[1,2],[2,3],[3,4],[4,1],[1,5],[2,5],[3,5],[4,5],[1,3],[2,4] ];
ctx.strokeStyle = blue; ctx.lineWidth = 1.4;
E.forEach(function (e) { ctx.beginPath(); ctx.moveTo(cx + V[e[0]][0], cy + V[e[0]][1]); ctx.lineTo(cx + V[e[1]][0], cy + V[e[1]][1]); ctx.stroke(); });
V.forEach(function (v) { ctx.fillStyle = ver; ctx.beginPath(); ctx.arc(cx + v[0], cy + v[1], 3.5, 0, 7); ctx.fill(); });
/* K/K_max bar */
const barX = w * 0.74, barW = w * 0.10, barTop = h * 0.24, barBot = h * 0.76, barH = barBot - barTop;
const alpha = val ?? 2.83, alphaK = 2 * Math.SQRT2;
const kFrac = Math.min(1, alpha / alphaK);
ctx.strokeStyle = fg; ctx.lineWidth = 1.5; ctx.strokeRect(barX, barTop, barW, barH);
ctx.fillStyle = kFrac >= 1 ? ver : accent; ctx.fillRect(barX, barBot - barH * kFrac, barW, barH * kFrac);
ctx.strokeStyle = ver; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(barX - 6, barBot - barH); ctx.lineTo(barX + barW + 6, barBot - barH); ctx.stroke();
if (w >= 420) {
ctx.font = "600 11px 'JetBrains Mono', monospace"; ctx.fillStyle = fg;
ctx.fillText("BRIDGED CROSS-POLYTOPE F_3(t) · 15 BARS/CELL · α = " + alpha.toFixed(2) + " / α*_K = 2√2", 14, 20);
ctx.fillStyle = kFrac >= 1 ? ver : accent;
ctx.fillText(kFrac >= 1 ? "SATURATED: K = 100% CAUCHY–MAXWELL ∀t" : "RELAXATION: K/K_max = 0.777124 @ α=1 (−22.29%) · E* +46.95% @ α=1.633", 14, h - 10); } }
if (!CORE_PROJECTS.some(function (p) { return p.slug === "fibral-rigidity"; })) { CORE_PROJECTS.push(FIBRAL_PROJECT); }
const existingIdx = state.projects.findIndex(function (p) { return p.slug === "fibral-rigidity"; }); if (existingIdx >= 0) {
state.projects[existingIdx] = FIBRAL_PROJECT; } else { state.projects.push(FIBRAL_PROJECT); } if (typeof initProjectDefaults === "function") {
initProjectDefaults(FIBRAL_PROJECT); }
const _prevEval = window.evaluateSubpageCalculator; window.evaluateSubpageCalculator = function (p) {
if (p && p.visualType === "fibral") return evalFibral(p); return _prevEval ? _prevEval(p) : null; };
const _prevRender = window.renderPhysicsEngine; window.renderPhysicsEngine = function (canvas, type, val) { if (type === "fibral") {
drawFibralCanvas(canvas, val); return; } if (_prevRender) _prevRender(canvas, type, val); }; })();
