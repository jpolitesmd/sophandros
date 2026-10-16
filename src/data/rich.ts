export type RichPart = { em: boolean; text: string };

/** Split a string on *italics* markers. Content is authored, never user input. */
export function emphasis(line: string): RichPart[] {
  const out: RichPart[] = [];
  const re = /\*([^*]+)\*/g;
  let last = 0;
  for (const match of line.matchAll(re)) {
    const index = match.index ?? 0;
    if (index > last) out.push({ em: false, text: line.slice(last, index) });
    out.push({ em: true, text: match[1] ?? "" });
    last = index + match[0].length;
  }
  if (last < line.length) out.push({ em: false, text: line.slice(last) });
  if (out.length === 0) out.push({ em: false, text: line });
  return out;
}
