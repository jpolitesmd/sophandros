export type SourceLink = {
  label: string;
  href: string;
};

export type ExcerptPair = {
  greek: string;
  english: string;
};

export type Excerpt = {
  greek?: string;
  english?: string;
  pairs?: ExcerptPair[];
  citation: string;
  links: SourceLink[];
};

export const homeExcerpt: Excerpt = {
  greek: "μῆνιν ἄειδε θεὰ Πηληϊάδεω Ἀχιλῆος\nοὐλομένην, ἣ μυρίʼ Ἀχαιοῖς ἄλγεʼ ἔθηκε,",
  english: "Sing, O goddess, the anger of Achilles son of Peleus, that brought countless ills upon the Achæans.",
  citation: "Homer, Iliad 1.1–2. Greek text, Perseus Digital Library. English by Samuel Butler, 1898.",
  links: [
    { label: "Greek", href: "https://scaife.perseus.org/reader/urn:cts:greekLit:tlg0012.tlg001.perseus-grc2:1.1-1.2/" },
    { label: "English", href: "https://en.wikisource.org/wiki/The_Iliad_of_Homer_(Butler)/Book_1" },
  ],
};

export const curriculumExcerpt: Excerpt = {
  greek: "ἔργον δʼ οὐδὲν ὄνειδος, ἀεργίη δέ τʼ ὄνειδος.",
  english: "Work is no disgrace: it is idleness which is a disgrace.",
  citation: "Hesiod, Works and Days 311. Greek text, Perseus Digital Library. English by Hugh G. Evelyn-White, 1914.",
  links: [
    { label: "Greek", href: "https://scaife.perseus.org/reader/urn:cts:greekLit:tlg0020.tlg002.perseus-grc2:311/" },
    { label: "English", href: "https://www.gutenberg.org/ebooks/348" },
  ],
};

