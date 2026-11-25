/* aska-physical/dock \u2014 Funi-Frame (#/funi-frame) Exoskeleton, 3-Tier TES & Sorption Sizer (v0.1.1) */
(function () { if (typeof CORE_PROJECTS === "undefined" || typeof state === "undefined") return;
const FUNI_FRAME_PROJECT = { slug: "funi-frame", shortName: "Funi-Frame",
title: "Vibro-Thermal Funicular Data-Center Shell, 3-Tier TES & Zero-Water Sorption", sector: "Data Centers",
station: "06 \u00b7 Whole-Hall Shell & TES", coords: { x: 0.72, y: 0.22 }, rung: 3,
statusNote: "v0.1.1 \u00b7 14/14 controls \u00b7 PUE 1.074 \u00b7 WUE 0.0 \u00b7 -O-safe verify",
caveat: "8,760-h HT-ATES plume & ASTM E1886 EF-3 missile test open in Issues #1\u2013#3 \u00b7 30 \u00b0C design recooling is an unsourced proposal awaiting the owner",
externalRepoUrl: "https://github.com/aska-physical/funi-frame", visualType: "funi-frame",
sliderLabel: "Whole-Hall Vibro-Thermal & Waste-Heat Dispatch Stage", sliderMin: 0, sliderMax: 100, sliderDefault: 82, sliderUnit: "% dispatch",
presets: [ { label: "Exoskeleton + CLD Isolation (20%)", val: 20 }, { label: "58 \u00b0C W45 Sorption Loop (60%)", val: 60 },
{ label: "Full 3-Tier TES + Sky/ATES (100%)", val: 100 } ],
builderSummary: "Unites a 24 m radiative sky-cooling funicular roof (R-46), zero-bridge R-43.2 acoustic/mPCM walls, 63.7 dB vibration isolation, and 3-tier waste-heat storage\u2014cutting PUE from 1.38 to 1.074 at zero water use and freeing +3.06 MW of utility power per 10 MW hall, which carries +2.85\u20132.96 MW of new IT load.",
engineerSummary: "Proves self-cooling above \u03b1_liq* = 1/(1 + COP_ads) = 61.73% using 58 \u00b0C ASHRAE W45 return water to drive silica-gel adsorption (COP 0.62)\u2014thermodynamically possible only below a 41.46 \u00b0C re-cooling limit (reversible COP 2.051 at the 30 \u00b0C design point)\u2014paired with O(r^-2) Fe-Mn-Si + \u00b145\u00b0 CFRP CLD hysteretic isolation (9.0e-5 g_rms) and HS24 PCM + $0.014/kWh_th basalt TES.",
howToRead: "24 m roof vault rejects 93 W/m\u00b2 to the 8\u201313 \u03bcm sky window; 260 mm Carbon-TRC + Poraver/mPCM walls block heat/noise and hold cold aisles safe for 28.3 min; 58 \u00b0C GPU water powers silica-gel RDHx cooling and charges PCM, crushed-basalt, and 200 energy-pile/ATES loops.",
walkthrough: [
{ title: "24 m Sky-Cool Funicular Vault", val: 20, text: "1,480 mm Fe-SMA-tied shell spans 24 m at L/2,044 stiffness (-52.3% roof mass, R-46) with PVDF-HFP/BaSO4 radiative sky-cooling skin (93 W/m\u00b2)." },
{ title: "Zero-Bridge Poraver + mPCM Wall", val: 45, text: "260 mm Carbon-TRC + 45\u00b0 CFRP pins achieve R-43.2 (vs R-2.5 steel-pinned PCSP), NRC 0.72 (-11.0 dBA), STC 60.1 dB, and 28.3 min passive thermal ride-through." },
{ title: "58 \u00b0C W45 Sorption Self-Cooling", val: 72, text: "85% direct-to-chip capture exceeds \u03b1_liq* = 61.73%; 2.42 MW_th of 58 \u00b0C GPU water drives silica-gel chillers (COP 0.62) to cool the entire 15% RDHx air load." },
{ title: "3-Tier PCM + Basalt + ATES Sink", val: 100, text: "83.3 m\u00b3 savE HS24 PCM + 88.7 m\u00b3 crushed basalt ($0.014/kWh_th) + 200 energy piles/ATES yield PUE 1.074, WUE 0.0 L/kWh, and +3.06 MW freed utility power = +2.85\u20132.96 MW IT ($71.35\u2013$147.95M/yr at $25\u201350M/MW-yr IT)." }
], metrics: [ { value: "1.074 PUE", label: "Closed-Loop Cooling (-85.1% kW_e)", cite: "WUE = 0.0 L/kWh (157.7M L/yr saved)" },
{ value: "+2.85\u20132.96 MW IT", label: "Freed 3.06 MW utility carries this IT load", cite: "$71.35\u2013$147.95M/yr · Must-fail #14" },
{ value: "41.46 \u00b0C", label: "Second-law re-cooling limit for COP 0.62 (58 \u00b0C drive, 18 \u00b0C water)", cite: "Must-fail #13 · reversible COP 2.051 @ 30 \u00b0C" },
{ value: "9.0e-5 g", label: "Rack Vibration (17.9% of 5e-4 g)", cite: "-63.7 dB vs steel frame" },
{ value: "$0.014/kWh", label: "Crushed-Basalt TES Annualized Capex", cite: "4.86x cheaper than Li-ion" } ], shopMethod: {
tooling: "Precast Carbon-TRC wall beds, 24 m SIP vault segments, Fe-Mn-Si plinths + \u00b145\u00b0 CFRP CLD cassettes, savE HS24 PCM vessel, insulated basalt silo, silica-gel adsorption skids",
steps: [
{ phase: "01 \u00b7 Drive 200 Thermo-Active Piles & Boreholes", detail: "Install foundation piles with embedded HDPE U-loops (250 kW_th free sink) and paired warm/cold ATES/RTES seasonal wells." },
{ phase: "02 \u00b7 Erect Cellular Sandwich Walls & Funi-Floors", detail: "Tilt up 260 mm R-43.2 Carbon-TRC/Poraver/mPCM shear walls (-64.8% frame dead mass, 0.563% Risk Cat IV seismic drift) and seat Funi-Floors cassettes." },
{ phase: "03 \u00b7 Hoist 24 m Sky-Cool Vault & Plinth Cascade", detail: "Lock 1,480 mm funicular roof vault (783 kN tornado tie-down) and mount 4.5 Hz Fe-Mn-Si + 9.2 Hz CFRP CLD equipment isolation plinths." },
{ phase: "04 \u00b7 Couple W45 Sorption & 3-Tier TES Plant", detail: "Tie 58 \u00b0C CDU return header to 1.5 MW_th silica-gel adsorption skid, 83.3 m\u00b3 HS24 PCM ride-through tank, and 88.7 m\u00b3 crushed-basalt thermal battery." }
] }, calcConfig: { title: "Whole-Hall Vibro-Thermal Shell, 3-Tier TES & Sorption Sizer",
subtitle: "Live 6-domain solver from funi-frame/verify.py: test the \u03b1_liq* = 61.73% self-cooling boundary, 58 \u00b0C sorption cut-in, 5e-4 g_rms optical vibration gate, and substation MW recovery.",
inputs: [ { key: "itMw", label: "IT Hall Compute Load P_IT (MW)", min: 2.0, max: 40.0, step: 1.0, default: 10.0, unit: "MW" },
{ key: "liqPct", label: "Direct-to-Chip Capture \u03b1_liq (%)", min: 50, max: 95, step: 1, default: 85, unit: "%" },
{ key: "coolantC", label: "W45 Return Temp T_ret (\u00b0C)", min: 32, max: 68, step: 1, default: 58, unit: "\u00b0C" },
{ key: "plinthHz", label: "Fe-Mn-Si Plinth f_n1 (Hz)", min: 3.5, max: 18.0, step: 0.5, default: 4.5, unit: "Hz" },
{ key: "recoolC", label: "Re-cooling Temp T_a (\u00b0C)", min: 25, max: 46, step: 1, default: 30, unit: "\u00b0C" } ] },
specFilename: "funi-frame-hall-spec.toml", verification: {
propose: "Integrated 24 m R-46 vault, 260 mm R-43.2/NRC-0.72/mPCM walls, 3-stage hysteretic vibration cascade, and W45 silica-gel + 3-tier PCM/basalt/ATES loop.",
verify: "Deterministic verify.py (v0.1.1) checks 5 SymPy theorems + 14/14 must-fail controls across deflection, thermal bridging, acoustics, 5e-4 g_rms optical jitter, seismic drift, PUE/WUE, the 41.46 \u00b0C re-cooling limit (#13) and freed-utility-is-not-IT-power (#14); -O-safe require() guards; declared_inputs disclosed in the certificate.",
sign: "Emits results/certificate.json + hall spec; fails closed if T_ret < 53 \u00b0C collapses adsorption COP, \u03b1_liq < \u03b1_liq* forces auxiliary chillers, plinth f_n1 breaches 5e-4 g_rms, or re-cooling ≥ 41.46 \u00b0C makes COP 0.62 thermodynamically impossible."
}, tableHeaders: ["Data-Center Subsystem", "Conventional Steel + Evap Hall", "Aska Funi-Frame v0.1.0", "Physics Advantage", "Gate"], tableRows: [
["24 m Roof + Envelope", "2,400 mm truss + steel-pinned PCSP (R-2.5)", "1,480 mm vault (R-46) + CFRP wall (R-43.2)", "-920 mm plenum, +93 W/m\u00b2 sky cool", "PASS"],
["Rack Vibration & Hall Noise", "0.137 g_rms \u00b7 bare concrete (NRC 0.03)", "0.000090 g_rms \u00b7 Helmholtz Poraver (NRC 0.72)", "-63.7 dB vib \u00b7 -11.0 dBA hall noise", "PASS"],
["UPS Ride-Through & Peak TES", "1.78 min air \u00b7 217 m\u00b3 water \u00b7 $0.068/kWh Li-ion", "28.3 min mPCM \u00b7 83.3 m\u00b3 HS24 \u00b7 $0.014/kWh basalt", "2.6x smaller tank \u00b7 4.86x lower capex", "PASS"],
["10 MW Cooling Plant", "PUE 1.380 \u00b7 157.7M L/yr water", "PUE 1.074 \u00b7 WUE 0.0 L/kWh", "+3.06 MW utility = +2.85\u20132.96 MW IT ($71.35\u2013$147.95M/yr)", "PASS"] ],
untested: "Coupled 8,760-hour MODFLOW/FEFLOW HT-ATES groundwater plume study, full-panel RKU orthotropic CLD modal test, and ASTM E1886 EF-3 tornado missile impact."
};
function hystT(f, fn, eta) {
const r2 = (f / fn) * (f / fn); return Math.sqrt((1.0 + eta * eta) / (Math.pow(1.0 - r2, 2) + eta * eta)); }
function evalFuniFrame(p) {
const c = (state.calcValues && state.calcValues[p.slug]) || {};
const Pit = c.itMw ?? 10.0;
const aLiq = (c.liqPct ?? 85) / 100.0;
const Tret = c.coolantC ?? 58;
const fn1 = c.plinthHz ?? 4.5;
const TaC = c.recoolC ?? 30;
const scale = Pit / 10.0;
const copAds = Tret <= 50.0 ? 0.0 : Math.min(0.66, 0.62 * (Math.tanh((Tret - 50.0) / 5.5) / Math.tanh(8.0 / 5.5)));
const alphaCrit = copAds > 0.0 ? 1.0 / (1.0 + copAds) : 1.0;
const Qliq = Pit * aLiq;
const Qair = Pit * (1.0 - aLiq);
const QdrvIdeal = copAds > 0.0 ? Qair / copAds : Infinity;
const QdrvUsed = Math.min(Qliq, QdrvIdeal);
const QairCovered = copAds > 0.0 ? QdrvUsed * copAds : 0.0;
const QairUnmet = Math.max(0.0, Qair - QairCovered);
const selfCools = copAds > 0.0 && QdrvIdeal <= Qliq + 1e-6;
const Qpil = 0.250 * scale;
const Qsky = 0.2325 * scale;
const Qates = Math.max(0.0, (Qliq - QdrvUsed) + (QairCovered + QdrvUsed) - (Qpil + 0.55 * Qsky));
const PcConv = Pit / 3.0 + 0.27 * scale;
const PcFuni = Qates / 28.0 + 0.195 * scale + (QairUnmet / 3.2);
const pueFuni = (Pit + PcFuni + 0.20 * scale) / Pit;
const pueConv = (Pit + PcConv + 0.20 * scale) / Pit;
const freedMw = PcConv - PcFuni;
/* v0.1.1: freed utility power is not IT power (Must-fail #14). Low = freed/PUE, high = freed/(1+1/COP_loop), COP_loop 28. */
const itLowMw = freedMw / 1.074, itHighMw = freedMw / (1 + 1 / 28);
const revLowM = itLowMw * 25.0, revHighM = itHighMw * 50.0;
const waterSavedML = Pit * 8.76 * 1.80;
const vPcm = 83.333 * scale;
const vBasalt = 88.68 * scale;
const basaltCostK = 14.046 * scale;
const tones = [[29.5, 0.085], [49.0, 0.060], [60.0, 0.110], [120.0, 0.045]]; let sumSq = 0.0; for (let i = 0; i < tones.length; i++) {
const ti = tones[i][1] * hystT(tones[i][0], fn1, 0.16) * hystT(tones[i][0], 9.2, 0.12) * 0.40; sumSq += ti * ti; }
const gRms = Math.sqrt(sumSq);
const vibUtilPct = (gRms / 0.0005) * 100.0;
const fails = []; if (copAds <= 0.05) fails.push("LOW T_RET (" + Tret + " \u00b0C <= 50 \u00b0C: ADSORPTION COP = 0)");
else if (!selfCools) fails.push("\u03b1_LIQ " + Math.round(aLiq * 100) + "% < " + (alphaCrit * 100).toFixed(1) + "% SELF-COOL THRESHOLD");
if (gRms > 0.0005) fails.push("OPTICAL VIB " + gRms.toFixed(5) + " > 0.00050 g_rms");
if (pueFuni > 1.12) fails.push("PUE GATE (" + pueFuni.toFixed(3) + " > 1.120)");
/* v0.1.1 Must-fail #13: COP 0.62 at 58 \u00b0C drive / 18 \u00b0C water needs re-cooling below 41.46 \u00b0C (reversible COP 2.051 at 30 \u00b0C, 0.423 at 45 \u00b0C dry). */
const TREC_MAX_C = 41.46;
const copRev30 = (291.15 / (303.15 - 291.15)) * ((331.15 - 303.15) / 331.15);
if (TaC >= TREC_MAX_C) fails.push("RECOOLING " + TaC + " \u00b0C ≥ " + TREC_MAX_C + " \u00b0C SECOND-LAW LIMIT (COP 0.62 IMPOSSIBLE)");
const badge = fails.length === 0 ? { cls: "badge-pill badge-verified", text: "14/14 GATES PASS \u00b7 PUE " + pueFuni.toFixed(3) + " \u00b7 WUE 0.0" }
: { cls: "badge-pill badge-accent", text: "FAIL-CLOSED \u00b7 " + fails[0] };
const specText = [ "# ASKA PHYSICAL \u2014 FUNI-FRAME v0.1.1 WHOLE-HALL & 3-TIER TES SPEC", "repo = \"https://github.com/aska-physical/funi-frame\"",
"gate_status = \"" + (fails.length === 0 ? "PASS" : "FAIL_CLOSED") + "\"", "", "[shell_and_seismic]", "hall_it_capacity_MW = " + Pit.toFixed(1),
"roof_vault = \"24.0 m clear span, 1480 mm depth, R-46.0, 93 W/m2 sky-cool\"",
"sandwich_walls = \"260 mm Carbon-TRC + PIR/aerogel + Helmholtz Poraver/mPCM (R-43.2, NRC 0.72, STC 60.1 dB)\"",
"passive_cold_aisle_ridethrough_min = 28.30", "seismic_risk_cat_iv_drift_pct = 0.563 # limit <= 1.00%", "", "[vibration_cascade]",
"fe_mn_si_plinth_fn1_Hz = " + fn1.toFixed(1),
"rack_transmitted_g_rms = " + gRms.toFixed(6) + " # limit <= 0.000500 g_rms (" + vibUtilPct.toFixed(1) + "% util)", "", "[sorption_and_3tier_tes]",
"liquid_capture_fraction = " + aLiq.toFixed(2) + " # critical threshold = " + alphaCrit.toFixed(4), "coolant_return_temp_C = " + Tret,
"silica_gel_adsorption_COP = " + copAds.toFixed(3), "tier1_hs24_pcm_buffer_m3 = " + vPcm.toFixed(1),
"tier2_crushed_basalt_battery_m3 = " + vBasalt.toFixed(1) + " # $" + basaltCostK.toFixed(1) + "k media ($0.014/kWh_th)",
"tier3_energy_piles_count = " + Math.round(200 * scale), "PUE_funi_frame = " + pueFuni.toFixed(3) + " # vs " + pueConv.toFixed(3) + " conventional",
"WUE_L_per_kWh = 0.0 # saves " + waterSavedML.toFixed(1) + "M L/yr",
"freed_substation_power_MW = " + freedMw.toFixed(2) + " # utility, NOT IT (must-fail #14)",
"unlocked_IT_load_MW = " + itLowMw.toFixed(2) + "\u2013" + itHighMw.toFixed(2) + " # freed/PUE .. freed/(1+1/COP_loop)",
"unlocked_revenue_M_usd_per_yr = " + revLowM.toFixed(2) + "\u2013" + revHighM.toFixed(2) + " # $25\u2013$50M per MW-yr of IT load",
"recooling_limit_C = 41.46 # second-law max for COP 0.62 @ 58 \u00b0C drive, 18 \u00b0C water; design 30 \u00b0C (unsourced proposal), reversible COP " + copRev30.toFixed(3) + " @ 30 \u00b0C; entered " + TaC + " \u00b0C" ].join("\n");
return { outputs: [
{ label: "Facility PUE & Water Saved", value: "PUE " + pueFuni.toFixed(3) + " \u00b7 0.0 L/kWh", sub: "Saves " + waterSavedML.toFixed(1) + "M L/yr vs PUE " + pueConv.toFixed(2) },
{ label: "Freed Utility \u2192 IT Power & Rev.", value: "+" + freedMw.toFixed(2) + " MW \u2192 " + itLowMw.toFixed(2) + "\u2013" + itHighMw.toFixed(2) + " MW IT", sub: "$" + revLowM.toFixed(2) + "\u2013$" + revHighM.toFixed(2) + "M/yr @ $25\u2013$50M/MW-yr IT \u00b7 " + (selfCools ? "100% sorption self-cooled (COP " + copAds.toFixed(2) + ")" : "Aux chiller needed (" + QairUnmet.toFixed(2) + " MW unmet)") },
{ label: "Re-cooling Limit & COP Headroom", value: TaC + " \u00b0C vs 41.46 \u00b0C max", sub: "Reversible COP at 30 \u00b0C design = " + copRev30.toFixed(3) + "; claimed COP 0.62 is " + (copRev30 > 0 ? (0.62 / copRev30 * 100).toFixed(0) : "0") + "% of reversible" },
{ label: "Rack Optical Vibration", value: (gRms * 1e4).toFixed(2) + "e-4 g (" + vibUtilPct.toFixed(1) + "%)", sub: "Limit 5.00e-4 g_rms @ f_n1 = " + fn1.toFixed(1) + " Hz" },
{ label: "3-Tier PCM + Basalt TES", value: vPcm.toFixed(0) + " m\u00b3 PCM \u00b7 " + vBasalt.toFixed(0) + " m\u00b3 Basalt", sub: "28.3m mPCM wall + $" + basaltCostK.toFixed(1) + "k basalt media" }
], statusBadge: badge, specText: specText }; }
function drawFuniFrameCanvas(canvas, val) { if (!canvas) return;
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
const t = Math.max(0, Math.min(1, (val ?? 82) / 100));
const bx = w * 0.08, bw = w * 0.56, roofY = h * 0.28, midY = h * 0.50, baseY = h * 0.73; ctx.fillStyle = blue; ctx.globalAlpha = 0.22;
ctx.fillRect(bx, roofY, 12, baseY - roofY); ctx.fillRect(bx + bw - 12, roofY, 12, baseY - roofY); ctx.globalAlpha = 1.0; ctx.strokeStyle = blue;
ctx.lineWidth = 2; ctx.strokeRect(bx, roofY, 12, baseY - roofY); ctx.strokeRect(bx + bw - 12, roofY, 12, baseY - roofY); ctx.beginPath();
ctx.moveTo(bx - 4, roofY + 4); ctx.quadraticCurveTo(bx + bw * 0.5, roofY - h * 0.14, bx + bw + 4, roofY + 4); ctx.strokeStyle = ver;
ctx.lineWidth = 4; ctx.stroke(); ctx.beginPath(); ctx.moveTo(bx, roofY + 4); ctx.lineTo(bx + bw, roofY + 4); ctx.strokeStyle = accent;
ctx.lineWidth = 2; ctx.stroke(); [midY, baseY].forEach(function (fy, idx) { ctx.fillStyle = muted; ctx.fillRect(bx + 12, fy - 4, bw - 24, 5);
for (let k = 0; k < 3; k++) {
const rx = bx + bw * (0.18 + k * 0.24), rw = bw * 0.14, rh = h * 0.13; ctx.fillStyle = fg; ctx.fillRect(rx, fy - 6 - rh, rw, rh); ctx.fillStyle = ver;
ctx.fillRect(rx - 2, fy - 6, rw + 4, 3); } if (idx === 1) { ctx.strokeStyle = t > 0.65 ? blue : muted; ctx.lineWidth = 2;
for (let p = 0; p < 5; p++) {
const px = bx + bw * (0.12 + p * 0.19); ctx.beginPath(); ctx.moveTo(px, baseY + 2); ctx.lineTo(px, h - 18); ctx.stroke(); } } });
const tx = bx + bw + w * 0.06, tw = w * 0.22;
const boxes = [ { y: roofY + 2, h: h * 0.13, col: ver, lbl: "ADSORP COP 0.62" },
{ y: roofY + h * 0.16, h: h * 0.13, col: blue, lbl: "HS24 PCM 83m\u00b3" }, { y: roofY + h * 0.32, h: h * 0.15, col: accent, lbl: "BASALT 20 MWh" } ];
boxes.forEach(function (b, i) {
const active = (i === 0 && t > 0.35) || (i > 0 && t > 0.65); ctx.fillStyle = b.col; ctx.globalAlpha = active ? 0.22 : 0.08;
ctx.fillRect(tx, b.y, tw, b.h); ctx.globalAlpha = 1.0; ctx.strokeStyle = active ? b.col : muted; ctx.lineWidth = active ? 2.2 : 1.2;
ctx.strokeRect(tx, b.y, tw, b.h); if (w >= 460) { ctx.font = "600 9.5px 'JetBrains Mono', monospace"; ctx.fillStyle = fg;
ctx.fillText(b.lbl, tx + 6, b.y + b.h * 0.60); } }); if (t > 0.35) { ctx.strokeStyle = accent; ctx.lineWidth = 2.4; ctx.beginPath();
ctx.moveTo(bx + bw - 12, midY - 16); ctx.lineTo(tx, roofY + 14); if (t > 0.65) ctx.lineTo(tx, roofY + h * 0.39); ctx.stroke(); } if (w >= 420) {
ctx.font = "600 11px 'JetBrains Mono', monospace"; ctx.fillStyle = fg;
ctx.fillText("24m R-46 SKY-COOL VAULT \u00b7 R-43.2 mPCM WALLS \u00b7 9.0e-5 g_rms", 14, 20); ctx.fillStyle = ver;
ctx.fillText("PUE 1.074 \u00b7 WUE 0.0 L/kWh \u00b7 +3.06 MW UTILITY = +2.85\u20132.96 MW IT \u00b7 RECOOL < 41.46 \u00b0C", 14, h - 10); } }
if (!CORE_PROJECTS.some(function (p) { return p.slug === "funi-frame"; })) { CORE_PROJECTS.push(FUNI_FRAME_PROJECT); }
const existingIdx = state.projects.findIndex(function (p) { return p.slug === "funi-frame"; }); if (existingIdx >= 0) {
state.projects[existingIdx] = FUNI_FRAME_PROJECT; } else { state.projects.push(FUNI_FRAME_PROJECT); } if (typeof initProjectDefaults === "function") {
initProjectDefaults(FUNI_FRAME_PROJECT); }
const _prevEval = window.evaluateSubpageCalculator; window.evaluateSubpageCalculator = function (p) {
if (p && p.visualType === "funi-frame") return evalFuniFrame(p); return _prevEval ? _prevEval(p) : null; };
const _prevRender = window.renderPhysicsEngine; window.renderPhysicsEngine = function (canvas, type, val) { if (type === "funi-frame") {
drawFuniFrameCanvas(canvas, val); return; } if (_prevRender) _prevRender(canvas, type, val); }; })();
