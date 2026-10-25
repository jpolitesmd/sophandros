#!/usr/bin/env python3
"""
Build the Sophandros site into ./dist.

    python3 build.py          # build
    python3 build.py --serve  # build, then serve on http://localhost:8000

No dependencies beyond Python 3.9+. Content lives in content/:
  curriculum.py        parts, chapters, tools, exercises (drives every page)
  chapters/<slug>.html the full text of each written chapter
"""
import html
import os
import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).parent
sys.path.insert(0, str(ROOT / "content"))
import curriculum as C  # noqa: E402

DIST = ROOT / "dist"
STATIC = ROOT / "static"
CHAPTER_DIR = ROOT / "content" / "chapters"

esc = html.escape


# --------------------------------------------------------------------------
# Layout
# --------------------------------------------------------------------------

NAV = [
    ("/curriculum/", "Curriculum"),
    ("/chapters/01-the-self/", "Read a chapter"),
    ("/education/", "Education"),
    ("/about/", "About"),
]


def page(path, title, description, body, active=None):
    full_title = C.SITE["name"] if title is None else f"{title} · {C.SITE['name']}"
    canonical = C.SITE["url"] + path
    nav = "".join(
        f'<a href="{href}"{" aria-current=\"page\"" if active == href else ""}>{label}</a>'
        for href, label in NAV
    )
    menu = "".join(f'<a href="{href}">{label}</a>' for href, label in NAV)
    return f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{esc(full_title)}</title>
<meta name="description" content="{esc(description)}">
<link rel="canonical" href="{canonical}">
<meta property="og:type" content="website">
<meta property="og:title" content="{esc(full_title)}">
<meta property="og:description" content="{esc(description)}">
<meta property="og:url" content="{canonical}">
<meta property="og:image" content="{C.SITE['url']}/img/brand/og.png">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#14213d">
<link rel="icon" href="/favicon.ico?v=2" sizes="any">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png?v=2">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png?v=2">
<link rel="apple-touch-icon" href="/apple-touch.png?v=2">
<link rel="preload" href="/fonts/eb-garamond-latin-400-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/cinzel-latin-500-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/css/site.css">
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="site-header">
  <div class="container">
    <a class="brand" href="/"><img src="/img/brand/mark-disk.png" alt="" width="42" height="42"><span>SOPHANDROS</span></a>
    <nav class="nav" aria-label="Main">{nav}<a class="cta" href="/waitlist/">Join the waitlist</a></nav>
    <details class="menu"><summary>Menu</summary><nav class="menu-panel" aria-label="Main">{menu}<a href="/waitlist/">Join the waitlist</a></nav></details>
  </div>
</header>
<main id="main">
{body}
</main>
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <a class="footer-brand" href="/" style="color:inherit;text-decoration:none"><img src="/img/brand/mark-navy.png" alt="" width="46" height="60"><span>SOPHANDROS</span></a>
        <p class="tag">{C.SITE['tagline']}.</p>
      </div>
      <div>
        <h2>The course</h2>
        <ul>
          <li><a href="/curriculum/">Curriculum</a></li>
          <li><a href="/chapters/01-the-self/">Read Chapter 1</a></li>
          <li><a href="/american-series/">The American series</a></li>
          <li><a href="/education/">Education</a></li>
        </ul>
      </div>
      <div>
        <h2>Sophandros</h2>
        <ul>
          <li><a href="/about/">About</a></li>
          <li><a href="/waitlist/">Join the waitlist</a></li>
          <li><a href="mailto:{C.SITE['email']}">{C.SITE['email']}</a></li>
        </ul>
      </div>
    </div>
    <p class="fine">Enrollment is not yet open. Chapters are published as they are written.</p>
  </div>
