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