export const moduleExcerpts: Record<string, Excerpt[]> = {
  "the-heroic-code": [
    {
      greek: "μῆνιν ἄειδε θεὰ Πηληϊάδεω Ἀχιλῆος\nοὐλομένην, ἣ μυρίʼ Ἀχαιοῖς ἄλγεʼ ἔθηκε,\nπολλὰς δʼ ἰφθίμους ψυχὰς Ἄϊδι προΐαψεν\nἡρώων, αὐτοὺς δὲ ἑλώρια τεῦχε κύνεσσιν\nοἰωνοῖσί τε πᾶσι, Διὸς δʼ ἐτελείετο βουλή,\nἐξ οὗ δὴ τὰ πρῶτα διαστήτην ἐρίσαντε\nἈτρεΐδης τε ἄναξ ἀνδρῶν καὶ δῖος Ἀχιλλεύς.",
      english: "Sing, O goddess, the anger of Achilles son of Peleus, that brought countless ills upon the Achæans. Many a brave soul did it send hurrying down to Hades, and many a hero did it yield a prey to dogs and vultures, for so were the counsels of Jove fulfilled from the day on which the son of Atreus, king of men, and great Achilles, first fell out with one another.",
      citation: "Homer, Iliad 1.1–7. Greek text, Perseus Digital Library. English by Samuel Butler, 1898.",
      links: [
        { label: "Greek", href: "https://scaife.perseus.org/reader/urn:cts:greekLit:tlg0012.tlg001.perseus-grc2:1.1-1.7/" },
        { label: "English", href: "https://en.wikisource.org/wiki/The_Iliad_of_Homer_(Butler)/Book_1" },
      ],
    },
    {
      greek: "ἀλλʼ εἰς οἶκον ἰοῦσα τὰ σʼ αὐτῆς ἔργα κόμιζε\nἱστόν τʼ ἠλακάτην τε, καὶ ἀμφιπόλοισι κέλευε\nἔργον ἐποίχεσθαι· πόλεμος δʼ ἄνδρεσσι μελήσει\nπᾶσι, μάλιστα δʼ ἐμοί, τοὶ Ἰλίῳ ἐγγεγάασιν.",
      english: "Go, then, within the house, and busy yourself with your daily duties, your loom, your distaff, and the ordering of your servants; for war is man's matter, and mine above all others of them that have been born in Ilius.",
      citation: "Homer, Iliad 6.490–493. Greek text, Perseus Digital Library. English by Samuel Butler, 1898.",
      links: [
        { label: "Greek", href: "https://scaife.perseus.org/reader/urn:cts:greekLit:tlg0012.tlg001.perseus-grc2:6.490-6.493/" },
        { label: "English", href: "https://en.wikisource.org/wiki/The_Iliad_of_Homer_(Butler)/Book_6" },
      ],
    },
  ],
  "homecoming": [
    {
      greek: "ἄνδρα μοι ἔννεπε, μοῦσα, πολύτροπον, ὃς μάλα πολλὰ\nπλάγχθη, ἐπεὶ Τροίης ἱερὸν πτολίεθρον ἔπερσεν·\nπολλῶν δʼ ἀνθρώπων ἴδεν ἄστεα καὶ νόον ἔγνω,\nπολλὰ δʼ ὅ γʼ ἐν πόντῳ πάθεν ἄλγεα ὃν κατὰ θυμόν,\nἀρνύμενος ἥν τε ψυχὴν καὶ νόστον ἑταίρων.\nἀλλʼ οὐδʼ ὣς ἑτάρους ἐρρύσατο, ἱέμενός περ·\nαὐτῶν γὰρ σφετέρῃσιν ἀτασθαλίῃσιν ὄλοντο,\nνήπιοι, οἳ κατὰ βοῦς Ὑπερίονος Ἠελίοιο\nἤσθιον· αὐτὰρ ὁ τοῖσιν ἀφείλετο νόστιμον ἦμαρ.",
      english: "Tell me, oh Muse, of that ingenious hero who travelled far and wide after he had sacked the famous town of Troy. Many cities did he visit, and many were the nations with whose manners and customs he was acquainted; moreover he suffered much by sea while trying to save his own life and bring his men safely home; but do what he might he could not save his men, for they perished through their own sheer folly in eating the cattle of the Sun-god Hyperion; so the god prevented them from ever reaching home.",
      citation: "Homer, Odyssey 1.1–9. Greek text, Perseus Digital Library. English by Samuel Butler, 1900.",
      links: [
        { label: "Greek", href: "https://scaife.perseus.org/reader/urn:cts:greekLit:tlg0012.tlg002.perseus-grc2:1.1-1.9/" },
        { label: "English", href: "https://en.wikisource.org/wiki/The_Odyssey_(Butler)/Book_I" },
      ],
    },
    {
      greek: "ἔργον δʼ οὐδὲν ὄνειδος, ἀεργίη δέ τʼ ὄνειδος.",
      english: "Work is no disgrace: it is idleness which is a disgrace.",
      citation: "Hesiod, Works and Days 311. Greek text, Perseus Digital Library. English by Hugh G. Evelyn-White, 1914.",
      links: [
        { label: "Greek", href: "https://scaife.perseus.org/reader/urn:cts:greekLit:tlg0020.tlg002.perseus-grc2:311/" },
        { label: "English", href: "https://www.gutenberg.org/ebooks/348" },
      ],
    },
  ],
  "inquiry-and-war": [
    {
      greek: "Ἡροδότου Ἁλικαρνησσέος ἱστορίης ἀπόδεξις ἥδε, ὡς μήτε τὰ γενόμενα ἐξ ἀνθρώπων τῷ χρόνῳ ἐξίτηλα γένηται, μήτε ἔργα μεγάλα τε καὶ θωμαστά, τὰ μὲν Ἕλλησι τὰ δὲ βαρβάροισι ἀποδεχθέντα, ἀκλεᾶ γένηται, τά τε ἄλλα καὶ διʼ ἣν αἰτίην ἐπολέμησαν ἀλλήλοισι.",
      english: "This is the Showing forth of the Inquiry of Herodotus of Halicarnassos, to the end that neither the deeds of men may be forgotten by lapse of time, nor the works great and marvellous, which have been produced some by Hellenes and some by Barbarians, may lose their renown; and especially that the causes may be remembered for which these waged war with one another.",
      citation: "Herodotus, Histories 1.1. Greek text, Perseus Digital Library. English by G. C. Macaulay, 1890.",
      links: [
        { label: "Greek", href: "https://scaife.perseus.org/reader/urn:cts:greekLit:tlg0016.tlg001.perseus-grc2:1.1.0/" },
        { label: "English", href: "https://www.gutenberg.org/ebooks/2707" },
      ],
    },
    {
      greek: "‘χρώμεθα γὰρ πολιτείᾳ οὐ ζηλούσῃ τοὺς τῶν πέλας νόμους, παράδειγμα δὲ μᾶλλον αὐτοὶ ὄντες τισὶν ἢ μιμούμενοι ἑτέρους. καὶ ὄνομα μὲν διὰ τὸ μὴ ἐς ὀλίγους ἀλλ’ ἐς πλείονας οἰκεῖν δημοκρατία κέκληται·",
      english: "Our constitution does not copy the laws of neighbouring states; we are rather a pattern to others than imitators ourselves. Its administration favours the many instead of the few; this is why it is called a democracy.",
      citation: "Thucydides, History of the Peloponnesian War 2.37.1. Greek text, Perseus Digital Library. English by Richard Crawley, 1874.",
      links: [
        { label: "Greek", href: "https://scaife.perseus.org/reader/urn:cts:greekLit:tlg0003.tlg001.perseus-grc2:2.37.1/" },
        { label: "English", href: "https://www.gutenberg.org/ebooks/7142" },
      ],
    },
    {
      greek: "ἐπισταμένους πρὸς εἰδότας ὅτι δίκαια μὲν ἐν τῷ ἀνθρωπείῳ λόγῳ ἀπὸ τῆς ἴσης ἀνάγκης κρίνεται, δυνατὰ δὲ οἱ προύχοντες πράσσουσι καὶ οἱ ἀσθενεῖς ξυγχωροῦσιν.",
      english: "since you know as well as we do that right, as the world goes, is only in question between equals in power, while the strong do what they can and the weak suffer what they must.",
      citation: "Thucydides, History of the Peloponnesian War 5.89. Greek text, Perseus Digital Library. English by Richard Crawley, 1874.",
      links: [
        { label: "Greek", href: "https://scaife.perseus.org/reader/urn:cts:greekLit:tlg0003.tlg001.perseus-grc2:5.89.1/" },
        { label: "English", href: "https://www.gutenberg.org/ebooks/7142" },
      ],
    },
  ],
  "tragedy-and-the-city": [
    {
      greek: "τὸν φρονεῖν βροτοὺς ὁδώ-\nσαντα, τὸν πάθει μάθος\nθέντα κυρίως ἔχειν.",
      english: "Zeus, who leadeth mortals the way of understanding, Zeus, who hath stablished as a fixed ordinance that “wisdom cometh by suffering.”",
      citation: "Aeschylus, Agamemnon 176–178. Greek text, Perseus Digital Library. English by Herbert Weir Smyth, 1926.",
      links: [
        { label: "Greek", href: "https://scaife.perseus.org/reader/urn:cts:greekLit:tlg0085.tlg005.perseus-grc2:176-178/" },
        { label: "English", href: "https://en.wikisource.org/wiki/Aeschylus_(Smyth_1926)_v2/Agamemnon" },
      ],
    },
    {
      greek: "πολλὰ τὰ δεινὰ κοὐδὲν ἀνθρώπου δεινότερον πέλει.\nτοῦτο καὶ πολιοῦ πέραν πόντου χειμερίῳ νότῳ\nχωρεῖ, περιβρυχίοισιν\nπερῶν ὑπʼ οἴδμασιν.",
      english: "Wonders are many, and none is more wonderful than man; the power that crosses the white sea, driven by the stormy south-wind, making a path under surges that threaten to engulf him;",
      citation: "Sophocles, Antigone 332–335. Greek text, Perseus Digital Library. English by Richard Claverhouse Jebb, 1917.",
      links: [
        { label: "Greek", href: "https://scaife.perseus.org/reader/urn:cts:greekLit:tlg0011.tlg002.perseus-grc2:332-335/" },
        { label: "English", href: "https://en.wikisource.org/wiki/Tragedies_of_Sophocles_(Jebb_1917)/Antigone" },
      ],
    },
    {
      greek: "ὦ τέκνα, Κάδμου τοῦ πάλαι νέα τροφή,\nτίνας ποθʼ ἕδρας τάσδε μοι θοάζετε\nἱκτηρίοις κλάδοισιν ἐξεστεμμένοι;\nπόλις δʼ ὁμοῦ μὲν θυμιαμάτων γέμει,\nὁμοῦ δὲ παιάνων τε καὶ στεναγμάτων·",
      english: "My children, latest-born to Cadmus who was of old, why are ye set before me thus with wreathed branches of suppliants, while the city reeks with incense, rings with prayers for health and cries of woe?",
      citation: "Sophocles, Oedipus the King 1–5. Greek text, Perseus Digital Library. English by Richard Claverhouse Jebb, 1917.",
      links: [
        { label: "Greek", href: "https://scaife.perseus.org/reader/urn:cts:greekLit:tlg0011.tlg004.perseus-grc2:1-5/" },
        { label: "English", href: "https://en.wikisource.org/wiki/Tragedies_of_Sophocles_(Jebb_1917)/Oedipus_the_King" },
      ],
    },
  ],
  "the-examined-life": [
    {
      greek: "ὁ δὲ ἀνεξέταστος βίος οὐ βιωτὸς ἀνθρώπῳ",
      english: "and if I say again that daily to discourse about virtue, and of those other things about which you hear me examining myself and others, is the greatest good of man, and that the unexamined life is not worth living, you are still less likely to believe me.",
      citation: "Plato, Apology 38a. Greek text, Perseus Digital Library. English by Benjamin Jowett, 1892.",
      links: [
        { label: "Greek", href: "https://scaife.perseus.org/reader/urn:cts:greekLit:tlg0059.tlg002.perseus-grc2:38a/" },
        { label: "English", href: "https://en.wikisource.org/wiki/The_Dialogues_of_Plato_(Jowett)/Apology" },
      ],
    },
    {
      greek: "μετὰ ταῦτα δή, εἶπον, ἀπείκασον τοιούτῳ πάθει τὴν ἡμετέραν φύσιν παιδείας τε πέρι καὶ ἀπαιδευσίας. ἰδὲ γὰρ ἀνθρώπους οἷον ἐν καταγείῳ οἰκήσει σπηλαιώδει, ἀναπεπταμένην πρὸς τὸ φῶς τὴν εἴσοδον ἐχούσῃ μακρὰν παρὰ πᾶν τὸ σπήλαιον, ἐν ταύτῃ ἐκ παίδων ὄντας ἐν δεσμοῖς καὶ τὰ σκέλη καὶ τοὺς αὐχένας, ὥστε μένειν τε αὐτοὺς εἴς τε τὸ πρόσθεν μόνον ὁρᾶν, κύκλῳ δὲ τὰς κεφαλὰς ὑπὸ τοῦ δεσμοῦ ἀδυνάτους περιάγειν",
      english: "And now, I said, let me show in a figure how far our nature is enlightened or unenlightened: Behold! human beings living in an underground den, which has a mouth open toward the light and reaching all along the den; here they have been from their childhood, and have their legs and necks chained so that they cannot move, and can only see before them, being prevented by the chains from turning round their heads.",
      citation: "Plato, Republic 514a–514b. Greek text, Perseus Digital Library. English by Benjamin Jowett, 1901.",
      links: [
        { label: "Greek", href: "https://scaife.perseus.org/reader/urn:cts:greekLit:tlg0059.tlg030.perseus-grc2:7.514/" },
        { label: "English", href: "https://en.wikisource.org/wiki/The_Republic_of_Plato/Book_7" },
      ],
    },
    {
      pairs: [
        {
          greek: "σημεῖόν ἐστιν, οὗ μέρος οὐθέν.",
          english: "A point is that which has no part.",
        },
        {
          greek: "γραμμὴ δὲ μῆκος ἀπλατές.",
          english: "A line is breadthless length.",
        },
        {
          greek: "γραμμῆς δὲ πέρατα σημεῖα.",
          english: "The extremities of a line are points.",
        },
        {
          greek: "εὐθεῖα γραμμή ἐστιν, ἥτις ἐξ ἴσου τοῖς ἐφʼ ἑαυτῆς σημείοις κεῖται.",
          english: "A straight line is a line which lies evenly with the points on itself.",
        },
      ],
      citation: "Euclid, Elements, Book I, Definitions 1–4. Greek text of Heiberg, Perseus Digital Library. English by Thomas L. Heath, 1908.",
      links: [
        { label: "Greek", href: "https://scaife.perseus.org/reader/urn:cts:greekLit:tlg1799.tlg001.perseus-grc2:1.def.1/" },
        { label: "English", href: "https://scaife.perseus.org/reader/urn:cts:greekLit:tlg1799.tlg001.perseus-eng2:1.def.1/" },
      ],
    },
    {
      pairs: [
        {
          greek: "Ἠιτήσθω ἀπὸ παντὸς σημείου ἐπὶ πᾶν σημεῖον εὐθεῖαν γραμμὴν ἀγαγεῖν.",
          english: "Let the following be postulated:\nTo draw a straight line from any point to any point.",
        },
        {
          greek: "καὶ πεπερασμένην εὐθεῖαν κατὰ τὸ συνεχὲς ἐπʼ εὐθείας ἐκβαλεῖν.",
          english: "To produce a finite straight line continuously in a straight line.",
        },
        {
          greek: "καὶ παντὶ κέντρῳ καὶ διαστήματι κύκλον γράφεσθαι.",
          english: "To describe a circle with any centre and distance.",
        },
      ],
      citation: "Euclid, Elements, Book I, Postulates 1–3. Greek text of Heiberg, Perseus Digital Library. English by Thomas L. Heath, 1908.",
      links: [
        { label: "Greek", href: "https://scaife.perseus.org/reader/urn:cts:greekLit:tlg1799.tlg001.perseus-grc2:1.post.1/" },
        { label: "English", href: "https://scaife.perseus.org/reader/urn:cts:greekLit:tlg1799.tlg001.perseus-eng2:1.post.1/" },
      ],
    },
  ],
  "virtue-and-polity": [
    {
      greek: "τὸ ἀνθρώπινον ἀγαθὸν ψυχῆς ἐνέργεια γίνεται κατʼ ἀρετήν, εἰ δὲ πλείους αἱ ἀρεταί, κατὰ τὴν ἀρίστην καὶ τελειοτάτην. ἔτι δʼ ἐν βίῳ τελείῳ. μία γὰρ χελιδὼν ἔαρ οὐ ποιεῖ, οὐδὲ μία ἡμέρα· οὕτω δὲ οὐδὲ μακάριον καὶ εὐδαίμονα μία ἡμέρα οὐδʼ ὀλίγος χρόνος.",
      english: "human good turns out to be activity of soul in accordance with virtue, and if there are more than one virtue, in accordance with the best and most complete.\n\nBut we must add 'in a complete life'. For one swallow does not make a summer, nor does one day; and so too one day, or a short time, does not make a man blessed and happy.",
      citation: "Aristotle, Nicomachean Ethics 1.7, 1098a16–20. Greek text, Perseus Digital Library. English by W. D. Ross, 1925.",
      links: [
        { label: "Greek", href: "https://scaife.perseus.org/reader/urn:cts:greekLit:tlg0086.tlg010.perseus-grc2:1.7/" },
        { label: "English", href: "https://en.wikisource.org/wiki/Nicomachean_Ethics_(Ross)/Book_One" },
      ],
    },
    {
      greek: "ἐκ τούτων οὖν φανερὸν ὅτι τῶν φύσει ἡ πόλις ἐστί, καὶ ὅτι ὁ ἄνθρωπος φύσει πολιτικὸν ζῷον",
      english: "Hence it is evident that the state is a creation of nature, and that man is by nature a political animal.",
      citation: "Aristotle, Politics 1.2, 1253a2–3. Greek text, Perseus Digital Library. English by Benjamin Jowett, edition of 1920.",
      links: [
        { label: "Greek", href: "https://scaife.perseus.org/reader/urn:cts:greekLit:tlg0086.tlg035.perseus-grc2:1.1253a/" },
        { label: "English", href: "https://en.wikisource.org/wiki/Politics_(Jowett)/Book_1" },
      ],
    },
  ],
};
