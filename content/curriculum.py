"""
Sophandros: the curriculum, in one place.

Every page on the site is built from this file. To change a chapter title,
a reading or the order of the course, change it here and rebuild.

Text may contain simple HTML: <em> for titles of works, <strong> for emphasis.
"""

SITE = {
    "name": "Sophandros",
    "tagline": "A Classical Education for the Modern Professional",
    "promise": "A modern revival of the classical education",
    "aim": "Practical wisdom for the complete professional",
    "url": "https://www.sophandros.com",
    "email": "hello@sophandros.com",
    "education_email": "education@sophandros.com",  # families, instructors, programs
    "description": (
        "The training that shaped leaders for two thousand years, rebuilt for the modern professional "
        "to build practical wisdom: "
        "26 chapters from the first cities to the American founding, following one man "
        "as his circle widens from himself to a republic."
    ),
}

# The thesis, stated once and reused on the home and curriculum pages.
THESIS = (
    "As civilization grew, the circle a man had to govern widened: from himself to his "
    "household, his city, a republic, an empire, the wider world and finally a new nation. "
    "Sophandros follows that widening, chapter by chapter, and then brings everything back "
    "to the reader's own work."
)

# --------------------------------------------------------------------------
# Parts. Each part is one ring of the widening circle.
# --------------------------------------------------------------------------

PARTS = [
    {
        "id": "prologue",
        "label": "Prologue",
        "title": "The stage: the first cities",
        "ring": "Before the circles open",
        "weeks": "2 weeks",
        "summary": "Farming, writing and the first laws, then the first Greeks and the collapse of their palaces.",
        "intro": (
            "Homer sang in the eighth century BC about a world already 500 years gone, and that "
            "world stood on thousands of years of earlier civilization. The prologue sets the stage "
            "so the reader meets Achilles knowing what came before him."
        ),
        "failed": (
            "The god-kings of the Near East and the palace states of the Aegean held power, knowledge "
            "and writing in a few hands. When the palaces fell, writing in Greece was lost for about "
            "400 years."
        ),
        "carried": "Cities, law in written form, and the stories Homer will turn into the first layer of the man.",
    },
    {
        "id": "greece",
        "label": "Part I",
        "title": "Greece: from the self to the city",
        "ring": "The self, the household, the city",
        "weeks": "8 weeks",
        "summary": "Honor, the household, the citizen-soldier, the court, Socrates, proof and practical wisdom.",
        "intro": (
            "Greece lays the six layers of the complete man and teaches most of the tools: honor, "
            "mind and home, the citizen who fights, conscience and law, the examined mind, and "
            "practical wisdom."
        ),
        "failed": "The Greek cities never united, and fell to Macedon at Chaeronea in 338 BC.",
        "carried": "The figure is complete in himself, but he has no durable state to serve. Rome supplies one.",
    },
    {
        "id": "rome",
        "label": "Part II",
        "title": "Rome: the republic and the empire",
        "ring": "The family, the nation, the empire",
        "weeks": "6 weeks",
        "summary": "Duty, the mixed constitution, eloquence, character, self-command and government at scale.",
        "intro": (
            "Rome adds duty, law and a state that lasts. For 1,800 years it was the model every "
            "educated European and American measured public life against."
        ),
        "failed": "The Republic fell to civil war and one-man rule, and the empire later fell in the West.",
        "carried": (
            "Law, Latin, and a warning the Founders took seriously: virtue alone cannot hold a "
            "republic without institutions."
        ),
    },
    {
        "id": "world",
        "label": "Part III",
        "title": "The wider world: toward 1776",
        "ring": "Christendom, Europe, the cosmos",
        "weeks": "4 weeks",
        "summary": "Natural law, the Renaissance, the new science, and rights, consent and balanced power.",
        "intro": (
            "Four chapters carry the inheritance across 1,700 years, keeping only what the Founders "
            "actually used. The layer added is natural rights: every person stands under a law higher "
            "than any ruler, and government rests on consent."
        ),
        "failed": "Liberty was claimed for some and denied to many, and no large republic had ever lasted.",
        "carried": "Rights, consent, separated powers, and an open question the Founders had to answer themselves.",
    },
    {
        "id": "founding",
        "label": "Part IV",
        "title": "A new republic: the founding",
        "ring": "A nation designed",
        "weeks": "3 weeks",
        "summary": "How the Founders were trained, how they argued, and how they designed and handed over power.",
        "intro": (
            "The American Founders are the clearest case of this education put to use: men trained in "
            "these exact texts who then had to design a government from scratch."
        ),
        "failed": "The founding left slavery in place, and the union broke into civil war within a lifetime.",
        "carried": "A written constitution of separated powers, and the lesson that it needs citizens educated to keep it.",
    },
    {
        "id": "today",
        "label": "Part V",
        "title": "Your own circle: the tools at work today",
        "ring": "Back to the center",
        "weeks": "3 weeks",
        "summary": "Writing, judgment and leadership in your own work, and the capstone.",
        "intro": (
            "The course ends where the old education always aimed: at the reader's own work. Each "
            "chapter revisits earlier texts and turns them on a real professional task."
        ),
        "failed": "",
        "carried": "",
    },
]

