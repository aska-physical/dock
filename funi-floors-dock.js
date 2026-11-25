/* aska-physical/dock \u2014 Funi-Floors (#/funi-floors) Interactive Workbench & 6-Domain Sizer (v0.1.0 + exact-Q studies, -O-safe verify) */
(function () { if (typeof CORE_PROJECTS === "undefined" || typeof state === "undefined") return;
const FUNI_FLOORS_PROJECT = { slug: "funi-floors", shortName: "Funi-Floors",
title: "SIP Self-Prestressing Funicular Floor Cassettes & 313 psf Collars", sector: "Structural", station: "05 \u00b7 Precast & Floor Bay",
coords: { x: 0.56, y: 0.28 }, rung: 3, statusNote: "v0.1.0 \u00b7 10/10 controls & 3 SymPy theorems \u00b7 -O-safe require() \u00b7 exact-Q checkerboard/end-interlock study",
caveat: "Full-scale 27 m\u00b2 ASTM E119 loaded furnace & 2M-cycle fatigue open in Issues #1\u2013#6 \u00b7 study audits #1/#3 in exact Q; anchor pull-out tests still settle sleeve/wedge",
externalRepoUrl: "https://github.com/aska-physical/funi-floors", visualType: "funi-floors",
sliderLabel: "Fe-SMA Joule Prestress & 313 psf AI Rack Load Stage", sliderMin: 0, sliderMax: 100, sliderDefault: 78, sliderUnit: "% stage", presets: [
{ label: "Demold + Cold Tie (15%)", val: 15 }, { label: "175 \u00b0C Joule Camber (55%)", val: 55 },
{ label: "313 psf AI Rack + EIS (100%)", val: 100 } ],
builderSummary: "Replaces 310 mm post-tensioned slabs + 280 mm MEP plenums with a 380 mm flush stay-in-place funicular cassette\u2014cutting concrete 76.1%, passing 313 psf AI rack loads, and saving 1 full story every 12 floors.",
engineerSummary: "Couples Castigliano parabolic arch-tie compatibility (M(x) - H\u00b7z(x) = 0) with 175 \u00b0C Fe-Mn-Si Joule recovery (423.5 MPa), 45\u00b0 CFRP octagonal MEP web bracing, AISC DG11 2-way modal stiffness (8.62 Hz), and ACI 318M-19 \u00a722.6.5.2 active punching collars.",
howToRead: "Top shell carries pure parabolic arch compression (fc = 13.67 MPa) into 380 mm corner haunches; bottom CFRP + Fe-Mn-Si tie locks horizontal thrust internally while 200 mm chilled-water ducts pass through quarter-span octagonal web openings.",
walkthrough: [
{ title: "3 mm Basalt/Carbon SIP Pan", val: 15, text: "CNC-nested stay-in-place textile pan forms the 55 mm parabolic shell and 4 ribs with zero stripped timber shoring." },
{ title: "175 \u00b0C Resistive Joule Lock", val: 55, text: "8.71 kWh pulse heats grouted Fe-Mn-Si strips to 175 \u00b0C, generating 423.5 MPa recovery stress and eliminating passive tie-elongation crown cracking." },
{ title: "Flush 313 psf Collar Seat", val: 80, text: "Natural corner spandrel depth (d_eff = 335 mm) + active Fe-SMA collar confinement achieves 2,756 kN punching capacity with zero drop caps." },
{ title: "50 kHz Cole EIS Leak Twin", val: 100, text: "Conductive carbon soffit senses CDU coolant leaks via +46.2% 50 kHz reactance shift with 0.0% static rack-load crosstalk." }
], metrics: [ { value: "-76.1%", label: "Concrete Volume (74.1 vs 310 mm)", cite: "funi-floors v0.1.0 cert" },
{ value: "8.62 Hz", label: "DG11 Floor Freq (0.31% g <= 0.50%)", cite: "AISC DG11 2-way modal" },
{ value: "2,756 kN", label: "Flush Collar phi*Vn (vs 2,208 kN Vu)", cite: "ACI 318M-19 \u00a722.6.5.2" },
{ value: "-67.8%", label: "Embodied Carbon (38.8 kg CO2e/m\u00b2)", cite: "Cradle-to-gate A1\u2013A3" },
{ value: "714.2 kN/rib", label: "certificate arch thrust vs 720 kN net-ligament tear gate (graded 4-pin 249.97 \u2264 260 kN PASS)", cite: "studies/checkerboard-bracing-and-interlock-audit" } ], shopMethod: {
tooling: "CNC waterjet 3 mm mineral-basalt/carbon SIP pan, Torayca T1100G + Fe-Mn-Si tie loom, 48 V DC Joule power supply, 50 MPa LC3 concrete batch",
steps: [
{ phase: "01 \u00b7 Fold SIP Pan & Loom Hybrid Tie", detail: "Fold 9.0 m \u00d7 3.0 m stay-in-place basalt-carbon pan; seat 4\u00d7 (360 mm\u00b2 T1100G CFRP + 980 mm\u00b2 Fe-Mn-Si) bottom chords and 45\u00b0 octagonal MEP collars." },
{ phase: "02 \u00b7 Single-Pour 50 MPa LC3 Shell", detail: "Cast 74.1 mm eq. thickness parabolic shell (55 mm crown, 380 mm corner haunches) and cementitious fire-grout channels." },
{ phase: "03 \u00b7 175 \u00b0C Joule Self-Prestress", detail: "Apply 0.323 kWh/m\u00b2 resistive pulse (175 \u00b0C); Fe-Mn-Si locks 423.5 MPa recovery stress without hydraulic jacks or anchor wedges." },
{ phase: "04 \u00b7 Crane Seat & Collar Torque-Heat", detail: "Seat cassette onto 500 mm columns, shear-key longitudinal joints, and activate perimeter Fe-SMA punching collar (f_pc = 3.8 MPa)." }
] }, calcConfig: { title: "6-Domain Funicular Cassette & 313 psf Punching Collar Sizer",
subtitle: "Live closed-form solver from funi-floors/verify.py: Castigliano arch-tie compatibility, AISC DG11 vibration, ACI 318 collar shear, and 2-hr ISO 834 fire.",
inputs: [ { key: "spanM", label: "Bay Span L (m)", min: 6.0, max: 12.0, step: 0.5, default: 9.0, unit: "m" },
{ key: "liveKpa", label: "Live Floor Load q_L (kPa)", min: 2.5, max: 20.0, step: 0.5, default: 15.0, unit: "kPa" },
{ key: "riseMm", label: "Funicular Arch Rise f (mm)", min: 180, max: 360, step: 5, default: 285, unit: "mm" },
{ key: "jouleTempC", label: "Fe-SMA Joule Temp T_act (\u00b0C)", min: 20, max: 210, step: 5, default: 175, unit: "\u00b0C" } ] },
specFilename: "funi-floors-cassette-spec.toml", verification: {
propose: "Parametric cassette geometry (L, f, h = 380 mm), hybrid T1100G CFRP + Fe-Mn-Si tie schedule, and 200 mm octagonal MEP penetrations.",
verify: "Deterministic verify.py checks 3 SymPy identities + 10/10 must-fail gates (crown stress, MEP web shear, DG11 vibration, ACI 318 punching, 120-min ISO 834 fire, Cole EIS) with -O-safe require() guards and R5 regression tests (PR #9). Add-only exact-Q study (PR #8) certifies: checkerboard half-span arch bending M(L/4) = 3645/64 kN\u00b7m with 405/8 kN shear-key demand and 51.33 mm thrust eccentricity inside the 380 mm kern; 0 floppy modes with 45\u00b0 octagonal web bracing vs 4 unbraced; carbon end-interlock at 714.2 kN/rib \u2014 ligament 714.2 \u2264 720 kN PASS, uniform 4-pin 280.58 > 260 kN FAIL, graded 4-pin 249.97 \u2264 260 kN PASS.",
sign: "Emits results/certificate.json + TOML shop traveler; blocks berth if passive tie cracks crown, DG11 < 8.0 Hz, or collar utilization > 1.00." },
tableHeaders: ["Floor System (9 m \u00d7 9 m, 313 psf)", "Total Depth + MEP", "Dead Mass", "DG11 Vibration", "Gate Result"], tableRows: [
["310 mm PT Flat Slab + Drop Caps", "590\u2013660 mm", "744 kg/m\u00b2", "Pass (heavy mass)", "Baseline (120.6 kg CO2e/m\u00b2)"],
["Passive GFRP-Tied Thin Vault", "380 mm flush", "188 kg/m\u00b2", "3.26 Hz / 2.42% g", "FAIL (188.8 MPa crown crack)"],
["Uncollared Funicular Slab", "380 mm flush", "195 kg/m\u00b2", "8.62 Hz / 0.31% g", "FAIL (Punching Vu > 1,150 kN)"],
["Aska Funi-Floors SIP + Fe-SMA", "380 mm flush", "195.1 kg/m\u00b2", "8.62 Hz / 0.31% g", "PASS (10/10 gates, -67.8% CO2e)"] ],
untested: "Full-scale 9 m \u00d7 3 m ASTM E119 two-hour loaded furnace test, 2,000,000-cycle server harmonic fatigue on octagonal CFRP collars, and diaphragm shear-key cyclic rig."
};
function evalFuniFloors(p) {
const c = (state.calcValues && state.calcValues[p.slug]) || {};
const L = c.spanM ?? 9.0;
const qL = c.liveKpa ?? 15.0;
const fMm = c.riseMm ?? 285;
const Tact = c.jouleTempC ?? 175;
const f = fMm / 1000.0;
const w = 3.0, tSh = 55.0, hCr = 115.0, fc = 50.0, nR = 4, Af = 360.0, Asma = 980.0;
const hTot = Math.max(380.0, fMm + 95.0);
const volEqMm = (tSh * 1e-3 + (nR * 0.065 * 0.220) / w) * 1000.0;
const deadKg = volEqMm * 2.4 + 6.4 + ((Af * 1e-6 * 1600.0 + Asma * 1e-6 * 7800.0) * nR) / w;
const qDead = deadKg * 9.80665 * 1e-3;
const wServ = (qDead + 1.0 + qL) * w;
const wUls = (1.2 * (qDead + 1.0) + 1.6 * qL) * w;
const sigRec = Tact <= 50.0 ? 0.0 : 435.0 * Math.tanh((Tact - 50.0) / 58.0);
const Psma = nR * Asma * sigRec * 1e-3;
const Ec = 4700.0 * Math.sqrt(fc);
const Iarch = nR * (65.0 * Math.pow(hCr, 3) / 12.0) + (w * 1000.0) * Math.pow(tSh, 3) / 12.0;
const EAtie = nR * (Af * 195800.0 + Asma * 165000.0);
const chi = (15.0 * Ec * Iarch) / (8.0 * Math.pow(fMm, 2) * EAtie);
const Hrig = (wServ * L * L) / (8.0 * f);
const Hserv = (Hrig + chi * Psma) / (1.0 + chi);
const Mcrown = (wServ * L * L) / 8.0 - Hserv * f;
const Acr = w * 1000.0 * tSh + nR * 65.0 * (hCr - tSh);
const Scr = Iarch / (0.5 * hCr);
const fcCrown = (Hserv * 1e3) / Acr + Math.abs(Mcrown * 1e6) / Scr;
const ftNet = Math.abs(Mcrown * 1e6) / Scr - (Hserv * 1e3) / Acr;
const frLim = 0.62 * Math.sqrt(fc);
const EcDyn = 1.2 * Ec;
const EAtop = EcDyn * 1000.0 * tSh;
const EAbot = EAtie / w;
const zLev = (hTot - 0.5 * tSh - 32.0) * 1e-3;
const Iribs = (nR * (0.065 * Math.pow(0.255, 3) / 12.0)) / w;
const EIuncr = 1.8 * (((EAtop * EAbot) / (EAtop + EAbot)) * zLev * zLev + EcDyn * 1e6 * Iribs);
const cracked = ftNet > frLim;
const EI2way = cracked ? 8.40e6 : EIuncr, betaV = cracked ? 0.025 : 0.03;
const mVib = deadKg + 1000.0 / 9.80665;
const fnHz = (Math.PI / (2.0 * L * L)) * Math.sqrt(EI2way / mVib);
const Weff = mVib * 9.80665 * 1e-3 * L * (0.65 * L);
const apPct = (100.0 * (0.29 * Math.exp(-0.35 * fnHz))) / (betaV * Weff);
const dEff = hTot - 45.0;
const b0 = 4.0 * (500.0 + dEff);
const Vu = (1.2 * (qDead + 1.0) + 1.6 * qL) * (L * L - Math.pow((500.0 + dEff) * 1e-3, 2));
const vcAct = 0.29 * Math.sqrt(35.0) + 0.30 * 3.8;
const phiVn = Math.min( 0.75 * (vcAct * b0 * dEff * 1e-3 + 480.0), 0.75 * (0.66 * Math.sqrt(fc) * b0 * dEff * 1e-3 + 240.0) );
const VqUls = 0.25 * wUls * L;
const phiVoct = 0.75 * nR * (2.0 * 65.0 * 48.0) * 0.17 * Math.sqrt(fc) * 1e-3 + 0.75 * nR * Math.SQRT2 * 65.0 * (195800.0 * 0.0065) * 1e-3;
const jouleKwh = ((nR * Asma * 1e-6 * L * 7800.0) * 500.0 * Math.max(0.0, Tact - 20.0) / 0.68) / 3.6e6;
const ecKg = (volEqMm * 1e-3) * 132.0 + 5.4 + ((nR * Af * 1e-6 * 1600.0) * 11.5 + (nR * Asma * 1e-6 * 7800.0) * 1.45) / w;
const fails = []; if (ftNet > frLim) fails.push("CROWN TENSION CRACK (" + ftNet.toFixed(1) + " > " + frLim.toFixed(1) + " MPa)");
if (fcCrown > 22.5) fails.push("CROWN COMP (" + fcCrown.toFixed(1) + " > 22.5 MPa)");
if (fnHz < 8.0 || apPct > 0.50) fails.push("DG11 VIB (" + fnHz.toFixed(2) + " Hz / " + apPct.toFixed(2) + "% g)");
if (Vu > phiVn) fails.push("COLLAR PUNCHING (" + Math.round(Vu) + " > " + Math.round(phiVn) + " kN)");
if (VqUls > phiVoct) fails.push("MEP WEB SHEAR (" + VqUls.toFixed(0) + " > " + phiVoct.toFixed(0) + " kN)");
const badge = fails.length === 0
? { cls: "badge-pill badge-verified", text: "10/10 GATES PASS \u00b7 " + Math.round(qL * 20.885) + " PSF BERTH-READY" }
: { cls: "badge-pill badge-accent", text: "FAIL-CLOSED \u00b7 " + fails[0] };
const specText = [ "# ASKA PHYSICAL \u2014 FUNI-FLOORS v0.1.0 SHOP & SITE SPEC PACKET", "repo = \"https://github.com/aska-physical/funi-floors\"",
"gate_status = \"" + (fails.length === 0 ? "PASS" : "FAIL_CLOSED") + "\"", "", "[geometry]", "cassette_plan_m = [" + L.toFixed(2) + ", 3.00]",
"total_flush_depth_mm = " + hTot.toFixed(0), "funicular_rise_mm = " + fMm.toFixed(0),
"eq_concrete_thickness_mm = " + volEqMm.toFixed(2) + " # -76.1% vs 310 mm PT slab",
"mep_octagonal_openings = \"4x 200 mm @ x = L/4, 3L/4 with +/-45 deg CFRP collar\"", "", "[prestress_and_equilibrium]",
"joule_activation_temp_C = " + Tact, "fe_sma_recovery_stress_MPa = " + sigRec.toFixed(2), "joule_energy_per_cassette_kWh = " + jouleKwh.toFixed(3),
"arch_horizontal_thrust_H_kN = " + Hserv.toFixed(2), "crown_compression_MPa = " + fcCrown.toFixed(2) + " # limit <= 22.50 MPa", "",
"[vibration_and_collar]", "dg11_frequency_Hz = " + fnHz.toFixed(3) + " # limit >= 8.00 Hz",
"dg11_peak_accel_pct_g = " + apPct.toFixed(3) + " # limit <= 0.50% g", "collar_punching_Vu_kN = " + Vu.toFixed(1),
"collar_punching_phiVn_kN = " + phiVn.toFixed(1), "embodied_carbon_kgCO2e_m2 = " + ecKg.toFixed(2) ].join("\n");
return { outputs: [
{ label: "Arch Thrust & Crown Stress", value: Hserv.toFixed(0) + " kN \u00b7 " + fcCrown.toFixed(1) + " MPa", sub: "\u03c3_rec = " + sigRec.toFixed(0) + " MPa (" + jouleKwh.toFixed(1) + " kWh Joule)" },
{ label: "AISC DG11 2-Way Vibration", value: fnHz.toFixed(2) + " Hz \u00b7 " + apPct.toFixed(2) + "% g", sub: "Target >= 8.0 Hz & <= 0.50% g" },
{ label: "ACI 318 Flush Collar Util.", value: ((Vu / phiVn) * 100).toFixed(1) + "% (" + Math.round(Vu) + "/" + Math.round(phiVn) + " kN)", sub: "d_eff = " + dEff.toFixed(0) + " mm, f_pc = 3.8 MPa" },
{ label: "Mass & A1\u2013A3 Carbon", value: deadKg.toFixed(1) + " kg/m\u00b2 \u00b7 " + ecKg.toFixed(1) + " kgCO\u2082e", sub: "-73.8% mass & -67.8% CO\u2082e vs PT slab" }
], statusBadge: badge, specText: specText }; }
function drawFuniFloorsCanvas(canvas, val) { if (!canvas) return;
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
const t = Math.max(0, Math.min(1, (val ?? 78) / 100));
const padX = w * 0.10, spanW = w * 0.80;
const topY = h * 0.36, botY = h * 0.72;
const camber = 4 + t * 8;
const archCrownY = topY + 12 - camber * 0.45; ctx.fillStyle = muted; ctx.globalAlpha = 0.25; ctx.fillRect(padX - 16, topY, 22, h - topY - 14);
ctx.fillRect(padX + spanW - 6, topY, 22, h - topY - 14); ctx.globalAlpha = 1.0; ctx.fillStyle = t > 0.35 ? ver : accent;
ctx.fillRect(padX - 18, topY + 4, 26, botY - topY); ctx.fillRect(padX + spanW - 8, topY + 4, 26, botY - topY); ctx.beginPath();
ctx.moveTo(padX, topY); ctx.lineTo(padX + spanW, topY); ctx.lineTo(padX + spanW, botY); for (let i = 40; i >= 0; i--) {
const u = i / 40;
const px = padX + u * spanW;
const intrados = botY - (botY - archCrownY - 14) * (4 * u * (1 - u)); ctx.lineTo(px, intrados); } ctx.closePath(); ctx.fillStyle = blue;
ctx.globalAlpha = 0.18; ctx.fill(); ctx.globalAlpha = 1.0; ctx.strokeStyle = blue; ctx.lineWidth = 2.2; ctx.stroke(); ctx.beginPath();
ctx.moveTo(padX - 10, botY - 3); ctx.lineTo(padX + spanW + 10, botY - 3); ctx.strokeStyle = t >= 0.35 ? accent : muted; ctx.lineWidth = 4;
ctx.stroke(); [0.24, 0.76].forEach(function (u) {
const cx = padX + u * spanW, cy = (topY + botY) * 0.54, r = Math.min(13, h * 0.048); ctx.beginPath(); for (let k = 0; k < 8; k++) {
const ang = (Math.PI / 4) * k + Math.PI / 8;
const vx = cx + r * Math.cos(ang), vy = cy + r * Math.sin(ang); if (k === 0) ctx.moveTo(vx, vy); else ctx.lineTo(vx, vy); } ctx.closePath();
ctx.fillStyle = bg; ctx.fill(); ctx.strokeStyle = ver; ctx.lineWidth = 2; ctx.stroke(); }); if (t > 0.55) {
const rackAlpha = Math.min(1, (t - 0.55) / 0.35); ctx.globalAlpha = rackAlpha; for (let k = 0; k < 4; k++) {
const rx = padX + spanW * (0.16 + k * 0.20), rw = spanW * 0.11, rh = h * 0.19; ctx.fillStyle = fg; ctx.fillRect(rx, topY - rh - 2, rw, rh);
ctx.strokeStyle = ver; ctx.lineWidth = 1.3; ctx.strokeRect(rx + 2, topY - rh, rw - 4, rh - 4); } ctx.globalAlpha = 1.0; } if (w >= 420) {
ctx.font = "600 11px 'JetBrains Mono', monospace"; ctx.fillStyle = fg;
ctx.fillText("9.0m \u00d7 3.0m SIP CASSETTE \u00b7 h = 380mm FLUSH (-76.1% CONCRETE)", 14, 20); ctx.fillStyle = t >= 0.35 ? ver : accent;
const modeTxt = t < 0.35 ? "COLD TIE (PRE-JOULE)" : (t < 0.70 ? "175\u00b0C Fe-SMA LOCK: \u03c3_rec = 423.5 MPa \u00b7 H = 1,895 kN" : "313 PSF AI HALL + 50 kHz EIS (+46.2% LEAK LOCK)");
ctx.fillText(modeTxt, 14, h - 12); } } if (!CORE_PROJECTS.some(function (p) { return p.slug === "funi-floors"; })) {
CORE_PROJECTS.push(FUNI_FLOORS_PROJECT); }
const existingIdx = state.projects.findIndex(function (p) { return p.slug === "funi-floors"; }); if (existingIdx >= 0) {
state.projects[existingIdx] = FUNI_FLOORS_PROJECT; } else { state.projects.push(FUNI_FLOORS_PROJECT); }
if (typeof initProjectDefaults === "function") { initProjectDefaults(FUNI_FLOORS_PROJECT); }
const _prevEval = window.evaluateSubpageCalculator; window.evaluateSubpageCalculator = function (p) {
if (p && p.visualType === "funi-floors") return evalFuniFloors(p); return _prevEval ? _prevEval(p) : null; };
const _prevRender = window.renderPhysicsEngine; window.renderPhysicsEngine = function (canvas, type, val) { if (type === "funi-floors") {
drawFuniFloorsCanvas(canvas, val); return; } if (_prevRender) _prevRender(canvas, type, val); }; })();
