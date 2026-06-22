const FLASHCARD_DATA = {
  physics: {
    label: "Physics",
    color: "blue",
    icon: "⚛️",
    topics: [
      {
        id: "mechanics",
        title: "Mechanics",
        subtopics: [
          {
            id: "kinematics",
            title: "Kinematics",
            cards: [
              {
                id: "k1",
                question: "What is the equation for displacement when acceleration is uniform?",
                answer: "s = ut + ½at²\n\nWhere:\ns = displacement (m)\nu = initial velocity (m/s)\nt = time (s)\na = acceleration (m/s²)"
              },
              {
                id: "k2",
                question: "State the four equations of uniform acceleration (SUVAT).",
                answer: "v = u + at\ns = ut + ½at²\nv² = u² + 2as\ns = ½(u + v)t\n\nWhere s=displacement, u=initial velocity, v=final velocity, a=acceleration, t=time"
              },
              {
                id: "k3",
                question: "What is the difference between scalar and vector quantities? Give two examples of each.",
                answer: "Scalar: magnitude only\nExamples: speed, distance, mass, temperature\n\nVector: magnitude AND direction\nExamples: velocity, displacement, force, acceleration"
              },
              {
                id: "k4",
                question: "An object is thrown horizontally from a cliff at 20 m/s. What is its horizontal velocity after 3 seconds? (ignore air resistance)",
                answer: "Horizontal velocity = 20 m/s (unchanged)\n\nIn projectile motion, horizontal velocity is constant because there is no horizontal force (ignoring air resistance). Only vertical velocity changes due to gravity."
              }
            ]
          },
          {
            id: "newtons-laws",
            title: "Newton's Laws",
            cards: [
              {
                id: "n1",
                question: "State Newton's First Law of Motion.",
                answer: "An object remains at rest or continues moving in a straight line at constant velocity unless acted upon by a resultant (net) external force.\n\nAlso called the Law of Inertia."
              },
              {
                id: "n2",
                question: "State Newton's Second Law and write its equation.",
                answer: "The resultant force on an object is directly proportional to its rate of change of momentum.\n\nF = ma\n\nOr more precisely: F = Δp/Δt\n\nWhere F = force (N), m = mass (kg), a = acceleration (m/s²)"
              },
              {
                id: "n3",
                question: "State Newton's Third Law of Motion.",
                answer: "For every action, there is an equal and opposite reaction.\n\nWhen object A exerts a force on object B, object B exerts an equal and opposite force on object A.\n\nNote: These forces act on DIFFERENT objects — they do NOT cancel each other."
              }
            ]
          },
          {
            id: "work-energy",
            title: "Work, Energy & Power",
            cards: [
              {
                id: "we1",
                question: "Write the equation for work done by a force.",
                answer: "W = Fs cosθ\n\nWhere:\nW = work done (J)\nF = force (N)\ns = displacement (m)\nθ = angle between force and displacement\n\nWork is zero when force is perpendicular to displacement (θ = 90°)"
              },
              {
                id: "we2",
                question: "State the Work-Energy Theorem.",
                answer: "The net work done on an object equals its change in kinetic energy.\n\nW_net = ΔKE = ½mv² - ½mu²\n\nThis means work done by the net force causes acceleration or deceleration."
              },
              {
                id: "we3",
                question: "What is the equation for gravitational potential energy?",
                answer: "GPE = mgh\n\nWhere:\nm = mass (kg)\ng = gravitational field strength (9.81 m/s² near Earth's surface)\nh = height above reference point (m)\n\nGPE is always measured relative to a chosen reference level."
              }
            ]
          }
        ]
      },
      {
        id: "waves",
        title: "Waves & Optics",
        subtopics: [
          {
            id: "wave-properties",
            title: "Wave Properties",
            cards: [
              {
                id: "wp1",
                question: "What is the wave equation?",
                answer: "v = fλ\n\nWhere:\nv = wave speed (m/s)\nf = frequency (Hz)\nλ = wavelength (m)\n\nThis applies to all types of waves."
              },
              {
                id: "wp2",
                question: "Distinguish between transverse and longitudinal waves with examples.",
                answer: "Transverse: oscillations are perpendicular to direction of energy transfer\nExamples: light, water waves, electromagnetic waves\n\nLongitudinal: oscillations are parallel to direction of energy transfer\nExamples: sound waves, seismic P-waves, compression waves in a spring"
              },
              {
                id: "wp3",
                question: "What is the principle of superposition?",
                answer: "When two or more waves overlap, the resultant displacement at any point is the algebraic sum of the individual displacements.\n\nThis leads to:\n• Constructive interference: waves in phase → amplitude increases\n• Destructive interference: waves out of phase → amplitude decreases"
              }
            ]
          },
          {
            id: "refraction",
            title: "Refraction & Snell's Law",
            cards: [
              {
                id: "r1",
                question: "State Snell's Law of refraction.",
                answer: "n₁ sin θ₁ = n₂ sin θ₂\n\nOr: sin i / sin r = n₂/n₁\n\nWhere:\nn = refractive index (dimensionless)\nθ₁ = angle of incidence\nθ₂ = angle of refraction\nAngles measured from the normal."
              },
              {
                id: "r2",
                question: "What is total internal reflection and when does it occur?",
                answer: "Total internal reflection occurs when:\n1. Light travels from a denser to a less dense medium (n₁ > n₂)\n2. The angle of incidence exceeds the critical angle (θc)\n\nsin θc = n₂/n₁\n\nApplications: optical fibres, diamonds, periscopes."
              }
            ]
          }
        ]
      },
      {
        id: "electricity",
        title: "Electricity & Magnetism",
        subtopics: [
          {
            id: "circuits",
            title: "Electric Circuits",
            cards: [
              {
                id: "c1",
                question: "State Ohm's Law and its equation.",
                answer: "The current through a conductor is directly proportional to the potential difference across it, provided temperature remains constant.\n\nV = IR\n\nWhere V = voltage (V), I = current (A), R = resistance (Ω)"
              },
              {
                id: "c2",
                question: "What are the rules for resistors in series and parallel?",
                answer: "Series: R_total = R₁ + R₂ + R₃...\n• Same current through each\n• Voltages add up\n\nParallel: 1/R_total = 1/R₁ + 1/R₂ + 1/R₃...\n• Same voltage across each\n• Currents add up"
              },
              {
                id: "c3",
                question: "Write the three equations for electrical power.",
                answer: "P = IV\nP = I²R\nP = V²/R\n\nWhere:\nP = power (W)\nI = current (A)\nV = potential difference (V)\nR = resistance (Ω)\n\nAll three are equivalent; choose based on known quantities."
              }
            ]
          },
          {
            id: "fields",
            title: "Electric & Magnetic Fields",
            cards: [
              {
                id: "f1",
                question: "State Coulomb's Law.",
                answer: "The electrostatic force between two point charges is directly proportional to the product of the charges and inversely proportional to the square of the distance between them.\n\nF = kQ₁Q₂/r²\n\nWhere k = 8.99 × 10⁹ N m² C⁻² (Coulomb's constant)"
              },
              {
                id: "f2",
                question: "What is magnetic flux density and what is its SI unit?",
                answer: "Magnetic flux density (B) is the force per unit length per unit current on a straight conductor placed perpendicular to the magnetic field.\n\nB = F / (IL)\n\nSI unit: Tesla (T)\n1 T = 1 N A⁻¹ m⁻¹\n\nAlso called the magnetic field strength."
              }
            ]
          }
        ]
      },
      {
        id: "thermal",
        title: "Thermal Physics",
        subtopics: [
          {
            id: "thermodynamics",
            title: "Thermodynamics",
            cards: [
              {
                id: "th1",
                question: "State the first law of thermodynamics.",
                answer: "The increase in internal energy of a system equals the heat added to the system minus the work done by the system.\n\nΔU = Q - W\n\nWhere:\nΔU = change in internal energy (J)\nQ = heat added to system (J)\nW = work done BY the system (J)"
              },
              {
                id: "th2",
                question: "What is the ideal gas equation?",
                answer: "pV = nRT\n\nWhere:\np = pressure (Pa)\nV = volume (m³)\nn = amount of substance (mol)\nR = molar gas constant = 8.31 J mol⁻¹ K⁻¹\nT = temperature (K)\n\nNote: Temperature must be in Kelvin! T(K) = T(°C) + 273"
              }
            ]
          }
        ]
      },
      {
        id: "quantum",
        title: "Quantum & Nuclear Physics",
        subtopics: [
          {
            id: "photoelectric",
            title: "Photoelectric Effect",
            cards: [
              {
                id: "pe1",
                question: "State Einstein's photoelectric equation.",
                answer: "hf = φ + ½mv²_max\n\nWhere:\nh = Planck's constant = 6.63 × 10⁻³⁴ J s\nf = frequency of incident photon (Hz)\nφ = work function of metal (J)\n½mv²_max = maximum kinetic energy of emitted electron"
              },
              {
                id: "pe2",
                question: "What is the de Broglie wavelength equation?",
                answer: "λ = h/p = h/(mv)\n\nWhere:\nλ = de Broglie wavelength (m)\nh = Planck's constant = 6.63 × 10⁻³⁴ J s\np = momentum (kg m/s)\nm = mass (kg)\nv = velocity (m/s)\n\nThis shows all matter has wave-like properties."
              }
            ]
          },
          {
            id: "radioactivity",
            title: "Radioactivity",
            cards: [
              {
                id: "ra1",
                question: "Compare alpha, beta, and gamma radiation in terms of composition, charge, and penetrating power.",
                answer: "Alpha (α): ²⁴He nucleus, charge +2, stopped by paper/skin, range ~5cm in air\n\nBeta (β⁻): fast electron, charge -1, stopped by ~3mm aluminium\n\nGamma (γ): high-energy EM radiation, no charge, reduced by thick lead/concrete\n\nAlpha most ionising, gamma most penetrating."
              },
              {
                id: "ra2",
                question: "Write the radioactive decay equation and define half-life.",
                answer: "N = N₀ e^(-λt)\n\nWhere:\nN = number of undecayed nuclei at time t\nN₀ = initial number of nuclei\nλ = decay constant (s⁻¹)\n\nHalf-life (t₁/₂): time for half the nuclei to decay\nt₁/₂ = ln2 / λ = 0.693 / λ"
              }
            ]
          }
        ]
      }
    ]
  },

  chemistry: {
    label: "Chemistry",
    color: "amber",
    icon: "🧪",
    topics: [
      {
        id: "atomic-structure",
        title: "Atomic Structure & Bonding",
        subtopics: [
          {
            id: "atoms",
            title: "Atomic Structure",
            cards: [
              {
                id: "as1",
                question: "Define atomic number, mass number, and isotope.",
                answer: "Atomic number (Z): number of protons in the nucleus\n\nMass number (A): total number of protons + neutrons\n\nIsotopes: atoms of the same element with the same atomic number but different mass numbers (different number of neutrons)\n\nExample: ¹²C and ¹⁴C are isotopes of carbon"
              },
              {
                id: "as2",
                question: "What are the four quantum numbers and what does each describe?",
                answer: "1. Principal (n): energy level / shell (1, 2, 3...)\n2. Angular momentum (l): subshell shape (0=s, 1=p, 2=d, 3=f)\n3. Magnetic (ml): orbital orientation (-l to +l)\n4. Spin (ms): electron spin (+½ or -½)\n\nNo two electrons can have the same set of all four quantum numbers (Pauli Exclusion Principle)."
              },
              {
                id: "as3",
                question: "Write the electronic configuration of Fe (Z=26) and Fe²⁺.",
                answer: "Fe (Z=26):\n1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s²\nor [Ar] 3d⁶ 4s²\n\nFe²⁺ (loses 2 electrons from 4s first):\n1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶\nor [Ar] 3d⁶\n\nNote: 4s electrons are removed before 3d in transition metal ions."
              }
            ]
          },
          {
            id: "bonding",
            title: "Chemical Bonding",
            cards: [
              {
                id: "b1",
                question: "Compare ionic, covalent, and metallic bonding.",
                answer: "Ionic: transfer of electrons between metal and non-metal → electrostatic attraction between ions. High mp, conducts when molten/dissolved.\n\nCovalent: sharing of electrons between non-metals. Can be simple molecular (low mp) or giant covalent (very high mp, e.g. diamond).\n\nMetallic: sea of delocalised electrons around positive ions. Good conductor, malleable, ductile."
              },
              {
                id: "b2",
                question: "What is VSEPR theory? Predict the shape of BF₃ and NH₃.",
                answer: "VSEPR: Valence Shell Electron Pair Repulsion — electron pairs arrange to minimise repulsion.\n\nBF₃: 3 bonding pairs, 0 lone pairs → trigonal planar, bond angle 120°\n\nNH₃: 3 bonding pairs, 1 lone pair → trigonal pyramidal, bond angle ~107°\n(Lone pairs repel more than bonding pairs, reducing the angle)"
              }
            ]
          }
        ]
      },
      {
        id: "energetics",
        title: "Energetics & Thermochemistry",
        subtopics: [
          {
            id: "enthalpy",
            title: "Enthalpy Changes",
            cards: [
              {
                id: "en1",
                question: "Define standard enthalpy of combustion and formation.",
                answer: "Standard enthalpy of combustion (ΔH°c): enthalpy change when 1 mole of substance is completely burned in oxygen under standard conditions (298K, 100kPa).\n\nStandard enthalpy of formation (ΔH°f): enthalpy change when 1 mole of compound is formed from its elements in their standard states under standard conditions."
              },
              {
                id: "en2",
                question: "State Hess's Law and how it is used.",
                answer: "Hess's Law: The enthalpy change for a reaction is independent of the route taken, as long as the initial and final states are the same.\n\nUse: calculate enthalpy changes that cannot be measured directly.\n\nΔH°reaction = ΣΔH°f(products) - ΣΔH°f(reactants)\n\nOr construct a Hess's cycle using known ΔH values."
              },
              {
                id: "en3",
                question: "What is bond enthalpy and how is it used to estimate ΔH?",
                answer: "Bond enthalpy: energy required to break 1 mole of a specific bond in gaseous molecules (always endothermic).\n\nΔH ≈ Σ(bonds broken) - Σ(bonds formed)\n\nEnergy in = breaking bonds (endothermic, +ve)\nEnergy out = forming bonds (exothermic, -ve)\n\nNote: This gives an estimate, not exact value, as average bond enthalpies are used."
              }
            ]
          }
        ]
      },
      {
        id: "kinetics",
        title: "Chemical Kinetics",
        subtopics: [
          {
            id: "reaction-rates",
            title: "Reaction Rates",
            cards: [
              {
                id: "rr1",
                question: "State the Arrhenius equation and explain each term.",
                answer: "k = Ae^(-Ea/RT)\n\nWhere:\nk = rate constant\nA = frequency/pre-exponential factor\nEa = activation energy (J mol⁻¹)\nR = gas constant = 8.31 J mol⁻¹ K⁻¹\nT = temperature (K)\n\nAs T increases, k increases → reaction rate increases."
              },
              {
                id: "rr2",
                question: "What is the rate equation? Define order of reaction.",
                answer: "Rate = k[A]^m[B]^n\n\nWhere m and n are the orders with respect to A and B.\n\nOrder with respect to a reactant: power to which its concentration is raised in the rate equation.\n\nOverall order = m + n\n\nOrders must be determined experimentally — they CANNOT be deduced from the balanced equation."
              },
              {
                id: "rr3",
                question: "What is a catalyst and how does it increase reaction rate?",
                answer: "A catalyst is a substance that increases the rate of a reaction without being used up (not consumed overall).\n\nMechanism: provides an alternative reaction pathway with a LOWER activation energy (Ea).\n\nHomogeneous catalyst: same phase as reactants (e.g. H₂SO₄ in esterification)\nHeterogeneous catalyst: different phase (e.g. Fe in Haber process, Pt in catalytic converters)"
              }
            ]
          }
        ]
      },
      {
        id: "equilibrium",
        title: "Chemical Equilibrium",
        subtopics: [
          {
            id: "equilibrium-const",
            title: "Equilibrium Constants",
            cards: [
              {
                id: "eq1",
                question: "Write the expression for Kc and state Le Chatelier's principle.",
                answer: "For: aA + bB ⇌ cC + dD\n\nKc = [C]^c[D]^d / [A]^a[B]^b\n\nLe Chatelier's Principle: If a system in dynamic equilibrium is subjected to a change, the equilibrium shifts to oppose that change.\n\nEffects:\n• Temperature↑: equilibrium shifts to endothermic direction\n• Pressure↑: equilibrium shifts to side with fewer gas moles\n• Concentration of reactant↑: equilibrium shifts to products"
              },
              {
                id: "eq2",
                question: "What does the value of Kc indicate about an equilibrium?",
                answer: "Large Kc (>> 1): equilibrium favours products — reaction goes almost to completion\n\nSmall Kc (<< 1): equilibrium favours reactants — very little product forms\n\nKc ≈ 1: significant amounts of both reactants and products at equilibrium\n\nKc is only affected by temperature (not concentration, pressure, or catalyst)."
              }
            ]
          }
        ]
      },
      {
        id: "organic",
        title: "Organic Chemistry",
        subtopics: [
          {
            id: "hydrocarbons",
            title: "Hydrocarbons",
            cards: [
              {
                id: "hc1",
                question: "What is the general formula and naming rule for alkanes? Give the first 6 names.",
                answer: "General formula: CₙH₂ₙ₊₂\n\nNaming: count carbon chain length\n1C = methane\n2C = ethane\n3C = propane\n4C = butane\n5C = pentane\n6C = hexane\n\nAll have only C-C and C-H single bonds. Saturated hydrocarbons."
              },
              {
                id: "hc2",
                question: "Compare addition and substitution reactions with an example of each.",
                answer: "Addition: two reactants combine to form ONE product. Occurs with unsaturated compounds (alkenes).\nExample: CH₂=CH₂ + Br₂ → CH₂BrCH₂Br (electrophilic addition)\n\nSubstitution: one atom/group replaces another in a molecule.\nExample: CH₄ + Cl₂ → CH₃Cl + HCl (free radical substitution in UV light)"
              }
            ]
          },
          {
            id: "functional-groups",
            title: "Functional Groups",
            cards: [
              {
                id: "fg1",
                question: "Name the functional groups: -OH, -COOH, -CHO, -CO-, -NH₂, -COO-",
                answer: "-OH → hydroxyl (alcohols)\n-COOH → carboxyl (carboxylic acids)\n-CHO → aldehyde\n-CO- (carbonyl) → ketone\n-NH₂ → amino (amines)\n-COO- → ester linkage\n\nThese determine the chemical properties and reactions of organic molecules."
              },
              {
                id: "fg2",
                question: "What reagents are used to distinguish between aldehydes and ketones?",
                answer: "Tollens' reagent (ammoniacal silver nitrate):\n• Aldehyde: silver mirror forms (Ag deposited)\n• Ketone: NO reaction\n\nFehling's solution (alkaline Cu²⁺):\n• Aldehyde: brick-red precipitate (Cu₂O)\n• Ketone: NO reaction\n\nBoth tests work because aldehydes are oxidised; ketones cannot be easily oxidised."
              }
            ]
          },
          {
            id: "isomerism",
            title: "Isomerism",
            cards: [
              {
                id: "is1",
                question: "Define structural isomers and stereoisomers with one example each.",
                answer: "Structural isomers: same molecular formula, different structural formula (different connectivity).\nExample: butane (CH₃CH₂CH₂CH₃) and methylpropane ((CH₃)₃CH) — both C₄H₁₀\n\nStereoisomers: same structural formula, different spatial arrangement.\n• Cis-trans (geometric): differ around C=C double bond\n• Optical: non-superimposable mirror images (chiral centre with 4 different groups)"
              }
            ]
          }
        ]
      },
      {
        id: "electrochemistry",
        title: "Electrochemistry",
        subtopics: [
          {
            id: "electrolysis",
            title: "Electrolysis",
            cards: [
              {
                id: "el1",
                question: "In electrolysis, which electrode is the anode and cathode? What happens at each?",
                answer: "Anode (+): oxidation occurs (loss of electrons)\nSpecies are oxidised; anions migrate here.\n\nCathode (-): reduction occurs (gain of electrons)\nSpecies are reduced; cations migrate here.\n\nMemory aid: AN OX (ANode = OXidation), RED CAT (REDuction at CAThode)"
              },
              {
                id: "el2",
                question: "State Faraday's First and Second Laws of Electrolysis.",
                answer: "First Law: The mass of substance deposited/liberated at an electrode is directly proportional to the charge passed.\nm ∝ Q (where Q = It)\n\nSecond Law: For the same charge, the masses of different substances deposited are proportional to their molar masses divided by their ionic charges.\n\nm = (M × I × t) / (n × F)\nwhere F = Faraday constant = 96,500 C mol⁻¹"
              }
            ]
          }
        ]
      }
    ]
  },

  // ── NEW TOPIC: Semiconductors & Electronics (Sinhala) ──────
  // Added from uploaded CSV — 60 cards
  // Insert into physics.topics array below:
  // (This block must be moved inside physics.topics in production)
  // For now, stored as a separate top-level subject for clarity
  sinhala_electronics: {
    label: "අර්ධ සන්නායක (Semiconductors)",
    color: "teal",
    icon: "🔬",
    topics: [
      {
        id: "conductors-insulators",
        title: "සන්නායක, පරිවාරක හා අර්ධ සන්නායක",
        subtopics: [
          {
            id: "basic-types",
            title: "මූලික වර්ග හා ගුණ",
            cards: [
              {
                id: "si1",
                question: "කාමර උෂ්ණත්වයේදී පරමාණු සියල්ලම පාහේ අයනීකරණය වී නිදහස් ඉලෙක්ට්‍රෝන බහුලව පවතින ද්‍රව්‍ය හඳුන්වන්නේ කුමන නමකින්ද?",
                answer: "සන්නායක (Conductors)"
              },
              {
                id: "si2",
                question: "සන්නායක ද්‍රව්‍යයක ප්‍රතිරෝධකතාව සාමාන්‍යයෙන් පවතින සීමාව කුමක්ද?",
                answer: "10⁻³ Ωm ට වඩා අඩු අගයකි."
              },
              {
                id: "si3",
                question: "කාමර උෂ්ණත්වයේදී පරමාණු අයනීකරණය නොවන හෝ ඉතා අල්ප වශයෙන් අයනීකරණය වන බැවින් විද්‍යුත් ධාරාවක් ගෙන නොයන ද්‍රව්‍ය මොනවාද?",
                answer: "පරිවාරක (Insulators)"
              },
              {
                id: "si4",
                question: "පරිවාරක ද්‍රව්‍යයක ප්‍රතිරෝධකතාව සඳහා වන දළ අගය කුමක්ද?",
                answer: "10⁵ Ωm ට වඩා වැඩි අගයකි."
              },
              {
                id: "si5",
                question: "කාමර උෂ්ණත්වයේදී යම් ප්‍රමාණයකට පරමාණු අයනීකරණය වන, සන්නායක හා පරිවාරක අතරමැදි ගුණ පෙන්වන ද්‍රව්‍ය හඳුන්වන නම කුමක්ද?",
                answer: "අර්ධ සන්නායක (Semiconductors)"
              },
              {
                id: "si6",
                question: "අර්ධ සන්නායක ද්‍රව්‍ය පවතින ප්‍රතිරෝධකතා පරාසය සඳහන් කරන්න.",
                answer: "10⁻³ Ωm සිට 10⁵ Ωm දක්වා."
              },
              {
                id: "si7",
                question: "ඕනෑම ඝන ද්‍රව්‍යයක පරමාණුක සාන්ද්‍රණය (atomic density) පවතින දළ අගය කොපමණද?",
                answer: "10²³ cm⁻³ පමණ වේ."
              },
              {
                id: "si8",
                question: "තඹ (සන්නායකයක්) සහ සිලිකන් (අර්ධ සන්නායකයක්) වල නිදහස් ඉලෙක්ට්‍රෝන සාන්ද්‍රණයන් පිළිවෙළින් සසඳන්න.",
                answer: "තඹ වල 10²² cm⁻³ වන අතර සිලිකන් වල 10¹⁰ cm⁻³ පමණ වේ."
              },
              {
                id: "si9",
                question: "සන්නායක ද්‍රව්‍යවල ප්‍රතිරෝධකතාවයේ උෂ්ණත්ව සංගුණකය ධන (+) වීමට හේතුව කුමක්ද?",
                answer: "උෂ්ණත්වය වැඩි වන විට විද්‍යුතය ගැලීමේ හැකියාව අඩුවීම."
              },
              {
                id: "si10",
                question: "අර්ධ සන්නායක ද්‍රව්‍යවල ප්‍රතිරෝධකතාවයේ උෂ්ණත්ව සංගුණකය ඍණ (−) අගයක් ගන්නේ ඇයි?",
                answer: "උෂ්ණත්වය වැඩි වන විට විද්‍යුතය ගැලීමේ හැකියාව වැඩිවන බැවිනි."
              }
            ]
          }
        ]
      },
      {
        id: "intrinsic-semiconductors",
        title: "නිසඟ අර්ධ සන්නායක",
        subtopics: [
          {
            id: "intrinsic-basics",
            title: "නිසඟ අර්ධ සන්නායක — මූල සංකල්ප",
            cards: [
              {
                id: "si11",
                question: "සම්පූර්ණයෙන්ම ශුද්ධ තත්ත්වයේ පවතින අර්ධ සන්නායක හඳුන්වන්නේ කුමන නමකින්ද?",
                answer: "නිසඟ අර්ධ සන්නායක (Intrinsic semiconductors)"
              },
              {
                id: "si12",
                question: "නිසඟ අර්ධ සන්නායක පරමාණු අතර පවතින රසායනික බන්ධන වර්ගය කුමක්ද?",
                answer: "සහසංයුජ බන්ධන (Covalent bonds)"
              },
              {
                id: "si13",
                question: "නිසඟ අර්ධ සන්නායකයක තාප ශක්තිය නිසා බන්ධන බිඳී ඉලෙක්ට්‍රෝනයක් නිදහස් වූ විට එම ස්ථානයේ ඇතිවන ඉලෙක්ට්‍රෝන ඌනතාවය හඳුන්වන්නේ කුමන නමකින්ද?",
                answer: "කුහරයක් (Hole)"
              },
              {
                id: "si14",
                question: "අර්ධ සන්නායක තාක්ෂණයේදී කුහරයක් සලකනු ලබන්නේ කුමන වර්ගයේ ආරෝපණ වාහකයක් ලෙසද?",
                answer: "ධන (+) ආරෝපණ වාහකයක් ලෙස."
              },
              {
                id: "si15",
                question: "අර්ධ සන්නායකයක නිදහස් ඉලෙක්ට්‍රෝනයක් සහ කුහරයක් එකිනෙක මුණගැසී බන්ධනයක් නැවත ඇතිවීමේ ක්‍රියාවලිය කුමක්ද?",
                answer: "ප්‍රතිසංයෝජනය (Recombination)"
              },
              {
                id: "si16",
                question: "නිසඟ වාහක සාන්ද්‍රණය (Nᵢ) යම් උෂ්ණත්වයකදී නියතව පවත්වා ගැනීමට දායක වන ක්‍රියාවලි දෙක කුමක්ද?",
                answer: "ජනනය වීමේ සීඝ්‍රතාව සහ ප්‍රතිසංයෝජනය වීමේ සීඝ්‍රතාව."
              },
              {
                id: "si17",
                question: "අර්ධ සන්නායකයක් හරහා විභව අන්තරයක් යෙදූ විට කුහර ගමන් කරන්නේ විද්‍යුත් ක්ෂේත්‍රයට සාපේක්ෂව කුමන දිශාවටද?",
                answer: "ක්ෂේත්‍රයේ දිශාවටම."
              },
              {
                id: "si18",
                question: "අර්ධ සන්නායකයක් තුළින් ගලන මුළු ධාරාව (I) සඳහා වන ප්‍රකාශනය කුමක්ද?",
                answer: "I = Iₑ + I₀\n(Iₑ = ඉලෙක්ට්‍රෝන ධාරාව, I₀ = කුහර ධාරාව)"
              }
            ]
          }
        ]
      },
      {
        id: "extrinsic-semiconductors",
        title: "බාහිර අර්ධ සන්නායක",
        subtopics: [
          {
            id: "doping",
            title: "මාත්‍රණය (Doping)",
            cards: [
              {
                id: "si19",
                question: "බාහිර අර්ධ සන්නායක (Extrinsic semiconductors) යනු මොනවාද?",
                answer: "නිසඟ අර්ධ සන්නායකයකට අපද්‍රව්‍ය පරමාණු එකතු කර විද්‍යුත් සන්නායකතාව වැඩි කළ ද්‍රව්‍ය වේ."
              },
              {
                id: "si20",
                question: "නිසඟ අර්ධ සන්නායකයකට සුදුසු වෙනත් මූලද්‍රව්‍ය පරමාණු එකතු කිරීමේ ක්‍රියාවලිය හඳුන්වන්නේ කුමන නමකින්ද?",
                answer: "මාත්‍රණය (Doping)"
              },
              {
                id: "si21",
                question: "මාත්‍රණය සඳහා යොදා ගන්නා ආගන්තුක මූලද්‍රව්‍ය පරමාණු හඳුන්වන නම කුමක්ද?",
                answer: "අපද්‍රව්‍ය (Impurities)"
              },
              {
                id: "si58",
                question: "අර්ධ සන්නායකයක වාහක සාන්ද්‍රණය වැඩි කිරීම සඳහා මාත්‍රණය කරනු ලබන අපද්‍රව්‍ය සාන්ද්‍රණය සඳහා යොදා ඇති අනුපාතය කුමක්ද?",
                answer: "1 ppm — අර්ධ සන්නායක පරමාණු මිලියනයකට අපද්‍රව්‍ය පරමාණු එකක්."
              }
            ]
          },
          {
            id: "p-type",
            title: "p-වර්ගයේ අර්ධ සන්නායක",
            cards: [
              {
                id: "si22",
                question: "p-වර්ගයේ බාහිර අර්ධ සන්නායකයක් සාදා ගනු ලබන්නේ කුමන කාණ්ඩයේ මූලද්‍රව්‍යයකින් මාත්‍රණය කිරීමෙන්ද?",
                answer: "III වන කාණ්ඩයේ මූලද්‍රව්‍යයකින් (උදා: බෝරෝන් — B)"
              },
              {
                id: "si23",
                question: "p-වර්ගයේ අර්ධ සන්නායකයක පවතින බහුතර වාහක (Majority carriers) වර්ගය කුමක්ද?",
                answer: "කුහර (Holes)"
              },
              {
                id: "si24",
                question: "p-වර්ගයේ අර්ධ සන්නායකයක අල්පතර වාහක (Minority carriers) ලෙස ක්‍රියා කරන්නේ කුමක්ද?",
                answer: "නිදහස් ඉලෙක්ට්‍රෝන (e)"
              },
              {
                id: "si25",
                question: "p-වර්ගයේ අර්ධ සන්නායකයක් සැකසීමේදී යොදා ගන්නා III කාණ්ඩයේ පරමාණු හඳුන්වන විශේෂ නාමය කුමක්ද?",
                answer: "ප්‍රතිග්‍රාහක පරමාණු (Acceptor atoms)"
              },
              {
                id: "si26",
                question: "p-වර්ගයේ අර්ධ සන්නායකයක නිදහස් ඉලෙක්ට්‍රෝන සාන්ද්‍රණය නිසඟ අවස්ථාවට (10¹⁰ cm⁻³) වඩා විශාල ලෙස අඩු (10³ cm⁻³) වීමට හේතුව කුමක්ද?",
                answer: "කුහර සාන්ද්‍රණය වැඩි නිසා ප්‍රතිසංයෝජන සීඝ්‍රතාව වැඩිවීම."
              }
            ]
          },
          {
            id: "n-type",
            title: "n-වර්ගයේ අර්ධ සන්නායක",
            cards: [
              {
                id: "si27",
                question: "n-වර්ගයේ බාහිර අර්ධ සන්නායකයක් සාදා ගනු ලබන්නේ කුමන කාණ්ඩයේ මූලද්‍රව්‍යයකින් මාත්‍රණය කිරීමෙන්ද?",
                answer: "V වන කාණ්ඩයේ මූලද්‍රව්‍යයකින් (උදා: ආසනික් — As)"
              },
              {
                id: "si28",
                question: "n-වර්ගයේ අර්ධ සන්නායකයක බහුතර වාහක (Majority carriers) ලෙස ක්‍රියා කරන්නේ කුමක්ද?",
                answer: "නිදහස් ඉලෙක්ට්‍රෝන (e)"
              },
              {
                id: "si29",
                question: "n-වර්ගයේ අර්ධ සන්නායකයක් සැකසීමේදී යොදා ගන්නා V කාණ්ඩයේ පරමාණු හඳුන්වන විශේෂ නාමය කුමක්ද?",
                answer: "දායක පරමාණු (Donor atoms)"
              },
              {
                id: "si30",
                question: "බාහිර අර්ධ සන්නායකයක (p හෝ n) උෂ්ණත්වය වැඩි කළ විට ප්‍රධාන වශයෙන්ම බලපෑමක් ඇති වන්නේ කුමන සාන්ද්‍රණයටද?",
                answer: "අල්පතර වාහක සාන්ද්‍රණයට (Minority carrier concentration)."
              },
              {
                id: "si60",
                question: "n-වර්ගයේ අර්ධ සන්නායකයක අල්පතර වාහකයන් වන්නේ කුමක්ද?",
                answer: "කුහර (Holes)"
              }
            ]
          }
        ]
      },
      {
        id: "pn-junction",
        title: "p-n සන්ධිය",
        subtopics: [
          {
            id: "junction-formation",
            title: "සන්ධිය ඇතිවීම",
            cards: [
              {
                id: "si31",
                question: "p-n සන්ධියක් (p-n junction) නිර්මාණය වන්නේ කෙසේද?",
                answer: "p-වර්ගයේ හා n-වර්ගයේ අර්ධ සන්නායක ප්‍රදේශ දෙකක් එකිනෙක ස්පර්ශ වන පරිදි සන්ධි කිරීමෙන්."
              },
              {
                id: "si32",
                question: "p-n සන්ධිය ඇතිවූ විගස ආරෝපණ වාහකයන් විසරණය වීමෙන් n ප්‍රදේශය _____ ලෙසද p ප්‍රදේශය _____ ලෙසද ආරෝපණය වේ.",
                answer: "n ප්‍රදේශය: ධන (+)\np ප්‍රදේශය: ඍණ (−)"
              },
              {
                id: "si33",
                question: "p-n සන්ධිය හරහා වාහක විසරණය නිසා සන්ධිය අසල ඇතිවන නව විද්‍යුත් ක්ෂේත්‍රය හඳුන්වන නම කුමක්ද?",
                answer: "අභ්‍යන්තර විභව බාධකය (Internal potential barrier / Vb)"
              },
              {
                id: "si34",
                question: "සිලිකන් (Si) p-n සන්ධියක සාමාන්‍ය විභව බාධක අගය (Vb) කොපමණද?",
                answer: "0.7 V පමණ වේ."
              },
              {
                id: "si35",
                question: "ජර්මේනියම් (Ge) p-n සන්ධියක සාමාන්‍ය විභව බාධක අගය (Vb) කොපමණද?",
                answer: "0.3 V පමණ වේ."
              },
              {
                id: "si36",
                question: "p-n සන්ධිය අසල ආරෝපණ වාහකයන්ගෙන් තොර වූ ප්‍රදේශය හඳුන්වන නාමය කුමක්ද?",
                answer: "හීන ස්තරය හෙවත් හායිත ප්‍රදේශය (Depletion layer)"
              },
              {
                id: "si37",
                question: "ඩයෝඩ පරිපථ සංකේතයේ ඊතල හිස මගින් නිරූපණය කරන්නේ කුමක්ද?",
                answer: "බහුතර වාහකයන් නිසා ධාරාව ගලන සම්මත දිශාව."
              }
            ]
          },
          {
            id: "biasing",
            title: "නැඹුරු කිරීම (Biasing)",
            cards: [
              {
                id: "si38",
                question: "ඩයෝඩයක් පෙර නැඹුරු කිරීම (Forward biasing) යනු කුමක්ද?",
                answer: "බාහිර විභව සැපයුමක වැඩි විභවය ඇනෝඩයටත් අඩු විභවය කැතෝඩයටත් සම්බන්ධ කිරීම."
              },
              {
                id: "si39",
                question: "පෙර නැඹුරු ඩයෝඩයකින් ධාරාව ගැලීම ආරම්භ වීමට නම් බාහිර වෝල්ටීයතාව සැපිරිය යුතු කොන්දේසිය කුමක්ද?",
                answer: "එය අභ්‍යන්තර විභව බාධකය (Vb) ඉක්මවා යා යුතුය."
              },
              {
                id: "si40",
                question: "ඩයෝඩයක් පසු නැඹුරු කිරීම (Reverse biasing) යනු කුමක්ද?",
                answer: "බාහිර විභව සැපයුමක අඩු විභවය ඇනෝඩයටත් වැඩි විභවය කැතෝඩයටත් සම්බන්ධ කිරීම."
              },
              {
                id: "si41",
                question: "පසු නැඹුරු කළ ඩයෝඩයක් හරහා ගලන ඉතා කුඩා ධාරාව හඳුන්වන නම කුමක්ද?",
                answer: "කාන්දු ධාරාව (Leakage current)"
              },
              {
                id: "si42",
                question: "පසු නැඹුරු ඩයෝඩයක ගලන කාන්දු ධාරාවට හේතු වන වාහක වර්ගය කුමක්ද?",
                answer: "අල්පතර වාහක (Minority carriers)"
              },
              {
                id: "si43",
                question: "ඩයෝඩයක V-I ප්‍රස්තාරයට අනුව Vb ට පෙර ප්‍රස්තාරයේ අනුක්‍රමණය කුඩා වීමෙන් අදහස් වන්නේ කුමක්ද?",
                answer: "ඩයෝඩයේ ප්‍රතිරෝධය අධික බවයි."
              },
              {
                id: "si44",
                question: "ඩයෝඩයකට ඔරොත්තු දිය හැකි උපරිම පසු නැඹුරු වෝල්ටීයතාව හඳුන්වන්නේ කුමන නමකින්ද?",
                answer: "බිඳ වැටුම් වෝල්ටීයතාව (VB) හෙවත් පසු කූට වෝල්ටීයතාව (PIV)"
              },
              {
                id: "si47",
                question: "ඩයෝඩයක් සංවෘත ස්විචයක් (Closed switch) ලෙස ක්‍රියා කරන්නේ කුමන නැඹුරු අවස්ථාවේද?",
                answer: "පෙර නැඹුරු (Forward biased) අවස්ථාවේදී."
              },
              {
                id: "si48",
                question: "ඩයෝඩයක් විවෘත ස්විචයක් (Open switch) ලෙස ක්‍රියා කරන්නේ කුමන නැඹුරු අවස්ථාවේද?",
                answer: "පසු නැඹුරු (Reverse biased) අවස්ථාවේදී."
              },
              {
                id: "si57",
                question: "ප්‍රායෝගික ඩයෝඩයක් (Real diode) හරහා පෙර නැඹුරු අවස්ථාවේදී සිදුවන මුළු විභව බැස්ම සමන්විත වන්නේ කුමන කොටස් වලින්ද?",
                answer: "සන්ධි බාධකය (Vb) සහ ඕමික් විභව බැස්ම."
              }
            ]
          },
          {
            id: "breakdown",
            title: "බිඳ වැටීම (Breakdown)",
            cards: [
              {
                id: "si45",
                question: "පසු නැඹුරු අවස්ථාවේදී අධිවේගී අල්පතර වාහක වෙනත් බන්ධන සමඟ ගැටී වාහක සමූහයක් නිදහස් කිරීමෙන් සිදුවන බිඳ වැටීම කුමක්ද?",
                answer: "ඕඝීය ආචරණය (Avalanche breakdown)"
              },
              {
                id: "si46",
                question: "ප්‍රබල විද්‍යුත් ක්ෂේත්‍රයක් මගින් සෘජුවම බන්ධන බිඳ දමා වාහක නිදහස් කිරීම නිසා සිදුවන ඩයෝඩ බිඳ වැටීම කුමක්ද?",
                answer: "සෙනර් ආචරණය (Zener breakdown)"
              }
            ]
          }
        ]
      },
      {
        id: "rectification",
        title: "සෘජුකරණය (Rectification)",
        subtopics: [
          {
            id: "rectification-basics",
            title: "සෘජුකරණය — මූල සංකල්ප",
            cards: [
              {
                id: "si49",
                question: "ප්‍රත්‍යාවර්ත වෝල්ටීයතාවයක ධ්‍රැවීයතාව (+/−) වෙනස් නොවන තත්ත්වයකට පත් කිරීමේ ක්‍රියාවලිය කුමක්ද?",
                answer: "සෘජුකරණය (Rectification)"
              },
              {
                id: "si50",
                question: "AC වෝල්ටීයතාවයකින් කුඩා ස්ථාවර DC වෝල්ටීයතාවයක් ලබා ගැනීමේ ක්‍රියාවලියේ පියවර 4 පිළිවෙළින් දක්වන්න.",
                answer: "1. පරිණාමනය\n2. සෘජුකරණය\n3. සුමටනය\n4. වෝල්ටීයතා යාමනය"
              },
              {
                id: "si59",
                question: "සෘජුකරණය කරන ලද වෝල්ටීයතාවයක මධ්‍යන්‍ය අගය (Mean value) හඳුන්වන නම කුමක්ද?",
                answer: "සරල ධාරා වෝල්ටීයතාව (Vdc)"
              }
            ]
          },
          {
            id: "half-wave",
            title: "අර්ධ තරංග සෘජුකරණය",
            cards: [
              {
                id: "si51",
                question: "අර්ධ තරංග සෘජුකරණය (Half-wave rectification) යනු කුමක්ද?",
                answer: "ප්‍රත්‍යාවර්ත වෝල්ටීයතාවයක එක් අර්ධ චක්‍රයක් පමණක් ප්‍රතිදානය ලෙස ලබා ගැනීම."
              },
              {
                id: "si52",
                question: "පරිපූර්ණ ඩයෝඩයක් (Ideal diode) භාවිතා කළ විට ප්‍රතිදාන උපරිම වෝල්ටීයතාව (Vo) සහ ආදාන උපරිම වෝල්ටීයතාව (Vi) අතර සම්බන්ධය කුමක්ද?",
                answer: "Vo(max) = Vi(max)"
              },
              {
                id: "si53",
                question: "අර්ධ තරංග සෘජුකරණ පරිපථයක ඩයෝඩය බිඳ නොවැටී සුරක්ෂිතව පැවතීමට නම් සපුරාලිය යුතු කොන්දේසිය කුමක්ද?",
                answer: "VB > (Vi)max විය යුතුය."
              }
            ]
          },
          {
            id: "full-wave",
            title: "පූර්ණ තරංග සෘජුකරණය",
            cards: [
              {
                id: "si54",
                question: "පූර්ණ තරංග සෘජුකරණය (Full-wave rectification) යනු කුමක්ද?",
                answer: "ආදාන තරංගයේ ධන හා ඍණ යන අර්ධ චක්‍ර දෙකම එකම දිශාවකට පවතින පරිදි ප්‍රතිදානය ලබා ගැනීම."
              },
              {
                id: "si55",
                question: "සේතු සෘජුකරණ පරිපථයක (Bridge rectifier) එක් අර්ධ චක්‍රයකදී පෙර නැඹුරු වන ඩයෝඩ ගණන කොපමණද?",
                answer: "ඩයෝඩ 2 කි."
              },
              {
                id: "si56",
                question: "පූර්ණ තරංග සේතු සෘජුකරණයකදී භාර ප්‍රතිරෝධය හරහා ගලන ධාරාවේ දිශාවට කුමක් සිදු වේද?",
                answer: "ආදාන තරංගයේ අර්ධ චක්‍ර දෙකේදීම ධාරාව එකම දිශාවකට ගලයි."
              }
            ]
          }
        ]
      }
    ]
  }
};