# --------------------------------------------------------------------------
# Chapters. "core" is the week number in the 12-week core course, or None if
# the chapter is in the extended edition only. Every chapter is in the book.
# "status": "written" chapters have a full page in content/chapters/.
# --------------------------------------------------------------------------

CHAPTERS = [
    # Prologue
    {
        "num": "P1", "slug": "p1-before-the-greeks", "part": "prologue",
        "circle": "Before the Greeks", "theme": "farming, writing and the first laws",
        "era": "about 9500–1500 BC",
        "readings": [
            "Göbekli Tepe and Çatalhöyük: the first monuments and towns",
            "<em>The Epic of Gilgamesh</em>, tablets 1, 10 and 11 (friendship, death, the flood)",
            "The prologue and selected laws of Hammurabi (about 1754 BC)",
            "The Egyptian <em>Instruction of Ptahhotep</em>: advice to an official",
        ],
        "tool": "Arithmetic and astronomy: Babylonian base 60, which still gives us 60 minutes and 360 degrees. Law written down for all to see.",
        "exercise": ("Fable", "Retell an episode as a short story with a moral for your team."),
        "graduate": "Ashurbanipal's library at Nineveh preserved <em>Gilgamesh</em> for later ages.",
        "lesson": "Civilization is an achievement, not a given. Law first appears as a king's decree carved in stone, not an argument among citizens.",
        "core": 1, "status": "planned",
    },
    {
        "num": "P2", "slug": "p2-the-first-greeks", "part": "prologue",
        "circle": "The first Greeks", "theme": "palaces, collapse and memory",
        "era": "about 3000–750 BC",
        "readings": [
            "Minoan Crete: Knossos, Linear A and the Thera eruption",
            "The Mycenaeans: Linear B, the Lion Gate and Grave Circle A",
            "The Late Bronze Age collapse around 1200 BC, and the Dark Age",
            "Thucydides 1.2–12: how the Greeks reconstructed their own early past",
            "Hesiod, <em>Works and Days</em> 106–201: the Five Ages",
        ],
        "tool": "History: telling evidence from legend, and archaeology from poetry.",
        "exercise": ("Narrative", "Write a 150-word account of an incident at work, clearly and in order."),
        "graduate": "Heinrich Schliemann read Homer closely enough to go looking for Troy and Mycenae.",
        "lesson": "Rich, connected states can fall within a generation. What survives a collapse is memory, carried in song until writing returns.",
        "core": 1, "status": "planned",
    },
    # Part I, Greece
    {
        "num": "1", "slug": "01-the-self", "part": "greece",
        "circle": "The self", "theme": "honor",
        "era": "Homer's <em>Iliad</em>",
        "readings": ["Homer, <em>Iliad</em> 1, 9, 22 and 24 (selections)"],
        "tool": "Poetry, and the first Greek words: timē and kleos.",
        "exercise": ("Chreia", "Explain why a leader's single action mattered."),
        "graduate": "Alexander the Great kept the <em>Iliad</em> with him on campaign.",
        "lesson": "Honor is the foundation. It gives a man a reason to fight and a name worth keeping, but by itself it cannot settle a quarrel or know when to stop.",
        "core": 2, "status": "written",
    },
    {
        "num": "2", "slug": "02-the-household", "part": "greece",
        "circle": "The household", "theme": "mind and home",
        "era": "Homer's <em>Odyssey</em>; Hesiod",
        "readings": [
            "Homer, <em>Odyssey</em> 9, 19 and 21–23 (selections)",
            "Hesiod, <em>Works and Days</em> (selections)",
        ],
        "tool": "Grammar: how a sentence is built, in English and in Latin.",
        "exercise": ("Maxim", "Argue for a rule you live by at work."),
        "graduate": "Cato the Elder ran his estate by the farmer's ethic and wrote it down in <em>On Agriculture</em>.",
        "lesson": "Cunning, self-command, hospitality and honest work make a man able to keep a house. A good household still cannot protect itself from bad public justice.",
        "core": 2, "status": "planned",
    },
    {
        "num": "3", "slug": "03-the-city-at-war", "part": "greece",
        "circle": "The city at war", "theme": "the citizen-soldier",
        "era": "The Persian and Peloponnesian Wars",
        "readings": [
            "Herodotus 1.29–33 (Solon and Croesus) and Book 7 (Thermopylae)",
            "Thucydides 2.35–46 (the Funeral Oration), 3.82 (civil strife), 5.84–116 (the Melian Dialogue)",
        ],
        "tool": "History: reading for causes and examples.",
        "exercise": ("Refutation", "Answer a proposal you disagree with."),
        "graduate": "Thomas Hobbes translated Thucydides; Madison used the Greek leagues in <em>Federalist</em> 18.",
        "lesson": "Courage becomes civic when it is shared, but a free city can be carried off by ambition and fear.",
        "core": 3, "status": "planned",
    },
    {
        "num": "4", "slug": "04-the-citys-law", "part": "greece",
        "circle": "The city's law", "theme": "conscience and the court",
        "era": "Athenian tragedy",
        "readings": ["Aeschylus, <em>Eumenides</em>", "Sophocles, <em>Antigone</em>"],
        "tool": "Moral reasoning: law against conscience.",
        "exercise": ("Confirmation", "Make the case for a decision you support."),
        "graduate": "Martin Luther King Jr.'s \"Letter from Birmingham Jail\" on just and unjust laws.",
        "lesson": "A court replaces the feud, and conscience can stand against a ruler's decree. Showing the conflict on stage does not yet give a reasoned standard of justice.",
        "core": None, "status": "planned",
    },
    {
        "num": "5", "slug": "05-the-city-questioned", "part": "greece",
        "circle": "The city questioned", "theme": "Socrates",
        "era": "Athens after defeat, 399 BC",
        "readings": ["Plato, <em>Apology</em> and <em>Crito</em>"],
        "tool": "Logic: defining a term and testing it by question.",
        "exercise": ("Commonplace", "Give a short talk against a common failing in your field."),
        "graduate": "Cicero said Socrates called philosophy down from the heavens into the cities.",
        "lesson": "Thinking begins by admitting what you do not know, and a good citizen keeps faith with the laws even when they wrong him.",
        "core": 4, "status": "planned",
    },
    {
        "num": "6", "slug": "06-the-ideal-city", "part": "greece",
        "circle": "The ideal city", "theme": "proof, and how constitutions decay",
        "era": "Plato and Euclid",
        "readings": [
            "Plato, <em>Meno</em> 82–86 (the geometry lesson)",
            "Plato, <em>Republic</em> 8 (how constitutions decay)",
            "Euclid, <em>Elements</em> I, propositions 1 and 47",
        ],
        "tool": "Geometry and proof; Pythagoras' ratios of harmony.",
        "exercise": ("Encomium", "Write a recommendation letter or a tribute, grounded in specific virtues."),
        "graduate": "Lincoln worked through Euclid to learn what it means to demonstrate.",
        "lesson": "Knowledge must be proved, not assumed; and every constitution carries the seed of its own decay.",
        "core": 4, "status": "planned",
    },
    {
        "num": "7", "slug": "07-the-citizens-judgment", "part": "greece",
        "circle": "The citizen's judgment", "theme": "practical wisdom",
        "era": "Aristotle's <em>Ethics</em>",
        "readings": [
            "Aristotle, <em>Nicomachean Ethics</em> 2 (virtue as a mean) and 6 (practical wisdom)",
            "Aristotle, <em>Prior Analytics</em> 1.4 (the first syllogism)",
        ],
        "tool": "Formal logic: the syllogism.",
        "exercise": ("Invective", "Write a frank critique of a failed project, aimed at the conduct, not the person."),
        "graduate": "Thomas Aquinas built his ethics on Aristotle's.",
        "lesson": "Character is built by practice, and practical wisdom is the judgment that applies every other virtue to the case in front of you.",
        "core": 5, "status": "planned",
    },
    {
        "num": "8", "slug": "08-the-whole-city", "part": "greece",
        "circle": "The whole city", "theme": "the balanced constitution",
        "era": "Aristotle's <em>Politics</em>; the Parthenon",
        "readings": [
            "Aristotle, <em>Politics</em> 1.2 (the political animal), 3.7 (the forms of government), 4.11 (the middle class)",
            "Aristotle, <em>Rhetoric</em> 1.2 (character, reason and feeling)",
            "The Parthenon and the three orders",
        ],
        "tool": "Rhetoric; architecture.",
        "exercise": ("Comparison", "Compare two options, people or strategies side by side."),
        "graduate": "Jefferson named Aristotle among the books behind the Declaration of Independence.",
        "lesson": "Man is a political animal. The best practical constitution mixes rule by the few and the many and rests on a broad middle.",
        "core": 5, "status": "planned",
    },
    # Part II, Rome
    {
        "num": "9", "slug": "09-the-family-and-the-nation", "part": "rome",
        "circle": "The family and the nation", "theme": "duty",
        "era": "Virgil's <em>Aeneid</em>",
        "readings": [
            "Virgil, <em>Aeneid</em> 1, 2 (Aeneas carries his father), 4 (Dido) and 6 (the underworld), selections",
            "Livy, <em>History of Rome</em>, Preface",
        ],
        "tool": "Poetry; Latin: a line of Virgil read aloud.",
        "exercise": ("Characterization", "Write as your client, patient or customer would see it."),
        "graduate": "Charles Thomson drew two of the Great Seal's mottos from Virgil (1782).",
        "lesson": "Pietas puts duty to family, country and the gods above personal glory, the opposite of Achilles.",
        "core": None, "status": "planned",
    },
    {
        "num": "10", "slug": "10-the-republic", "part": "rome",
        "circle": "The republic", "theme": "law and the mixed constitution",
        "era": "The Roman Republic, 509–133 BC",
        "readings": [
            "Livy 1.57–60: Lucretia and Brutus, the end of the kings",
            "Polybius, <em>Histories</em> 6 (selections)",
        ],
        "tool": "Political philosophy; history.",
        "exercise": ("Description", "Describe a process or institution so a stranger understands it."),
        "graduate": "John Adams defended balanced government from Polybius.",
        "lesson": "Rome lasted by balancing consuls, Senate and people, each checking the others.",
        "core": 6, "status": "planned",
    },
    {
        "num": "11", "slug": "11-the-forum", "part": "rome",
        "circle": "The forum", "theme": "eloquence in public service",
        "era": "Cicero and the late Republic",
        "readings": [
            "Cicero, <em>Against Catiline</em> 1",
            "Cicero, <em>For Archias</em>: why letters form a public man",
            "Cicero, <em>On Duties</em> 1 (selections)",
        ],
        "tool": "Rhetoric: write and deliver a three-minute speech.",
        "exercise": ("Thesis", "Should a professional ever put duty above the client's wishes? Argue it both ways."),
        "graduate": "Petrarch found the lost <em>For Archias</em> at Liège in 1333 and built humanism on it.",
        "lesson": "The educated man owes his learning to public service, and persuasion is how a free people is led.",
        "core": 7, "status": "planned",
    },
    {
        "num": "12", "slug": "12-the-statesman", "part": "rome",
        "circle": "The statesman", "theme": "character in public life",
        "era": "Plutarch's <em>Lives</em>",
        "readings": [
            "Plutarch, <em>Cato the Younger</em> and <em>Caesar</em> (selections)",
            "Livy 3.26–29: Cincinnatus",
        ],
        "tool": "History as character study.",
        "exercise": ("Proposal of a law", "Propose a policy for your organization and answer its objections."),
        "graduate": "Shakespeare wrote <em>Julius Caesar</em> from North's translation of Plutarch.",
        "lesson": "Institutions are only as good as the characters who hold office, and the greatest act of power can be giving it back.",
        "core": 8, "status": "planned",
    },
    {
        "num": "13", "slug": "13-the-ruler-under-empire", "part": "rome",
        "circle": "The ruler under empire", "theme": "self-command",
        "era": "The Stoics",
        "readings": [
            "Seneca, <em>Letters</em> 1 and 7",
            "Epictetus, <em>Handbook</em> 1–5",
            "Marcus Aurelius, <em>Meditations</em> 2.1 and Book 4 (selections)",
        ],
        "tool": "Moral philosophy: a daily self-examination.",
        "exercise": ("Commonplace, again", "A short talk on self-command, using the Stoics."),
        "graduate": "Montaigne's essays draw on Seneca throughout; Franklin kept a daily record of his virtues.",
        "lesson": "When you cannot govern the state, you can still govern yourself. Personal virtue, though, cannot choose good rulers.",
        "core": 8, "status": "planned",
    },
    {
        "num": "14", "slug": "14-the-empire", "part": "rome",
        "circle": "The empire", "theme": "building at scale, and the fall",
        "era": "The Pax Romana to AD 476",
        "readings": [
            "Vitruvius, <em>On Architecture</em> 1.1–3 and 3.1 (proportion and the human body)",
            "Justinian, <em>Institutes</em> 1.1–2",
            "Gibbon, \"General Observations on the Fall of the Roman Empire in the West\"",
        ],
        "tool": "Architecture and proportion; law.",
        "exercise": ("Description, again", "Describe a building or a place so the reader can see it."),
        "graduate": "Leonardo's Vitruvian Man; Jefferson's Virginia State Capitol, modeled on a Roman temple.",
        "lesson": "Roads, law and citizenship held a world together for centuries. Civil war, money and overstretch brought the West down.",
        "core": None, "status": "planned",
    },
    # Part III, the wider world
    {
        "num": "15", "slug": "15-christendom", "part": "world",
        "circle": "Christendom", "theme": "law above kings",
        "era": "Cicero to Magna Carta",
        "readings": [
            "Cicero, <em>On the Commonwealth</em> 3.33: true law is right reason",
            "Aquinas, <em>Summa Theologiae</em> I–II, question 91 (selections)",
            "<em>Magna Carta</em> (1215), clauses 39–40",
        ],
        "tool": "Law: tracing one idea through three sources.",
        "exercise": ("Thesis, again", "Is there a law above the rules of your organization? Argue it both ways."),
        "graduate": "Edward Coke and the Petition of Right (1628) invoked Magna Carta against the king.",
        "lesson": "Every person, the king included, stands under a law he did not make.",
        "core": 9, "status": "planned",
    },
    {
        "num": "16", "slug": "16-the-italian-cities", "part": "world",
        "circle": "The Italian cities", "theme": "the ancients reborn",
        "era": "The Renaissance",
        "readings": [
            "Machiavelli, <em>Discourses on Livy</em> 1.2 (Polybius' cycle)",
            "Palladio, <em>The Four Books of Architecture</em> 1 (1570, selections)",
        ],
        "tool": "Architecture, proportion and music; one-point perspective.",
        "exercise": ("Comparison, again", "Compare the old way and the new way of doing something in your field."),
        "graduate": "Jefferson owned and studied Palladio's book, and used it at the University of Virginia.",
        "lesson": "Recovering the ancients was not imitation for its own sake; it gave a new age models for cities, buildings and power.",
        "core": None, "status": "planned",
    },
    {
        "num": "17", "slug": "17-the-cosmos", "part": "world",
        "circle": "The cosmos", "theme": "the laws of nature",
        "era": "The new science",
        "readings": [
            "Copernicus, <em>On the Revolutions</em>, preface (1543)",
            "Galileo, <em>The Starry Messenger</em> (1610, selections)",
            "Newton, <em>Principia</em>, \"Rules of Reasoning in Philosophy\" (1713)",
        ],
        "tool": "Astronomy and the scientific method.",
        "exercise": ("Refutation, again", "Test a received authority in your field against the evidence."),
        "graduate": "Benjamin Franklin's electrical experiments; Benjamin Banneker's almanac.",
        "lesson": "Reverence for the ancients must yield to evidence; nature has laws that observation and mathematics can find.",
        "core": None, "status": "planned",
    },
    {
        "num": "18", "slug": "18-the-nation-state", "part": "world",
        "circle": "The nation-state", "theme": "rights, consent and balanced power",
        "era": "Locke to Montesquieu",
        "readings": [
            "Locke, <em>Second Treatise of Government</em> 2, 8 and 19 (selections, 1689)",
            "Montesquieu, <em>The Spirit of the Laws</em> 11.6 (1748)",
            "Hume, \"Idea of a Perfect Commonwealth\"",
        ],
        "tool": "Political philosophy: compare three designs for a state.",
        "exercise": ("Proposal of a law, again", "Draft a rule for your workplace and the checks that keep it fair."),
        "graduate": "Madison quoted Montesquieu in <em>Federalist</em> 47.",
        "lesson": "Government rests on consent, and liberty is safest when power is divided against itself.",
        "core": 9, "status": "planned",
    },
    # Part IV, the founding
    {
        "num": "19", "slug": "19-the-founders-at-school", "part": "founding",
        "circle": "The Founders at school", "theme": "the Declaration as an argument",
        "era": "1776",
        "readings": [
            "Jefferson to Peter Carr, 19 August 1785: a course of reading",
            "Franklin, <em>Autobiography</em>: the thirteen virtues",
            "The Declaration of Independence, beside Jefferson's draft",
        ],
        "tool": "Logic, natural law and rhetoric, all at once.",
        "exercise": ("Confirmation, again", "Lay out the Declaration's argument as premises, evidence and conclusion."),
        "graduate": "The Founders themselves.",
        "lesson": "The Declaration is a syllogism addressed to a candid world: stated premises, submitted facts, a conclusion.",
        "core": 10, "status": "planned",
    },
    {
        "num": "20", "slug": "20-learning-from-failure", "part": "founding",
        "circle": "Learning from failure", "theme": "designing the Constitution",
        "era": "1787",
        "readings": [
            "Madison, \"Vices of the Political System of the United States\" (1787)",
            "<em>Federalist</em> 10 (faction), 18 (the Greek leagues) and 51 (checks)",
            "Brutus, Essay 1 (1787)",
        ],
        "tool": "History, political philosophy, and rhetoric in public debate.",
        "exercise": ("Comparison, again", "Compare the Articles of Confederation and the Constitution."),
        "graduate": "The Founders themselves.",
        "lesson": "Madison studied every failed confederacy he could find before he proposed a new one.",
        "core": 10, "status": "planned",
    },
    {
        "num": "21", "slug": "21-power-given-up", "part": "founding",
        "circle": "Power given up", "theme": "Washington",
        "era": "1783–1796",
        "readings": [
            "Washington, the Newburgh Address (1783)",
            "Washington, resignation of his commission (1783)",
            "Washington, Farewell Address (1796, selections)",
        ],
        "tool": "Moral philosophy: self-command in office.",
        "exercise": ("Characterization, again", "Write Washington's case to his officers in your own words."),
        "graduate": "The Founders themselves.",
        "lesson": "Like Cincinnatus, Washington twice handed power back, and that example did as much as any law to keep the republic.",
        "core": 11, "status": "planned",
    },
    # Part V, today
    {
        "num": "22", "slug": "22-your-writing", "part": "today",
        "circle": "Your writing", "theme": "persuasion",
        "era": "Today",
        "readings": [
            "Aristotle, <em>Rhetoric</em> 1.2, revisited",
            "<em>Federalist</em> 1 as a model public argument",
            "Lincoln's Gettysburg Address beside Pericles' Funeral Oration",
        ],
        "tool": "Rhetoric, applied.",
        "exercise": ("The memo", "Write a one-page memo or proposal on a real issue at work, using character, reason and feeling."),
        "graduate": "You.",
        "lesson": "Every tool of persuasion in the course fits on one page addressed to the people who must agree.",
        "core": 12, "status": "planned",
    },
    {
        "num": "23", "slug": "23-your-decisions", "part": "today",
        "circle": "Your decisions", "theme": "judging the hard case",
        "era": "Today",
        "readings": [
            "Aristotle, <em>Nicomachean Ethics</em> 6, revisited",
            "Cicero, <em>On Duties</em> 3: when the honorable and the useful seem to conflict",
        ],
        "tool": "Practical wisdom, applied.",
        "exercise": ("The decision", "Decide a real dilemma from your work, arguing it both ways before you choose."),
        "graduate": "You.",
        "lesson": "Good judgment is a habit: name the case, argue both sides, then choose and own it.",
        "core": 11, "status": "planned",
    },
    {
        "num": "24", "slug": "24-your-leadership", "part": "today",
        "circle": "Your leadership", "theme": "self-command, and the capstone",
        "era": "Today",
        "readings": [
            "Marcus Aurelius, <em>Meditations</em> 1: what he learned from each teacher",
            "Seneca, <em>On the Shortness of Life</em> (selections)",
            "Washington, revisited",
        ],
        "tool": "Every tool, together.",
        "exercise": ("The talk", "Give a five-minute talk to your team or a peer, then complete the capstone."),
        "graduate": "You.",
        "lesson": "The complete man governs himself first, and only then the circles around him.",
        "core": 12, "status": "planned",
    },
]