</footer>
</body>
</html>
"""


# --------------------------------------------------------------------------
# Pieces
# --------------------------------------------------------------------------

def ch_by_slug(slug):
    return next(c for c in C.CHAPTERS if c["slug"] == slug)


def chapters_in(part_id):
    return [c for c in C.CHAPTERS if c["part"] == part_id]


def ch_label(ch):
    if ch.get("label"):
        return ch["label"]
    return f"Prologue {ch['num']}" if ch["num"].startswith("P") else f"Chapter {ch['num']}"


def badges(ch, show_ready=True):
    out = []
    if show_ready and ch["status"] == "written":
        out.append('<span class="badge ready">Ready to read</span>')
    if ch["core"]:
        out.append(f'<span class="badge core">Core · week {ch["core"]}</span>')
    else:
        out.append('<span class="badge">Extended edition</span>')
    return '<div class="badges">' + "".join(out) + "</div>"


def rings_svg():
    """The widening circle: one half-ring per part, the self at the center."""
    cx, base = 380, 392
    rings = [  # outer to inner: (radius, label, part label, link)
        (350, "The wider world", "Part III · Ch. 15–18", "/curriculum/#world"),
        (280, "Republic and empire", "Part II · Ch. 9–14", "/curriculum/#rome"),
        (210, "The city", "Part I · Ch. 3–8", "/curriculum/#greece"),
        (140, "The household", "Ch. 2", "/chapters/02-the-household/"),
    ]
    parts = []
    inner = [122 - 0] + [r for r, *_ in rings]
    radii = [r for r, *_ in rings] + [72]
    for i, (r, label, sub, href) in enumerate(rings):
        r_in = radii[i + 1]
        mid = base - (r + r_in) / 2
        parts.append(
            f'<a href="{href}" aria-label="{esc(label)}, {esc(sub)}">'
            f'<path class="ring" d="M{cx - r} {base}A{r} {r} 0 0 1 {cx + r} {base}"/>'
            f'<text class="lbl-part" x="{cx}" y="{mid - 6:.0f}">{esc(sub.upper())}</text>'
            f'<text class="lbl{" lbl-inner" if i == len(rings) - 1 else ""}" x="{cx}" y="{mid + 13:.0f}">{esc(label)}</text></a>'
        )
    parts.append(
        f'<a href="/chapters/01-the-self/" aria-label="The self, Chapter 1 and Part V">'
        f'<path class="ring ring-self" d="M{cx - 72} {base}A72 72 0 0 1 {cx + 72} {base}Z"/>'
        f'<text class="lbl lbl-self" x="{cx}" y="{base - 34}">The self</text>'
        f'<text class="lbl-part" style="fill:#d8c497" x="{cx}" y="{base - 14}">CH. 1 · PART V</text></a>'
    )
    return (
        '<svg class="rings" viewBox="0 0 760 400" role="img" '
        'aria-labelledby="rings-title"><title id="rings-title">The widening circle: '
        "the self, the household, the city, republic and empire, and the wider world</title>"
        + "".join(parts)
        + f'<line class="base" x1="20" x2="740" y1="{base}" y2="{base}"/></svg>'
    )


def waitlist_form(compact=False):
    extra = "" if compact else """
    <label>Which interests you<span class="opt">(optional)</span>
      <select name="interest">
        <option value="">Choose one</option>
        <option>The core course (12 weeks)</option>
        <option>The extended edition (26 weeks)</option>
        <option>The printed book</option>
        <option>Homeschool or classroom use</option>
        <option>The American series</option>
        <option>Not sure yet</option>
      </select>
    </label>
    <label>A note<span class="opt">(optional)</span><textarea name="note"></textarea></label>"""
    return f"""
  <form class="form" action="mailto:{C.SITE['email']}?subject=Sophandros%20waitlist" method="post" enctype="text/plain">
    <label>Name<span class="opt">(optional)</span><input type="text" name="name" autocomplete="name"></label>
    <label>Email<input type="email" name="email" autocomplete="email" required></label>{extra}
    <button class="button" type="submit">Join the waitlist</button>
    <p class="note">This opens a short email to {C.SITE['email']} in your own mail app. Nothing is stored on this site.</p>
  </form>"""


# --------------------------------------------------------------------------
# Pages
# --------------------------------------------------------------------------

def home():
    part_cards = []
    for p in C.PARTS:
        chs = chapters_in(p["id"])
        rng = f"{ch_label(chs[0])}–{chs[-1]['num']}" if len(chs) > 1 else ch_label(chs[0])
        if p["id"] == "prologue":
            rng = "P1–P2"
        elif len(chs) > 1:
            nums = [c for c in chs if not c["num"].startswith("P")]
            rng = f"Ch. {nums[0]['num']}–{nums[-1]['num']}" if len(nums) > 1 else f"Ch. {nums[0]['num']}"
        part_cards.append(
            f'<a class="part-card" href="/curriculum/#{p["id"]}">'
            f'<span class="meta"><span>{p["label"]}</span><span>{rng}</span></span>'
            f'<h3>{esc(p["title"])}</h3><p>{p["summary"]}</p></a>'
        )
    week = "".join(
        f'<li><div class="what">{w}<span class="time">{t}</span></div><div>{d}</div></li>'
        for w, t, d in C.WEEK
    )
    tools = "".join(
        f'<div class="card"><span class="meta">{g["note"]}</span><h3>{g["group"]}</h3><ul>'
        + "".join(f"<li><strong>{n}</strong><span>{d}</span></li>" for n, d in g["items"])
        + "</ul></div>"
        for g in C.TOOLS
    )
    editions = "".join(
        f'<div class="card edition"><span class="meta">{length}</span><h3>{name}</h3>'
        f'<p class="price-launch">Launch price</p>'
        f'<p class="price"><s class="was" aria-label="Regular price {regular}">{regular}</s> {price}</p>'
        f'<p class="price-sub">Launch price through December 25; {regular} after</p><p>{desc}</p>'
        + (f'<p class="note">{note}</p>' if note else "")
        + "</div>"
        for name, length, price, regular, desc, note in C.EDITIONS
    )
    body = f"""
