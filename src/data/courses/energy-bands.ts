export const energyBandsContent = `
# Energy Bands in Semiconductors

## Starting Point: The Isolated Atom

In the previous chapter, we learned that electrons in an atom can only have specific, discrete energy levels — like the rungs of a ladder. For silicon (Si), which has 14 electrons, the outer electrons (valence electrons) sit in the 3s and 3p orbitals.

Now, the question is: **what happens when you bring $10^{23}$ silicon atoms close together to form a crystal?**

---

## 1. How Energy Bands Form — From Atoms to Crystal

### The Splitting of Energy Levels

Imagine first just two atoms brought close together. Their electrons begin to "feel" each other's presence. The Pauli Exclusion Principle says no two electrons can be in exactly the same quantum state. So the originally identical energy level of the two atoms must **split into two slightly different levels** — one slightly above, one slightly below the original.

Now bring $N$ atoms together. Each original level splits into $N$ slightly different levels. With $N = 10^{23}$ (the number of atoms in a typical crystal), these $10^{23}$ levels are packed so closely that they form what we call a **continuous energy band**.

\`\`\`
Splitting of Energy Levels as Atoms Come Together:

1 atom:     2 atoms:    5 atoms:    10²³ atoms:
   ─            ─           ─────      ═══════  ← BAND
               ─           ─────
                           ─────      (gap, forbidden)
   ─            ─           ─────      ═══════  ← BAND
               ─           ─────
                           ─────

Increasing number of atoms →
\`\`\`

### The Three Key Bands

From this process, in a semiconductor, three energy regions emerge:

**1. Valence Band (top energy: $E_V$)**
This is the highest energy band that is **completely filled** with electrons at absolute zero (0 Kelvin). These electrons are the ones participating in covalent bonds between silicon atoms. They are "tied up" and cannot move freely. No current flows.

**2. Conduction Band (bottom energy: $E_C$)**
This is the next band above the valence band. It is completely **empty at 0 K**. If an electron can reach this band, it moves freely through the crystal and can carry electrical current.

**3. Bandgap ($E_g = E_C - E_V$)**
This is the **forbidden zone** between the two bands. No allowed quantum states exist here. No electron can have an energy in this range. The size of the bandgap is the most important characteristic of a semiconductor.

\`\`\`
Energy Band Diagram — The Standard Picture:

Energy
  ↑
  │   ════════════════════════════  ← E_C (bottom of conduction band)
  │
  │    ← Bandgap E_g (FORBIDDEN, no electrons allowed here)
  │
  │   ════════════════════════════  ← E_V (top of valence band)
  │
  │   (deeper filled bands below, not important for semiconductors)
\`\`\`

### The Golden Classification Rule

The size of $E_g$ completely determines what kind of material you have:

| Material type | Bandgap $E_g$ | Example | Behavior |
|---|---|---|---|
| Metal | 0 (bands overlap) | Copper | Always conducts |
| Semiconductor | ~0.1 to ~3 eV | Si (1.12 eV), GaAs (1.42 eV), Ge (0.66 eV) | Controlled conduction |
| Insulator | > 5 eV | SiO₂ (9 eV), Diamond (5.5 eV) | Barely conducts |

---

## 2. Holes — The Second Type of Carrier

When an electron absorbs enough energy (from heat, light, etc.) and jumps from the valence band to the conduction band, it leaves behind an **empty state** in the valence band. This empty state is called a **hole**.

\`\`\`
Electron-Hole Pair Creation:

Before:                          After:
Conduction band:  empty          Conduction band:  e⁻  ← free electron!
                                                   ↑
                                           (absorbed energy = E_g)
                                                   |
Valence band:     full           Valence band:  ○  ← hole (empty state)
\`\`\`

### Why Do We Treat Holes as Particles?

Imagine a theater with 1000 seats. All seats are filled. One person (electron) leaves seat 47 (leaving hole 47). Now the person in seat 46 can move to 47, person in 45 moves to 46... The "hole" effectively moves in the opposite direction from the electrons.

This is enormously useful: instead of tracking $10^{23}$ electrons shifting slightly, we track just one hole moving freely. A **hole behaves exactly like a real particle with:**
- **Positive charge** $+q$ (because removing a negative electron leaves a net positive)
- A specific effective mass $m_h^*$
- Its own mobility $\\mu_p$

In summary: in a semiconductor, we have **two types of charge carriers:**
- **Electrons ($n$):** negative charge, in the conduction band, move freely
- **Holes ($p$):** positive charge, in the valence band, move freely

---

## 3. Effective Mass — Moving Through a Crystal is Not Like Moving in Vacuum

An electron moving through the silicon crystal is not moving in free space. It constantly interacts with the periodic electric field created by all the silicon atoms (positive ion cores). These interactions modify how the electron responds to external forces.

Instead of tracking all these complex interactions, we use a brilliant shortcut: we pretend the electron moves in a **vacuum**, but give it a fake "adjusted" mass called the **Effective Mass** ($m^*$). This effective mass absorbs all the crystal interaction effects.

The effective mass is defined by the curvature of the energy band:
$$m^* = \\frac{\\hbar^2}{d^2E/dk^2}$$

Where $k$ is the **wave vector** (the quantum mechanical equivalent of momentum for an electron in a crystal). The sharper the curvature of the $E$ vs $k$ band diagram, the lighter the effective mass, meaning the electron responds more easily to forces (more mobile).

**For Silicon:**
- Effective mass of electrons: $m_e^* = 1.08 \\, m_0$ (slightly heavier than free electron)
- Effective mass of holes: $m_h^* = 0.56 \\, m_0$ (lighter than free electron!)

Where $m_0 = 9.11 \\times 10^{-31}$ kg is the actual free electron mass.

\`\`\`
E vs k Diagram (simplified — very important concept!):

Energy E
  ↑         ·      Conduction Band
  │        ·  ·      (electrons sit near the minimum — bottom of curve)
  │       ·    ·
  │     ──────────── E_C
  │            Bandgap
  │     ──────────── E_V
  │       ·    ·
  │        ·  ·      Valence Band
  │         ·       (holes sit near the maximum — top of curve)
  └──────────────────────────→ k (wave vector)
             0

The curvature at the band minimum/maximum gives the effective mass.
Sharp curvature = small m* = light, mobile carrier.
\`\`\`

---

## 4. Density of States — How Many Energy Levels Are Available?

Knowing that bands exist is not enough. We need to know **how many available quantum states (energy levels) exist per unit volume per unit energy** in each band. This is the **Density of States (DOS)**, written as $N(E)$.

The result from quantum mechanics for the conduction band (near $E_C$):
$$N_C(E) \\propto \\sqrt{E - E_C} \\quad \\text{for } E > E_C$$

And for the valence band (near $E_V$):
$$N_V(E) \\propto \\sqrt{E_V - E} \\quad \\text{for } E < E_V$$

The key numbers for silicon at 300K are the **Effective Density of States**:
- **$N_C = 2.8 \\times 10^{19}$ cm$^{-3}$** (total "seats" in conduction band per unit volume, near $E_C$)
- **$N_V = 1.04 \\times 10^{19}$ cm$^{-3}$** (total "seats" in valence band per unit volume, near $E_V$)

These come from integrating the DOS over the band, and are given by:
$$N_C = 2 \\left( \\frac{2\\pi m_e^* kT}{h^2} \\right)^{3/2}$$
$$N_V = 2 \\left( \\frac{2\\pi m_h^* kT}{h^2} \\right)^{3/2}$$

Note that $N_C > N_V$ for silicon because $m_e^* > m_h^*$ (electrons are heavier → more available states near $E_C$).

---

## 5. Fermi-Dirac Distribution — What is the Probability of Occupation?

\`\`\`chart
{"type":"fermi-dirac","title":"Fermi-Dirac Distribution f(E) at Different Temperatures","EF":0,"temps":[0,300,600,1000]}
\`\`\`

The Density of States tells us how many chairs exist. But not every chair is occupied! We need to know the **probability that an electron actually sits in a chair at energy $E$** given the temperature $T$.

This probability is given by the **Fermi-Dirac distribution:**

$$f(E) = \\frac{1}{1 + \\exp\\left(\\frac{E - E_F}{kT}\\right)}$$

**Every term explained:**
- $f(E)$ = probability that a state at energy $E$ is occupied by an electron (ranges from 0 to 1)
- $E_F$ = the **Fermi Level** (or Fermi energy) — the most important single concept in semiconductor physics
- $k = 8.617 \\times 10^{-5}$ eV/K = Boltzmann's constant
- $T$ = absolute temperature in Kelvin

### The Fermi Level $E_F$ — The Most Important Concept

The Fermi level is the energy at which the probability of finding an electron is exactly **50%**. It's like a "chemical potential" that balances the electron population.

$$f(E_F) = \\frac{1}{1 + e^0} = \\frac{1}{2} = 50\\%$$

\`\`\`
Fermi-Dirac Distribution at Different Temperatures:

f(E)
1.0 ─────────────\\
                  \\     At T = 0K: Sharp step at E_F
0.5 ─ ─ ─ ─ ─ ─ ─X─ ─ ─ ─ ─ ─ ─ ← always 50% at E_F
                    \\ ← gets softer as T rises
0.0 ─────────────────\\──────────→ E
                     E_F

At T = 0K: ALL states below E_F are filled (f=1), ALL states above are empty (f=0)
At T > 0K: A smooth "smearing" of a few kT wide appears around E_F.
           Some electrons above E_F, some holes below E_F.
\`\`\`

---

## 6. Carrier Concentrations — Combining DOS and Fermi-Dirac

The **electron concentration** $n$ in the conduction band = (number of available states) × (probability each is occupied):

$$n = \\int_{E_C}^{\\infty} N_C(E) \\cdot f(E) \\, dE = N_C \\exp\\left(-\\frac{E_C - E_F}{kT}\\right)$$

The **hole concentration** $p$ in the valence band = (number of available states) × (probability state is EMPTY = 1-f):

$$p = \\int_{-\\infty}^{E_V} N_V(E) \\cdot [1 - f(E)] \\, dE = N_V \\exp\\left(-\\frac{E_F - E_V}{kT}\\right)$$

These are the two most fundamental equations of semiconductor physics. The Fermi level $E_F$ appears in both: it couples the electron and hole populations.

---

## 7. The Law of Mass Action — $n \\cdot p = n_i^2$

Multiply $n$ and $p$ together:
$$n \\cdot p = N_C \\exp\\left(-\\frac{E_C - E_F}{kT}\\right) \\cdot N_V \\exp\\left(-\\frac{E_F - E_V}{kT}\\right)$$

The $E_F$ terms cancel:
$$n \\cdot p = N_C N_V \\exp\\left(-\\frac{E_C - E_V}{kT}\\right) = N_C N_V \\exp\\left(-\\frac{E_g}{kT}\\right)$$

This product is **independent of $E_F$** (independent of doping!). It is a constant determined only by temperature and material. We define:

$$\\boxed{n \\cdot p = n_i^2}$$

Where $n_i$ is the **intrinsic carrier concentration**.

**This is the Law of Mass Action** — one of the most powerful laws in semiconductor physics. It means: if you add more electrons (by doping), you must have fewer holes, such that their product stays constant at $n_i^2$.

---

\`\`\`chart
{"type":"band-diagram","title":"Energy Band Diagram — Intrinsic Silicon (n = p = nᵢ)","subtype":"intrinsic"}
\`\`\`

## 8. Intrinsic Semiconductors — Pure Silicon

An **intrinsic semiconductor** is a perfectly pure crystal with no impurities. The ONLY source of free carriers is thermal generation: some electrons occasionally gain enough thermal energy to jump the bandgap, leaving holes behind.

Since every electron that jumps creates exactly one hole:
$$n = p = n_i$$

(intrinsic condition)

From the Law of Mass Action:
$$n_i^2 = N_C N_V \\exp\\left(-\\frac{E_g}{kT}\\right)$$

Taking the square root:
$$\\boxed{n_i = \\sqrt{N_C N_V} \\, \\exp\\left(-\\frac{E_g}{2kT}\\right)}$$

This is a crucial formula. It shows that $n_i$ depends exponentially on temperature and bandgap. **Silicon at 300K: $n_i \\approx 10^{10}$ cm$^{-3}$**, meaning only about 1 in $5 \\times 10^{12}$ silicon atoms has a free electron at room temperature. Silicon is indeed almost an insulator when pure!

---

## 9. The Intrinsic Fermi Level $E_i$

For an intrinsic semiconductor, the Fermi level is called $E_i$ (intrinsic Fermi level). Setting $n = p$ and solving for the Fermi level position:

$$E_i = \\frac{E_C + E_V}{2} + \\frac{3}{4}kT \\ln\\left(\\frac{m_h^*}{m_e^*}\\right) = E_{mid} + \\frac{3}{4}kT \\ln\\left(\\frac{m_h^*}{m_e^*}\\right)$$

where $E_{mid} = (E_C + E_V)/2$ is the exact center of the bandgap.

**Physical intuition:** If $m_e^* = m_h^*$ (equal masses), $E_i$ would sit exactly at the center. But in silicon, holes are lighter ($m_h^* = 0.56 m_0 < m_e^* = 1.08 m_0$). Lighter holes → fewer available states in valence band ($N_V < N_C$). To keep $n = p$ in steady state, the Fermi level must move slightly toward the valence band to increase the probability of hole creation. So $E_i$ sits **slightly below the midgap**.

---

## 📋 Complete Law Summary — Energy Bands

| Law / Formula | Expression | Description |
|---|---|---|
| Electron concentration | $n = N_C \\exp\\left(-\\frac{E_C - E_F}{kT}\\right)$ | Electrons in conduction band |
| Hole concentration | $p = N_V \\exp\\left(-\\frac{E_F - E_V}{kT}\\right)$ | Holes in valence band |
| Effective density (conduction) | $N_C = 2\\left(\\frac{2\\pi m_e^* kT}{h^2}\\right)^{3/2}$ | Available states near $E_C$ |
| Effective density (valence) | $N_V = 2\\left(\\frac{2\\pi m_h^* kT}{h^2}\\right)^{3/2}$ | Available states near $E_V$ |
| Bandgap | $E_g = E_C - E_V$ | Forbidden energy range |
| Intrinsic concentration | $n_i = \\sqrt{N_C N_V}\\,\\exp\\left(-\\frac{E_g}{2kT}\\right)$ | Intrinsic carriers at temp T |
| Law of Mass Action | $n \\cdot p = n_i^2$ | Always valid at equilibrium |
| Intrinsic condition | $n = p = n_i$ | Only for pure semiconductor |
| Intrinsic Fermi level | $E_i = E_{mid} + \\frac{3}{4}kT\\ln\\left(\\frac{m_h^*}{m_e^*}\\right)$ | Position of $E_F$ in pure SC |
| Midgap energy | $E_{mid} = (E_C + E_V)/2$ | Geometric center of gap |
| Fermi-Dirac distribution | $f(E) = \\frac{1}{1+\\exp((E-E_F)/kT)}$ | Probability of occupation |

**Silicon data at T = 300K:**
- $E_g = 1.12$ eV, $N_C = 2.8 \\times 10^{19}$ cm$^{-3}$, $N_V = 1.04 \\times 10^{19}$ cm$^{-3}$
- $m_e^* = 1.08\\,m_0$, $m_h^* = 0.56\\,m_0$, $kT = 0.026$ eV
- $n_i \\approx 10^{10}$ cm$^{-3}$

---

# TD 08 — Intrinsic Semiconductors: Complete Solutions

*Given data (from the problem sheet):*
- Pure Silicon at $T = 300K$
- $E_g = 1.12$ eV
- $N_C = 2.8 \\times 10^{19}$ cm$^{-3}$
- $N_V = 1.04 \\times 10^{19}$ cm$^{-3}$
- $m_e^* = 1.08\\,m_0$, $m_h^* = 0.56\\,m_0$
- $k = 8.617 \\times 10^{-5}$ eV/K, at $T=300K$: $kT = 0.026$ eV

$$n = N_C\\exp\\!\\left[-\\frac{E_C-E_F}{kT}\\right] \\qquad p = N_V\\exp\\!\\left[-\\frac{E_F-E_V}{kT}\\right]$$

---

## Exercise 1: Pure Silicon at T = 300K

### Question 1 — Find the relation between $n_i$ and $E_g$

**Starting point:** The material is intrinsic (pure), so $n = p = n_i$.

**Step 1:** Write out the formulas for $n$ and $p$:
$$n = N_C \\exp\\left(-\\frac{E_C - E_F}{kT}\\right)$$
$$p = N_V \\exp\\left(-\\frac{E_F - E_V}{kT}\\right)$$

**Step 2:** Multiply $n$ and $p$ together:
$$n \\cdot p = N_C N_V \\exp\\left(-\\frac{E_C - E_F}{kT}\\right) \\exp\\left(-\\frac{E_F - E_V}{kT}\\right)$$

**Step 3:** Combine the exponents:
$$n \\cdot p = N_C N_V \\exp\\left(-\\frac{(E_C - E_F) + (E_F - E_V)}{kT}\\right) = N_C N_V \\exp\\left(-\\frac{E_C - E_V}{kT}\\right)$$

**Step 4:** Since $E_C - E_V = E_g$ (definition of bandgap), and since $n = p = n_i$:
$$n_i^2 = N_C N_V \\exp\\left(-\\frac{E_g}{kT}\\right)$$

**Taking the square root:**
$$\\boxed{n_i = \\sqrt{N_C N_V} \\, \\exp\\left(-\\frac{E_g}{2kT}\\right)}$$

*Note the factor of 2 in the denominator of the exponent — this comes from taking the square root.*

---

### Question 2 — Calculate $n_i$ numerically

**Step 1 — Compute the prefactor $\\sqrt{N_C N_V}$:**
$$N_C \\times N_V = (2.8 \\times 10^{19}) \\times (1.04 \\times 10^{19})$$
$$= (2.8 \\times 1.04) \\times 10^{38} = 2.912 \\times 10^{38} \\text{ cm}^{-6}$$
$$\\sqrt{2.912 \\times 10^{38}} = \\sqrt{2.912} \\times 10^{19} = 1.706 \\times 10^{19} \\text{ cm}^{-3}$$

*Quick check: $\\sqrt{2.912} \\approx 1.71$ because $1.71^2 = 2.924 \\approx 2.912$ ✓*

**Step 2 — Compute the exponent $\\frac{E_g}{2kT}$:**
$$2kT = 2 \\times 0.026 = 0.052 \\text{ eV}$$
$$\\frac{E_g}{2kT} = \\frac{1.12}{0.052} = 21.54$$

**Step 3 — Compute the exponential:**
$$\\exp(-21.54) = e^{-21.54}$$

To compute this: $e^{-21.54} = e^{-21} \\times e^{-0.54}$

We know $e^{-21} \\approx 7.58 \\times 10^{-10}$ and $e^{-0.54} \\approx 0.583$

$$\\exp(-21.54) \\approx 7.58 \\times 10^{-10} \\times 0.583 \\approx 4.42 \\times 10^{-10}$$

**Step 4 — Final answer:**
$$n_i = 1.706 \\times 10^{19} \\times 4.42 \\times 10^{-10}$$
$$\\boxed{n_i \\approx 7.5 \\times 10^9 \\text{ cm}^{-3}}$$

*This is consistent with the standard reference value of $n_i \\approx 10^{10}$ cm$^{-3}$ for silicon at 300K. The slight difference comes from the exact values of constants used.*

**Physical interpretation:** There are about $7.5 \\times 10^9$ free electrons (and the same number of holes) per cubic centimeter in pure silicon at room temperature. Silicon has about $5 \\times 10^{22}$ atoms/cm³, so only about 1 in $6 \\times 10^{12}$ silicon atoms contributes a free electron. This is why pure silicon is nearly an insulator!

---

### Question 3 — Find $n_0$ and $p_0$

**This is straightforward.** The crystal is intrinsic (perfectly pure), so by definition:
$$n_0 = p_0 = n_i$$

$$\\boxed{n_0 = p_0 \\approx 7.5 \\times 10^9 \\text{ cm}^{-3}}$$

*The subscript "0" means "at equilibrium" (no external disturbance). The equal sign holds ONLY for intrinsic (pure) semiconductors. The moment you add impurities (doping), $n_0 \\neq p_0$, but their product $n_0 \\cdot p_0 = n_i^2$ always holds.*

---

## Exercise 2: The Position of the Intrinsic Fermi Level

Recall: In a pure semiconductor, the Fermi level is called $E_i$ (intrinsic level). The question asks where exactly it sits relative to the middle of the bandgap $E_{mid} = (E_C + E_V)/2$.

### Question 1 — Derive the formula for $E_i$

**Starting point:** For an intrinsic semiconductor, $n = p$.

**Step 1:** Set the formulas for $n$ and $p$ equal:
$$N_C \\exp\\left(-\\frac{E_C - E_i}{kT}\\right) = N_V \\exp\\left(-\\frac{E_i - E_V}{kT}\\right)$$

**Step 2:** Take the natural logarithm of both sides:
$$\\ln(N_C) - \\frac{E_C - E_i}{kT} = \\ln(N_V) - \\frac{E_i - E_V}{kT}$$

**Step 3:** Rearrange to isolate $E_i$:
$$\\frac{E_i - E_V}{kT} - \\frac{E_C - E_i}{kT} = \\ln(N_V) - \\ln(N_C)$$
$$\\frac{2E_i - E_V - E_C}{kT} = \\ln\\left(\\frac{N_V}{N_C}\\right)$$
$$2E_i = E_C + E_V + kT \\ln\\left(\\frac{N_V}{N_C}\\right)$$
$$E_i = \\frac{E_C + E_V}{2} + \\frac{kT}{2}\\ln\\left(\\frac{N_V}{N_C}\\right)$$

**Step 4:** Now, since $N_C \\propto (m_e^*)^{3/2}$ and $N_V \\propto (m_h^*)^{3/2}$:
$$\\frac{N_V}{N_C} = \\left(\\frac{m_h^*}{m_e^*}\\right)^{3/2}$$

So:
$$\\frac{kT}{2}\\ln\\left(\\frac{N_V}{N_C}\\right) = \\frac{kT}{2} \\cdot \\frac{3}{2}\\ln\\left(\\frac{m_h^*}{m_e^*}\\right) = \\frac{3}{4}kT\\ln\\left(\\frac{m_h^*}{m_e^*}\\right)$$

**Final formula:**
$$\\boxed{E_i = E_{mid} + \\frac{3}{4}kT\\ln\\left(\\frac{m_h^*}{m_e^*}\\right)}$$

So the deviation from the midgap center is:
$$E_i - E_{mid} = \\frac{3}{4}kT\\ln\\left(\\frac{m_h^*}{m_e^*}\\right)$$

---

### Question 2 — Calculate $E_i - E_{mid}$ numerically

**Step 1:** Plug in values:
$$E_i - E_{mid} = \\frac{3}{4} \\times (0.026 \\text{ eV}) \\times \\ln\\left(\\frac{0.56}{1.08}\\right)$$

**Step 2:** Compute the ratio:
$$\\frac{m_h^*}{m_e^*} = \\frac{0.56}{1.08} = 0.5185$$

**Step 3:** Compute the natural log:
$$\\ln(0.5185) = -0.656$$

*(Recall: $\\ln(0.5) = -0.693$, $\\ln(0.5185)$ is slightly less negative ✓)*

**Step 4:** Multiply everything:
$$E_i - E_{mid} = \\frac{3}{4} \\times 0.026 \\times (-0.656)$$
$$= 0.0195 \\times (-0.656)$$
$$\\boxed{E_i - E_{mid} = -0.0128 \\text{ eV} \\approx -12.8 \\text{ meV}}$$

The result is **negative**, meaning $E_i$ is **below** the midgap center.

---

### Question 3 — Which band does $E_i$ approach, and why?

**Answer:** $E_i$ shifts toward the **Valence Band** (since $E_i - E_{mid} < 0$, it is below the midpoint, i.e., closer to $E_V$).

**Physical Reasoning (step by step):**

1. The effective mass of holes ($m_h^* = 0.56\\,m_0$) is **less** than the effective mass of electrons ($m_e^* = 1.08\\,m_0$).

2. The effective density of states is proportional to $(m^*)^{3/2}$. Therefore:
   - More available states in the conduction band: $N_C > N_V$
   - Fewer available states in the valence band: $N_V < N_C$

3. For an intrinsic semiconductor, we need exactly as many electrons as holes: $n = p$.

4. Since the conduction band has MORE available chairs ($N_C > N_V$), a given Fermi level position near midgap would put more electrons in the CB than holes in VB.

5. To restore balance ($n = p$), the Fermi level must shift **downward** (closer to VB). This increases the probability of holes forming (more of the VB states become "almost empty") while slightly decreasing the probability of electrons in the CB. Equilibrium is restored.

**Energy diagram:**
\`\`\`
E_C ════════════════════
         ↕ 0.56 eV     (upper half of gap)

E_mid ─ ─ ─ ─ ─ ─ ─ ─
         ↕ 0.013 eV   ← this tiny shift
E_i  ─ ─ ─ ─ ─ ─ ─ ─  ← intrinsic Fermi level (12.8 meV below midgap)
         ↕ 0.547 eV    (lower half of gap)

E_V ════════════════════
\`\`\`

The shift of 12.8 meV is very small compared to the total gap of 1.12 eV (only about 1.1%), so the intrinsic Fermi level is approximately at midgap for most purposes.

---

## 2b. The Kronig-Penney Model — Why Bands and Gaps Really Exist

So far we have accepted that energy bands and forbidden gaps **exist** in crystals. But where do they actually come from? We need a physical model — and the simplest model that captures the physics completely is the **Kronig-Penney model**, introduced in 1931.

### The Big Question

An electron in free space has a perfectly smooth, continuous range of allowed energies. You can give it any energy you like; it will accept it. So why, the moment that same electron is placed inside a crystal, does it suddenly develop forbidden zones — energies it simply **cannot have**?

The answer is: **waves and periodic structures interfere.** When the spacing of a periodic obstacle matches the wavelength of a wave, you get Bragg reflection — the wave cannot propagate. This is exactly what happens to electron waves in a crystal.

### The Model: A Crystal as a Row of Square Barriers

The Kronig-Penney model represents the crystal as a **one-dimensional periodic potential** — a regular repetition of potential wells and barriers:

\`\`\`
Potential V(x):

 V0 ┤  ┌──┐   ┌──┐   ┌──┐   ┌──┐   ...
    │  │  │   │  │   │  │   │  │
  0 ┼──┘  └───┘  └───┘  └───┘  └───  → x
    │← b →│← a →│← b →│← a →│
    │      atom  barrier atom  ...
    │      well        well
\`\`\`

Formally, the potential is periodic with period $c = a + b$:

$$V(x) = V(x + a + b)$$

**Two regions inside one period:**

- **Region I** (width $a$, the "atom well"): $V = V_1 = 0$. This is where the electron sits near an atomic nucleus; the potential is low (we set it to zero as our reference).
- **Region II** (width $b$, the "barrier"): $V = V_0 > 0$. This represents the repulsive potential between atoms, the region where the electron is between nuclei.

Every term defined:
- $a$ = width of one atom potential well (meters)
- $b$ = width of one barrier between atoms (meters)
- $V_0$ = height of the barrier (Joules or eV, always positive)
- The period of the crystal is $c = a + b$

### Setting Up the Schrödinger Equation

The time-independent Schrödinger equation is:

$$-\\frac{\\hbar^2}{2m}\\frac{d^2\\psi}{dx^2} + V(x)\\psi = E\\psi$$

**In Region I** (V = 0, the well):

$$\\frac{d^2\\psi}{dx^2} + \\alpha^2\\psi = 0 \\qquad \\text{where } \\alpha^2 = \\frac{2mE}{\\hbar^2}$$

The solution is a free oscillation:
$$\\psi_I(x) = A e^{j\\alpha x} + B e^{-j\\alpha x}$$

Here $\\alpha = \\sqrt{2mE}/\\hbar$ is the **wave vector inside the well** — it tells us how fast the wavefunction oscillates.

**In Region II** (V = V₀, the barrier):

$$\\frac{d^2\\psi}{dx^2} - \\beta^2\\psi = 0 \\qquad \\text{where } \\beta^2 = \\frac{2m(V_0 - E)}{\\hbar^2}$$

For $E < V_0$ (the electron's energy is below the barrier top — the realistic case), $\\beta$ is real and the solution decays exponentially:
$$\\psi_{II}(x) = C e^{\\beta x} + D e^{-\\beta x}$$

The electron "tunnels" through the barrier with amplitude that decreases exponentially. This is quantum tunnelling — classically impossible, but quantum mechanically real.

### Born-von Kármán Boundary Conditions — Why $k$ is Quantized

The crystal has a finite length $L = N(a+b)$ where $N$ is the total number of unit cells (typically $N \\sim 10^8$ for a 1 cm crystal). We wrap the crystal into a ring (a mathematical trick — periodic boundary conditions):

$$\\psi(x + L) = \\psi(x)$$

This is called the **Born-von Kármán** (or periodic) boundary condition. Here is why it is used: the real boundary condition (wavefunction goes to zero at the crystal surface) would force us to solve an enormously complicated problem. The periodic condition gives the same physics for the bulk of the crystal, and is vastly simpler.

What does this force? The wavefunction is a traveling wave $e^{jkx}$. Imposing $e^{jk(x+L)} = e^{jkx}$ requires:

$$e^{jkL} = 1 \\ \\Rightarrow \\ kL = 2\\pi n \\ \\Rightarrow \\ k = \\frac{2\\pi n}{L} = \\frac{2\\pi n}{N(a+b)}$$

where $n = 0, \\pm 1, \\pm 2, \\ldots$ is any integer.

This is the fundamental quantization of $k$: in a finite crystal, the wave vector is not continuous but takes **discrete values** separated by $2\\pi/L$. The smaller the crystal, the farther apart the allowed $k$ values. For a macroscopic crystal, the spacing $2\\pi/L$ is tiny ($\\sim 10^{-8}$ m$^{-1}$) and we treat $k$ as quasi-continuous.

**How many allowed $k$ values are there?** The first Brillouin zone runs from $-\\pi/(a+b)$ to $+\\pi/(a+b)$. The spacing between consecutive $k$ values is $2\\pi/[N(a+b)]$. The total number of distinct $k$ values in the first Brillouin zone is:

$$\\frac{\\pi/(a+b) - (-\\pi/(a+b))}{2\\pi/[N(a+b)]} = \\frac{2\\pi/(a+b)}{2\\pi/[N(a+b)]} = N$$

**There are exactly $N$ allowed $k$ values in the first Brillouin zone — one per unit cell.** This is a profound result: the number of quantum states exactly matches the number of atoms.

### Bloch's Theorem — The Shape of the Electron Wavefunction

Before solving the matching conditions, there is a deep mathematical theorem that constrains the form of $\\psi(x)$ in any periodic potential. **Bloch's Theorem** states:

$$\\boxed{\\psi_k(x) = U_k(x) \\cdot e^{jkx}}$$

Every term:
- $\\psi_k(x)$ = the electron wavefunction for Bloch wave vector $k$
- $e^{jkx}$ = a plane wave traveling with wave vector $k$ (the "carrier wave")
- $U_k(x)$ = a function that is **periodic with the crystal period**: $U_k(x + a + b) = U_k(x)$ (the "envelope" modulated by the crystal)
- $k$ = the Bloch wave vector — the quantum number that labels the electronic state in a periodic crystal

**Physical interpretation:** The electron wavefunction in a crystal is not a simple plane wave (that would be the free electron). It is a plane wave **modulated** by the periodic crystal structure. The crystal "stamps" its periodicity onto the electron. The electron still propagates freely in the sense of having a definite $k$, but its amplitude varies from atom to atom with the crystal's own rhythm.

Analogy: Imagine a sound wave (the plane wave part) traveling through a hallway with evenly spaced pillars (the $U_k$ part). The sound still travels forward, but its amplitude is shaped by the positions of the pillars.

### The Four Matching Conditions

At the boundary between Region I and Region II, and between Region II and the next Region I, both $\\psi$ and $d\\psi/dx$ must be continuous (from quantum mechanics: discontinuous $\\psi$ would violate probability conservation; discontinuous $d\\psi/dx$ would imply an infinite force).

After applying these four conditions (two per boundary) and using Bloch's theorem to relate the solution in one unit cell to the adjacent one, the algebra yields one central equation. We will not grind through all the algebra here — instead, let us understand **what the result says**.

### The Key Result: The Dispersion Relation

After all the matching, the condition for an electron state with energy $E$ and Bloch vector $k$ to exist is:

$$\\boxed{\\frac{\\beta^2 - \\alpha^2}{2\\alpha\\beta}\\sinh(\\beta b)\\sin(\\alpha a) + \\cosh(\\beta b)\\cos(\\alpha a) = \\cos[k(a+b)]}$$

Let us call the entire left side $P(E)$ — it is a function of energy $E$ alone (since $\\alpha$ and $\\beta$ are both determined by $E$ and $V_0$):

$$P(E) = \\cos[k(a+b)]$$

Every symbol:
- $\\alpha = \\sqrt{2mE}/\\hbar$ — wave vector in the well, depends on $E$
- $\\beta = \\sqrt{2m(V_0-E)}/\\hbar$ — inverse decay length in the barrier, depends on $E$ and $V_0$
- $a$ = well width, $b$ = barrier width
- $k$ = Bloch wave vector (the quantum number for the state)

**This equation is the entire Kronig-Penney result.** Everything — allowed bands, forbidden gaps, effective masses — follows from it.

### The Physical Meaning: Why Bands and Gaps Appear

Here is the key insight. The right-hand side, $\\cos[k(a+b)]$, is bounded:

$$-1 \\leq \\cos[k(a+b)] \\leq +1$$

The cosine can never be larger than 1 or smaller than -1. But the left-hand side $P(E)$ is an oscillating function of energy that sometimes exceeds $\\pm 1$.

- **When $|P(E)| \\leq 1$:** There exists a real value of $k$ that satisfies the equation. The electron CAN exist at this energy. This energy range is an **allowed band**.
- **When $|P(E)| > 1$:** No real $k$ can satisfy the equation (since $\\cos$ is bounded). The electron CANNOT exist at this energy. This energy range is a **forbidden gap**.

\`\`\`
P(E) vs Energy — showing bands and gaps:

P(E)
 +1 ─────┐  ┌──────────┐  ┌──────────
         │  │  ALLOWED │  │  ALLOWED   ← bands: |P(E)| ≤ 1
         │  │          │  │
  0 ─────│──│──────────│──│──────────
         │  │          │  │
 -1 ─────┘  └──────────┘  └──────────
   │      │              │
   ← GAP →               ← GAP →
 (|P|>1, (forbidden)   (forbidden)

        Energy E  →
Allowed bands (shaded): where the P(E) curve stays between -1 and +1.
Forbidden gaps: where the P(E) curve overshoots beyond ±1.
\`\`\`

**Analogy — the fence and the wave.** Think of the crystal as a picket fence with evenly spaced posts (the barriers). An electron is like a water wave washing over this fence. Most wave frequencies flow through easily. But at certain special frequencies, the spacing of the posts matches the wave in such a way that each reflected ripple adds up coherently (constructive interference of reflections) — the wave is completely blocked. That blocked frequency is a forbidden energy. The allowed frequencies between these resonances form the allowed bands.

More precisely: at the edge of the Brillouin zone, $k = \\pm\\pi/(a+b)$, the electron wavelength $\\lambda = 2(a+b)$ — exactly twice the lattice period. This is the **Bragg condition**: the electron wave reflects perfectly off every lattice plane, the forward and backward waves interfere to form a standing wave, and there are **two** possible standing waves (one peaked on the atom positions, one peaked between them). These two standing waves have different potential energies — this energy difference is the gap.

### The Simplified (Delta-Function) Limit

A commonly used simplification takes $b \\to 0$ and $V_0 \\to \\infty$ simultaneously such that $P_0 \\equiv V_0 b m a / \\hbar^2$ stays finite. This replaces the rectangular barriers with Dirac delta functions. In this limit the dispersion equation becomes:

$$\\frac{P_0}{\\alpha a}\\sin(\\alpha a) + \\cos(\\alpha a) = \\cos(ka)$$

This is algebraically cleaner and shows the same physics. The parameter $P_0$ measures the "strength" of the periodic potential: large $P_0$ means wide, deep gaps; $P_0 \\to 0$ gives the free electron result.

### The Free Electron Limit

When $V_0 \\to 0$ (no barriers), the Kronig-Penney result must reduce to the free electron. And it does: the equation becomes $\\cos(\\alpha a) = \\cos(ka)$, so $\\alpha = k$, and since $\\alpha = \\sqrt{2mE}/\\hbar$:

$$E = \\frac{\\hbar^2 k^2}{2m}$$

This is the familiar **free electron parabolic dispersion** — a smooth parabola in the $E$-vs-$k$ diagram, no gaps. As we gradually turn on $V_0$, the parabola develops kinks and gaps at $k = \\pm n\\pi/(a+b)$, splitting into separate bands.

### The First Brillouin Zone

The $k$-space is divided into **Brillouin zones**. The first Brillouin zone is:

$$k \\in \\left[-\\frac{\\pi}{a+b},\\ +\\frac{\\pi}{a+b}\\right]$$

We focus on this zone because $k$ and $k + 2\\pi/(a+b)$ describe the same physical state in a periodic crystal (adding a reciprocal lattice vector changes nothing observable). By convention we fold all states back into the first Brillouin zone — this is called the **reduced zone scheme**.

\`\`\`
E vs k — Band Diagram (reduced zone scheme):

 Energy
   ↑      Band 3
   │   ────────────  ← E_C3
   │      GAP 2
   │   ────────────  ← E_V3 = E_C2... and so on
   │      Band 2
   │   ────────────
   │      GAP 1       ← THE important gap for semiconductors
   │   ─────╮╭─────  ← E_C (conduction band bottom)
   │         │         Bandgap Eg
   │   ─────╯╰─────  ← E_V (valence band top)
   │      Band 1
   │
   └────────────────────────→ k
   -π/(a+b)    0    +π/(a+b)

Each band holds exactly 2N states (factor 2 for spin), N = number of unit cells.
\`\`\`

### Summary of the Kronig-Penney Model

1. A periodic potential, no matter how weak, creates gaps in the electron energy spectrum.
2. Allowed energies form **bands**; forbidden energies form **gaps**.
3. There are exactly $N$ allowed $k$ values (and therefore $2N$ states including spin) per band, where $N$ is the number of unit cells.
4. Near band edges, the dispersion is approximately parabolic: $E \\approx E_{edge} + \\hbar^2(k-k_0)^2/2m^*$, defining the effective mass $m^*$.
5. The free electron is a special case ($V_0 = 0$) with no gaps.

---

## 2c. Density of States — Counting Available Energy Levels

We know bands exist. Now we ask: **how many quantum states are available at each energy?** This is essential because the number of electrons at each energy = (number of states) × (probability each is occupied).

The **Density of States** $g(E)$ (sometimes written $N(E)$ or $D(E)$) is defined as:

$$g(E) = \\frac{\\text{number of quantum states in energy range } [E,\\ E+dE]}{dE \\times \\text{Volume}}$$

Units: states per eV per cm³ (or m³).

### Step 1 — Quantization of $k$ in 1D

In a 1D crystal of length $L$, with Born-von Kármán conditions, the allowed $k$ values are:

$$k_n = \\frac{2\\pi n}{L}, \\qquad n = 0, \\pm 1, \\pm 2, \\ldots$$

The **density of $k$-states in 1D** is the number of $k$ values per unit length of $k$-space:

$$\\frac{dn}{dk} = \\frac{L}{2\\pi}$$

This says: in a length $2\\pi$ of $k$-space, there are $L$ allowed $k$ values. The longer the crystal, the more densely packed the $k$-values.

### Step 2 — Extending to 3D

In a real 3D crystal with volume $V = L_x L_y L_z$, the boundary conditions in each direction give:

$$k_x = \\frac{2\\pi n_x}{L_x}, \\quad k_y = \\frac{2\\pi n_y}{L_y}, \\quad k_z = \\frac{2\\pi n_z}{L_z}$$

Each quantum state in $k$-space occupies a tiny "volume" of:

$$\\frac{(2\\pi)^3}{L_x L_y L_z} = \\frac{(2\\pi)^3}{V}$$

Therefore the **density of $k$-states in 3D** (states per unit volume of $k$-space per unit crystal volume) is:

$$\\frac{1}{V} \\cdot \\frac{V}{(2\\pi)^3} = \\frac{1}{(2\\pi)^3}$$

Including **spin** (each $k$ state can hold 2 electrons, spin up and spin down), the total density of states in $k$-space per unit crystal volume is:

$$\\frac{2}{(2\\pi)^3} = \\frac{1}{4\\pi^3}$$

This is a fundamental result. Every single $k$-space volume of $(2\\pi)^3$ per crystal volume contains exactly 2 electron states.

### Step 3 — Converting from $k$-space to Energy Space

Near the bottom of the conduction band, the energy is approximately parabolic (just like the free electron, but with effective mass $m_e^*$):

$$E = E_C + \\frac{\\hbar^2 k^2}{2m_e^*}$$

This means constant-energy surfaces in $k$-space are **spheres** of radius $k = \\sqrt{2m_e^*(E - E_C)}/\\hbar$.

The number of states with energy between $E_C$ and $E$ is the number of $k$-states inside this sphere, times 2 for spin:

$$n(E) = \\frac{2}{(2\\pi)^3} \\cdot \\frac{4}{3}\\pi k^3 = \\frac{2}{(2\\pi)^3} \\cdot \\frac{4\\pi}{3}\\left(\\frac{\\sqrt{2m_e^*(E-E_C)}}{\\hbar}\\right)^3$$

Taking the derivative with respect to $E$ gives the density of states:

$$\\boxed{g_C(E) = \\frac{4\\pi(2m_e^*)^{3/2}}{h^3}\\sqrt{E - E_C}} \\qquad \\text{for } E \\geq E_C$$

Every symbol:
- $g_C(E)$ = density of states in the conduction band (states per eV per cm³)
- $m_e^*$ = electron effective mass
- $h = 2\\pi\\hbar$ = Planck's constant
- $E_C$ = conduction band edge energy
- The square-root dependence on $(E - E_C)$ is universal for any parabolic band in 3D

For the valence band (holes near $E_V$, same derivation with $m_h^*$ and energy measured downward from $E_V$):

$$\\boxed{g_V(E) = \\frac{4\\pi(2m_h^*)^{3/2}}{h^3}\\sqrt{E_V - E}} \\qquad \\text{for } E \\leq E_V$$

\`\`\`
Density of States g(E):

  g(E)
   ↑
   │                       ╱  ← g_C(E) ∝ √(E - E_C)
   │                      ╱
   │                     ╱
   │    ────────────────── E_C
   │         (gap, g = 0)
   │    ──────────────────  E_V
   │                    ╲
   │                     ╲
   │                      ╲  ← g_V(E) ∝ √(E_V - E)
   └────────────────────────────→ E

The DOS is zero in the bandgap (no states to fill).
It grows as a square root away from each band edge.
\`\`\`

### The Effective Density of States $N_C$ and $N_V$

When we compute the total electron concentration $n$, we integrate $g_C(E) \\cdot f(E)$ from $E_C$ to infinity. For $E_F$ well below $E_C$ (the realistic case for undoped or lightly doped silicon), $f(E) \\approx \\exp(-(E-E_F)/kT)$ (the Boltzmann approximation — Fermi-Dirac reduces to a simple exponential). This integral evaluates analytically:

$$n = \\int_{E_C}^{\\infty} g_C(E)\\, f(E)\\, dE = N_C \\exp\\!\\left(-\\frac{E_C - E_F}{kT}\\right)$$

where the **effective density of states** of the conduction band is:

$$N_C = 2\\left(\\frac{2\\pi m_e^* kT}{h^2}\\right)^{3/2}$$

This $N_C$ is the single number that summarizes "all the states in the conduction band condensed to a single level at $E_C$". It absorbs the entire shape of the parabolic DOS and the Boltzmann factor integration into one convenient constant.

Similarly for holes:

$$p = N_V \\exp\\!\\left(-\\frac{E_F - E_V}{kT}\\right), \\qquad N_V = 2\\left(\\frac{2\\pi m_h^* kT}{h^2}\\right)^{3/2}$$

These are the same formulas used throughout this chapter. Now you know exactly where they come from: they result from integrating the parabolic 3D density of states against a Boltzmann tail.

---

## 2d. Temperature Dependence of $n_i$ — Why Silicon Conducts More When Hot

We established that:

$$n_i = \\sqrt{N_C N_V}\\,\\exp\\!\\left(-\\frac{E_g}{2kT}\\right)$$

But this formula has a hidden subtlety: **both $N_C$, $N_V$ and $E_g$ are themselves temperature-dependent.** Let us unpack this carefully.

### The $T^{3/2}$ Factor from $N_C N_V$

Since $N_C \\propto T^{3/2}$ and $N_V \\propto T^{3/2}$, we have:

$$N_C N_V \\propto T^3 \\quad \\Rightarrow \\quad \\sqrt{N_C N_V} \\propto T^{3/2}$$

So even the prefactor grows with temperature. Putting this together:

$$\\boxed{n_i(T) = H \\cdot T^{3/2} \\cdot \\exp\\!\\left(-\\frac{E_g(T)}{2kT}\\right)}$$

Every symbol:
- $H$ = material-dependent constant (absorbs the effective masses and all numerical prefactors), units: cm⁻³ K⁻³/²
- $T$ = absolute temperature (Kelvin)
- $E_g(T)$ = bandgap at temperature $T$ (eV) — note this also changes with $T$!

At 300 K for Si: $H \\approx 3.87 \\times 10^{16}$ cm⁻³ K⁻³/².

### The Varshni Formula — How the Bandgap Shrinks With Temperature

As temperature increases, atoms in the crystal vibrate more strongly. These lattice vibrations (phonons) interact with electrons and cause the bands to shift. The valence band moves up slightly, the conduction band moves down slightly — the net effect is that **the bandgap narrows** as temperature rises.

The empirical formula that fits experimental data for most semiconductors is the **Varshni formula** (1967):

$$\\boxed{E_g(T) = E_g(0) - \\frac{\\alpha T^2}{T + \\beta}}$$

Every symbol:
- $E_g(0)$ = bandgap at absolute zero (0 K), extrapolated value in eV
- $\\alpha$ = Varshni coefficient (eV/K), material-specific, measures how fast the gap shrinks with $T$
- $\\beta$ = Varshni coefficient (K), material-specific, related to the Debye temperature of the lattice
- $T$ = temperature in Kelvin

**For Silicon:**
- $E_g(0) = 1.170$ eV
- $\\alpha = 4.73 \\times 10^{-4}$ eV/K
- $\\beta = 636$ K

**Calculation at T = 300 K:**

$$E_g(300) = 1.170 - \\frac{(4.73 \\times 10^{-4}) \\times (300)^2}{300 + 636}$$

$$= 1.170 - \\frac{4.73 \\times 10^{-4} \\times 90000}{936}$$

$$= 1.170 - \\frac{42.57}{936}$$

$$= 1.170 - 0.0455$$

$$\\approx 1.125 \\text{ eV}$$

This confirms the standard $E_g(\\text{Si}, 300\\text{ K}) \\approx 1.12$ eV. At $T = 0$, the gap is slightly wider (1.17 eV); at very high temperatures it narrows.

**For GaAs:** $E_g(0) = 1.519$ eV, $\\alpha = 5.41 \\times 10^{-4}$ eV/K, $\\beta = 204$ K → $E_g(300K) \\approx 1.42$ eV.

### Why $n_i$ Grows So Rapidly With Temperature

There are two effects both working in the same direction:

1. **The exponential factor** $\\exp(-E_g/2kT)$: as $T$ increases, $kT$ increases, so $E_g/2kT$ decreases, and the exponential becomes less small. An electron that "almost" had enough thermal energy at 300 K now easily clears the gap at 400 K.

2. **The $T^{3/2}$ prefactor**: more thermal vibration means the bands spread slightly (more available states), so $N_C$ and $N_V$ grow.

3. **The bandgap itself narrows** with $T$ (Varshni), making the exponential factor grow even faster.

The result is that $n_i$ increases by **many orders of magnitude** over a modest temperature range. For silicon:

| Temperature | $n_i$ (cm⁻³) |
|---|---|
| 250 K | $\\sim 10^7$ |
| 300 K | $\\sim 10^{10}$ |
| 400 K | $\\sim 10^{14}$ |
| 500 K | $\\sim 10^{16}$ |

From 250 K to 500 K — a factor of 2 in temperature — $n_i$ increases by roughly 9 orders of magnitude! This is the power of the exponential.

### The $\\ln(n_i)$ vs $1/T$ Plot

Taking the natural logarithm of $n_i(T) = H T^{3/2} \\exp(-E_g/2kT)$:

$$\\ln(n_i) = \\ln(H) + \\frac{3}{2}\\ln(T) - \\frac{E_g}{2kT}$$

At high enough temperatures, the last term dominates (it grows as $1/T$, while $\\ln(T)$ grows much more slowly). So a plot of $\\ln(n_i)$ versus $1/T$ is approximately a **straight line** with slope:

$$\\text{slope} = -\\frac{E_g}{2k}$$

\`\`\`
ln(nᵢ) vs 1/T — Arrhenius Plot:

ln(nᵢ)
  ↑
  │     ·
  │        ·
  │            ·
  │                ·
  │                    ·      slope = -Eg/(2k)
  │                        ·
  │                            ·
  └──────────────────────────────→ 1/T
  (high T →)          (← low T)

A straight line whose slope tells you the bandgap Eg.
This is how bandgaps are measured experimentally!
\`\`\`

**This is how semiconductor bandgaps are measured experimentally:** measure $n_i$ at different temperatures, plot $\\ln(n_i)$ vs $1/T$, find the slope, multiply by $-2k$. You get $E_g$ directly.

---

## 2e. Extrinsic Semiconductors — The Art of Controlled Doping

Pure silicon at room temperature has $n_i \\approx 10^{10}$ cm⁻³. This is enormously low — silicon has $5 \\times 10^{22}$ atoms per cm³, yet only 1 in $5 \\times 10^{12}$ of them contributes a free electron. Pure silicon is nearly an insulator, and its conductivity changes wildly with temperature (following $n_i(T)$). It is almost useless for making transistors.

The brilliant solution found in the 1940s by William Shockley's team at Bell Labs: **doping** — deliberately replacing a tiny fraction of silicon atoms with atoms from neighboring columns of the periodic table. This can change the electron concentration from $10^{10}$ to $10^{20}$ cm⁻³ — ten orders of magnitude of control. This is the foundation of all modern electronics.

### N-Type Doping — Adding Extra Electrons (Group V: P, As, Sb)

Silicon is in Group IV: it has 4 valence electrons and forms 4 covalent bonds with its 4 neighbors.

Now replace one silicon atom with a **phosphorus (P)** atom. Phosphorus is in Group V — it has 5 valence electrons. In the silicon lattice, 4 of its electrons form normal covalent bonds with the 4 neighboring silicon atoms. But the **5th electron** has no bond to fill. It sits bound to the phosphorus nucleus by a weak electrostatic attraction (screened by the surrounding silicon crystal).

How weakly is it bound? Using the hydrogen atom model but with the silicon dielectric constant ($\\varepsilon_r \\approx 11.7$) and electron effective mass, the binding energy is approximately:

$$E_D \\approx \\frac{m_e^*}{m_0 \\varepsilon_r^2} \\times 13.6 \\text{ eV} \\approx \\frac{1.08}{11.7^2} \\times 13.6 \\approx 0.045 \\text{ eV}$$

So the 5th electron is bound to the phosphorus by only about **45 meV** below the conduction band edge. At room temperature, $kT = 26$ meV — this is barely enough to ionize the donor. In practice, near full ionization occurs because there is a large reservoir of available states in the conduction band (the entropy favors ionization).

**The donor level** $E_D$ sits approximately 50 meV below $E_C$ in silicon. The thermal energy at 300 K ($kT = 26$ meV) is sufficient to kick most of these electrons up into the conduction band.

\`\`\`
N-type energy diagram (phosphorus in silicon):

  E_C ════════════════════════  ← conduction band edge
    ↕ ~50 meV
  E_D - - - - - - - - - - - -  ← donor level (P, As, Sb)
                                  (5th electron sits here when NOT ionized)

  (bandgap ~1.12 eV)

  E_V ════════════════════════  ← valence band edge

At 300K: most P atoms are ionized → P⁺ + e⁻(free)
\`\`\`

**Ionization reaction:**

$$D^0 \\rightleftharpoons D^+ + e^-$$

where $D^0$ = neutral donor (5th electron still attached), $D^+$ = ionized donor (5th electron gone to conduction band), $e^-$ = free electron in conduction band.

The total donor concentration $N_D$ splits into neutral and ionized:

$$N_D = N_D^0 + N_D^+$$

**Occupation probability of the donor level** — the probability that the donor is still neutral (still has its extra electron). There is a subtle quantum statistics factor here: the donor level can hold at most **one** electron (because a second electron would need to share the same orbital, creating a doubly-occupied state with much higher energy). This introduces a **degeneracy factor of 2** (two possible spin states for the single electron):

$$f(E_D) = \\frac{N_D^0}{N_D} = \\frac{1}{1 + \\frac{1}{2}\\exp\\!\\left(\\frac{E_D - E_F}{kT}\\right)}$$

Note the factor of $\\frac{1}{2}$ (not $1$) compared to the standard Fermi-Dirac: it comes from the degeneracy factor $g = 2$ in the denominator.

**Ionized donor fraction:**

$$\\frac{N_D^+}{N_D} = 1 - f(E_D) = \\frac{1}{1 + 2\\exp\\!\\left(\\frac{E_F - E_D}{kT}\\right)}$$

$$\\boxed{N_D^+ = \\frac{N_D}{1 + 2\\exp\\!\\left(\\frac{E_F - E_D}{kT}\\right)}}$$

### P-Type Doping — Adding Holes (Group III: B, Al, Ga, In)

Now replace one silicon atom with **boron (B)**. Boron is in Group III — it has only 3 valence electrons. It forms 3 covalent bonds with neighbors, but the **4th bond is incomplete** — it is missing one electron.

This missing electron is a **hole** in the valence band. The boron atom wants to "capture" an electron from the valence band to complete its 4th bond. When it does, it becomes $B^-$ (negatively ionized) and a hole is released into the valence band:

$$A^0 + e^- \\rightleftharpoons A^-$$

or equivalently: a neutral acceptor captures a valence band electron, releasing a free hole.

The **acceptor level** $E_A$ sits approximately 50 meV **above** $E_V$ in silicon:

\`\`\`
P-type energy diagram (boron in silicon):

  E_C ════════════════════════  ← conduction band edge

  (bandgap ~1.12 eV)

  E_A - - - - - - - - - - - -  ← acceptor level (B, Al, Ga)
    ↕ ~50 meV                     (empty = neutral A⁰; filled = ionized A⁻)
  E_V ════════════════════════  ← valence band edge

At 300K: most B atoms are ionized → B⁻ + h⁺(free hole)
\`\`\`

**Ionized acceptor fraction** (with degeneracy factor 2, same reasoning):

$$\\frac{N_A^-}{N_A} = \\frac{1}{1 + \\frac{1}{2}\\exp\\!\\left(\\frac{E_A - E_F}{kT}\\right)}$$

$$\\boxed{N_A^- = \\frac{N_A}{1 + \\frac{1}{2}\\exp\\!\\left(\\frac{E_A - E_F}{kT}\\right)}}$$

### The Charge Neutrality Condition

A semiconductor is always electrically neutral — it started neutral, and adding impurities doesn't change that. Every positive charge must be balanced by a negative charge. The charges present are:

- **Positive:** free electrons (no! electrons are negative), free holes ($p$, charge $+q$ each), ionized donors ($N_D^+$, each missing one electron → charge $+q$)
- **Negative:** free electrons ($n$, charge $-q$ each), ionized acceptors ($N_A^-$, each captured an electron → charge $-q$)

Charge neutrality: total positive = total negative:

$$\\boxed{p + N_D^+ = n + N_A^-}$$

This is the **charge neutrality equation** — the master equation of doping physics. Every doping problem starts here.

### Full Ionization Approximation (The Standard Case at 300 K)

At room temperature (300 K), $kT = 26$ meV. Donors are typically 50 meV below $E_C$ and acceptors 50 meV above $E_V$. For typical doping levels ($10^{15}$ to $10^{18}$ cm⁻³), the Fermi level stays well away from $E_D$ and $E_A$, so the exponential factors in the occupation formulas make nearly all donors ionized and nearly all acceptors ionized:

$$N_D^+ \\approx N_D, \\qquad N_A^- \\approx N_A$$

The charge neutrality equation simplifies to:

$$\\boxed{n + N_A = p + N_D}$$

This is the equation you will use in 99% of all doping problems.

### Solving for Carrier Concentrations — N-Type (ND >> NA)

For an N-type semiconductor with donor concentration $N_D$ and negligible acceptors ($N_A \\approx 0$):

**Charge neutrality:** $n = p + N_D^+ \\approx p + N_D$

**Law of mass action:** $p = n_i^2 / n$

Substituting:

$$n = \\frac{n_i^2}{n} + N_D$$

$$n^2 - N_D n - n_i^2 = 0$$

Solving the quadratic:

$$n = \\frac{N_D}{2} + \\sqrt{\\left(\\frac{N_D}{2}\\right)^2 + n_i^2}$$

(we take the positive root since $n > 0$).

**In the normal case** $N_D \\gg n_i$ (doping concentration much larger than intrinsic, which is true for $N_D > 10^{12}$ cm⁻³ at 300 K):

$$\\boxed{n_0 \\approx N_D, \\qquad p_0 = \\frac{n_i^2}{N_D}}$$

The equilibrium electron concentration equals the donor concentration (every donor gives one free electron), and holes are suppressed below the intrinsic value.

**Practical example:** Silicon doped with $N_D = 10^{16}$ cm⁻³ of phosphorus at 300 K:

$$n_0 = 10^{16} \\text{ cm}^{-3}$$

$$p_0 = \\frac{(10^{10})^2}{10^{16}} = \\frac{10^{20}}{10^{16}} = 10^4 \\text{ cm}^{-3}$$

The electron concentration jumped from $10^{10}$ (intrinsic) to $10^{16}$ — a factor of a million. Meanwhile holes dropped from $10^{10}$ to $10^4$ — also by a factor of a million. Their product: $10^{16} \\times 10^4 = 10^{20} = (10^{10})^2 = n_i^2$ ✓ — the Law of Mass Action is satisfied.

### Solving for Carrier Concentrations — P-Type (NA >> ND)

For a P-type semiconductor with acceptor concentration $N_A$ and negligible donors:

$$\\boxed{p_0 \\approx N_A, \\qquad n_0 = \\frac{n_i^2}{N_A}}$$

### The Fermi Level Position in Extrinsic Semiconductors

The Fermi level position is determined by the carrier concentrations. Recall from Chapter 2:

$$n_0 = n_i \\exp\\!\\left(\\frac{E_F - E_i}{kT}\\right)$$

Solving for $E_F$:

$$\\boxed{E_F = E_i + kT \\ln\\!\\left(\\frac{n_0}{n_i}\\right)} \\qquad \\text{(general formula)}$$

For N-type ($n_0 \\approx N_D$):

$$E_F = E_i + kT \\ln\\!\\left(\\frac{N_D}{n_i}\\right)$$

Since $N_D > n_i$, the logarithm is positive → $E_F > E_i$ → **the Fermi level moves UP toward $E_C$**.

Similarly for holes: $p_0 = n_i \\exp((E_i - E_F)/kT)$, so for P-type ($p_0 \\approx N_A$):

$$E_F = E_i - kT \\ln\\!\\left(\\frac{N_A}{n_i}\\right)$$

Since $N_A > n_i$, the logarithm is positive → $E_F < E_i$ → **the Fermi level moves DOWN toward $E_V$**.

\`\`\`
Fermi Level Positions:

N-type (ND = 10¹⁶):          Intrinsic:          P-type (NA = 10¹⁶):

E_C ═══════════              E_C ═══════════      E_C ═══════════
      ↕ 0.35 eV
E_F ─────────────
                             E_F = E_i ─ ─ ─
E_i  - - - - - - -          E_i  - - - - - -              E_i  - - - - - -
                                                  E_F ─────────────
                                                        ↕ 0.35 eV
E_V ═══════════              E_V ═══════════      E_V ═══════════

EF above Ei = more electrons  EF ≈ midgap = equal  EF below Ei = more holes
\`\`\`

**Physical reason for $E_F$ moving toward $E_C$ in N-type:** The Fermi level is the "chemical potential" for electrons. More electrons means higher chemical potential. More electrons in the system → $E_F$ rises toward the conduction band, making the Boltzmann probability of conduction band occupation higher, which is consistent with more electrons being present.

### Compensation Doping

What if both donors and acceptors are present simultaneously? The donors and acceptors "compensate" each other: each donor gives one electron, each acceptor takes one electron. The net effect is the difference:

**If $N_D > N_A$:** The semiconductor is N-type with effective doping $N_D - N_A$:

$$n_0 \\approx N_D - N_A, \\qquad p_0 = \\frac{n_i^2}{N_D - N_A}$$

**If $N_A > N_D$:** The semiconductor is P-type with effective doping $N_A - N_D$:

$$p_0 \\approx N_A - N_D, \\qquad n_0 = \\frac{n_i^2}{N_A - N_D}$$

**If $N_A = N_D$:** Perfect compensation — the semiconductor behaves intrinsically ($n_0 = p_0 = n_i$), even though it is heavily doped! This is used in some device fabrication steps.

### The Three Temperature Regimes — The Most Important Exam Topic

If you have an N-type silicon sample and you cool it from 700 K down to nearly 0 K, watching $n(T)$ throughout, you observe three completely different behaviors. Understanding these three regimes deeply is essential.

\`\`\`
n(T) vs Temperature — N-type Silicon (ND = 10¹⁶ cm⁻³):

log(n)
  ↑
  │                          ╱ ← Intrinsic regime: n ≈ nᵢ(T) >> ND
  │                         ╱    n rises exponentially
10¹⁶ ──────────────────────       ← Extrinsic regime: n ≈ ND (flat plateau)
  │                               (most useful for devices)
  │          ╱ ← Freeze-out: donors not ionized,
  │         ╱    n → 0 as T → 0
  │        ╱
  0 ───────────────────────────→ T
         100K          500K
         |←  extrinsic  →|
         freeze-out    intrinsic
\`\`\`

**Regime 1 — Freeze-out (T → 0 K, roughly T < 100 K for silicon):**

At very low temperatures, $kT \\ll 50$ meV (the donor binding energy). Thermal energy is insufficient to ionize the donors. Almost all phosphorus atoms remain as $D^0$ (neutral donors, electrons still attached). There are almost no free electrons: $n \\to 0$.

The semiconductor at 0 K with donors present is an **insulator** — all electrons are frozen onto their donor atoms. This is the freeze-out regime.

Quantitatively, for very low $T$:

$$n \\approx \\sqrt{\\frac{N_D N_C}{2}} \\exp\\!\\left(-\\frac{E_C - E_D}{2kT}\\right)$$

This is an exponentially rising function — the lower the temperature, the more exponentially small $n$ becomes.

**Regime 2 — Extrinsic (roughly 100 K < T < 500 K for silicon with $N_D \\sim 10^{15}$–$10^{16}$ cm⁻³):**

At room temperature and moderate temperatures, all donors are fully ionized: $N_D^+ = N_D$. Every phosphorus atom has donated its extra electron to the conduction band. The electron concentration is:

$$n \\approx N_D$$

This is **constant** — it does not change with temperature (as long as $N_D \\gg n_i(T)$)! The device is in the extrinsic regime. This is the operating range for virtually all semiconductor devices: stable, predictable, temperature-independent carrier concentration.

The minority carrier (holes) is very small: $p = n_i^2/N_D$, which does change with $T$ (since $n_i$ depends on $T$), but it is so small that it rarely matters.

**Regime 3 — Intrinsic (T > 500 K for heavily doped silicon, lower $T$ for lightly doped):**

As temperature rises further, $n_i(T)$ grows exponentially (following the Varshni formula and the Boltzmann factor). Eventually $n_i$ becomes comparable to $N_D$, then exceeds it. Once $n_i \\gg N_D$:

$$n \\approx n_i(T), \\qquad p \\approx n_i(T)$$

The doping is overwhelmed by thermally generated carriers. The material behaves intrinsically — it no longer "knows" it was doped. Devices fail because the Fermi level returns to near midgap, and you lose control over electron and hole concentrations.

**The boundary between extrinsic and intrinsic** occurs roughly when $n_i(T) \\approx N_D$. Solving for this temperature determines the maximum operating temperature of a device — a critical engineering parameter.

**Why does this matter for devices?** A transistor works by controlling whether current flows using the Fermi level position (controlled by doping). In the intrinsic regime, the Fermi level drifts back to midgap regardless of doping → the transistor loses its controlled switching behavior → device failure.

### Summary: All Formulas for Extrinsic Semiconductors

\`\`\`
Full Ionization Assumption (valid at 300 K for typical dopings):
    ND⁺ ≈ ND    and    NA⁻ ≈ NA

Charge neutrality (simplified):
    n + NA = p + ND

N-type (ND >> NA, ni):          P-type (NA >> ND, ni):
    n₀ ≈ ND                         p₀ ≈ NA
    p₀ = ni²/ND                     n₀ = ni²/NA
    EF = Ei + kT·ln(ND/ni)          EF = Ei - kT·ln(NA/ni)
    (EF above Ei, near EC)          (EF below Ei, near EV)

Compensated: if both ND and NA present:
    If ND > NA:  n₀ ≈ ND - NA,  p₀ = ni²/(ND-NA)
    If NA > ND:  p₀ ≈ NA - ND,  n₀ = ni²/(NA-ND)
\`\`\`

---

## Complete Formula Summary — New Sections (2b through 2e)

| Formula | Expression | Section |
|---|---|---|
| Crystal period | $c = a + b$ | Kronig-Penney |
| Wave vector in well | $\\alpha = \\sqrt{2mE}/\\hbar$ | Kronig-Penney |
| Decay const. in barrier | $\\beta = \\sqrt{2m(V_0-E)}/\\hbar$ | Kronig-Penney |
| K-P dispersion relation | $P(E) = \\cos[k(a+b)]$, $|P| \\leq 1$ for allowed energies | Kronig-Penney |
| Bloch's theorem | $\\psi_k(x) = U_k(x)\\,e^{jkx}$, $U_k$ periodic | Kronig-Penney |
| Born-von Kármán | $k = 2\\pi n / [N(a+b)]$, $N$ values in 1st BZ | Kronig-Penney |
| Free electron limit | $E = \\hbar^2 k^2 / 2m$ | Kronig-Penney |
| 1D $k$-state density | $dn/dk = L/2\\pi$ | DOS |
| 3D $k$-state density | $2/(2\\pi)^3 = 1/4\\pi^3$ per unit volume | DOS |
| DOS conduction band | $g_C(E) = \\frac{4\\pi(2m_e^*)^{3/2}}{h^3}\\sqrt{E-E_C}$ | DOS |
| DOS valence band | $g_V(E) = \\frac{4\\pi(2m_h^*)^{3/2}}{h^3}\\sqrt{E_V-E}$ | DOS |
| Eff. DOS conduction | $N_C = 2\\left(\\frac{2\\pi m_e^* kT}{h^2}\\right)^{3/2}$ | DOS |
| Eff. DOS valence | $N_V = 2\\left(\\frac{2\\pi m_h^* kT}{h^2}\\right)^{3/2}$ | DOS |
| $n_i$ general | $n_i(T) = H\\cdot T^{3/2}\\cdot\\exp(-E_g/2kT)$ | Temp. dependence |
| Varshni formula | $E_g(T) = E_g(0) - \\alpha T^2/(T+\\beta)$ | Temp. dependence |
| Si Varshni constants | $E_g(0)=1.17$ eV, $\\alpha=4.73\\times10^{-4}$ eV/K, $\\beta=636$ K | Temp. dependence |
| Arrhenius slope | $d\\ln(n_i)/d(1/T) \\approx -E_g/2k$ | Temp. dependence |
| Donor occupation | $N_D^0/N_D = [1 + \\frac{1}{2}\\exp((E_D-E_F)/kT)]^{-1}$ | Extrinsic |
| Ionized donors | $N_D^+ = N_D\\,[1 + 2\\exp((E_F-E_D)/kT)]^{-1}$ | Extrinsic |
| Acceptor occupation | $N_A^-/N_A = [1 + \\frac{1}{2}\\exp((E_A-E_F)/kT)]^{-1}$ | Extrinsic |
| Charge neutrality | $p + N_D^+ = n + N_A^-$ (general) | Extrinsic |
| Charge neutrality (full ion.) | $n + N_A = p + N_D$ | Extrinsic |
| N-type electrons | $n_0 \\approx N_D$ (for $N_D \\gg n_i$) | Extrinsic |
| N-type holes | $p_0 = n_i^2/N_D$ | Extrinsic |
| P-type holes | $p_0 \\approx N_A$ (for $N_A \\gg n_i$) | Extrinsic |
| P-type electrons | $n_0 = n_i^2/N_A$ | Extrinsic |
| Fermi level (general) | $E_F = E_i + kT\\ln(n_0/n_i)$ | Extrinsic |
| N-type Fermi level | $E_F = E_i + kT\\ln(N_D/n_i)$ | Extrinsic |
| P-type Fermi level | $E_F = E_i - kT\\ln(N_A/n_i)$ | Extrinsic |
| Compensated N-type | $n_0 \\approx N_D - N_A$, $p_0 = n_i^2/(N_D-N_A)$ | Extrinsic |
| Compensated P-type | $p_0 \\approx N_A - N_D$, $n_0 = n_i^2/(N_A-N_D)$ | Extrinsic |

**Key numerical values for Silicon at 300 K:**
- $kT = 0.026$ eV, $n_i = 10^{10}$ cm$^{-3}$, $E_g = 1.12$ eV
- $N_C = 2.8 \\times 10^{19}$ cm$^{-3}$, $N_V = 1.04 \\times 10^{19}$ cm$^{-3}$
- $m_e^* = 1.08\\,m_0$, $m_h^* = 0.56\\,m_0$
- Donor/acceptor binding energies $\\approx 45$–$50$ meV (P: 45 meV, B: 45 meV, As: 54 meV)
- Extrinsic regime for Si: roughly 100 K to 500 K (depends on doping level)
`;

