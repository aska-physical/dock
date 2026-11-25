/* aska-physical/dock — Venturi Collars (#/venturi-collars) Battery-Free Aeroelastic Harvester Sizer (v0.1.0 + studies) */
(function () { if (typeof CORE_PROJECTS === "undefined" || typeof state === "undefined") return;
const VENTURI_PROJECT = { slug: "venturi-collars", shortName: "Venturi Collars",
title: "Battery-Free Aeroelastic Venturi Collars for HVAC & Industrial Ducts",
sector: "HVAC & Energy", station: "01 · Duct & Airflow", coords: { x: 0.22, y: 0.32 }, rung: 2,
statusNote: "v0.1.0 · 5 must-fail controls · exact-Q cascaded-choke study · -O-safe verify",
caveat: "Model/checker only — no bench measurement attached; pure-PVDF harvest is a verified NEGATIVE finding (dock#8: model, not measured)",
externalRepoUrl: "https://github.com/aska-physical/venturi-collars", visualType: "venturi",
sliderLabel: "Duct Airspeed (VAV turndown → nominal)", sliderMin: 1.8, sliderMax: 4.0, sliderDefault: 4.0, sliderUnit: " m/s",
presets: [ { label: "Turndown (1.8 m/s)", val: 1.8 }, { label: "Mid (2.5 m/s)", val: 2.5 }, { label: "Nominal (4.0 m/s)", val: 4.0 } ],
builderSummary: "A drop-in sheet-metal collar accelerates 1.8 m/s VAV turndown flow to 2.81 m/s at the β = 0.64 Venturi throat—past the 2.23 m/s flutter cut-in—so six flush M55J carbon reeds with a 0.35 g NdFeB tip and a flush printed PCB stator coil harvest 0.104–0.924 mW with zero bearings, at just 0.33–1.62 Pa pressure loss.",
engineerSummary: "Coupled hydraulic + electromechanical model: gradual β = 0.64 throat + 7° diffuser recovers > 85% of dynamic head (1.615 Pa total at 4.0 m/s, > 30× below a sharp baffle, inside the ASHRAE < 15 Pa VAV budget); bearing-free M55J reed + PCB-coil transduction boosts harvested DC power 19.4× over pure PVDF (which makes only 0.0476 mW — verified negative finding, must-fail #2).",
howToRead: "Drag duct airspeed from 1.8 to 4.0 m/s. Watch the throat speed cross the 2.23 m/s flutter cut-in, harvested power climb 0.104 → 0.924 mW (11.55× margin over an 80 µW BLE/LoRa node at nominal), and pressure loss stay at 1.62 Pa.",
walkthrough: [
{ title: "The PVDF Negative Finding", val: 20, text: "A pure thin-film PVDF-TrFE bimorph in a 200 mm duct makes only 0.0476 mW at 4.0 m/s — sub-100 µm lever arms give < 0.03% RMS strain and k31² ≈ 0.02. Verified by must-fail #2: it cannot run an 80–150 µW node." },
{ title: "Venturi Throat Past Cut-In", val: 45, text: "β = 0.64 throat accelerates 1.8 m/s turndown to 2.81 m/s, above the 2.23 m/s flutter cut-in where a straight duct harvests 0.00 mW (must-fail #3)." },
{ title: "Bearing-Free Hybrid 19.4×", val: 75, text: "A 0.35 g NdFeB tip shim on each fatigue-immune M55J reed oscillating past a flush 4-layer PCB stator coil boosts power to 0.924 mW at 4.0 m/s — zero bearings to clog with HVAC dust." },
{ title: "Pressure Budget & Batteries", val: 100, text: "7° conical diffuser recovers > 85% of dynamic head: 1.615 Pa total at nominal 4.0 m/s vs > 50 Pa for a sharp baffle. ~500 lithium battery replacements avoided per 100 VAV zones over 20 years." }
],
metrics: [ { value: "0.924 mW", label: "hybrid harvest at 4.0 m/s — 11.55× the 80 µW node", cite: "verify.py velocity sweep" },
{ value: "0.0476 mW", label: "pure PVDF at 4.0 m/s — VERIFIED NEGATIVE finding", cite: "must-fail #2" },
{ value: "1.62 Pa", label: "total pressure loss at 4.0 m/s (>30× < sharp baffle; ASHRAE <15 Pa)", cite: "K_venturi model" },
{ value: "~500", label: "battery replacements avoided per 100 VAV zones over 20 yr", cite: "README.md" } ],
shopMethod: {
tooling: "Sheet-metal brake + roll for the β = 0.64 collar, 3 kW fiber laser for M55J reed blanks, 4-layer PCB stator coil printer, NdFeB tip shims, silicone seal for duct joints.",
steps: [
{ phase: "01 · Roll & Laser Collar + Reeds", detail: "Roll 0.5 mm galvanized/composite collar with gradual β = 0.64 throat and 7° diffuser; laser-cut 6 flush M55J carbon-ply reeds (35 µm core).", hold: "Throat diameter ±0.2 mm" },
{ phase: "02 · Print Stator Coil", detail: "Print flush 4-layer PCB coil into the outer collar wall, aligned to reed tip path; no bearings anywhere in the flow.", hold: "Coil-to-tip gap 0.5 mm" },
{ phase: "03 · Tip Shim & Balance", detail: "Bond 0.35 g NdFeB shim to each reed tip; balance reed so flutter cut-in is 2.23 m/s at the throat.", hold: "Cut-in 2.23 ± 0.05 m/s" },
{ phase: "04 · Duct Install & Telemetry", detail: "Clamp collar into the VAV branch; wire rectified DC to the 80–150 µW CO₂/pressure BLE/LoRa node.", hold: "Node boots on harvested power" }
] },
calcConfig: { title: "Venturi Harvest & Pressure-Loss Sizer (200 mm VAV branch)",
subtitle: "Live model from venturi-collars/verify.py sweep table: throat speed, harvested mW vs node draw, and ΔP vs the ASHRAE 15 Pa VAV budget.",
inputs: [ { key: "ductU", label: "Duct Airspeed U (m/s)", min: 1.8, max: 4.0, step: 0.1, default: 4.0, unit: "m/s" },
{ key: "nodeUw", label: "Node Power Draw (µW)", min: 80, max: 150, step: 5, default: 80, unit: "µW" },
{ key: "ductMm", label: "Duct Diameter (mm)", min: 150, max: 600, step: 50, default: 200, unit: "mm" },
{ key: "zones", label: "VAV Zones Served", min: 10, max: 200, step: 10, default: 100, unit: "zones" } ] },
specFilename: "venturi-collar-harvest-spec.toml",
verification: {
propose: "Coupled hydraulic + electromechanical equations swept over 1.8–6.0 m/s; exact-Q study (PR #5) certifies K-stage cascaded load splitting (moment ÷ K³, thrust ÷ K), a contractive choke converging to ≈ 0.5216 vs 521× positive-feedback runaway, and cycle-space Kirchhoff solves showing tree/ring collar manifolds carry zero convective power when blocked.",
verify: "Deterministic verify.py with 5 must-fail controls, -O-safe after PR #3 (bare asserts → CheckFailure; NaN clamp and Zone-B canonical cert I/O closed). Pure-PVDF 0.0476 mW is a must-fail control, not a claim.",
sign: "Claimed by model only — no bench measurement exists; a person signs nothing yet. Harvested-power vs flutter-speed needs a duct rig before any product claim (dock#8: a model number stays a model number)."
},
tableHeaders: ["Duct U (m/s)", "Throat U (m/s)", "ΔP (Pa)", "Pure PVDF (mW)", "Hybrid M55J+PCB (mW)", "Node margin vs 80 µW"],
tableRows: [
["1.8 (turndown)", "2.81", "0.33", "0.003", "0.104", "1.30×"],
["2.5", "3.91", "0.63", "0.011", "0.365", "4.56×"],
["4.0 (nominal)", "6.25", "1.62", "0.028 (0.0476 cell)", "0.924", "11.55×"],
["Straight duct 1.8", "1.80 < 2.23 cut-in", "—", "0.00", "0.00", "0× — must-fail #3"]
],
untested: "No bench measurement of harvested power vs flutter speed on a real duct rig; dust loading on the PCB stator coils over years; reed fatigue beyond the model; the cascaded-choke contraction is study-only (not yet a verify.py control)."
};
/* Sweep table pinned in venturi-collars README: (U, throat, dP, hybrid mW) */
const VENT_SWEEP = [ [1.8, 2.81, 0.33, 0.104], [2.5, 3.91, 0.63, 0.365], [4.0, 6.25, 1.62, 0.924] ];
function ventPoint(u) {
  if (u <= VENT_SWEEP[0][0]) return VENT_SWEEP[0];
  for (let i = 1; i < VENT_SWEEP.length; i++) {
    if (u <= VENT_SWEEP[i][0]) {
      const a = VENT_SWEEP[i - 1], b = VENT_SWEEP[i], t = (u - a[0]) / (b[0] - a[0]);
      return [u, a[1] + t * (b[1] - a[1]), a[2] + t * (b[2] - a[2]), a[3] + t * (b[3] - a[3])];
    }
  }
  return VENT_SWEEP[VENT_SWEEP.length - 1];
}
function evalVenturi(p) {
const c = (state.calcValues && state.calcValues[p.slug]) || {};
const U = c.ductU ?? 4.0;
const nodeUw = c.nodeUw ?? 80;
const zones = c.zones ?? 100;
const pt = ventPoint(U);
const throat = pt[1], dP = pt[2], mw = pt[3];
const margin = (mw * 1000) / nodeUw;
const cutIn = throat >= 2.23;
const fails = [];
if (!cutIn) fails.push("THROAT " + throat.toFixed(2) + " m/s < 2.23 m/s FLUTTER CUT-IN — 0.00 mW");
if (mw * 1000 < nodeUw) fails.push("HARVEST " + (mw * 1000).toFixed(0) + " µW < " + nodeUw + " µW NODE DRAW");
if (dP > 15) fails.push("PRESSURE LOSS " + dP.toFixed(2) + " Pa > 15 Pa ASHRAE VAV BUDGET");
const badge = fails.length === 0 ? { cls: "badge-pill badge-verified", text: "✓ HARVESTS " + (mw * 1000).toFixed(0) + " µW · " + margin.toFixed(2) + "× NODE MARGIN · ΔP " + dP.toFixed(2) + " Pa" }
: { cls: "badge-pill badge-accent", text: "FAIL-CLOSED · " + fails[0] };
const specText = [ "# ASKA PHYSICAL — VENTURI-COLLAR HARVEST SPEC (v0.1.0, model only)", "repo = \"https://github.com/aska-physical/venturi-collars\"",
"gate_status = \"" + (fails.length === 0 ? "PASS" : "FAIL_CLOSED") + "\" # model/checker — no bench measurement",
"", "[duct]", "duct_diameter_mm = " + (c.ductMm ?? 200), "duct_airspeed_m_s = " + U.toFixed(1),
"venturi_throat_beta = 0.64 # throat speed = " + throat.toFixed(2) + " m/s (flutter cut-in 2.23 m/s)",
"diffuser_deg = 7 # recovers > 85% of dynamic head", "",
"[harvest]", "pressure_loss_Pa = " + dP.toFixed(2) + " # ASHRAE VAV budget < 15 Pa",
"hybrid_M55J_PCB_coil_mW = " + mw.toFixed(3) + " # 19.4x over pure PVDF (0.0476 mW negative finding, must-fail #2)",
"node_draw_uW = " + nodeUw + " # margin = " + margin.toFixed(2) + "x",
"batteries_avoided_20yr = " + Math.round(zones * 5) + " # ~500 per 100 VAV zones" ].join("\n");
return { outputs: [
{ label: "Throat Speed vs Cut-In", value: throat.toFixed(2) + " m/s", sub: cutIn ? "Above 2.23 m/s flutter cut-in" : "BELOW cut-in — 0.00 mW" },
{ label: "Harvested Power & Margin", value: (mw * 1000).toFixed(0) + " µW · " + margin.toFixed(2) + "×", sub: "vs " + nodeUw + " µW node · 19.4× over pure PVDF" },
{ label: "Pressure Loss", value: dP.toFixed(2) + " Pa", sub: ">30× below a sharp baffle (>50 Pa) · budget < 15 Pa" },
{ label: "Batteries Avoided", value: "~" + Math.round(zones * 5) + " / 20 yr", sub: zones + " VAV zones · zero bearings to clog" }
], statusBadge: badge, specText: specText }; }
function drawVenturiCanvas(canvas, val) { if (!canvas) return;
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
const t = Math.max(0, Math.min(1, ((val ?? 4.0) - 1.8) / (4.0 - 1.8)));
const cy = h * 0.52, x0 = w * 0.08, x1 = w * 0.92;
/* Duct with venturi throat: walls pinch at throat. */
const wall = (x) => { const u = (x - x0) / (x1 - x0); const pinch = Math.exp(-Math.pow((u - 0.45) / 0.16, 2)); return cy - (h * 0.30) * (1 - 0.62 * pinch); };
ctx.strokeStyle = muted; ctx.lineWidth = 2; ctx.beginPath();
for (let x = x0; x <= x1; x += 6) { const y = wall(x); if (x === x0) ctx.moveTo(x, y); else ctx.lineTo(x, y); }
for (let x = x1; x >= x0; x -= 6) ctx.lineTo(x, 2 * cy - wall(x));
ctx.closePath(); ctx.stroke();
/* Reeds at throat fluttering with amplitude ∝ t */
const rx = x0 + (x1 - x0) * 0.45;
for (let k = 0; k < 6; k++) {
  const ry = cy - h * 0.19 + k * (h * 0.38 / 5);
  const amp = 2 + t * 10;
  ctx.strokeStyle = k % 2 ? blue : ver; ctx.lineWidth = 1.6; ctx.beginPath();
  ctx.moveTo(rx, ry); ctx.quadraticCurveTo(rx + 14, ry - amp * Math.sin(k + t * 6), rx + 30, ry); ctx.stroke();
  ctx.fillStyle = accent; ctx.fillRect(rx + 28, ry - 2.5, 5, 5);
}
/* Power bar */
const pt = ventPoint(val ?? 4.0);
const barX = w * 0.86, barW = w * 0.05, barTop = h * 0.20, barBot = h * 0.80, barH = barBot - barTop;
const mw = pt[3];
ctx.strokeStyle = fg; ctx.lineWidth = 1.5; ctx.strokeRect(barX, barTop, barW, barH);
ctx.fillStyle = mw * 1000 >= 80 ? ver : accent; ctx.fillRect(barX, barBot - barH * Math.min(1, mw / 1.0), barW, barH * Math.min(1, mw / 1.0));
if (w >= 420) {
ctx.font = "600 11px 'JetBrains Mono', monospace"; ctx.fillStyle = fg;
ctx.fillText("200 mm VAV · β=0.64 THROAT " + pt[1].toFixed(2) + " m/s · CUT-IN 2.23 m/s", 14, 20);
ctx.fillStyle = mw * 1000 >= 80 ? ver : accent;
ctx.fillText("HYBRID " + (mw * 1000).toFixed(0) + " µW · ΔP " + pt[2].toFixed(2) + " Pa · PVDF 0.0476 mW (NEGATIVE)", 14, h - 10); } }
if (!CORE_PROJECTS.some(function (p) { return p.slug === "venturi-collars"; })) { CORE_PROJECTS.push(VENTURI_PROJECT); }
const existingIdx = state.projects.findIndex(function (p) { return p.slug === "venturi-collars"; }); if (existingIdx >= 0) {
state.projects[existingIdx] = VENTURI_PROJECT; } else { state.projects.push(VENTURI_PROJECT); } if (typeof initProjectDefaults === "function") {
initProjectDefaults(VENTURI_PROJECT); }
const _prevEval = window.evaluateSubpageCalculator; window.evaluateSubpageCalculator = function (p) {
if (p && p.visualType === "venturi") return evalVenturi(p); return _prevEval ? _prevEval(p) : null; };
const _prevRender = window.renderPhysicsEngine; window.renderPhysicsEngine = function (canvas, type, val) { if (type === "venturi") {
drawVenturiCanvas(canvas, val); return; } if (_prevRender) _prevRender(canvas, type, val); }; })();