<section class="hero">
  <div class="container">
    <span class="kicker">Self-paced · From the first cities to the American founding</span>
    <img class="hero-logo" src="/img/brand/logo-lockup.png" alt="Sophandros" width="923" height="524">
    <h1>{C.SITE['promise']}</h1>
    <p class="hero-aim">{C.SITE['aim']}</p>
    <p class="lede">The training that shaped leaders for two thousand years, rebuilt for the modern professional seeking a deeper foundation and a more complete self: the same texts, the same tools and the same writing drills, applied to your own work.</p>
    <div class="actions">
      <a class="button" href="/chapters/01-the-self/">Read Chapter 1</a>
      <a class="button ghost" href="/curriculum/">See the curriculum</a>
    </div>
    <img class="hero-flourish" src="/img/brand/flourish.png" alt="" width="670" height="140">
  </div>
</section>

<section class="section" id="aim">
  <div class="container">
    <div class="head">
      <span class="kicker">The aim</span>
      <h2>Practical wisdom</h2>
      <p class="lede">Knowledge can be looked up. Judgment cannot. The Greeks called it <em>phronēsis</em>, practical wisdom: the ability to see what ought to be done in the case in front of you, at home, at work and in public life. Aristotle held that it is learned from experience of particular cases, not from rules alone. The classics are the largest store of such cases we have, and every chapter of Sophandros puts them to that use: to develop the judgment of the complete professional.</p>
    </div>
    <blockquote class="aim-quote">
      <p>&ldquo;For this reason we think Pericles and men of that stamp to be Practically Wise, because they can see what is good for themselves and for men in general.&rdquo;</p>
      <cite>Aristotle, <em>Nicomachean Ethics</em> 6.5. Translated by D. P. Chase, 1847</cite>
    </blockquote>
  </div>
</section>

<section class="section tint" id="thesis">
  <div class="container">
    <div class="head">
      <span class="kicker">The thesis</span>
      <h2>The widening circle</h2>
      <p class="lede">{C.THESIS}</p>
    </div>
    <figure class="rings-figure">{rings_svg()}
      <figcaption class="rings-caption">The prologue sets the stage before the first ring. Part IV shows the Founders putting the whole education to work, and Part V carries it back to the center: your own work.</figcaption>
    </figure>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="head">
      <span class="kicker">The course</span>
      <h2>A prologue and five parts</h2>
      <p class="lede">Twenty-six chapters, one a week. The course grows as the circle grows: each chapter adds a layer to the man, a larger body to govern, and names what the age before it failed to solve.</p>
    </div>
    <div class="parts">{''.join(part_cards)}</div>
    <div class="actions"><a class="button ghost" href="/curriculum/">The full curriculum</a></div>
  </div>
</section>

<section class="section tint">
  <div class="container">
    <div class="head">
      <span class="kicker">The method</span>
      <h2>A week of study</h2>
      <p class="lede">About three and a half hours, in pieces that fit around a working day.</p>
    </div>
    <ol class="week">{week}</ol>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="head">
      <span class="kicker">What you learn to do</span>
      <h2>The tools of a classical education</h2>
      <p class="lede">The old education was a set of tools, not a reading list. Every chapter trains at least one, and the Founders used every one of them.</p>
    </div>
    <div class="grid grid-3 tools">{tools}</div>
  </div>
</section>