# The capstone, completed in chapter 24.
CAPSTONE = [
    ("A personal constitution", "About 1,000 words, modeled on Franklin's thirteen virtues: one paragraph per layer of the figure, each grounded in a text from the course."),
    ("A real problem, solved with the tools", "Take a current problem from your work and write it up in three parts: its history, the argument, and the recommendation."),
    ("Your own <em>Meditations</em>, Book 1", "A page on what you learned from each teacher in the course, in the manner of Marcus Aurelius."),
]

# --------------------------------------------------------------------------
# The tools of a classical education.
# --------------------------------------------------------------------------

TOOLS = [
    {
        "group": "The trivium",
        "note": "The arts of language",
        "items": [
            ("Grammar", "The Latin and Greek still used in law, medicine and business."),
            ("Logic", "Defining terms, testing claims, building a valid argument."),
            ("Rhetoric", "Persuading by character, reason and feeling."),
        ],
    },
    {
        "group": "The quadrivium",
        "note": "The arts of number",
        "items": [
            ("Arithmetic and geometry", "Proof, proportion and measurement."),
            ("Music", "Harmony as ratio, from Pythagoras to Palladio."),
            ("Astronomy", "The order of nature and the method of science."),
        ],
    },
    {
        "group": "The humane studies",
        "note": "The arts of public life",
        "items": [
            ("History", "A store of examples: why states rose and fell."),
            ("Poetry", "Character, memory and a shared culture."),
            ("Moral and political philosophy", "Self-command, judgment, and how constitutions balance power."),
            ("Law and architecture", "Order made public, in statutes and in stone."),
        ],
    },
]

