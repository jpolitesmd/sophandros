export interface Week {
  title: string;
  read: string;
  look: string;
  questions: string[];
  practice?: string;
  /** Taught lesson for this week, when one has been written. */
  lesson?: string;
  /** Stable fragment when this week is not one of the original syllabus numbers. */
  anchor?: string;
}

export interface Labeled {
  label: string;
  body: string;
}

export interface GreeceModule {
  slug: string;
  code: string;
  title: string;
  indexLine: string;
  card: string;
  length: string;
  theme: string;
  facts: Labeled[];
  latin: string;
  greek: string;
  weeks: Week[];
  mastery: string[];
  capstone?: { intro: string; items: string[] };
}

export interface SoonModule {
  code: string;
  title: string;
  indexLine: string;
}

export const greeceModules: GreeceModule[] = [
  {
    slug: "the-heroic-code",
    code: "I.1",
    title: "The Heroic Code",
    indexLine: "Homer, *Iliad* / Mycenae",
    card: "Honour, glory, wrath, mortality, and where the heroic code gives out.",
    length: "Six weeks",
    theme:
      "Honour (*timē*), glory (*kleos*), wrath (*mēnis*), mortality, and the limits of the heroic code.",
    facts: [
      {
        label: "Core text",
        body: "Homer, *Iliad*, selected books, read in English.",
      },
      {
        label: "Translations",
        body: "The lessons use Samuel Butler’s *Iliad* (1898), in the reader on the page. Another translation is optional: Richmond Lattimore (University of Chicago Press) follows the Greek line numbers. Emily Wilson (W. W. Norton, 2023). Robert Fagles (Penguin); his line numbers differ from the Greek, so use the book divisions. Caroline Alexander (Ecco, 2015).",
      },
      {
        label: "Line numbers",
        body: "References follow the Greek text, as in Lattimore.",
      },
    ],
    latin:
      "Latin begins in week 1, about one chapter a week, so the textbook can be finished by the end of Phase I. Track A: Wheelock’s *Latin*, 7th ed., revised by Richard LaFleur (HarperCollins, 2011), chapters 1–6. Track B: Hans Ørberg, *Lingua Latina per se Illustrata*, *Pars I: Familia Romana*, caps. I–VI (*Imperium Romanum*, *Familia Romana*, *Puer improbus*, *Dominus et servi*, *Villa et hortus*, *Via Latina*).",
    greek:
      "Greek proper begins in Phase I, month 4. This module has only an optional alphabet primer. Say the transliterated proem aloud: *mēnin aeide thea…*",
    weeks: [
      {
        title: "Laying the first stone: honor and glory",
        read: "*Iliad* Book 1: the quarrel of Agamemnon and Achilles, Chryses, Thetis and Zeus. The guide is the proem (1.1–7) and the meaning of *mēnis*.",
        look: "The Lion Gate at Mycenae, the citadel of Agamemnon’s legend, part of the UNESCO listing “Archaeological Sites of Mycenae and Tiryns.” Sketch the relieving triangle above the lintel.",
        questions: [
          "Is Achilles right to withdraw? What is *timē* worth?",
          "Agamemnon is king, Achilles is the better fighter: where does authority come from?",
          "Whom in your own working life do you recognise in this quarrel?",
        ],
        lesson: "/lessons/the-wrath",
      },
      {
        title: "Honor in a society of chieftains",
        read: "*Iliad* Book 2.1–483 (Agamemnon’s dream, the testing of the army, Thersites). Skim the Catalogue of Ships (2.484 to the end). Book 3 in full: Helen on the wall, and the duel of Paris and Menelaus.",
        look: "The “Mask of Agamemnon,” National Archaeological Museum, Athens, from Grave Circle A at Mycenae, c. 1550–1500 BC, centuries older than the Trojan War tradition.",
        questions: [
          "Why does Homer give Thersites, a common soldier, a voice?",
          "Helen watching from the wall: what is the war for?",
          "Schliemann named the mask after Agamemnon. What do we want from relics?",
        ],
        lesson: "/lessons/kings-and-spectators",
      },
      {
        title: "Honor tied to home and duty",
        read: "*Iliad* Book 6 (Glaucus and Diomedes, 6.119–236; Hector and Andromache, 6.390–502) and Book 9 (the embassy to Achilles, Phoenix, and Achilles’ speech, 9.307–429).",
        look: "Exekias, *Achilles and Ajax playing a board game*, a black-figure amphora of about 540–530 BC, Vatican Museums, Museo Gregoriano Etrusco, inv. 16757.",
        questions: [
          "Hector chooses duty over family. Is he right?",
          "Achilles in Book 9 questions the whole heroic bargain (“equal honour for the coward and the brave”). Does he have a point?",
          "Glaucus says the generations are like leaves. What does that do to the idea of glory?",
        ],
        lesson: "/lessons/honor-and-home",
      },
      {
        title: "Loyalty and the whole world of men",
        read: "*Iliad* Book 16, the *Patrocleia*: Patroclus fights in Achilles’ armour, Sarpedon, the death of Patroclus. Book 18: Achilles’ grief, Thetis, and the Shield of Achilles (18.478–608).",
        look: "The Euphronios Krater (c. 515 BC), on which Sleep and Death carry the body of Sarpedon (*Iliad* 16.666–83). It is in the National Archaeological Museum of Cerveteri, and was lent to the Acropolis Museum in Athens for June–August 2026. Also the Shield as an ekphrasis: sketch its concentric scenes from 18.478–608.",
        questions: [
          "Why does the shield show a city at peace, with weddings and harvests, in the middle of a war poem?",
          "Achilles’ grief: what does it reveal that his anger hid?",
        ],
        lesson: "/lessons/loyalty-and-the-world",
      },
      {
        title: "The limits of honor",
        read: "*Iliad* Book 22 in full: Hector before the walls, the chase, Athena’s deception, Hector’s death, Andromache’s lament. Book 19, the reconciliation, is optional.",
        look: "Return to the Lion Gate and the citadel walls. Compare “the walls of Troy” in Book 22 with Bronze Age fortification, and sketch a section of Cyclopean masonry.",
        questions: [
          "Hector’s monologue (22.99–130): when does courage become pride?",
          "Achilles refuses to bargain over the body. What has the code become?",
          "Andromache’s lament: whose story does the poem end up telling?",
        ],
        lesson: "/lessons/the-limits-of-honor",
      },
      {
        title: "Honor completed by compassion",
        read: "*Iliad* Book 24 in full: the ransom of Hector, Priam in Achilles’ hut (24.468–676), the jars of Zeus (24.527–33), and the funeral of Hector.",
        look: "The Brygos Painter’s “Ransom of Hector” skyphos, c. 490 BC, from Cerveteri. Kunsthistorisches Museum, Vienna, Antikensammlung inv. IV 3710, currently shown at Schloss Ambras, Innsbruck.",
        questions: [
          "Why does the *Iliad* end with a funeral, and not with the fall of Troy?",
          "Priam kisses “the hands that killed my son.” What does the poem hold up as the highest human act?",
          "Write a definition of the heroic code in about a hundred words, and say where it fails.",
        ],
        lesson: "/lessons/honor-and-compassion",
      },
    ],
    mastery: [
      "A reflection journal: a short written entry for each of Books 1, 3, 6, 9, 16, 18, 22, and 24. Each entry takes one scene and one of the module’s words (*mēnis*, *timē*, *kleos*, *xenia*, *aristeia*, or *ekphrasis*), says where you have met it in your own life, work, or household, and what the poem would have you do about it.",
      "Latin vocabulary and forms: 25 items from chapters 1–6 of the textbook you chose. Mark them yourself against your textbook’s key.",
      "An Ascham double translation: a short unseen Latin passage at the level of chapters 1–6, into English and back, compared with the original, line by line.",
      "Recitation: *Iliad* 1.1–7 in English, or in transliterated Greek, plus four to six lines of your Latin chapter.",
      "A commonplace essay of 500 words, “Is the heroic code worth living by?”, citing at least three passages by book and line.",
      "A sketchbook with three drawings: the Lion Gate, the layout of the shield, and one vase.",
    ],
  },
  {
    slug: "homecoming",
    code: "I.2",
    title: "Homecoming",
    indexLine: "Homer, *Odyssey*; Hesiod, *Works and Days*",
    card: "Return, guest-friendship, cunning, and a farmer’s account of work and justice.",
    length: "Six weeks",
    theme:
      "*Nostos* (homecoming), *xenia* (guest-friendship), *mētis* (cunning intelligence), identity and recognition, and, with Hesiod, work and justice.",
    facts: [
      {
        label: "Core texts",
        body: "Homer, *Odyssey*, selected books, in English. Hesiod, *Works and Days*.",
      },
      {
        label: "Odyssey translations",
        body: "Emily Wilson (W. W. Norton, 2017). Richmond Lattimore (line numbers follow the Greek). Robert Fagles (Penguin; numbering differs from the Greek). Robert Fitzgerald.",
      },
      {
        label: "Hesiod translations",
        body: "M. L. West, Oxford World’s Classics (*Theogony and Works and Days*), or H. G. Evelyn-White (Loeb, 1914).",
      },
      {
        label: "Line numbers",
        body: "References follow the Greek, as in Lattimore and West.",
      },
    ],
    latin:
      "Continuing from Module 1. Wheelock chapters 7–12, or *Lingua Latina* caps. VII–XII (*Puella et rosa*, *Taberna Romana*, *Pastor et oves*, *Bestiae et homines*, *Corpus humanum*, *Miles Romanus*).",
    greek:
      "Still the optional primer. Practise the alphabet on *Odyssey* 1.1: ἄνδρα μοι ἔννεπε, μοῦσα, πολύτροπον…",
    weeks: [
      {
        title: "Telemachus and the Suitors",
        read: "*Odyssey* Books 1–2: the proem (1.1–10), Athena as Mentes, the suitors, the assembly at Ithaca. Skim Book 4.1–624, Telemachus at Sparta with Helen and Menelaus.",
        look: "Set the two proems side by side, *Iliad* 1.1–7 against *Odyssey* 1.1–10. Wrath, then the man of many turns.",
        questions: [
          "What does a household look like without its master?",
          "Telemachus has to grow up. What does Athena teach him?",
          "Set this opening next to the opening of the *Iliad*. What has changed?",
        ],
      },
      {
        title: "Calypso and the Phaeacians",
        read: "*Odyssey* Book 5 (Hermes to Calypso, the raft, the storm), Book 6 (Nausicaa), and Book 8.1–103 and 8.471–586 (Demodocus, and Odysseus weeping).",
        look: "The Odyssey Landscapes, Roman wall paintings of the 1st century BC from a house on the Esquiline in Rome, found in 1848 in Via Graziosa (now Via Cavour). They are in the Vatican Museums, in the Room of the Aldobrandini Wedding.",
        questions: [
          "Odysseus refuses Calypso’s offer of immortality (5.203–24). Why?",
          "Nausicaa, and the ethics of hospitality to a stranger.",
          "Why does Odysseus weep at a song about his own deeds?",
        ],
      },
      {
        title: "The Cyclops and Circe",
        read: "*Odyssey* Book 9 (the Lotus-eaters, Polyphemus, “Nobody,” and the boast at 9.502–05) and Book 10 (Aeolus, the Laestrygonians, Circe).",
        look: "The Eleusis Amphora (c. 670–650 BC, Protoattic), the blinding of Polyphemus, and the Sperlonga sculpture group of the same episode.",
        questions: [
          "Polyphemus violates *xenia*, and so, arguably, does Odysseus. Who is the guest and who the host?",
          "Why does Odysseus reveal his name (9.502–05), and what does it cost him?",
          "Cunning (*mētis*) against strength: which does the poem prize?",
        ],
      },
      {
        title: "The Dead and the Sirens",
        read: "*Odyssey* Book 11, the *Nekyia*: Elpenor, Tiresias, Anticleia, Agamemnon, Achilles (11.467–540), and Ajax’s silence (11.543–67). Book 12: the Sirens, Scylla and Charybdis, the cattle of the Sun.",
        look: "The Siren Painter’s stamnos, Attic red-figure, c. 480–470 BC: Odysseus bound to the mast. British Museum 1843,1103.31 (old catalogue E440), from Vulci.",
        questions: [
          "Achilles in the underworld says he would rather be a hired labourer than king over all the dead (11.489–91). Does this overturn the *Iliad*?",
          "The Sirens offer knowledge. Why must Odysseus be bound?",
          "The crew eat the cattle of the Sun. Who is responsible?",
        ],
      },
      {
        title: "Recognition and Revenge",
        read: "*Odyssey* Book 19 (Penelope and the beggar; Eurycleia and the scar, 19.386–475), Book 21 (the bow), and Book 22 (the slaughter of the suitors).",
        look: "The Penelope Painter’s skyphos: the nurse recognising Odysseus by the scar, and Penelope seated in the classic pose.",
        questions: [
          "Erich Auerbach’s essay “Odysseus’ Scar” (*Mimesis*, 1946) contrasts Homer’s style with the Bible. Is the digression a flaw, or the point?",
          "Is the slaughter in Book 22 justice, or excess?",
          "Who recognises Odysseus, and how: the dog, the nurse, the son, the wife?",
        ],
      },
      {
        title: "Home, and the Farmer’s Year",
        read: "*Odyssey* Book 23 (Penelope tests Odysseus; the bed, 23.177–230) and Hesiod, *Works and Days* 1–382: the two Strifes (11–26), Prometheus and Pandora (42–105), the five ages (106–201), justice (202–285), and work.",
        look: "A medieval manuscript of *Works and Days*, and the question of how the text reached us.",
        questions: [
          "The bed is rooted in the olive tree. What does it say about the marriage and the house?",
          "Hesiod’s ages of man, and “work is no disgrace” (311). How does a farmer’s ethic differ from a hero’s?",
          "Compare Homer’s gods and Hesiod’s gods on justice.",
        ],
      },
    ],
    mastery: [
      "A reflection journal: a short written entry for each of *Odyssey* Books 1, 5, 6, 9–12, 19, and 21–23, and one on *Works and Days* 1–382. Each entry takes one scene and one of the module’s words (*nostos*, *xenia*, *mētis*, *kleos*, *polytropos*, or *dikē*) and turns it on a problem you face now: a homecoming, a temptation, a debt, a stranger at your door.",
      "Latin: 25 items from chapters 7–12, plus five review items from chapters 1–6. Mark them yourself against your textbook’s key.",
      "An unseen double translation at the level of chapters 1–12, in both directions, compared with the original, line by line.",
      "Recitation: *Odyssey* 1.1–10 in English, or in transliterated Greek, plus six to eight lines of your Latin text.",
      "A commonplace essay of 600 words: “Achilles or Odysseus: which is the better model for a modern professional?” Cite both epics by book and line.",
      "A sketchbook with three drawings: the Polyphemus amphora, Odysseus at the mast, and your own map of the wanderings.",
    ],
  },
  {
    slug: "inquiry-and-war",
    code: "I.3",
    title: "Inquiry and War",
    indexLine: "Herodotus; Thucydides / the Acropolis",
    card: "How history begins, and what a city does with victory.",
    length: "Six weeks, plus the Spartan counterpoint",
    theme:
      "The invention of history: inquiry (*historiē*), fortune and hubris, freedom and empire, power and necessity. The lesson sequence adds Sparta as the counterpoint to Athens.",
    facts: [
      {
        label: "Herodotus",
        body: "*Histories*. Aubrey de Sélincourt, revised by John Marincola (Penguin); Tom Holland (Penguin, 2013); or *The Landmark Herodotus*, edited by Robert B. Strassler, translated by Andrea L. Purvis, which is recommended for the maps.",
      },
      {
        label: "Thucydides",
        body: "*History of the Peloponnesian War*. *The Landmark Thucydides*, edited by Robert B. Strassler (Richard Crawley’s translation, with maps); Rex Warner (Penguin); or Martin Hammond (Oxford World’s Classics).",
      },
      {
        label: "References",
        body: "Book and chapter numbers, which these editions share.",
      },
    ],
    latin:
      "Wheelock chapters 13–18, or *Lingua Latina* caps. XIII–XVIII. The weekly load is rebalanced once Greek is added: a little less Latin, a little less looking, and Greek in their place.",
    greek:
      "The Greek strand begins here, in month 4. *Athenaze*, Book I (Balme, Lawall, and Morwood; Oxford University Press, 3rd ed., 2016): the introduction plus chapters 1–3. Book I has 16 chapters, each split into α and β. The chapter titles are ὁ Δικαιόπολις, ὁ Ξανθίας, and τὸ ἄροτρον.",
    weeks: [
      {
        title: "Why Did They Fight? Croesus and Solon",
        read: "Herodotus 1.1–5 (the proem and the abductions), 1.6–33 (Croesus, Gyges at 1.8–13, Solon and Croesus at 1.29–33), and 1.86–91 (Croesus on the pyre).",
        look: "Croesus on the pyre, an Attic red-figure amphora attributed to Myson (c. 500–490 BC), Louvre G 197.",
        questions: [
          "“Call no man happy until he is dead” (1.32). Is that useful to a doctor?",
          "What does Herodotus mean by *historiē*?",
          "How does Herodotus apportion blame for the war?",
        ],
      },
      {
        title: "Marathon",
        read: "Herodotus 5.97–105, the Ionian Revolt in brief, and 6.94–120: Marathon, Pheidippides (6.105–06), Miltiades, and the battle (6.111–17).",
        look: "The Soros, the burial mound of the Athenians at Marathon (490 BC).",
        questions: [
          "Why did Marathon matter so much to the Athenian self-image?",
          "How does Herodotus handle the stories he doubts?",
          "Pheidippides’ run: myth and evidence.",
        ],
      },
      {
        title: "Thermopylae and Salamis",
        read: "Herodotus 7.101–105 (Xerxes and Demaratus on Spartan law), 7.201–239 (Thermopylae), and 8.40–96 (Salamis, Themistocles, Artemisia at 8.87–88).",
        look: "The Serpent Column, the Plataean victory offering from Delphi (479 BC), now in the Hippodrome at Istanbul. And the trireme *Olympias*, a modern full-scale reconstruction launched in 1987.",
        questions: [
          "Demaratus says the Spartans have a master, the law (7.104). What is freedom under law?",
          "Themistocles: genius, or opportunist?",
          "Why give Artemisia, a woman in command, such prominence?",
        ],
      },
      {
        title: "The Spartan counterpoint: why Sparta’s constitution worked, and why it failed",
        anchor: "the-spartan-counterpoint",
        read: "Coming soon. The lesson sequence places this after Thermopylae and Salamis: why Sparta’s constitution worked, and why it failed. Sparta’s mixed constitution gave stability and discipline, but a shrinking, closed citizen body resting on helots could not last. The works named for it are Aristotle’s *Politics*, Paul Cartledge’s *Sparta and Lakonia*, Herodotus, Plutarch’s *Lycurgus*, Polybius, Carl J. Richard’s *The Founders and the Classics*, Thucydides, and Xenophon’s *Constitution of the Lacedaemonians*. Chapter ranges are not set here.",
        look: "No object is assigned for this lesson yet.",
        questions: [
          "What did Sparta’s mixed constitution hold in place?",
          "What did a shrinking, closed citizen body, resting on helots, make impossible to keep?",
        ],
      },
      {
        title: "The Truest Cause",
        read: "Thucydides 1.1–23: the Archaeology, his method at 1.20–22 (“a possession for all time”), and 1.23.6, the truest cause. Then 1.66–88, the debate at Sparta: the Corinthians on the Athenians (1.70), Archidamus, Sthenelaidas.",
        look: "The ostracon of Themistocles, and the Pnyx, as Athenian democracy at work.",
        questions: [
          "Thucydides on speeches (1.22.1): he wrote what he thought was required. Is that history?",
          "Fear, honour, and interest (cf. 1.75–76). Are they still the motives of states?",
          "The Corinthians’ portrait of the Athenians (1.70): an admirable people, or a dangerous one?",
        ],
      },
      {
        title: "Pericles, the Plague, and Civil War",
        read: "Thucydides 2.34–46, Pericles’ Funeral Oration; 2.47–54, the plague, including the clinical description at 2.48–53; and 3.82–84, civil war at Corcyra, where words changed their meanings.",
        look: "A bust of Pericles, a Roman copy after Kresilas, in the British Museum, and the Parthenon, built under Pericles (447–432 BC).",
        questions: [
          "For physicians: compare the plague account (2.48–53) with a modern case history. Symptoms, contagion, the collapse of norms.",
          "The Funeral Oration’s ideal of Athens: an ideal, propaganda, or both?",
          "Corcyra: how do crises corrupt language?",
        ],
      },
      {
        title: "Melos and Sicily",
        read: "Thucydides 5.84–116, the Melian Dialogue (“the strong do what they can,” 5.89); 6.8–26, the Sicilian debate, Nicias against Alcibiades; and 7.84–87, the catastrophe at the Assinarus and the quarries.",
        look: "Return to the trireme *Olympias*. What did the Sicilian expedition actually put to sea?",
        questions: [
          "The Melian Dialogue: are the Athenians wrong, or only honest?",
          "Alcibiades against Nicias. What makes a leader persuasive, and what makes one wise?",
          "Herodotus or Thucydides: whose history would you rather trust?",
        ],
      },
    ],
    mastery: [
      "A reflection journal: a short written entry for each of Herodotus 1 and 6–8 and Thucydides 1–3 and 5–7. Each entry takes one episode and one of the module’s ideas (*historiē*, *hubris*, *nemesis*, *isonomia*, *stasis*, the truest cause, or the Melian Dialogue) and asks where it is at work in your own firm, family, town, or country.",
      "Latin: 25 items from chapters 13–18, plus five review items. Mark them yourself against your textbook’s key.",
      "Greek: write the alphabet with accents and breathings, transliterate five words and read three aloud, and answer 15 vocabulary items from *Athenaze* chapters 1–2. Mark them yourself against your textbook’s key.",
      "An unseen Latin double translation through chapter 18, plus one Greek sentence in both directions.",
      "Recitation: Thucydides 2.37.1, the opening of Pericles’ account of the constitution, in English, and Herodotus 1.1 in Greek script.",
      "A commonplace essay of 600 words. Either “Thucydides’ plague narrative as a clinical document: what can a modern physician learn from it?” or “Is the Melian Dialogue right about power?”",
      "A sketchbook with three drawings: the Croesus amphora, the Parthenon façade, and your own map of Salamis or Syracuse.",
    ],
  },
  {
    slug: "tragedy-and-the-city",
    code: "I.4",
    title: "Tragedy and the City",
    indexLine:
      "Aeschylus, *Oresteia*; Sophocles, *Antigone*, *Oedipus*; Euripides, *Medea* / Epidaurus",
    card: "Justice, the family, and the city, staged at public expense.",
    length: "Six weeks",
    theme:
      "Tragedy as a civic institution, the City Dionysia. Justice and revenge, the family against the city, knowledge through suffering (*pathei mathos*), law against conscience.",
    facts: [
      {
        label: "Aeschylus",
        body: "The *Oresteia*. Robert Fagles (Penguin); Richmond Lattimore (University of Chicago Press, *The Complete Greek Tragedies*); or Alan H. Sommerstein (Loeb, with facing Greek).",
      },
      {
        label: "Sophocles",
        body: "*Antigone* and *Oedipus the King*. Robert Fagles, *The Three Theban Plays* (Penguin), or David Grene (Chicago, *Complete Greek Tragedies*).",
      },
      {
        label: "Euripides",
        body: "*Medea*. Rex Warner (Chicago, *Complete Greek Tragedies*), or another reputable translation.",
      },
      {
        label: "Optional bridge",
        body: "Aristotle, *Poetics*, chapters 6, 11, and 13: tragedy, *peripeteia*, *anagnōrisis*, *hamartia*. It points ahead to Module 6.",
      },
      {
        label: "Line numbers",
        body: "Line numbers follow the Greek.",
      },
    ],
    latin: "Wheelock chapters 19–24, or *Lingua Latina* caps. XIX–XXIV.",
    greek:
      "*Athenaze* Book I, chapters 3–5. Say πάθει μάθος (*Agamemnon* 177), and later the opening of the Ode on Man: πολλὰ τὰ δεινὰ κοὐδὲν ἀνθρώπου δεινότερον πέλει.",
    weeks: [
      {
        title: "Agamemnon",
        read: "Aeschylus, *Agamemnon*, in full. Focus on the watchman (1–39); the Hymn to Zeus and learning through suffering, *pathei mathos* (160–183); the sacrifice of Iphigenia (184–247); the carpet scene (905–974); Cassandra (1072–1330); Clytemnestra over the bodies (1372–1406).",
        look: "The Theatre of Dionysus at Athens, where the *Oresteia* was first staged in 458 BC.",
        questions: [
          "Why does Agamemnon walk on the tapestries?",
          "Cassandra knows, and cannot be believed. What is the modern equivalent?",
          "Is Clytemnestra a murderer, an avenging mother, or both?",
        ],
      },
      {
        title: "Libation Bearers",
        read: "Aeschylus, *Libation Bearers* (*Choephori*), in full. The recognition at the tomb (164–245), the great *kommos* (306–478), Orestes and Clytemnestra (892–930), Orestes seeing the Furies (1048–62).",
        look: "Orestes, Electra, and Pylades at Agamemnon’s tomb (Louvre K 428).",
        questions: [
          "The recognition by a lock of hair. Euripides later mocked it (*Electra* 518–44). Does it matter?",
          "Can matricide ever be just?",
          "What do the Furies represent?",
        ],
      },
      {
        title: "Eumenides and the Birth of the Court",
        read: "Aeschylus, *Eumenides*, in full. The Furies at Delphi (1–234); Athena founds the Areopagus (470–89, 681–710); the trial and the vote (566–777); the Furies transformed (778–1047).",
        look: "Orestes at Delphi, a red-figure krater, British Museum GR 1917,1210.1, and the Black Fury Painter’s Orestes krater in Naples.",
        questions: [
          "From vendetta to verdict: what does the jury replace?",
          "Athena’s casting vote, and Apollo’s argument about parenthood (657–66). How do we read them now?",
          "For physicians: compare the procedure of the Areopagus with medical ethics boards and peer review.",
        ],
      },
      {
        title: "Antigone",
        read: "Sophocles, *Antigone*, in full. Creon’s edict (162–210); the Ode on Man, *polla ta deina* (332–375); Antigone’s defence of the unwritten laws (450–470); Haemon and Creon (631–765); Tiresias (988–1090).",
        look: "The theatre at Epidaurus, fourth century BC: acoustics and design.",
        questions: [
          "Hegel read *Antigone* as two rights in collision (*Lectures on Aesthetics*). Do you agree?",
          "*Deinos* means both wonderful and terrible. What does the Ode say about human skill, and about medicine (“he has devised escapes from diseases,” 363–64)?",
          "When should conscience override law?",
        ],
      },
      {
        title: "Oedipus the King",
        read: "Sophocles, *Oedipus the King*, in full. The plague of Thebes (1–150); Tiresias (300–462); Jocasta and the crossroads (707–862); the shepherd and the revelation (1110–1185); the messenger and the blinding (1223–1296).",
        look: "Oedipus and the Sphinx, an Attic red-figure kylix by the Oedipus Painter (470–460 BC), Vatican Museums, Museo Gregoriano Etrusco, inv. 16541.",
        questions: [
          "For physicians: the play opens with an epidemic and a ruler as diagnostician. Compare it with Thucydides’ plague in Module 3.",
          "Aristotle’s *peripeteia* and *anagnōrisis* (*Poetics* 11). Where exactly do they happen?",
          "Is Oedipus guilty?",
        ],
      },
      {
        title: "Euripides’ Medea",
        read: "Euripides, *Medea*, in full. Medea on women’s lot (214–266); Jason and Medea (446–626); the great monologue (1021–80); the dragon chariot (1293–1419). Aristotle, *Poetics* chapters 6 and 13, is optional.",
        look: "A calyx krater with Medea in the dragon chariot (c. 400 BC), Cleveland Museum of Art 1991.1, Lucanian, attributed to the Policoro Painter.",
        questions: [
          "Is Medea a victim, a monster, or Euripides’ indictment of Athens?",
          "Compare the endings: the *Oresteia* reconciles, *Oedipus* goes into exile, *Medea* escapes. What does each say about the city?",
          "Why did Athenians pay to watch suffering?",
        ],
      },
    ],
    mastery: [
      "A reflection journal: a short written entry on each of the *Oresteia*, *Antigone*, *Oedipus the King*, and *Medea*. Each entry takes one scene and one of the module’s ideas (*pathei mathos*, *hamartia*, *peripeteia*, *anagnōrisis*, or *katharsis*) and asks where you have learned by suffering, or missed a truth about yourself until it was too late.",
      "Latin: 25 items from chapters 19–24, plus five review items. Mark them yourself against your textbook’s key.",
      "Greek: 20 vocabulary and form items from *Athenaze* chapters 1–5. Read one textbook sentence aloud and translate it. Mark them yourself against your textbook’s key.",
      "An unseen Latin double translation through chapter 24, plus one Greek sentence in both directions.",
      "Recitation: *Antigone* 332–341, the opening of the Ode on Man, in English, and line 332 in Greek.",
      "A commonplace essay of 600 words: “Law, conscience, and the professional: Antigone, Creon, and a hard case from your own field.”",
      "A sketchbook with three drawings: the plan of Epidaurus, the Oedipus kylix, and a tragic mask or a chorus.",
    ],
  },
  {
    slug: "the-examined-life",
    code: "I.5",
    title: "The Examined Life",
    indexLine:
      "Plato, *Euthyphro*, *Apology*, *Crito*, *Phaedo*, *Meno*, *Republic*; Euclid I / the Agora",
    card: "Socratic questioning, the just city, and proof as a discipline.",
    length: "Six weeks",
    theme:
      "“The unexamined life is not worth living” (*Apology* 38a). Socratic questioning, piety and justice, the soul, knowledge and recollection, the just city, the philosopher and the Cave, and proof as an intellectual discipline, in Euclid.",
    facts: [
      {
        label: "Plato, five dialogues",
        body: "*Euthyphro*, *Apology*, *Crito*, *Meno*, and *Phaedo*, in G. M. A. Grube, *Five Dialogues* (Hackett; 2nd ed., revised by John M. Cooper). Stephanus page numbers are standard across editions.",
      },
      {
        label: "Republic",
        body: "Allan Bloom (Basic Books), or G. M. A. Grube revised by C. D. C. Reeve (Hackett). Also *Plato: Complete Works*, edited by John M. Cooper (Hackett).",
      },
      {
        label: "Euclid",
        body: "*Elements*, Book I. T. L. Heath (Dover, or the Green Lion Press one-volume edition edited by Dana Densmore). Oliver Byrne’s coloured *Euclid* of 1847 is optional, and is in the public domain.",
      },
    ],
    latin: "Wheelock chapters 25–30, or *Lingua Latina* caps. XXV–XXX.",
    greek:
      "*Athenaze* Book I, chapters 6–8. Graded reading from Plato begins, with phrases from the *Apology*, including 38a: the unexamined life.",
    weeks: [
      {
        title: "Socrates on Trial",
        read: "*Euthyphro* in full (the dilemma at 10a: is the pious loved by the gods because it is pious?). *Apology* in full: the oracle and Socratic ignorance (20e–23c), the gadfly (30e), the unexamined life (38a), the closing words (42a).",
        look: "The Ancient Agora of Athens. The Stoa of Attalos, reconstructed in 1953–56, the law courts, and the kleroterion, the allotment machine for jurors.",
        questions: [
          "The Euthyphro dilemma. Does it apply to a professional code, right because the code says so?",
          "Socratic ignorance. What would knowing that you do not know look like on a ward round?",
          "Was Socrates guilty as charged?",
        ],
      },
      {
        title: "The Laws and the Death of Socrates",
        read: "*Crito* in full, including the speech of the Laws (50a–54d). *Phaedo*: the opening (57a–69e, philosophy as practice for dying) and the final argument and death scene (115b–118a), “Crito, we owe a cock to Asclepius” (118a).",
        look: "Jacques-Louis David, *The Death of Socrates* (1787), the Metropolitan Museum of Art, New York.",
        questions: [
          "Should Socrates have escaped? Weigh the argument of the Laws.",
          "For physicians: the *Phaedo*’s description of hemlock (117e–118a), and the cock for Asclepius, the god of healing. What does Socrates mean?",
          "David’s painting. What does it add to Plato, and what does it falsify?",
        ],
      },
      {
        title: "Learning as Recollection, and Euclid I",
        read: "Plato, *Meno*, in full: Meno’s paradox (80d–e), the slave-boy’s geometry lesson (82b–85b), true opinion against knowledge (97a–98a). Euclid, *Elements* I: definitions, postulates, common notions; Proposition 1 (the equilateral triangle), Proposition 5 (the *pons asinorum*), and Proposition 47 (Pythagoras).",
        look: "The papyrus fragment P. Oxy. I 29, a piece of Euclid’s *Elements* from Oxyrhynchus, and Oliver Byrne’s coloured Euclid (1847).",
        practice:
          "Construct *Elements* I.1 with compass and straightedge, and work the doubled square from the *Meno* yourself.",
        questions: [
          "Is learning recollection, or something else?",
          "What does a proof give that experience cannot, and the reverse (cf. evidence-based medicine)?",
        ],
      },
      {
        title: "What Is Justice?",
        read: "*Republic* I: Cephalus, Polemarchus, and Thrasymachus, “justice is the advantage of the stronger” (338c), and the craft analogy, the doctor who serves the patient (341c–342e). *Republic* II to 369b: Glaucon’s challenge, the Ring of Gyges (359c–360d), Adeimantus.",
        look: "A bust of Plato, a Roman copy of the portrait attributed to Silanion, Capitoline Museums, Rome (MC 1377).",
        questions: [
          "For physicians: Socrates argues that the doctor, as doctor, seeks the patient’s good and not his own fee (341c–342e). Is that true of medicine today?",
          "Would you be just with the Ring of Gyges?",
          "Compare Thrasymachus with the Athenians at Melos, in Module 3.",
        ],
      },
      {
        title: "The Soul and the City",
        read: "*Republic* IV, 427d–445e: the four virtues, the tripartite soul (reason, spirit, appetite), Leontius and the corpses (439e–440a), justice as the health of the soul (444c–e). *Republic* V, 473c–480a: philosopher-kings, the third wave (473c–d).",
        look: "Return to the kleroterion. Lottery democracy, set against rule by philosopher-kings.",
        questions: [
          "Justice as the health of the soul (444c–e). How good is the medical analogy?",
          "Leontius: when have your reason and your appetite fought?",
          "Should experts rule?",
        ],
      },
      {
        title: "The Cave",
        read: "*Republic* VI, 507b–511e, the Sun and the Divided Line. *Republic* VII, 514a–521b, the Allegory of the Cave, and 521c–531c, the curriculum of arithmetic, geometry, astronomy, and harmonics, which this course itself echoes.",
        look: "Jan Saenredam after Cornelis van Haarlem, *Plato’s Cave*, an engraving of 1604. Impressions are in the National Gallery of Art, Washington, and the Rijksmuseum.",
        questions: [
          "Who are the prisoners today, and what are the shadows?",
          "Why must the philosopher go back down into the cave?",
          "Plato’s curriculum in Book VII, set next to ours. What is mathematics for, in an education?",
        ],
      },
    ],
    mastery: [
      "A reflection journal: a short written entry on each of *Euthyphro*, *Apology*, *Crito*, the death scene of the *Phaedo*, the *Meno*, and *Republic* I, II, IV, V, VI, and VII. Each entry takes one argument or image (the *elenchus*, *aretē*, *psychē*, *anamnēsis*, the Forms, *dikaiosynē*, the Ring, the Line, or the Cave) and examines one belief, habit, or decision of your own by it.",
      "Latin: 25 items from chapters 25–30, plus five review items. Mark them yourself against your textbook’s key.",
      "Greek: 20 items from *Athenaze* chapters 1–8, and a word-by-word translation of *Apology* 38a. Mark them yourself against your textbook’s key.",
      "An unseen Latin double translation through chapter 30, plus one Greek sentence in both directions.",
      "Geometry: photographed constructions of Euclid I.1 and a proof of I.47, or of the doubling in the *Meno*, with a written justification of each step.",
      "Recitation: *Apology* 38a in Greek and in English, and the opening of the Cave (514a) in English.",
      "A commonplace essay of 600 words: “The doctor as doctor: Socrates’ craft argument (*Republic* 341c–342e) and the ethics of modern medicine.”",
      "A sketchbook with three drawings: the kleroterion, the Cave after Saenredam, and your own Divided Line.",
    ],
  },
  {
    slug: "virtue-and-polity",
    code: "I.6",
    title: "Virtue and Polity",
    indexLine:
      "Aristotle, *Nicomachean Ethics*, *Politics*, *Parts of Animals* I.5 / the Parthenon",
    card: "Happiness, habit, practical wisdom, and the proportions of the Parthenon. The phase closes here.",
    length: "Six weeks, plus a capstone week",
    theme:
      "Happiness (*eudaimonia*) as an activity of the soul in accordance with virtue. Virtue as a mean formed by habit. Practical wisdom (*phronēsis*). The human being as a political animal. The best practicable constitution. Aristotle the biologist. Proportion in the Parthenon.",
    facts: [
      {
        label: "Nicomachean Ethics",
        body: "Terence Irwin (Hackett); Robert C. Bartlett and Susan D. Collins (University of Chicago Press, 2011); or Roger Crisp (Cambridge). Bekker numbers are standard across editions.",
      },
      {
        label: "Politics",
        body: "C. D. C. Reeve (Hackett), or Carnes Lord (University of Chicago Press, 2nd ed.).",
      },
      {
        label: "Parts of Animals",
        body: "Book I, chapter 5, in *The Complete Works of Aristotle*, edited by Jonathan Barnes (Princeton, Revised Oxford Translation).",
      },
      {
        label: "The Parthenon",
        body: "J. J. Pollitt, *Art and Experience in Classical Greece* (Cambridge University Press). The draft assigns the chapters on the High Classical period and the Parthenon; the exact chapters are still to be set.",
      },
    ],
    latin:
      "Wheelock chapters 31–36, or *Lingua Latina*, *Familia Romana*, caps. XXXI–XXXV, which completes *Familia Romana*. Wheelock has 40 chapters, so chapters 37–40 are planned to spill into the first four weeks of Phase II.",
    greek: "*Athenaze* Book I, chapters 9–11.",
    weeks: [
      {
        title: "The Good Life",
        read: "*Nicomachean Ethics* I. The highest good (1094a1–1095a13); the three lives (1095b14–1096a10); the function argument (1097b22–1098a20); happiness and fortune; Priam (1100a5–9, 1101a6–8).",
        look: "Raphael’s *School of Athens* (1509–11), Stanza della Segnatura, Vatican. Plato points up. Aristotle holds the *Ethics* and gestures level with the earth.",
        questions: [
          "What is the *ergon*, the function, of a physician, and of a human being?",
          "Can bad luck, Priam’s luck, destroy a happy life?",
          "Compare Solon speaking to Croesus in Module 3: call no man happy until he is dead.",
        ],
      },
      {
        title: "Virtue as a Mean, Formed by Habit",
        read: "*Nicomachean Ethics* II: virtue comes from habituation, “we become just by doing just acts” (1103a14–b25); the doctrine of the mean (1106a26–1107a27); the table of virtues and vices (1107a28–1108b10). *Ethics* III, 1115a6–1117b22, on courage.",
        look: "The Lyceum archaeological site in Athens, where Aristotle taught.",
        questions: [
          "For physicians: Aristotle often uses medicine as his model, as with diet and exercise in the mean (1104a11–27). Is clinical judgement a virtue in his sense?",
          "Which virtue in the table is hardest for you?",
          "Courage in a hospital. What is the mean between cowardice and rashness?",
        ],
      },
      {
        title: "Practical Wisdom and the Highest Life",
        read: "*Nicomachean Ethics* VI: the intellectual virtues, and *phronēsis* (1140a24–b30; 1141b8–1142a30, particulars and experience). *Ethics* X, 1177a12–1179a32, contemplation as the happiest life, and 1179a33–1181b23, where ethics needs laws and turns toward the *Politics*.",
        look: "Return to *The School of Athens*. The two gestures are two answers to the question of which life is best.",
        questions: [
          "Why can the young not have *phronēsis* (1142a11–20)? What does that say about a medical residency?",
          "Contemplation against action. Does Book X contradict the rest of the *Ethics*?",
          "Why does ethics end in law?",
        ],
      },
      {
        title: "The Political Animal and the Constitutions",
        read: "*Politics* I.1–2 (1252a1–1253a39): “man is by nature a political animal” (1253a2–3), speech and justice. *Politics* III.6–9 (1278b6–1281a10): the six constitutions, correct and deviant. III.11 (1281a40–b15): the wisdom of the many.",
        look: "The Parthenon (447–432 BC) as a civic statement, and the Panathenaic frieze, in the British Museum and the Acropolis Museum.",
        questions: [
          "Is a human being outside the city “a beast or a god” (1253a29)?",
          "Where does the constitution of the United States sit in Aristotle’s table?",
          "The wisdom of the many. Does a committee decide better than an expert?",
        ],
      },
      {
        title: "The Middle Constitution, and Aristotle the Biologist",
        read: "*Politics* IV.11 (1295a25–1296b2), the middle class and the best practicable constitution, and IV.8–9, polity as a mixture. *Parts of Animals* I.5 (644b22–645a36): there is something wonderful in all natural things, and the story of Heraclitus at the oven (645a17–23).",
        look: "Stuart and Revett, *The Antiquities of Athens*: engraved views and measured drawings of the Parthenon, including the eastern side drawn in 1751. Those drawings shaped Greek Revival architecture, and they bear on the Founders Edition.",
        questions: [
          "For physicians: Aristotle defends the study of the lowlier animals and their tissues, disgust included (645a26–36). Is this medicine’s founding apology?",
          "Why should a large middle class make for stability?",
          "Is the mixed constitution, which Phase II will meet in Polybius, already here?",
        ],
      },
      {
        title: "Proportion and the Parthenon",
        read: "Pollitt, *Art and Experience in Classical Greece*, on the High Classical period and the Parthenon. The exact chapters are still to be set. Also Vitruvius, *De architectura* III.1, on symmetry and the human body, a preview of Phase II.",
        look: "The Parthenon’s refinements: entasis, the upward curvature of the stylobate, the inward tilt of the columns, the corner contraction. Measure and sketch the façade from a photograph.",
        questions: [
          "Aristotle’s mean, set next to the Parthenon’s proportions. Is beauty a kind of virtue?",
          "Why would builders deliberately correct what the eye sees?",
          "What is the single most important idea of the Greek phase for your own life?",
        ],
      },
    ],
    mastery: [
      "A reflection journal: a short written entry on each of *Ethics* I, II, VI, and X, *Politics* I, III, and IV, and *Parts of Animals* I.5. Each entry takes one of the module’s ideas (*eudaimonia*, *ergon*, *aretē*, *mesotēs*, *hexis*, *phronēsis*, *theōria*, *polis*, or *politeia*) and applies it to a habit you are building, a judgement you must make, or the way your household is run.",
      "Latin: 25 items from Wheelock chapters 31–36, or from *Familia Romana* XXXI–XXXV, plus five review items. Mark them yourself against your textbook’s key.",
      "Greek: 20 items from *Athenaze* chapters 1–11, and a translation of *Ethics* 1098a16 or *Politics* 1253a2–3. Mark them yourself against your textbook’s key.",
      "An unseen Latin passage, double-translated, and one Greek sentence in both directions.",
      "A commonplace essay of 600 words: “Phronēsis at the bedside: Aristotle’s practical wisdom and clinical judgement.”",
      "A sketchbook: the Doric order, labelled; the Parthenon façade; a vase or sculpture of your choice.",
    ],
    capstone: {
      intro:
        "Week 37, about five or six hours, required to complete Phase I. The aim is to pull the Greek phase together, in the spirit of Milton’s advice in *Of Education* to “retire back… into the rear of what they have been taught.”",
      items: [
        "A translation portfolio: your best Ascham double translations from Modules 1–6, with the phrase notebook (*propria*, *translata*, *synonyma*, *diversa*, *contraria*, *phrases*). Include at least one Greek sentence.",
        "A capstone oration or essay of 1,200–1,500 words, recorded if you choose the oration: “The best life and the best city: from Homer to Aristotle.” Trace one idea, honour, justice, wisdom, or the good life, through at least four authors from the phase. Cite them by book and line, or by Stephanus or Bekker number.",
        "A recorded recitation: *Iliad* 1.1–7 or *Odyssey* 1.1–10 in English, one Greek line of your choice (for example *Apology* 38a or *Antigone* 332), and eight to ten lines of Latin.",
        "A sketchbook review: six sketches from the phase.",
      ],
    },
  },
];

