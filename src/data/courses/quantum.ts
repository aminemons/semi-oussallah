export const quantumContent = `
# Quantum Physics: From Absolute Zero to Full Understanding

## Why Do We Even Need Quantum Physics?

Here is a very direct answer: **without quantum mechanics, semiconductors cannot be explained, and your phone would not exist.**

The laws governing everyday large objects (cars, balls, planets) are called **Classical Mechanics**, invented by Newton in the 1600s. These laws work perfectly for big things. But when you zoom into the world of atoms and electrons — objects $10^{-10}$ meters wide — these classical laws give completely wrong answers.

**Quantum Mechanics** is the set of correct rules governing the tiny world. Our entire goal in studying it here is simple: we want to understand *why* electrons in a silicon crystal can only have certain energies, which then leads directly to understanding semiconductors.

---

## 1. What is a Wave? What is a Particle? — The Core Conflict

Before we explain what electrons "really are," we must be clear on these two concepts.

### A Wave

Drop a stone in still water. Ripples spread outward. That is a wave: **a disturbance that propagates through space, carrying energy but not matter**. Waves have three key properties:

- **Wavelength ($\\lambda$, "lambda"):** The distance from one crest (peak) to the next crest. Measured in meters. Short wavelength = high-pitched (for sound) or blue/UV (for light). Long wavelength = low-pitched or red/infrared.
- **Frequency ($\\nu$, "nu"):** How many crests pass a fixed point every second. Unit: **Hertz (Hz)** = cycles per second.
- **Speed:** $v = \\lambda \\cdot \\nu$. For light in vacuum: $c = \\lambda \\nu = 3 \\times 10^8$ m/s.

The defining property of waves is **interference**: when two waves overlap, they can add together (bright spot) or cancel out (dark spot). This creates patterns that particles could never make.

### A Particle

A particle (like a bullet or a billiard ball) is a **localized object with a definite position, mass, and trajectory**. It does not spread out. It does not interfere with itself. It hits a screen at one specific point.

### The Double-Slit Experiment — The Great Mystery

In 1801, Thomas Young passed a beam of light through a barrier with two narrow slits. On a screen placed behind, classical "particle" physics would predict two bright lines (one behind each slit). But Young saw this:

\`\`\`
 Light       ╔═══════════════╗
 Source ───► ║  Slit 1       ║ ──►  ████ ░░░ ████ ░░░ ████
             ║               ║       (alternating bright
             ║  Slit 2       ║        and dark bands)
             ╚═══════════════╝
                  Barrier          Screen behind
\`\`\`

Alternating **bright and dark bands** — an **interference pattern**. This is the unmistakable signature of waves. Only waves can pass through both slits simultaneously and interfere with each other.

The light arrives in individual localized flashes — like particles — yet the accumulated pattern is that of waves. This is **Wave-Particle Duality**: matter exhibits both wave-like and particle-like behaviour.

---

## 2. Max Planck and the Birth of the Quantum (1900)

In the year 1900, physicist Max Planck was trying to explain why hot objects glow the colors they do. A piece of iron heated to 1000°C glows orange-red. At 5000°C it glows white-blue. Classical physics completely failed to predict the correct spectrum (it predicted an "ultraviolet catastrophe" of infinite energy).

Planck discovered the solution: **energy is not continuous; it comes in discrete indivisible packets called quanta (singular: quantum).**

The energy of each quantum of light (later called a **photon**) is:

$$E = h \\nu = \\frac{hc}{\\lambda}$$

Where:
- $E$ = energy of one photon, in Joules (J) or electron-volts (eV)
- $h = 6.626 \\times 10^{-34}$ J·s = **Planck's constant** — the fundamental "quantum of action"
- $\\nu$ = frequency of the light
- $\\lambda$ = wavelength of the light
- $c = 3 \\times 10^8$ m/s = speed of light

**What is an eV (electron-volt)?** In atomic physics, the Joule is an inconveniently large unit. We use the **electron-volt**: the energy gained by one electron when it moves through a potential difference of 1 Volt. $1 \\text{ eV} = 1.6 \\times 10^{-19}$ J.

---

## 3. The Atomic Models — How We Discovered the Atom's Structure

Since atoms are about $10^{-10}$ meters wide (0.1 nanometers), you cannot see them with any light (visible light has wavelengths of ~500 nm, much larger than an atom). Scientists built models through indirect experiments.

### The Bohr Model (1913) — Quantum Orbits

Niels Bohr saved Rutherford's model by **forcing quantum rules** onto it. He simply postulated:

1. Electrons can ONLY exist in specific **allowed orbits**. They do NOT radiate while in these orbits. Why? Because quantum mechanics says so. (Yes, this is somewhat circular, but it works.)
2. Each allowed orbit has a specific, fixed energy. The energies are **quantized** (discrete, like the rungs of a ladder, not a continuous ramp).
3. An electron can jump from one orbit to another ONLY by absorbing or emitting exactly one photon. The photon energy equals the energy difference:

$$E_{\\text{photon}} = h\\nu = E_{\\text{upper}} - E_{\\text{lower}}$$

For hydrogen, the allowed energies are:
$$E_n = -\\frac{13.6 \\text{ eV}}{n^2}, \\quad n = 1, 2, 3, 4, ...$$

\`\`\`
Energy Level Diagram for Hydrogen:

 0 eV ──────────── n = ∞ (ionized, electron free)
                   ↑ (each upward jump requires absorbing a photon)
-1.51 eV ───────── n = 3
-3.40 eV ───────── n = 2
           photon emitted
           when jumping down ↓
-13.6 eV ───────── n = 1 ← GROUND STATE (lowest energy, most stable)
\`\`\`

**Ground state:** The lowest energy orbit ($n=1$, $E_1 = -13.6$ eV). The electron is at its most stable configuration here.

**Ionization:** To completely free the electron from hydrogen in the ground state, you need to add exactly $13.6$ eV. This is the **ionization energy**.

---

## 4. De Broglie: Everything is a Wave (1923)

Louis de Broglie asked: if light (a wave) can act like a particle (photon), why can't matter (electrons, protons) act like waves?

His answer: **Every moving particle has an associated wavelength:**

$$\\lambda = \\frac{h}{p} = \\frac{h}{mv}$$

Where $p = mv$ is the **momentum** (mass × velocity) of the particle.

---

## 5. Schrödinger's Equation — The Master Equation of Quantum Mechanics (1926)

Erwin Schrödinger asked: if the electron is a wave, what is its wave equation? The result is the most important equation in atomic physics:

**Time-independent Schrödinger Equation (1D):**

$$-\\frac{\\hbar^2}{2m}\\frac{d^2\\psi}{dx^2} + V(x)\\psi(x) = E\\psi(x)$$

**In operator form:** $\\hat{H}\\psi = E\\psi$ (where $\\hat{H}$ is the Hamiltonian operator = kinetic + potential energy)

**Every term explained:**
- $\\psi(x)$ — The **Wavefunction** ("psi"). This is the central object of quantum mechanics. It is a mathematical function that completely describes the quantum state of the electron.
- $\\frac{d^2\\psi}{dx^2}$ — The second derivative of $\\psi$ with respect to position. This represents how "curved" the wave is, which is related to kinetic energy.
- $V(x)$ — The **Potential Energy** at position $x$. For an electron near a nucleus, this is the Coulomb attraction.
- $E$ — The **total energy** of the electron. The Schrödinger equation only has solutions for specific discrete values of $E$, which are the **quantized energy levels**.
- $m$ — The mass of the electron.

**What is $\\psi$ physically?** According to **Max Born's interpretation** (1926):

$$P(x) = |\\psi(x)|^2$$

$|\\psi(x)|^2$ is the **probability density** of finding the electron at position $x$ when you measure it. The electron doesn't have a definite location; it has a probability cloud.

\`\`\`
Hydrogen 1s Wavefunction and Probability Density:

ψ(r)                        |ψ(r)|² (probability density)
  |\\                            |\\
  | \\                           | \\
  |  \\                          |  \\
  |   \\___                      |   \\___
  |        ───────→ r           |        ────────→ r
 0   a₀    2a₀   3a₀          0    a₀    2a₀    3a₀

(a₀ = Bohr radius = 0.0529 nm, the most probable location)

The electron is NOT on a fixed circular orbit.
It is a probability cloud — an "orbital."
\`\`\`

### Quantum Numbers and the Pauli Exclusion Principle

When you solve Schrödinger's equation for an electron in an atom, every allowed solution is characterized by four **quantum numbers**:
1. $n$ = Principal quantum number (1, 2, 3,...) — determines energy level
2. $l$ = Orbital angular momentum quantum number (0 to $n-1$) — shape of orbital (s, p, d, f)
3. $m_l$ = Magnetic quantum number ($-l$ to $+l$) — orientation in space
4. $m_s$ = Spin quantum number ($+1/2$ or $-1/2$) — electron spin (up or down)

**Pauli Exclusion Principle:** No two electrons in the same atom can have all four quantum numbers identical. This means each orbital can hold at most **2 electrons** (one spin up, one spin down).

---

## 📋 Complete Law Summary — Quantum Physics

| Concept | Formula | Units / Value |
|---|---|---|
| Photon energy | $E = h\\nu = hc/\\lambda$ | Joules or eV |
| Planck's constant | $h = 6.626 \\times 10^{-34}$ | J·s |
| Reduced Planck constant | $\\hbar = h/2\\pi = 1.055 \\times 10^{-34}$ | J·s |
| Speed of light | $c = 3 \\times 10^8$ | m/s |
| De Broglie wavelength | $\\lambda = h/p = h/(mv)$ | meters |
| Bohr energy levels (H) | $E_n = -13.6/n^2$ eV | eV |
| Schrödinger equation | $\\hat{H}\\psi = E\\psi$ | — |
| Born probability | $P(x) = |\\psi(x)|^2$ | m$^{-1}$ |
`;