# --------------------------------------------------------------------------
# The progymnasmata: the graded writing exercises of the classical schools.
# --------------------------------------------------------------------------

EXERCISES = [
    ("Fable", "Drawing a lesson from a story", "Retell an episode as a short story with a moral for your team"),
    ("Narrative", "Telling events clearly and in order", "A 150-word account of an incident at work"),
    ("Chreia", "Expanding on a saying or deed", "Explain why a leader's single action mattered"),
    ("Maxim", "Defending a general truth", "Argue for a rule you live by at work"),
    ("Refutation", "Taking an argument apart", "Answer a proposal you disagree with"),
    ("Confirmation", "Building the case for a claim", "Make the case for a decision you support"),
    ("Commonplace", "Amplifying against a vice", "A short talk against a common failing in your field"),
    ("Encomium", "Praise grounded in virtues", "A recommendation letter or a tribute"),
    ("Invective", "Blame grounded in vices", "A frank critique of a failed project, aimed at conduct"),
    ("Comparison", "Weighing two things side by side", "Compare two options, people or strategies"),
    ("Characterization", "Writing in another's voice", "Write as your client, patient or customer would see it"),
    ("Description", "Making the reader see", "Describe a process so a stranger understands it"),
    ("Thesis", "Arguing a general question both ways", "Should a professional ever put duty above a client's wishes?"),
    ("Proposal of a law", "Arguing for a rule for everyone", "Propose a policy for your organization and answer its objections"),
]