export const romeModules: SoonModule[] = [
  {
    code: "II.1",
    title: "Foundations",
    indexLine: "Livy I; Polybius VI / the Forum",
  },
  {
    code: "II.2",
    title: "Commentaries",
    indexLine: "Caesar, *Gallic War*",
  },
  {
    code: "II.3",
    title: "The Statesman",
    indexLine: "Cicero, *De officiis*, *De senectute*",
  },
  {
    code: "II.4",
    title: "Epic of Empire",
    indexLine: "Virgil, *Aeneid* / the Ara Pacis",
  },
  {
    code: "II.5",
    title: "Philosophers of Rome",
    indexLine: "Lucretius; Seneca; Marcus Aurelius",
  },
  {
    code: "II.6",
    title: "The Architect",
    indexLine: "Vitruvius / the Pantheon",
  },
];

export const renaissanceModules: SoonModule[] = [
  {
    code: "III.1",
    title: "Rebirth",
    indexLine: "Petrarch; Pico / Brunelleschi’s dome",
  },
  {
    code: "III.2",
    title: "Painting and Perspective",
    indexLine: "Alberti; Vasari / the Uffizi",
  },
  {
    code: "III.3",
    title: "Courtier and Prince",
    indexLine: "Castiglione; Machiavelli / Urbino",
  },
  {
    code: "III.4",
    title: "Venice and the Villa",
    indexLine: "Palladio / Vicenza, Villa Rotonda",
  },
  {
    code: "III.5",
    title: "The Gentleman’s Education",
    indexLine: "Ascham; Milton; Montaigne",
  },
  {
    code: "III.6",
    title: "Capstone",
    indexLine: "An oration or essay, and a translation portfolio",
  },
];

export function moduleHref(slug: string): string {
  return `/curriculum/${slug}`;
}
