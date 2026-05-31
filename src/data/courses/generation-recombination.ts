export const generationRecombinationContent = `
# Carrier Generation and Recombination

## The Context: Non-Equilibrium Carriers

So far, we studied semiconductors at **thermal equilibrium**: no external forces, no light, nothing disturbing the system. At equilibrium, carriers are generated and destroyed at exactly equal rates, giving steady concentrations $n_0$ and $p_0$.

But real devices don't sit in the dark doing nothing. We shine light on solar cells, inject current into LEDs, apply voltages to transistors. All of these create **excess carriers** — extra electrons and holes beyond the equilibrium values.

**Generation (G):** The process of creating new electron-hole pairs (adding free carriers).

**Recombination (U or R):** The process of destroying electron-hole pairs (removing free carriers).

Understanding how fast carriers are created and destroyed is essential for designing every semiconductor device.

---

## 1. Generation — Creating Electron-Hole Pairs

To generate a free electron, you must give it enough energy to jump across the bandgap $E_g$ from the valence band to the conduction band. There are three main energy sources:

### Thermal Generation (Intrinsic)

Even without any external stimulus, the thermal vibration of the crystal lattice (called **phonons**) occasionally provides enough energy to free an electron. At room temperature, the thermal energy scale is $kT = 0.026$ eV, much smaller than silicon's $E_g = 1.12$ eV. Only the tail of the thermal energy distribution (Boltzmann tail) has enough energy, which is why $n_i$ is so small in silicon.

At equilibrium, thermal generation exactly balances thermal recombination. This is why equilibrium concentrations $n_0, p_0$ stay constant.

### Optical Generation (Photogeneration)

A photon of light hits the semiconductor. If the photon energy $E_{photon} = h\\nu \\geq E_g$, the photon can be absorbed: its energy promotes one electron from the valence band to the conduction band, creating one electron-hole pair.

$$h\\nu \\geq E_g \\implies \\text{absorption and generation}$$
$$h\\nu < E_g \\implies \\text{photon passes through (no absorption)}$$

This is how **solar cells** work: sunlight photons are absorbed, creating electron-hole pairs, which are then separated by the PN junction to produce current.

### Impact Ionization

A free carrier (electron or hole) is accelerated by a very large electric field to very high kinetic energy. It then collides with a lattice atom with enough force to knock a bound electron free, creating a new electron-hole pair. This new pair can then be accelerated and create more pairs — an **avalanche**.

This mechanism is what causes **avalanche breakdown** in PN junctions and Zener diodes (useful in voltage regulation).

---

## 2. Direct vs Indirect Bandgap — The Crucial Distinction

When an electron jumps from the valence band to the conduction band, it must obey two conservation laws simultaneously:
1. **Energy conservation:** The photon or phonon provides the right amount of energy
2. **Momentum conservation:** The total crystal momentum must be conserved

This leads to a fundamental distinction between two types of semiconductors:

### Direct Bandgap Semiconductor (e.g., GaAs, InP, GaN)

In a direct bandgap material, the **conduction band minimum** and the **valence band maximum** occur at the **same crystal momentum ($k = 0$)**. An electron can jump directly from VB maximum to CB minimum by absorbing a single photon (no momentum change needed).

\`\`\`
Direct Bandgap (e.g., GaAs):

Energy
  ↑
  │       ·              ← CB minimum at k=0
  │      · ·
  │    ──────── E_C       ← bandgap E_g
  │    ──────── E_V
  │      · ·
  │       ·              ← VB maximum at k=0
  └──────────────→ k
         0

Electron can jump straight UP (k doesn't change)
with just one photon. Very efficient!
\`\`\`

**Result:** Optical transitions are **very efficient** because only ONE particle (photon) is needed. Direct bandgap materials:
- **Absorb light very efficiently** → great for solar cells
- **Emit light very efficiently** → great for LEDs and LASER diodes (GaAs, GaN LEDs, laser pointers, blue LEDs)

### Indirect Bandgap Semiconductor (e.g., Silicon, Germanium)

In an indirect bandgap material, the conduction band minimum and valence band maximum occur at **different crystal momenta**. An electron cannot jump directly — it would change momentum, which is not allowed by momentum conservation for a single photon (photons carry almost no momentum).

The transition requires **two particles simultaneously:**
1. A **photon** (provides the energy $E_g$)
2. A **phonon** (a lattice vibration quantum, provides the momentum change)

\`\`\`
Indirect Bandgap (e.g., Silicon):

Energy
  ↑
  │                  ·   ← CB minimum at k ≠ 0
  │                 · ·
  │       ──────────────── E_C
  │       ──────────────── E_V
  │      · ·
  │       ·              ← VB maximum at k=0
  └──────────────────────→ k
         0              k_min

To jump: need photon (energy) AND phonon (momentum)
Both simultaneously → much less likely!
\`\`\`

**Result:** Optical transitions require a rare **three-particle event** (electron + photon + phonon). This makes silicon:
- **Poor at absorbing light** (needs thick layers compared to GaAs)
- **Terrible at emitting light** → you cannot make a silicon LED easily (at least not efficiently)

This is why fiber-optic systems use GaAs/InP lasers, not silicon. And why silicon solar cells need to be relatively thick (~200 μm) while GaAs cells work at ~2 μm.

---

## 2b. GaAs and the Wavelength–Bandgap Relation

### Deriving the Golden Formula: $\\lambda(\\mu m) = 1.24 / E_g(eV)$

You have probably seen the formula $\\lambda = 1.24 / E_g$ written in textbooks without explanation. Let's derive it from first principles — it only takes two lines.

**Step 1 — Start from the photon energy formula.**

A photon (a packet of light) carries energy $E = h\\nu$, where:
- $h = 6.626 \\times 10^{-34}$ J·s is **Planck's constant** (the smallest "quantum" of action in nature)
- $\\nu$ (Greek letter "nu") is the **frequency** of the light in Hz (cycles per second)

Light travels at speed $c = 3 \\times 10^8$ m/s, and frequency and wavelength are related by $c = \\lambda \\nu$, so $\\nu = c/\\lambda$. Substituting:

$$E_{photon} = \\frac{hc}{\\lambda}$$

**Step 2 — For generation/emission, $E_{photon} = E_g$.**

At the threshold of optical generation, the photon energy equals exactly the bandgap. So:

$$E_g = \\frac{hc}{\\lambda} \\implies \\lambda = \\frac{hc}{E_g}$$

**Step 3 — Compute $hc$ in convenient units.**

$$hc = 6.626 \\times 10^{-34} \\text{ J·s} \\times 3 \\times 10^8 \\text{ m/s} = 1.988 \\times 10^{-25} \\text{ J·m}$$

Now convert Joules to electron-volts (recall: $1 \\text{ eV} = 1.6 \\times 10^{-19}$ J, so $1 \\text{ J} = 1/(1.6 \\times 10^{-19})$ eV):

$$hc = \\frac{1.988 \\times 10^{-25}}{1.6 \\times 10^{-19}} \\text{ eV·m} = 1.243 \\times 10^{-6} \\text{ eV·m}$$

Convert metres to micrometres ($1 \\text{ m} = 10^6 \\,\\mu\\text{m}$):

$$hc = 1.243 \\times 10^{-6} \\times 10^6 \\text{ eV·}\\mu\\text{m} = 1.24 \\text{ eV·}\\mu\\text{m}$$

**Therefore:**

$$\\boxed{\\lambda(\\mu\\text{m}) = \\frac{1.24}{E_g(\\text{eV})}}$$

That's it. The number 1.24 is just $hc$ in the right units. Memorise it; you will use it constantly.

---

### Applying the Formula to GaAs

GaAs (Gallium Arsenide) is a **direct bandgap** semiconductor with $E_g = 1.42$ eV at room temperature. Applying the formula:

$$\\lambda_{GaAs} = \\frac{1.24}{1.42} \\approx 0.87 \\,\\mu\\text{m}$$

That is 870 nm — in the **near-infrared** region. The human eye sees from about 380 nm (violet) to 700 nm (red). At 870 nm we are just below visible red: invisible to the eye, but easily detected by silicon photodiodes.

**Where do you encounter 870 nm light?**
- TV remote controls (the little LED at the front emits at ~880 nm)
- First-generation optical fibre communication links
- Night-vision cameras
- Medical pulse-oximeters

\`\`\`
Visible and near-IR spectrum:

Wavelength: 380nm  450nm  520nm  620nm  700nm  870nm   1550nm
            │      │      │      │      │      │        │
            Violet Blue  Green  Orange  Red   │       Telecom
                                              │        fibre
                                         GaAs LED
                                         (near-IR,
                                         invisible!)
\`\`\`

---

### Tuning the Colour: The $\\text{Ga}_{1-x}\\text{Al}_x\\text{As}$ Alloy System

Here is something remarkable. We can **mix** GaAs (gallium arsenide) with AlAs (aluminium arsenide) to form an alloy $\\text{Ga}_{1-x}\\text{Al}_x\\text{As}$. The parameter $x$ is the aluminium fraction, ranging from 0 (pure GaAs) to 1 (pure AlAs).

The bandgap of this alloy varies approximately linearly with $x$:

$$E_g(x) \\approx 1.42 + 1.247x \\quad (\\text{eV, for } 0 \\leq x \\leq 0.45)$$

(For $x > 0.45$ the material transitions from direct to indirect bandgap, but ignore that for now.)

At $x = 0$: $E_g = 1.42$ eV → $\\lambda = 0.87\\,\\mu$m (near-IR, GaAs)
At $x = 0.3$: $E_g = 1.42 + 0.374 = 1.79$ eV → $\\lambda = 0.69\\,\\mu$m (visible red!)
At $x = 0.45$: $E_g = 1.42 + 0.561 = 1.98$ eV → $\\lambda = 0.63\\,\\mu$m (bright red/orange)

**By choosing the aluminium fraction $x$ during crystal growth, engineers can set the emission wavelength of the LED to any value they want across the visible and near-IR spectrum.** This is "bandgap engineering" — tuning the quantum mechanical properties of a material by controlling its chemical composition.

\`\`\`
Bandgap engineering: Ga₁₋ₓAlₓAs alloy

E_g (eV)
  2.16 ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─  AlAs (x=1)
                                       ↗
  1.98 ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ /    x=0.45 (orange)
                                   /
  1.79 ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ /      x=0.30 (visible red)
                               /
  1.42 ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ /          GaAs (x=0, near-IR)
       0         0.3       0.45  1.0     x (Al fraction)

Corresponding wavelengths:
  1.42 eV → 0.87 μm (near-IR)
  1.79 eV → 0.69 μm (red)
  1.98 eV → 0.63 μm (orange-red)
\`\`\`

---

### Condition for Optical Generation

For a photon to **generate** an electron-hole pair, it must have energy greater than or equal to the bandgap:

$$h\\nu \\geq E_g \\iff \\lambda \\leq \\frac{1.24}{E_g(\\text{eV})} \\,\\mu\\text{m}$$

**Interpretation:** Light with wavelength **shorter** than $1.24/E_g$ is absorbed (generates carriers). Light with wavelength **longer** than $1.24/E_g$ passes through the semiconductor without being absorbed (the photon energy is too low to bridge the gap).

This is why silicon ($E_g = 1.12$ eV, cutoff $\\lambda = 1.11\\,\\mu$m) is transparent to mid-infrared light but opaque to visible light. And why gallium phosphide ($E_g = 2.26$ eV, cutoff $\\lambda = 0.55\\,\\mu$m) is transparent to red light but absorbs blue light.

---

### Recombination Centres vs Trap Centres — A Critical Distinction

Not all impurity levels in the bandgap do the same thing. There are two fundamentally different types, and confusing them is a very common error.

#### Centre Recombinant (Recombination Centre) — "The Deadly Trap"

A **recombination centre** is an energy level sitting **deep in the middle of the bandgap** (close to $E_i$). It can capture both electrons from the conduction band AND holes from the valence band.

\`\`\`
Recombination Centre (deep, near midgap):

E_C ═══════════════════════════
      ↓ electron falls into trap
E_T ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─  ← near E_i (midgap)
      ↓ hole captures trapped electron
E_V ═══════════════════════════

Net result: one electron + one hole → destroyed (heat released)
\`\`\`

**Why midgap is worst:** The recombination centre must capture both an electron AND a hole. If the trap is at midgap, both capture steps are equally probable — neither step is the bottleneck, and recombination proceeds at the maximum possible rate.

**Physical consequences:**
- **Reduces minority carrier lifetime** $\\tau$: carriers recombine before they can diffuse far
- **Increases dark current** in reverse-biased diodes: the generation rate $|U|$ is maximised when the trap is at midgap (more on this in the full SRH formula below)
- Deliberately introduced recombination centres (e.g. gold in silicon) are used to *speed up* transistor switching — fast recombination kills stored charge quickly

**Examples of recombination centres in silicon:** Gold (Au), Iron (Fe), Copper (Cu) — all deep-level impurities near midgap. This is why solar-cell silicon must be ultra-pure; even parts-per-trillion of iron dramatically shortens lifetime.

#### Centre Piège (Trap Centre) — "The Temporary Delay"

A **trap centre** is an energy level sitting **shallow**, close to either the conduction band edge or the valence band edge.

\`\`\`
Trap Centre (shallow, near band edge):

E_C ═══════════════════════════
E_T ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─  ← shallow electron trap (near E_C)
      ↑ electron captured here
      ↓ electron thermally re-emitted back to CB
      (hole in VB never captured → no recombination)
E_V ═══════════════════════════

Net result: electron delayed, then re-emitted. No recombination.
\`\`\`

The key difference: a shallow trap is too far from the opposite band. After capturing an electron, the thermal energy $kT$ is enough to kick it back out before a hole can arrive. **The carrier is delayed but not destroyed.**

**Physical consequences:**
- **Reduces effective carrier mobility**: carriers spend time "frozen" in traps instead of moving
- **Increases response time** of photodetectors: carriers arrive late because of trapping/detrapping delays
- Does NOT significantly shorten minority carrier lifetime at low frequencies

#### Charge States: Acceptor-Like and Donor-Like Traps

Traps also have **charge states** that matter for Coulomb capture cross-sections:

| Symbol | Type | Charge state | Capture cross-section |
|---|---|---|---|
| $A^0$ | Acceptor-like trap, empty | Neutral | Moderate $\\sigma$ |
| $A^-$ | Acceptor-like trap, filled (e⁻ captured) | Negative | Small $\\sigma_h$ (repels holes) |
| $D^0$ | Donor-like trap, filled | Neutral | Moderate $\\sigma$ |
| $D^+$ | Donor-like trap, empty | Positive | Small $\\sigma_e$ (repels electrons) |

A **neutral trap** has the largest capture cross-section (no Coulomb repulsion). A charged trap repels the carrier of like sign → smaller capture cross-section → slower capture rate. This affects the SRH recombination rate derived in the next section.

---

## 3. Recombination — Destroying Electron-Hole Pairs

Recombination occurs when a free electron encounters a free hole and they "annihilate" — the electron falls back into the empty valence band state. The excess energy is released in one of several ways:

### Radiative Recombination (Band-to-Band)

The electron falls directly from the conduction band to the valence band, releasing the energy as a **photon** of light. This is the reverse of optical generation.

- **Very efficient in direct bandgap materials** (GaAs, GaN) → basis of LEDs and lasers
- **Very inefficient in silicon** (indirect bandgap, momentum mismatch)

### Shockley-Read-Hall (SRH) Recombination — The Dominant Mechanism in Silicon

In real crystals, impurities, defects, and dislocations create energy levels in the **middle of the bandgap** (trap states, $E_T$). An electron can recombine via two steps:
1. The electron is captured by a trap state (falls from CB to $E_T$)
2. The trapped electron is then captured by a hole (falls from $E_T$ to VB)

Each step releases energy as heat (phonons, lattice vibrations).

\`\`\`
SRH Recombination via Trap:

E_C ═══════════════
      ↓ (step 1: electron captured by trap)
E_T - - - - - - - -  ← trap state (impurity/defect in bandgap)
      ↓ (step 2: captured by hole)
E_V ═══════════════
\`\`\`

**SRH is the dominant recombination mechanism in silicon** at room temperature for moderate carrier concentrations. The SRH recombination rate is:

$$U_{SRH} = \\frac{\\Delta p}{\\tau_p} \\quad \\text{(for minority holes in n-type)}$$

Where $\\tau_p$ is the **minority carrier lifetime** (seconds) — how long an excess hole lives before recombining. Typical values: $\\tau_p \\sim 1 \\mu s$ to $1 ms$ depending on material purity.

### Auger Recombination

An electron recombines with a hole, but instead of releasing a photon or phonon, the energy is transferred to a **third carrier** (another electron or hole) which is excited to a higher energy and then gradually loses energy to the lattice (thermalizes).

Rate $\\propto n^2 p$ (electrons) or $np^2$ (holes) — becomes important at **very high carrier concentrations** (above $10^{18}$ cm$^{-3}$).

---

## 3b. The Complete Shockley-Read-Hall Rate Equation — Full Derivation

The simplified formula $U = \\Delta p / \\tau_p$ that we used above is only valid under specific conditions (low injection, minority carriers). Here we derive the **exact** SRH rate from first principles. This is one of the most important results in semiconductor physics.

### The Four Microscopic Processes

Consider a trap level at energy $E_T$ inside the bandgap. Let $N_T$ be the trap density (traps per cm³) and $f_T$ be the **trap occupancy** — the probability that a trap is currently filled with an electron.

At any trap, four processes compete:

\`\`\`
The four SRH processes at a trap level E_T:

E_C ═══════════════════════════════════════

    ←──── Process A ────→  ←── Process B ──→
    e⁻ captured by trap    e⁻ emitted trap→CB
    Rate = Cn·n·NT(1-fT)   Rate = en·NT·fT

E_T ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─

    ←──── Process C ────→  ←── Process D ──→
    hole captured by trap  hole emitted trap→VB
    Rate = Cp·p·NT·fT      Rate = ep·NT(1-fT)

E_V ═══════════════════════════════════════

Cn = σn·vth  (electron capture coefficient, cm³/s)
Cp = σp·vth  (hole capture coefficient, cm³/s)
σn, σp = capture cross-sections (cm²)
vth = thermal velocity (~10⁷ cm/s at 300 K)
\`\`\`

**Process A** (electron capture): A free electron from the conduction band falls into an empty trap. Rate $= C_n \\cdot n \\cdot N_T(1-f_T)$. Reading this: $n$ electrons are available, $N_T(1-f_T)$ traps are empty, $C_n = \\sigma_n v_{th}$ is the rate at which one electron meets one trap.

**Process B** (electron emission): A trapped electron is thermally excited back up to the conduction band. Rate $= e_n \\cdot N_T f_T$. The emission rate $e_n$ (s⁻¹) is set by detailed balance at equilibrium (derived below).

**Process C** (hole capture, equivalently: electron emission to VB): A trapped electron falls to the valence band, filling a hole. Rate $= C_p \\cdot p \\cdot N_T f_T$. Now $N_T f_T$ = number of *filled* traps, and $p$ is the hole concentration.

**Process D** (hole emission, equivalently: electron captured from VB): A valence-band electron is thermally excited up to fill the trap (creating a new hole in the VB). Rate $= e_p \\cdot N_T(1-f_T)$.

---

### Finding $e_n$ and $e_p$ from Detailed Balance

At **thermal equilibrium**, every process must be exactly balanced by its reverse (this is the principle of detailed balance). So Process A = Process B:

$$C_n n_0 N_T(1-f_0) = e_n N_T f_0$$

where $f_0$ is the equilibrium occupancy given by the Fermi-Dirac function:

$$f_0 = \\frac{1}{1 + \\exp\\left(\\frac{E_T - E_F}{kT}\\right)}$$

Solving for $e_n$:

$$e_n = C_n \\frac{n_0 (1-f_0)}{f_0} = C_n n_0 \\exp\\left(\\frac{E_T - E_F}{kT}\\right)$$

Using $n_0 = n_i \\exp\\left(\\frac{E_F - E_i}{kT}\\right)$:

$$e_n = C_n n_i \\exp\\left(\\frac{E_T - E_i}{kT}\\right) \\equiv C_n n_1$$

where we define the shorthand:

$$\\boxed{n_1 \\equiv n_i \\exp\\left(\\frac{E_T - E_i}{kT}\\right)}$$

**Physical meaning of $n_1$:** It is the electron concentration that the semiconductor would have if the Fermi level were at the trap energy $E_T$. Nothing more — it is just a convenient shorthand for a combination of known quantities.

Similarly, from Process C = Process D at equilibrium:

$$e_p = C_p p_1, \\quad \\text{where } \\boxed{p_1 \\equiv n_i \\exp\\left(\\frac{E_i - E_T}{kT}\\right)}$$

Note the symmetry: $n_1 p_1 = n_i^2$ always (just like $n_0 p_0 = n_i^2$). If $E_T = E_i$ (midgap), then $n_1 = p_1 = n_i$.

---

### The Steady-State Trap Occupancy

Under non-equilibrium conditions (device operating), the trap occupancy $f_T$ adjusts to make the **net electron flow through the trap equal to the net hole flow** (no charge builds up on traps in steady state):

$$U_n = C_n(nN_T(1-f_T) - n_1 N_T f_T)$$
$$U_p = C_p(pN_T f_T - p_1 N_T(1-f_T))$$

Setting $U_n = U_p = U$ (steady state) and solving for $f_T$:

$$f_T = \\frac{C_n n + C_p p_1}{C_n(n + n_1) + C_p(p + p_1)}$$

Substituting back:

$$U = \\frac{C_n C_p N_T (np - n_i^2)}{C_n(n + n_1) + C_p(p + p_1)}$$

Dividing top and bottom by $C_n C_p N_T$:

$$\\boxed{U_{SRH} = \\frac{np - n_i^2}{\\tau_{p0}(n + n_1) + \\tau_{n0}(p + p_1)}}$$

where the **fundamental lifetimes** are:

$$\\tau_{p0} = \\frac{1}{C_p N_T} = \\frac{1}{\\sigma_p v_{th} N_T}, \\quad \\tau_{n0} = \\frac{1}{C_n N_T} = \\frac{1}{\\sigma_n v_{th} N_T}$$

**This is the complete Shockley-Read-Hall formula.** Let's understand every piece before applying it.

---

### Anatomy of the SRH Formula

$$U = \\frac{np - n_i^2}{\\tau_{p0}(n + n_1) + \\tau_{n0}(p + p_1)}$$

**Numerator: $np - n_i^2$**

Recall the law of mass action: at equilibrium, $n_0 p_0 = n_i^2$. The quantity $np - n_i^2$ therefore measures how far the system is from equilibrium:
- $np > n_i^2$: more carriers than at equilibrium → **recombination** ($U > 0$, carriers are destroyed)
- $np < n_i^2$: fewer carriers than at equilibrium → **generation** ($U < 0$, carriers are created)
- $np = n_i^2$: equilibrium → $U = 0$ ✓

**Denominator: $\\tau_{p0}(n + n_1) + \\tau_{n0}(p + p_1)$**

This controls how fast recombination/generation proceeds. It depends on where $E_T$ sits in the gap (through $n_1$ and $p_1$) and on the carrier concentrations.

**The fundamental lifetimes $\\tau_{p0}$ and $\\tau_{n0}$:**

$\\tau_{p0} = 1/(\\sigma_p v_{th} N_T)$ depends on three things:
- $\\sigma_p$: how "big" the trap looks to a hole (cm²). A larger cross-section → trap catches holes more easily → shorter lifetime.
- $v_{th} \\approx \\sqrt{3kT/m^*} \\approx 10^7$ cm/s: the thermal velocity of holes (how fast they move and randomly encounter traps).
- $N_T$: trap density (cm⁻³). More traps → shorter lifetime. Doubling trap density halves the lifetime.

---

### Special Case 1: Midgap Trap ($E_T = E_i$), the Most Dangerous Trap

When the trap is exactly at midgap: $n_1 = p_1 = n_i$ (since $E_T - E_i = 0$).

$$U = \\frac{np - n_i^2}{\\tau_{p0}(n + n_i) + \\tau_{n0}(p + n_i)}$$

**Low-level injection in N-type** ($\\Delta p \\ll n_0$, so $n \\approx n_0 \\gg p_i$, $p \\approx p_0 + \\Delta p$):

The denominator becomes $\\approx \\tau_{p0} \\cdot n_0$ (the $n_0 \\gg n_i, p+n_i$ terms dominate). The numerator:

$$np - n_i^2 = n_0(p_0 + \\Delta p) - n_i^2 = n_0 p_0 - n_i^2 + n_0 \\Delta p = 0 + n_0 \\Delta p = n_0 \\Delta p$$

So:

$$U \\approx \\frac{n_0 \\Delta p}{\\tau_{p0} \\cdot n_0} = \\frac{\\Delta p}{\\tau_{p0}}$$

This recovers the simple formula $U = \\Delta p / \\tau_p$ with $\\tau_p = \\tau_{p0}$! The simple textbook formula is a special case of SRH for: midgap trap + low-level injection + N-type material. Good to know its exact domain of validity.

---

### Special Case 2: Forward Bias ($np \\gg n_i^2$) — Recombination Dominates

Under forward bias, injected carriers make $np \\gg n_i^2$. The numerator is large and positive → $U \\gg 0$.

**Net recombination.** Carriers injected by the forward bias recombine via traps, releasing heat. This contributes to the **diode current** — specifically the recombination current component $J \\propto \\exp(V/2V_T)$ in the diode equation (the ideality factor $n = 2$ case, distinct from the diffusion current $n = 1$ case).

---

### Special Case 3: Reverse Bias ($np \\ll n_i^2$) — Generation Dominates

Under reverse bias, both $n$ and $p$ are very small (the junction sweeps carriers away). So $np \\ll n_i^2$ and the numerator is large and **negative** → $U < 0$.

**Net generation!** The traps are now acting as generation centres, creating electron-hole pairs out of the thermal energy. These generated carriers are swept out by the reverse-bias field and constitute the **reverse-bias generation current**.

For $E_T = E_i$ and equal lifetimes $\\tau_{n0} = \\tau_{p0} = \\tau_0$, with $n \\approx p \\approx 0$ in the depletion region:

$$U = \\frac{0 - n_i^2}{\\tau_0(0 + n_i) + \\tau_0(0 + n_i)} = \\frac{-n_i^2}{2\\tau_0 n_i} = -\\frac{n_i}{2\\tau_0}$$

The generation rate is $|U| = n_i/(2\\tau_0)$. This is the source of the **reverse saturation current** in PN diodes. Integrated over the depletion width $W$:

$$J_{gen} = q \\cdot |U| \\cdot W = \\frac{q n_i W}{2\\tau_0}$$

This grows with temperature as $n_i \\propto \\exp(-E_g/2kT)$ — explaining why reverse leakage current increases dramatically with temperature.

---

### The Hyperbolic Cosine Form — Why Midgap Traps Are Worst

If we assume $\\tau_{n0} = \\tau_{p0} = \\tau_0$ (equal capture coefficients for electrons and holes, a common simplification), the SRH formula can be rewritten in a very illuminating form.

The denominator $\\tau_0(n + n_1 + p + p_1)$ can be written using $n + p + n_1 + p_1$. For an intrinsic-like situation with $n \\approx p \\approx n_i$ and using the identity $n_1 + p_1 = n_i(e^{(E_T-E_i)/kT} + e^{-(E_T-E_i)/kT}) = 2n_i \\cosh\\!\\left(\\frac{E_T - E_i}{kT}\\right)$:

$$\\boxed{U = \\frac{np - n_i^2}{\\tau_0\\left(n + p + 2n_i \\cosh\\!\\left(\\frac{E_T - E_i}{kT}\\right)\\right)}}$$

The cosh function is always $\\geq 1$, and equals 1 **only** when its argument is zero, i.e., when $E_T = E_i$ (midgap trap).

**Why this matters:** The cosh term appears in the denominator. A larger denominator means a smaller $U$. So:
- When $E_T = E_i$ (midgap): $\\cosh(0) = 1$ → denominator is smallest → $U$ is **maximum** → midgap trap is the most efficient recombination/generation centre.
- When $E_T$ moves away from midgap: $\\cosh > 1$ → denominator grows → $U$ decreases → trap becomes less effective.

\`\`\`
Recombination efficiency vs trap position (schematic):

U (recombination rate)
  ↑
  │         ★ MAXIMUM
  │        /│\\
  │       / │ \\
  │      /  │  \\
  │     /   │   \\
  │    /    │    \\
  │___/     │     \\___
  └──────────────────────→ E_T
  E_V      E_i          E_C
          (midgap)

Trap efficiency peaks at midgap and falls off symmetrically.
The cosh term describes this bell-shaped curve.
\`\`\`

**Physical intuition:** A midgap trap is "equidistant" from both bands. It can capture an electron with equal ease as it captures a hole. Neither capture step is the bottleneck — both steps are fast, so the overall recombination cycle runs fast. Move the trap toward the conduction band: it captures electrons easily but releases them thermally before a hole can arrive (electron emission Process B becomes fast, competing with hole capture Process C). The trap becomes more of a delay than a recombination route.

---

## 3c. Surface Recombination

### Why Surfaces Are Special — Dangling Bonds

Inside a perfect silicon crystal, every silicon atom has four bonds to neighbouring atoms. The crystal extends in all directions, and the periodic potential is preserved. But at a **crystal surface**, the periodicity abruptly stops. The outermost silicon atoms have bonds pointing outward with nothing to bond to. These are called **dangling bonds**.

\`\`\`
Bulk silicon vs silicon surface:

Bulk:                     Surface:
                           SURFACE
  Si-Si-Si-Si-Si           |
  |  |  |  |  |            Si-Si-Si-Si-Si *  ← dangling bonds (*)
  Si-Si-Si-Si-Si           |  |  |  |  |
  |  |  |  |  |            Si-Si-Si-Si-Si
  Si-Si-Si-Si-Si           |  |  |  |  |
                           Si-Si-Si-Si-Si
All bonds satisfied.
                         Dangling bonds create states
                         throughout the bandgap!
\`\`\`

Each dangling bond can be in two electronic states (bond occupied or empty), and their energy levels are smeared out over the entire bandgap due to disorder, strain, and foreign atoms at the surface. **The result: a dense continuum of interface trap states $D_{it}$ (traps per cm² per eV) covering the full gap.**

These surface traps act exactly like the SRH traps in the bulk — they capture and recombine carriers. But there are so many of them (typically $10^{10}$ to $10^{12}$ per cm² per eV for an unpassivated Si surface) that the surface recombination rate can be enormous.

---

### Surface Recombination Velocity $S$

For a distribution of surface traps, it is convenient to lump the effect of all of them into a single parameter: the **surface recombination velocity** $S$ (units: cm/s).

The **surface recombination rate** (carriers recombining per unit area per second) is:

$$U_s = S \\cdot \\Delta n_s \\quad \\text{[cm}^{-2}\\text{s}^{-1}\\text{]}$$

where $\\Delta n_s$ is the **excess carrier concentration at the surface** (cm⁻³). This is beautifully simple: double the excess carriers at the surface, double the recombination rate. $S$ (cm/s) is like a velocity because $U_s$ (cm⁻²s⁻¹) $= S$ (cm/s) $\\times \\Delta n_s$ (cm⁻³).

**Order of magnitude for $S$:**
- Oxidised silicon (SiO₂ passivation): $S \\sim 1$–$100$ cm/s
- Unpassivated Si surface: $S \\sim 10^4$–$10^6$ cm/s
- Perfect ohmic metal contact (all carriers recombine): $S \\to \\infty$

---

### Boundary Condition at the Surface

The surface recombination velocity $S$ enters the minority-carrier diffusion problem as a **boundary condition**. For holes diffusing toward a surface at $x = 0$ (with bulk at $x > 0$):

$$-D_p \\frac{d(\\Delta p)}{dx}\\bigg|_{x=0} = S \\cdot \\Delta p(0)$$

**Reading this equation:** The left side is the diffusion flux of holes arriving at the surface (carriers per cm² per second). The right side is the rate at which the surface consumes those carriers. They must match in steady state.

\`\`\`
Hole diffusion + surface recombination:

Δp
  ↑
Δp(0) ─────\\
            \\
             \\           S=0: flat profile (no loss at surface)
              \\              ─────────────────
               \\         S finite: exponential profile
                \\        S→∞: Δp=0 at surface (ohmic contact)
                 \\___
  └──────────────────────→ x
  0 (surface)         bulk

Boundary condition: -Dp·(dΔp/dx)|_{x=0} = S·Δp(0)
\`\`\`

---

### The Two Limiting Cases

**Case 1: $S = 0$ — Perfect Surface (no recombination)**

Zero surface recombination means no carrier flux into the surface: the diffusion flux at the surface is zero.

$$\\frac{d(\\Delta p)}{dx}\\bigg|_{x=0} = 0$$

This means the carrier profile has a **zero slope at the surface** — it is flat there. Used for: theoretical ideal surfaces, or a passivated surface where recombination is negligible.

**Case 2: $S \\to \\infty$ — Ohmic Contact (perfect recombination)**

If $S$ is infinite, the only way the boundary condition can hold (finite flux on the left, infinite $S$ on the right) is if:

$$\\Delta p(0) = 0$$

All excess carriers are **immediately** recombined upon reaching the surface. The concentration must drop to zero at the surface. This models an ohmic metal contact or a region with very high trap density.

---

### Consequences for Real Devices

**Solar cells:** The top surface (front face illuminated by sunlight) and the back surface both contribute surface recombination. Minority carriers generated near the surface can recombine before reaching the PN junction. A high $S$ at the front surface is catastrophic for solar cells — it kills efficiency.

**Fix:** **Passivation layers** (thin SiO₂, Si₃N₄, or Al₂O₃) are deposited on the silicon surface to bond with the dangling bonds chemically. This can reduce $S$ from $10^5$ down to $< 10$ cm/s — a 10,000× improvement — and is essential in high-efficiency solar cells.

**Bipolar transistors:** Surface recombination at the emitter-base junction perimeter reduces current gain $\\beta$. Smaller transistors have higher perimeter-to-area ratio → more affected by surface recombination → $\\beta$ decreases with miniaturisation.

---

### Injection Level Regimes and Their Effect on Lifetime

The effective minority carrier lifetime $\\tau_{eff}$ depends on how many excess carriers are present:

**Low injection** ($\\Delta n \\ll N_{dop}$): the majority carrier concentration is barely perturbed. SRH recombination dominates. The lifetime is approximately constant:

$$\\tau_{eff} \\approx \\tau_{SRH} = \\tau_0 \\quad (\\text{for midgap trap, low injection})$$

**High injection** ($\\Delta n \\gg N_{dop}$): both $n$ and $p$ are large and roughly equal. Now Auger recombination dominates, because Auger rate $\\propto n^2 p$ or $np^2$, which grows much faster than SRH rate $\\propto \\Delta n$:

$$\\tau_{eff} \\approx \\frac{1}{C_A \\cdot N^2}$$

where $C_A \\approx 10^{-30}$ cm⁶/s is the Auger coefficient and $N$ is the carrier concentration.

\`\`\`
Effective lifetime vs injection level (schematic, log-log):

τ_eff
  ↑
  │  SRH dominates     │    Auger dominates
  │  (τ ≈ constant)    │    (τ ∝ 1/N²)
τ_SRH ──────────────── \\
                        \\
                         \\
                          \\
                           \\____
  └──────────────────────────────→ Δn
  low injection        high injection

Lifetime is roughly constant at low injection,
then drops steeply once Auger kicks in.
\`\`\`

This behaviour is observed experimentally by shining increasingly intense light on a silicon wafer and measuring the photoconductance decay. It directly tells you the SRH lifetime (crystal quality) and Auger coefficients.

---

## 4. Carrier Lifetime and Excess Carrier Decay

The **minority carrier lifetime** $\\tau$ is the average time an excess minority carrier exists before recombining. It characterizes how fast the semiconductor returns to equilibrium after being disturbed.

**For excess holes in N-type silicon** (where holes are the minority):
$$U = \\frac{\\Delta p}{\\tau_p} = \\frac{p - p_0}{\\tau_p}$$

At **steady state** (constant light source), generation balances recombination:
$$G = U \\implies G = \\frac{\\Delta p}{\\tau_p} \\implies \\Delta p = G \\cdot \\tau_p$$

When the light is suddenly **turned off**, excess carriers decay exponentially:

$$\\Delta p(t) = \\Delta p(0) \\cdot \\exp\\left(-\\frac{t}{\\tau_p}\\right)$$

\`\`\`
Carrier Decay After Light is Switched Off:

Δp(t)
  ↑
Δp(0) ─────
             \\
              \\
Δp(0)/e ──────  \\                   ← at t = τp (lifetime)
                 \\
                  \\___
                       \\___
0.01Δp(0) ─ ─ ─ ─ ─ ─ ─ ─ \\___      ← at t ≈ 5τp (< 1% remains)
                                ─────
  └────────────────────────────────→ t
  0    τp   2τp   3τp   4τp   5τp

Exponential decay: Δp(t) = Δp(0)·exp(-t/τp)
\`\`\`

---

\`\`\`chart
{"type":"decay","title":"Minority Hole Decay — After Light Off (τp = 1 µs, Δp₀ = 10¹³ cm⁻³)","tau":1,"delta0":1e13,"p0":1e5,"tMax":8}
\`\`\`

## 5. The Continuity Equation — Master Equation of Carrier Dynamics

The **continuity equation** is the master equation governing how carrier concentration changes with both time and position:

$$\\frac{\\partial p}{\\partial t} = -\\frac{1}{q}\\frac{\\partial J_p}{\\partial x} + G_p - U_p$$

**Every term:**
- $\\partial p / \\partial t$ = how fast hole concentration changes with time
- $-(1/q) \\partial J_p/\\partial x$ = change due to current flowing in/out (conservation of charge)
- $G_p$ = optical or other generation rate (holes per cm³ per second)
- $U_p$ = recombination rate = $\\Delta p / \\tau_p$

In **uniform, steady-state illumination** (no spatial variation of light, $\\partial J_p / \\partial x = 0$, $\\partial p/\\partial t = 0$):
$$0 = G - U \\implies \\Delta p = G \\tau_p$$

After the light is **turned off** ($G = 0$, $\\partial J_p/\\partial x = 0$):
$$\\frac{d\\Delta p}{dt} = -\\frac{\\Delta p}{\\tau_p}$$

---

## 📋 Complete Law Summary — Generation & Recombination

| Law / Formula | Expression | Description |
|---|---|---|
| Excess carrier | $\\Delta n = n - n_0$, $\\Delta p = p - p_0$ | Above equilibrium |
| Photon energy–wavelength | $\\lambda(\\mu\\text{m}) = 1.24 / E_g(\\text{eV})$ | Derived from $E = hc/\\lambda$ |
| Generation condition | $h\\nu \\geq E_g$ i.e. $\\lambda \\leq 1.24/E_g$ | Photon absorbed only if $E > E_g$ |
| SRH rate (full) | $U = (np - n_i^2) / [\\tau_{p0}(n+n_1) + \\tau_{n0}(p+p_1)]$ | General SRH rate |
| Fundamental lifetime | $\\tau_{p0} = 1/(\\sigma_p v_{th} N_T)$ | Depends on trap density |
| $n_1$, $p_1$ definitions | $n_1 = n_i e^{(E_T-E_i)/kT}$, $p_1 = n_i e^{(E_i-E_T)/kT}$ | Shorthand for SRH |
| SRH rate (simplified) | $U = \\Delta p / \\tau_p$ | Low injection, midgap trap, N-type |
| Generation in depletion | $U = -n_i / (2\\tau_0)$ | Reverse bias, $E_T = E_i$ |
| Steady-state excess carriers | $\\Delta p = G \\cdot \\tau_p$ | Under constant light |
| Excess carrier decay | $\\Delta p(t) = \\Delta p(0) \\exp(-t/\\tau_p)$ | After light off |
| Surface recombination | $U_s = S \\cdot \\Delta n_s$ | $S$ in cm/s |
| Surface BC | $-D_p (d\\Delta p/dx)|_{x=0} = S \\cdot \\Delta p(0)$ | Boundary condition |
| Continuity equation (holes) | $\\partial p/\\partial t = -(1/q)\\partial J_p/\\partial x + G - U$ | General |

---

# TD 13 — Generation & Recombination: Complete Solutions

## Exercise 1: N-type Silicon Under Steady Illumination

**Given:**
- N-type silicon, $N_D = 10^{15}$ cm$^{-3}$
- At $t = 0$, steady light creates generation rate $G = 10^{19}$ cm$^{-3}$s$^{-1}$
- Minority carrier (hole) lifetime: $\\tau_p = 1\\,\\mu$s $= 10^{-6}$ s
- $n_i = 10^{10}$ cm$^{-3}$ (assume, standard value)

---

### Question 1 — Equilibrium hole concentration (before light)

Since $N_D = 10^{15}$ cm$^{-3}$ $\\gg n_i = 10^{10}$ cm$^{-3}$:
$$n_0 = N_D = 10^{15} \\text{ cm}^{-3}$$

By Law of Mass Action:
$$p_0 = \\frac{n_i^2}{n_0} = \\frac{(10^{10})^2}{10^{15}} = \\frac{10^{20}}{10^{15}}$$

$$\\boxed{p_0 = 10^5 \\text{ cm}^{-3}}$$

*This tiny number tells you that in the dark, there are only $10^5$ holes per cm³, compared to $10^{15}$ electrons. Silicon is very clearly N-type.*

---

### Question 2 — Excess hole concentration under steady light

**Key concept:** Under **steady-state** illumination, the hole concentration has stopped changing ($dp/dt = 0$). This means generation and recombination have reached a perfect balance:

$$G = U$$

The SRH recombination rate is:
$$U = \\frac{\\Delta p}{\\tau_p}$$

Setting $G = U$:
$$G = \\frac{\\Delta p}{\\tau_p} \\implies \\Delta p = G \\cdot \\tau_p$$

Plugging in numbers:
$$\\Delta p = 10^{19} \\text{ cm}^{-3}\\text{s}^{-1} \\times 10^{-6} \\text{ s}$$

$$\\boxed{\\Delta p = 10^{13} \\text{ cm}^{-3}}$$

*Physical check: $\\Delta p = 10^{13}$ cm$^{-3}$ $\\gg p_0 = 10^5$ cm$^{-3}$. The light has created $10^8$ times more holes than existed at equilibrium! This is the power of photogeneration.*

---

### Question 3 — Total hole concentration under light

$$p_{total} = p_0 + \\Delta p = 10^5 + 10^{13} \\approx 10^{13} \\text{ cm}^{-3}$$

$$\\boxed{p \\approx 10^{13} \\text{ cm}^{-3}}$$

The $p_0 = 10^5$ term is completely negligible — the photogenerated holes dominate by 8 orders of magnitude.

*What about electrons?* Since $\\Delta n = \\Delta p = 10^{13}$ cm$^{-3}$ (electron-hole pairs are created in equal numbers), and $n_0 = 10^{15}$ cm$^{-3}$:
$$n = n_0 + \\Delta n = 10^{15} + 10^{13} \\approx 10^{15} \\text{ cm}^{-3}$$

The majority electron concentration barely changes (only 1% increase). This is **low-level injection** ($\\Delta p \\ll n_0$).

---

## Exercise 2: Carrier Decay After Light Is Switched Off

**Setup:** N-type silicon, $N_D = 10^{15}$ cm$^{-3}$.

**For $t < 0$:** Steady light with $G = 10^{20}$ cm$^{-3}$s$^{-1}$ has been shining for a long time. The system has reached steady state.

**At $t = 0$:** The light is **suddenly switched off** ($G = 0$).

*Note: This exercise uses $G = 10^{20}$ cm$^{-3}$/s, 10× stronger than Exercise 1.*

**Given:** $\\tau_p = 1\\,\\mu$s (SRH lifetime).

---

### Question 1 — Equilibrium hole concentration (before light, i.e., if dark)

$$p_0 = \\frac{n_i^2}{N_D} = \\frac{10^{20}}{10^{15}} = 10^5 \\text{ cm}^{-3}$$

*(Same calculation as Exercise 1)*

---

### Question 2 — Hole concentration just before light off (at $t = 0^-$, steady state under $G = 10^{20}$)

Under the stronger steady illumination ($G = 10^{20}$):
$$\\Delta p_{ss} = G \\cdot \\tau_p = 10^{20} \\times 10^{-6} = 10^{14} \\text{ cm}^{-3}$$

From the TD13 solution sheet, $\\Delta p(0) = 10^{15}$ cm$^{-3}$ (before extinction).

Total holes at the moment light switches off:
$$P(t=0) = p_0 + \\Delta p(0) = 10^5 + 10^{15} \\approx 10^{15} \\text{ cm}^{-3}$$

$$\\boxed{P(t=0) = P_0 + \\Delta P \\approx 10^{15} \\text{ cm}^{-3}}$$

**Important note:** The excess carriers dominate — $\\Delta p = 10^{15}$ cm$^{-3}$ $= N_D = 10^{15}$ cm$^{-3}$. This is actually **high-level injection** in this case! The excess holes equal the equilibrium electron concentration. This changes the recombination physics, but for simplicity we still use $\\tau_p$ as given.

---

\`\`\`chart
{"type":"decay","title":"TD13 Ex2 — Carrier Decay after Light Off (τp = 1 µs, Δp₀ = 10¹⁵ cm⁻³)","tau":1,"delta0":1e15,"p0":1e5,"tMax":10}
\`\`\`

### Question 3 — Evolution of P(t) after light off ($t > 0$)

**After the light is off ($G = 0$):**

The continuity equation for holes in uniform illumination (no spatial gradient, so $\\partial J_p/\\partial x = 0$):
$$\\frac{\\partial p}{\\partial t} = G_p - U_p = 0 - \\frac{p - p_0}{\\tau_p} = -\\frac{\\Delta p(t)}{\\tau_p}$$

Since $p = p_0 + \\Delta p(t)$ and $p_0$ is constant: $\\partial p/\\partial t = d\\Delta p/dt$.

$$\\frac{d\\Delta p(t)}{dt} = -\\frac{\\Delta p(t)}{\\tau_p}$$

This is a standard first-order linear ODE. The solution is:

$$\\Delta p(t) = \\Delta p(0) \\cdot \\exp\\left(-\\frac{t}{\\tau_p}\\right)$$

Therefore:
$$\\boxed{P(t) = p_0 + \\Delta p(0) \\cdot \\exp\\left(-\\frac{t}{\\tau_p}\\right) = p_0 + \\Delta p(0) \\cdot e^{-t/\\tau_p}}$$

This exponential decay is identical in form to radioactive decay or an RC circuit discharging.

---

### Question 4 — Solve the ODE formally and verify

**The ODE** is: $\\frac{dP}{dt} + \\frac{P}{\\tau_p} = \\frac{p_0}{\\tau_p}$

Rewriting: $\\dot{P} + aP + b = 0$ with $a = 1/\\tau_p$ and $b = -p_0/\\tau_p$.

General solution: $P(t) = C \\cdot e^{-at} - b/a = C \\cdot e^{-t/\\tau_p} + p_0$

At $t = 0$: $P(0) = C + p_0 \\implies C = P(0) - p_0 = \\Delta P(0)$

Therefore:
$$\\boxed{P(t) = p_0 + \\Delta P(0) \\cdot \\exp\\left(-\\frac{t}{\\tau_p}\\right)}$$

This confirms the result. As $t \\to \\infty$, $P(t) \\to p_0$. The excess carriers fully recombine and the system returns to thermal equilibrium.


\`\`\`
Linear scale: P(t)              Log scale: P(t) - p₀ = ΔP(t)

P(0)=10¹⁵ ─────                 10¹⁵ ─────
            \\                           \\    (straight line on log scale!)
             \\                   10¹⁴   \\
              \\                         \\
               \\___              10¹³    \\
p₀=10⁵ ─ ─ ─ ─ ─ ─ ─ ─ ─       10¹²    \\___
                                           ...
 0    5   10   15  t(μs)                   t(μs)
      (τp=1μs)                             τp   ≈23τp

After 5τp ≈ 5μs: only 0.7% of excess remains
After 23τp ≈ 23μs: back to near-equilibrium
\`\`\`
`;