<section class="section navy">
  <div class="container">
    <blockquote class="quote">
      <p class="latin" lang="la">Haec studia adulescentiam alunt, senectutem oblectant, secundas res ornant, adversis perfugium ac solacium praebent.</p>
      <p class="english">These studies nourish youth and delight old age; they adorn good fortune and give refuge and comfort in bad.</p>
      <cite>Cicero, <em>For Archias</em> 7.16, 62 BC</cite>
    </blockquote>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="head">
      <span class="kicker">Two editions</span>
      <h2>Choose your pace</h2>
      <p class="lede">Enrollment opens soon. Join the waitlist to hear first.</p>
    </div>
    <div class="grid grid-2 editions">{editions}</div>
    <p class="center muted" style="margin-top:var(--s4)">Teaching a homeschool, collegiate, graduate or postgraduate course? <a href="/education/">Options for families, instructors and programs</a>.</p>
  </div>
</section>

<section class="section tint" id="waitlist">
  <div class="container">
    <div class="head">
      <span class="kicker">Not yet open</span>
      <h2>Be told when it opens</h2>
      <p class="lede">Leave an address and we will write when the first places are offered.</p>
    </div>
    {waitlist_form(compact=True)}
  </div>
</section>
"""
    return page("/", None, C.SITE["description"], body)


def curriculum():
    nav = "".join(f'<a href="#{p["id"]}">{p["label"]}</a>' for p in C.PARTS)
    blocks = []
    for p in C.PARTS:
        rows = []
        for ch in chapters_in(p["id"]):
            reads = "; ".join(ch["readings"][:2]) + ("; and more" if len(ch["readings"]) > 2 else "")
            rows.append(
                f'<li class="chapter-row"><a href="/chapters/{ch["slug"]}/">'
                f'<span class="num">{ch["num"]}</span>'
                f'<div><h3><span class="circle">{esc(ch["circle"])}:</span> <span class="theme">{ch["theme"]}</span></h3>'
                f'<p class="reads">{reads}</p></div>{badges(ch)}</a></li>'
            )
        close = ""
        if p["failed"]:
            close = (
                f'<div class="part-close"><div><strong>What failed</strong>{p["failed"]}</div>'
                f'<div><strong>What carries forward</strong>{p["carried"]}</div></div>'
            )
        blocks.append(
            f'<section class="part-block" id="{p["id"]}">'
            f'<div class="part-head"><span class="kicker">{p["label"]} · {p["weeks"]}</span>'
            f'<h2>{esc(p["title"])}</h2><p class="ring-name">{p["ring"]}</p>'
            f'<p class="intro">{p["intro"]}</p></div>'
            f'<ol class="chapters">{"".join(rows)}</ol>{close}</section>'
        )
    capstone = "".join(f"<li><strong>{t}.</strong> {d}</li>" for t, d in C.CAPSTONE)
    body = f"""
<header class="page-head">
  <div class="container">
    <span class="kicker">The course</span>
    <h1>Curriculum</h1>
    <p class="lede">{C.THESIS}</p>
    <figure class="rings-figure curriculum-rings">{rings_svg()}
      <figcaption class="rings-caption">The widening circle. Each part below is one ring, from the self outward to a new nation; the last part carries it all back to the center: your own work.</figcaption>
    </figure>
    <nav class="part-nav" aria-label="Parts">{nav}</nav>
  </div>
</header>
<section class="section" style="padding-top:var(--s4)">
  <div class="container">
    <p class="center muted small" style="margin-bottom:var(--s5)">Chapters marked <span class="badge core">Core</span> make up the 12-week core course; the extended edition and the book include every chapter.</p>
    {''.join(blocks)}
    <div class="part-close" style="grid-template-columns:1fr;margin-top:var(--s6)">
      <div><strong>The capstone, in chapter 23</strong><ol style="padding-left:1.2em;margin-top:.4rem">{capstone}</ol></div>
    </div>
  </div>
</section>
"""
    return page("/curriculum/", "Curriculum", "Twenty-six chapters in a prologue and five parts, from the first cities to the American founding and back to your own work.", body, active="/curriculum/")


def chapter(ch):
    p = C.part_of(ch)
    idx = C.CHAPTERS.index(ch)
    prev_ch = C.CHAPTERS[idx - 1] if idx > 0 else None
    next_ch = C.CHAPTERS[idx + 1] if idx < len(C.CHAPTERS) - 1 else None
    readings = "".join(f"<li>{r}</li>" for r in ch["readings"])
    ex_name, ex_task = ch["exercise"]
    grad_label = "The task is yours" if p["id"] == "today" else ("Who used it" if p["id"] != "founding" else "Who used it")
    facts = f"""