# The shape of a week, about three and a half hours.
WEEK = [
    ("Two lessons", "2 × 30 min", "The teacher's essay: the setting, the passage, what it means, and someone who used it."),
    ("The reading", "60–75 min", "The week's selection on the page, in a public-domain translation."),
    ("Latin phrases", "15 min", "Three to five phrases still used in law, medicine, business or daily life."),
    ("The exercise", "20 min", "One of the classical writing drills, applied to your own work."),
    ("Commonplace book", "10 min", "Copy one passage by hand and write two sentences on what it means for you."),
    ("Check yourself", "5 min", "Five questions on the week's reading, with answers to reveal when you are done. Course only."),
]

# Latin and Greek the reader will know by the end.
LATIN = [
    ("Law and government", "habeas corpus, prima facie, bona fide, mens rea, pro bono, amicus curiae, stare decisis, de facto, ex post facto"),
    ("Medicine and science", "in vitro, in vivo, post mortem, per os, a priori, a posteriori, and the Greek roots of anatomy"),
    ("Business and money", "per annum, per capita, pro rata, quid pro quo, caveat emptor, ad hoc, ipso facto, curriculum vitae"),
    ("Everyday writing", "e.g., i.e., etc., et al., cf., N.B., circa, vice versa, A.M. and P.M."),
    ("Mottos of the republic", "E pluribus unum, Annuit coeptis, Novus ordo seclorum, and the Founders' pen names"),
]

# The two editions. The digital book comes with a course; a print edition follows on Amazon.
EDITIONS = [
    # (name, length, price, description, note)
    ("The core course", "12 weeks", "$149",
     "The prologue, the six Greek layers, Rome's republic and its statesmen, natural rights, the founding, and the capstone, with a weekly self-check, a model answer for every writing exercise, a printable PDF of each chapter, and a certificate of completion.",
     "Add the digital book for $30. Move up to the extended edition later for $100."),
    ("The extended edition", "26 weeks + book", "$249",
     "Everything in the core, plus tragedy, Virgil, the Roman empire, the Renaissance and the new science, at a fuller pace, with a self-check and a model answer for every week, and the certificate. Includes the digital book: all 26 chapters with a timeline and a glossary of Greek and Latin.",
     "A printed edition of the book will follow on Amazon."),
]


def chapter_title(ch):
    """'The self: honor'"""
    return f"{ch['circle']}: {ch['theme']}"


def part_of(ch):
    return next(p for p in PARTS if p["id"] == ch["part"])
