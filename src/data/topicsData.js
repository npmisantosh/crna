const topicsData = [
    {
        id: "phase1",
        title: "Phase 1: Pre-Nursing Foundations & Getting into Nursing School (0-1 year)",
        children: [
          {
            id: "high-school-pre-requisite-courses",
            title: "1. High School & Pre-Requisite Courses",
            children: [
              {
                id: "biology",
                title: "Biology",
                children: [
                  {
                    id: "cell-biology",
                    title: "Cell Biology",
                    children: [
                      {
                        id: "cell-theory",
                        title: "Cell theory",
                        content: "All living things are composed of cells, cells are the basic units of structure and function in living things, and all cells come from pre-existing cells."
                      },
                      {
                        id: "prokaryotic-vs-eukaryotic",
                        title: "Prokaryotic vs. eukaryotic cells",
                        content: "Understanding the fundamental differences in their structure (e.g., nucleus, membrane-bound organelles)."
                      },
                      {
                        id: "organelles",
                        title: "Detailed structure and function of organelles",
                        children: [
                          {
                            id: "nucleus",
                            title: "Nucleus",
                            content: "Contains genetic material (DNA), controls cell activities."
                          },
                          {
                            id: "mitochondria",
                            title: "Mitochondria",
                            content: "Powerhouse of the cell, generates ATP through cellular respiration."
                          },
                          {
                            id: "endoplasmic-reticulum",
                            title: "Endoplasmic Reticulum (ER)",
                            children: [
                              {
                                id: "rough-er",
                                title: "Rough ER",
                                content: "Protein synthesis and modification due to ribosomes."
                              },
                              {
                                id: "smooth-er",
                                title: "Smooth ER",
                                content: "Lipid synthesis, detoxification, calcium storage."
                              }
                            ]
                          },
                          {
                            id: "ribosomes",
                            title: "Ribosomes",
                            content: "Site of protein synthesis."
                          },
                          {
                            id: "golgi-apparatus",
                            title: "Golgi Apparatus",
                            content: "Modifies, sorts, and packages proteins and lipids for secretion or delivery to other organelles."
                          },
                          {
                            id: "lysosomes",
                            title: "Lysosomes",
                            content: "Contain digestive enzymes to break down waste and cellular debris."
                          },
                          {
                            id: "peroxisomes",
                            title: "Peroxisomes",
                            content: "Involved in detoxification and metabolism of fatty acids."
                          },
                          {
                            id: "cell-membrane",
                            title: "Cell Membrane",
                            content: "Selectively permeable barrier, composed of a lipid bilayer with embedded proteins."
                          }
                        ]
                      },
                      {
                        id: "cellular-transport",
                        title: "Cellular Transport",
                        children: [
                          {
                            id: "passive-transport",
                            title: "Passive Transport",
                            content: "Movement of substances across the membrane without requiring energy.",
                            children: [
                              {
                                id: "diffusion",
                                title: "Diffusion",
                                content: "Movement of molecules from an area of high concentration to low concentration."
                              },
                              {
                                id: "osmosis",
                                title: "Osmosis",
                                content: "Movement of water across a semipermeable membrane from an area of high water concentration to low water concentration."
                              },
                              {
                                id: "facilitated-diffusion",
                                title: "Facilitated Diffusion",
                                content: "Movement of molecules across the membrane with the help of membrane proteins (channels or carriers) without energy expenditure."
                              }
                            ]
                          },
                          {
                            id: "active-transport",
                            title: "Active Transport",
                            content: "Movement of substances across the membrane against their concentration gradient, requiring energy (usually ATP) and membrane proteins (pumps)."
                          },
                          {
                            id: "vesicular-transport",
                            title: "Vesicular Transport",
                            content: "Movement of large particles or bulk substances across the membrane by vesicles (small membrane-bound sacs).",
                            children: [
                              {
                                id: "endocytosis",
                                title: "Endocytosis",
                                content: "Process by which cells engulf substances from outside by forming vesicles.",
                                children: [
                                  {
                                    id: "phagocytosis",
                                    title: "Phagocytosis",
                                    content: 'Cellular "eating" of large particles or cells.'
                                  },
                                  {
                                    id: "pinocytosis",
                                    title: "Pinocytosis",
                                    content: 'Cellular "drinking" of extracellular fluid containing dissolved solutes.'
                                  },
                                  {
                                    id: "receptor-mediated-endocytosis",
                                    title: "Receptor-Mediated Endocytosis",
                                    content: "Specific molecules bind to receptors on the cell surface, triggering vesicle formation."
                                  }
                                ]
                              },
                              {
                                id: "exocytosis",
                                title: "Exocytosis",
                                content: "Process by which cells release substances to the outside by the fusion of vesicles with the plasma membrane."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                id: "chemistry",
                title: "Chemistry",
                content: "Basic principles of general and organic chemistry (atomic structure, bonding, reactions, functional groups)."
              },
              {
                id: "anatomy-physiology",
                title: "Anatomy & Physiology",
                content: "Basic understanding of human body structure and function."
              },
              {
                id: "microbiology",
                title: "Microbiology",
                content: "Introduction to microorganisms (bacteria, viruses, fungi, parasites) and their role in health and disease."
              },
              {
                id: "math",
                title: "Mathematics",
                children: [
                  {
                    id: "algebra",
                    title: "Algebra",
                    content: "Solving equations, manipulating expressions, understanding the value of unknown variables."
                  },
                  {
                    id: "inequalities",
                    title: "Inequalities",
                    content: "Comparing values."
                  },
                  {
                    id: "functions",
                    title: "Functions",
                    content: "Relationships between variables."
                  },
                  {
                    id: "graphing",
                    title: "Graphing",
                    content: "Visual representation of mathematical relationships."
                  }
                ]
              },
              {
                id: "pre-calculus",
                title: "Pre-Calculus",
                children: [
                  {
                    id: "trigonometry",
                    title: "Trigonometry",
                    content: "Study of triangles and trigonometric functions."
                  },
                  {
                    id: "logarithms",
                    title: "Logarithms",
                    content: "Inverse of exponential functions (especially for pH, drug concentrations)."
                  },
                  {
                    id: "exponential-functions",
                    title: "Exponential functions",
                    content: "Modeling growth and decay (drug elimination)."
                  }
                ]
              },
              {
                id: "calculus",
                title: "Calculus (Differential & Integral)",
                content: "Rates of change (derivatives), areas under curves (integrals). Beneficial for understanding physiological models, drug kinetics (more in-depth analysis of biological processes). Often not explicitly required for nursing school entry."
              },
              {
                id: "statistics",
                title: "Statistics",
                children: [
                  {
                    id: "descriptive-statistics",
                    title: "Descriptive statistics",
                    content: "Summarizing data (mean, median, mode, standard deviation)."
                  },
                  {
                    id: "inferential-statistics",
                    title: "Inferential statistics",
                    content: "Making inferences about populations based on samples (hypothesis testing, t-tests, ANOVA, correlation, regression). Absolutely essential for understanding research (interpreting study findings), evidence-based practice (applying research to clinical decisions), and DNP projects (often involve statistical analysis)."
                  },
                  {
                    id: "probability",
                    title: "Probability",
                    content: "Likelihood of events occurring."
                  }
                ]
              }
            ]
          },
          {
            id: "volunteer-healthcare-experience",
            title: "2. Volunteer/Healthcare Experience",
            children: [
              {
                id: "activities",
                title: "Activities",
                children: [
                  {
                    id: "volunteering-in-hospitals",
                    title: "Volunteering in hospitals",
                    content: "Exposure to the healthcare environment."
                  },
                  {
                    id: "volunteering-icu-ed",
                    title: "Various units, especially ICU/ED if possible",
                    content: "Observing critical care settings."
                  },
                  {
                    id: "nursing-homes-free-clinics",
                    title: "Nursing homes, free clinics",
                    content: "Interacting with different patient populations."
                  }
                ]
              }
            ]
          }
        ]
    },
      
    {
        id: "phase2",
        title: "Phase 2: Bachelor of Science in Nursing (BSN) Degree (3-4 years)",
        children: [
          {
            id: "core-nursing-curriculum",
            title: "Core Nursing Curriculum",
            children: [
              {
                id: "anatomy-physiology-i-ii",
                title: "Anatomy & Physiology (A&P) I & II (Advanced Level)",
                children: [
                  {
                    id: "all-body-systems",
                    title: "All Body Systems",
                    content: "Detailed structure and function of each system."
                  },
                  {
                    id: "cellular-and-tissue-level",
                    title: "Cellular and Tissue Level",
                    children: [
                      {
                        id: "histology",
                        title: "Histology",
                        content: "Study of tissues."
                      },
                      {
                        id: "specialized-cell-types",
                        title: "Specialized cell types",
                        content: "Differentiation and roles of specialized cells."
                      }
                    ]
                  },
                  {
                    id: "neurological-system",
                    title: "Neurological System",
                    children: [
                      {
                        id: "central",
                        title: "Central",
                        children: [
                          {
                            id: "brain",
                            title: "Brain",
                            content: "Structure and function of the brain."
                          },
                          {
                            id: "spinal-cord",
                            title: "Spinal cord",
                            content: "Transmission of signals between the brain and body."
                          },
                          {
                            id: "meninges",
                            title: "Meninges",
                            content: "Protective layers surrounding the brain and spinal cord."
                          },
                          {
                            id: "csf",
                            title: "CSF",
                            content: "Cerebrospinal fluid composition and function."
                          }
                        ]
                      },
                      {
                        id: "peripheral",
                        title: "Peripheral",
                        children: [
                          {
                            id: "cranial-nerves",
                            title: "Cranial nerves",
                            content: "Overview of cranial nerve functions."
                          },
                          {
                            id: "spinal-nerves",
                            title: "Spinal nerves",
                            content: "Structure and function of spinal nerves."
                          },
                          {
                            id: "dermatomes",
                            title: "Dermatomes",
                            content: "Areas of skin innervated by specific spinal nerves."
                          }
                        ]
                      },
                      {
                        id: "autonomic-nervous-system",
                        title: "Autonomic Nervous System",
                        children: [
                          {
                            id: "sympathetic",
                            title: "Sympathetic",
                            content: "Fight-or-flight response mechanisms."
                          },
                          {
                            id: "parasympathetic",
                            title: "Parasympathetic",
                            content: "Rest-and-digest functions."
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: "cardiovascular-system",
                    title: "Cardiovascular System",
                    children: [
                      {
                        id: "heart-anatomy",
                        title: "Heart anatomy",
                        content: "Structure of the heart chambers, valves, and blood flow."
                      },
                      {
                        id: "cardiac-cycle",
                        title: "Cardiac cycle",
                        content: "Mechanics of heart contraction and relaxation."
                      },
                      {
                        id: "ecg-interpretation-basic",
                        title: "ECG interpretation (basic)",
                        content: "Reading and understanding electrocardiograms."
                      },
                      {
                        id: "blood-vessels",
                        title: "Blood vessels",
                        content: "Arteries, veins, and capillaries structure and function."
                      },
                      {
                        id: "hemodynamics",
                        title: "Hemodynamics",
                        content: "Study of blood flow dynamics."
                      },
                      {
                        id: "blood-composition",
                        title: "Blood composition",
                        content: "Components of blood (plasma, red blood cells, white blood cells, platelets)."
                      }
                    ]
                  },
                  {
                    id: "respiratory-system",
                    title: "Respiratory System",
                    children: [
                      {
                        id: "airway-anatomy",
                        title: "Airway anatomy",
                        content: "Structure of the respiratory tract."
                      },
                      {
                        id: "lung-volumes-capacities",
                        title: "Lung volumes/capacities",
                        content: "Measurements of lung capacity."
                      },
                      {
                        id: "gas-exchange",
                        title: "Gas exchange",
                        children: [
                          {
                            id: "diffusion",
                            title: "Diffusion",
                            content: "Exchange of oxygen and carbon dioxide at the alveoli."
                          },
                          {
                            id: "partial-pressures",
                            title: "Partial pressures",
                            content: "Role of partial pressure gradients in gas exchange."
                          }
                        ]
                      },
                      {
                        id: "mechanics-of-breathing",
                        title: "Mechanics of breathing",
                        content: "Inhalation and exhalation processes."
                      },
                      {
                        id: "control-of-respiration",
                        title: "Control of respiration",
                        content: "Neural regulation of breathing."
                      },
                      {
                        id: "absolutely-central-to-anesthesia",
                        title: "Absolutely central to anesthesia",
                        content: "Critical for managing airways and ventilation during procedures."
                      }
                    ]
                  },
                  {
                    id: "renal-system",
                    title: "Renal System",
                    children: [
                      {
                        id: "kidney-anatomy",
                        title: "Kidney anatomy",
                        content: "Structure of nephrons and renal vasculature."
                      },
                      {
                        id: "nephron-function",
                        title: "Nephron function",
                        content: "Filtration, reabsorption, and secretion processes."
                      },
                      {
                        id: "urine-formation",
                        title: "Urine formation",
                        content: "Steps involved in urine production."
                      },
                      {
                        id: "fluid-electrolyte-balance",
                        title: "Fluid/electrolyte balance",
                        content: "Regulation of body fluids and electrolytes."
                      },
                      {
                        id: "acid-base-regulation",
                        title: "Acid-base regulation",
                        content: "Maintaining pH balance through kidney function."
                      },
                      {
                        id: "crucial-for-iv-fluid-management-drug-excretion",
                        title: "Crucial for IV fluid management, drug excretion",
                        content: "Important for medication dosing and hydration strategies."
                      }
                    ]
                  },
                  {
                    id: "endocrine-system",
                    title: "Endocrine System",
                    children: [
                      {
                        id: "glands",
                        title: "Glands",
                        content: "Overview of major endocrine glands."
                      },
                      {
                        id: "hormones",
                        title: "Hormones",
                        content: "Types and functions of key hormones."
                      },
                      {
                        id: "feedback-loops",
                        title: "Feedback loops",
                        content: "Regulation via positive/negative feedback mechanisms."
                      },
                      {
                        id: "regulation-of-metabolism",
                        title: "Regulation of metabolism",
                        content: "Role of hormones in metabolic processes."
                      },
                      {
                        id: "stress-response",
                        title: "Stress response",
                        content: "Adrenal hormones and stress adaptation."
                      },
                      {
                        id: "impacts-anesthesia-significantly",
                        title: "Impacts anesthesia significantly",
                        content: "Influence on patient responses to surgical stress."
                      }
                    ]
                  },
                  {
                    id: "musculoskeletal-system",
                    title: "Musculoskeletal System",
                    children: [
                      {
                        id: "muscle-contraction",
                        title: "Muscle contraction",
                        content: "Physiology of muscle movement."
                      },
                      {
                        id: "skeletal-anatomy",
                        title: "Skeletal anatomy",
                        content: "Structure and function of bones."
                      },
                      {
                        id: "joint-types",
                        title: "Joint types",
                        content: "Classification and mobility of joints."
                      },
                      {
                        id: "relevant-for-neuromuscular-blockers",
                        title: "Relevant for neuromuscular blockers",
                        content: "Application in anesthesia practice."
                      }
                    ]
                  },
                  {
                    id: "integumentary-lymphatic-immune-digestive-reproductive-systems",
                    title: "Integumentary, Lymphatic, Immune, Digestive, and Reproductive Systems",
                    children: [
                      {
                        id: "integumentary-system",
                        title: "Integumentary System",
                        children: [
                          {
                            id: "skin-layers-and-functions",
                            title: "Skin layers and functions",
                            content: "Epidermis, dermis, hypodermis roles."
                          },
                          {
                            id: "hair-and-nails",
                            title: "Hair and nails",
                            content: "Structure and growth cycles."
                          },
                          {
                            id: "wound-healing-and-common-pathologies",
                            title: "Wound healing and common pathologies",
                            content: "Infections, burns, dermatitis."
                          }
                        ]
                      },
                      {
                        id: "lymphatic-system",
                        title: "Lymphatic System",
                        children: [
                          {
                            id: "lymph-nodes-and-vessels",
                            title: "Lymph nodes and vessels",
                            content: "Structure and circulation of lymph."
                          },
                          {
                            id: "lymph-flow-and-drainage",
                            title: "Lymph flow and drainage",
                            content: "Immune defense and fluid balance."
                          }
                        ]
                      },
                      {
                        id: "immune-system",
                        title: "Immune System",
                        children: [
                          {
                            id: "innate-and-adaptive-immunity-overview",
                            title: "Innate and adaptive immunity overview",
                            content: "First-line defenses and antigen-specific responses."
                          },
                          {
                            id: "key-immune-cells-and-organs",
                            title: "Key immune cells and organs",
                            content: "Spleen, thymus, bone marrow, and immune cells."
                          },
                          {
                            id: "immune-responses-and-common-disorders",
                            title: "Immune responses and common disorders",
                            content: "Allergies, autoimmune diseases."
                          }
                        ]
                      },
                      {
                        id: "digestive-system",
                        title: "Digestive System",
                        children: [
                          {
                            id: "anatomy-of-the-gi-tract",
                            title: "Anatomy of the GI tract",
                            content: "From mouth to anus."
                          },
                          {
                            id: "digestive-processes-and-enzyme-functions",
                            title: "Digestive processes and enzyme functions",
                            content: "Breakdown and absorption of nutrients."
                          },
                          {
                            id: "absorption-of-nutrients-and-common-diseases",
                            title: "Absorption of nutrients and common diseases",
                            content: "GERD, IBS, liver disease."
                          }
                        ]
                      },
                      {
                        id: "reproductive-system",
                        title: "Reproductive System",
                        children: [
                          {
                            id: "male-and-female-anatomy",
                            title: "Male and female anatomy",
                            content: "Structure and function of reproductive organs."
                          },
                          {
                            id: "hormonal-regulation-and-menstrual-cycle",
                            title: "Hormonal regulation and menstrual cycle",
                            content: "Endocrine control of reproduction."
                          },
                          {
                            id: "pregnancy-childbirth-basics-and-common-pathologies",
                            title: "Pregnancy, childbirth basics, and common pathologies",
                            content: "Maternal and fetal physiology."
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: "interrelationships",
                    title: "Interrelationships",
                    content: "How these systems interact and influence overall health."
                  },
                  {
                    id: "homeostatic-feedback-loops",
                    title: "Homeostatic Feedback Loops",
                    children: [
                      {
                        id: "positive-and-negative-feedback-mechanisms",
                        title: "Positive and negative feedback mechanisms",
                        content: "Relevance to maintaining equilibrium in body systems."
                      }
                    ]
                  },
                  {
                    id: "neurotransmitters-receptors",
                    title: "Neurotransmitters & Receptors",
                    children: [
                      {
                        id: "acetylcholine-ach",
                        title: "Acetylcholine (ACh)"
                      },
                      {
                        id: "norepinephrine-ne",
                        title: "Norepinephrine (NE)"
                      },
                      {
                        id: "gaba",
                        title: "GABA"
                      },
                      {
                        id: "serotonin",
                        title: "Serotonin"
                      },
                      {
                        id: "dopamine",
                        title: "Dopamine"
                      },
                      {
                        id: "basic-understanding-of-their-receptors",
                        title: "Basic understanding of their receptors",
                        content: "Relevance to anesthetic drug actions."
                      }
                    ]
                  },
                  {
                    id: "microbiology",
                    title: "Microbiology",
                    children: [
                      {
                        id: "types-of-microorganisms",
                        title: "Types of Microorganisms",
                        children: [
                          {
                            id: "bacteria",
                            title: "Bacteria"
                          },
                          {
                            id: "viruses",
                            title: "Viruses"
                          },
                          {
                            id: "fungi",
                            title: "Fungi"
                          },
                          {
                            id: "parasites",
                            title: "Parasites"
                          }
                        ]
                      },
                      {
                        id: "pathogenesis",
                        title: "Pathogenesis",
                        content: "How microbes cause disease."
                      },
                      {
                        id: "infection-control",
                        title: "Infection Control",
                        children: [
                          {
                            id: "aseptic-technique",
                            title: "Aseptic technique"
                          },
                          {
                            id: "hand-hygiene",
                            title: "Hand hygiene"
                          },
                          {
                            id: "sterilization",
                            title: "Sterilization"
                          },
                          {
                            id: "disinfection",
                            title: "Disinfection"
                          }
                        ]
                      },
                      {
                        id: "antimicrobial-agents",
                        title: "Antimicrobial Agents",
                        children: [
                          {
                            id: "antibiotics",
                            title: "Antibiotics"
                          },
                          {
                            id: "antivirals",
                            title: "Antivirals"
                          },
                          {
                            id: "antifungals",
                            title: "Antifungals"
                          },
                          {
                            id: "mechanisms-of-action",
                            title: "Mechanisms of action"
                          },
                          {
                            id: "resistance",
                            title: "Resistance"
                          }
                        ]
                      },
                      {
                        id: "immune-system",
                        title: "Immune System",
                        children: [
                          {
                            id: "innate-immunity",
                            title: "Innate immunity"
                          },
                          {
                            id: "adaptive-immunity",
                            title: "Adaptive immunity"
                          },
                          {
                            id: "inflammatory-response",
                            title: "Inflammatory response"
                          }
                        ],
                        content: "Important for preventing surgical site infections, managing sepsis."
                      }
                    ]
                  },
                  {
                    id: "pharmacology",
                    title: "Pharmacology (This is a major focus area for CRNAs)",
                    children: [
                      {
                        id: "pharmacokinetics",
                        title: "Pharmacokinetics",
                        children: [
                          {
                            id: "absorption",
                            title: "Absorption",
                            children: [
                              {
                                id: "routes",
                                title: "Routes"
                              },
                              {
                                id: "factors-affecting-absorption",
                                title: "Factors affecting absorption"
                              }
                            ]
                          },
                          {
                            id: "distribution",
                            title: "Distribution",
                            children: [
                              {
                                id: "volume-of-distribution",
                                title: "Volume of distribution"
                              },
                              {
                                id: "protein-binding-especially-albumin",
                                title: "Protein binding (especially albumin)"
                              },
                              {
                                id: "blood-brain-barrier",
                                title: "Blood-brain barrier"
                              }
                            ]
                          },
                          {
                            id: "metabolism-biotransformation",
                            title: "Metabolism (Biotransformation)",
                            children: [
                              {
                                id: "hepatic-metabolism",
                                title: "Hepatic metabolism",
                                children: [
                                  {
                                    id: "phase-i-ii-reactions",
                                    title: "Phase I & II reactions"
                                  },
                                  {
                                    id: "cyp450-system",
                                    title: "CYP450 system – CRITICAL for drug interactions, elimination"
                                  },
                                  {
                                    id: "first-pass-effect",
                                    title: "First-pass effect"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            id: "excretion",
                            title: "Excretion",
                            children: [
                              {
                                id: "renal",
                                title: "Renal",
                                children: [
                                  {
                                    id: "glomerular-filtration",
                                    title: "Glomerular filtration"
                                  },
                                  {
                                    id: "tubular-secretion-reabsorption",
                                    title: "Tubular secretion/reabsorption"
                                  }
                                ]
                              },
                              {
                                id: "biliary",
                                title: "Biliary"
                              },
                              {
                                id: "pulmonary",
                                title: "Pulmonary"
                              }
                            ]
                          },
                          {
                            id: "half-life-understanding-drug-duration",
                            title: "Half-life: Understanding drug duration"
                          }
                        ]
                      },
                      {
                        id: "pharmacodynamics",
                        title: "Pharmacodynamics",
                        children: [
                          {
                            id: "drug-receptor-interactions",
                            title: "Drug-Receptor Interactions",
                            children: [
                              {
                                id: "agonists",
                                title: "Agonists"
                              },
                              {
                                id: "antagonists",
                                title: "Antagonists"
                              },
                              {
                                id: "partial-agonists",
                                title: "Partial agonists"
                              },
                              {
                                id: "inverse-agonists",
                                title: "Inverse agonists"
                              },
                              {
                                id: "receptor-types",
                                title: "Receptor types"
                              }
                            ]
                          },
                          {
                            id: "dose-response-relationships",
                            title: "Dose-Response Relationships",
                            children: [
                              {
                                id: "potency",
                                title: "Potency"
                              },
                              {
                                id: "efficacy",
                                title: "Efficacy"
                              },
                              {
                                id: "therapeutic-index",
                                title: "Therapeutic index"
                              },
                              {
                                id: "tolerance",
                                title: "Tolerance"
                              },
                              {
                                id: "dependence",
                                title: "Dependence"
                              },
                              {
                                id: "addiction",
                                title: "Addiction"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        id: "drug-classifications-detailed-for-nursing-foundational-for-anesthesia",
                        title: "Drug Classifications (detailed for nursing, foundational for anesthesia)",
                        children: [
                          {
                            id: "cardiovascular-drugs",
                            title: "Cardiovascular Drugs",
                            children: [
                              {
                                id: "antihypertensives",
                                title: "Antihypertensives",
                                children: [
                                  {
                                    id: "beta-blockers",
                                    title: "Beta-blockers"
                                  },
                                  {
                                    id: "aceis",
                                    title: "ACEIs"
                                  },
                                  {
                                    id: "arbs",
                                    title: "ARBs"
                                  },
                                  {
                                    id: "ccbs",
                                    title: "CCBs"
                                  },
                                  {
                                    id: "vasodilators",
                                    title: "Vasodilators"
                                  }
                                ]
                              },
                              {
                                id: "antiarrhythmics",
                                title: "Antiarrhythmics"
                              },
                              {
                                id: "diuretics",
                                title: "Diuretics"
                              },
                              {
                                id: "inotropes",
                                title: "Inotropes"
                              }
                            ]
                          },
                          {
                            id: "respiratory-drugs",
                            title: "Respiratory Drugs",
                            children: [
                              {
                                id: "bronchodilators",
                                title: "Bronchodilators"
                              },
                              {
                                id: "corticosteroids",
                                title: "Corticosteroids"
                              }
                            ]
                          },
                          {
                            id: "neurological-drugs",
                            title: "Neurological Drugs",
                            children: [
                              {
                                id: "anticonvulsants",
                                title: "Anticonvulsants"
                              },
                              {
                                id: "anxiolytics",
                                title: "Anxiolytics"
                              },
                              {
                                id: "sedatives",
                                title: "Sedatives"
                              },
                              {
                                id: "hypnotics",
                                title: "Hypnotics"
                              }
                            ]
                          },
                          {
                            id: "pain-medications",
                            title: "Pain Medications",
                            children: [
                              {
                                id: "opioids",
                                title: "Opioids"
                              },
                              {
                                id: "nsaids",
                                title: "NSAIDs"
                              },
                              {
                                id: "acetaminophen",
                                title: "Acetaminophen"
                              }
                            ]
                          },
                          {
                            id: "endocrine-drugs",
                            title: "Endocrine Drugs",
                            children: [
                              {
                                id: "insulin",
                                title: "Insulin"
                              },
                              {
                                id: "oral-hypoglycemics",
                                title: "Oral hypoglycemics"
                              },
                              {
                                id: "thyroid-medications",
                                title: "Thyroid medications"
                              }
                            ]
                          },
                          {
                            id: "gastrointestinal-drugs",
                            title: "Gastrointestinal Drugs",
                            children: [
                              {
                                id: "antiemetics",
                                title: "Antiemetics"
                              },
                              {
                                id: "antacids",
                                title: "Antacids"
                              }
                            ]
                          },
                          {
                            id: "antibiotics-broad-classes",
                            title: "Antibiotics: Broad classes"
                          }
                        ]
                      },
                      {
                        id: "fluids-electrolytes",
                        title: "Fluids & Electrolytes",
                        children: [
                          {
                            id: "iv-fluid-types",
                            title: "IV fluid types",
                            children: [
                              {
                                id: "crystalloids",
                                title: "Crystalloids"
                              },
                              {
                                id: "colloids",
                                title: "Colloids"
                              }
                            ]
                          },
                          {
                            id: "electrolyte-imbalances-and-correction",
                            title: "Electrolyte imbalances and correction"
                          }
                        ]
                      },
                      {
                        id: "adverse-drug-reactions",
                        title: "Adverse Drug Reactions"
                      },
                      {
                        id: "drug-interactions",
                        title: "Drug Interactions"
                      },
                      {
                        id: "contraindications",
                        title: "Contraindications"
                      },
                      {
                        id: "patient-education",
                        title: "Patient Education",
                        children: [
                          {
                            id: "safe-medication-administration",
                            title: "Safe medication administration"
                          },
                          {
                            id: "common-side-effects",
                            title: "Common side effects"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: "pathophysiology",
                    title: "Pathophysiology",
                    children: [
                      {
                        id: "general-concepts",
                        title: "General Concepts",
                        children: [
                          {
                            id: "inflammation",
                            title: "Inflammation"
                          },
                          {
                            id: "cellular-injury-adaptation-death",
                            title: "Cellular injury/adaptation/death"
                          },
                          {
                            id: "fluid-electrolyte-imbalances",
                            title: "Fluid/electrolyte imbalances"
                          },
                          {
                            id: "acid-base-disorders",
                            title: "Acid-base disorders",
                            children: [
                              {
                                id: "respiratory-acidosis-alkalosis",
                                title: "Respiratory acidosis/alkalosis"
                              },
                              {
                                id: "metabolic-acidosis-alkalosis",
                                title: "Metabolic acidosis/alkalosis – CRITICAL"
                              }
                            ]
                          },
                          {
                            id: "shock-states",
                            title: "Shock states",
                            children: [
                              {
                                id: "hypovolemic",
                                title: "Hypovolemic"
                              },
                              {
                                id: "cardiogenic",
                                title: "Cardiogenic"
                              },
                              {
                                id: "distributive",
                                title: "Distributive"
                              },
                              {
                                id: "obstructive",
                                title: "Obstructive"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        id: "systemic-pathologies",
                        title: "Systemic Pathologies",
                        children: [
                          {
                            id: "heart-failure",
                            title: "Heart failure"
                          },
                          {
                            id: "myocardial-infarction",
                            title: "Myocardial infarction"
                          },
                          {
                            id: "arrhythmias",
                            title: "Arrhythmias"
                          },
                          {
                            id: "copd",
                            title: "COPD"
                          },
                          {
                            id: "asthma",
                            title: "Asthma"
                          },
                          {
                            id: "pneumonia",
                            title: "Pneumonia"
                          },
                          {
                            id: "stroke",
                            title: "Stroke"
                          },
                          {
                            id: "diabetes",
                            title: "Diabetes"
                          },
                          {
                            id: "renal-failure",
                            title: "Renal failure"
                          },
                          {
                            id: "liver-disease",
                            title: "Liver disease"
                          },
                          {
                            id: "neurological-disorders",
                            title: "Neurological disorders"
                          },
                          {
                            id: "thyroid-disorders",
                            title: "Thyroid disorders"
                          }
                        ]
                      },
                      {
                        id: "surgical-implications",
                        title: "Surgical Implications",
                        content: "How diseases impact surgical risk and anesthetic management."
                      }
                    ]
                  },
                  {
                    id: "statistics",
                    title: "Statistics",
                    children: [
                      {
                        id: "review-apply-all-concepts-from-prerequisite",
                        title: "Review/Apply: All concepts from prerequisite"
                      },
                      {
                        id: "interpretation-of-research",
                        title: "Interpretation of Research",
                        children: [
                          {
                            id: "statistical-significance",
                            title: "Statistical significance"
                          },
                          {
                            id: "confidence-intervals",
                            title: "Confidence intervals"
                          },
                          {
                            id: "p-values",
                            title: "P-values"
                          },
                          {
                            id: "study-design",
                            title: "Study design",
                            children: [
                              {
                                id: "rcts",
                                title: "RCTs"
                              },
                              {
                                id: "cohort-studies",
                                title: "Cohort studies"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        id: "evidence-based-practice",
                        title: "Evidence-Based Practice",
                        content: "Applying research findings to clinical practice."
                      }
                    ]
                  },
                  {
                    id: "health-assessment",
                    title: "Health Assessment",
                    children: [
                      {
                        id: "comprehensive-head-to-toe-assessment",
                        title: "Comprehensive Head-to-Toe Assessment",
                        children: [
                          {
                            id: "physical-examination-techniques",
                            title: "Physical examination techniques",
                            children: [
                              {
                                id: "inspection",
                                title: "Inspection"
                              },
                              {
                                id: "palpation",
                                title: "Palpation"
                              },
                              {
                                id: "percussion",
                                title: "Percussion"
                              },
                              {
                                id: "auscultation",
                                title: "Auscultation"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        id: "system-specific-assessments",
                        title: "System-Specific Assessments",
                        children: [
                          {
                            id: "cardiovascular",
                            title: "Cardiovascular"
                          },
                          {
                            id: "pulmonary",
                            title: "Pulmonary"
                          },
                          {
                            id: "neurological",
                            title: "Neurological"
                          },
                          {
                            id: "abdominal",
                            title: "Abdominal"
                          },
                          {
                            id: "musculoskeletal",
                            title: "Musculoskeletal"
                          },
                          {
                            id: "psychosocial-assessment",
                            title: "Psychosocial Assessment"
                          },
                          {
                            id: "pain-assessment",
                            title: "Pain Assessment"
                          }
                        ]
                      },
                      {
                        id: "documentation",
                        title: "Documentation",
                        content: "Accurate and concise charting."
                      },
                      {
                        id: "interpretation-of-findings",
                        title: "Interpretation of Findings",
                        content: "Link to diagnoses and nursing interventions."
                      }
                    ]
                  },
                  {
                    id: "nursing-fundamentals-skills",
                    title: "Nursing Fundamentals & Skills",
                    children: [
                      {
                        id: "patient-safety",
                        title: "Patient Safety",
                        children: [
                          {
                            id: "medication-safety",
                            title: "Medication safety"
                          },
                          {
                            id: "fall-prevention",
                            title: "Fall prevention"
                          },
                          {
                            id: "infection-control",
                            title: "Infection control"
                          }
                        ]
                      },
                      {
                        id: "communication",
                        title: "Communication",
                        children: [
                          {
                            id: "therapeutic-communication",
                            title: "Therapeutic communication"
                          },
                          {
                            id: "interprofessional-communication",
                            title: "Interprofessional communication"
                          }
                        ]
                      },
                      {
                        id: "nursing-process",
                        title: "Nursing Process",
                        children: [
                          {
                            id: "assessment",
                            title: "Assessment"
                          },
                          {
                            id: "diagnosis",
                            title: "Diagnosis"
                          },
                          {
                            id: "planning",
                            title: "Planning"
                          },
                          {
                            id: "implementation",
                            title: "Implementation"
                          },
                          {
                            id: "evaluation",
                            title: "Evaluation"
                          }
                        ]
                      },
                      {
                        id: "medication-administration",
                        title: "Medication Administration",
                        children: [
                          {
                            id: "all-routes",
                            title: "All routes",
                            children: [
                              {
                                id: "po",
                                title: "PO"
                              },
                              {
                                id: "im",
                                title: "IM"
                              },
                              {
                                id: "sc",
                                title: "SC"
                              },
                              {
                                id: "iv",
                                title: "IV"
                              }
                            ]
                          },
                          {
                            id: "dosage-calculations",
                            title: "Dosage calculations – CRITICAL for CRNA practice"
                          }
                        ]
                      },
                      {
                        id: "iv-therapy",
                        title: "IV Therapy",
                        children: [
                          {
                            id: "iv-insertion",
                            title: "IV insertion"
                          },
                          {
                            id: "fluid-administration",
                            title: "Fluid administration"
                          },
                          {
                            id: "central-line-care",
                            title: "Central line care"
                          }
                        ]
                      },
                      {
                        id: "wound-care",
                        title: "Wound Care"
                      },
                      {
                        id: "basic-life-support-bls",
                        title: "Basic Life Support (BLS)",
                        content: "Competency in CPR."
                      }
                    ]
                  },
                  {
                    id: "medical-surgical-nursing-extensive",
                    title: "Medical-Surgical Nursing (Extensive)",
                    children: [
                      {
                        id: "adult-patient-care",
                        title: "Adult Patient Care",
                        content: "Management of common medical and surgical conditions across all body systems."
                      },
                      {
                        id: "perioperative-nursing",
                        title: "Perioperative Nursing",
                        children: [
                          {
                            id: "pre-operative-assessment",
                            title: "Pre-operative assessment"
                          },
                          {
                            id: "intraoperative-roles",
                            title: "Intraoperative roles",
                            children: [
                              {
                                id: "circulating",
                                title: "Circulating"
                              },
                              {
                                id: "scrub",
                                title: "Scrub"
                              }
                            ]
                          },
                          {
                            id: "post-operative-care",
                            title: "Post-operative care"
                          }
                        ],
                        content: "Foundational knowledge for surgical environment."
                      },
                      {
                        id: "common-procedures",
                        title: "Common Procedures",
                        content: "Purpose and nursing care."
                      },
                      {
                        id: "priority-setting",
                        title: "Priority Setting"
                      },
                      {
                        id: "delegation",
                        title: "Delegation"
                      },
                      {
                        id: "ethical-decision-making",
                        title: "Ethical Decision-Making"
                      }
                    ]
                  },
                  {
                    id: "critical-care-nursing-if-elective-focus",
                    title: "Critical Care Nursing (If Elective/Focus)",
                    children: [
                      {
                        id: "advanced-hemodynamic-monitoring",
                        title: "Advanced Hemodynamic Monitoring",
                        children: [
                          {
                            id: "arterial-lines",
                            title: "Arterial lines"
                          },
                          {
                            id: "cvp",
                            title: "CVP"
                          },
                          {
                            id: "pa-catheters-basic-understanding",
                            title: "PA catheters (basic understanding)"
                          }
                        ]
                      },
                      {
                        id: "ventilator-management-basic",
                        title: "Ventilator Management (Basic)",
                        children: [
                          {
                            id: "modes",
                            title: "Modes"
                          },
                          {
                            id: "settings",
                            title: "Settings"
                          },
                          {
                            id: "troubleshooting",
                            title: "Troubleshooting"
                          }
                        ]
                      },
                      {
                        id: "vasoactive-medications",
                        title: "Vasoactive Medications",
                        children: [
                          {
                            id: "titration",
                            title: "Titration"
                          },
                          {
                            id: "effects",
                            title: "Effects"
                          }
                        ]
                      },
                      {
                        id: "management-of-sepsis",
                        title: "Management of Sepsis"
                      },
                      {
                        id: "ards",
                        title: "ARDS"
                      },
                      {
                        id: "dka",
                        title: "DKA"
                      },
                      {
                        id: "acute-renal-failure",
                        title: "Acute Renal Failure"
                      },
                      {
                        id: "advanced-rhythm-interpretation",
                        title: "Advanced Rhythm Interpretation"
                      }
                    ]
                  }
                ]
              },
              {
                id: "clinical-rotations",
                title: "Clinical Rotations",
                children: [
                  {
                    id: "active-engagement",
                    title: "Active Engagement",
                    children: [
                      {
                        id: "ask-questions",
                        title: "Ask questions"
                      },
                      {
                        id: "understand-the-why-behind-interventions",
                        title: "Understand the \"why\" behind interventions"
                      },
                      {
                        id: "observe-critically-ill-patients",
                        title: "Observe critically ill patients"
                      }
                    ]
                  },
                  {
                    id: "nursing-skills",
                    title: "Nursing Skills",
                    children: [
                      {
                        id: "master-iv-starts",
                        title: "Master IV starts"
                      },
                      {
                        id: "foley-insertions",
                        title: "Foley insertions"
                      },
                      {
                        id: "medication-administration",
                        title: "Medication administration"
                      },
                      {
                        id: "physical-assessments",
                        title: "Physical assessments"
                      }
                    ]
                  },
                  {
                    id: "documentation",
                    title: "Documentation",
                    content: "Practice thorough and accurate charting."
                  },
                  {
                    id: "preceptorships",
                    title: "Preceptorships",
                    content: "Seek opportunities in critical care or surgical units."
                  }
                ]
              },
              {
                id: "nclex-rn-examination",
                title: "NCLEX-RN Examination",
                children: [
                  {
                    id: "comprehensive-review",
                    title: "Comprehensive Review",
                    children: [
                      {
                        id: "uworld",
                        title: "UWorld"
                      },
                      {
                        id: "kaplan",
                        title: "Kaplan"
                      },
                      {
                        id: "hurst",
                        title: "Hurst"
                      },
                      {
                        id: "saunders",
                        title: "Saunders"
                      }
                    ]
                  },
                  {
                    id: "practice-questions",
                    title: "Practice Questions",
                    content: "Do thousands to build critical thinking and endurance."
                  },
                  {
                    id: "content-mastery",
                    title: "Content Mastery",
                    children: [
                      {
                        id: "safe-and-effective-care",
                        title: "Safe and effective care"
                      },
                      {
                        id: "health-promotion-maintenance",
                        title: "Health promotion/maintenance"
                      },
                      {
                        id: "psychosocial-integrity",
                        title: "Psychosocial integrity"
                      },
                      {
                        id: "physiological-integrity",
                        title: "Physiological integrity"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
    },
    {
        id: "phase3",
        title: "Phase 3: Gaining Critical Care Experience & Certifications (2-5+ years)",
        children: [
          {
            id: "secure-an-icu-position",
            title: "1. Secure an Intensive Care Unit (ICU) Position",
            children: [
              {
                id: "types-of-icus",
                title: "Types of ICUs (Prioritized)",
                children: [
                  {
                    id: "medical-icu-micu",
                    title: "Medical ICU (MICU)",
                    children: [
                      {
                        id: "sepsis",
                        title: "Sepsis"
                      },
                      {
                        id: "ards",
                        title: "ARDS"
                      },
                      {
                        id: "multi-organ-failure",
                        title: "Multi-organ failure"
                      },
                      {
                        id: "complex-respiratory-patients",
                        title: "Complex respiratory patients"
                      }
                    ]
                  },
                  {
                    id: "surgical-icu-sicu",
                    title: "Surgical ICU (SICU)",
                    children: [
                      {
                        id: "post-op-general-surgery",
                        title: "Post-op general surgery"
                      },
                      {
                        id: "trauma",
                        title: "Trauma"
                      },
                      {
                        id: "post-transplant",
                        title: "Post-transplant"
                      }
                    ]
                  },
                  {
                    id: "cardiothoracic-icu-cticu",
                    title: "Cardiothoracic ICU (CTICU)",
                    children: [
                      {
                        id: "open-heart-surgery-recovery-cabg-valve-replacement",
                        title: "Open-heart surgery recovery (CABG, valve replacement)"
                      },
                      {
                        id: "complex-arrhythmias",
                        title: "Complex arrhythmias"
                      },
                      {
                        id: "mechanical-circulatory-support-ecmo-vads",
                        title: "Mechanical circulatory support (ECMO, VADs)"
                      }
                    ]
                  },
                  {
                    id: "neuro-icu",
                    title: "Neuro ICU",
                    children: [
                      {
                        id: "strokes",
                        title: "Strokes"
                      },
                      {
                        id: "tbi",
                        title: "TBI"
                      },
                      {
                        id: "spinal-cord-injuries",
                        title: "Spinal cord injuries"
                      },
                      {
                        id: "complex-neurological-assessments",
                        title: "Complex neurological assessments"
                      }
                    ]
                  },
                  {
                    id: "trauma-icu",
                    title: "Trauma ICU",
                    children: [
                      {
                        id: "multi-system-trauma-patients",
                        title: "Multi-system trauma patients"
                      }
                    ]
                  },
                  {
                    id: "pediatric-icu-picu-neonatal-icu-nicu",
                    title: "Pediatric ICU (PICU)/Neonatal ICU (NICU)",
                    content: "Acceptable for some programs, but ensure adult ICU experience is also considered due to adult-focused curriculum."
                  }
                ]
              },
              {
                id: "quality-of-experience",
                title: "Quality of Experience (Must Master)",
                children: [
                  {
                    id: "advanced-ventilator-management",
                    title: "Advanced Ventilator Management",
                    children: [
                      {
                        id: "modes-ac-simv-prvc-aprv-bipap-cpap",
                        title: "All modes (AC, SIMV, PRVC, APRV, BiPAP, CPAP)"
                      },
                      {
                        id: "titration-settings-fiO2-peep-tv-rr-i-e",
                        title: "Titration settings (FiO₂, PEEP, TV, RR, I:E)"
                      },
                      {
                        id: "troubleshooting-alarms",
                        title: "Troubleshooting alarms"
                      },
                      {
                        id: "abg-interpretation",
                        title: "Arterial blood gas (ABG) interpretation"
                      }
                    ]
                  },
                  {
                    id: "hemodynamic-monitoring",
                    title: "Hemodynamic Monitoring",
                    children: [
                      {
                        id: "invasive",
                        title: "Invasive",
                        children: [
                          {
                            id: "arterial-line-insertion-management",
                            title: "Arterial line insertion/management"
                          },
                          {
                            id: "cvp",
                            title: "CVP"
                          },
                          {
                            id: "pa-catheter-insertion-management-waveform-analysis-svo2",
                            title: "PA catheter insertion/management (waveform analysis, SvO₂)"
                          }
                        ]
                      },
                      {
                        id: "non-invasive",
                        title: "Non-invasive",
                        children: [
                          {
                            id: "nibp",
                            title: "NIBP"
                          },
                          {
                            id: "continuous-cardiac-output-monitors",
                            title: "Continuous cardiac output monitors"
                          }
                        ]
                      },
                      {
                        id: "interpretation-preload-afterload-contractility-cardiac-output-svr",
                        title: "Interpretation: Understanding preload, afterload, contractility, cardiac output, SVR"
                      }
                    ]
                  },
                  {
                    id: "vasoactive-inotropic-medications",
                    title: "Vasoactive & Inotropic Medications",
                    children: [
                      {
                        id: "norepinephrine",
                        title: "Norepinephrine"
                      },
                      {
                        id: "epinephrine",
                        title: "Epinephrine"
                      },
                      {
                        id: "dopamine",
                        title: "Dopamine"
                      },
                      {
                        id: "dobutamine",
                        title: "Dobutamine"
                      },
                      {
                        id: "vasopressin",
                        title: "Vasopressin"
                      },
                      {
                        id: "phenylephrine",
                        title: "Phenylephrine"
                      },
                      {
                        id: "milrinone",
                        title: "Milrinone"
                      },
                      {
                        id: "nicardipine",
                        title: "Nicardipine"
                      },
                      {
                        id: "nitroglycerin",
                        title: "Nitroglycerin"
                      },
                      {
                        id: "nitroprusside",
                        title: "Nitroprusside"
                      }
                    ]
                  },
                  {
                    id: "sedation-management",
                    title: "Sedation Management",
                    children: [
                      {
                        id: "propofol",
                        title: "Propofol"
                      },
                      {
                        id: "midazolam",
                        title: "Midazolam"
                      },
                      {
                        id: "fentanyl",
                        title: "Fentanyl"
                      },
                      {
                        id: "precedex",
                        title: "Precedex"
                      },
                      {
                        id: "rass-sas-assessment",
                        title: "Assessment using RASS and SAS scales"
                      }
                    ]
                  },
                  {
                    id: "neuromuscular-blockade",
                    title: "Neuromuscular Blockade",
                    children: [
                      {
                        id: "paralytics",
                        title: "Paralytics"
                      },
                      {
                        id: "reversal-agents",
                        title: "Reversal agents"
                      }
                    ]
                  },
                  {
                    id: "cardiac-rhythm-interpretation-management",
                    title: "Cardiac Rhythm Interpretation & Management",
                    children: [
                      {
                        id: "advanced-ecg-interpretation",
                        title: "Advanced ECG interpretation"
                      },
                      {
                        id: "bradyarrhythmias",
                        title: "Bradyarrhythmias"
                      },
                      {
                        id: "tachyarrhythmias-svt-afib-flutter-vt-vfib",
                        title: "Tachyarrhythmias (SVT, AFib/flutter, VT, VFib)"
                      },
                      {
                        id: "pacing-defibrillation-cardioversion",
                        title: "Pacing, defibrillation, cardioversion"
                      }
                    ]
                  },
                  {
                    id: "fluid-electrolyte-management",
                    title: "Advanced Fluid & Electrolyte Management",
                    children: [
                      {
                        id: "aggressive-fluid-resuscitation",
                        title: "Aggressive fluid resuscitation"
                      },
                      {
                        id: "hyponatremia",
                        title: "Hyponatremia"
                      },
                      {
                        id: "hyperkalemia",
                        title: "Hyperkalemia"
                      }
                    ]
                  },
                  {
                    id: "crrt-dialysis",
                    title: "CRRT/Dialysis",
                    children: [
                      {
                        id: "continuous-renal-replacement-therapy",
                        title: "Continuous renal replacement therapy"
                      },
                      {
                        id: "intermittent-hemodialysis",
                        title: "Intermittent hemodialysis"
                      }
                    ]
                  },
                  {
                    id: "pharmacology-application",
                    title: "Pharmacology Application",
                    content: "Understanding how critically ill patients metabolize/respond to drugs differently."
                  },
                  {
                    id: "airway-management",
                    title: "Airway Management",
                    children: [
                      {
                        id: "assisting-with-intubation",
                        title: "Assisting with intubation"
                      },
                      {
                        id: "troubleshooting-etts",
                        title: "Troubleshooting ETTs"
                      },
                      {
                        id: "suctioning",
                        title: "Suctioning"
                      }
                    ]
                  },
                  {
                    id: "rapid-response-code-team-participation",
                    title: "Rapid Response/Code Team Participation",
                    content: "Leading or actively participating in emergent situations."
                  },
                  {
                    id: "complex-patient-assessment",
                    title: "Complex Patient Assessment",
                    content: "Integrating all assessment findings for a comprehensive patient picture."
                  },
                  {
                    id: "prioritization-time-management",
                    title: "Prioritization & Time Management",
                    content: "Managing multiple critical drips, assessments, and interventions simultaneously."
                  }
                ]
              }
            ]
          },
          {
            id: "obtain-essential-certifications",
            title: "2. Obtain Essential Certifications",
            children: [
              {
                id: "bls-basic-life-support",
                title: "BLS: Basic Life Support"
              },
              {
                id: "acls-advanced-cardiovascular-life-support",
                title: "ACLS: Advanced Cardiovascular Life Support",
                content: "In-depth algorithms, pharmacology for codes."
              },
              {
                id: "pals-pediatric-advanced-life-support",
                title: "PALS: Pediatric Advanced Life Support",
                content: "If considering pediatric critical care or if required by CRNA programs."
              },
              {
                id: "ccrn-critical-care-registered-nurse",
                title: "CCRN (Critical Care Registered Nurse): ABSOLUTELY ESSENTIAL",
                children: [
                  {
                    id: "study-domains",
                    title: "Study Domains",
                    children: [
                      {
                        id: "cardiovascular",
                        title: "Cardiovascular"
                      },
                      {
                        id: "pulmonary",
                        title: "Pulmonary"
                      },
                      {
                        id: "endocrine",
                        title: "Endocrine"
                      },
                      {
                        id: "gastrointestinal",
                        title: "Gastrointestinal"
                      },
                      {
                        id: "renal",
                        title: "Renal"
                      },
                      {
                        id: "hematology-immunology",
                        title: "Hematology/Immunology"
                      },
                      {
                        id: "multisystem",
                        title: "Multisystem"
                      },
                      {
                        id: "neurology",
                        title: "Neurology"
                      },
                      {
                        id: "psychosocial",
                        title: "Psychosocial"
                      },
                      {
                        id: "professional-caring-ethical-practice",
                        title: "Professional Caring & Ethical Practice"
                      }
                    ]
                  },
                  {
                    id: "preparation-materials",
                    title: "Preparation",
                    children: [
                      {
                        id: "aacn-review-courses-materials",
                        title: "AACN review courses/materials"
                      },
                      {
                        id: "barrons-ccrn",
                        title: "Barrons CCRN"
                      },
                      {
                        id: "laura-gasparis-vonfrolio-review",
                        title: "Laura Gasparis Vonfrolio review"
                      }
                    ],
                    content: "Demonstrates mastery of critical care knowledge."
                  }
                ]
              }
            ]
          },
          {
            id: "shadowing-experience",
            title: "3. Shadowing Experience",
            children: [
              {
                id: "target-crna-and-anesthesiologists",
                title: "Target: CRNAs and Anesthesiologists in various surgical settings"
              },
              {
                id: "observation-focus",
                title: "Observation Focus",
                children: [
                  {
                    id: "pre-op-assessment-planning",
                    title: "Pre-op assessment and planning"
                  },
                  {
                    id: "induction-maintenance-emergence-from-anesthesia",
                    title: "Induction, maintenance, emergence from anesthesia"
                  },
                  {
                    id: "airway-management-techniques",
                    title: "Airway management techniques"
                  },
                  {
                    id: "pharmacology-in-action-drug-administration-titrations",
                    title: "Pharmacology in action (drug administration, titrations)"
                  },
                  {
                    id: "monitoring-techniques-ecg-capnography-bis-nmt",
                    title: "Monitoring techniques (ECG, pulse oximetry, capnography, BIS, NMT)"
                  },
                  {
                    id: "crisis-management-during-anesthesia",
                    title: "Crisis management during anesthesia"
                  },
                  {
                    id: "regional-anesthesia-techniques-spinals-epidurals-nerve-blocks",
                    title: "Regional anesthesia techniques (spinals, epidurals, nerve blocks)"
                  },
                  {
                    id: "interactions-with-surgeons-circulating-nurses",
                    title: "Interactions with surgeons, circulating nurses, and other team members"
                  }
                ]
              },
              {
                id: "documentation-logs",
                title: "Documentation: Keep meticulous logs",
                content: "Dates, CRNA/Anesthesiologist name/contact, facility, type of cases, hours. Aim for 20–40+ hours, demonstrating genuine interest."
              }
            ]
          },
          {
            id: "gre-graduate-record-examination",
            title: "4. Graduate Record Examination (GRE) (If Required by Target Programs)",
            children: [
              {
                id: "verbal-reasoning",
                title: "Verbal Reasoning",
                children: [
                  {
                    id: "vocabulary",
                    title: "Vocabulary"
                  },
                  {
                    id: "reading-comprehension",
                    title: "Reading comprehension"
                  },
                  {
                    id: "critical-reasoning",
                    title: "Critical reasoning"
                  }
                ]
              },
              {
                id: "quantitative-reasoning",
                title: "Quantitative Reasoning",
                children: [
                  {
                    id: "arithmetic",
                    title: "Arithmetic"
                  },
                  {
                    id: "algebra",
                    title: "Algebra"
                  },
                  {
                    id: "geometry",
                    title: "Geometry"
                  },
                  {
                    id: "data-analysis",
                    title: "Data analysis"
                  }
                ]
              },
              {
                id: "analytical-writing",
                title: "Analytical Writing",
                children: [
                  {
                    id: "analyze-an-issue",
                    title: "Analyze an issue"
                  },
                  {
                    id: "analyze-an-argument",
                    title: "Analyze an argument"
                  }
                ]
              },
              {
                id: "preparation-resources",
                title: "Preparation",
                children: [
                  {
                    id: "ets-official-guides",
                    title: "ETS official guides"
                  },
                  {
                    id: "kaplan",
                    title: "Kaplan"
                  },
                  {
                    id: "princeton-review",
                    title: "Princeton Review"
                  },
                  {
                    id: "magoosh",
                    title: "Magoosh"
                  },
                  {
                    id: "practice-tests",
                    title: "Extensive practice tests"
                  }
                ],
                content: "Aim for 300+ combined score."
              }
            ]
          },
          {
            id: "professional-development",
            title: "5. Professional Development",
            children: [
              {
                id: "professional-organizations",
                title: "Professional Organizations",
                children: [
                  {
                    id: "aacn-american-association-of-critical-care-nurses",
                    title: "AACN (Active participation!)"
                  },
                  {
                    id: "aana-american-association-of-nurse-anesthesiology",
                    title: "AANA"
                  }
                ]
              },
              {
                id: "leadership-committees",
                title: "Leadership/Committees",
                children: [
                  {
                    id: "unit-councils",
                    title: "Unit councils"
                  },
                  {
                    id: "quality-improvement-initiatives",
                    title: "Quality improvement initiatives"
                  },
                  {
                    id: "precepting-new-nurses",
                    title: "Precepting new nurses"
                  }
                ]
              },
              {
                id: "continuing-education",
                title: "Continuing Education",
                children: [
                  {
                    id: "workshops-seminars",
                    title: "Attend workshops, seminars"
                  },
                  {
                    id: "online-courses-critical-care-anesthesia",
                    title: "Online courses related to critical care or anesthesia"
                  }
                ]
              },
              {
                id: "nursing-research",
                title: "Nursing Research",
                content: "Participate in or be exposed to research within your unit."
              }
            ]
          }
        ]
    },
    {
      id: "phase4",
      title: "Phase 4: Transition to Practice (4th year/Final Year)",
      children: [
        {
          id: "advancedConcepts",
          title: "1. Advanced Concepts",
          children: [
            {
              id: "complexPathophysiology",
              title: "Complex Pathophysiology",
              children: [
                {
                  id: "sepsis",
                  title: "Sepsis",
                  content: "Systemic inflammatory response.",
                },
                {
                  id: "shockStates",
                  title: "Shock States",
                  content: "Hypovolemic, cardiogenic, distributive.",
                },
                {
                  id: "multipleOrganDysfunctionSyndrome",
                  title: "Multiple Organ Dysfunction Syndrome (MODS)",
                  content: "Progressive failure of multiple organs.",
                },
                {
                  id: "acuteRespiratoryDistressSyndrome",
                  title: "Acute Respiratory Distress Syndrome (ARDS)",
                  content: "Severe form of respiratory failure.",
                },
              ],
            },
            {
              id: "criticalCareNursing",
              title: "Critical Care Nursing",
              children: [
                {
                  id: "hemodynamicMonitoring",
                  title: "Hemodynamic Monitoring",
                  content: "Arterial lines, central lines.",
                },
                {
                  id: "ventilatorManagementAdvanced",
                  title: "Ventilator Management (Advanced)",
                  content: "Complex modes, troubleshooting.",
                },
                {
                  id: "icudrugs",
                  title: "ICU Drugs",
                  content: "Vasopressors, inotropes, sedatives.",
                },
                {
                  id: "traumaCareAdvanced",
                  title: "Trauma Care (Advanced)",
                  content: "ATLS principles.",
                },
              ],
            },
            {
              id: "pharmacologyAdvanced",
              title: "Pharmacology (Advanced)",
              children: [
                {
                  id: "pharmacodynamicsAdvanced",
                  title: "Pharmacodynamics",
                  content: "Receptor theory, drug interactions.",
                },
                {
                  id: "pharmacokineticsAdvanced",
                  title: "Pharmacokinetics",
                  content: "Compartment models, clearance.",
                },
                {
                  id: "anestheticAgents",
                  title: "Anesthetic Agents",
                  content: "Inhalation, intravenous.",
                },
                {
                  id: "painManagementAdvanced",
                  title: "Pain Management",
                  content: "Regional anesthesia, chronic pain.",
                },
              ],
            },
            {
              id: "researchEvidenceBasedPracticeAdvanced",
              title: "Research & Evidence-Based Practice (Advanced)",
              children: [
                {
                  id: "researchMethodology",
                  title: "Research Methodology",
                  content: "Study designs, data analysis.",
                },
                {
                  id: "evidenceSynthesis",
                  title: "Evidence Synthesis",
                  content: "Systematic reviews, meta-analysis.",
                },
                {
                  id: "qualityImprovementProjects",
                  title: "Quality Improvement Projects",
                  content: "Designing and implementing QI initiatives.",
                },
                {
                  id: "nursingResearchEthics",
                  title: "Nursing Research Ethics",
                  content: "IRB, informed consent.",
                },
              ],
            },
          ],
        },
        {
          id: "professionalDevelopment",
          title: "2. Professional Development",
          children: [
            {
              id: "leadershipManagementAdvanced",
              title: "Leadership & Management (Advanced)",
              content: "Systems thinking, change management.",
            },
            {
              id: "healthcarePolicy",
              title: "Healthcare Policy",
              content: "Healthcare systems, legislation.",
            },
            {
              id: "professionalEthics",
              title: "Professional Ethics",
              content: "Ethical dilemmas, advocacy.",
            },
            {
              id: "careerPlanning",
              title: "Career Planning",
              content: "Resumes, interviews, continuing education.",
            },
          ],
        },
        {
          id: "clinicalSpecialties",
          title: "3. Clinical Specialties (Examples)",
          children: [
            {
              id: "cardiacCare",
              title: "Cardiac Care",
              content: "Advanced cardiac assessment, interventions.",
            },
            {
              id: "criticalCareSpecialty",
              title: "Critical Care",
              content: "Advanced life support, organ support.",
            },
            {
              id: "emergencyNursing",
              title: "Emergency Nursing",
              content: "Triage, trauma management.",
            },
            {
              id: "operatingRoomNursing",
              title: "Operating Room Nursing",
              content: "Surgical procedures, sterile technique.",
            },
          ],
        },
        {
          id: "nclexPreparation",
          title: "4. NCLEX Preparation",
          children: [
            {
              id: "nclexReviewStrategies",
              title: "NCLEX Review Strategies",
              content: "Test-taking techniques, content review.",
            },
            {
              id: "practiceQuestions",
              title: "Practice Questions",
              content: "Simulations, question banks.",
            },
            {
              id: "nclexStudyPlan",
              title: "NCLEX Study Plan",
              content: "Time management, self-assessment.",
            },
          ],
        },
      ],
    },
];

  
export default topicsData;