<div class="facts">
  <div class="fact wide"><h2>The lesson</h2><p>{ch['lesson']}</p></div>
  <div class="fact"><h2>The readings</h2><ul>{readings}</ul></div>
  <div class="fact"><h2>The tool</h2><p>{ch['tool']}</p></div>
  <div class="fact"><h2>The exercise</h2><p class="ex-name">{ex_name}</p><p>{ex_task}</p></div>
  <div class="fact"><h2>{grad_label}</h2><p>{ch['graduate']}</p></div>
</div>"""
    written = CHAPTER_DIR / f"{ch['slug']}.html"
    if ch["status"] == "written" and written.exists():
        text = written.read_text()
        if ch["slug"] == "01-the-self":
            # The free sample opens with the book's preface, then the chapter.
            preface = (ROOT / "content" / "samples" / "preface.html").read_text().replace("<h1>Preface</h1>", "<h2>Preface</h2>", 1)
            text = (
                f'<div class="preface">{preface}</div>'
                f'<hr class="section-mark">'
                f'<h2 class="chapter-start">{ch_label(ch)}. {esc(ch["circle"])}: {ch["theme"]}</h2>'
                + text
            )
        main = f'<div class="reading"><div class="column prose">{text}</div></div>'
        facts_block = f'<section class="section tint"><div class="container"><div class="head"><span class="kicker">At a glance</span><h2>This chapter in brief</h2></div>{facts}</div></section>'
        content = main + facts_block
    else:
        content = (
            f'<section class="section" style="padding-top:var(--s3)"><div class="container">{facts}'
            f'<div class="status-note"><p><strong>This chapter is being written.</strong></p>'
            f'<p class="muted">Chapter 1 is ready to read now as a sample of what every chapter will hold.</p>'
            f'<div class="actions" style="margin-top:var(--s2)"><a class="button ghost" href="/chapters/01-the-self/">Read Chapter 1</a></div></div>'
            f'</div></section>'
        )
    pager = '<nav class="pager" aria-label="Chapters">'
    if prev_ch:
        pager += f'<a class="prev" href="/chapters/{prev_ch["slug"]}/"><span class="dir">← {ch_label(prev_ch)}</span><span class="t">{esc(C.chapter_title(prev_ch))}</span></a>'
    if next_ch:
        pager += f'<a class="next" href="/chapters/{next_ch["slug"]}/"><span class="dir">{ch_label(next_ch)} →</span><span class="t">{esc(C.chapter_title(next_ch))}</span></a>'
    pager += "</nav>"
    body = f"""
<header class="page-head chapter-head">
  <div class="container">
    <p class="crumbs"><a href="/curriculum/">Curriculum</a><span aria-hidden="true">/</span><a href="/curriculum/#{p['id']}">{p['label']}</a><span aria-hidden="true">/</span>{ch_label(ch)}</p>
    <span class="kicker">{p['label']} · {ch_label(ch)}</span>
    <h1>{esc(ch['circle'])}: <span style="text-transform:none">{ch['theme']}</span></h1>
    <p class="ring-name">{ch['era']}</p>
    {badges(ch)}
  </div>
</header>
{content}
<div class="container" style="padding-bottom:var(--s7)">{pager}</div>
"""
    desc = f"{ch_label(ch)} of Sophandros. {ch['lesson']}"
    title = f"{ch_label(ch)}. {ch['circle']}: {html.unescape(ch['theme'])}"
    return page(f"/chapters/{ch['slug']}/", title, desc, body)


def about():
    ex_rows = "".join(f"<tr><td>{n}</td><td>{t}</td><td>{m}</td></tr>" for n, t, m in C.EXERCISES)
    latin_rows = "".join(f"<tr><td>{f}</td><td><em>{e}</em></td></tr>" for f, e in C.LATIN)
    body = f"""
<header class="page-head">
  <div class="container">
    <span class="kicker">About</span>
    <h1>The wise man</h1>
    <p class="lede">Sophandros joins two Greek words. It is a coined name, not a word of ancient Greek.</p>
  </div>
