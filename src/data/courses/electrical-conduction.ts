export const electricalConductionContent = `
# Electrical Conduction in Semiconductors

## The Big Picture: Two Ways Charges Can Move

In a semiconductor, there are exactly **two distinct mechanisms** by which charge carriers (electrons and holes) can move and create an electric current:

1. **Drift** — carriers move because an electric field pushes them
2. **Diffusion** — carriers move because of a concentration difference

Understanding both mechanisms — and how they combine — is the foundation for understanding every semiconductor device ever built.

---

## 1. Drift — Motion Driven by Electric Field

### How Electrons Move in a Crystal Under an Electric Field

Imagine an electron in a silicon crystal with an electric field applied. The field creates a force $F = -q\\mathcal{E}$ (negative because electrons are negatively charged, they move opposite to the field direction). But the electron doesn't just accelerate endlessly — it constantly crashes into:

- Vibrating silicon atoms (**lattice scattering** or **phonon scattering**) — more collisions at higher temperature
- Impurity atoms (**impurity scattering**) — important in heavily doped silicon

Each collision randomizes the electron's velocity. The result is that the electron achieves a steady average drift velocity superimposed on its random thermal motion:

$$v_d = -\\mu_n \\mathcal{E} \\quad \\text{(for electrons)}$$

$$v_d = +\\mu_p \\mathcal{E} \\quad \\text{(for holes)}$$

\`\`\`
Electron motion in an electric field (simplified):

No field:   ←  →  ↑  ↓  ←  ↗  (random thermal motion, no net drift)

With field: ←→ ↑↓ ←↗ ←  ←  ← (random motion + slow net drift to LEFT,
 E →                              opposite to field for electrons)

Average drift velocity = μₙ × |E|  (slow compared to thermal velocity)
\`\`\`

### Mobility ($\\mu$) — The Key Transport Parameter

**Mobility** measures how easily carriers move through the crystal in response to an electric field:

$$\\mu = \\frac{|v_d|}{|\\mathcal{E}|}$$

Unit: cm²/(V·s). Higher mobility → carriers respond more strongly to a given field → more conductive material.

**Silicon values at 300K:**
- Electron mobility: $\\mu_n = 1350$ cm²/(V·s)
- Hole mobility: $\\mu_p = 480$ cm²/(V·s)

Electrons are roughly 3× more mobile than holes in silicon (because $m_e^* > m_h^*$ but scattering rates differ — the physics is detailed).

**Why does mobility decrease with temperature?**
At higher temperature, the silicon atoms vibrate more violently (more lattice scattering). The electrons crash into vibrating atoms more often → shorter mean free time → lower mobility.

**Why does mobility decrease with heavy doping?**
More dopant ions in the crystal → more impurity scattering centers → lower mobility. This is why heavily doped silicon has lower mobility than lightly doped silicon.

### Drift Current Density

Current density $J$ (current per unit area, A/cm²) from drift:

Both electrons and holes contribute. Electrons drift opposite to $\\mathcal{E}$ (because negative charge), but they carry negative charge in that direction, so the current (conventional) flows **in the same direction as $\\mathcal{E}$**. Similarly, holes drift in the direction of $\\mathcal{E}$, and they carry positive charge, so their current also flows **in the direction of $\\mathcal{E}$**. Both contributions add up:

$$J_{drift} = q(n\\mu_n + p\\mu_p)\\mathcal{E} = \\sigma \\mathcal{E}$$

Where $\\sigma$ is the **electrical conductivity** (S/cm):

$$\\sigma = q(n\\mu_n + p\\mu_p)$$

And the **resistivity** $\\rho = 1/\\sigma$ (Ω·cm).

**Ohm's Law at microscopic level:** $J = \\sigma \\mathcal{E}$ is exactly Ohm's law at the material level, connecting to $V = RI$ at the circuit level.

---

## 2. Diffusion — Motion Driven by Concentration Gradient

### The Core Idea: Crowds Spread Out

Fill one side of a room with perfume molecules. The molecules move randomly due to thermal energy. Because the left side has many molecules and the right has none, there are statistically far more collisions pushing molecules to the right than to the left. The net result: molecules spread out (diffuse) from high concentration to low concentration.

This happens with no force, no electric field. Just random thermal motion + a concentration difference.

For electrons, the diffusion current density is:

$$J_{diff,n} = qD_n \\frac{dn}{dx}$$

For holes:

$$J_{diff,p} = -qD_p \\frac{dp}{dx}$$

*Note the minus sign for holes: holes diffuse from high $p$ to low $p$ (positive $dp/dx$ gradient means holes flow to the left, negative $x$ direction, so the current is negative.)*

**Every symbol explained:**
- $D_n$, $D_p$ = **Diffusion Coefficients** (cm²/s) — how fast carriers diffuse
- $dn/dx$, $dp/dx$ = **concentration gradient** (how rapidly the concentration changes with position, cm$^{-4}$) — the "driving force" of diffusion

\`\`\`
Diffusion of electrons (high → low concentration):

Concentration
  ↑
n │████                     (many electrons here)
  │    ████
  │        ████              net flow of electrons →
  │            ████
  │                ████     (fewer electrons here)
  └──────────────────────→ x

dn/dx > 0 here, so electron current J = qDₙ(dn/dx) flows to the RIGHT
\`\`\`

---

## 3. The Einstein Relation — Connecting Drift and Diffusion

Albert Einstein proved a beautiful, deep connection: **drift and diffusion are not independent processes**. They are both governed by the same underlying physics — thermal scattering in the crystal lattice. Therefore, the mobility $\\mu$ and the diffusion coefficient $D$ must be related.

The **Einstein Relation:**

$$\\boxed{\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = \\frac{kT}{q} = V_T}$$

Where $V_T = kT/q$ is the **thermal voltage**.

At room temperature ($T = 300K$):
$$V_T = \\frac{kT}{q} = \\frac{0.026 \\text{ eV}}{1} = 26 \\text{ mV}$$

*(Remember: in eV, $q$ cancels, giving $V_T = kT$ in eV = 0.026 V = 26 mV)*

**Physical origin:** Both $\\mu$ and $D$ are determined by how often carriers are scattered (collide). More scattering → lower $\\mu$ → lower $D$. Their ratio always gives $kT/q$ because that ratio eliminates the scattering-rate dependence.

---

## 4. Total Current — Adding Drift and Diffusion

The total current density for each carrier type is:

$$J_n = qn\\mu_n\\mathcal{E} + qD_n\\frac{dn}{dx}$$
$$J_p = qp\\mu_p\\mathcal{E} - qD_p\\frac{dp}{dx}$$

And the total current density is:
$$J_{total} = J_n + J_p$$

**At thermal equilibrium (no light, no external fields applied):** $J_{total} = 0$. This means drift and diffusion exactly cancel each other for each carrier type. This is how we know the PN junction's built-in field is in equilibrium — it creates a drift force exactly balancing the diffusion tendency.

---

## 5. The Hall Effect — Measuring Carrier Concentration Directly

### The Setup

The Hall effect is an experimental technique that allows you to directly measure the carrier concentration $n$ (or $p$) and the type of semiconductor (N-type or P-type) from simple electrical measurements.

**Geometry:** A rectangular semiconductor bar carries a current $I$ in the $x$-direction. A magnetic field $B$ is applied in the $z$-direction (perpendicular to the current).

\`\`\`
Hall Effect Setup:

         z ↑  B (magnetic field, pointing up)
           |
     ══════════════════
    |  + + + + + + +  |   ← accumulated holes (+ charges)
    |                  |
V_A ─→ I  →  →  →  → ─── U_H measured here
    |    v_d           |
    |  - - - - - - -  |   ← accumulated electrons (- charges)
     ══════════════════
           |
          1 (bottom face)   2 (top face)
           ←── Width W ──→
               ↕ d (thickness)
\`\`\`

### Physics of the Hall Effect (Step by Step)

**Step 1 — Lorentz Force deflects carriers:**

A moving charge in a magnetic field experiences the **Lorentz force**:
$$\\vec{F}_L = q(\\vec{v} \\times \\vec{B})$$

For electrons moving in the $+x$ direction with drift velocity $v_d$, with $B$ in the $+z$ direction:
$$\\vec{F}_L = (-q)(v_d \\hat{x} \\times B\\hat{z}) = (-q)(v_d B)(\\hat{x} \\times \\hat{z}) = (-q)(v_d B)(-\\hat{y}) = +qv_dB\\hat{y}$$

So electrons are pushed in the $+y$ direction (upward). They accumulate on the top face.

**Step 2 — Charge buildup creates Hall field:**

As electrons pile up on the top, the top face becomes negatively charged. The bottom becomes positively charged (depleted of electrons). This charge separation creates a **Hall Electric Field** $\\mathcal{E}_H$ pointing from bottom (+) to top (−), i.e., in the $+y$ direction.

**Step 3 — Equilibrium:**

The Hall field $\\mathcal{E}_H$ pushes electrons back down (force $= q\\mathcal{E}_H$ downward for electrons with negative charge... wait, $\\mathcal{E}_H$ is in $+y$, force on electron is $-q\\mathcal{E}_H$ in $+y$ = $q|\\mathcal{E}_H|$ in $-y$ direction). At equilibrium, the two forces balance:

$$|\\vec{F}_{\\mathcal{E}}| = |\\vec{F}_L| \\implies q\\mathcal{E}_H = qv_dB$$
$$\\implies \\mathcal{E}_H = v_dB$$

**Step 4 — Relate to measurable quantities:**

The current density: $J = nqv_d$ (in the $x$-direction)

So $v_d = J/(nq)$.

The Hall voltage measured across the width $W$:
$$U_H = \\mathcal{E}_H \\cdot W = v_dBW = \\frac{J}{nq}BW$$

Since $J = I/(W \\cdot d)$ (current $I$ divided by cross-section area):
$$v_d = \\frac{I}{nqWd}$$

$$U_H = \\frac{I \\cdot B \\cdot W}{nqWd} = \\frac{1}{nq}\\frac{I \\cdot B}{d}$$

Defining the **Hall Coefficient** $R_H$:

$$\\boxed{R_H = -\\frac{1}{nq} \\quad \\text{(for n-type, electrons majority)}}$$

$$\\boxed{U_H = R_H \\frac{I \\cdot B}{d}}$$

The sign of $R_H$ tells you the carrier type: negative $R_H$ means N-type (electrons); positive $R_H$ means P-type (holes).

From experimental measurement of $U_H$, $I$, $B$, and $d$, you can calculate $R_H$ and then determine $n$:
$$n = \\frac{-1}{qR_H}$$

---

## 6. Quasi-Fermi Levels — When Equilibrium is Broken

In thermal equilibrium, one single Fermi level $E_F$ describes both electrons and holes. But what happens when you disturb the semiconductor — for example, by shining light on it?

Under illumination, electron-hole pairs are created. The number of electrons and holes is no longer determined by thermal equilibrium alone. The system is **out of equilibrium**.

We can no longer use a single $E_F$. Instead, we define two separate **Quasi-Fermi Levels** (also called imref levels):
- $E_{FN}$ (or $F_n$) = quasi-Fermi level for **electrons**
- $E_{FP}$ (or $F_p$) = quasi-Fermi level for **holes**

The carrier concentrations are now:

$$n = N_C \\exp\\left(-\\frac{E_C - E_{FN}}{kT}\\right)$$
$$p = N_V \\exp\\left(-\\frac{E_F P - E_V}{kT}\\right)$$

**Interpretation:**
- $E_{FN}$ moves closer to $E_C$ when there are more electrons than equilibrium (excess electrons)
- $E_{FP}$ moves closer to $E_V$ when there are more holes than equilibrium (excess holes)
- The separation $(E_{FN} - E_{FP}) > 0$ represents the "chemical energy" injected by the light source

\`\`\`
Quasi-Fermi Levels under Illumination:

Before illumination:          After illumination:
E_C ══════════════           E_C ══════════════
E_F ─────────────            E_FN ─────────────  ← slightly above E_F
                              E_F ─── ─── ─── (reference only)
E_i ─ ─ ─ ─ ─ ─ ─           E_i ─ ─ ─ ─ ─ ─ ─
                              E_FP ─────────────  ← far below E_F!
E_V ══════════════           E_V ══════════════

For N-type under light injection:
- E_FN barely moves (majority carriers barely change)
- E_FP drops dramatically (minority carriers increase enormously)
\`\`\`

---

## 📋 Complete Law Summary — Electrical Conduction

| Law / Formula | Expression | Description |
|---|---|---|
| Drift velocity | $v_d = \\mu \\mathcal{E}$ | Carrier velocity in field |
| Mobility (electrons) | $\\mu_n = 1350$ cm²/V·s (Si) | Electron ease of movement |
| Mobility (holes) | $\\mu_p = 480$ cm²/V·s (Si) | Hole ease of movement |
| Drift current (total) | $J_{drift} = q(n\\mu_n + p\\mu_p)\\mathcal{E}$ | Drift current density |
| Conductivity | $\\sigma = q(n\\mu_n + p\\mu_p)$ | Material conductivity |
| Resistivity | $\\rho = 1/\\sigma$ | Material resistivity (Ω·cm) |
| Resistance | $R = \\rho \\cdot L/S$ | Resistance of sample |
| Diffusion current (electrons) | $J_{diff,n} = qD_n\\, dn/dx$ | Electron diffusion current |
| Diffusion current (holes) | $J_{diff,p} = -qD_p\\, dp/dx$ | Hole diffusion current |
| Einstein relation | $D/\\mu = kT/q = V_T$ | Links diffusion and mobility |
| Thermal voltage | $V_T = kT/q = 26$ mV at 300K | Fundamental thermal scale |
| Total electron current | $J_n = qn\\mu_n\\mathcal{E} + qD_n\\, dn/dx$ | Both mechanisms |
| Total hole current | $J_p = qp\\mu_p\\mathcal{E} - qD_p\\, dp/dx$ | Both mechanisms |
| Hall coefficient | $R_H = -1/(nq)$ for n-type | From Hall measurement |
| Hall voltage | $U_H = R_H \\cdot IB/d$ | Measured Hall voltage |
| Electron quasi-Fermi | $n = N_C\\exp(-(E_C-E_{FN})/kT)$ | Out of equilibrium |
| Hole quasi-Fermi | $p = N_V\\exp(-(E_{FP}-E_V)/kT)$ | Out of equilibrium |
| Quasi-Fermi separation | $E_{FN}-E_{FP} = kT\\ln(np/n_i^2)$ | Measure of injection |

---

## 7. Matthiessen's Rule — Why Scattering Rates Add Up

### The Mean Free Time $\\tau_c$ — How Long Between Crashes?

Before we can go deeper into mobility, we need one key concept: the **relaxation time** (or **mean free time**) $\\tau_c$.

Think of an electron surfing through a crystal. Between collisions, it moves freely. Each collision randomizes its velocity back to a random direction. The mean free time $\\tau_c$ is the **average time the electron travels between successive collisions**.

Typical value in silicon at room temperature: $\\tau_c \\approx 10^{-12}$ to $10^{-13}$ seconds. That's a picosecond — unimaginably short.

Now, in a real crystal, there are **multiple independent scattering mechanisms** acting simultaneously:

1. **Phonon scattering** (lattice scattering): The silicon atoms vibrate due to thermal energy. These vibrations are quantized into packets called **phonons**. An electron travelling through the lattice can collide with a phonon — the vibrating atom knocks it off course. At higher temperature, atoms vibrate more violently → more phonons → more collisions.

2. **Impurity scattering**: Every ionized dopant atom (donor $N_D^+$ or acceptor $N_A^-$) is a charged impurity sitting in the lattice. As an electron flies past, the Coulomb force from this charged ion deflects it. More dopants → more deflections.

3. **Defect scattering**: Crystal defects (vacancies, dislocations) also scatter carriers. Usually minor in high-quality silicon but important in damaged or polycrystalline material.

Each mechanism has its own characteristic mean free time:
- $\\tau_{ph}$: average time between phonon collisions
- $\\tau_{imp}$: average time between impurity collisions
- $\\tau_{def}$: average time between defect collisions

### The Matthiessen Rule: Rates Add, Not Times

Here is the crucial physical question: if phonon collisions happen at rate $1/\\tau_{ph}$ and impurity collisions happen at **independent** rate $1/\\tau_{imp}$, what is the **total** collision rate?

**Answer:** The rates simply add.

Analogy: Suppose you're playing a video game. Obstacles fly at you at a rate of 10 per second, and enemies shoot at you at a rate of 5 per second. These are independent events. You get hit at a total rate of $10 + 5 = 15$ per second. Your average survival time is $1/15$ s. You do NOT add the survival times ($1/10 + 1/5$ would give you $0.3$ s, which is wrong).

Mathematically, for independent Poisson processes:

$$\\boxed{\\frac{1}{\\tau_{total}} = \\frac{1}{\\tau_{ph}} + \\frac{1}{\\tau_{imp}} + \\frac{1}{\\tau_{def}} + \\cdots}$$

This is **Matthiessen's Rule** (1864, Augustus Matthiessen, British chemist).

Since mobility is $\\mu = q\\tau_c / m^*$, and $m^*$ and $q$ are fixed, dividing Matthiessen's rule by $q/m^*$ gives the equivalent rule **for mobility**:

$$\\boxed{\\frac{1}{\\mu_{total}} = \\frac{1}{\\mu_{lattice}} + \\frac{1}{\\mu_{impurity}} + \\frac{1}{\\mu_{defect}} + \\cdots}$$

This is immensely practical: you can compute each contribution separately, then combine them by adding their reciprocals.

### Temperature Dependence of Each Mechanism

**Phonon scattering — $\\mu_{lattice} \\propto T^{-3/2}$:**

At higher temperature, two things happen: (1) there are more phonons (more lattice vibrations to collide with), and (2) each phonon carries more energy. The detailed calculation (Boltzmann transport theory) gives:

$$\\mu_{lattice} \\propto T^{-3/2}$$

Higher temperature → lower lattice-limited mobility. This is why silicon transistors run slower when hot.

**Impurity scattering — $\\mu_{impurity} \\propto T^{+3/2}$:**

This one is counter-intuitive: higher temperature actually **increases** impurity-limited mobility. Why?

At higher temperature, electrons move faster (higher thermal velocity $v_{th} \\propto T^{1/2}$). A fast-moving electron spends **less time** in the vicinity of an impurity ion. Less time near the ion → weaker Coulomb deflection → less effective scattering. The detailed Brooks–Herring theory gives:

$$\\mu_{impurity} \\propto T^{+3/2}$$

**The combination — a mobility minimum:**

\`\`\`
Mobility
(log scale)
    ↑
    │   μ_lattice ∝ T^(-3/2)         μ_impurity ∝ T^(+3/2)
    │         \\                         /
    │           \\                     /
    │             \\                 /
    │               \\    μ_total  /
    │                 \\    ╱╲   /
    │                   \\/    \\/
    │                    minimum
    │
    └─────────────────────────────────→ Temperature (K)
        low T                 high T
\`\`\`

At low temperature: impurity scattering dominates (carriers are slow, spend long time near ions). $\\mu_{total} \\approx \\mu_{impurity}$ — rises with T.

At high temperature: phonon scattering dominates (many phonons). $\\mu_{total} \\approx \\mu_{lattice}$ — falls with T.

In between: there is a **maximum mobility** at some intermediate temperature (or equivalently, a **minimum resistivity**). In lightly doped silicon, the maximum occurs near or above 300K.

**Practical consequence:** The standard silicon mobilities quoted ($\\mu_n = 1350$, $\\mu_p = 480$ cm²/V·s) are the total measured values at 300K for lightly doped material, where phonon scattering dominates.

---

## 8. Thermal Velocity — How Fast Electrons Really Move

### Electrons Are Never Stationary

One of the most important (and surprising) facts in semiconductor physics: **even with no electric field applied, electrons are not standing still**. They are zooming around at enormous speeds due to their thermal energy, constantly bouncing off lattice atoms, changing direction, but going nowhere on average.

This is exactly like gas molecules in a room: they travel at hundreds of meters per second, but the room doesn't move because the velocities are random in all directions.

### The Equipartition Theorem

From statistical mechanics, the **equipartition theorem** states that each degree of freedom of a particle in thermal equilibrium carries average kinetic energy $\\frac{1}{2}kT$.

An electron in 3D has 3 translational degrees of freedom (motion in $x$, $y$, $z$). Therefore its total average kinetic energy is:

$$\\frac{1}{2}m_e^* v_{th}^2 = \\frac{3}{2}kT$$

where $m_e^*$ is the effective mass of the electron in the crystal (accounts for how the periodic crystal potential modifies the electron's inertia).

Solving for the **thermal velocity** $v_{th}$:

$$\\boxed{v_{th} = \\sqrt{\\frac{3kT}{m_e^*}}}$$

### Numerical Calculation for Silicon at 300K

For silicon: $m_e^* = 1.08 \\, m_0$ where $m_0 = 9.11 \\times 10^{-31}$ kg is the free electron mass.

The thermal energy at 300K: $kT = 0.026 \\, \\text{eV} = 0.026 \\times 1.6 \\times 10^{-19} = 4.16 \\times 10^{-21}$ J.

$$v_{th} = \\sqrt{\\frac{3 \\times 4.16 \\times 10^{-21}}{1.08 \\times 9.11 \\times 10^{-31}}} = \\sqrt{\\frac{1.248 \\times 10^{-20}}{9.84 \\times 10^{-31}}}$$

$$v_{th} = \\sqrt{1.268 \\times 10^{10}} \\approx 1.13 \\times 10^5 \\text{ m/s} = 1.13 \\times 10^7 \\text{ cm/s}$$

$$\\boxed{v_{th} \\approx 10^7 \\text{ cm/s} = 100{,}000 \\text{ m/s}}$$

That is **100 km/s** — about 0.03% the speed of light. This is an enormous speed for a particle inside a 1 mm chip.

### Mean Free Path

The **mean free path** $l$ is the average distance an electron travels between collisions:

$$l = v_{th} \\cdot \\tau_c$$

With $\\tau_c \\approx 10^{-12}$ to $10^{-13}$ s:

$$l = 10^7 \\text{ cm/s} \\times 10^{-12} \\text{ s} = 10^{-5} \\text{ cm} = 100 \\text{ nm}$$
$$l = 10^7 \\text{ cm/s} \\times 10^{-13} \\text{ s} = 10^{-6} \\text{ cm} = 10 \\text{ nm}$$

So the mean free path is roughly **10 to 100 nm**. In modern transistors with gate lengths of 5–10 nm, electrons may cross the entire channel without a single collision — this is the **ballistic transport** regime where classical drift-diffusion theory breaks down.

### Drift vs. Thermal Velocity — The Key Comparison

Now compare to the typical **drift velocity** under a moderate electric field. Say $\\mathcal{E} = 100$ V/cm (a reasonable field inside a transistor):

$$v_d = \\mu_n \\mathcal{E} = 1350 \\times 100 = 1.35 \\times 10^5 \\text{ cm/s} = 1350 \\text{ m/s}$$

Compare:
$$v_{th} \\approx 10^7 \\text{ cm/s} \\quad \\text{vs.} \\quad v_d \\approx 10^5 \\text{ cm/s}$$

$$\\frac{v_{th}}{v_d} \\approx 100$$

**Thermal velocity is 100 times larger than drift velocity** under a typical field. The drift is a tiny, barely perceptible bias superimposed on the wild random thermal motion.

\`\`\`
Visual analogy: drunk-walk in a strong wind

Without field:   ← ↗ ↓ → ↖ ↓ ↗ ←   (random, net displacement ≈ 0)

With E field:    ← ↗ ↓ → ↖ ↓ ↗ ←
                    (all steps slightly biased to the right)
                 net drift → (tiny compared to step size)

The "steps" are v_th ≈ 10^7 cm/s
The net drift is v_d ≈ 10^5 cm/s
The bias is only ~1% of the step size!
\`\`\`

This is why Ohm's law is linear at moderate fields: the drift is a small perturbation on the thermal motion, and the scattering rates (which depend on $v_{th}$, not $v_d$) are essentially unaffected by the field.

---

## 9. Drift Velocity — The Full Derivation from Newton's Law

### Setting Up the Physics

The qualitative picture of drift is clear: field accelerates electron, collision resets velocity, repeat. But let's derive the drift velocity **rigorously** from Newton's second law.

Between collisions, the electron obeys:
$$m_e^* \\frac{dv}{dt} = (-q)\\mathcal{E}$$

where $-q$ is the electron charge (negative). For an electron starting from rest at $t = 0$ (just after a collision), the velocity grows linearly with time:

$$v(t) = -\\frac{q \\mathcal{E}}{m_e^*} \\cdot t$$

*(Taking the field $\\mathcal{E}$ in the $+x$ direction, the velocity grows in the $-x$ direction for electrons — they accelerate opposite to the field.)*

### The Scattering Statistics

When does the next collision happen? Collisions are random events with a constant average rate $1/\\tau_c$. This is exactly like radioactive decay: the probability that an electron has **not yet** scattered at time $t$ after its last collision is:

$$P(\\text{not yet scattered at time } t) = e^{-t/\\tau_c}$$

The probability density for the time-to-next-collision is:

$$f(t) = \\frac{1}{\\tau_c} e^{-t/\\tau_c}$$

*(Check: $\\int_0^\\infty f(t)\\,dt = 1$ ✓)*

This is the **exponential distribution** with mean $\\tau_c$ (hence the name "mean free time").

\`\`\`
Sawtooth velocity graph — one electron over time:

v (cm/s)
  ↑
  0 ──────────────────────────────────────→ t
     \\         \\           \\
      \\         \\           \\    (velocity grows linearly between collisions)
       ×─────── ×─────────── ×──  (× = scattering event, velocity resets to ~0)

At each scattering event, velocity is randomized.
The AVERAGE of this sawtooth pattern gives the drift velocity.
\`\`\`

### Computing the Average Drift Velocity

The drift velocity is the **time-average** of $v(t)$, weighted by the probability that the electron has not yet scattered:

$$v_d = \\int_0^\\infty v(t) \\cdot f(t) \\, dt = \\int_0^\\infty \\left(-\\frac{q\\mathcal{E}}{m_e^*}\\right) t \\cdot \\frac{1}{\\tau_c} e^{-t/\\tau_c} \\, dt$$

$$v_d = -\\frac{q\\mathcal{E}}{m_e^* \\tau_c} \\int_0^\\infty t \\, e^{-t/\\tau_c} \\, dt$$

The integral $\\int_0^\\infty t \\, e^{-t/\\tau_c} \\, dt$ is a standard result. Let $u = t/\\tau_c$, then $t = \\tau_c u$, $dt = \\tau_c \\, du$:

$$\\int_0^\\infty t \\, e^{-t/\\tau_c} \\, dt = \\tau_c^2 \\int_0^\\infty u \\, e^{-u} \\, du = \\tau_c^2 \\cdot \\Gamma(2) = \\tau_c^2 \\cdot 1 = \\tau_c^2$$

*(Here $\\Gamma(2) = 1! = 1$ is the Gamma function value.)*

Therefore:

$$v_d = -\\frac{q\\mathcal{E}}{m_e^* \\tau_c} \\cdot \\tau_c^2 = -\\frac{q\\tau_c}{m_e^*} \\mathcal{E}$$

Comparing with the definition $v_d = -\\mu_n \\mathcal{E}$, we identify:

$$\\boxed{\\mu_n = \\frac{q \\tau_c}{m_e^*}}$$

This is the **microscopic formula for mobility**. Mobility is high when:
- $\\tau_c$ is large (few collisions — pure crystal, low temperature)
- $m_e^*$ is small (light effective mass — easy to accelerate)

### Numerical Verification for Silicon

For silicon conduction band electrons: $m_e^* = 0.26 \\, m_0 = 0.26 \\times 9.11 \\times 10^{-31} = 2.37 \\times 10^{-31}$ kg.

Take $\\tau_c = 2.5 \\times 10^{-13}$ s (a typical value):

$$\\mu_n = \\frac{q\\tau_c}{m_e^*} = \\frac{1.6 \\times 10^{-19} \\times 2.5 \\times 10^{-13}}{2.37 \\times 10^{-31}}$$

$$= \\frac{4.0 \\times 10^{-32}}{2.37 \\times 10^{-31}} = 0.169 \\text{ m}^2/\\text{V·s} = 1690 \\text{ cm}^2/\\text{V·s}$$

This is in the right ballpark of the measured $\\mu_n = 1350$ cm²/V·s! The small discrepancy comes from using a simplified isotropic effective mass; silicon actually has an anisotropic conduction band.

---

## 10. Poisson's Equation — How Charges Create Electric Fields

### Gauss's Law Inside a Material

You may know Gauss's law from electrostatics: the electric field diverges from positive charges. Inside a semiconductor material with dielectric constant $\\varepsilon_s$, Gauss's law becomes:

$$\\nabla \\cdot (\\varepsilon_s \\mathcal{E}) = \\rho$$

where $\\rho$ is the **net charge density** (C/cm³). In 1D this is $\\varepsilon_s \\, d\\mathcal{E}/dx = \\rho$.

What contributes to the net charge density? In a semiconductor, four types of charges are present:

| Charge type | Symbol | Sign | Contribution to $\\rho$ |
|---|---|---|---|
| Free holes | $p$ (cm$^{-3}$) | positive | $+qp$ |
| Free electrons | $n$ (cm$^{-3}$) | negative | $-qn$ |
| Ionized donors | $N_D^+$ (cm$^{-3}$) | positive | $+qN_D^+$ |
| Ionized acceptors | $N_A^-$ (cm$^{-3}$) | negative | $-qN_A^-$ |

So the total net charge density is:

$$\\rho = q(p - n + N_D^+ - N_A^-)$$

At room temperature, essentially all dopants are ionized ($N_D^+ \\approx N_D$, $N_A^- \\approx N_A$), so we write:

$$\\rho = q(p - n + N_D - N_A)$$

### Poisson's Equation

Since the electric field is the negative gradient of the electrostatic potential $\\phi$: $\\mathcal{E} = -d\\phi/dx$, Gauss's law $\\varepsilon_s \\, d\\mathcal{E}/dx = \\rho$ becomes:

$$\\boxed{\\frac{d^2\\phi}{dx^2} = -\\frac{\\rho}{\\varepsilon_s} = -\\frac{q}{\\varepsilon_s}(p - n + N_D - N_A)}$$

This is **Poisson's equation** in 1D (named after Siméon Denis Poisson, 1823). It tells you how the electrostatic potential curves in space depending on the local charge density.

**Physical interpretation:**
- Where $\\rho > 0$ (net positive charge): $d^2\\phi/dx^2 < 0$ → the potential curves **downward** (like a hilltop) → field points away from the positive charge region ✓
- Where $\\rho < 0$ (net negative charge): $d^2\\phi/dx^2 > 0$ → the potential curves **upward** (like a valley) → field points toward the negative charge region ✓
- Where $\\rho = 0$ (charge neutrality): $d^2\\phi/dx^2 = 0$ → potential is linear (constant field, or zero field)

**Silicon parameters:** $\\varepsilon_s = 11.7 \\, \\varepsilon_0 = 11.7 \\times 8.85 \\times 10^{-14} = 1.04 \\times 10^{-12}$ F/cm.

### The Debye Length — How Far a Charge Is Screened

What happens if you place a small extra positive charge somewhere in a semiconductor? The free electrons in the material rush toward it, the holes flee, and within some short distance the extra charge is completely **screened** — neutralized by the redistribution of mobile carriers. This is why the space charge region in a PN junction has a **finite** width.

The characteristic length over which this screening happens is called the **Debye length** $l_D$. For an N-type semiconductor with equilibrium electron density $n_0$:

$$\\boxed{l_D = \\sqrt{\\frac{\\varepsilon_s \\, kT}{q^2 n_0}}}$$

This formula comes from linearizing Poisson's equation around equilibrium: a small charge perturbation $\\delta n$ creates a potential $\\delta\\phi$ which feeds back through $n \\propto e^{q\\phi/kT}$ to further modify $\\delta n$, and the self-consistent solution is an exponentially decaying disturbance with decay length $l_D$.

**Numerical example for silicon at 300K with $n_0 = 10^{15}$ cm$^{-3}$:**

$$l_D = \\sqrt{\\frac{1.04 \\times 10^{-12} \\times 0.026}{1.6 \\times 10^{-19} \\times 10^{15}}}$$

$$= \\sqrt{\\frac{2.704 \\times 10^{-14}}{1.6 \\times 10^{-4}}} = \\sqrt{1.69 \\times 10^{-10} \\text{ cm}^2}$$

$$\\boxed{l_D \\approx 41 \\text{ nm}}$$

**What this means:** If you inject a charge perturbation at $x = 0$, it decays as $e^{-x/l_D}$. After 41 nm, only 37% remains. After 82 nm, only 14%. After 200 nm, essentially nothing. The semiconductor has completely screened the perturbation.

**Key insight for devices:** The Debye length sets the **minimum width of any space charge region**. The depletion approximation (used for PN junctions and MOSFETs) is valid when the device dimensions greatly exceed $l_D$.

---

## 11. Continuity Equations — The Master Law of Carrier Dynamics

### Conservation of Carriers

So far we have equations for **how** carriers move (drift-diffusion) and **how** charges couple to fields (Poisson). But we're missing an equation that tracks **how many carriers exist** as a function of time and position. That is the **continuity equation**.

The physical principle is simple: **carriers are conserved**. The number of holes in a small volume element can change only because:
1. Holes **flow in** from the left (diffusion/drift current brings them)
2. Holes **flow out** to the right (diffusion/drift current carries them away)
3. Holes are **generated** (light creates electron-hole pairs, or thermal generation)
4. Holes **recombine** (an electron and hole annihilate each other)

### Deriving the Continuity Equation for Holes

Consider a thin slab of semiconductor with cross-section area $A$ and thickness $dx$, located between $x$ and $x + dx$.

\`\`\`
Volume element for continuity equation:

    Jp(x)  →│←─────────────────────────→│  Jp(x+dx)
             │   Area A                 │
             │   Thickness dx           │
             │                          │
             │  Generation: Gp          │
             │  Recombination: Up = Δp/τp│
             │                          │
             x                         x+dx
\`\`\`

**Holes entering from the left per unit time** (current in, converted from A to holes/s by dividing by $q$):
$$\\text{Rate in} = \\frac{J_p(x) \\cdot A}{q}$$

**Holes leaving to the right per unit time:**
$$\\text{Rate out} = \\frac{J_p(x+dx) \\cdot A}{q} = \\frac{A}{q}\\left[J_p(x) + \\frac{\\partial J_p}{\\partial x}dx\\right]$$

**Net rate of hole accumulation due to current flow** (in minus out):
$$\\text{Net current contribution} = -\\frac{A \\, dx}{q} \\frac{\\partial J_p}{\\partial x}$$

*(Negative sign: if $\\partial J_p/\\partial x > 0$, more holes flow out than in, so this is a loss.)*

**Generation rate** (holes created per unit time in volume $A \\cdot dx$):
$$G_p \\cdot A \\cdot dx \\quad \\text{(units: cm}^{-3}\\text{s}^{-1} \\times \\text{cm}^3\\text{)}$$

**Recombination rate** (holes destroyed per unit time): In the simplest model, recombination removes excess holes $\\Delta p = p - p_0$ at rate $U_p = \\Delta p / \\tau_p$:
$$U_p \\cdot A \\cdot dx$$

**Total rate of change of hole count in the slab** ($= A \\cdot dx \\cdot \\partial p / \\partial t$):

$$A \\, dx \\frac{\\partial p}{\\partial t} = -\\frac{A \\, dx}{q} \\frac{\\partial J_p}{\\partial x} + A \\, dx (G_p - U_p)$$

Dividing through by $A \\, dx$:

$$\\boxed{\\frac{\\partial p}{\\partial t} = -\\frac{1}{q}\\frac{\\partial J_p}{\\partial x} + G_p - U_p}$$

By an identical argument for electrons (but with a **plus** sign because electron current flows opposite to the electron drift direction — a sign convention issue with negative charge):

$$\\boxed{\\frac{\\partial n}{\\partial t} = +\\frac{1}{q}\\frac{\\partial J_n}{\\partial x} + G_n - U_n}$$

### Expanding the Drift-Diffusion Current

Substitute the drift-diffusion expressions $J_p = qp\\mu_p \\mathcal{E} - qD_p \\, \\partial p/\\partial x$ and $J_n = qn\\mu_n \\mathcal{E} + qD_n \\, \\partial n/\\partial x$ into the continuity equations:

For holes:
$$\\frac{\\partial p}{\\partial t} = D_p \\frac{\\partial^2 p}{\\partial x^2} - \\mu_p \\frac{\\partial(p\\mathcal{E})}{\\partial x} + G_p - U_p$$

For electrons:
$$\\frac{\\partial n}{\\partial t} = D_n \\frac{\\partial^2 n}{\\partial x^2} + \\mu_n \\frac{\\partial(n\\mathcal{E})}{\\partial x} + G_n - U_n$$

These two equations, together with Poisson's equation, form the complete mathematical description of a semiconductor.

### The Complete Transport System

The three equations — drift-diffusion, continuity, and Poisson — form a **closed, self-consistent system**. Given boundary conditions (contact voltages, illumination profiles), this system has a unique solution that describes the behavior of any semiconductor device.

\`\`\`
THE SEMICONDUCTOR TRANSPORT EQUATIONS (1D, complete system)
═══════════════════════════════════════════════════════════

DRIFT-DIFFUSION:
  Jn = qnμnE + qDn(dn/dx)          ← electron current (drift + diffusion)
  Jp = qpμpE - qDp(dp/dx)          ← hole current (drift + diffusion)

CONTINUITY:
  ∂n/∂t = (1/q)∂Jn/∂x + Gn - Un   ← electron conservation
  ∂p/∂t = -(1/q)∂Jp/∂x + Gp - Up  ← hole conservation

POISSON:
  d²φ/dx² = -(q/εs)(p - n + ND - NA)  ← charge → field coupling

GIVEN: boundary conditions (applied voltages, surface concentrations)
SOLVE FOR: n(x,t), p(x,t), φ(x,t), Jn(x,t), Jp(x,t)

This system describes: PN junctions, BJTs, MOSFETs, solar cells,
LEDs, photodetectors — every semiconductor device ever invented.
\`\`\`

**Physical coupling diagram:**

\`\`\`
Applied voltage V
       │
       ↓
   Electric field E ←──── Poisson ─────← net charge ρ = q(p-n+ND-NA)
       │                                         ↑              ↑
       │ (drift)              (diffusion)         │              │
       ↓                          ↓               │              │
  Carrier drift current    Carrier diffusion  Continuity    Continuity
  Jdrift = qnμE            Jdiff = qD∂n/∂x    ∂n/∂t = ...   ∂p/∂t = ...
       └──────────────┬──────────────┘
                      ↓
              Total current J = Jn + Jp
\`\`\`

---

## 12. Quasi-Fermi Level Explicit Formulas

### Where Exactly Do the Quasi-Fermi Levels Sit?

In Section 6 we introduced quasi-Fermi levels qualitatively. Now let us derive the **exact position** of each quasi-Fermi level given the carrier concentrations.

Recall the out-of-equilibrium carrier concentrations:

$$n = N_C \\exp\\!\\left(-\\frac{E_C - F_n}{kT}\\right) \\quad \\Longleftrightarrow \\quad E_C - F_n = kT \\ln\\!\\left(\\frac{N_C}{n}\\right)$$

$$p = N_V \\exp\\!\\left(-\\frac{F_p - E_V}{kT}\\right) \\quad \\Longleftrightarrow \\quad F_p - E_V = kT \\ln\\!\\left(\\frac{N_V}{p}\\right)$$

Rearranging to give the **quasi-Fermi level positions directly**:

$$\\boxed{F_n = E_C - kT \\ln\\!\\left(\\frac{N_C}{n}\\right)}$$

$$\\boxed{F_p = E_V + kT \\ln\\!\\left(\\frac{N_V}{p}\\right)}$$

**How to read these formulas:**
- $F_n$ rises toward $E_C$ as $n$ increases (more electrons → quasi-Fermi level approaches the conduction band). When $n = N_C$, then $F_n = E_C$ (degenerate semiconductor).
- $F_p$ falls toward $E_V$ as $p$ increases (more holes → quasi-Fermi level approaches the valence band). When $p = N_V$, then $F_p = E_V$.

### The Separation Formula

Multiply the expressions for $n$ and $p$:

$$n \\cdot p = N_C N_V \\exp\\!\\left(-\\frac{(E_C - F_n) + (F_p - E_V)}{kT}\\right) = N_C N_V \\exp\\!\\left(-\\frac{E_g - (F_n - F_p)}{kT}\\right)$$

But $n_i^2 = N_C N_V e^{-E_g / kT}$, so:

$$n \\cdot p = n_i^2 \\cdot \\exp\\!\\left(\\frac{F_n - F_p}{kT}\\right)$$

Solving for $F_n - F_p$:

$$\\boxed{F_n - F_p = kT \\ln\\!\\left(\\frac{np}{n_i^2}\\right)}$$

This formula is beautiful: the **separation between quasi-Fermi levels measures how far the system is from equilibrium**.

| Condition | $np$ vs $n_i^2$ | $F_n - F_p$ |
|---|---|---|
| Thermal equilibrium | $np = n_i^2$ | $F_n - F_p = 0$ (single $E_F$) |
| Illumination / forward bias | $np > n_i^2$ | $F_n - F_p > 0$ (levels split apart) |
| Reverse bias / carrier depletion | $np < n_i^2$ | $F_n - F_p < 0$ (rare, in depletion regions) |

### Equilibrium Recovery

At equilibrium, $n = n_0$, $p = p_0$, $n_0 p_0 = n_i^2$ → $F_n - F_p = 0$ → both quasi-Fermi levels merge into the single equilibrium Fermi level $E_F$. This is a self-consistency check that the formulas are correct.

### Connection to Device Physics

**Open-circuit voltage of an illuminated solar cell:**

Under illumination, photons create excess electron-hole pairs. The quasi-Fermi levels split by $F_n - F_p > 0$. If you connect the two contacts (each contacting predominantly one carrier type), the maximum voltage you can extract before any current flows (open-circuit voltage) is:

$$\\boxed{V_{oc} = \\frac{F_n - F_p}{q} = \\frac{kT}{q} \\ln\\!\\left(\\frac{np}{n_i^2}\\right)}$$

This is why good solar cells under bright light can produce ~0.6–0.7 V open-circuit voltage for silicon (bandgap 1.12 eV) — the quasi-Fermi level separation is limited by recombination, which clamps $np$ well below the theoretical maximum.

\`\`\`
Quasi-Fermi levels under steady illumination (N-type Si example):

Energy
  │
E_C ══════════════════════════════  (conduction band edge)
  │       ↕  small
F_n ──────────────────────────────  (barely moves — majority electrons)
E_F ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─  (equilibrium reference)
  │
E_i ·  ·  ·  ·  ·  ·  ·  ·  ·  ·  (intrinsic level, midgap)
  │
  │       ↕  large separation
  │
F_p ──────────────────────────────  (drops dramatically — minority holes)
  │
E_V ══════════════════════════════  (valence band edge)
  │
      F_n - F_p = kT·ln(np/ni²) > 0  → "chemical energy" stored in light
\`\`\`

---

## 13. Solved Exercise — Steady-State Minority Carrier Diffusion

### Problem Statement

N-type silicon at $T = 300$ K, uniformly doped with $N_D = 10^{15}$ cm$^{-3}$. At the surface $x = 0$, a steady light source maintains a constant **excess** hole concentration:

$$\\Delta p(0) = 10^{12} \\text{ cm}^{-3}$$

No light penetrates the bulk ($x > 0$): only the surface is illuminated. The material has:
- Minority carrier (hole) lifetime: $\\tau_p = 10 \\, \\mu\\text{s} = 10 \\times 10^{-6}$ s
- Hole diffusion coefficient: $D_p = 12$ cm²/s

Find:
1. The steady-state continuity equation for holes for $x > 0$.
2. The solution $\\Delta p(x)$.
3. The diffusion length $L_p$ and the value of $\\Delta p$ at $x = 20 \\, \\mu$m.

---

### Step 1 — Write and Simplify the Continuity Equation

Start from the general continuity equation for holes:

$$\\frac{\\partial p}{\\partial t} = -\\frac{1}{q}\\frac{\\partial J_p}{\\partial x} + G_p - U_p$$

**Apply the conditions:**

(a) **Steady state** ($\\partial p / \\partial t = 0$): we want the time-independent solution, so the left side vanishes.

(b) **No light in the bulk** ($x > 0$): $G_p = 0$ (no optical generation).

(c) **Only diffusion** (no electric field in the neutral bulk at equilibrium): $J_p = -qD_p \\, \\partial p / \\partial x$.

(d) **Recombination** via simple minority-carrier lifetime model: $U_p = \\Delta p / \\tau_p$ where $\\Delta p = p - p_0$ is the excess hole concentration.

Substituting:

$$0 = -\\frac{1}{q} \\frac{\\partial}{\\partial x}\\!\\left(-qD_p \\frac{\\partial p}{\\partial x}\\right) - \\frac{\\Delta p}{\\tau_p}$$

$$0 = D_p \\frac{\\partial^2 p}{\\partial x^2} - \\frac{\\Delta p}{\\tau_p}$$

Since $p_0$ is constant in uniform material, $\\partial^2 p/\\partial x^2 = \\partial^2 \\Delta p/\\partial x^2$. The steady-state equation becomes:

$$\\boxed{D_p \\frac{d^2 \\Delta p}{dx^2} = \\frac{\\Delta p}{\\tau_p}}$$

Dividing through by $D_p$:

$$\\frac{d^2 \\Delta p}{dx^2} = \\frac{\\Delta p}{L_p^2} \\quad \\text{where} \\quad L_p = \\sqrt{D_p \\tau_p}$$

**Physical meaning of $L_p$:** $L_p$ is the **minority carrier diffusion length** — the characteristic distance over which excess holes diffuse before recombining.

---

### Step 2 — Solve the Ordinary Differential Equation

The equation $d^2 \\Delta p / dx^2 = \\Delta p / L_p^2$ is a **second-order linear ODE with constant coefficients**. Standard method: try $\\Delta p(x) = e^{rx}$, giving characteristic equation:

$$r^2 - \\frac{1}{L_p^2} = 0 \\implies r = \\pm \\frac{1}{L_p}$$

General solution:

$$\\Delta p(x) = A \\, e^{-x/L_p} + B \\, e^{+x/L_p}$$

**Apply boundary conditions:**

**(i)** At $x \\to \\infty$: Physically, the excess hole concentration must remain finite (and go to zero) far from the light source. The term $B \\, e^{+x/L_p}$ grows without bound, so we must have $B = 0$.

**(ii)** At $x = 0$: The light source fixes $\\Delta p(0) = 10^{12}$ cm$^{-3}$, so $A = 10^{12}$ cm$^{-3}$.

Therefore:

$$\\boxed{\\Delta p(x) = 10^{12} \\cdot e^{-x/L_p} \\text{ cm}^{-3}}$$

**Physical interpretation:** Excess holes are injected at the surface. They diffuse into the bulk, but as they travel they recombine. The deeper they go, the fewer survive. The result is an exponential decay with characteristic length $L_p$. After one diffusion length, only $1/e \\approx 37\\%$ of the injected holes remain.

\`\`\`
Excess hole profile Δp(x):

Δp (cm⁻³)
   ↑
10¹² ─── •  (surface: light maintains Δp = 10¹²)
          \\
 ≈3.7×10¹¹─ ── • ── (at x = Lp: only 37% remains)
              \\
 ≈1.4×10¹¹──   ── •── (at x = 2Lp: only 14% remains)
                  \\
          ────────────•─────────→ x
   0      Lp    2Lp    3Lp
\`\`\`

---

### Step 3 — Calculate $L_p$ and $\\Delta p(20\\,\\mu\\text{m})$

**Diffusion length:**

$$L_p = \\sqrt{D_p \\tau_p} = \\sqrt{12 \\times 10 \\times 10^{-6}} = \\sqrt{12 \\times 10^{-5}} = \\sqrt{1.2 \\times 10^{-4}} \\text{ cm}$$

$$L_p = 1.095 \\times 10^{-2} \\text{ cm}$$

$$\\boxed{L_p \\approx 109.5 \\, \\mu\\text{m}}$$

This is the average distance a minority hole travels before recombining. It is much larger than a typical transistor feature size (nm to μm), meaning minority carriers can travel across an entire device before recombining — this is what makes bipolar transistors and solar cells work.

**Excess hole concentration at $x = 20 \\, \\mu$m:**

$$\\Delta p(20\\,\\mu\\text{m}) = 10^{12} \\cdot \\exp\\!\\left(-\\frac{20 \\, \\mu\\text{m}}{109.5 \\, \\mu\\text{m}}\\right) = 10^{12} \\cdot e^{-0.1826}$$

$$= 10^{12} \\times 0.8329$$

$$\\boxed{\\Delta p(20\\,\\mu\\text{m}) \\approx 8.33 \\times 10^{11} \\text{ cm}^{-3}}$$

At 20 μm — barely $1/5$ of one diffusion length — 83% of the injected holes are still present. Diffusion length of ~110 μm means holes travel a long way before being destroyed by recombination.

**Validity check — Low-Level Injection:**

$$\\Delta p(0) = 10^{12} \\text{ cm}^{-3} \\ll n_0 = N_D = 10^{15} \\text{ cm}^{-3}$$

The injected excess minority carriers ($10^{12}$) are 1000 times smaller than the majority carrier density ($10^{15}$). This confirms **low-level injection**: the majority carrier concentration is barely perturbed, the simple linear recombination model $U_p = \\Delta p/\\tau_p$ is valid, and $\\tau_p$ is indeed the minority carrier lifetime. If $\\Delta p$ were comparable to $n_0$, we would need more complex (Auger or SRH) recombination models.

---

## Updated Law Summary — Extended Transport

| Law / Formula | Expression | Physical meaning |
|---|---|---|
| Matthiessen's Rule | $1/\\tau = 1/\\tau_{ph} + 1/\\tau_{imp} + \\cdots$ | Total scattering rate |
| Matthiessen (mobility) | $1/\\mu = 1/\\mu_{lattice} + 1/\\mu_{imp} + \\cdots$ | Total mobility |
| Lattice mobility | $\\mu_{lattice} \\propto T^{-3/2}$ | Falls with temperature |
| Impurity mobility | $\\mu_{imp} \\propto T^{+3/2}$ | Rises with temperature |
| Thermal velocity | $v_{th} = \\sqrt{3kT/m_e^*}$ | Random thermal speed |
| $v_{th}$ (Si, 300K) | $\\approx 10^7$ cm/s | 100 km/s |
| Mean free path | $l = v_{th} \\cdot \\tau_c$ | 10–100 nm in Si |
| Mobility (microscopic) | $\\mu = q\\tau_c / m^*$ | From Newton's law |
| Poisson (1D) | $d^2\\phi/dx^2 = -(q/\\varepsilon_s)(p-n+N_D-N_A)$ | Charge → field |
| Net charge density | $\\rho = q(p - n + N_D - N_A)$ | All charge species |
| Debye length | $l_D = \\sqrt{\\varepsilon_s kT / q^2 n_0}$ | Screening length |
| $l_D$ (Si, $n_0=10^{15}$) | $\\approx 41$ nm | Screening in Si |
| Continuity (holes) | $\\partial p/\\partial t = -(1/q)\\partial J_p/\\partial x + G_p - U_p$ | Hole conservation |
| Continuity (electrons) | $\\partial n/\\partial t = +(1/q)\\partial J_n/\\partial x + G_n - U_n$ | Electron conservation |
| Electron quasi-Fermi | $F_n = E_C - kT\\ln(N_C/n)$ | Position of $F_n$ |
| Hole quasi-Fermi | $F_p = E_V + kT\\ln(N_V/p)$ | Position of $F_p$ |
| Quasi-Fermi separation | $F_n - F_p = kT\\ln(np/n_i^2)$ | Distance from equilibrium |
| Open-circuit voltage | $V_{oc} = (F_n - F_p)/q$ | Solar cell output |
| Diffusion equation (SS) | $D_p d^2\\Delta p/dx^2 = \\Delta p/\\tau_p$ | Minority carrier decay |
| Diffusion length | $L_p = \\sqrt{D_p \\tau_p}$ | Average travel before recombination |
| Minority carrier profile | $\\Delta p(x) = \\Delta p(0) \\cdot e^{-x/L_p}$ | Exponential decay |

---

# TD 12 — Electrical Conductivity: Complete Solutions

## Exercise 1: The Hall Effect

**Problem setup:** A semiconductor bar carries current $I$. Magnetic field $B$ perpendicular to the bar (along z-axis). The Hall voltage $U_H$ is measured across the width $W$. Bar thickness is $d$.

From the experimental data given in the problem:
- $R_H = U_H \\cdot d / (I \\cdot B)$

From the solution in TD12:

**1. Physical description of the Hall Effect:**

When $\\vec{B} \\perp \\vec{v}$ (magnetic field perpendicular to carrier velocity), the Lorentz force $\\vec{F}_L = q(\\vec{v} \\times \\vec{B})$ deflects carriers toward one face of the bar. This causes charge accumulation on one face (−) and depletion on the other (+), creating a transversal Hall field $\\vec{\\mathcal{E}}_H$ opposing the Lorentz force. At equilibrium: $\\vec{F}_{electric} + \\vec{F}_{Lorentz} = 0$.

**2. Force balance gives:**
$$q\\mathcal{E}_H + q(v_d \\times B) = 0 \\implies \\mathcal{E}_H = v_d \\cdot B$$

(Along the $y$-axis):
$$U_H / W = v_d B \\implies U_H = v_d B W$$

**3. Express $v_d$ in terms of $I$ and $n$:**
$$J = nqv_d = \\frac{I}{W \\cdot d} \\implies v_d = \\frac{I}{nqWd}$$

**4. Hall voltage formula:**
$$U_H = \\frac{I}{nqWd} \\cdot B \\cdot W = \\frac{-1}{nq} \\cdot \\frac{I \\cdot B}{d}$$

$$\\boxed{U_H = R_H \\frac{IB}{d}} \\quad \\text{with} \\quad R_H = -\\frac{1}{nq}$$

**5. Resistivity measurement:**
$$R = \\rho \\frac{L}{S} = \\frac{V_A}{I} \\implies \\rho = \\frac{V_A}{I} \\cdot \\frac{W \\cdot d}{L}$$

**6. Mobility from Hall and resistivity:**
$$\\sigma = \\frac{1}{\\rho} = nq\\mu_H \\implies \\mu_H = \\frac{|R_H|}{\\rho} = \\frac{|R_H|}{\\rho}$$

**Numerical Application (from the TD12 solution sheet):**

From experimental data:
$$R_H = \\frac{U_H \\cdot d}{I \\cdot B} = -6.25 \\times 10^{-3} \\text{ m}^3/\\text{C}$$

Since $R_H = -1/(nq)$:
$$n = \\frac{-1}{qR_H} = \\frac{1}{1.6 \\times 10^{-19} \\times 6.25 \\times 10^{-3}} = 10^{21} \\text{ m}^{-3} = 10^{15} \\text{ cm}^{-3}$$

$$\\boxed{n = 10^{15} \\text{ cm}^{-3}}$$

From the resistivity measurement:
$$\\rho = 0.05 \\text{ } \\Omega\\cdot\\text{m} = 5 \\text{ } \\Omega\\cdot\\text{cm}$$
$$\\sigma = 1/\\rho = 20 \\text{ S/m} = 0.2 \\text{ S/cm}$$

Hall mobility:
$$\\mu_H = \\frac{|R_H|}{\\rho} = \\frac{6.25 \\times 10^{-3}}{0.05} = 0.125 \\text{ m}^2/\\text{V·s}$$
$$\\boxed{\\mu_H = 1250 \\text{ cm}^2/\\text{V·s}}$$

---

## Exercise 2: Quasi-Fermi Levels

**Setup:** N-type semiconductor at $T = 300K$, doped at $N_D = 10^{16}$ cm$^{-3}$.

**Given constants:** $n_i = 10^{10}$ cm$^{-3}$, $N_C = 2.8 \\times 10^{19}$ cm$^{-3}$, $N_V = 1.04 \\times 10^{19}$ cm$^{-3}$, $kT = 0.026$ eV.

### Step 1 — Equilibrium (Before Any Injection)

Since $N_D = 10^{16}$ cm$^{-3}$ $\\gg$ $n_i = 10^{10}$ cm$^{-3}$, essentially all donors are ionized and:
$$n_0 = N_D = 10^{16} \\text{ cm}^{-3}$$

By the Law of Mass Action:
$$p_0 = \\frac{n_i^2}{n_0} = \\frac{10^{20}}{10^{16}} = 10^4 \\text{ cm}^{-3}$$

Find the equilibrium Fermi level position:
$$n_0 = N_C \\exp\\left(-\\frac{E_C - E_F}{kT}\\right)$$
$$\\frac{E_C - E_F}{kT} = \\ln\\left(\\frac{N_C}{n_0}\\right) = \\ln\\left(\\frac{2.8 \\times 10^{19}}{10^{16}}\\right) = \\ln(2800) = 7.94$$
$$\\boxed{E_C - E_F = 7.94 \\times 0.026 = 0.206 \\text{ eV}}$$

Similarly, for holes:
$$p_0 = N_V \\exp\\left(-\\frac{E_F - E_V}{kT}\\right)$$
$$E_F - E_V = kT\\ln\\left(\\frac{N_V}{p_0}\\right) = 0.026 \\times \\ln\\left(\\frac{1.04 \\times 10^{19}}{10^4}\\right) = 0.026 \\times 34.97 = 0.896 \\text{ eV}$$

Check: $(E_C - E_F) + (E_F - E_V) = E_g = 0.206 + 0.896 = 1.102 \\approx 1.12$ eV ✓ (small rounding error)

### Step 2 — Light Injection (Out of Equilibrium)

We shine light that injects $\\Delta n = \\Delta p = 10^{14}$ cm$^{-3}$.

Note: $\\Delta n = 10^{14}$ cm$^{-3}$ $\\ll$ $n_0 = 10^{16}$ cm$^{-3}$ → This is called **low-level injection**.

New carrier concentrations:
$$n = n_0 + \\Delta n = 10^{16} + 10^{14} \\approx 10^{16} \\text{ cm}^{-3} \\quad \\text{(barely changes!)}$$
$$p = p_0 + \\Delta p = 10^4 + 10^{14} \\approx 10^{14} \\text{ cm}^{-3} \\quad \\text{(increases by factor } 10^{10}!\\text{)}$$

### Step 3 — Find the Electron Quasi-Fermi Level $E_{FN}$

Since $n \\approx n_0 = 10^{16}$ cm$^{-3}$ (barely changed), $E_{FN}$ barely moves from $E_F$:

$$n = N_C \\exp\\left(-\\frac{E_C - E_{FN}}{kT}\\right) \\implies E_C - E_{FN} = kT\\ln\\left(\\frac{N_C}{n}\\right) = 0.026 \\times \\ln(2800) = 0.026 \\times 7.94$$
$$\\boxed{E_C - E_{FN} = 0.206 \\text{ eV} \\approx E_C - E_F}$$

The electron quasi-Fermi level barely moves. Majority carriers are almost unaffected by light.

### Step 4 — Find the Hole Quasi-Fermi Level $E_{FP}$

Now $p = 10^{14}$ cm$^{-3}$, hugely different from $p_0 = 10^4$ cm$^{-3}$:

$$p = N_V \\exp\\left(-\\frac{E_{FP} - E_V}{kT}\\right)$$
$$E_{FP} - E_V = kT \\ln\\left(\\frac{N_V}{p}\\right) = 0.026 \\times \\ln\\left(\\frac{1.04 \\times 10^{19}}{10^{14}}\\right)$$
$$= 0.026 \\times \\ln(1.04 \\times 10^5) = 0.026 \\times 11.55$$
$$\\boxed{E_{FP} - E_V = 0.299 \\text{ eV}}$$

Compare to equilibrium: $E_F - E_V = 0.896$ eV. Now $E_{FP} - E_V = 0.299$ eV. The hole quasi-Fermi level has moved dramatically — from 0.896 eV above $E_V$ down to 0.299 eV above $E_V$. It plunged toward the valence band!

### Step 5 — Calculate the Quasi-Fermi Level Separation

$$E_{FN} - E_{FP} = (E_C - 0.206) - (E_V + 0.299) = E_g - 0.206 - 0.299 = 1.12 - 0.505 = 0.615 \\text{ eV}$$

Alternatively, using the formula:
$$E_{FN} - E_{FP} = kT \\ln\\left(\\frac{n \\cdot p}{n_i^2}\\right) = 0.026 \\times \\ln\\left(\\frac{10^{16} \\times 10^{14}}{10^{20}}\\right) = 0.026 \\times \\ln(10^{10}) = 0.026 \\times 23.03$$
$$\\boxed{E_{FN} - E_{FP} = 0.595 \\text{ eV}}$$

*(Small differences due to rounding throughout)*

\`\`\`
Energy diagram comparison:

Before injection:              After injection (Δn = Δp = 10¹⁴):
E_C ═══════════════           E_C ═══════════════
     ↕ 0.206 eV               E_FN ──────────────  (≈ E_F, barely changed)
E_F ───────────────                ↕ 0.595 eV separation
                               E_i ─ ─ ─ ─ ─ ─ ─
     ↕ 0.896 eV               E_FP ──────────────  (dropped 0.6 eV!)
                                    ↕ 0.299 eV
E_V ═══════════════           E_V ═══════════════
\`\`\`

**Key insight:** The separation $E_{FN} - E_{FP} = 0.595$ eV represents the "chemical potential" that the light has pumped into the system. This is what drives current in solar cells and LEDs!

---

# TD 15 — Transport: Complete Solutions (Exercise 1)

## Exercise 1: Electric Field in a Non-Uniformly Doped Semiconductor

**Setup:** N-type silicon at equilibrium ($V = 0$, so $I = 0$ and $J = 0$).

The donor concentration varies with position:
$$n(x) = N_D(x) = 10^{16} + 9 \\times 10^{20} \\cdot x \\quad \\text{(concentrations in cm}^{-3}\\text{, x in cm)}$$

*(This means: at $x=0$, $n = 10^{16}$ cm$^{-3}$; it increases linearly with position.)*

### Part a) — Find the Electric Field $\\mathcal{E}(x)$

**Key condition:** Since $V = 0$, there is no net current flow ($J = 0$). But wait — if the concentration varies with position, won't diffusion drive a current? Yes! But there must also be an electric field that creates an equal and opposite drift current to maintain equilibrium. So:

$$J_n = J_{drift,n} + J_{diff,n} = qn\\mu_n\\mathcal{E} + qD_n\\frac{dn}{dx} = 0$$

This gives:
$$qn\\mu_n\\mathcal{E} = -qD_n\\frac{dn}{dx}$$
$$\\mathcal{E} = -\\frac{D_n}{\\mu_n} \\cdot \\frac{1}{n(x)} \\cdot \\frac{dn}{dx}$$

Using Einstein relation ($D_n/\\mu_n = kT/q = V_T$):

$$\\boxed{\\mathcal{E}(x) = -\\frac{kT}{q} \\cdot \\frac{1}{n(x)} \\cdot \\frac{dn}{dx} = -V_T \\cdot \\frac{d(\\ln n)}{dx}}$$

Now compute $dn/dx$ from our given $n(x)$:
$$\\frac{dn}{dx} = 9 \\times 10^{20} \\text{ cm}^{-4}$$

So:
$$\\mathcal{E}(x) = -\\frac{kT}{q} \\cdot \\frac{9 \\times 10^{20}}{10^{16} + 9 \\times 10^{20} x}$$

At room temperature, $kT/q = 0.026$ V:
$$\\mathcal{E}(x) = -\\frac{0.026 \\times 9 \\times 10^{20}}{10^{16} + 9 \\times 10^{20} x} \\text{ V/cm}$$

### Part b) — Calculate $\\mathcal{E}$ at $x = 0.5 \\mu m$

Convert: $x = 0.5 \\, \\mu\\text{m} = 0.5 \\times 10^{-4}$ cm

Denominator:
$$n(0.5 \\times 10^{-4}) = 10^{16} + 9 \\times 10^{20} \\times 0.5 \\times 10^{-4}$$
$$= 10^{16} + 4.5 \\times 10^{16} = 5.5 \\times 10^{16} \\text{ cm}^{-3}$$

Electric field:
$$\\mathcal{E}(x) = -\\frac{0.026 \\times 9 \\times 10^{20}}{5.5 \\times 10^{16}} = -\\frac{2.34 \\times 10^{19}}{5.5 \\times 10^{16}}$$
$$\\boxed{\\mathcal{E}(x = 0.5\\,\\mu\\text{m}) = -425 \\approx -419 \\text{ V/cm}}$$

The field is negative, meaning it points in the $-x$ direction. This opposes the diffusion of electrons (which tend to flow to the right, toward lower concentration). The built-in field is a self-consistent equilibrium field.

### Part c) — Calculate the Current Density When $\\mathcal{E}(x) = 0$

This is a thought experiment: if somehow there is no electric field at some position, what current flows?

If $\\mathcal{E} = 0$, only diffusion drives current:
$$J_n = qD_n\\frac{dn}{dx} = q \\cdot \\mu_n V_T \\cdot \\frac{dn}{dx}$$

Using $\\mu_n = 1350$ cm²/V·s:
$$J_n = 1.6 \\times 10^{-19} \\times 1350 \\times 0.026 \\times 9 \\times 10^{20}$$
$$= 1.6 \\times 10^{-19} \\times 35.1 \\times 9 \\times 10^{20}$$
$$= 1.6 \\times 10^{-19} \\times 3.159 \\times 10^{22}$$
$$\\boxed{J_n \\approx 3686 \\text{ A/cm}^2} \\approx 3686 \\text{ A/cm}^2$$

This huge current density shows why the built-in field is necessary — without it, the non-uniform doping would drive a massive current!
`;