</header>
<section class="section" style="padding-top:var(--s3)">
  <div class="container">
    <div class="etym">
      <div><p class="g" lang="grc">σοφός</p><p><em>sophos</em>, wise</p></div>
      <span class="plus" aria-hidden="true">+</span>
      <div><p class="g" lang="grc">ἀνήρ</p><p><em>anēr</em>, man; in compounds <em>-andros</em></p></div>
    </div>
    <p class="center lede" style="margin-top:var(--s4)">Sophandros: the wise man, the figure this course is forming.</p>
  </div>
</section>
<section class="section tint">
  <div class="column prose">
    <div class="head" style="margin-bottom:var(--s4)"><span class="kicker">Why</span><h2>What a professional's education leaves out</h2></div>
    <p>For centuries the educated of Europe and America were formed the same way: Latin and Greek, Homer and Plato, Cicero and Virgil, and the history of every republic that rose and fell. Harvard's rules of 1642 asked a student to read Cicero and decline Greek nouns before he could be admitted. The men who wrote the American Constitution were products of that training, and they used it.</p>
    <p>A modern professional has a long education, but usually not that one. What it leaves out is the progression: why each age built what it did, why it failed, and what the next age learned. Sophandros restores that progression at a working pace, and turns it on the reader's own work.</p>
    <p>The wisdom in the name is the practical kind. Aristotle called it <em>phronēsis</em>: the judgment that sees what ought to be done in a particular case, and that he said comes only from experience. A professional already has the experience. Sophandros adds the store of cases and the habits of reasoning that turn it into judgment, from Achilles' anger to Madison's design.</p>
    <p>It is written for anyone with a full week who wants the foundation under their profession: in law, medicine, business, government, the military or the trades of the mind.</p>
  </div>
</section>
<section class="section">
  <div class="container">
    <div class="head"><span class="kicker">The method</span><h2>The writing drills of the old schools</h2>
      <p class="lede">From the Roman schools to Tudor grammar schools, students learned to think and write through the <em>progymnasmata</em>: fourteen graded exercises, each harder than the last. Sophandros sets one a week, applied to your own work.</p></div>
    <div class="table-wrap"><table class="table"><thead><tr><th>Exercise</th><th>What it trains</th><th>Today</th></tr></thead><tbody>{ex_rows}</tbody></table></div>
  </div>
</section>
<section class="section tint">
  <div class="container">
    <div class="head"><span class="kicker">The languages</span><h2>The Latin you will actually use</h2>
      <p class="lede">About fifteen minutes a week and a hundred phrases, chosen because they still run through law, medicine, business and everyday writing. Reading Cicero in the original is an optional course for later.</p></div>
    <div class="table-wrap"><table class="table"><tbody>{latin_rows}</tbody></table></div>
  </div>
</section>
<section class="section">
  <div class="column center">
    <span class="kicker">Write to us</span>
    <p style="margin-top:var(--s2)"><a href="mailto:{C.SITE['email']}">{C.SITE['email']}</a></p>
    <div class="actions"><a class="button" href="/waitlist/">Join the waitlist</a></div>
  </div>
</section>
"""
    return page("/about/", "About", "Why Sophandros exists, what the name means, and the method behind it.", body, active="/about/")


def american_series():
    body = f"""
<header class="page-head">
  <div class="container">
    <span class="kicker">Beyond the main course</span>
    <h1>The American series</h1>
    <p class="lede">The main course gives the founding three chapters, as proof that the education works. For readers who want the whole American story, a separate series follows.</p>
  </div>
</header>
<section class="section" style="padding-top:var(--s3)">
  <div class="container">
    <div class="grid grid-2" style="max-width:52rem;margin:0 auto">
      <div class="card"><span class="meta">First · in preparation</span><h3>The Founding</h3><p>The classical education of the Founders, the Declaration, the Convention, ratification and Washington's precedents, in about twelve weeks.</p></div>
      <div class="card"><span class="meta">Planned</span><h3>The Early Republic</h3><p>Parties, the Marshall Court, Jefferson and Hamilton, and the Jacksonian era.</p></div>
      <div class="card"><span class="meta">Planned</span><h3>The Civil War</h3><p>Slavery and the Constitution, Lincoln as a self-taught classicist, Gettysburg beside Pericles, and Reconstruction.</p></div>
      <div class="card"><span class="meta">Later</span><h3>The American century</h3><p>The Progressive era, the world wars and after.</p></div>
    </div>
    <p class="center muted" style="margin:var(--s4) auto 0;max-width:var(--measure)">Each course uses the same lesson shape and the same writing drills, so a reader who finishes the main course can move straight into any of them.</p>
    <div class="actions"><a class="button" href="/waitlist/">Join the waitlist</a><a class="button ghost" href="/curriculum/#founding">The founding in the main course</a></div>
  </div>
</section>
"""
    return page("/american-series/", "The American series", "A separate series on American history for readers of Sophandros: the Founding, the Early Republic, the Civil War.", body)


def waitlist():
    body = f"""
<header class="page-head">
  <div class="container">
    <span class="kicker">Not yet open</span>
    <h1>Join the waitlist</h1>
    <p class="lede">Leave a way to reach you. When the first places are offered, we will write. A place on this list is not a purchase or an application.</p>
  </div>
</header>
<section class="section" style="padding-top:var(--s3)">
  <div class="container">{waitlist_form()}</div>
</section>
"""
    return page("/waitlist/", "Join the waitlist", "Be told when Sophandros opens.", body, active="/waitlist/")


def education_samples():
    """Samples of what the course adds, all taken from Chapter 1, so instructors and parents can see a week in practice."""
    ch1 = (CHAPTER_DIR / "01-the-self.html").read_text(encoding="utf-8")
    import re
    quiz = re.search(r'<ol class="check">(.*?)</ol>', ch1, re.S)
    items = re.findall(r"<li>.*?</li>", quiz.group(1), re.S)[:3] if quiz else []
    ex = re.search(r"<h2>The exercise:.*?</h2>(.*?)(?=<h3>For your commonplace book)", ch1, re.S)
    exercise = ex.group(1) if ex else ""
    model = (ROOT / "content" / "samples" / "model-answer-01.html").read_text(encoding="utf-8")
    week = "".join(
        f'<li><div class="what">{w}<span class="time">{t}</span></div><div>{d}</div></li>'
        for w, t, d in C.WEEK
    )
    return f"""
<section class="section tint" id="in-practice">
  <div class="container">
    <div class="head">
      <span class="kicker">In practice</span>
      <h2>What a week looks like</h2>
      <p class="lede">Every chapter has the same shape, so a week settles into a routine of about three and a half hours. Everything below is taken from Chapter 1, as a student would meet it in the course.</p>
    </div>
    <ol class="week">{week}</ol>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="head">
      <span class="kicker">Sample · Course only</span>
      <h2>The weekly self-check</h2>
      <p class="lede">Five questions on the week's reading, with the answers hidden until the student is ready. Here are three from Chapter 1.</p>
    </div>
    <div class="sample prose"><ol class="check">{"".join(items)}</ol></div>
  </div>
</section>

<section class="section tint">
  <div class="container">
    <div class="head">
      <span class="kicker">Sample · Course only</span>
      <h2>The writing exercise, and a model answer</h2>
      <p class="lede">Each chapter ends with one of the graded writing drills of the classical schools. The course adds a model answer for every one, folded away until the student has written his own. This is Chapter 1's.</p>
    </div>
    <div class="sample prose">
      <p class="sample-label">The exercise: a chreia</p>
      {exercise}
    </div>
    <details class="sample prose model-answer">
      <summary>Show the model answer</summary>
      {model}
    </details>
    <p class="center muted" style="margin-top:var(--s4)">For parents and instructors, the parent's guide has a simple checklist for marking any of the drills.</p>
    <div class="actions"><a class="button ghost" href="/guides/sophandros-parents-guide.pdf">The parent's guide (PDF)</a><a class="button ghost" href="/chapters/01-the-self/">Read all of Chapter 1</a></div>
  </div>
</section>"""


def families():
    mail = C.SITE["education_email"]
    body = f"""
<header class="page-head">
  <div class="container">
    <span class="kicker">Education</span>
    <h1>For students, too</h1>
    <p class="lede">Sophandros was written for working adults, but the education it revives was first given to the young. A strong reader of about fifteen and older can take the course at home; it can serve as a text for a college seminar; and it suits professional schools and training programs whose graduates will need judgment as much as technique.</p>
    <p class="muted">Sophandros is a supplement to a student's own education. It is not an accredited course, and it does not award grades, credit or certificates.</p>
  </div>
</header>
<section class="section" style="padding-top:var(--s3)">
  <div class="container">
    <div class="grid grid-3">
      <div class="card">
        <span class="meta">Homeschool</span>
        <h3>At home, with a parent alongside</h3>
        <p>Suited to an advanced student of about fifteen and older who reads well above grade level. The extended edition fills a school year at one chapter a week; the core course fits a semester.</p>
        <p>The free parent's guide covers pacing, adapting the writing exercises to a student's life, checking the writing, and recording the course on a transcript.</p>
        <p><a class="button ghost" href="/guides/sophandros-parents-guide.pdf">The parent's guide (PDF)</a></p>
        <p class="note">Teaching more than one child? A family license covers every student in one household. Through December 25, the core course is $175 and the extended edition $325 (regularly $225 and $375).</p>
      </div>
      <div class="card">
        <span class="meta">Collegiate</span>
        <h3>A text for a seminar</h3>
        <p>Twenty-six chapters of primary sources in translation, from <em>Gilgamesh</em> and Homer to the <em>Federalist</em>, each with a writing exercise from the classical schools. It fits an honors seminar, a Great Books course or a first-year program.</p>
        <p class="note">Instructors considering the book for a course can ask for a free review copy: write to <a href="mailto:{mail}?subject=Review%20copy">{mail}</a> with your institution and course. A printed edition will follow on Amazon.</p>
      </div>
      <div class="card">
        <span class="meta">Graduate and postgraduate</span>
        <h3>For a cohort or a group</h3>
        <p>Medical, law and graduate schools, residency and fellowship programs, classical academies and teams at work can take the course together, a chapter a week, with the writing exercises as shared assignments.</p>
        <p>Postgraduate programs can also offer it to their students and trainees on its own, as part of a wellness program: a course in the whole person, not only the profession, that prepares them for life beyond the program.</p>
        <p class="note">Group licenses are available. Write to <a href="mailto:{mail}?subject=Group%20license">{mail}</a> with the size of your group and how you would use it.</p>
      </div>
    </div>
    <p class="center muted" style="margin-top:var(--s5)">Not sure it suits your student? <a href="/chapters/01-the-self/">Read Chapter 1</a>, which is free. Questions from parents, instructors and programs: <a href="mailto:{mail}">{mail}</a>.</p>
  </div>
</section>
{education_samples()}
"""
    return page("/education/", "Education",
                "Sophandros for advanced homeschool students, college seminars, professional schools and residency programs: a free parent's guide, review copies for instructors, and group licenses.", body, active="/education/")


def not_found():
    body = """
<header class="page-head" style="padding-bottom:var(--s7)">
  <div class="container">
    <span class="kicker">Not found</span>
    <h1>This page is not here</h1>
    <p class="lede">It may have moved when the site was rebuilt.</p>
    <div class="actions"><a class="button" href="/">Home</a><a class="button ghost" href="/curriculum/">Curriculum</a></div>
  </div>
</header>"""
    return page("/404.html", "Not found", "Page not found.", body)


# --------------------------------------------------------------------------
# Build
# --------------------------------------------------------------------------

def write(rel, text):
    out = DIST / rel
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(text, encoding="utf-8")


def build():
    if DIST.exists():
        shutil.rmtree(DIST)
    shutil.copytree(STATIC, DIST)
    write("index.html", home())
    write("curriculum/index.html", curriculum())
    for ch in C.CHAPTERS:
        write(f"chapters/{ch['slug']}/index.html", chapter(ch))
    write("about/index.html", about())
    write("american-series/index.html", american_series())
    write("waitlist/index.html", waitlist())
    write("education/index.html", families())
    # the page's first address, kept so earlier links still work
    write("families-and-instructors/index.html",
          '<!doctype html><meta charset="utf-8"><title>Education · Sophandros</title>'
          '<link rel="canonical" href="https://www.sophandros.com/education/">'
          '<meta http-equiv="refresh" content="0; url=/education/"><a href="/education/">Education</a>')
    write("404.html", not_found())
    urls = ["/", "/curriculum/", "/about/", "/american-series/", "/waitlist/", "/education/"] + [
        f"/chapters/{c['slug']}/" for c in C.CHAPTERS
    ]
    write(
        "sitemap.xml",
        '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
        + "".join(f"<url><loc>{C.SITE['url']}{u}</loc></url>" for u in urls)
        + "</urlset>\n",
    )
    print(f"Built {len(urls) + 1} pages into {DIST}")


if __name__ == "__main__":
    build()
    if "--serve" in sys.argv:
        import http.server
        import functools
        os.chdir(DIST)
        handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=str(DIST))
        print("Serving on http://localhost:8000")
        http.server.ThreadingHTTPServer(("", 8000), handler).serve_forever()
